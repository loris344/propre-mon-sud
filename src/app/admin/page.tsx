import { notFound } from "next/navigation";
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
  // publication futures, notes) : en export statique, `noindex` n'empêche pas
  // un concurrent de lire la stratégie sur /admin/. Consultation en local
  // uniquement (npm run dev) ; l'export publié sert un 404.
  if (process.env.NODE_ENV === "production") notFound();
  const baseline = normalizePlan(baselineJson);
  // Les 790 pages SEO programmatiques (Bondash.xlsx) rejoignent le MÊME plan,
  // avec leur statut réel (planifié / rédaction / relecture-programmée / publié).
  const merged = { ...baseline, pages: [...baseline.pages, ...getSeoPagesAsPlanned()] };
  return <AdminDashboard baseline={merged} />;
}
