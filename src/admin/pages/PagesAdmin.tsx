import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import { SITE_PAGES, type SitePageEntry } from "@/lib/cms-site-map";
import type { Article } from "@/lib/cms-types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ExternalLink, FileText, Link2, Loader2, Network, Save, Search } from "lucide-react";
import { toast } from "sonner";

/** Editable text blocks across the public site. Add new entries here as needed. */
const PAGE_BLOCKS: Array<{ page: string; key: string; label: string; multiline?: boolean }> = [
  { page: "home", key: "hero_title", label: "Accueil - Titre Hero" },
  { page: "home", key: "hero_subtitle", label: "Accueil - Sous-titre Hero", multiline: true },
  { page: "home", key: "services_intro", label: "Accueil - Intro Services", multiline: true },
  { page: "landing-diogene", key: "hero_title", label: "Landing Diogène - Titre" },
  { page: "landing-diogene", key: "hero_subtitle", label: "Landing Diogène - Sous-titre", multiline: true },
  { page: "landing-debarras", key: "hero_title", label: "Landing Débarras - Titre" },
  { page: "landing-debarras", key: "hero_subtitle", label: "Landing Débarras - Sous-titre", multiline: true },
  { page: "landing-desinfection", key: "hero_title", label: "Landing Désinfection - Titre" },
  { page: "landing-desinfection", key: "hero_subtitle", label: "Landing Désinfection - Sous-titre", multiline: true },
  { page: "landing-apresdeces", key: "hero_title", label: "Landing Après-Décès - Titre" },
  { page: "landing-apresdeces", key: "hero_subtitle", label: "Landing Après-Décès - Sous-titre", multiline: true },
  { page: "service-debarras", key: "intro", label: "Service Débarras - Intro", multiline: true },
  { page: "service-desinfection", key: "intro", label: "Service Désinfection - Intro", multiline: true },
  { page: "service-apresdeces", key: "intro", label: "Service Après-Décès - Intro", multiline: true },
];

