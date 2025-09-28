// Configuration centralisée du site
export const SITE_CONFIG = {
  // Identité
  name: "SOS Nettoyage Diogène",
  tagline: "Nettoyage Professionnel & Débarras",
  description: "Société spécialisée dans le nettoyage et débarras syndrome de Diogène, insalubrité et gros volumes. Intervention discrète, professionnelle et respectueuse dans le Sud de la France.",
  
  // Contact
  phone: "07 67 13 54 58",
  email: "contact@sosnettoyagediogene.fr",
  availability: "7j/7 de 8h00 à 20h00",
  
  // URLs
  baseUrl: "https://sosnettoyagediogene.fr",
  social: {
    facebook: "https://www.facebook.com/propremonsud",
    linkedin: "https://www.linkedin.com/company/propre-mon-sud"
  },
  
  // Images par défaut
  defaultImages: {
    hero: "/images/logos/p1.png",
    logo: "/images/logos/logo.png",
    ogImage: "/images/logos/p1.png"
  },
  
  // Images des villes
  cityImages: {
    montpellier: "/images/cities/montpellier.jpg",
    sete: "/images/cities/sete.jpg",
    beziers: "/images/cities/bézier.webp",
    nimes: "/images/cities/nimes.webp",
    perpignan: "/images/cities/perpignan.jpeg",
    marseille: "/images/cities/marseille1.jpg"
  }
};

