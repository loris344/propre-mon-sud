"use client";

import { useState } from "react";

// 1x1 transparent : remplace brièvement la source en erreur, sans déclencher
// de nouvelle erreur, le temps de relancer la vraie URL.
const BLANK =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

interface RetryImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  maxRetries?: number;
}

/**
 * <img> avec re-tentative automatique si la 1ère requête échoue.
 *
 * Un navigateur ne recharge JAMAIS de lui-même une image en erreur. Sur un CDN
 * "froid" (GitHub Pages juste après le rebuild quotidien qui purge le cache),
 * la toute 1ère requête d'une image peu visitée peut échouer (HTTP/2, MISS
 * d'edge, blip réseau) : l'image reste alors cassée jusqu'à un reload MANUEL.
 *
 * Ici, on relance la MÊME URL (l'edge a eu le temps de se réchauffer) au lieu
 * d'imposer ce reload. Rendu côté serveur : l'<img> est bien présent dans le
 * HTML statique exporté, donc aucun impact SEO ni sur les aperçus de partage.
 */
export default function RetryImage({
  src,
  alt,
  className,
  width,
  height,
  maxRetries = 2,
}: RetryImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [attempt, setAttempt] = useState(0);

  const handleError = () => {
    if (attempt >= maxRetries) return;
    const next = attempt + 1;
    setAttempt(next);
    setCurrentSrc(BLANK);
    // délai croissant : on laisse l'edge CDN se réchauffer puis on retente.
    setTimeout(() => setCurrentSrc(src), 500 * next);
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      onError={handleError}
    />
  );
}
