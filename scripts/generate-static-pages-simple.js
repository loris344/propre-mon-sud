#!/usr/bin/env node

/**
 * Script simplifié pour générer les pages statiques pour GitHub Pages
 * Remplace l'ancien script complexe par une approche simple
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://www.sosnettoyagediogene.fr';
const BUILD_DIR = path.join(__dirname, '../dist');

// Fonction pour détecter automatiquement les assets
function getAssets() {
  const assetsDir = path.join(BUILD_DIR, 'assets');
  if (!fs.existsSync(assetsDir)) {
    console.error('❌ Dossier assets non trouvé:', assetsDir);
    return {
      css: '/assets/style-C1Q8LmPZ.css',
      js: '/assets/index-cM5BUZph.js',
      vendor: '/assets/vendor-p2fE49VT.js',
      ui: '/assets/ui-Bwadxvvo.js',
      router: '/assets/router-XA8Cen7S.js'
    };
  }
  
  const files = fs.readdirSync(assetsDir);
  console.log('📁 Assets trouvés:', files);
  
  const cssFile = files.find(file => file.startsWith('style-') && file.endsWith('.css'));
  const jsFile = files.find(file => file.startsWith('index-') && file.endsWith('.js'));
  const vendorFile = files.find(file => file.startsWith('vendor-') && file.endsWith('.js'));
  const uiFile = files.find(file => file.startsWith('ui-') && file.endsWith('.js'));
  const routerFile = files.find(file => file.startsWith('router-') && file.endsWith('.js'));
  
  const assets = {
    css: cssFile ? `/assets/${cssFile}` : '/assets/style-C1Q8LmPZ.css',
    js: jsFile ? `/assets/${jsFile}` : '/assets/index-cM5BUZph.js',
    vendor: vendorFile ? `/assets/${vendorFile}` : '/assets/vendor-p2fE49VT.js',
    ui: uiFile ? `/assets/${uiFile}` : '/assets/ui-Bwadxvvo.js',
    router: routerFile ? `/assets/${routerFile}` : '/assets/router-XA8Cen7S.js'
  };
  
  console.log('🎯 Assets utilisés:', assets);
  return assets;
}

// Configuration des pages à générer
const pages = [
  {
    route: '/nettoyage-syndrome-diogene-montpellier',
    title: 'Nettoyage Syndrome de Diogène Montpellier | SOS Nettoyage Diogène',
    description: 'Intervention spécialisée et respectueuse pour les situations d\'accumulation compulsive. Notre équipe formée intervient avec discrétion et bienveillance à Montpellier et sa région.',
    keywords: 'nettoyage syndrome diogène, montpellier, intervention spécialisée, accumulation compulsive, nettoyage extrême, débarras, désinfection',
    city: 'montpellier'
  },
  {
    route: '/nettoyage-syndrome-diogene-sete',
    title: 'Nettoyage Syndrome de Diogène Sète | SOS Nettoyage Diogène',
    description: 'Intervention spécialisée et respectueuse pour les situations d\'accumulation compulsive à Sète. Notre équipe formée intervient avec discrétion et bienveillance dans l\'Hérault.',
    keywords: 'nettoyage syndrome diogène, sete, intervention spécialisée, accumulation compulsive, nettoyage extrême, débarras, désinfection, hérault',
    city: 'sete'
  },
  {
    route: '/nettoyage-syndrome-diogene-beziers',
    title: 'Nettoyage Syndrome de Diogène Béziers | SOS Nettoyage Diogène',
    description: 'Intervention spécialisée et respectueuse pour les situations d\'accumulation compulsive à Béziers. Notre équipe formée intervient avec discrétion et bienveillance dans l\'Hérault.',
    keywords: 'nettoyage syndrome diogène, beziers, intervention spécialisée, accumulation compulsive, nettoyage extrême, débarras, désinfection, hérault',
    city: 'beziers'
  },
  {
    route: '/nettoyage-syndrome-diogene-nimes',
    title: 'Nettoyage Syndrome de Diogène Nîmes | SOS Nettoyage Diogène',
    description: 'Intervention spécialisée et respectueuse pour les situations d\'accumulation compulsive à Nîmes. Notre équipe formée intervient avec discrétion et bienveillance dans le Gard.',
    keywords: 'nettoyage syndrome diogène, nimes, intervention spécialisée, accumulation compulsive, nettoyage extrême, débarras, désinfection, gard',
    city: 'nimes'
  },
  {
    route: '/nettoyage-syndrome-diogene-perpignan',
    title: 'Nettoyage Syndrome de Diogène Perpignan | SOS Nettoyage Diogène',
    description: 'Intervention spécialisée et respectueuse pour les situations d\'accumulation compulsive à Perpignan. Notre équipe formée intervient avec discrétion et bienveillance dans les Pyrénées-Orientales.',
    keywords: 'nettoyage syndrome diogène, perpignan, intervention spécialisée, accumulation compulsive, nettoyage extrême, débarras, désinfection, pyrenees orientales',
    city: 'perpignan'
  },
  {
    route: '/debarras-gros-volumes-montpellier',
    title: 'Débarras Gros Volumes Montpellier | Évacuation Professionnelle',
    description: 'Évacuation et tri de tous types d\'objets, meubles et déchets en respectant l\'environnement. Service professionnel pour particuliers et professionnels dans tout le Sud de la France.',
    keywords: 'débarras gros volumes, montpellier, évacuation déchets, tri sélectif, recyclage, nettoyage professionnel',
    city: 'montpellier'
  },
  {
    route: '/desinfection-insalubrite-montpellier',
    title: 'Désinfection & Insalubrité Montpellier | Traitement Professionnel',
    description: 'Traitement des environnements insalubres avec des produits professionnels et techniques adaptées. Intervention spécialisée pour restaurer un environnement sain et sécurisé.',
    keywords: 'désinfection, insalubrité, montpellier, traitement professionnel, nettoyage extrême, désinfection virale',
    city: 'montpellier'
  },
  {
    route: '/nettoyage-apres-deces-montpellier',
    title: 'Nettoyage Après Décès Montpellier | Service Respectueux et Discret',
    description: 'Service spécialisé de nettoyage et remise en état après décès à Montpellier. Intervention respectueuse, discrète et professionnelle avec protocoles sanitaires stricts. Devis gratuit. Tél: 07 67 13 54 58',
    keywords: 'nettoyage après décès, nettoyage décès montpellier, remise en état décès, nettoyage post décès, désinfection décès, nettoyage respectueux, montpellier, hérault',
    city: 'montpellier'
  },
  {
    route: '/nettoyage-apres-deces-nimes',
    title: 'Nettoyage Après Décès Nîmes | Service Respectueux et Discret',
    description: 'Service spécialisé de nettoyage et remise en état après décès à Nîmes. Intervention respectueuse, discrète et professionnelle avec protocoles sanitaires stricts. Devis gratuit. Tél: 07 67 13 54 58',
    keywords: 'nettoyage après décès, nettoyage décès nimes, remise en état décès, nettoyage post décès, désinfection décès, nettoyage respectueux, nimes, gard',
    city: 'nimes'
  },
  {
    route: '/nettoyage-insalubre-montpellier',
    title: 'Nettoyage Insalubre Montpellier | Traitement Professionnel',
    description: 'Service spécialisé de nettoyage et remise en état d\'environnements insalubres à Montpellier. Intervention professionnelle avec protocoles sanitaires stricts. Devis gratuit. Tél: 07 67 13 54 58',
    keywords: 'nettoyage insalubre, nettoyage insalubre montpellier, remise en état insalubre, nettoyage extrême, désinfection insalubre, traitement insalubrité, montpellier, hérault',
    city: 'montpellier'
  },
  {
    route: '/nettoyage-insalubre-nimes',
    title: 'Nettoyage Insalubre Nîmes | Traitement Professionnel',
    description: 'Service spécialisé de nettoyage et remise en état d\'environnements insalubres à Nîmes. Intervention professionnelle avec protocoles sanitaires stricts. Devis gratuit. Tél: 07 67 13 54 58',
    keywords: 'nettoyage insalubre, nettoyage insalubre nimes, remise en état insalubre, nettoyage extrême, désinfection insalubre, traitement insalubrité, nimes, gard',
    city: 'nimes'
  }
];

// Template HTML de base - utilise l'app React
const htmlTemplate = (page) => {
  const assets = getAssets();
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="${page.keywords}" />
    <meta name="author" content="SOS Nettoyage Diogène - Nettoyage Professionnel" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow" />
    <meta name="bingbot" content="index, follow" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${SITE_URL}${page.route}" />
    
    <!-- Language and Geo Tags -->
    <meta name="language" content="fr" />
    <meta name="geo.region" content="FR-34" />
    <meta name="geo.placename" content="Montpellier" />
    <meta name="geo.position" content="43.611;3.8767" />
    <meta name="ICBM" content="43.611, 3.8767" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${SITE_URL}${page.route}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:image" content="${SITE_URL}/p1.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Intervention nettoyage syndrome de Diogène à ${page.city}" />
    <meta property="og:site_name" content="SOS Nettoyage Diogène" />
    <meta property="og:locale" content="fr_FR" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${SITE_URL}${page.route}" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${SITE_URL}/p1.png" />
    <meta name="twitter:image:alt" content="Intervention nettoyage syndrome de Diogène à ${page.city}" />
    
    <!-- Business/Local SEO -->
    <meta name="business:contact_data:phone_number" content="+33767135458" />
    <meta name="business:contact_data:country_name" content="France" />
    <meta name="business:contact_data:locality" content="Montpellier" />
    <meta name="business:contact_data:region" content="Hérault" />
    
    <!-- Additional SEO -->
    <meta name="theme-color" content="#1e40af" />
    <meta name="msapplication-TileColor" content="#1e40af" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="SOS Nettoyage Diogène" />
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    
    <!-- DNS Prefetch for external resources -->
    <link rel="dns-prefetch" href="//www.google-analytics.com" />
    <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VDZL4FT7QQ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VDZL4FT7QQ');
    </script>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    
    <!-- CSS et JS de l'application React -->
    <link rel="stylesheet" crossorigin href="${assets.css}" />
    <script type="module" crossorigin src="${assets.js}"></script>
    <link rel="modulepreload" crossorigin href="${assets.vendor}">
    <link rel="modulepreload" crossorigin href="${assets.ui}">
    <link rel="modulepreload" crossorigin href="${assets.router}">
  </head>

  <body>
    <div id="root"></div>
    
    <!-- Script de redirection pour GitHub Pages -->
    <script>
      // Gestion de la redirection depuis 404.html pour le routage côté client
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
  </body>
</html>`;
};

// Fonction pour créer les dossiers nécessaires
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Fonction pour générer les pages statiques
function generateStaticPages() {
  ensureDirectoryExists(BUILD_DIR);
  
  console.log('🚀 Génération des pages statiques pour GitHub Pages...');
  
  pages.forEach(page => {
    const routePath = page.route.slice(1); // Enlever le slash initial
    const pageDir = path.join(BUILD_DIR, routePath);
    
    // Créer le dossier pour la route
    ensureDirectoryExists(pageDir);
    
    // Générer le fichier index.html pour cette route
    const htmlContent = htmlTemplate(page);
    const indexPath = path.join(pageDir, 'index.html');
    
    fs.writeFileSync(indexPath, htmlContent, 'utf8');
    
    console.log(`✅ Page générée: ${page.route} -> ${indexPath}`);
  });
  
  console.log(`🎉 ${pages.length} pages statiques générées avec succès !`);
}

// Exécuter la génération
generateStaticPages();
