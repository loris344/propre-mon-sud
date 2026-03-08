#!/usr/bin/env node

/**
 * Script pour générer des pages statiques avec les bons meta tags
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://sosnettoyagediogene.fr';
const BUILD_DIR = path.join(__dirname, '../dist');

// Fonction pour détecter les vrais noms de fichiers générés par Vite
function getActualFilenames() {
  const jsDir = path.join(BUILD_DIR, 'js');
  const cssDir = path.join(BUILD_DIR, 'css');
  
  let jsFile = 'index-DaGo9SF1.js'; // fallback
  let cssFile = 'index-BM_9ip7p.css'; // fallback
  
  if (fs.existsSync(jsDir)) {
    const jsFiles = fs.readdirSync(jsDir);
    const indexJsFile = jsFiles.find(file => file.startsWith('index-') && file.endsWith('.js'));
    if (indexJsFile) jsFile = indexJsFile;
  }
  
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir);
    const indexCssFile = cssFiles.find(file => file.startsWith('index-') && file.endsWith('.css'));
    if (indexCssFile) cssFile = indexCssFile;
  }
  
  return { jsFile, cssFile };
}

// Meta tags par page — titres <60 chars, descriptions <160 chars, PAS de keywords
const pagesMeta = {
  '/': {
    title: "SOS Nettoyage Diogène | Nettoyage & Débarras Sud France",
    description: "Société spécialisée dans le nettoyage syndrome de Diogène, débarras, insalubrité et nettoyage après décès. Intervention discrète à Montpellier, Marseille et tout le Sud de la France.",
    canonical: "/"
  },
  '/blog': {
    title: "Blog Expert | Syndrome de Diogène & Nettoyage",
    description: "Guides experts : syndrome de Diogène, débarras après décès, protocoles de désinfection, prévention de l'insalubrité. Conseils professionnels 2025.",
    canonical: "/blog"
  },
  '/blog/syndrome-diogene-identifier-gerer': {
    title: "Syndrome de Diogène : Guide Complet 2025",
    description: "Découvrez les 8 signes d'alerte du syndrome de Diogène, les statistiques en France et notre protocole d'intervention professionnel.",
    canonical: "/blog/syndrome-diogene-identifier-gerer"
  },
  '/blog/debarras-apres-deces-accompagnement': {
    title: "Débarras Après Décès : Guide Complet 2025",
    description: "Protocole de débarras après décès : délais légaux, étapes et accompagnement psychologique. Service 24h/24 dans le Sud de la France.",
    canonical: "/blog/debarras-apres-deces-accompagnement"
  },
  '/blog/desinfection-assainissement-protocoles': {
    title: "Désinfection & Assainissement : Protocoles 2025",
    description: "Protocoles de désinfection certifiés, produits homologués et techniques professionnelles. Garantie 99,9% d'efficacité.",
    canonical: "/blog/desinfection-assainissement-protocoles"
  },
  '/blog/prevention-insalubrite-conseils': {
    title: "Prévention Insalubrité : 15 Conseils d'Experts",
    description: "15 conseils d'experts pour prévenir l'insalubrité : entretien, organisation, signes d'alerte. Guide pratique avec checklist gratuite.",
    canonical: "/blog/prevention-insalubrite-conseils"
  },
  '/nettoyage-apres-deces': {
    title: "Nettoyage Après Décès | Service Discret 7j/7",
    description: "Service spécialisé de nettoyage après décès. Intervention respectueuse et discrète avec protocoles sanitaires stricts dans tout le Sud de la France. Devis gratuit.",
    canonical: "/nettoyage-apres-deces"
  },
  '/nettoyage-appartement-apres-deces': {
    title: "Nettoyage Appartement Après Décès | Pro & Discret",
    description: "Service de nettoyage d'appartement après décès. Bio-nettoyage, désinfection et remise en état avec protocoles sanitaires stricts.",
    canonical: "/nettoyage-appartement-apres-deces"
  },
  '/debarras-gros-volumes': {
    title: "Débarras Gros Volumes | Évacuation Pro Sud France",
    description: "Débarras et évacuation gros volumes : greniers, caves, garages, successions. Tri et recyclage respectueux de l'environnement. Devis gratuit 7j/7.",
    canonical: "/debarras-gros-volumes"
  },
  '/desinfection-insalubrite': {
    title: "Désinfection & Insalubrité | Remise en État Pro",
    description: "Désinfection et remise en état de logements insalubres. Intervention professionnelle avec protocoles sanitaires stricts. Devis gratuit 7j/7.",
    canonical: "/desinfection-insalubrite"
  },
  '/partenariat-mjpm': {
    title: "Partenariat MJPM | -20% Nettoyage Spécialisé",
    description: "Rejoignez notre réseau partenaire MJPM. -20% sur nos services de nettoyage pour vos protégés. Intervention prioritaire dans le Sud de la France.",
    canonical: "/partenariat-mjpm"
  },
  '/partenariat-maisons-retraite': {
    title: "Partenariat EHPAD | -20% Nettoyage Spécialisé",
    description: "Partenariat maisons de retraite et EHPAD. -20% sur nos services de nettoyage pour vos résidents. Intervention prioritaire.",
    canonical: "/partenariat-maisons-retraite"
  },
  '/nettoyage-syndrome-diogene-montpellier': {
    title: "Nettoyage Diogène Montpellier | Expert & Discret",
    description: "Service spécialisé de nettoyage syndrome de Diogène à Montpellier (Hérault). Équipe formée, intervention discrète. Devis gratuit 7j/7.",
    canonical: "/nettoyage-syndrome-diogene-montpellier"
  },
  '/nettoyage-syndrome-diogene-sete': {
    title: "Nettoyage Diogène Sète | Intervention Pro",
    description: "Service expert de nettoyage syndrome de Diogène à Sète (Hérault). Spécialisé logements côtiers, intervention 24h/24.",
    canonical: "/nettoyage-syndrome-diogene-sete"
  },
  '/nettoyage-syndrome-diogene-beziers': {
    title: "Nettoyage Diogène Béziers | Service Expert",
    description: "Service professionnel de nettoyage syndrome de Diogène à Béziers (Hérault). Expertise logements historiques. Devis gratuit.",
    canonical: "/nettoyage-syndrome-diogene-beziers"
  },
  '/nettoyage-syndrome-diogene-nimes': {
    title: "Nettoyage Diogène Nîmes | Service Gardois Expert",
    description: "Service spécialisé de nettoyage syndrome de Diogène à Nîmes (Gard). Intervention rapide dans tout le Gard. Devis gratuit.",
    canonical: "/nettoyage-syndrome-diogene-nimes"
  },
  '/nettoyage-syndrome-diogene-perpignan': {
    title: "Nettoyage Diogène Perpignan | Expert P-O",
    description: "Service expert de nettoyage syndrome de Diogène à Perpignan (Pyrénées-Orientales). Intervention dans tout le Roussillon.",
    canonical: "/nettoyage-syndrome-diogene-perpignan"
  },
  '/nettoyage-syndrome-diogene-marseille': {
    title: "Nettoyage Diogène Marseille | Débarras & Désinfection",
    description: "Intervention discrète 7j/7 à Marseille : débarras gros volumes, tri, désinfection et remise en état pour syndrome de Diogène. Devis gratuit.",
    canonical: "/nettoyage-syndrome-diogene-marseille"
  },
  '/nettoyage-apres-deces-marseille': {
    title: "Nettoyage Après Décès Marseille | Guide 2025",
    description: "Guide complet nettoyage après décès à Marseille : protocoles sanitaires, délais, coûts. Intervention 24h/24.",
    canonical: "/nettoyage-apres-deces-marseille"
  },
  '/tous-nos-services': {
    title: "Tous Nos Services | SOS Nettoyage Diogène",
    description: "Découvrez tous nos services : syndrome de Diogène, nettoyage après décès, débarras gros volumes, désinfection. Intervention dans le Sud de la France.",
    canonical: "/tous-nos-services"
  },
  '/entreprise-nettoyage-montpellier': {
    title: "Entreprise Nettoyage Montpellier | SOS Diogène",
    description: "Entreprise de nettoyage professionnel à Montpellier. Syndrome de Diogène, nettoyage après décès, débarras, désinfection. Devis gratuit 7j/7.",
    canonical: "/entreprise-nettoyage-montpellier"
  },
  '/entreprise-nettoyage-marseille': {
    title: "Entreprise Nettoyage Marseille | SOS Diogène",
    description: "Entreprise de nettoyage professionnel à Marseille. Syndrome de Diogène, nettoyage après décès, débarras, désinfection. Devis gratuit 7j/7.",
    canonical: "/entreprise-nettoyage-marseille"
  },
  '/meilleures-societes-nettoyage-montpellier': {
    title: "Top 10 Sociétés Nettoyage Montpellier 2025",
    description: "Classement des meilleures entreprises de nettoyage à Montpellier. SOS Nettoyage Diogène, Au'clean, Nova Clean et plus.",
    canonical: "/meilleures-societes-nettoyage-montpellier"
  },
  '/prix-diogene': {
    title: "Prix Nettoyage Diogène | Tarifs & Devis Gratuit",
    description: "Tarifs nettoyage syndrome de Diogène. Devis gratuit et transparent. Expertise, discrétion et approche humaine dans le Sud de la France.",
    canonical: "/prix-diogene"
  },
  '/mentions-legales': {
    title: "Mentions Légales | SOS Nettoyage Diogène",
    description: "Mentions légales du site SOS Nettoyage Diogène. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
    canonical: "/mentions-legales"
  },
  '/politique-confidentialite': {
    title: "Politique de Confidentialité | SOS Nettoyage Diogène",
    description: "Politique de confidentialité et protection des données personnelles de SOS Nettoyage Diogène.",
    canonical: "/politique-confidentialite"
  },
  // Pages services par ville
  '/debarras-gros-volumes-montpellier': {
    title: "Débarras Gros Volumes Montpellier | Pro 7j/7",
    description: "Service de débarras gros volumes à Montpellier. Évacuation rapide, tri et recyclage. Devis gratuit 7j/7.",
    canonical: "/debarras-gros-volumes-montpellier"
  },
  '/desinfection-insalubrite-montpellier': {
    title: "Désinfection Insalubrité Montpellier | Expert",
    description: "Désinfection et remise en état de logements insalubres à Montpellier. Protocoles sanitaires stricts. Devis gratuit.",
    canonical: "/desinfection-insalubrite-montpellier"
  },
  '/nettoyage-apres-deces-montpellier': {
    title: "Nettoyage Après Décès Montpellier | Discret",
    description: "Service de nettoyage après décès à Montpellier. Intervention respectueuse et discrète. Devis gratuit 7j/7.",
    canonical: "/nettoyage-apres-deces-montpellier"
  },
  '/nettoyage-apres-deces-nimes': {
    title: "Nettoyage Après Décès Nîmes | Service Discret",
    description: "Service de nettoyage après décès à Nîmes. Intervention respectueuse et discrète dans le Gard. Devis gratuit 7j/7.",
    canonical: "/nettoyage-apres-deces-nimes"
  },
  '/nettoyage-insalubre-montpellier': {
    title: "Nettoyage Insalubre Montpellier | Expert 7j/7",
    description: "Nettoyage de logement insalubre à Montpellier. Intervention professionnelle et discrète. Devis gratuit.",
    canonical: "/nettoyage-insalubre-montpellier"
  },
  '/nettoyage-insalubre-nimes': {
    title: "Nettoyage Insalubre Nîmes | Expert Gardois",
    description: "Nettoyage de logement insalubre à Nîmes et dans le Gard. Intervention professionnelle et discrète. Devis gratuit.",
    canonical: "/nettoyage-insalubre-nimes"
  },
  '/404': {
    title: "Page Non Trouvée | SOS Nettoyage Diogène",
    description: "La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir nos services.",
    canonical: "/404",
    noIndex: true
  },
  // Landing pages Google Ads (noindex)
  '/landing/nettoyage-syndrome-diogene': {
    title: "Nettoyage Syndrome de Diogène | Devis Gratuit 7j/7",
    description: "Intervention spécialisée syndrome de Diogène. Équipe formée, discrétion totale, devis gratuit. Montpellier, Marseille et Sud de la France.",
    canonical: "/landing/nettoyage-syndrome-diogene",
    noIndex: true
  },
  '/landing/debarras-gros-volumes': {
    title: "Débarras Gros Volumes | Évacuation Rapide",
    description: "Débarras et évacuation gros volumes : maison, appartement, cave, grenier. Tri, recyclage et évacuation rapide dans tout le Sud de la France.",
    canonical: "/landing/debarras-gros-volumes",
    noIndex: true
  },
  '/landing/desinfection-insalubrite': {
    title: "Désinfection & Insalubrité | Intervention Urgente",
    description: "Désinfection et remise en état de logements insalubres. Intervention professionnelle avec protocoles sanitaires stricts. Devis gratuit 7j/7.",
    canonical: "/landing/desinfection-insalubrite",
    noIndex: true
  },
  '/landing/nettoyage-apres-deces': {
    title: "Nettoyage Après Décès | Service Respectueux",
    description: "Nettoyage de logement après décès. Intervention respectueuse, discrète et professionnelle dans tout le Sud de la France. Devis gratuit 7j/7.",
    canonical: "/landing/nettoyage-apres-deces",
    noIndex: true
  },
};

// Template HTML de base
function getBaseHTML() {
  const { jsFile, cssFile } = getActualFilenames();
  
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Language and Geo Tags -->
    <meta name="language" content="fr" />
    <meta name="geo.region" content="FR-34" />
    <meta name="geo.placename" content="Montpellier" />
    <meta name="geo.position" content="43.611;3.8767" />
    <meta name="ICBM" content="43.611, 3.8767" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    
    <!-- Preload critical resources -->
    <link rel="preload" href="/js/${jsFile}" as="script" />
    <link rel="preload" href="/css/${cssFile}" as="style" />
    
    <!-- Styles -->
    <link rel="stylesheet" href="/css/${cssFile}" />
    
    <!-- Hotjar / ContentSquare -->
    <script src="https://t.contentsquare.net/uxa/88615d367e891.js"></script>
    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VDZL4FT7QQ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VDZL4FT7QQ');
      gtag('config', 'AW-17579670391');
    </script>
    <!-- Redirection GitHub Pages SPA -->
    <script>
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
  </head>
  <body>
    <!-- React App -->
    <div id="root"></div>
    <script type="module" src="/js/${jsFile}"></script>
    <noscript>Vous devez activer JavaScript pour utiliser cette application.</noscript>
  </body>
</html>`;
}

// Générer une page avec les meta tags (sans meta keywords)
function generatePage(route, meta) {
  const html = getBaseHTML();
  
  const metaTags = `
    <!-- SEO Meta Tags -->
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta name="author" content="SOS Nettoyage Diogène" />
    <meta name="robots" content="${meta.noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${SITE_URL}${route}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${SITE_URL}${route}" />
    <meta property="og:image" content="${SITE_URL}/images/logos/p1.png" />
    <meta property="og:site_name" content="SOS Nettoyage Diogène" />
    <meta property="og:locale" content="fr_FR" />
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${SITE_URL}/images/logos/p1.png" />
  `;
  
  return html.replace('<!-- Language and Geo Tags -->', metaTags + '\n    <!-- Language and Geo Tags -->');
}

// Fonction principale
function generateStaticPages() {
  console.log('🚀 Génération des pages statiques avec meta tags...');
  
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }
  
  Object.entries(pagesMeta).forEach(([route, meta]) => {
    const html = generatePage(route, meta);
    const filePath = route === '/' ? 'index.html' : `${route.slice(1)}/index.html`;
    const fullPath = path.join(BUILD_DIR, filePath);
    
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fullPath, html);
    console.log(`✅ Page générée: ${filePath}`);
  });
  
  // Copier _redirects vers dist
  const redirectsSource = path.join(__dirname, '../public/_redirects');
  const redirectsDest = path.join(BUILD_DIR, '_redirects');
  if (fs.existsSync(redirectsSource)) {
    fs.copyFileSync(redirectsSource, redirectsDest);
    console.log('✅ _redirects copié');
  }
  
  console.log('🎉 Génération terminée !');
}

// Exécuter
generateStaticPages();
