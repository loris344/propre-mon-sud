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

// Copie du sitemap depuis public/ vers dist/ sans réécriture automatique
function copySitemap() {
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
function build() {
  console.log('🚀 Build simplifié de SOS Nettoyage Diogène...');
  
  // Créer le dossier dist s'il n'existe pas
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }
  
  // Copier le sitemap depuis public/ vers dist/
  if (copySitemap()) {
    console.log('✅ Sitemap copié depuis public/');
  } else {
    console.log('❌ Erreur: sitemap.xml non trouvé dans public/');
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
build();

// Générer les pages statiques avec meta tags
import('./generate-static-pages.js').then(() => {
  console.log('✅ Pages statiques générées');
  verifySeoOutput();
}).catch(err => {
  console.error('❌ Erreur génération pages statiques:', err);
  process.exit(1);
});
