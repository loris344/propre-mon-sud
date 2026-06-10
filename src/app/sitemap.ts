import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { getPublishedPages } from "@/lib/seo-pages";
import { SITE_URL } from "@/lib/structured-data";

export const dynamic = "force-static";

/**
 * Sitemap généré automatiquement à partir des VRAIES pages et des articles
 * publiés. Plus de désynchronisation possible entre le code et le sitemap.
 * Les pages noindex (landing, fiches pro) en sont volontairement exclues.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/blog",
    "/partenariat-mjpm",
    "/partenariat-maisons-retraite",
    "/mentions-legales",
    "/politique-confidentialite",
  ];

  // trailingSlash: true → on aligne les URLs du sitemap sur la forme avec "/".
  const withSlash = (route: string) => (route.endsWith("/") ? route : `${route}/`);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${withSlash(route)}`,
    changeFrequency: route === "/" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}/`,
    lastModified: article.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Pages SEO programmatiques : uniquement celles RÉELLEMENT publiées
  // (publishAt <= date du build). Les pages futures restent hors sitemap.
  const seoEntries: MetadataRoute.Sitemap = getPublishedPages().map((page) => ({
    url: page.canonical || `${SITE_URL}${page.url}`,
    lastModified: page.publishAt || undefined,
    changeFrequency: "monthly",
    priority: page.priority && page.priority <= 1 ? 0.8 : 0.6,
  }));

  return [...staticEntries, ...articleEntries, ...seoEntries];
}
