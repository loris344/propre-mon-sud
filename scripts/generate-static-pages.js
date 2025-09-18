import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fonction pour détecter automatiquement les assets
function getAssets() {
  const assetsDir = path.join(__dirname, '../dist/assets');
  const files = fs.readdirSync(assetsDir);
  
  const cssFile = files.find(file => file.startsWith('index-') && file.endsWith('.css'));
  const jsFile = files.find(file => file.startsWith('index-') && file.endsWith('.js'));
  const vendorFile = files.find(file => file.startsWith('vendor-') && file.endsWith('.js'));
  const uiFile = files.find(file => file.startsWith('ui-') && file.endsWith('.js'));
  
  return {
    css: cssFile ? `/assets/${cssFile}` : '/assets/index-CuWdLtSX.css',
    js: jsFile ? `/assets/${jsFile}` : '/assets/index-CLrQbLfy.js',
    vendor: vendorFile ? `/assets/${vendorFile}` : '/assets/vendor-C6lW22JT.js',
    ui: uiFile ? `/assets/${uiFile}` : '/assets/ui-B9ycnt8Y.js'
  };
}

// Configuration des images par ville
const cityImages = {
  montpellier: {
    hero: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop&crop=center",
    ogImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop&crop=center"
  },
  sete: {
    hero: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630&fit=crop&crop=center",
    ogImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630&fit=crop&crop=center"
  },
  beziers: {
    hero: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&h=630&fit=crop&crop=center",
    ogImage: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&h=630&fit=crop&crop=center"
  },
  nimes: {
    hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop&crop=center",
    ogImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop&crop=center"
  },
  perpignan: {
    hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&crop=center",
    ogImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&crop=center"
  }
};

// Fonction pour extraire la ville depuis l'URL
function extractCityFromUrl(url) {
  const cityMatch = url.match(/(?:nettoyage-syndrome-diogene-|debarras-gros-volumes-|desinfection-insalubrite-)(.+)/);
  return cityMatch ? cityMatch[1] : 'montpellier';
}

// Configuration des pages statiques à générer
const staticPages = [
  {
    route: '/nettoyage-syndrome-diogene-montpellier',
    title: 'Nettoyage Syndrome de Diogène Montpellier | SOS Nettoyage Diogène',
    description: 'Intervention spécialisée et respectueuse pour les situations d\'accumulation compulsive. Notre équipe formée intervient avec discrétion et bienveillance à Montpellier et sa région.',
    keywords: 'nettoyage syndrome diogène, montpellier, intervention spécialisée, accumulation compulsive, nettoyage extrême, débarras, désinfection',
    content: 'ServiceDiogene',
    city: 'montpellier'
  },
  {
    route: '/debarras-gros-volumes-montpellier',
    title: 'Débarras Gros Volumes Montpellier | Évacuation Professionnelle',
    description: 'Évacuation et tri de tous types d\'objets, meubles et déchets en respectant l\'environnement. Service professionnel pour particuliers et professionnels dans tout le Sud de la France.',
    keywords: 'débarras gros volumes, montpellier, évacuation déchets, tri sélectif, recyclage, nettoyage professionnel',
    content: 'ServiceDebarras',
    city: 'montpellier'
  },
  {
    route: '/desinfection-insalubrite-montpellier',
    title: 'Désinfection & Insalubrité Montpellier | Traitement Professionnel',
    description: 'Traitement des environnements insalubres avec des produits professionnels et techniques adaptées. Intervention spécialisée pour restaurer un environnement sain et sécurisé.',
    keywords: 'désinfection, insalubrité, montpellier, traitement professionnel, nettoyage extrême, désinfection virale',
    content: 'ServiceDesinfection',
    city: 'montpellier'
  },
  // Pages géographiques pour SEO local
  {
    route: '/nettoyage-syndrome-diogene-sete',
    title: 'Nettoyage Syndrome de Diogène Sète | SOS Nettoyage Diogène',
    description: 'Intervention spécialisée et respectueuse pour les situations d\'accumulation compulsive à Sète. Notre équipe formée intervient avec discrétion et bienveillance dans l\'Hérault.',
    keywords: 'nettoyage syndrome diogène, sete, intervention spécialisée, accumulation compulsive, nettoyage extrême, débarras, désinfection, hérault',
    content: 'ServiceDiogene',
    city: 'sete'
  },
  {
    route: '/nettoyage-syndrome-diogene-beziers',
    title: 'Nettoyage Syndrome de Diogène Béziers | SOS Nettoyage Diogène',
    description: 'Intervention spécialisée et respectueuse pour les situations d\'accumulation compulsive à Béziers. Notre équipe formée intervient avec discrétion et bienveillance dans l\'Hérault.',
    keywords: 'nettoyage syndrome diogène, beziers, intervention spécialisée, accumulation compulsive, nettoyage extrême, débarras, désinfection, hérault',
    content: 'ServiceDiogene',
    city: 'beziers'
  },
  {
    route: '/nettoyage-syndrome-diogene-nimes',
    title: 'Nettoyage Syndrome de Diogène Nîmes | SOS Nettoyage Diogène',
    description: 'Intervention spécialisée et respectueuse pour les situations d\'accumulation compulsive à Nîmes. Notre équipe formée intervient avec discrétion et bienveillance dans le Gard.',
    keywords: 'nettoyage syndrome diogène, nimes, intervention spécialisée, accumulation compulsive, nettoyage extrême, débarras, désinfection, gard',
    content: 'ServiceDiogene',
    city: 'nimes'
  },
  {
    route: '/nettoyage-syndrome-diogene-perpignan',
    title: 'Nettoyage Syndrome de Diogène Perpignan | SOS Nettoyage Diogène',
    description: 'Intervention spécialisée et respectueuse pour les situations d\'accumulation compulsive à Perpignan. Notre équipe formée intervient avec discrétion et bienveillance dans les Pyrénées-Orientales.',
    keywords: 'nettoyage syndrome diogène, perpignan, intervention spécialisée, accumulation compulsive, nettoyage extrême, débarras, désinfection, pyrenees orientales',
    content: 'ServiceDiogene',
    city: 'perpignan'
  }
];

