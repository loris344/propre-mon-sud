import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/structured-data";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Pas de disallow sur les pages noindex (landing, fiches pro, admin) :
  // bloquer le crawl empêcherait Google de VOIR la balise noindex — c'est
  // elle qui fait foi. Le crawl de ces quelques pages est négligeable.
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