export default function PagesAdmin() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"site" | "blocks">("site");
  const [query, setQuery] = useState("");
  const [groupFilter, setGroupFilter] = useState("Toutes");

  useEffect(() => {
    (async () => {
      const [pageRes, articleRes] = await Promise.all([
        supabase.from("page_contents").select("*"),
        supabase.from("articles").select("*"),
      ]);
      if (pageRes.error) toast.error(pageRes.error.message);
      if (articleRes.error) toast.error(articleRes.error.message);
      if (!pageRes.error) {
        const map: Record<string, string> = {};
        pageRes.data?.forEach((r: any) => { map[`${r.page_key}::${r.block_key}`] = r.value; });
        setValues(map);
      }
      if (!articleRes.error) setArticles((articleRes.data ?? []) as Article[]);
      setLoading(false);
    })();
  }, []);

  const cmsArticlePages: SitePageEntry[] = useMemo(() => articles.map((article) => ({
    path: `/blog/${article.slug}`,
    title: article.title,
    description: article.excerpt ?? "Article créé dans le CMS",
    group: "Articles CMS Supabase",
    kind: "Article blog CMS",
    status: "Éditable CMS",
    parent: "/blog",
    links: ["/blog"],
  })), [articles]);

  const sitePages = useMemo(() => [...SITE_PAGES, ...cmsArticlePages], [cmsArticlePages]);
  const groups = useMemo(() => ["Toutes", ...Array.from(new Set(sitePages.map((page) => page.group)))], [sitePages]);
  const filteredPages = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return sitePages.filter((page) => {
      const matchesGroup = groupFilter === "Toutes" || page.group === groupFilter;
      const matchesQuery = !normalizedQuery || [page.path, page.title, page.description, page.kind, page.parent ?? ""].some((value) => value.toLowerCase().includes(normalizedQuery));
      return matchesGroup && matchesQuery;
    });
  }, [groupFilter, query, sitePages]);

  const stats = useMemo(() => ({
    total: sitePages.length,
    editable: sitePages.filter((page) => page.status === "Éditable CMS" || page.status === "Blocs éditables").length,
    staticPages: sitePages.filter((page) => page.status === "Statique").length,
    noIndex: sitePages.filter((page) => page.noIndex).length,
  }), [sitePages]);

  async function save(page: string, key: string) {
    const k = `${page}::${key}`;
    const value = values[k] ?? "";
    setSaving(k);
    const { error } = await supabase.from("page_contents")
      .upsert({ page_key: page, block_key: key, value, updated_at: new Date().toISOString() }, { onConflict: "page_key,block_key" });
    setSaving(null);
    if (error) toast.error(error.message); else toast.success("Enregistré");
  }

  if (loading) return <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Pages & cocon sémantique</h1>
        <p className="text-sm text-muted-foreground">Piloter toutes les pages du site, voir les liens internes et modifier les blocs déjà branchés au CMS.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4"><div className="text-xs text-muted-foreground">Pages connues</div><div className="text-2xl font-bold">{stats.total}</div></div>
        <div className="rounded-lg border border-border bg-card p-4"><div className="text-xs text-muted-foreground">Éditables</div><div className="text-2xl font-bold">{stats.editable}</div></div>
        <div className="rounded-lg border border-border bg-card p-4"><div className="text-xs text-muted-foreground">Statiques</div><div className="text-2xl font-bold">{stats.staticPages}</div></div>
        <div className="rounded-lg border border-border bg-card p-4"><div className="text-xs text-muted-foreground">NoIndex</div><div className="text-2xl font-bold">{stats.noIndex}</div></div>
      </div>

      <div className="flex flex-wrap gap-2 rounded-lg border border-border bg-card p-2">
        <Button size="sm" variant={activeTab === "site" ? "default" : "ghost"} onClick={() => setActiveTab("site")}>
          <Network className="h-4 w-4" /> Cocon sémantique
        </Button>
        <Button size="sm" variant={activeTab === "blocks" ? "default" : "ghost"} onClick={() => setActiveTab("blocks")}>
          <FileText className="h-4 w-4" /> Blocs éditables
        </Button>
      </div>

      {activeTab === "site" ? (
        <div className="space-y-4">
          <div className="grid gap-3 rounded-lg border border-border bg-card p-4 lg:grid-cols-[1fr_220px]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher une page, un mot-clé, une ville..." className="pl-9" />
            </div>
            <select value={groupFilter} onChange={(e) => setGroupFilter(e.target.value)} className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              {groups.map((group) => <option key={group} value={group}>{group}</option>)}
            </select>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="border-b border-border p-4">
              <h2 className="font-semibold">Arborescence SEO</h2>
              <p className="text-xs text-muted-foreground">{filteredPages.length} pages affichées. Les pages “Statique” existent déjà mais ne sont pas encore entièrement modifiables depuis Supabase.</p>
            </div>
            <div className="divide-y divide-border">
              {filteredPages.map((page) => (
                <div key={page.path} className="grid gap-4 p-4 xl:grid-cols-[minmax(0,1fr)_260px]">
                  <div className="min-w-0 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline">{page.group}</Badge>
                      <Badge variant={page.status === "Éditable CMS" || page.status === "Blocs éditables" ? "default" : "secondary"}>{page.status}</Badge>
                      <span className="text-xs text-muted-foreground">{page.kind}</span>
                    </div>
                    <div>
                      <h3 className="truncate font-semibold">{page.title}</h3>
                      <p className="truncate text-xs text-primary">{page.path}</p>
                    </div>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{page.description}</p>
                    {page.parent && <p className="text-xs text-muted-foreground">Parent : <span className="text-foreground">{page.parent}</span></p>}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground"><Link2 className="h-3.5 w-3.5" /> Liens internes</span>
                      <Button variant="outline" size="sm" asChild>
                        <a href={page.path} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /> Voir</a>
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {page.links.length > 0 ? page.links.map((link) => <Badge key={link} variant="outline">{link}</Badge>) : <span className="text-xs text-muted-foreground">Aucun lien sortant défini</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {PAGE_BLOCKS.map((b) => {
            const k = `${b.page}::${b.key}`;
            const value = values[k] ?? "";
            return (
              <div key={k} className="bg-card border border-border rounded-lg p-4 space-y-2">
                <Label>{b.label}</Label>
                {b.multiline ? (
                  <Textarea rows={3} value={value} onChange={(e) => setValues({ ...values, [k]: e.target.value })} />
                ) : (
                  <Input value={value} onChange={(e) => setValues({ ...values, [k]: e.target.value })} />
                )}
                <div className="flex justify-end">
                  <Button size="sm" onClick={() => save(b.page, b.key)} disabled={saving === k}>
                    {saving === k ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Save className="w-4 h-4 mr-2" /> Enregistrer</>}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}