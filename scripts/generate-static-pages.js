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
    hero: "https://images.unsplash.com/photo-1613283850334-9219c5fb7143?w=1200&h=630&fit=crop&crop=center",
    ogImage: "https://images.unsplash.com/photo-1613283850334-9219c5fb7143?w=1200&h=630&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1613283850334-9219c5fb7143?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udHBlbGxpZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1608728212004-04441ea6e3cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9udHBlbGxpZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1690132007585-1ef4b16f49d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9udHBlbGxpZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1666886677737-2cd1f108e080?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9udHBlbGxpZXJ8ZW58MHx8MHx8fDA%3D"
    ]
  },
  sete: {
    hero: "https://images.unsplash.com/photo-1646676125144-cad4fcea488c?w=1200&h=630&fit=crop&crop=center",
    ogImage: "https://images.unsplash.com/photo-1646676125144-cad4fcea488c?w=1200&h=630&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1646676125144-cad4fcea488c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UyVDMyVBOHRlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1683791886181-68f3a1d1a7c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFMlQzMlQTh0ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1683791885269-6c1a78ae97fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UyVDMyVBOHRlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1541493304174-39545bc85815?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  beziers: {
    hero: "https://images.unsplash.com/photo-1723911490474-f9d1ce7a057a?w=1200&h=630&fit=crop&crop=center",
    ogImage: "https://images.unsplash.com/photo-1723911490474-f9d1ce7a057a?w=1200&h=630&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1723911490474-f9d1ce7a057a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YiVDMyVBOXppZXJzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1596812069451-ccca1e62b66d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YiVDMyVBOXppZXJzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1723911489123-64c6490e7818?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGIlQzMlQTl6aWVyc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1709483068799-a5b790cc5dc8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGIlQzMlQTl6aWVyc3xlbnwwfHwwfHx8MA%3D%3D"
    ]
  },
  nimes: {
    hero: "https://images.unsplash.com/photo-1702174653587-c5e10d5a2aa3?w=1200&h=630&fit=crop&crop=center",
    ogImage: "https://images.unsplash.com/photo-1702174653587-c5e10d5a2aa3?w=1200&h=630&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1702174653587-c5e10d5a2aa3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmltZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1729086871923-36fee2e2f9f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TmltZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1706233674922-febe573ad52f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmltZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1627376086893-4908c2692389?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmltZXN8ZW58MHx8MHx8fDA%3D"
    ]
  },
  perpignan: {
    hero: "https://images.unsplash.com/photo-1722605266573-e981c2ffed30?w=1200&h=630&fit=crop&crop=center",
    ogImage: "https://images.unsplash.com/photo-1722605266573-e981c2ffed30?w=1200&h=630&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-1722605266573-e981c2ffed30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVycGlnbmFufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1722605267546-22242cd6ed4a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVycGlnbmFufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1722605268092-462b90839596?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVycGlnbmFufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1722605267383-812e07e593a5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnBpZ25hbnxlbnwwfHwwfHx8MA%3D%3D"
    ]
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
    
    <!-- CSS Critique intégré pour éviter le blocage -->
    <style>
      /* CSS Critique pour le Hero - styles essentiels */
      :root {
        --background: 0 0% 100%;
        --foreground: 215 25% 27%;
        --primary: 210 75% 35%;
        --primary-foreground: 0 0% 100%;
        --secondary: 210 20% 96%;
        --muted-foreground: 215 15% 45%;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: system-ui, -apple-system, sans-serif;
        background-color: hsl(var(--background));
        color: hsl(var(--foreground));
      }

      /* Styles critiques pour le Hero */
      .hero-section {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, hsl(var(--background)), hsl(var(--secondary) / 0.3), hsl(var(--background)));
      }

      .hero-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        align-items: center;
      }

      .hero-content {
        text-align: center;
        z-index: 10;
      }

      .hero-title {
        font-size: 2.5rem;
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 1rem;
        color: hsl(var(--foreground));
      }

      .hero-subtitle {
        font-size: 1.25rem;
        color: hsl(var(--muted-foreground));
        margin-bottom: 2rem;
        line-height: 1.6;
      }

      .hero-image {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 1rem;
      }

      /* Responsive */
      @media (min-width: 640px) {
        .hero-image {
          height: 400px;
        }
      }

      @media (min-width: 1024px) {
        .hero-container {
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        
        .hero-content {
          text-align: left;
        }
        
        .hero-image {
          height: 500px;
        }
      }

      /* Styles pour éviter le CLS */
      .w-full { width: 100%; }
      .h-\\[300px\\] { height: 300px; }
      .sm\\:h-\\[400px\\] { height: 300px; }
      .lg\\:h-\\[500px\\] { height: 300px; }
      .object-cover { object-fit: cover; }
      
      @media (min-width: 640px) {
        .sm\\:h-\\[400px\\] { height: 400px; }
      }
      
      @media (min-width: 1024px) {
        .lg\\:h-\\[500px\\] { height: 500px; }
      }
    </style>
    
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
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
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
