#!/usr/bin/env node

/**
 * Script pour ajouter facilement une nouvelle page au sitemap
 * Usage: node scripts/add-page-to-sitemap.js /nouvelle-page 0.8 monthly
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Récupérer les arguments
const [,, url, priority = '0.8', changefreq = 'monthly'] = process.argv;

if (!url) {
  console.log('❌ Usage: node scripts/add-page-to-sitemap.js /nouvelle-page [priority] [changefreq]');
  console.log('   Exemple: node scripts/add-page-to-sitemap.js /nettoyage-nouvelle-ville 0.9 monthly');
  process.exit(1);
}

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

if (!fs.existsSync(sitemapPath)) {
  console.log('❌ Erreur: sitemap.xml non trouvé dans public/');
  process.exit(1);
}

// Lire le sitemap
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Vérifier si l'URL existe déjà
if (sitemapContent.includes(`<loc>https://sosnettoyagediogene.fr${url}</loc>`)) {
  console.log(`⚠️  L'URL ${url} existe déjà dans le sitemap`);
  process.exit(0);
}

// Créer la nouvelle entrée
const today = new Date().toISOString().split('T')[0];
const newEntry = `  <url>
    <loc>https://sosnettoyagediogene.fr${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;

// Insérer avant la balise de fermeture </urlset>
sitemapContent = sitemapContent.replace('</urlset>', `${newEntry}</urlset>`);

// Écrire le sitemap mis à jour
fs.writeFileSync(sitemapPath, sitemapContent);

console.log(`✅ Page ${url} ajoutée au sitemap avec priorité ${priority} et fréquence ${changefreq}`);
console.log('💡 N\'oubliez pas de faire "npm run build" pour déployer les changements !');






