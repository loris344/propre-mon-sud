import type { Metadata } from "next";
import { getSEOConfig, SEOConfig } from "@/lib/seo-config";
import { SITE_URL } from "@/lib/structured-data";

const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logos/p1.webp`;

/**
 * Aligne le canonical sur la config `trailingSlash: true` de Next : les URLs
 * émises se terminent par "/", donc le canonical doit faire de même pour éviter
 * des signaux d'URL en double aux yeux de Google.
 */
export function withTrailingSlash(path: string): string {
  if (path.endsWith("/")) return path;
  return `${path}/`;
}

/**
 * Construit l'objet Metadata de Next à partir de la config SEO centralisée.
 * Remplace l'ancien <SEOHead> (react-helmet) : les balises sont désormais
 * émises côté serveur, présentes dans le HTML statique avant tout JS.
 */
export function buildMetadata(pathname: string, overrides?: Partial<SEOConfig>): Metadata {
  const config = { ...getSEOConfig(pathname), ...overrides };
  const ogImage = config.ogImage || DEFAULT_OG_IMAGE;
  const canonical = withTrailingSlash(config.canonical);

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical,
    },
    robots: config.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: config.title,
      description: config.description,
      url: canonical,
      siteName: "SOS Nettoyage Diogène",
      locale: "fr_FR",
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [ogImage],
    },
  };
}
