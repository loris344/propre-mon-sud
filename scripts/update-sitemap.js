#!/usr/bin/env node

/**
 * Script pour mettre à jour le sitemap dans le dossier dist
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_SITEMAP = path.join(__dirname, '../public/sitemap.xml');
const DEST_SITEMAP = path.join(__dirname, '../dist/sitemap.xml');

function updateSitemap() {
  console.log('🔄 Mise à jour du sitemap...');
  
  if (!fs.existsSync(SOURCE_SITEMAP)) {
    console.error('❌ Fichier sitemap source introuvable:', SOURCE_SITEMAP);
    process.exit(1);
  }
  
  // Créer le dossier dist s'il n'existe pas
  const distDir = path.dirname(DEST_SITEMAP);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  // Copier le sitemap
  fs.copyFileSync(SOURCE_SITEMAP, DEST_SITEMAP);
  console.log('✅ Sitemap mis à jour dans dist/');
}

updateSitemap();
