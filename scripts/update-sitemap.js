#!/usr/bin/env node

/**
 * Source unique de vérité du sitemap.
 *
 * Génère public/sitemap.xml (et copie vers dist/sitemap.xml s'il existe)
 * à partir de `pagesMeta` exporté par scripts/generate-static-pages.js.
 *
 * Règle: toute page ajoutée/supprimée dans `pagesMeta` est automatiquement
 * répercutée dans le sitemap. Pages avec `noIndex: true` ou route `/404`
 * sont exclues.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pagesMeta } from './generate-static-pages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://sosnettoyagediogene.fr';
const PUBLIC_SITEMAP = path.join(__dirname, '../public/sitemap.xml');
const DIST_SITEMAP = path.join(__dirname, '../dist/sitemap.xml');

// Priorité et fréquence par défaut, ajustables par route si besoin
const ROUTE_CONFIG = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/blog': { changefreq: 'weekly', priority: '0.8' },
};
const DEFAULT_CONFIG = { changefreq: 'monthly', priority: '0.7' };

function buildSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const routes = Object.entries(pagesMeta)
    .filter(([route, meta]) => !meta.noIndex && route !== '/404')
    .map(([route]) => route);

  const urls = routes
    .map((route) => {
      const cfg = ROUTE_CONFIG[route] || DEFAULT_CONFIG;
      return [
        '  <url>',
        `    <loc>${SITE_URL}${route === '/' ? '' : route}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${cfg.changefreq}</changefreq>`,
        `    <priority>${cfg.priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function writeSitemap() {
  console.log('🔄 Génération du sitemap depuis pagesMeta...');
  const xml = buildSitemap();

  fs.writeFileSync(PUBLIC_SITEMAP, xml);
  console.log(`✅ public/sitemap.xml écrit (${xml.match(/<url>/g)?.length || 0} URLs)`);

  const distDir = path.dirname(DIST_SITEMAP);
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(DIST_SITEMAP, xml);
    console.log('✅ dist/sitemap.xml écrit');
  }
}

writeSitemap();
