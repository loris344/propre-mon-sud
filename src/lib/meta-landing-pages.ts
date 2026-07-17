const META_LANDING_PATHS = ["/landing/diogene-devis-meta", "/landing/insalubrite-devis-meta"];

// Pages Meta Ads : le numéro de téléphone est volontairement masqué partout
// (header, hero, bulle flottante) pour ne laisser que le formulaire, seul
// canal de conversion suivi côté pixel Meta (pas de call tracking dessus).
export const isMetaLandingPage = (pathname: string | null): boolean =>
  !!pathname && META_LANDING_PATHS.some((path) => pathname.startsWith(path));
