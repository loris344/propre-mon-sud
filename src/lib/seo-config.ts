// Configuration SEO centralisée pour toutes les pages
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  structuredData?: object;
  noIndex?: boolean;
}

// Configuration de base
const baseConfig = {
  siteName: "SOS Nettoyage Diogène",
  siteUrl: "https://sosnettoyagediogene.fr",
  defaultImage: "https://sosnettoyagediogene.fr/p1.png",
  defaultKeywords: "sos nettoyage diogène, nettoyage syndrome diogène, débarras montpellier, nettoyage extrême, insalubrité, désinfection, évacuation déchets, nettoyage professionnel, montpellier, sète, béziers, hérault, occitanie"
};

// Configuration SEO par page
export const seoConfig: Record<string, SEOConfig> = {
  // Page d'accueil
  "/": {
    title: "SOS Nettoyage Diogène Montpellier | Débarras Professionnel 7j/7",
    description: "SOS Nettoyage Diogène - Société spécialisée dans le nettoyage et débarras syndrome de Diogène à Montpellier, Sète, Béziers. Intervention discrète, professionnelle et respectueuse. Devis gratuit 7j/7. Tél: 07 67 13 54 58",
    keywords: `${baseConfig.defaultKeywords}, intervention urgence, nettoyage professionnel montpellier, syndrome diogène montpellier`,
    canonical: `${baseConfig.siteUrl}/`,
    ogImage: baseConfig.defaultImage,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SOS Nettoyage Diogène",
      "alternateName": "SOS Nettoyage Diogène Montpellier",
      "description": "SOS Nettoyage Diogène - Société spécialisée dans le nettoyage et débarras syndrome de Diogène à Montpellier. Intervention discrète, professionnelle et respectueuse.",
      "url": baseConfig.siteUrl,
      "telephone": "+33767135458",
      "email": "contact@nettoyage-diogene-montpellier.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montpellier",
        "addressRegion": "Hérault",
        "addressCountry": "FR",
        "postalCode": "34000"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.611",
        "longitude": "3.8767"
      },
      "areaServed": [
        { "@type": "City", "name": "Montpellier" },
        { "@type": "City", "name": "Sète" },
        { "@type": "City", "name": "Béziers" },
        { "@type": "City", "name": "Nîmes" },
        { "@type": "City", "name": "Perpignan" },
        { "@type": "City", "name": "Toulouse" },
        { "@type": "City", "name": "Marseille" },
        { "@type": "City", "name": "Nice" },
        { "@type": "City", "name": "Bordeaux" }
      ],
      "serviceType": [
        "Nettoyage Syndrome de Diogène",
        "Débarras Gros Volumes", 
        "Désinfection et Insalubrité",
        "Nettoyage Extrême",
        "Évacuation Déchets"
      ],
      "openingHours": "Mo-Su 08:00-20:00",
      "priceRange": "€€",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "currenciesAccepted": "EUR",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "94",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Marie L."
          },
          "reviewBody": "Service exceptionnel ! Équipe très professionnelle et discrète. Intervention rapide et efficace. Je recommande vivement.",
          "datePublished": "2024-01-15"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Jean-Pierre M."
          },
          "reviewBody": "Très satisfait du service. Respect total de la situation et intervention dans les délais. Prix correct pour la qualité.",
          "datePublished": "2024-01-10"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Michel R."
          },
          "reviewBody": "Excellent service ! L'équipe a su comprendre notre situation et nous accompagner avec bienveillance. Le résultat dépasse nos attentes.",
          "datePublished": "2024-01-05"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Catherine B."
          },
          "reviewBody": "Service professionnel et humain. L'équipe a su gérer une situation complexe avec beaucoup de délicatesse. Je recommande sans hésitation.",
          "datePublished": "2024-01-02"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Alain T."
          },
          "reviewBody": "Très bon service, équipe compétente et discrète. Le nettoyage a été fait dans les règles de l'art. Merci pour votre professionnalisme.",
          "datePublished": "2023-12-28"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/propremonsud",
        "https://www.linkedin.com/company/propre-mon-sud"
      ],
      "image": baseConfig.defaultImage,
      "logo": "https://sosnettoyagediogene.fr/logo.png"
    }
  },

  // Page Syndrome de Diogène
  "/nettoyage-syndrome-diogene-montpellier": {
    title: "Nettoyage Syndrome de Diogène Montpellier | Intervention Spécialisée",
    description: "Intervention spécialisée et respectueuse pour le nettoyage syndrome de Diogène à Montpellier. Équipe formée, discrétion totale, intervention 7j/7. Devis gratuit. Tél: 07 67 13 54 58",
    keywords: `${baseConfig.defaultKeywords}, nettoyage syndrome diogène montpellier, intervention syndrome diogène, nettoyage extrême montpellier, accumulation compulsive, nettoyage spécialisé`,
    canonical: `${baseConfig.siteUrl}/nettoyage-syndrome-diogene-montpellier`,
    ogImage: baseConfig.defaultImage,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Nettoyage Syndrome de Diogène",
      "description": "Intervention spécialisée et respectueuse pour les situations d'accumulation compulsive avec respect et discrétion totale",
      "provider": {
        "@type": "LocalBusiness",
        "name": "SOS Nettoyage Diogène",
        "telephone": "+33767135458",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Montpellier",
          "addressRegion": "Hérault",
          "addressCountry": "FR"
        }
      },
      "areaServed": [
        { "@type": "City", "name": "Montpellier" },
        { "@type": "City", "name": "Sète" },
        { "@type": "City", "name": "Béziers" }
      ],
      "serviceType": "Nettoyage Syndrome de Diogène",
      "offers": {
        "@type": "Offer",
        "description": "Devis gratuit et sans engagement",
        "priceCurrency": "EUR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "94",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  },

  // Page Débarras
  "/debarras-gros-volumes-montpellier": {
    title: "Débarras Gros Volumes Montpellier | Évacuation Professionnelle",
    description: "Service de débarras gros volumes à Montpellier. Évacuation et tri de tous types d'objets, meubles et déchets en respectant l'environnement. Intervention rapide 7j/7. Devis gratuit.",
    keywords: `${baseConfig.defaultKeywords}, débarras montpellier, évacuation déchets montpellier, débarras gros volumes, tri déchets, évacuation meubles montpellier, débarras professionnel`,
    canonical: `${baseConfig.siteUrl}/debarras-gros-volumes-montpellier`,
    ogImage: baseConfig.defaultImage,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Débarras Gros Volumes",
      "description": "Évacuation et tri de tous types d'objets, meubles et déchets en respectant l'environnement",
      "provider": {
        "@type": "LocalBusiness",
        "name": "SOS Nettoyage Diogène",
        "telephone": "+33767135458"
      },
      "areaServed": [
        { "@type": "City", "name": "Montpellier" },
        { "@type": "City", "name": "Sète" },
        { "@type": "City", "name": "Béziers" }
      ],
      "serviceType": "Débarras Gros Volumes",
      "offers": {
        "@type": "Offer",
        "description": "Devis gratuit et sans engagement",
        "priceCurrency": "EUR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "94",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  },

  // Page Désinfection
  "/desinfection-insalubrite-montpellier": {
    title: "Désinfection Insalubrité Montpellier | Traitement Professionnel",
    description: "Service de désinfection et traitement des environnements insalubres à Montpellier. Produits professionnels et techniques adaptées. Intervention rapide et efficace. Devis gratuit.",
    keywords: `${baseConfig.defaultKeywords}, désinfection montpellier, insalubrité montpellier, traitement insalubrité, désinfection professionnelle, nettoyage insalubre, désinfection environnement`,
    canonical: `${baseConfig.siteUrl}/desinfection-insalubrite-montpellier`,
    ogImage: baseConfig.defaultImage,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Désinfection et Insalubrité",
      "description": "Traitement des environnements insalubres avec des produits professionnels et techniques adaptées",
      "provider": {
        "@type": "LocalBusiness",
        "name": "SOS Nettoyage Diogène",
        "telephone": "+33767135458"
      },
      "areaServed": [
        { "@type": "City", "name": "Montpellier" },
        { "@type": "City", "name": "Sète" },
        { "@type": "City", "name": "Béziers" }
      ],
      "serviceType": "Désinfection et Insalubrité",
      "offers": {
        "@type": "Offer",
        "description": "Devis gratuit et sans engagement",
        "priceCurrency": "EUR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "94",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  },

  // Page 404
  "/404": {
    title: "Page Non Trouvée | SOS Nettoyage Diogène",
    description: "La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir nos services de nettoyage et débarras à Montpellier.",
    keywords: baseConfig.defaultKeywords,
    canonical: `${baseConfig.siteUrl}/404`,
    noIndex: true
  }
};

// Fonction utilitaire pour obtenir la config SEO d'une page
export const getSEOConfig = (pathname: string): SEOConfig => {
  return seoConfig[pathname] || seoConfig["/"];
};

// Fonction pour générer le titre complet
export const generateTitle = (title: string, siteName: string = baseConfig.siteName): string => {
  if (title.includes(siteName)) {
    return title;
  }
  return `${title} | ${siteName} Montpellier`;
};

// Fonction pour générer l'URL canonique
export const generateCanonical = (pathname: string): string => {
  return `${baseConfig.siteUrl}${pathname}`;
};
