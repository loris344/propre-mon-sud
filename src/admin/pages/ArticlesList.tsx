import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import type { Article } from "@/lib/cms-types";
import { STATIC_ARTICLES } from "@/lib/cms-site-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Eye, EyeOff, Loader2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export default function ArticlesList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const totalArticles = STATIC_ARTICLES.length + articles.length;

  async function load() {
    setLoading(true);
    const { data, error } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
    if (error) {
      toast.error(error.message);
      setArticles([]);
    } else {
      setArticles((data ?? []) as Article[]);
    }
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function togglePublished(a: Article) {
    const { error } = await supabase.from("articles")
      .update({ published: !a.published, published_at: !a.published ? new Date().toISOString() : a.published_at })
      .eq("id", a.id);
    if (error) toast.error(error.message);
    else load();
  }

  async function remove(id: string) {
    if (!confirm("Supprimer cet article ?")) return;
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Article supprimé"); load(); }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Articles</h1>
          <p className="text-sm text-muted-foreground">
            {totalArticles} articles visibles : {STATIC_ARTICLES.length} articles existants du site + {articles.length} articles CMS Supabase.
          </p>
        </div>
        <Button asChild><Link to="/admin/articles/new"><Plus className="w-4 h-4 mr-2" /> Nouvel article</Link></Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
      ) : (
        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-card">
            <div className="border-b border-border p-4">
              <h2 className="font-semibold">Articles existants du site</h2>
              <p className="text-xs text-muted-foreground">Ils sont déjà en ligne dans le code actuel. La prochaine étape serait de les migrer en base si tu veux les éditer en WYSIWYG.</p>
            </div>
            <div className="divide-y divide-border">
              {STATIC_ARTICLES.map((a) => (
                <div key={a.slug} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate font-medium">{a.title}</h3>
                      <Badge variant="outline">Statique</Badge>
                      <Badge variant="secondary">Publié</Badge>
                    </div>
                    <p className="truncate text-xs text-muted-foreground">{a.path} · {a.category} · {a.readTime}</p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={a.path} target="_blank" rel="noreferrer" title="Voir l'article">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card">
            <div className="border-b border-border p-4">
              <h2 className="font-semibold">Articles CMS Supabase</h2>
              <p className="text-xs text-muted-foreground">Ceux-ci sont créés, modifiés, publiés ou supprimés depuis l’admin.</p>
            </div>
            {articles.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">Aucun article CMS pour le moment.</div>
            ) : (
              <div className="divide-y divide-border">
          {articles.map((a) => (
            <div key={a.id} className="p-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-medium truncate">{a.title}</h3>
                  {a.published ? (
                    <Badge>Publié</Badge>
                  ) : (
                    <Badge variant="secondary">Brouillon</Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate">/blog/{a.slug}</p>
              </div>
              <div className="flex items-center gap-1">
                {a.published && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={`/blog/${a.slug}`} target="_blank" rel="noreferrer" title="Voir l'article"><ExternalLink className="w-4 h-4" /></a>
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={() => togglePublished(a)} title={a.published ? "Dépublier" : "Publier"}>
                  {a.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Button variant="ghost" size="sm" asChild><Link to={`/admin/articles/${a.id}`}><Edit className="w-4 h-4" /></Link></Button>
                <Button variant="ghost" size="sm" onClick={() => remove(a.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
              </div>
            </div>
          ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}