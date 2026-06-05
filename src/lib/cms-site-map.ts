import { SEO_CONFIGS } from "@/lib/seo-config";

export type SitePageStatus = "Éditable CMS" | "Blocs éditables" | "Statique" | "NoIndex";

export type SitePageEntry = {
  path: string;
  title: string;
  description: string;
  group: string;
  kind: string;
  status: SitePageStatus;
  parent?: string;
  links: string[];
  noIndex?: boolean;
};

export type StaticArticleEntry = {
  slug: string;
  path: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
};

const makePage = (
  path: string,
  group: string,
  kind: string,
  status: SitePageStatus,
  parent?: string,
  links: string[] = [],
): SitePageEntry => {
  const seo = SEO_CONFIGS[path];
  return {
    path,
    title: seo?.title ?? path,
    description: seo?.description ?? "Page du site",
    group,
    kind,
    status: seo?.noIndex ? "NoIndex" : status,
    parent,
    links,
    noIndex: seo?.noIndex,
  };
};

export const STATIC_ARTICLES: StaticArticleEntry[] = [
  {
    slug: "syndrome-diogene-identifier-gerer",
    path: "/blog/syndrome-diogene-identifier-gerer",
    title: "Syndrome de Diogène : Comment identifier et gérer cette situation",
    category: "Santé mentale",
    excerpt: "Les signes d'alerte, les statistiques et les étapes pour accompagner une personne concernée avec bienveillance.",
    readTime: "5 min",
    publishedAt: "2024-01-15",
  },
  {
    slug: "debarras-apres-deces-accompagnement",
    path: "/blog/debarras-apres-deces-accompagnement",
    title: "Débarras après décès : Un accompagnement respectueux et professionnel",
    category: "Accompagnement",
    excerpt: "Délais légaux, protocole en 5 étapes, coûts et ressources d'accompagnement psychologique.",
    readTime: "4 min",
    publishedAt: "2024-01-10",
  },
  {
    slug: "desinfection-assainissement-protocoles",
    path: "/blog/desinfection-assainissement-protocoles",
    title: "Désinfection et assainissement : Protocoles et bonnes pratiques",
    category: "Technique",
    excerpt: "Protocole de désinfection en 6 étapes, produits certifiés, normes ISO et conseils pratiques.",
    readTime: "6 min",
    publishedAt: "2024-01-05",
  },
  {
    slug: "prevention-insalubrite-conseils",
    path: "/blog/prevention-insalubrite-conseils",
    title: "Prévention de l'insalubrité : Conseils pour maintenir un logement sain",
    category: "Prévention",
    excerpt: "Conseils pratiques, checklist mensuelle et comparaison des coûts prévention vs réparation.",
    readTime: "7 min",
    publishedAt: "2024-01-01",
  },
];

export const SITE_PAGES: SitePageEntry[] = [
  makePage("/", "Hub principal", "Accueil", "Blocs éditables", undefined, ["/tous-nos-services", "/blog", "/nettoyage-apres-deces", "/debarras-gros-volumes", "/desinfection-insalubrite"]),
  makePage("/tous-nos-services", "Hub principal", "Hub services", "Statique", "/", ["/nettoyage-apres-deces", "/debarras-gros-volumes", "/desinfection-insalubrite"]),
  makePage("/blog", "Hub principal", "Hub éditorial", "Statique", "/", STATIC_ARTICLES.map((article) => article.path)),

  makePage("/nettoyage-apres-deces", "Services principaux", "Page service", "Blocs éditables", "/tous-nos-services", ["/nettoyage-appartement-apres-deces"]),
  makePage("/nettoyage-appartement-apres-deces", "Services principaux", "Page service", "Statique", "/nettoyage-apres-deces", ["/nettoyage-apres-deces", "/desinfection-insalubrite"]),
  makePage("/debarras-gros-volumes", "Services principaux", "Page service", "Blocs éditables", "/tous-nos-services", ["/nettoyage-apres-deces", "/desinfection-insalubrite"]),
  makePage("/desinfection-insalubrite", "Services principaux", "Page service", "Blocs éditables", "/tous-nos-services", ["/nettoyage-apres-deces", "/debarras-gros-volumes"]),

  makePage("/prix-diogene", "Autorité locale", "Tarifs", "Statique", "/", ["/nettoyage-syndrome-diogene-montpellier", "/nettoyage-syndrome-diogene-marseille"]),

  ...STATIC_ARTICLES.map((article) => makePage(article.path, "Articles statiques", "Article blog", "Statique", "/blog", ["/blog", "/tous-nos-services"])),

  makePage("/partenariat-mjpm", "Partenariats", "Page B2B", "Statique", "/", ["/tous-nos-services", "/nettoyage-apres-deces"]),
  makePage("/partenariat-maisons-retraite", "Partenariats", "Page B2B", "Statique", "/", ["/tous-nos-services", "/nettoyage-apres-deces"]),

  makePage("/landing/nettoyage-syndrome-diogene", "Landing Ads", "Landing Google Ads", "NoIndex", "/", []),
  makePage("/landing/debarras-gros-volumes", "Landing Ads", "Landing Google Ads", "NoIndex", "/", []),
  makePage("/landing/desinfection-insalubrite", "Landing Ads", "Landing Google Ads", "NoIndex", "/", []),
  makePage("/landing/nettoyage-apres-deces", "Landing Ads", "Landing Google Ads", "NoIndex", "/", []),
  makePage("/landing/traitement-odeurs-nuisibles", "Landing Ads", "Landing Google Ads", "NoIndex", "/", []),

  makePage("/protocole-sanitaire", "Documents pro", "Fiche protocole CCAS / MJPM", "NoIndex", "/", ["/desinfection-insalubrite", "/nettoyage-apres-deces"]),

  makePage("/mentions-legales", "Technique", "Page légale", "Statique", "/", []),
  makePage("/politique-confidentialite", "Technique", "Page légale", "Statique", "/", []),
];