// Configuration des services
export const SERVICES = {
  diogene: {
    id: "diogene",
    name: "Nettoyage Syndrome de Diogène",
    shortName: "Syndrome de Diogène",
    description: "Intervention spécialisée et respectueuse pour les situations d'accumulation compulsive avec respect et discrétion totale.",
    icon: "Heart",
    features: [
      "Évaluation psychologique par téléphone",
      "Tri respectueux des objets",
      "Nettoyage en profondeur",
      "Désinfection complète",
      "Accompagnement familial",
      "Intervention d'urgence 24h/24"
    ],
    process: [
      {
        step: 1,
        title: "Évaluation Bienveillante",
        description: "Évaluation gratuite et confidentielle par téléphone ou email pour analyser la situation et établir un plan d'intervention personnalisé.",
        icon: "Heart"
      },
      {
        step: 2,
        title: "Intervention Respectueuse",
        description: "Équipe formée aux techniques spécialisées et à l'accompagnement psychologique. Tri minutieux et respect des objets personnels.",
        icon: "Users"
      },
      {
        step: 3,
        title: "Suivi et Accompagnement",
        description: "Nettoyage et désinfection complets. Suivi post-intervention et conseils pour maintenir un environnement sain.",
        icon: "Shield"
      }
    ]
  },
  
  debarras: {
    id: "debarras",
    name: "Débarras Gros Volumes",
    shortName: "Débarras",
    description: "Évacuation et tri de tous types d'objets, meubles et déchets en respectant l'environnement.",
    icon: "Trash2",
    features: [
      "Greniers et caves",
      "Garages encombrés",
      "Déménagements",
      "Successions",
      "Bureaux et locaux",
      "Tri et recyclage"
    ],
    process: [
      {
        step: 1,
        title: "Évaluation Gratuite",
        description: "Évaluation par téléphone ou email pour estimer le volume et le type d'objets à évacuer. Devis détaillé et personnalisé selon vos besoins.",
        icon: "Trash2"
      },
      {
        step: 2,
        title: "Tri et Sélection",
        description: "Tri minutieux des objets : réutilisables, recyclables, déchets. Respect de vos choix et conseils pour optimiser la valorisation.",
        icon: "Recycle"
      },
      {
        step: 3,
        title: "Évacuation Complète",
        description: "Évacuation avec matériel adapté. Respect de l'environnement et traçabilité complète des déchets selon la réglementation.",
        icon: "Truck"
      }
    ]
  },
  
  desinfection: {
    id: "desinfection",
    name: "Désinfection & Insalubrité",
    shortName: "Désinfection",
    description: "Traitement des environnements insalubres avec des produits professionnels et techniques adaptées.",
    icon: "Shield",
    features: [
      "Désinfection virale (COVID-19, grippe)",
      "Désinfection bactérienne",
      "Traitement anti-nuisibles",
      "Nettoyage insalubre",
      "Protocoles sanitaires",
      "Intervention d'urgence"
    ],
    process: [
      {
        step: 1,
        title: "Diagnostic Initial",
        description: "Évaluation de la situation par téléphone ou email, identification des risques et établissement du protocole de traitement adapté.",
        icon: "Shield"
      },
      {
        step: 2,
        title: "Préparation",
        description: "Mise en sécurité des lieux, protection des biens sensibles et préparation des produits de désinfection selon le protocole établi.",
        icon: "Zap"
      },
      {
        step: 3,
        title: "Traitement",
        description: "Application des produits de désinfection selon les techniques professionnelles. Respect des temps de contact et des concentrations optimales.",
        icon: "Droplets"
      },
      {
        step: 4,
        title: "Contrôle & Suivi",
        description: "Vérification de l'efficacité du traitement, remise en état des lieux et conseils pour maintenir un environnement sain.",
        icon: "CheckCircle"
      }
    ]
  },
  
  nettoyageApresDeces: {
    id: "nettoyage-apres-deces",
    name: "Nettoyage Après Décès",
    shortName: "Nettoyage Après Décès",
    description: "Service spécialisé de nettoyage et remise en état après décès. Intervention respectueuse, discrète et professionnelle.",
    icon: "Heart",
    features: [
      "Intervention discrète",
      "Respect de la famille",
      "Protocoles sanitaires",
      "Remise en état complète",
      "Désinfection professionnelle",
      "Équipe formée"
    ],
    process: [
      {
        step: 1,
        title: "Évaluation Respectueuse",
        description: "Évaluation par téléphone avec tact et discrétion. Compréhension de la situation et établissement d'un protocole adapté dans le respect de la famille.",
        icon: "Heart"
      },
      {
        step: 2,
        title: "Intervention Discrète",
        description: "Intervention avec véhicules discrets, équipement professionnel et protocoles sanitaires stricts. Respect total de l'intimité et de la dignité.",
        icon: "Shield"
      },
      {
        step: 3,
        title: "Remise en État Complète",
        description: "Nettoyage approfondi, désinfection professionnelle et remise en état des lieux. Certificat de désinfection et suivi post-intervention.",
        icon: "CheckCircle"
      }
    ]
  },
  
  nettoyageInsalubre: {
    id: "nettoyage-insalubre",
    name: "Nettoyage Insalubre",
    shortName: "Nettoyage Insalubre",
    description: "Service spécialisé de nettoyage et remise en état d'environnements insalubres avec protocoles professionnels.",
    icon: "Shield",
    features: [
      "Nettoyage extrême",
      "Désinfection insalubre",
      "Traitement insalubrité",
      "Protocoles sanitaires",
      "Équipement professionnel",
      "Remise en état"
    ],
    process: [
      {
        step: 1,
        title: "Évaluation Professionnelle",
        description: "Analyse de la situation d'insalubrité et établissement d'un protocole de nettoyage adapté aux risques identifiés.",
        icon: "Shield"
      },
      {
        step: 2,
        title: "Nettoyage Extrême",
        description: "Nettoyage en profondeur avec équipement professionnel et produits spécialisés pour les environnements insalubres.",
        icon: "Zap"
      },
      {
        step: 3,
        title: "Désinfection & Remise en État",
        description: "Désinfection complète et remise en état des lieux. Certificat de désinfection et conseils de prévention.",
        icon: "CheckCircle"
      }
    ]
  }
};

