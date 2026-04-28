import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { SITE_PAGES, STATIC_ARTICLES } from "@/lib/cms-site-map";
import { AlertTriangle, FileText, Star, Image as ImageIcon, FileEdit, Network } from "lucide-react";

export default function AdminDashboard() {
  const [counts, setCounts] = useState({ cmsArticles: 0, reviews: 0, gallery: 0, editableBlocks: 0 });
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const [a, r, g, p] = await Promise.all([
        supabase.from("articles").select("id"),
        supabase.from("reviews").select("id"),
        supabase.from("gallery_items").select("id"),
        supabase.from("page_contents").select("id"),
      ]);
      setErrors([a.error, r.error, g.error, p.error].filter(Boolean).map((error) => error!.message));
      setCounts({
        cmsArticles: a.data?.length ?? 0,
        reviews: r.data?.length ?? 0,
        gallery: g.data?.length ?? 0,
        editableBlocks: p.data?.length ?? 0,
      });
    })();
  }, []);

  const cards = [
    { to: "/admin/articles", label: "Articles", count: counts.cmsArticles + STATIC_ARTICLES.length, detail: `${STATIC_ARTICLES.length} existants + ${counts.cmsArticles} CMS`, icon: FileText },
    { to: "/admin/reviews", label: "Avis clients", count: counts.reviews, icon: Star },
    { to: "/admin/gallery", label: "Galerie", count: counts.gallery, icon: ImageIcon },
    { to: "/admin/pages", label: "Pages du site", count: SITE_PAGES.length, detail: `${counts.editableBlocks} blocs Supabase`, icon: Network },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
        <p className="text-muted-foreground text-sm">Vue d'ensemble du contenu, des pages et du cocon sémantique</p>
      </div>
      {errors.length > 0 && (
        <div className="rounded-md border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          <div className="mb-2 flex items-center gap-2 font-medium"><AlertTriangle className="h-4 w-4" /> Supabase bloque certaines données</div>
          <ul className="list-disc space-y-1 pl-5">
            {errors.map((error) => <li key={error}>{error}</li>)}
          </ul>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link key={c.to} to={c.to} className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{c.label}</span>
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div className="text-3xl font-bold mt-2">{c.count}</div>
              {c.detail && <div className="mt-1 text-xs text-muted-foreground">{c.detail}</div>}
            </Link>
          );
        })}
      </div>
      <Link to="/admin/pages" className="block rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary">
        <div className="flex items-center gap-3">
          <FileEdit className="h-5 w-5 text-primary" />
          <div>
            <h2 className="font-semibold">Pilotage SEO et cocon sémantique</h2>
            <p className="text-sm text-muted-foreground">Toutes les routes du site sont visibles avec leur parent, leur statut CMS et leurs liens internes.</p>
          </div>
        </div>
      </Link>
    </div>
  );
}