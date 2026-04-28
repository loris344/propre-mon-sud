import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { FileText, Star, Image as ImageIcon, FileEdit } from "lucide-react";

export default function AdminDashboard() {
  const [counts, setCounts] = useState({ articles: 0, reviews: 0, gallery: 0, pages: 0 });

  useEffect(() => {
    (async () => {
      const [a, r, g, p] = await Promise.all([
        supabase.from("articles").select("id", { count: "exact", head: true }),
        supabase.from("reviews").select("id", { count: "exact", head: true }),
        supabase.from("gallery_items").select("id", { count: "exact", head: true }),
        supabase.from("page_contents").select("id", { count: "exact", head: true }),
      ]);
      setCounts({ articles: a.count ?? 0, reviews: r.count ?? 0, gallery: g.count ?? 0, pages: p.count ?? 0 });
    })();
  }, []);

  const cards = [
    { to: "/admin/articles", label: "Articles", count: counts.articles, icon: FileText },
    { to: "/admin/reviews", label: "Avis clients", count: counts.reviews, icon: Star },
    { to: "/admin/gallery", label: "Galerie", count: counts.gallery, icon: ImageIcon },
    { to: "/admin/pages", label: "Blocs de pages", count: counts.pages, icon: FileEdit },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
        <p className="text-muted-foreground text-sm">Vue d'ensemble du contenu du site</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link key={c.to} to={c.to} className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{c.label}</span>
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div className="text-3xl font-bold mt-2">{c.count}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}