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
let baseHTML = null;

// Meta tags par page — titres <60 chars, descriptions <160 chars, PAS de keywords
export const pagesMeta = {
  '/': {
    title: "SOS Nettoyage Diogène | Nettoyage & Débarras Sud France",
    description: "Nettoyage syndrome de Diogène, débarras, insalubrité et après décès. Intervention discrète à Montpellier, Marseille et Sud France.",
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
  '/tous-nos-services': {
    title: "Tous Nos Services | SOS Nettoyage Diogène",
    description: "Découvrez tous nos services : syndrome de Diogène, nettoyage après décès, débarras gros volumes, désinfection. Intervention dans le Sud de la France.",
    canonical: "/tous-nos-services",
    noIndex: true
  },
  '/prix-diogene': {
    title: "Prix Nettoyage Diogène | Tarifs & Devis Gratuit",
    description: "Tarifs nettoyage syndrome de Diogène. Devis gratuit et transparent. Expertise, discrétion et approche humaine dans le Sud de la France.",
    canonical: "/prix-diogene",
    noIndex: true
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
  '/landing/traitement-odeurs-nuisibles': {
    title: "Traitement Odeurs & Nuisibles | Intervention 7j/7",
    description: "Traitement des mauvaises odeurs et des nuisibles (cafards, punaises, rongeurs, mites). Intervention pro dans le Sud de la France. Devis gratuit.",
    canonical: "/landing/traitement-odeurs-nuisibles",
    noIndex: true
  },
  '/protocole-sanitaire': {
    title: "Fiche Protocole Sanitaire | SOS Nettoyage Diogène",
    description: "Protocole sanitaire d'intervention en logement insalubre : odeurs, risques biologiques, tri des documents. Document à joindre aux rapports CCAS, MJPM et préfecture.",
    canonical: "/protocole-sanitaire",
    noIndex: true
  },
  '/notaires-succession': {
    title: "Remise en état d'un bien en succession | Fiche notaires",
    description: "Fiche pratique à l'attention des notaires : débarras, nettoyage extrême et remise en état d'un bien en succession. Devis sous 24h, Occitanie et PACA.",
    canonical: "/notaires-succession",
    noIndex: true
  },
};

// Template HTML de base: on repart du vrai dist/index.html généré par Vite
function getBaseHTML() {
  if (baseHTML) return baseHTML;

  const indexPath = path.join(BUILD_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error('dist/index.html introuvable: lancez vite build avant la génération statique');
  }

  const html = fs.readFileSync(indexPath, 'utf8');
  const jsPath = html.match(/<script[^>]+type="module"[^>]+src="(\/js\/[^\"]+\.js)"[^>]*><\/script>/i)?.[1];
  const cssPath = html.match(/<link[^>]+rel="stylesheet"[^>]+href="(\/css\/[^\"]+\.css)"[^>]*>/i)?.[1];

  if (!jsPath) {
    throw new Error('dist/index.html ne référence pas le fichier JS Vite final');
  }

  if (!cssPath) {
    throw new Error('dist/index.html ne référence pas le fichier CSS Vite final');
  }

  if (!fs.existsSync(path.join(BUILD_DIR, jsPath.slice(1)))) {
    throw new Error(`fichier JS Vite absent: ${jsPath}`);
  }

  if (!fs.existsSync(path.join(BUILD_DIR, cssPath.slice(1)))) {
    throw new Error(`fichier CSS Vite absent: ${cssPath}`);
  }

  baseHTML = html;
  return baseHTML;
}

// Générer une page avec les meta tags (sans meta keywords)
function generatePage(route, meta) {
  let html = getBaseHTML();
  html = html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+name="description"[^>]*>/i, '')
    .replace(/\s*<meta\s+name="author"[^>]*>/i, '')
    .replace(/\s*<meta\s+name="robots"[^>]*>/i, '')
    .replace(/\s*<link\s+rel="canonical"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:title"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:description"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:type"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:url"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:image"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:image:width"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:image:height"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:image:alt"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:site_name"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:locale"[^>]*>/i, '')
    .replace(/\s*<meta\s+name="twitter:card"[^>]*>/i, '')
    .replace(/\s*<meta\s+name="twitter:title"[^>]*>/i, '')
    .replace(/\s*<meta\s+name="twitter:description"[^>]*>/i, '')
    .replace(/\s*<meta\s+name="twitter:image"[^>]*>/i, '')
    .replace(/\s*<meta\s+name="twitter:image:alt"[^>]*>/i, '');
  
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
  
  return html.replace('</head>', `${metaTags}\n  </head>`);
}

// Fonction principale
export function generateStaticPages() {
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

// Exécuter uniquement si lancé directement (pas lors d'un import pour réutiliser pagesMeta)
const isMain = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);
if (isMain) {
  generateStaticPages();
}
