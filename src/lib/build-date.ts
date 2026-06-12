/**
 * Dates de référence du build, partagées par TOUTES les couches de publication
 * goutte-à-goutte (pages SEO catch-all, articles de blog, catégories de blog).
 *
 * Module feuille volontairement sans dépendance sur les autres libs : il casse
 * le cycle d'imports entre seo-pages.ts (qui consomme articles.ts /
 * blog-categories.ts) et les libs de contenu. Il ne lit que le JSON de données
 * (pas un module), donc aucun cycle.
 */
import seoData from "@/data/seo-pages.json";

/** Date brute du build (YYYY-MM-DD). Surchargée par SEO_BUILD_DATE pour les tests. */
export function buildDate(): string {
  const override = process.env.SEO_BUILD_DATE;
  if (override && /^\d{4}-\d{2}-\d{2}$/.test(override)) return override;
  return new Date().toISOString().slice(0, 10);
}

/**
 * Date qui PILOTE la publication, avec plancher à la date de lancement du plan.
 * Un build effectué AVANT le lancement prévisualise le set du jour J (et ne
 * laisse jamais une route catch-all sans aucune page, ce que `output: export`
 * interdit — sinon `next build` échoue en entier). À partir du lancement, c'est
 * la vraie date du build qui s'applique.
 *
 * DOIT être utilisée par les TROIS couches (SEO, articles, catégories) pour que
 * leur publication soit cohérente : sinon une couche peut être vide pendant
 * qu'une autre prévisualise, et le build casse (cf. route blog vide).
 */
export function publicationDate(): string {
  const start =
    (seoData as { meta?: { schedule?: { startDate?: string } } }).meta?.schedule?.startDate ||
    "1970-01-01";
  const today = buildDate();
  return today > start ? today : start;
}
