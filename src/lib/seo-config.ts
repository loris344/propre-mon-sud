/**
 * Configuration SEO centralisée et simplifiée
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const SEO_CONFIGS: Record<string, SEOConfig> = {
  '/': {
    title: "SOS Nettoyage Diogène & Débarras | Nettoyage & Débarras Sud France",
    description: "Nettoyage syndrome de Diogène, débarras, insalubrité et après décès. Intervention discrète à Montpellier, Marseille et Sud France.",
    canonical: "/"
  },

  '/blog': {
    title: "Blog Expert | Syndrome de Diogène & Nettoyage",
    description: "Guides pratiques de nos équipes : syndrome de Diogène, débarras après décès, désinfection, prévention de l'insalubrité et remise en état des logements.",
    canonical: "/blog"
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

  '/404': {
    title: "Page Non Trouvée | SOS Nettoyage Diogène & Débarras",
    description: "La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir nos services.",
    canonical: "/404",
    noIndex: true
  },

  '/mentions-legales': {
    title: "Mentions Légales | SOS Nettoyage Diogène & Débarras",
    description: "Mentions légales du site SOS Nettoyage Diogène & Débarras. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
    canonical: "/mentions-legales"
  },

  '/politique-confidentialite': {
    title: "Politique de Confidentialité | SOS Nettoyage Diogène & Débarras",
    description: "Politique de confidentialité et protection des données personnelles de SOS Nettoyage Diogène & Débarras.",
    canonical: "/politique-confidentialite"
  },

  '/landing/nettoyage-syndrome-diogene': {
    title: "Nettoyage Syndrome de Diogène | Devis Gratuit 7j/7",
    description: "Intervention spécialisée syndrome de Diogène. Équipe dédiée, discrétion totale, devis gratuit. Occitanie, PACA et Sud France.",
    canonical: "/landing/nettoyage-syndrome-diogene",
    noIndex: true
  },

  '/landing/debarras-gros-volumes': {
    title: "Débarras Gros Volumes | Évacuation Rapide",
    description: "Débarras gros volumes : maison, appartement, cave, grenier. Tri, recyclage et évacuation rapide dans tout le Sud de la France.",
    canonical: "/landing/debarras-gros-volumes",
    noIndex: true
  },

  '/landing/desinfection-insalubrite': {
    title: "Désinfection & Insalubrité | Intervention Urgente",
    description: "Désinfection et remise en état de logements insalubres avec protocoles sanitaires stricts. Intervention 7j/7, devis gratuit.",
    canonical: "/landing/desinfection-insalubrite",
    noIndex: true
  },

  '/landing/nettoyage-apres-deces': {
    title: "Nettoyage Après Décès | Service Respectueux",
    description: "Nettoyage après décès discret et respectueux. Intervention professionnelle dans le Sud de la France, devis gratuit 7j/7.",
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
    title: "Fiche Protocole Sanitaire | SOS Nettoyage Diogène & Débarras",
    description: "Protocole sanitaire d'intervention en logement insalubre : odeurs, risques biologiques, tri des documents. Document à joindre aux rapports CCAS, MJPM et préfecture.",
    canonical: "/protocole-sanitaire",
    noIndex: true
  },

  '/notaires-succession': {
    title: "Remise en état d'un bien en succession | Fiche notaires",
    description: "Protocole de remise en état d'un logement insalubre ou Diogène en succession : valorisation, attestation d'assainissement, délais compatibles calendrier successoral.",
    canonical: "/notaires-succession",
    noIndex: true
  },

  // Espace privé de planification éditoriale — jamais indexé.
  '/admin': {
    title: "Espace privé",
    description: "Espace privé.",
    canonical: "/admin",
    noIndex: true
  }
};

export function getSEOConfig(pathname: string): SEOConfig {
  return SEO_CONFIGS[pathname] || SEO_CONFIGS['/'];
}

export function addSEOConfig(path: string, config: SEOConfig): void {
  SEO_CONFIGS[path] = config;
}