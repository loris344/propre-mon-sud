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

// Meta tags par page (importé depuis seo-config.ts)
const pagesMeta = {
  '/': {
    title: "SOS Nettoyage Diogène | Nettoyage Professionnel & Débarras Spécialisé | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Société spécialisée dans le nettoyage et débarras syndrome de Diogène, insalubrité, nettoyage après décès et gros volumes. Intervention discrète, professionnelle et respectueuse à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France.",
    keywords: "nettoyage professionnel, débarras, syndrome diogène, insalubrité, désinfection, nettoyage après décès, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne, sud france, nettoyage spécialisé",
    canonical: "/"
  },
  '/blog': {
    title: "Blog Expert | Syndrome de Diogène, Débarras, Désinfection | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "4 guides experts : syndrome de Diogène, débarras après décès, protocoles de désinfection, prévention de l'insalubrité. Conseils professionnels 2025 pour Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France.",
    keywords: "syndrome diogène guide, débarras après décès, protocoles désinfection, prévention insalubrité, conseils experts, blog nettoyage, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/blog"
  },
  '/blog/syndrome-diogene-identifier-gerer': {
    title: "Syndrome de Diogène : Guide Complet d'Identification et de Gestion | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan",
    description: "Découvrez les 8 signes d'alerte du syndrome de Diogène, les statistiques en France et notre protocole d'intervention professionnel. Guide expert 2025 pour Montpellier, Sète, Béziers, Nîmes, Perpignan et tout le Sud de la France.",
    keywords: "syndrome diogène, identification, gestion, accompagnement, nettoyage, débarras, statistiques, protocole, France, 2025, montpellier, sete, beziers, nimes, perpignan, herault, gard, pyrenees-orientales",
    canonical: "/blog/syndrome-diogene-identifier-gerer"
  },
  '/blog/debarras-apres-deces-accompagnement': {
    title: "Débarras après décès : Guide Complet 2025 | Accompagnement Respectueux et Professionnel | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan",
    description: "Découvrez notre protocole de débarras après décès : délais légaux, étapes et accompagnement psychologique. Service 24h/24 avec équipes formées à Montpellier, Sète, Béziers, Nîmes, Perpignan et tout le Sud de la France.",
    keywords: "débarras après décès, accompagnement, respect, discrétion, nettoyage, professionnel, délais légaux, protocole, 2025, montpellier, sete, beziers, nimes, perpignan, herault, gard, pyrenees-orientales",
    canonical: "/blog/debarras-apres-deces-accompagnement"
  },
  '/blog/desinfection-assainissement-protocoles': {
    title: "Désinfection et Assainissement : Protocoles Professionnels 2025 | Guide Complet | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan",
    description: "Découvrez nos protocoles de désinfection certifiés, produits homologués et techniques professionnelles. Garantie 99,9% d'efficacité contre virus et bactéries à Montpellier, Sète, Béziers, Nîmes, Perpignan et tout le Sud de la France.",
    keywords: "désinfection, assainissement, protocoles, bonnes pratiques, nettoyage, environnement sain, virus, bactéries, certification, 2025, montpellier, sete, beziers, nimes, perpignan, herault, gard, pyrenees-orientales",
    canonical: "/blog/desinfection-assainissement-protocoles"
  },
  '/blog/prevention-insalubrite-conseils': {
    title: "Prévention de l'Insalubrité : Guide Complet 2025 | Conseils d'Experts pour un Logement Sain | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan",
    description: "Découvrez 15 conseils d'experts pour prévenir l'insalubrité : entretien, organisation, signes d'alerte. Guide pratique avec checklist gratuite et audit préventif pour Montpellier, Sète, Béziers, Nîmes, Perpignan et tout le Sud de la France.",
    keywords: "prévention insalubrité, conseils, logement sain, environnement, maintenance, prévention, checklist, audit, 2025, montpellier, sete, beziers, nimes, perpignan, herault, gard, pyrenees-orientales",
    canonical: "/blog/prevention-insalubrite-conseils"
  },
  '/nettoyage-apres-deces': {
    title: "Nettoyage Après Décès | Service Respectueux et Discret | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Service spécialisé de nettoyage et remise en état après décès à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France. Intervention respectueuse, discrète et professionnelle avec protocoles sanitaires stricts. Devis gratuit 7j/7.",
    keywords: "nettoyage après décès, nettoyage décès, remise en état décès, nettoyage post décès, désinfection décès, nettoyage respectueux, service discret, protocoles sanitaires, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/nettoyage-apres-deces"
  },
  '/nettoyage-appartement-apres-deces': {
    title: "Nettoyage Appartement Après Décès - Service Professionnel et Discret | SOS Nettoyage Diogène",
    description: "Service spécialisé de nettoyage d'appartement après décès. Bio-nettoyage, désinfection et remise en état avec protocoles sanitaires stricts. Intervention rapide et discrète dans tout le Sud de la France.",
    keywords: "nettoyage appartement après décès, bio-nettoyage, désinfection après décès, remise en état, protocoles sanitaires, intervention discrète, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/nettoyage-appartement-apres-deces"
  },
  '/debarras-gros-volumes': {
    title: "Débarras Gros Volumes | Évacuation Professionnelle | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Service professionnel de débarras et évacuation gros volumes à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France. Greniers, caves, garages, déménagements, successions. Tri et recyclage respectueux de l'environnement. Devis gratuit 7j/7.",
    keywords: "débarras gros volumes, évacuation déchets, tri sélectif, recyclage, greniers caves, déménagements, successions, nettoyage professionnel, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/debarras-gros-volumes"
  },
  '/desinfection-insalubrite': {
    title: "Désinfection & Insalubrité | Service Professionnel de Remise en État | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Service spécialisé de désinfection et remise en état de logements insalubres à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France. Intervention professionnelle avec protocoles sanitaires stricts et respect des normes. Devis gratuit 7j/7.",
    keywords: "désinfection insalubrité, nettoyage logement insalubre, syndrome diogène, désinfection professionnelle, remise en état, protocoles sanitaires, santé publique, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/desinfection-insalubrite"
  },
  '/partenariat-mjpm': {
    title: "Partenariat MJPM | -20% de réduction | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Rejoignez notre réseau de partenaires MJPM. -20% de réduction sur nos services de nettoyage spécialisé pour vos protégés à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France. Intervention prioritaire et formation spécialisée.",
    keywords: "partenariat MJPM, réduction, nettoyage spécialisé, protégés, associations, mesure de protection, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/partenariat-mjpm"
  },
  '/partenariat-maisons-retraite': {
    title: "Partenariat Maisons de Retraite | -20% de réduction | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Rejoignez notre réseau de partenaires maisons de retraite. -20% de réduction sur nos services de nettoyage spécialisé pour vos résidents à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France. Intervention prioritaire et formation spécialisée.",
    keywords: "partenariat maisons de retraite, réduction, nettoyage spécialisé, résidents, EHPAD, établissements, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/partenariat-maisons-retraite"
  },
  '/404': {
    title: "Page Non Trouvée | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir nos services de nettoyage et débarras spécialisé à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France.",
    keywords: "page non trouvée, 404, erreur, nettoyage, débarras, services, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/404"
  },
  '/mentions-legales': {
    title: "Mentions Légales | SOS Nettoyage Diogène | Société de Nettoyage Professionnel",
    description: "Mentions légales de SOS Nettoyage Diogène - Société spécialisée dans le nettoyage et débarras syndrome de Diogène. Informations légales, coordonnées et données de l'entreprise.",
    keywords: "mentions légales, SOS nettoyage diogène, société nettoyage, débarras professionnel, informations légales, coordonnées entreprise, SIREN, SIRET",
    canonical: "/mentions-legales"
  },
  // Pages dynamiques ville/service
  '/nettoyage-syndrome-diogene-montpellier': {
    title: "Nettoyage Syndrome de Diogène à Montpellier | Service Professionnel | SOS Nettoyage Diogène",
    description: "Service spécialisé de nettoyage syndrome de Diogène à Montpellier, Hérault. Intervention discrète, professionnelle et respectueuse. Équipe formée et équipée. Devis gratuit 7j/7.",
    keywords: "nettoyage syndrome diogène, montpellier, herault, nettoyage spécialisé, débarras, intervention discrète, professionnel, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/nettoyage-syndrome-diogene-montpellier"
  },
  '/nettoyage-syndrome-diogene-sete': {
    title: "Nettoyage Syndrome de Diogène à Sète | Service Professionnel | SOS Nettoyage Diogène",
    description: "Service spécialisé de nettoyage syndrome de Diogène à Sète, Hérault. Intervention discrète, professionnelle et respectueuse. Équipe formée et équipée. Devis gratuit 7j/7.",
    keywords: "nettoyage syndrome diogène, sete, herault, nettoyage spécialisé, débarras, intervention discrète, professionnel, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/nettoyage-syndrome-diogene-sete"
  },
  '/nettoyage-syndrome-diogene-beziers': {
    title: "Nettoyage Syndrome de Diogène à Béziers | Service Professionnel | SOS Nettoyage Diogène",
    description: "Service spécialisé de nettoyage syndrome de Diogène à Béziers, Hérault. Intervention discrète, professionnelle et respectueuse. Équipe formée et équipée. Devis gratuit 7j/7.",
    keywords: "nettoyage syndrome diogène, beziers, herault, nettoyage spécialisé, débarras, intervention discrète, professionnel, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/nettoyage-syndrome-diogene-beziers"
  },
  '/nettoyage-syndrome-diogene-nimes': {
    title: "Nettoyage Syndrome de Diogène à Nîmes | Service Professionnel | SOS Nettoyage Diogène",
    description: "Service spécialisé de nettoyage syndrome de Diogène à Nîmes, Gard. Intervention discrète, professionnelle et respectueuse. Équipe formée et équipée. Devis gratuit 7j/7.",
    keywords: "nettoyage syndrome diogène, nimes, gard, nettoyage spécialisé, débarras, intervention discrète, professionnel, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/nettoyage-syndrome-diogene-nimes"
  },
  '/nettoyage-syndrome-diogene-perpignan': {
    title: "Nettoyage Syndrome de Diogène à Perpignan | Service Professionnel | SOS Nettoyage Diogène",
    description: "Service spécialisé de nettoyage syndrome de Diogène à Perpignan, Pyrénées-Orientales. Intervention discrète, professionnelle et respectueuse. Équipe formée et équipée. Devis gratuit 7j/7.",
    keywords: "nettoyage syndrome diogène, perpignan, pyrenees-orientales, nettoyage spécialisé, débarras, intervention discrète, professionnel, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne",
    canonical: "/nettoyage-syndrome-diogene-perpignan"
  },
  '/nettoyage-syndrome-diogene-marseille': {
    title: "Nettoyage syndrome de Diogène à Marseille | Débarras & Désinfection – SOS Nettoyage Diogène",
    description: "Intervention discrète 7j/7 à Marseille: débarras gros volumes, tri, désinfection et remise en état pour syndrome de Diogène. Devis gratuit et confidentiel. Équipe formée au risque biologique et au nettoyage de l'extrême.",
    keywords: "syndrome de Diogène Marseille, nettoyage Diogène Marseille, débarras insalubrité Marseille, nettoyage extrême Marseille, débarras gros volumes 13, désinfection appartement Marseille, nettoyage spécialisé Marseille, bouches-du-rhone, métropole aix-marseille-provence",
    canonical: "/nettoyage-syndrome-diogene-marseille"
  },
  '/nettoyage-apres-deces-marseille': {
    title: "Nettoyage après décès à Marseille: faire soi-même ou confier à des spécialistes | Guide Complet 2025",
    description: "Guide complet pour le nettoyage après décès à Marseille: faire soi-même ou déléguer à des spécialistes. Protocoles sanitaires, délais, coûts, prise en charge assurance. Intervention 24h/24.",
    keywords: "nettoyage après décès Marseille, nettoyage décès 13, décontamination décès Marseille, nettoyage post décès, désinfection décès, nettoyage respectueux Marseille, protocoles sanitaires décès, assurance habitation décès, bouches-du-rhone",
    canonical: "/nettoyage-apres-deces-marseille"
  },
  '/tous-nos-services': {
    title: "Tous nos Services | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Découvrez tous nos services de nettoyage spécialisé : syndrome de Diogène, nettoyage après décès, débarras gros volumes, désinfection. Intervention professionnelle dans tout le Sud de la France.",
    keywords: "tous nos services, nettoyage spécialisé, syndrome diogène, nettoyage après décès, débarras, désinfection, montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse",
    canonical: "/tous-nos-services"
  },
  '/entreprise-nettoyage-montpellier': {
    title: "Entreprise de Nettoyage Montpellier | Services Professionnels & Spécialisés | SOS Nettoyage Diogène",
    description: "Entreprise de nettoyage professionnel à Montpellier. Services spécialisés : syndrome de Diogène, nettoyage après décès, débarras, désinfection. Équipe certifiée, intervention 7j/7. Devis gratuit.",
    keywords: "entreprise nettoyage Montpellier, nettoyage professionnel Montpellier, société nettoyage Hérault, nettoyage spécialisé Montpellier, syndrome diogène Montpellier, nettoyage après décès Montpellier, débarras Montpellier, désinfection Montpellier",
    canonical: "/entreprise-nettoyage-montpellier"
  },
  '/entreprise-nettoyage-marseille': {
    title: "Entreprise de Nettoyage Marseille | Services Professionnels & Spécialisés | SOS Nettoyage Diogène",
    description: "Entreprise de nettoyage professionnel à Marseille. Services spécialisés : syndrome de Diogène, nettoyage après décès, débarras, désinfection. Équipe certifiée, intervention 7j/7. Devis gratuit.",
    keywords: "entreprise nettoyage Marseille, nettoyage professionnel Marseille, société nettoyage Bouches-du-Rhône, nettoyage spécialisé Marseille, syndrome diogène Marseille, nettoyage après décès Marseille, débarras Marseille, désinfection Marseille",
    canonical: "/entreprise-nettoyage-marseille"
  },
  '/meilleures-societes-nettoyage-montpellier': {
    title: "Les 10 Meilleures Sociétés de Nettoyage à Montpellier : Votre Guide Complet 2025",
    description: "Découvrez notre classement des meilleures entreprises de nettoyage à Montpellier. SOS Nettoyage Diogène, Au'clean, Nova Clean et plus. Services spécialisés et expertise reconnue dans l'Hérault.",
    keywords: "société de nettoyage, Montpellier, nettoyage professionnel, entreprise nettoyage, Hérault, SOS Nettoyage Diogène, Au'clean, Nova Clean, nettoyage bureaux, nettoyage industriel",
    canonical: "/meilleures-societes-nettoyage-montpellier"
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
    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VDZL4FT7QQ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VDZL4FT7QQ');
      gtag('config', 'AW-17579670391');
    </script>
    
    <!-- React App -->
    <div id="root"></div>
    <script type="module" src="/js/${jsFile}"></script>
  </head>
  <body>
    <noscript>Vous devez activer JavaScript pour utiliser cette application.</noscript>
  </body>
</html>`;
}

// Générer une page avec les meta tags
function generatePage(route, meta) {
  const html = getBaseHTML();
  
  // Insérer les meta tags dans le head
  const metaTags = `
    <!-- SEO Meta Tags -->
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta name="keywords" content="${meta.keywords}" />
    <meta name="author" content="SOS Nettoyage Diogène - Nettoyage Professionnel" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow" />
    <meta name="bingbot" content="index, follow" />
    
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
  
  // Créer le dossier dist s'il n'existe pas
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }
  
  // Générer chaque page
  Object.entries(pagesMeta).forEach(([route, meta]) => {
    const html = generatePage(route, meta);
    const filePath = route === '/' ? 'index.html' : `${route.slice(1)}/index.html`;
    const fullPath = path.join(BUILD_DIR, filePath);
    
    // Créer le dossier si nécessaire
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