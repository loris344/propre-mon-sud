/**
 * Configuration SEO centralisée et simplifiée
 * Une seule source de vérité pour tous les meta tags
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  noIndex?: boolean;
}

// Villes et départements par défaut
const DEFAULT_LOCATIONS = "montpellier, sete, beziers, nimes, perpignan, marseille, nice, toulouse, herault, gard, pyrenees-orientales, bouches-du-rhone, alpes-maritimes, haute-garonne";

// Configuration SEO par page
export const SEO_CONFIGS: Record<string, SEOConfig> = {
  // Page d'accueil
  '/': {
    title: "SOS Nettoyage Diogène | Nettoyage Professionnel & Débarras Spécialisé | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Société spécialisée dans le nettoyage et débarras syndrome de Diogène, insalubrité, nettoyage après décès et gros volumes. Intervention discrète, professionnelle et respectueuse à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France.",
    keywords: `nettoyage professionnel, débarras, syndrome diogène, insalubrité, désinfection, nettoyage après décès, ${DEFAULT_LOCATIONS}, sud france, nettoyage spécialisé`,
    canonical: "/"
  },

  // Blog
  '/blog': {
    title: "Blog Expert | Syndrome de Diogène, Débarras, Désinfection | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "4 guides experts : syndrome de Diogène, débarras après décès, protocoles de désinfection, prévention de l'insalubrité. Conseils professionnels 2025 pour Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France.",
    keywords: `syndrome diogène guide, débarras après décès, protocoles désinfection, prévention insalubrité, conseils experts, blog nettoyage, ${DEFAULT_LOCATIONS}`,
    canonical: "/blog"
  },

  // Articles de blog
  '/blog/syndrome-diogene-identifier-gerer': {
    title: "Syndrome de Diogène : Guide Complet d'Identification et de Gestion | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan",
    description: "Découvrez les 8 signes d'alerte du syndrome de Diogène, les statistiques en France et notre protocole d'intervention professionnel. Guide expert 2025 pour Montpellier, Sète, Béziers, Nîmes, Perpignan et tout le Sud de la France.",
    keywords: `syndrome diogène, identification, gestion, accompagnement, nettoyage, débarras, statistiques, protocole, France, 2025, ${DEFAULT_LOCATIONS}`,
    canonical: "/blog/syndrome-diogene-identifier-gerer"
  },

  '/blog/debarras-apres-deces-accompagnement': {
    title: "Débarras après décès : Guide Complet 2025 | Accompagnement Respectueux et Professionnel | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan",
    description: "Découvrez notre protocole de débarras après décès : délais légaux, étapes et accompagnement psychologique. Service 24h/24 avec équipes formées à Montpellier, Sète, Béziers, Nîmes, Perpignan et tout le Sud de la France.",
    keywords: `débarras après décès, accompagnement, respect, discrétion, nettoyage, professionnel, délais légaux, protocole, 2025, ${DEFAULT_LOCATIONS}`,
    canonical: "/blog/debarras-apres-deces-accompagnement"
  },

  '/blog/desinfection-assainissement-protocoles': {
    title: "Désinfection et Assainissement : Protocoles Professionnels 2025 | Guide Complet | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan",
    description: "Découvrez nos protocoles de désinfection certifiés, produits homologués et techniques professionnelles. Garantie 99,9% d'efficacité contre virus et bactéries à Montpellier, Sète, Béziers, Nîmes, Perpignan et tout le Sud de la France.",
    keywords: `désinfection, assainissement, protocoles, bonnes pratiques, nettoyage, environnement sain, virus, bactéries, certification, 2025, ${DEFAULT_LOCATIONS}`,
    canonical: "/blog/desinfection-assainissement-protocoles"
  },

  '/blog/prevention-insalubrite-conseils': {
    title: "Prévention de l'Insalubrité : Guide Complet 2025 | Conseils d'Experts pour un Logement Sain | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan",
    description: "Découvrez 15 conseils d'experts pour prévenir l'insalubrité : entretien, organisation, signes d'alerte. Guide pratique avec checklist gratuite et audit préventif pour Montpellier, Sète, Béziers, Nîmes, Perpignan et tout le Sud de la France.",
    keywords: `prévention insalubrité, conseils, logement sain, environnement, maintenance, prévention, checklist, audit, 2025, ${DEFAULT_LOCATIONS}`,
    canonical: "/blog/prevention-insalubrite-conseils"
  },

  // Pages de services
  '/nettoyage-apres-deces': {
    title: "Nettoyage Après Décès | Service Respectueux et Discret | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Service spécialisé de nettoyage et remise en état après décès à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France. Intervention respectueuse, discrète et professionnelle avec protocoles sanitaires stricts. Devis gratuit 7j/7.",
    keywords: `nettoyage après décès, nettoyage décès, remise en état décès, nettoyage post décès, désinfection décès, nettoyage respectueux, service discret, protocoles sanitaires, ${DEFAULT_LOCATIONS}`,
    canonical: "/nettoyage-apres-deces"
  },

  '/nettoyage-appartement-apres-deces': {
    title: "Nettoyage Appartement Après Décès - Service Professionnel et Discret | SOS Nettoyage Diogène",
    description: "Service spécialisé de nettoyage d'appartement après décès. Bio-nettoyage, désinfection et remise en état avec protocoles sanitaires stricts. Intervention rapide et discrète dans tout le Sud de la France.",
    keywords: `nettoyage appartement après décès, bio-nettoyage, désinfection après décès, remise en état, protocoles sanitaires, intervention discrète, ${DEFAULT_LOCATIONS}`,
    canonical: "/nettoyage-appartement-apres-deces"
  },

  '/debarras-gros-volumes': {
    title: "Débarras Gros Volumes | Évacuation Professionnelle | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Service professionnel de débarras et évacuation gros volumes à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France. Greniers, caves, garages, déménagements, successions. Tri et recyclage respectueux de l'environnement. Devis gratuit 7j/7.",
    keywords: `débarras gros volumes, évacuation déchets, tri sélectif, recyclage, greniers caves, déménagements, successions, nettoyage professionnel, ${DEFAULT_LOCATIONS}`,
    canonical: "/debarras-gros-volumes"
  },

  '/desinfection-insalubrite': {
    title: "Désinfection & Insalubrité | Service Professionnel de Remise en État | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Service spécialisé de désinfection et remise en état de logements insalubres à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France. Intervention professionnelle avec protocoles sanitaires stricts et respect des normes. Devis gratuit 7j/7.",
    keywords: `désinfection insalubrité, nettoyage logement insalubre, syndrome diogène, désinfection professionnelle, remise en état, protocoles sanitaires, santé publique, ${DEFAULT_LOCATIONS}`,
    canonical: "/desinfection-insalubrite"
  },

  // Pages de partenariat
  '/partenariat-mjpm': {
    title: "Partenariat MJPM | -20% de réduction | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Rejoignez notre réseau de partenaires MJPM. -20% de réduction sur nos services de nettoyage spécialisé pour vos protégés à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France. Intervention prioritaire et formation spécialisée.",
    keywords: `partenariat MJPM, réduction, nettoyage spécialisé, protégés, associations, mesure de protection, ${DEFAULT_LOCATIONS}`,
    canonical: "/partenariat-mjpm"
  },

  '/partenariat-maisons-retraite': {
    title: "Partenariat Maisons de Retraite | -20% de réduction | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Rejoignez notre réseau de partenaires maisons de retraite. -20% de réduction sur nos services de nettoyage spécialisé pour vos résidents à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France. Intervention prioritaire et formation spécialisée.",
    keywords: `partenariat maisons de retraite, réduction, nettoyage spécialisé, résidents, EHPAD, établissements, ${DEFAULT_LOCATIONS}`,
    canonical: "/partenariat-maisons-retraite"
  },

  // Page unique Syndrome de Diogène Montpellier
  '/nettoyage-syndrome-diogene-montpellier': {
    title: "Nettoyage Syndrome de Diogène Montpellier | Service Expert & Respectueux | SOS Nettoyage Diogène",
    description: "Service spécialisé de nettoyage syndrome de Diogène à Montpellier (Hérault). Équipe formée aux protocoles sanitaires stricts, intervention discrète et accompagnement psychologique. Certifié par les autorités sanitaires de l'Hérault. Devis gratuit 7j/7.",
    keywords: "nettoyage syndrome diogène montpellier, syndrome diogène herault, nettoyage spécialisé montpellier, protocoles sanitaires montpellier, accompagnement psychologique montpellier, autorités sanitaires herault",
    canonical: "/nettoyage-syndrome-diogene-montpellier"
  },

  // Page unique Syndrome de Diogène Sète
  '/nettoyage-syndrome-diogene-sete': {
    title: "Nettoyage Syndrome de Diogène Sète | Intervention Marine & Professionnelle | SOS Nettoyage Diogène",
    description: "Service expert de nettoyage syndrome de Diogène à Sète (Hérault). Spécialisé dans les logements côtiers, équipe formée aux risques sanitaires marins et urbains. Partenaire de la mairie de Sète et des services sociaux. Intervention 24h/24.",
    keywords: "nettoyage syndrome diogène sete, syndrome diogène ville maritime, nettoyage spécialisé sete, mairie sete partenariat, services sociaux sete, risques sanitaires marins",
    canonical: "/nettoyage-syndrome-diogene-sete"
  },

  // Page unique Syndrome de Diogène Béziers
  '/nettoyage-syndrome-diogene-beziers': {
    title: "Nettoyage Syndrome de Diogène Béziers | Service Historique & Expert | SOS Nettoyage Diogène",
    description: "Service professionnel de nettoyage syndrome de Diogène à Béziers (Hérault). Expertise dans les logements historiques du centre-ville, protocoles adaptés aux contraintes architecturales. Certifié par la CCAS de Béziers et les services de santé publique.",
    keywords: "nettoyage syndrome diogène beziers, syndrome diogène centre historique, nettoyage spécialisé beziers, CCAS beziers, contraintes architecturales beziers, services santé publique beziers",
    canonical: "/nettoyage-syndrome-diogene-beziers"
  },

  // Page unique Syndrome de Diogène Nîmes
  '/nettoyage-syndrome-diogene-nimes': {
    title: "Nettoyage Syndrome de Diogène Nîmes | Service Gardois Expert | SOS Nettoyage Diogène",
    description: "Service spécialisé de nettoyage syndrome de Diogène à Nîmes (Gard). Équipe formée aux spécificités du département du Gard, partenariat avec le Conseil Départemental du Gard et les services sociaux. Intervention rapide dans tout le Gard.",
    keywords: "nettoyage syndrome diogène nimes, syndrome diogène gard, nettoyage spécialisé nimes, conseil départemental gard, services sociaux gard, intervention rapide gard",
    canonical: "/nettoyage-syndrome-diogene-nimes"
  },

  // Page unique Syndrome de Diogène Perpignan
  '/nettoyage-syndrome-diogene-perpignan': {
    title: "Nettoyage Syndrome de Diogène Perpignan | Service Catalan Expert | SOS Nettoyage Diogène",
    description: "Service expert de nettoyage syndrome de Diogène à Perpignan (Pyrénées-Orientales). Spécialisé dans les logements catalans, équipe bilingue, partenariat avec la Generalitat de Catalunya et les services sociaux des PO. Intervention dans tout le Roussillon.",
    keywords: "nettoyage syndrome diogène perpignan, syndrome diogène pyrénées orientales, nettoyage spécialisé perpignan, generalitat catalunya, services sociaux roussillon, équipe bilingue perpignan",
    canonical: "/nettoyage-syndrome-diogene-perpignan"
  },

  // Page unique Syndrome de Diogène Marseille
  '/nettoyage-syndrome-diogene-marseille': {
    title: "Nettoyage syndrome de Diogène à Marseille | Débarras & Désinfection – SOS Nettoyage Diogène",
    description: "Intervention discrète 7j/7 à Marseille: débarras gros volumes, tri, désinfection et remise en état pour syndrome de Diogène. Devis gratuit et confidentiel. Équipe formée au risque biologique et au nettoyage de l'extrême.",
    keywords: "syndrome de Diogène Marseille, nettoyage Diogène Marseille, débarras insalubrité Marseille, nettoyage extrême Marseille, débarras gros volumes 13, désinfection appartement Marseille, nettoyage spécialisé Marseille, bouches-du-rhone, métropole aix-marseille-provence",
    canonical: "/nettoyage-syndrome-diogene-marseille"
  },

  // Page unique Nettoyage après décès Marseille
  '/nettoyage-apres-deces-marseille': {
    title: "Nettoyage après décès à Marseille: faire soi-même ou confier à des spécialistes | Guide Complet 2025",
    description: "Guide complet pour le nettoyage après décès à Marseille: faire soi-même ou déléguer à des spécialistes. Protocoles sanitaires, délais, coûts, prise en charge assurance. Intervention 24h/24.",
    keywords: "nettoyage après décès Marseille, nettoyage décès 13, décontamination décès Marseille, nettoyage post décès, désinfection décès, nettoyage respectueux Marseille, protocoles sanitaires décès, assurance habitation décès, bouches-du-rhone",
    canonical: "/nettoyage-apres-deces-marseille"
  },

  // Page Tous nos services
  '/tous-nos-services': {
    title: "Tous nos Services | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "Découvrez tous nos services de nettoyage spécialisé : syndrome de Diogène, nettoyage après décès, débarras gros volumes, désinfection. Intervention professionnelle dans tout le Sud de la France.",
    keywords: `tous nos services, nettoyage spécialisé, syndrome diogène, nettoyage après décès, débarras, désinfection, ${DEFAULT_LOCATIONS}`,
    canonical: "/tous-nos-services"
  },

  // Page Entreprise nettoyage Montpellier
  '/entreprise-nettoyage-montpellier': {
    title: "Entreprise de Nettoyage Montpellier | Services Professionnels & Spécialisés | SOS Nettoyage Diogène",
    description: "Entreprise de nettoyage professionnel à Montpellier. Services spécialisés : syndrome de Diogène, nettoyage après décès, débarras, désinfection. Équipe certifiée, intervention 7j/7. Devis gratuit.",
    keywords: "entreprise nettoyage Montpellier, nettoyage professionnel Montpellier, société nettoyage Hérault, nettoyage spécialisé Montpellier, syndrome diogène Montpellier, nettoyage après décès Montpellier, débarras Montpellier, désinfection Montpellier",
    canonical: "/entreprise-nettoyage-montpellier"
  },

  // Page Entreprise nettoyage Marseille
  '/entreprise-nettoyage-marseille': {
    title: "Entreprise de Nettoyage Marseille | Services Professionnels & Spécialisés | SOS Nettoyage Diogène",
    description: "Entreprise de nettoyage professionnel à Marseille. Services spécialisés : syndrome de Diogène, nettoyage après décès, débarras, désinfection. Équipe certifiée, intervention 7j/7. Devis gratuit.",
    keywords: "entreprise nettoyage Marseille, nettoyage professionnel Marseille, société nettoyage Bouches-du-Rhône, nettoyage spécialisé Marseille, syndrome diogène Marseille, nettoyage après décès Marseille, débarras Marseille, désinfection Marseille",
    canonical: "/entreprise-nettoyage-marseille"
  },

  // Page 404
  '/404': {
    title: "Page Non Trouvée | SOS Nettoyage Diogène | Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse",
    description: "La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir nos services de nettoyage et débarras spécialisé à Montpellier, Sète, Béziers, Nîmes, Perpignan, Marseille, Nice, Toulouse et tout le Sud de la France.",
    keywords: `page non trouvée, 404, erreur, nettoyage, débarras, services, ${DEFAULT_LOCATIONS}`,
    canonical: "/404",
    noIndex: true
  }
};

// Fonction pour obtenir la config SEO d'une page
export function getSEOConfig(pathname: string): SEOConfig {
  return SEO_CONFIGS[pathname] || SEO_CONFIGS['/'];
}

// Fonction pour ajouter une nouvelle page (à utiliser dans le futur)
export function addSEOConfig(path: string, config: SEOConfig): void {
  SEO_CONFIGS[path] = config;
}
