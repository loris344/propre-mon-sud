import { buildMetadata } from "@/lib/metadata";
import AdminDashboard from "@/components/admin/AdminDashboard";
import { normalizePlan } from "@/lib/page-plan";
import { getSeoPagesAsPlanned } from "@/lib/seo-pages";
// Baseline versionnée (source de vérité). Le dashboard applique ensuite un
// calque localStorage par-dessus. Voir AdminDashboard pour le détail du modèle.
import baselineJson from "../../../content/page-plan.json";

// Page non indexée : robots noindex via buildMetadata, et absente du sitemap
// (src/app/sitemap.ts est une liste manuelle).
export const metadata = buildMetadata("/admin", { noIndex: true });
export const dynamic = "force-static";

export default function AdminPage() {
  // Le dashboard embarque TOUT le plan éditorial (mots-clés, dates de
  // publication futures, notes) et est désormais servi en ligne (décision
  // client 12/06/2026 : accès admin distant souhaité). L'accès est gardé par un
  // mot de passe côté client (AdminDashboard) + noindex + page non liée / hors
  // sitemap. RAPPEL : sur un export statique, le mot de passe MASQUE l'UI mais
  // ne chiffre pas les données — le plan reste techniquement lisible dans le
  // bundle public par qui inspecte le code. Pour un vrai secret, héberger
  // l'admin sur une cible avec auth serveur (hors GitHub Pages).
  const baseline = normalizePlan(baselineJson);
  // Les 790 pages SEO programmatiques (Bondash.xlsx) rejoignent le MÊME plan,
  // avec leur statut réel (planifié / rédaction / relecture-programmée / publié).
  const merged = { ...baseline, pages: [...baseline.pages, ...getSeoPagesAsPlanned()] };
  return <AdminDashboard baseline={merged} />;
}
