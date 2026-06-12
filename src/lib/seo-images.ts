/**
 * Résolution de l'image d'une page SEO, sans jamais inventer de preuve.
 *
 * Priorité : image EXACTE (chantier de cette URL) > fallback par SERVICE > rien.
 * Les pages sans image restent publiables (Image obligatoire = Non dans le plan,
 * sauf /realisations/* gérées à part).
 *
 * L'alt est UNIQUE par page : on part de l'alt proposé dans l'Excel, sinon on
 * le construit depuis service + ville. Jamais deux alts strictement identiques
 * pour deux URLs différentes (la ville/le titre les différencie).
 */
import imageMap from "@/data/image-map.json";
import imageFallbacks from "@/data/image-fallbacks.json";
import type { SeoPage } from "@/lib/seo-pages";

const OPTIMIZED = "/images/seo/optimized";
const MAP: Record<string, string> = imageMap as Record<string, string>;
const FALLBACKS: Record<string, string[]> = imageFallbacks as Record<string, string[]>;

export interface ResolvedImage {
  src: string;
  alt: string;
  exact: boolean;
}

/** Hash déterministe (même page → même image de fallback ; villes voisines → images différentes). */
function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function altFor(page: SeoPage): string {
  if (page.altProposed) return page.altProposed;
  const where = page.ville || page.departement || page.region;
  const base = page.h1 || page.title || page.service;
  // Pas de tiret cadratin : l'alt est du contenu visible par les outils, la
  // règle de style du client s'y applique aussi.
  return where ? `${base} : illustration de nos interventions à ${where}` : `${base} : illustration de nos interventions`;
}

/** Silos transversaux sans pool photo propre : ils réutilisent le pool
 *  insalubre (mêmes typologies de chantiers). Le champ `service` du plan reste
 *  exact (il alimente le serviceType du JSON-LD) ; seul le pool est partagé.
 *  L'alias vit ici (et pas dans image-fallbacks.json) pour survivre aux
 *  régénérations via `npm run seo:images`. */
const POOL_ALIASES: Record<string, string> = {
  "Nettoyage après sinistre": "Nettoyage insalubre",
  "Remise en état de logement": "Nettoyage insalubre",
  "Nettoyage extrême": "Nettoyage insalubre",
};

export function resolveSeoImage(page: SeoPage): ResolvedImage | null {
  const alt = altFor(page);

  // 1) Image exacte du chantier de cette URL
  const exact = MAP[page.url];
  if (exact) return { src: `${OPTIMIZED}/${exact}`, alt, exact: true };

  // 2) Fallback par service (rotation déterministe pour éviter les répétitions)
  const pool = FALLBACKS[page.service] || FALLBACKS[POOL_ALIASES[page.service]] || [];
  if (pool.length > 0) {
    const file = pool[hash(page.url) % pool.length];
    return { src: `${OPTIMIZED}/${file}`, alt, exact: false };
  }

  // 3) Aucune image disponible → la page se publie sans image
  return null;
}
