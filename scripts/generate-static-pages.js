import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration des pages statiques à générer
const staticPages = [
  {
    route: '/nettoyage-syndrome-diogene-montpellier',
    title: 'Nettoyage Syndrome de Diogène Montpellier | SOS Nettoyage Diogène',
    description: 'Intervention spécialisée et respectueuse pour les situations d\'accumulation compulsive. Notre équipe formée intervient avec discrétion et bienveillance à Montpellier et sa région.',
    keywords: 'nettoyage syndrome diogène, montpellier, intervention spécialisée, accumulation compulsive, nettoyage extrême, débarras, désinfection',
    content: 'ServiceDiogene'
  },
  {
    route: '/debarras-gros-volumes-montpellier',
    title: 'Débarras Gros Volumes Montpellier | Évacuation Professionnelle',
    description: 'Évacuation et tri de tous types d\'objets, meubles et déchets en respectant l\'environnement. Service professionnel pour particuliers et professionnels dans tout le Sud de la France.',
    keywords: 'débarras gros volumes, montpellier, évacuation déchets, tri sélectif, recyclage, nettoyage professionnel',
    content: 'ServiceDebarras'
  },
  {
    route: '/desinfection-insalubrite-montpellier',
    title: 'Désinfection & Insalubrité Montpellier | Traitement Professionnel',
    description: 'Traitement des environnements insalubres avec des produits professionnels et techniques adaptées. Intervention spécialisée pour restaurer un environnement sain et sécurisé.',
    keywords: 'désinfection, insalubrité, montpellier, traitement professionnel, nettoyage extrême, désinfection virale',
    content: 'ServiceDesinfection'
  }
];

// Template HTML de base
const htmlTemplate = (page) => `<!doctype html>
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
    <meta property="og:image" content="https://sosnettoyagediogene.fr/hero-cleaning.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Équipe professionnelle de nettoyage spécialisé syndrome de Diogène" />
    <meta property="og:site_name" content="SOS Nettoyage Diogène" />
    <meta property="og:locale" content="fr_FR" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://sosnettoyagediogene.fr${page.route}" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="https://sosnettoyagediogene.fr/hero-cleaning.jpg" />
    <meta name="twitter:image:alt" content="Équipe professionnelle de nettoyage spécialisé syndrome de Diogène" />
    
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
    <link rel="preload" href="/hero-cleaning.jpg" as="image" type="image/jpeg" />
    
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
      "image": "https://sosnettoyagediogene.fr/hero-cleaning.jpg",
      "logo": "https://sosnettoyagediogene.fr/logo.png"
    }
    </script>
    
    <!-- CSS pour le contenu statique -->
    <style>
      body { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0; 
        padding: 20px; 
        background: #f8fafc;
        color: #1e293b;
        line-height: 1.6;
      }
      .container { 
        max-width: 800px; 
        margin: 0 auto; 
        background: white;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      h1 { 
        color: #1e40af; 
        font-size: 2.5rem;
        margin-bottom: 20px;
        border-bottom: 3px solid #3b82f6;
        padding-bottom: 10px;
      }
      h2 { 
        color: #1e40af; 
        font-size: 1.8rem;
        margin-top: 30px;
        margin-bottom: 15px;
      }
      .cta { 
        background: linear-gradient(135deg, #1e40af, #3b82f6);
        color: white;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        margin: 30px 0;
      }
      .cta h3 { 
        margin: 0 0 10px 0; 
        font-size: 1.5rem;
      }
      .cta p { 
        margin: 0 0 15px 0; 
        font-size: 1.1rem;
      }
      .phone { 
        background: #10b981;
        color: white;
        padding: 15px 30px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2rem;
        display: inline-block;
        margin: 10px;
      }
      .phone:hover { 
        background: #059669;
        transform: translateY(-2px);
        transition: all 0.3s ease;
      }
      .features { 
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
        gap: 20px; 
        margin: 30px 0;
      }
      .feature { 
        background: #f8fafc; 
        padding: 20px; 
        border-radius: 8px; 
        border-left: 4px solid #3b82f6;
      }
      .feature h4 { 
        color: #1e40af; 
        margin: 0 0 10px 0;
      }
      ul { 
        padding-left: 20px; 
      }
      li { 
        margin: 8px 0; 
      }
      .loading { 
        text-align: center; 
        padding: 40px; 
        color: #64748b;
      }
      .loading::after { 
        content: "Chargement de l'application..."; 
        animation: pulse 2s infinite;
      }
      @keyframes pulse { 
        0%, 100% { opacity: 1; } 
        50% { opacity: 0.5; } 
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1>${page.title.split(' | ')[0]}</h1>
      
      <div class="cta">
        <h3>🚨 Intervention d'Urgence</h3>
        <p>Disponible 7j/7 de 8h à 20h</p>
        <a href="tel:0767135458" class="phone">📞 07 67 13 54 58</a>
      </div>
      
      <h2>Nos Services Spécialisés</h2>
      <div class="features">
        <div class="feature">
          <h4>🏠 Nettoyage Syndrome de Diogène</h4>
          <p>Intervention spécialisée dans les situations d'accumulation compulsive avec respect et discrétion totale.</p>
        </div>
        <div class="feature">
          <h4>🗑️ Débarras Gros Volumes</h4>
          <p>Évacuation et tri de tous types d'objets, meubles et déchets en respectant l'environnement.</p>
        </div>
        <div class="feature">
          <h4>🛡️ Désinfection & Insalubrité</h4>
          <p>Traitement des environnements insalubres avec des produits professionnels et techniques adaptées.</p>
        </div>
      </div>
      
      <h2>Pourquoi Nous Choisir ?</h2>
      <ul>
        <li><strong>Disponibilité 7j/7</strong> - Intervention rapide et flexible</li>
        <li><strong>Équipe experte</strong> - Professionnels formés et équipés</li>
        <li><strong>Discrétion assurée</strong> - Confidentialité et respect total</li>
        <li><strong>Assurance complète</strong> - Intervention sécurisée et assurée</li>
      </ul>
      
      <div class="cta">
        <h3>Devis Gratuit</h3>
        <p>Contactez-nous pour un devis personnalisé</p>
        <a href="tel:0767135458" class="phone">📞 07 67 13 54 58</a>
      </div>
      
      <div class="loading"></div>
    </div>
    
    <!-- Script pour rediriger vers l'application React -->
    <script>
      // Redirection vers l'application React après un court délai
      setTimeout(function() {
        window.location.href = '${page.route}';
      }, 2000);
      
      // Redirection immédiate si JavaScript est activé
      if (window.location.pathname !== '${page.route}') {
        window.location.replace('${page.route}');
      }
    </script>
  </body>
</html>`;

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
