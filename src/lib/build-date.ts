/**
 * Date de référence du build (YYYY-MM-DD), partagée par toutes les couches de
 * publication goutte-à-goutte (pages SEO catch-all, articles de blog,
 * catégories de blog). Surchargée par SEO_BUILD_DATE pour les tests.
 *
 * Module feuille volontairement sans dépendance : il casse le cycle d'imports
 * entre seo-pages.ts (qui consomme articles.ts) et les libs de contenu.
 */
export function buildDate(): string {
  const override = process.env.SEO_BUILD_DATE;
  if (override && /^\d{4}-\d{2}-\d{2}$/.test(override)) return override;
  return new Date().toISOString().slice(0, 10);
}
