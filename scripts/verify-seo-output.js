#!/usr/bin/env node

/**
 * Vérifie les fichiers SEO réellement publiés dans dist/.
 * Le build doit échouer si robots.txt rebloque les fichiers nécessaires à Google.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BUILD_DIR = path.join(__dirname, '../dist');
const PUBLIC_DIR = path.join(__dirname, '../public');
const SRC_DIR = path.join(__dirname, '../src');
const SITE_URL = 'https://sosnettoyagediogene.fr';

const forbiddenRobotsRules = [
  { label: '/assets/', pattern: /^\s*Disallow:\s*\/assets\/?\s*$/im },
  { label: '/js/', pattern: /^\s*Disallow:\s*\/js\/?\s*$/im },
  { label: '/css/', pattern: /^\s*Disallow:\s*\/css\/?\s*$/im },
  { label: '/images/', pattern: /^\s*Disallow:\s*\/images\/?\s*$/im },
  { label: '*.js', pattern: /^\s*Disallow:\s*\/\*\.js\$?\s*$/im },
  { label: '*.css', pattern: /^\s*Disallow:\s*\/\*\.css\$?\s*$/im },
  { label: '*.json', pattern: /^\s*Disallow:\s*\/\*\.json\$?\s*$/im },
];

function fail(message) {
  console.error(`❌ Vérification SEO échouée: ${message}`);
  process.exit(1);
}

function routeToIndexPath(route) {
  return route === '/' ? path.join(BUILD_DIR, 'index.html') : path.join(BUILD_DIR, route.slice(1), 'index.html');
}

function extractSitemapRoutes(sitemap) {
  return [...sitemap.matchAll(/<loc>(https:\/\/sosnettoyagediogene\.fr[^<]*)<\/loc>/g)].map((match) => {
    const url = new URL(match[1]);
    return url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '');
  });
}

function extractStaticPublicRoutes() {
  const appPath = path.join(SRC_DIR, 'App.tsx');
  const app = fs.readFileSync(appPath, 'utf8');

  return [...app.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((route) => route.startsWith('/'))
    .filter((route) => !route.includes(':'))
    .filter((route) => !route.includes('*'))
    .filter((route) => !route.startsWith('/admin'))
    .filter((route) => !route.startsWith('/landing'))
    .filter((route) => !['/protocole-sanitaire', '/notaires-succession'].includes(route));
}

function listHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) listHtmlFiles(fullPath, files);
    if (entry.isFile() && entry.name.endsWith('.html')) files.push(fullPath);
  }

  return files;
}

export function verifySeoOutput() {
  const robotsPath = path.join(BUILD_DIR, 'robots.txt');
  const sourceRobotsPath = path.join(PUBLIC_DIR, 'robots.txt');
  const sitemapPath = path.join(BUILD_DIR, 'sitemap.xml');
  const sourceSitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  const llmsPath = path.join(BUILD_DIR, 'llms.txt');
  const sourceLlmsPath = path.join(PUBLIC_DIR, 'llms.txt');
  const indexPath = path.join(BUILD_DIR, 'index.html');

  if (!fs.existsSync(sourceRobotsPath)) fail('public/robots.txt est absent');
  if (!fs.existsSync(sourceSitemapPath)) fail('public/sitemap.xml est absent');
  if (!fs.existsSync(sourceLlmsPath)) fail('public/llms.txt est absent');
  if (!fs.existsSync(robotsPath)) fail('dist/robots.txt est absent');
  if (!fs.existsSync(sitemapPath)) fail('dist/sitemap.xml est absent');
  if (!fs.existsSync(llmsPath)) fail('dist/llms.txt est absent');
  if (!fs.existsSync(indexPath)) fail('dist/index.html est absent');

  const sourceRobots = fs.readFileSync(sourceRobotsPath, 'utf8');
  const robots = fs.readFileSync(robotsPath, 'utf8');
  const sourceSitemap = fs.readFileSync(sourceSitemapPath, 'utf8');
  const builtSitemap = fs.readFileSync(sitemapPath, 'utf8');
  const sourceLlms = fs.readFileSync(sourceLlmsPath, 'utf8');
  const builtLlms = fs.readFileSync(llmsPath, 'utf8');

  if (robots.trim() !== sourceRobots.trim()) {
    fail('dist/robots.txt diffère de public/robots.txt');
  }

  if (builtSitemap.trim() !== sourceSitemap.trim()) {
    fail('dist/sitemap.xml diffère de public/sitemap.xml');
  }

  if (builtLlms.trim() !== sourceLlms.trim()) {
    fail('dist/llms.txt diffère de public/llms.txt');
  }

  const forbidden = forbiddenRobotsRules.filter((rule) => rule.pattern.test(robots));

  if (forbidden.length > 0) {
    fail(`robots.txt bloque encore des ressources techniques: ${forbidden.map((rule) => rule.label).join(', ')}`);
  }

  if (!/Sitemap:\s*https:\/\/sosnettoyagediogene\.fr\/sitemap\.xml/i.test(robots)) {
    fail('robots.txt ne déclare pas le sitemap du domaine principal');
  }

  const sitemap = builtSitemap;
  const sitemapRoutes = extractSitemapRoutes(sitemap);
  const sitemapRouteSet = new Set(sitemapRoutes);
  const staticPublicRoutes = extractStaticPublicRoutes();

  for (const route of staticPublicRoutes) {
    if (!sitemapRouteSet.has(route)) {
      fail(`route publique absente du sitemap: ${route}`);
    }
  }

  for (const route of sitemapRoutes) {
    const pagePath = routeToIndexPath(route);
    if (!fs.existsSync(pagePath)) {
      fail(`URL du sitemap sans page statique générée: ${SITE_URL}${route}`);
    }

    const html = fs.readFileSync(pagePath, 'utf8');
    if (/name="robots"\s+content="noindex/i.test(html)) {
      fail(`URL du sitemap marquée noindex: ${SITE_URL}${route}`);
    }
  }

  for (const htmlPath of listHtmlFiles(BUILD_DIR)) {
    if (path.relative(BUILD_DIR, htmlPath) === '404.html') continue;

    const html = fs.readFileSync(htmlPath, 'utf8');
    if (/name="robots"\s+content="noindex/i.test(html)) continue;

    const canonical = html.match(/<link\s+rel="canonical"\s+href="(https:\/\/sosnettoyagediogene\.fr[^"]+)"/i)?.[1];
    if (!canonical) fail(`page indexable sans canonical: ${path.relative(BUILD_DIR, htmlPath)}`);

    const route = new URL(canonical).pathname === '/' ? '/' : new URL(canonical).pathname.replace(/\/$/, '');
    if (!sitemapRouteSet.has(route)) {
      fail(`page indexable absente du sitemap: ${canonical}`);
    }
  }

  console.log('✅ Vérification SEO OK: robots, sitemap et pages statiques cohérents');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  verifySeoOutput();
}