// Template HTML de base
const htmlTemplate = (page) => {
  const assets = getAssets();
  const cityImage = cityImages[page.city] || cityImages.montpellier;
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
    <link rel="canonical" href="https://sosnettoyagediogene.fr${page.route}" />
    
    <!-- Language and Geo Tags -->
    <meta name="language" content="fr" />
    <meta name="geo.region" content="FR-34" />
    <meta name="geo.placename" content="Montpellier" />
    <meta name="geo.position" content="43.611;3.8767" />
    <meta name="ICBM" content="43.611, 3.8767" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://sosnettoyagediogene.fr${page.route}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:image" content="${cityImage.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Intervention nettoyage syndrome de Diogène à ${page.city}" />
    <meta property="og:site_name" content="SOS Nettoyage Diogène" />
    <meta property="og:locale" content="fr_FR" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://sosnettoyagediogene.fr${page.route}" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${cityImage.ogImage}" />
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
    
    <!-- Resource hints -->
    <link rel="preload" href="${cityImage.hero}" as="image" type="image/jpeg" />
    
    <!-- Performance optimizations -->
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    
    <!-- Structured Data JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SOS Nettoyage Diogène",
      "alternateName": "SOS Nettoyage Diogène Montpellier",
      "description": "${page.description}",
      "url": "https://sosnettoyagediogene.fr${page.route}",
      "telephone": "+33767135458",
      "email": "contact@sosnettoyagediogene.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montpellier",
        "addressRegion": "Hérault",
        "addressCountry": "FR",
        "postalCode": "34000"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.611",
        "longitude": "3.8767"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Montpellier"
        },
        {
          "@type": "City", 
          "name": "Sète"
        },
        {
          "@type": "City",
          "name": "Béziers"
        },
        {
          "@type": "City",
          "name": "Nîmes"
        },
        {
          "@type": "City",
          "name": "Perpignan"
        }
      ],
      "serviceType": [
        "Nettoyage Syndrome de Diogène",
        "Débarras Gros Volumes", 
        "Désinfection et Insalubrité",
        "Nettoyage Extrême",
        "Évacuation Déchets"
      ],
      "openingHours": "Mo-Su 08:00-20:00",
      "priceRange": "€€",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "currenciesAccepted": "EUR",
      "sameAs": [
        "https://www.facebook.com/propremonsud",
        "https://www.linkedin.com/company/propre-mon-sud"
      ],
      "image": "${cityImage.ogImage}",
      "logo": "https://sosnettoyagediogene.fr/logo.png"
    }
    </script>
    
    <!-- CSS identique à l'application React -->
    <link rel="stylesheet" crossorigin href="${assets.css}" />
    <script type="module" crossorigin src="${assets.js}"></script>
    <link rel="modulepreload" crossorigin href="${assets.vendor}">
    <link rel="modulepreload" crossorigin href="${assets.ui}">
    <style>
      /* Styles de base pour la cohérence */
      body { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        min-height: 100vh;
      }
    </style>
  </head>

  <body>
    <div id="root"></div>
    
    <!-- Script pour l'application React -->
    <script>
      // L'application React va prendre le relais
      console.log('Page statique chargée pour ${page.route}');
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
  const distPath = path.join(__dirname, '..', 'dist');
  ensureDirectoryExists(distPath);
  
  console.log('🚀 Génération des pages statiques pour le SEO...');
  
  staticPages.forEach(page => {
    const routePath = page.route.slice(1); // Enlever le slash initial
    const pageDir = path.join(distPath, routePath);
    
    // Créer le dossier pour la route
    ensureDirectoryExists(pageDir);
    
    // Générer le fichier index.html pour cette route
    const htmlContent = htmlTemplate(page);
    const indexPath = path.join(pageDir, 'index.html');
    
    fs.writeFileSync(indexPath, htmlContent, 'utf8');
    
    console.log(`✅ Page générée: ${page.route} -> ${indexPath}`);
  });
  
  console.log(`🎉 ${staticPages.length} pages statiques générées avec succès !`);
  console.log('📋 Pages créées:');
  staticPages.forEach(page => {
    console.log(`   - ${page.route}`);
  });
}

// Exécuter la génération
generateStaticPages();