// Configuration des villes
export const CITIES = {
  montpellier: {
    id: "montpellier",
    name: "Montpellier",
    region: "Hérault",
    department: "34",
    coordinates: { lat: "43.611", lng: "3.8767" },
    images: {
      hero: "/images/cities/montpellier.jpg",
      gallery: [
        "/images/cities/montpellier.jpg",
        "/images/examples/ex1.png",
        "/images/examples/ex2.jpg"
      ]
    }
  },
  sete: {
    id: "sete",
    name: "Sète",
    region: "Hérault",
    department: "34",
    coordinates: { lat: "43.403", lng: "3.696" },
    images: {
      hero: "/images/cities/sete.jpg",
      gallery: [
        "/images/cities/sete.jpg",
        "/images/examples/ex1.png",
        "/images/examples/ex2.jpg"
      ]
    }
  },
  beziers: {
    id: "beziers",
    name: "Béziers",
    region: "Hérault",
    department: "34",
    coordinates: { lat: "43.347", lng: "3.215" },
    images: {
      hero: "/images/cities/bézier.webp",
      gallery: [
        "/images/cities/bézier.webp",
        "/images/examples/ex1.png",
        "/images/examples/ex2.jpg"
      ]
    }
  },
  nimes: {
    id: "nimes",
    name: "Nîmes",
    region: "Gard",
    department: "30",
    coordinates: { lat: "43.836", lng: "4.360" },
    images: {
      hero: "/images/cities/nimes.webp",
      gallery: [
        "/images/cities/nimes.webp",
        "/images/examples/ex1.png",
        "/images/examples/ex2.jpg"
      ]
    }
  },
  perpignan: {
    id: "perpignan",
    name: "Perpignan",
    region: "Pyrénées-Orientales",
    department: "66",
    coordinates: { lat: "42.688", lng: "2.895" },
    images: {
      hero: "/images/cities/perpignan.jpeg",
      gallery: [
        "/images/cities/perpignan.jpeg",
        "/images/examples/ex1.png",
        "/images/examples/ex2.jpg"
      ]
    }
  },
  marseille: {
    id: "marseille",
    name: "Marseille",
    region: "Bouches-du-Rhône",
    department: "13",
    coordinates: { lat: "43.296", lng: "5.369" },
    images: {
      hero: "/images/cities/marseille1.jpg",
      gallery: [
        "/images/cities/marseille1.jpg",
        "/images/cities/marseille2.jpg",
        "/images/cities/marseille3.jpg"
      ]
    }
  }
};

// Configuration des routes
export const ROUTES = {
  home: "/",
  services: {
    diogene: (city: string) => `/nettoyage-syndrome-diogene-${city}`,
    debarras: (city: string) => `/debarras-gros-volumes-${city}`,
    desinfection: (city: string) => `/desinfection-insalubrite-${city}`,
    nettoyageApresDeces: (city: string) => `/nettoyage-apres-deces-${city}`,
    nettoyageInsalubre: (city: string) => `/nettoyage-insalubre-${city}`
  }
};

// Fonction utilitaire pour extraire la ville depuis l'URL
export const extractCityFromPath = (pathname: string): string => {
  const cityMatch = pathname.match(/(?:nettoyage-syndrome-diogene-|debarras-gros-volumes-|desinfection-insalubrite-|nettoyage-apres-deces-|nettoyage-insalubre-)(.+)/);
  return cityMatch ? cityMatch[1] : 'montpellier';
};

// Fonction utilitaire pour extraire le service depuis l'URL
export const extractServiceFromPath = (pathname: string): string => {
  if (pathname.includes('nettoyage-syndrome-diogene')) return 'diogene';
  if (pathname.includes('debarras-gros-volumes')) return 'debarras';
  if (pathname.includes('desinfection-insalubrite')) return 'desinfection';
  if (pathname.includes('nettoyage-apres-deces')) return 'nettoyageApresDeces';
  if (pathname.includes('nettoyage-insalubre')) return 'nettoyageInsalubre';
  return 'diogene';
};
