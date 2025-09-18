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
  baseUrl: "https://www.sosnettoyagediogene.fr",
  social: {
    facebook: "https://www.facebook.com/propremonsud",
    linkedin: "https://www.linkedin.com/company/propre-mon-sud"
  },
  
  // Images par défaut
  defaultImages: {
    hero: "/p1.png",
    logo: "/logo.png",
    ogImage: "/p1.png"
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
      hero: "https://images.unsplash.com/photo-1613283850334-9219c5fb7143?w=1200&h=630&fit=crop&crop=center",
      gallery: [
        "https://images.unsplash.com/photo-1613283850334-9219c5fb7143?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1608728212004-04441ea6e3cf?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1690132007585-1ef4b16f49d3?w=900&auto=format&fit=crop&q=60"
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
      hero: "https://images.unsplash.com/photo-1646676125144-cad4fcea488c?w=1200&h=630&fit=crop&crop=center",
      gallery: [
        "https://images.unsplash.com/photo-1646676125144-cad4fcea488c?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1683791886181-68f3a1d1a7c4?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1683791885269-6c1a78ae97fc?w=900&auto=format&fit=crop&q=60"
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
      hero: "https://images.unsplash.com/photo-1723911490474-f9d1ce7a057a?w=1200&h=630&fit=crop&crop=center",
      gallery: [
        "https://images.unsplash.com/photo-1723911490474-f9d1ce7a057a?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1596812069451-ccca1e62b66d?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1723911489123-64c6490e7818?w=900&auto=format&fit=crop&q=60"
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
      hero: "https://images.unsplash.com/photo-1702174653587-c5e10d5a2aa3?w=1200&h=630&fit=crop&crop=center",
      gallery: [
        "https://images.unsplash.com/photo-1702174653587-c5e10d5a2aa3?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1729086871923-36fee2e2f9f5?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1706233674922-febe573ad52f?w=900&auto=format&fit=crop&q=60"
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
      hero: "https://images.unsplash.com/photo-1722605266573-e981c2ffed30?w=1200&h=630&fit=crop&crop=center",
      gallery: [
        "https://images.unsplash.com/photo-1722605266573-e981c2ffed30?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1722605267546-22242cd6ed4a?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1722605268092-462b90839596?w=900&auto=format&fit=crop&q=60"
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
