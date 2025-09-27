import { AnalyzedPage } from './routeScanner';

// Interface pour les résultats d'analyse SEO
export interface SEOAnalysisResult {
  url: string;
  title: string;
  metaDescription: boolean;
  metaKeywords: boolean;
  h1Tag: boolean;
  h2Tags: number;
  imageAltTags: number;
  internalLinks: number;
  externalLinks: number;
  wordCount: number;
  readingTime: number;
  seoScore: number;
  issues: string[];
  recommendations: string[];
}

// Configuration SEO
const SEO_CONFIG = {
  minWordCount: 300,
  maxWordCount: 2000,
  minH2Tags: 2,
  minInternalLinks: 3,
  maxExternalLinks: 10
};

// Fonction pour analyser une page
export async function analyzePage(url: string): Promise<SEOAnalysisResult> {
  const issues: string[] = [];
  const recommendations: string[] = [];
  
  try {
    // Simulation d'analyse (en production, vous feriez une vraie requête HTTP)
    const mockAnalysis = await simulatePageAnalysis(url);
    
    // Vérifications SEO
    if (!mockAnalysis.metaDescription) {
      issues.push('Meta description manquante');
      recommendations.push('Ajouter une meta description de 150-160 caractères');
    }
    
    if (!mockAnalysis.h1Tag) {
      issues.push('Balise H1 manquante');
      recommendations.push('Ajouter une balise H1 unique par page');
    }
    
    if (mockAnalysis.h2Tags < SEO_CONFIG.minH2Tags) {
      issues.push(`Seulement ${mockAnalysis.h2Tags} balise(s) H2`);
      recommendations.push('Ajouter au moins 2-3 balises H2 pour structurer le contenu');
    }
    
    if (mockAnalysis.wordCount < SEO_CONFIG.minWordCount) {
      issues.push(`Contenu trop court (${mockAnalysis.wordCount} mots)`);
      recommendations.push('Ajouter du contenu pour atteindre au moins 300 mots');
    }
    
    if (mockAnalysis.wordCount > SEO_CONFIG.maxWordCount) {
      issues.push(`Contenu trop long (${mockAnalysis.wordCount} mots)`);
      recommendations.push('Diviser le contenu en plusieurs pages ou sections');
    }
    
    if (mockAnalysis.internalLinks < SEO_CONFIG.minInternalLinks) {
      issues.push(`Peu de liens internes (${mockAnalysis.internalLinks})`);
      recommendations.push('Ajouter des liens vers d\'autres pages du site');
    }
    
    if (mockAnalysis.externalLinks > SEO_CONFIG.maxExternalLinks) {
      issues.push(`Trop de liens externes (${mockAnalysis.externalLinks})`);
      recommendations.push('Limiter les liens externes pour garder l\'utilisateur sur le site');
    }
    
    // Calcul du score SEO
    let seoScore = 100;
    seoScore -= issues.length * 10; // -10 points par problème
    seoScore = Math.max(0, seoScore);
    
    return {
      ...mockAnalysis,
      seoScore,
      issues,
      recommendations
    };
    
  } catch (error) {
    console.error(`Erreur lors de l'analyse de ${url}:`, error);
    return {
      url,
      title: 'Erreur d\'analyse',
      metaDescription: false,
      metaKeywords: false,
      h1Tag: false,
      h2Tags: 0,
      imageAltTags: 0,
      internalLinks: 0,
      externalLinks: 0,
      wordCount: 0,
      readingTime: 0,
      seoScore: 0,
      issues: ['Erreur lors de l\'analyse'],
      recommendations: ['Vérifier la disponibilité de la page']
    };
  }
}

