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

// Génération du sitemap simplifié
function generateSitemap() {
  const pages = [
    // Pages principales
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    
    // Nouvelles pages complètes
    { url: '/debarras-gros-volumes', priority: '0.9', changefreq: 'monthly' },
    { url: '/nettoyage-apres-deces', priority: '0.9', changefreq: 'monthly' },
    { url: '/desinfection-insalubrite', priority: '0.9', changefreq: 'monthly' },
    
    // Blog et articles
    { url: '/blog', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog/syndrome-diogene-identifier-gerer', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/debarras-apres-deces-accompagnement', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/desinfection-assainissement-protocoles', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/prevention-insalubrite-conseils', priority: '0.8', changefreq: 'monthly' },
    
    // Services par ville
    { url: '/nettoyage-syndrome-diogene-montpellier', priority: '0.9', changefreq: 'monthly' },
    { url: '/nettoyage-syndrome-diogene-sete', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-syndrome-diogene-beziers', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-syndrome-diogene-nimes', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-syndrome-diogene-perpignan', priority: '0.8', changefreq: 'monthly' },
    { url: '/debarras-gros-volumes-montpellier', priority: '0.9', changefreq: 'monthly' },
    { url: '/desinfection-insalubrite-montpellier', priority: '0.9', changefreq: 'monthly' },
    { url: '/nettoyage-apres-deces-montpellier', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-apres-deces-nimes', priority: '0.7', changefreq: 'monthly' },
    { url: '/nettoyage-insalubre-montpellier', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-insalubre-nimes', priority: '0.7', changefreq: 'monthly' },
    { url: '/partenariat-maisons-retraite', priority: '0.6', changefreq: 'monthly' }
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  pages.forEach(page => {
    sitemap += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>2025-01-21</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
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
  
  // Générer le sitemap
  const sitemap = generateSitemap();
  fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap généré');
  
  // Générer le robots.txt
  const robotsTxt = generateRobotsTxt();
  fs.writeFileSync(path.join(BUILD_DIR, 'robots.txt'), robotsTxt);
  console.log('✅ Robots.txt généré');
  
  // Générer le llms.txt
  const llmsTxt = generateLlmsTxt();
  fs.writeFileSync(path.join(BUILD_DIR, 'llms.txt'), llmsTxt);
  console.log('✅ llms.txt généré');
  
  console.log('🎉 Build terminé avec succès !');
}

// Exécuter le build
build();
