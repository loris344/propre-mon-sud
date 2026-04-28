import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import type { Article } from "@/lib/cms-types";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ArticlesList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    else setArticles(data as Article[]);
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Articles</h1>
          <p className="text-sm text-muted-foreground">Gérer les articles de blog</p>
        </div>
        <Button asChild><Link to="/admin/articles/new"><Plus className="w-4 h-4 mr-2" /> Nouvel article</Link></Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
      ) : articles.length === 0 ? (
        <div className="bg-card border border-border rounded-lg p-12 text-center text-muted-foreground">
          Aucun article. Crée le premier !
        </div>
      ) : (
        <div className="bg-card border border-border rounded-lg divide-y divide-border">
          {articles.map((a) => (
            <div key={a.id} className="p-4 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium truncate">{a.title}</h3>
                  {a.published ? (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Publié</span>
                  ) : (
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">Brouillon</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate">/{a.slug}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => togglePublished(a)} title={a.published ? "Dépublier" : "Publier"}>
                {a.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
              <Button variant="ghost" size="sm" asChild><Link to={`/admin/articles/${a.id}`}><Edit className="w-4 h-4" /></Link></Button>
              <Button variant="ghost" size="sm" onClick={() => remove(a.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}