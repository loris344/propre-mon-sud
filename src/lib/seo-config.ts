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

  '/nettoyage-apres-deces': {
    title: "Nettoyage Après Décès | Service Discret 7j/7",
    description: "Nettoyage après décès discret et respectueux. Protocoles sanitaires stricts, intervention 7j/7 dans le Sud de la France. Devis gratuit.",
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

  '/404': {
    title: "Page Non Trouvée | SOS Nettoyage Diogène",
    description: "La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir nos services.",
    canonical: "/404",
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
    title: "Fiche Protocole Sanitaire | SOS Nettoyage Diogène",
    description: "Protocole sanitaire d'intervention en logement insalubre : odeurs, risques biologiques, tri des documents. Document à joindre aux rapports CCAS, MJPM et préfecture.",
    canonical: "/protocole-sanitaire",
    noIndex: true
  },

  '/notaires-succession': {
    title: "Remise en état d'un bien en succession | Fiche notaires",
    description: "Protocole de remise en état d'un logement insalubre ou Diogène en succession : valorisation, attestation d'assainissement, délais compatibles calendrier successoral.",
    canonical: "/notaires-succession",
    noIndex: true
  }
};

export function getSEOConfig(pathname: string): SEOConfig {
  return SEO_CONFIGS[pathname] || SEO_CONFIGS['/'];
}

export function addSEOConfig(path: string, config: SEOConfig): void {
  SEO_CONFIGS[path] = config;
}