import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import RichEditor from "../RichEditor";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Upload } from "lucide-react";

function slugify(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function ArticleEdit() {
  const { id } = useParams();
  const isNew = id === "new" || !id;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [readTime, setReadTime] = useState("");
  const [published, setPublished] = useState(false);

  useEffect(() => {
    if (isNew) return;
    (async () => {
      const { data, error } = await supabase.from("articles").select("*").eq("id", id).maybeSingle();
      if (error || !data) { toast.error("Article introuvable"); navigate("/admin/articles"); return; }
      setTitle(data.title); setSlug(data.slug); setCategory(data.category ?? "");
      setExcerpt(data.excerpt ?? ""); setContent(data.content_html ?? ""); setCover(data.cover_image ?? "");
      setReadTime(data.read_time ?? ""); setPublished(data.published);
      setLoading(false);
    })();
  }, [id, isNew, navigate]);

  async function uploadCover(file: File) {
    const path = `covers/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const { error } = await supabase.storage.from("cms-media").upload(path, file);
    if (error) { toast.error(error.message); return; }
    const { data } = supabase.storage.from("cms-media").getPublicUrl(path);
    setCover(data.publicUrl);
  }

  async function save() {
    if (!title.trim()) { toast.error("Titre requis"); return; }
    const finalSlug = slug.trim() || slugify(title);
    setSaving(true);
    const payload = {
      title: title.trim(),
      slug: finalSlug,
      category: category || null,
      excerpt: excerpt || null,
      content_html: content,
      cover_image: cover || null,
      read_time: readTime || null,
      published,
      published_at: published ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    };
    const res = isNew
      ? await supabase.from("articles").insert(payload).select().single()
      : await supabase.from("articles").update(payload).eq("id", id).select().single();
    setSaving(false);
    if (res.error) { toast.error(res.error.message); return; }
    toast.success("Article enregistré");
    if (isNew && res.data) navigate(`/admin/articles/${res.data.id}`, { replace: true });
  }

  if (loading) return <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <button onClick={() => navigate("/admin/articles")} className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Retour
        </button>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
            Publié
          </label>
          <Button onClick={save} disabled={saving}>{saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Enregistrer"}</Button>
        </div>
      </div>

      <div className="grid gap-4">
        <div>
          <Label>Titre</Label>
          <Input value={title} onChange={(e) => { setTitle(e.target.value); if (isNew && !slug) setSlug(slugify(e.target.value)); }} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label>Slug (URL)</Label>
            <Input value={slug} onChange={(e) => setSlug(slugify(e.target.value))} placeholder="mon-article" />
            <p className="text-xs text-muted-foreground mt-1">/blog/{slug || "mon-article"}</p>
          </div>
          <div>
            <Label>Catégorie</Label>
            <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Santé mentale" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label>Temps de lecture</Label>
            <Input value={readTime} onChange={(e) => setReadTime(e.target.value)} placeholder="5 min" />
          </div>
          <div>
            <Label>Image de couverture</Label>
            <div className="flex gap-2">
              <Input value={cover} onChange={(e) => setCover(e.target.value)} placeholder="URL image" />
              <label className="inline-flex items-center justify-center px-3 py-2 border border-input rounded-md cursor-pointer hover:bg-muted">
                <Upload className="w-4 h-4" />
                <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadCover(f); }} />
              </label>
            </div>
            {cover && <img src={cover} alt="cover" className="mt-2 h-24 w-auto rounded border" />}
          </div>
        </div>
        <div>
          <Label>Extrait (résumé)</Label>
          <Textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} />
        </div>
        <div>
          <Label>Contenu</Label>
          <RichEditor value={content} onChange={setContent} />
        </div>
      </div>
    </div>
  );
}