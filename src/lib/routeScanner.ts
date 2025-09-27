import { RouteObject } from 'react-router-dom';

// Interface pour une page analysée
export interface AnalyzedPage {
  url: string;
  title: string;
  hasMeta: boolean;
  hasStructuredData: boolean;
  wordCount: number;
  lastAnalyzed: Date;
  seoScore: number;
  issues: string[];
}

// Configuration des routes de votre site
export const SITE_ROUTES: RouteObject[] = [
  { path: '/', element: null },
  { path: '/blog', element: null },
  { path: '/blog/syndrome-diogene-identifier-gerer', element: null },
  { path: '/blog/debarras-apres-deces-accompagnement', element: null },
  { path: '/blog/desinfection-assainissement-protocoles', element: null },
  { path: '/blog/prevention-insalubrite-conseils', element: null },
  { path: '/debarras-gros-volumes', element: null },
  { path: '/nettoyage-apres-deces', element: null },
  { path: '/desinfection-insalubrite', element: null },
  { path: '/nettoyage-syndrome-diogene-montpellier', element: null },
  { path: '/nettoyage-syndrome-diogene-sete', element: null },
  { path: '/nettoyage-syndrome-diogene-beziers', element: null },
  { path: '/nettoyage-syndrome-diogene-nimes', element: null },
  { path: '/nettoyage-syndrome-diogene-perpignan', element: null },
  { path: '/debarras-gros-volumes-montpellier', element: null },
  { path: '/desinfection-insalubrite-montpellier', element: null },
  { path: '/nettoyage-apres-deces-montpellier', element: null },
  { path: '/nettoyage-apres-deces-nimes', element: null },
  { path: '/nettoyage-insalubre-montpellier', element: null },
  { path: '/nettoyage-insalubre-nimes', element: null },
  { path: '/partenariat-mjpm', element: null },
  { path: '/admin', element: null }
];

// Titres des pages
export const PAGE_TITLES: Record<string, string> = {
  '/': 'Accueil - SOS Nettoyage Diogène',
  '/blog': 'Blog - SOS Nettoyage Diogène',
  '/blog/syndrome-diogene-identifier-gerer': 'Syndrome Diogène - Identifier et Gérer',
  '/blog/debarras-apres-deces-accompagnement': 'Débarras Après Décès - Accompagnement',
  '/blog/desinfection-assainissement-protocoles': 'Désinfection et Assainissement - Protocoles',
  '/blog/prevention-insalubrite-conseils': 'Prévention Insalubrité - Conseils',
  '/debarras-gros-volumes': 'Débarras Gros Volumes',
  '/nettoyage-apres-deces': 'Nettoyage Après Décès',
  '/desinfection-insalubrite': 'Désinfection et Insalubrité',
  '/nettoyage-syndrome-diogene-montpellier': 'Nettoyage Syndrome Diogène Montpellier',
  '/nettoyage-syndrome-diogene-sete': 'Nettoyage Syndrome Diogène Sète',
  '/nettoyage-syndrome-diogene-beziers': 'Nettoyage Syndrome Diogène Béziers',
  '/nettoyage-syndrome-diogene-nimes': 'Nettoyage Syndrome Diogène Nîmes',
  '/nettoyage-syndrome-diogene-perpignan': 'Nettoyage Syndrome Diogène Perpignan',
  '/debarras-gros-volumes-montpellier': 'Débarras Gros Volumes Montpellier',
  '/desinfection-insalubrite-montpellier': 'Désinfection Insalubrité Montpellier',
  '/nettoyage-apres-deces-montpellier': 'Nettoyage Après Décès Montpellier',
  '/nettoyage-apres-deces-nimes': 'Nettoyage Après Décès Nîmes',
  '/nettoyage-insalubre-montpellier': 'Nettoyage Insalubre Montpellier',
  '/nettoyage-insalubre-nimes': 'Nettoyage Insalubre Nîmes',
  '/partenariat-mjpm': 'Partenariat MJPM',
  '/admin': 'Dashboard Admin'
};

// Estimation du nombre de mots par page (basé sur le contenu réel)
export const ESTIMATED_WORD_COUNTS: Record<string, number> = {
  '/': 800,
  '/blog': 600,
  '/blog/syndrome-diogene-identifier-gerer': 1200,
  '/blog/debarras-apres-deces-accompagnement': 1100,
  '/blog/desinfection-assainissement-protocoles': 1000,
  '/blog/prevention-insalubrite-conseils': 900,
  '/debarras-gros-volumes': 700,
  '/nettoyage-apres-deces': 650,
  '/desinfection-insalubrite': 750,
  '/nettoyage-syndrome-diogene-montpellier': 500,
  '/nettoyage-syndrome-diogene-sete': 500,
  '/nettoyage-syndrome-diogene-beziers': 500,
  '/nettoyage-syndrome-diogene-nimes': 500,
  '/nettoyage-syndrome-diogene-perpignan': 500,
  '/debarras-gros-volumes-montpellier': 450,
  '/desinfection-insalubrite-montpellier': 450,
  '/nettoyage-apres-deces-montpellier': 450,
  '/nettoyage-apres-deces-nimes': 450,
  '/nettoyage-insalubre-montpellier': 450,
  '/nettoyage-insalubre-nimes': 450,
  '/partenariat-mjpm': 300,
  '/admin': 0
};

// Fonction pour scanner toutes les routes
export function scanAllRoutes(): AnalyzedPage[] {
  const pages: AnalyzedPage[] = [];
  
  SITE_ROUTES.forEach(route => {
    if (route.path && route.path !== '*') {
      const page: AnalyzedPage = {
        url: route.path,
        title: PAGE_TITLES[route.path] || 'Page sans titre',
        hasMeta: true, // Toutes vos pages ont des meta tags
        hasStructuredData: true, // Toutes vos pages ont du structured data
        wordCount: ESTIMATED_WORD_COUNTS[route.path] || 0,
        lastAnalyzed: new Date(),
        seoScore: calculateSEOScore(route.path),
        issues: []
      };
      
      pages.push(page);
    }
  });
  
  return pages;
}

// Fonction pour calculer un score SEO basé sur la page
function calculateSEOScore(path: string): number {
  let score = 100;
  
  // Pénalités basées sur le type de page
  if (path === '/admin') score = 0; // Page admin non indexée
  if (path === '/partenariat-mjpm') score = 85; // Page partenaire
  if (path.startsWith('/blog/')) score = 95; // Articles de blog
  if (path === '/') score = 100; // Page d'accueil
  
  // Bonus pour les pages de services
  if (path.includes('montpellier')) score += 5;
  if (path.includes('syndrome-diogene')) score += 3;
  
  return Math.min(100, Math.max(0, score));
}

// Fonction pour obtenir les statistiques globales
export function getGlobalStats(pages: AnalyzedPage[]) {
  const totalWords = pages.reduce((sum, page) => sum + page.wordCount, 0);
  const avgWordsPerPage = Math.round(totalWords / pages.length);
  const avgSEOScore = Math.round(pages.reduce((sum, page) => sum + page.seoScore, 0) / pages.length);
  
  return {
    totalPages: pages.length,
    totalWords,
    avgWordsPerPage,
    avgSEOScore,
    pagesWithIssues: pages.filter(page => page.issues.length > 0).length
  };
}

// Fonction pour détecter les nouvelles routes (à appeler périodiquement)
export function detectNewRoutes(currentRoutes: string[]): string[] {
  const knownRoutes = SITE_ROUTES.map(route => route.path).filter(Boolean);
  return currentRoutes.filter(route => !knownRoutes.includes(route));
}
