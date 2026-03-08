/**
 * Données des pages ville pour le composant dynamique SyndromeDiogeneCity
 */

export interface CityPageData {
  slug: string;
  name: string;
  region: string;
  department: string;
  heroImage: string;
  heroAlt: string;
  heroSubtitle: string;
  zones: {
    title: string;
    intro: string;
    sections: Array<{
      title: string;
      items: string[];
    }>;
  };
  relatedCity: {
    slug: string;
    name: string;
    description: string;
  };
  /** Extra sections unique to this city (e.g. Marseille has gallery, testimonials, FAQ) */
  galleryImages?: Array<{ src: string; alt: string; caption: string }>;
  testimonials?: Array<{ text: string; author: string }>;
}

export const CITY_PAGES: Record<string, CityPageData> = {
  montpellier: {
    slug: "montpellier",
    name: "Montpellier",
    region: "Hérault",
    department: "34",
    heroImage: "/images/cities/montpellier.jpg",
    heroAlt: "Vue de Montpellier, métropole de l'Hérault",
    heroSubtitle: "Service spécialisé de nettoyage et débarras pour les situations de syndrome de Diogène à Montpellier et sa métropole",
    zones: {
      title: "Zone d'Intervention à Montpellier",
      intro: "Nous intervenons dans tous les quartiers de Montpellier et sa métropole :",
      sections: [
        { title: "Centre-ville", items: ["Écusson", "Comédie", "Antigone", "Port Marianne"] },
        { title: "Quartiers résidentiels", items: ["Figuerolles", "Boutonnet", "Les Cévennes", "La Paillade"] },
        { title: "Périphérie", items: ["Castelnau-le-Lez", "Lattes", "Pérols", "Juvignac"] }
      ]
    },
    relatedCity: { slug: "sete", name: "Sète", description: "Découvrez nos services dans la ville maritime de Sète" }
  },

  sete: {
    slug: "sete",
    name: "Sète",
    region: "Hérault",
    department: "34",
    heroImage: "/images/cities/sete.jpg",
    heroAlt: "Vue de Sète, ville maritime de l'Hérault",
    heroSubtitle: "Service spécialisé de nettoyage et débarras pour les situations de syndrome de Diogène à Sète et ses alentours",
    zones: {
      title: "Zone d'Intervention à Sète",
      intro: "Nous intervenons dans tous les quartiers de Sète :",
      sections: [
        { title: "Centre historique", items: ["Quartier Haut", "Quartier Bas", "Marché aux poissons", "Port de pêche"] },
        { title: "Quartiers résidentiels", items: ["Corniche", "Les Quilles", "Les Plages", "Villeroy"] },
        { title: "Zones portuaires", items: ["Port de commerce", "Port de plaisance", "Zone industrielle", "Ponton Saint-Louis"] }
      ]
    },
    relatedCity: { slug: "montpellier", name: "Montpellier", description: "Découvrez nos services à Montpellier et sa métropole" }
  },

  beziers: {
    slug: "beziers",
    name: "Béziers",
    region: "Hérault",
    department: "34",
    heroImage: "/images/cities/bézier.webp",
    heroAlt: "Vue de Béziers, ville historique de l'Hérault",
    heroSubtitle: "Service spécialisé de nettoyage et débarras pour les situations de syndrome de Diogène à Béziers et ses environs",
    zones: {
      title: "Zone d'Intervention à Béziers",
      intro: "Nous intervenons dans tous les quartiers de Béziers :",
      sections: [
        { title: "Centre historique", items: ["Cité médiévale", "Allées Paul-Riquet", "Place du Forum", "Rue du Capus"] },
        { title: "Quartiers résidentiels", items: ["Devèze", "Saint-Aphrodise", "Centre-ville", "Saint-Jacques"] },
        { title: "Périphérie", items: ["Les Pradettes", "Crouzette", "Montblanc", "Saint-Saëns"] }
      ]
    },
    relatedCity: { slug: "montpellier", name: "Montpellier", description: "Découvrez nos services à Montpellier et sa métropole" }
  },

  nimes: {
    slug: "nimes",
    name: "Nîmes",
    region: "Gard",
    department: "30",
    heroImage: "/images/cities/nimes.webp",
    heroAlt: "Vue de Nîmes, ville romaine du Gard",
    heroSubtitle: "Service spécialisé de nettoyage et débarras pour les situations de syndrome de Diogène à Nîmes et dans le Gard",
    zones: {
      title: "Zone d'Intervention à Nîmes",
      intro: "Nous intervenons dans tous les quartiers de Nîmes et le département du Gard :",
      sections: [
        { title: "Centre-ville", items: ["Écusson", "Boulevard Victor Hugo", "Quai de la Fontaine", "Place du Marché"] },
        { title: "Quartiers résidentiels", items: ["Valdegour", "Pissevin", "Chemin Bas d'Avignon", "Mas de Mingue"] },
        { title: "Périphérie Gard", items: ["Alès", "Bagnols-sur-Cèze", "Uzès", "Pont-Saint-Esprit"] }
      ]
    },
    relatedCity: { slug: "montpellier", name: "Montpellier", description: "Découvrez nos services à Montpellier et sa métropole" }
  },

  perpignan: {
    slug: "perpignan",
    name: "Perpignan",
    region: "Pyrénées-Orientales",
    department: "66",
    heroImage: "/images/cities/perpignan.jpeg",
    heroAlt: "Vue de Perpignan, ville catalane des Pyrénées-Orientales",
    heroSubtitle: "Service spécialisé de nettoyage et débarras pour les situations de syndrome de Diogène à Perpignan et dans les Pyrénées-Orientales",
    zones: {
      title: "Zone d'Intervention à Perpignan",
      intro: "Nous intervenons dans tous les quartiers de Perpignan et les Pyrénées-Orientales :",
      sections: [
        { title: "Centre-ville", items: ["Centre historique", "Place de la République", "Castillet", "Saint-Jean"] },
        { title: "Quartiers résidentiels", items: ["Saint-Gaudérique", "Saint-Jacques", "Haut-Vernet", "Bas-Vernet"] },
        { title: "Roussillon", items: ["Canet-en-Roussillon", "Saint-Cyprien", "Argelès-sur-Mer", "Collioure"] }
      ]
    },
    relatedCity: { slug: "nimes", name: "Nîmes", description: "Découvrez nos services à Nîmes et dans le Gard" }
  },

  marseille: {
    slug: "marseille",
    name: "Marseille",
    region: "Bouches-du-Rhône",
    department: "13",
    heroImage: "/images/cities/marseille1.jpg",
    heroAlt: "Vue de Marseille, ville phocéenne des Bouches-du-Rhône",
    heroSubtitle: "Intervention discrète et professionnelle à Marseille (1er–16e) et dans tout le 13: débarras gros volumes, tri sélectif, évacuation réglementée, désinfection et remise en état.",
    zones: {
      title: "Zone d'Intervention à Marseille",
      intro: "Nous intervenons dans tous les arrondissements de Marseille et la métropole :",
      sections: [
        { title: "Centre-ville", items: ["1er arr. – Vieux-Port", "2e arr. – Joliette", "6e arr. – Castellane", "7e arr. – Endoume"] },
        { title: "Quartiers Nord & Est", items: ["3e arr. – Saint-Mauront", "13e arr. – Château-Gombert", "14e arr. – Saint-Barthélémy", "15e arr. – Verduron"] },
        { title: "Métropole Aix-Marseille-Provence", items: ["Aix-en-Provence", "Aubagne", "La Ciotat", "Cassis", "Gardanne", "Vitrolles", "Marignane", "Martigues", "Salon-de-Provence"] }
      ]
    },
    relatedCity: { slug: "montpellier", name: "Montpellier", description: "Découvrez nos services à Montpellier et sa métropole" },
    galleryImages: [
      { src: "/images/cities/marseille1.jpg", alt: "Vue de Marseille - Port et Vieux-Port", caption: "Port et Vieux-Port" },
      { src: "/images/cities/marseille2.jpg", alt: "Vue de Marseille - Centre-ville et monuments", caption: "Centre-ville et monuments" },
      { src: "/images/cities/marseille3.jpg", alt: "Vue de Marseille - Quartiers et architecture", caption: "Quartiers et architecture" }
    ],
    testimonials: [
      { text: "Intervention rapide et très discrète, résultat impeccable.", author: "Marseille 8e" },
      { text: "Beaucoup d'écoute et de respect, gros volumes gérés en une journée.", author: "Marseille 3e" }
    ]
  }
};