// Simulation d'analyse de page (à remplacer par une vraie analyse)
async function simulatePageAnalysis(url: string): Promise<Partial<SEOAnalysisResult>> {
  // Simulation basée sur le type de page
  const isBlogPost = url.includes('/blog/');
  const isServicePage = url.includes('montpellier') || url.includes('sete') || url.includes('beziers');
  const isHomePage = url === '/';
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: getPageTitle(url),
        metaDescription: true, // Toutes vos pages ont des meta descriptions
        metaKeywords: true, // Toutes vos pages ont des keywords
        h1Tag: true, // Toutes vos pages ont des H1
        h2Tags: isBlogPost ? 4 : isServicePage ? 3 : 2,
        imageAltTags: isBlogPost ? 6 : isServicePage ? 4 : 2,
        internalLinks: isBlogPost ? 8 : isServicePage ? 5 : 3,
        externalLinks: isBlogPost ? 2 : isServicePage ? 1 : 0,
        wordCount: getEstimatedWordCount(url),
        readingTime: Math.ceil(getEstimatedWordCount(url) / 200) // 200 mots/minute
      });
    }, 100);
  });
}

// Fonction pour obtenir le titre de la page
function getPageTitle(url: string): string {
  const titles: Record<string, string> = {
    '/': 'SOS Nettoyage Diogène - Nettoyage Professionnel & Débarras 7j/7',
    '/blog': 'Blog - SOS Nettoyage Diogène',
    '/blog/syndrome-diogene-identifier-gerer': 'Syndrome Diogène - Identifier et Gérer',
    '/blog/debarras-apres-deces-accompagnement': 'Débarras Après Décès - Accompagnement',
    '/blog/desinfection-assainissement-protocoles': 'Désinfection et Assainissement - Protocoles',
    '/blog/prevention-insalubrite-conseils': 'Prévention Insalubrité - Conseils',
    '/debarras-gros-volumes': 'Débarras Gros Volumes - Évacuation Professionnelle',
    '/nettoyage-apres-deces': 'Nettoyage Après Décès - Service Respectueux',
    '/desinfection-insalubrite': 'Désinfection & Insalubrité - Traitement Professionnel',
    '/admin': 'Dashboard Admin - SOS Nettoyage Diogène'
  };
  
  return titles[url] || 'Page sans titre';
}

// Fonction pour obtenir le nombre estimé de mots
function getEstimatedWordCount(url: string): number {
  const wordCounts: Record<string, number> = {
    '/': 800,
    '/blog': 600,
    '/blog/syndrome-diogene-identifier-gerer': 1200,
    '/blog/debarras-apres-deces-accompagnement': 1100,
    '/blog/desinfection-assainissement-protocoles': 1000,
    '/blog/prevention-insalubrite-conseils': 900,
    '/debarras-gros-volumes': 700,
    '/nettoyage-apres-deces': 650,
    '/desinfection-insalubrite': 750,
    '/admin': 0
  };
  
  // Pour les pages de services par ville
  if (url.includes('montpellier') || url.includes('sete') || url.includes('beziers') || 
      url.includes('nimes') || url.includes('perpignan')) {
    return 500;
  }
  
  return wordCounts[url] || 400;
}

// Fonction pour analyser toutes les pages
export async function analyzeAllPages(urls: string[]): Promise<SEOAnalysisResult[]> {
  const results: SEOAnalysisResult[] = [];
  
  for (const url of urls) {
    if (url !== '/admin') { // Exclure la page admin
      const analysis = await analyzePage(url);
      results.push(analysis);
    }
  }
  
  return results;
}

// Fonction pour obtenir les statistiques globales
export function getGlobalSEOStats(analyses: SEOAnalysisResult[]) {
  const totalPages = analyses.length;
  const totalWords = analyses.reduce((sum, analysis) => sum + analysis.wordCount, 0);
  const avgWordsPerPage = Math.round(totalWords / totalPages);
  const avgSEOScore = Math.round(analyses.reduce((sum, analysis) => sum + analysis.seoScore, 0) / totalPages);
  const pagesWithIssues = analyses.filter(analysis => analysis.issues.length > 0).length;
  const totalIssues = analyses.reduce((sum, analysis) => sum + analysis.issues.length, 0);
  
  return {
    totalPages,
    totalWords,
    avgWordsPerPage,
    avgSEOScore,
    pagesWithIssues,
    totalIssues,
    healthScore: Math.round((totalPages - pagesWithIssues) / totalPages * 100)
  };
}
