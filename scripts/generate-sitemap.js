import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration du site
const SITE_URL = 'https://sosnettoyagediogene.fr';
const BUILD_DIR = path.join(__dirname, '../dist');

// Pages principales - TOUTES LES PAGES EXISTANTES
const pages = [
  {
    url: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: '/nettoyage-syndrome-diogene-montpellier',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/debarras-gros-volumes-montpellier',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/desinfection-insalubrite-montpellier',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.9'
  },
  // Pages géographiques pour SEO local
  {
    url: '/nettoyage-syndrome-diogene-sete',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/nettoyage-syndrome-diogene-beziers',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/nettoyage-syndrome-diogene-nimes',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/nettoyage-syndrome-diogene-perpignan',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  }
];

// Génération du XML sitemap
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  pages.forEach(page => {
    sitemap += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Écriture du sitemap
const sitemap = generateSitemap();
const sitemapPath = path.join(BUILD_DIR, 'sitemap.xml');

// Créer le dossier dist s'il n'existe pas
if (!fs.existsSync(BUILD_DIR)) {
  fs.mkdirSync(BUILD_DIR, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap généré:', sitemapPath);

// Génération du robots.txt
const robotsTxt = `# Robots.txt pour SOS Nettoyage Diogène
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

User-agent: Slurp
Allow: /
Crawl-delay: 1

# Bloquer les bots indésirables
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Autoriser l'indexation des ressources importantes
Allow: /hero-cleaning.jpg
Allow: /favicon.ico
Allow: /robots.txt
Allow: /sitemap.xml
`;

const robotsPath = path.join(BUILD_DIR, 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt);
console.log('✅ Robots.txt généré:', robotsPath);
