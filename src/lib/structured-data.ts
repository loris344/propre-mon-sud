/**
 * Données structurées JSON-LD (schema.org).
 * Reprises de l'ancien index.html — désormais injectées côté serveur.
 */

export const SITE_URL = "https://sosnettoyagediogene.fr";

/**
 * LocalBusiness UNIQUE du site (reco Google : émis sur la page d'accueil
 * seulement, pas dupliqué sur toutes les pages). Le `@id` stable permet aux
 * pages locales de le référencer via `provider` sans recopier l'entité.
 * JAMAIS d'aggregateRating ici : les self-serving reviews sont inéligibles
 * aux étoiles (règle Google depuis 2019) et un rating codé en dur expose à
 * une action manuelle. Les étoiles locales = Google Business Profile.
 */
export const BUSINESS_ID = `${SITE_URL}/#business`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  name: "SOS Nettoyage Diogène & Débarras",
  alternateName: "SOS Nettoyage Diogène",
  description:
    "Société spécialisée dans le nettoyage syndrome de Diogène, débarras et insalubrité. Intervention discrète et professionnelle dans le Sud de la France.",
  url: SITE_URL,
  telephone: "+33767135458",
  email: "contact@sosnettoyagediogene.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montpellier",
    addressRegion: "Hérault",
    addressCountry: "FR",
    postalCode: "34000",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "43.611",
    longitude: "3.8767",
  },
  // Zone d'intervention déclarée en territoires administratifs (plus propre
  // qu'une liste de villes) ; le détail ville par ville vit sur les pages
  // locales, chacune avec son propre Service + areaServed.
  areaServed: [
    { "@type": "AdministrativeArea", name: "Occitanie" },
    { "@type": "AdministrativeArea", name: "Provence-Alpes-Côte d'Azur" },
  ],
  serviceType: [
    "Nettoyage Syndrome de Diogène",
    "Débarras Gros Volumes",
    "Désinfection et Insalubrité",
    "Nettoyage Après Décès",
  ],
  priceRange: "€€",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  currenciesAccepted: "EUR",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services SOS Nettoyage Diogène & Débarras",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nettoyage Syndrome de Diogène",
          description:
            "Intervention spécialisée dans les situations d'accumulation compulsive avec respect et discrétion totale",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Débarras Gros Volumes",
          description:
            "Évacuation et tri de tous types d'objets, meubles et déchets en respectant l'environnement",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Désinfection et Insalubrité",
          description:
            "Traitement des environnements insalubres avec des produits professionnels et techniques adaptées",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nettoyage Après Décès",
          description:
            "Service spécialisé de nettoyage et remise en état après décès, intervention respectueuse et discrète",
        },
      },
    ],
  },
  // sameAs RETIRÉ : les anciens profils « propremonsud » ne correspondent plus
  // à l'entité renommée (SOS Nettoyage Diogène & Débarras) et un sameAs vers un
  // profil incohérent brouille l'entité. À RÉTABLIR avec les vraies URLs des
  // profils officiels (Google Business Profile, Facebook, etc.) une fois
  // confirmées, par ex. : sameAs: ["https://www.facebook.com/<page-reelle>"].
  image: `${SITE_URL}/images/logos/p1.png`,
  logo: `${SITE_URL}/images/logos/logo.png`,
};

/** Sérialise un objet JSON-LD pour injection dans une balise <script>. */
export function jsonLd(data: object): { __html: string } {
  return { __html: JSON.stringify(data) };
}
