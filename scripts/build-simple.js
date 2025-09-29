#!/usr/bin/env node

/**
 * Script de build simplifié pour Propre Mon Sud
 * Remplace les anciens scripts complexes par une approche simple
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://sosnettoyagediogene.fr';
const BUILD_DIR = path.join(__dirname, '../dist');

// Copie du sitemap depuis public/ vers dist/ avec mise à jour des dates
function copySitemap() {
  const publicSitemap = path.join(__dirname, '../public/sitemap.xml');
  const distSitemap = path.join(BUILD_DIR, 'sitemap.xml');
  
  if (fs.existsSync(publicSitemap)) {
    // Mettre à jour la date de dernière modification
    let sitemapContent = fs.readFileSync(publicSitemap, 'utf8');
    const today = new Date().toISOString().split('T')[0];
    
    // Remplacer toutes les dates lastmod par la date d'aujourd'hui
    sitemapContent = sitemapContent.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
    
    fs.writeFileSync(distSitemap, sitemapContent);
    return true;
  }
  return false;
}

// Génération du robots.txt
function generateRobotsTxt() {
  return `# Robots.txt pour SOS Nettoyage Diogène
# https://www.robotstxt.org/robotstxt.html

User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay pour éviter la surcharge
Crawl-delay: 1

# Autoriser les moteurs de recherche principaux
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 0

User-agent: YandexBot
Allow: /
Crawl-delay: 0

# Bloquer les bots indésirables
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MajesticSEO
Disallow: /

# Bloquer l'accès aux fichiers techniques
Disallow: /assets/
Disallow: /*.json$
Disallow: /*.js$
Disallow: /*.css$
`;
}

// Génération du llms.txt
function generateLlmsTxt() {
  return `# SOS Nettoyage Diogène

> Société spécialisée dans le nettoyage et débarras syndrome de Diogène, insalubrité et gros volumes. Intervention discrète, professionnelle et respectueuse dans le Sud de la France. Disponible 7j/7 pour des interventions d'urgence.

## Services Principaux

- **Nettoyage Syndrome de Diogène** : Intervention spécialisée et respectueuse pour les situations d'accumulation compulsive avec respect et discrétion totale.

- **Débarras Gros Volumes** : Évacuation et tri de tous types d'objets, meubles et déchets en respectant l'environnement.

- **Désinfection & Insalubrité** : Traitement des environnements insalubres avec des produits professionnels et techniques adaptées.

- **Nettoyage Après Décès** : Service spécialisé de nettoyage et remise en état après décès. Intervention respectueuse, discrète et professionnelle.

- **Nettoyage Insalubre** : Service spécialisé de nettoyage et remise en état d'environnements insalubres avec protocoles professionnels.

## Informations de Contact

- **Téléphone** : 07 67 13 54 58
- **Email** : contact@sosnettoyagediogene.fr
- **Disponibilité** : 7j/7 de 8h00 à 20h00
- **Urgences** : Intervention rapide acceptée en soirée

## Zone d'Intervention

Intervention dans tout le Sud de la France :
- **Occitanie** : Montpellier, Sète, Béziers, Nîmes, Perpignan
- **PACA** : Marseille, Nice, Aix-en-Provence, Toulon, Avignon
- **Nouvelle-Aquitaine** : Bordeaux

## Avantages et Garanties

- **Discrétion totale** : Confidentialité et respect absolu de la vie privée
- **Équipe experte** : Professionnels formés et équipés
- **Disponibilité 7j/7** : Intervention rapide et flexible
- **Assurance complète** : Intervention sécurisée et assurée
- **Devis gratuit** : Évaluation gratuite et sans engagement

---

*SOS Nettoyage Diogène - Votre partenaire de confiance pour des interventions discrètes et professionnelles*`;
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
    console.log('✅ Sitemap copié et mis à jour');
  } else {
    console.log('❌ Erreur: sitemap.xml non trouvé dans public/');
  }
  
  // Générer le robots.txt
  const robotsTxt = generateRobotsTxt();
  fs.writeFileSync(path.join(BUILD_DIR, 'robots.txt'), robotsTxt);
  console.log('✅ Robots.txt généré');
  
  // Générer le llms.txt
  const llmsTxt = generateLlmsTxt();
  fs.writeFileSync(path.join(BUILD_DIR, 'llms.txt'), llmsTxt);
  console.log('✅ llms.txt généré');
  
  // Nettoyer les images dupliquées copiées par Vite
  const duplicateDirs = ['cities', 'examples', 'logos', 'services'];
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
}).catch(err => {
  console.error('❌ Erreur génération pages statiques:', err);
});
