#!/usr/bin/env node

/**
 * Script de build simplifié pour Propre Mon Sud
 * Remplace les anciens scripts complexes par une approche simple
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { verifySeoOutput } from './verify-seo-output.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BUILD_DIR = path.join(__dirname, '../dist');

// Régénère le sitemap depuis pagesMeta (source unique de vérité) puis copie vers dist.
async function regenerateSitemap() {
  await import('./update-sitemap.js');
  const publicSitemap = path.join(__dirname, '../public/sitemap.xml');
  const distSitemap = path.join(BUILD_DIR, 'sitemap.xml');
  if (fs.existsSync(publicSitemap)) {
    fs.copyFileSync(publicSitemap, distSitemap);
    return true;
  }
  return false;
}

// Copie du robots.txt source vers dist/ sans le réécrire dans le script
function copyRobotsTxt() {
  const publicRobots = path.join(__dirname, '../public/robots.txt');
  const distRobots = path.join(BUILD_DIR, 'robots.txt');

  if (fs.existsSync(publicRobots)) {
    fs.copyFileSync(publicRobots, distRobots);
    return true;
  }

  return false;
}

function copyLlmsTxt() {
  const publicLlms = path.join(__dirname, '../public/llms.txt');
  const distLlms = path.join(BUILD_DIR, 'llms.txt');

  if (fs.existsSync(publicLlms)) {
    fs.copyFileSync(publicLlms, distLlms);
    return true;
  }

  return false;
}

// Fonction principale
async function build() {
  console.log('🚀 Build simplifié de SOS Nettoyage Diogène & Débarras...');
  
  // Créer le dossier dist s'il n'existe pas
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }
  
  // Régénérer le sitemap depuis pagesMeta puis copier
  if (await regenerateSitemap()) {
    console.log('✅ Sitemap régénéré et copié dans dist/');
  } else {
    console.log('❌ Erreur: sitemap.xml introuvable après génération');
  }
  
  // Copier le robots.txt depuis public/ vers dist/ pour éviter toute divergence entre le repo et la version publiée
  if (copyRobotsTxt()) {
    console.log('✅ Robots.txt copié depuis public/');
  } else {
    console.log('❌ Erreur: robots.txt non trouvé dans public/');
  }
  
  // Copier le llms.txt depuis public/ pour éviter toute divergence entre le repo et la version publiée
  if (copyLlmsTxt()) {
    console.log('✅ llms.txt copié depuis public/');
  } else {
    console.log('❌ Erreur: llms.txt non trouvé dans public/');
  }
  
  // Nettoyer les images dupliquées copiées par Vite
  const duplicateDirs = ['cities', 'examples', 'services'];
  duplicateDirs.forEach(dir => {
    const dirPath = path.join(BUILD_DIR, dir);
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true, force: true });
    }
  });
  console.log('✅ Images dupliquées nettoyées');
  
  console.log('🎉 Build terminé avec succès !');
}

// Exécuter le build
build().then(async () => {
  const indexPath = path.join(BUILD_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.log('ℹ️ Pages statiques ignorées: dist/index.html absent');
    return;
  }
  const mod = await import('./generate-static-pages.js');
  if (typeof mod.generateStaticPages === 'function') {
    mod.generateStaticPages();
  }
  console.log('✅ Pages statiques générées');
  verifySeoOutput();
}).catch(err => {
  console.error('❌ Erreur build:', err);
  process.exit(1);
});
