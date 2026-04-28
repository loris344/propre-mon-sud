import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { GalleryItem } from "@/lib/cms-types";
import { publicMediaUrl } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";

export default function GalleryAdmin() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [alt, setAlt] = useState("");
  const [caption, setCaption] = useState("");

  async function load() {
    setLoading(true);
    const { data, error } = await supabase.from("gallery_items").select("*").order("display_order").order("created_at", { ascending: false });
    if (error) toast.error(error.message); else setItems(data as GalleryItem[]);
    setLoading(false);
  }
  useEffect(() => { load(); }, []);

  async function handleUpload(file: File) {
    setUploading(true);
    const path = `gallery/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const up = await supabase.storage.from("cms-media").upload(path, file);
    if (up.error) { toast.error(up.error.message); setUploading(false); return; }
    const { error } = await supabase.from("gallery_items").insert({
      image_path: path, alt_text: alt || file.name, caption: caption || null, display_order: 0, published: true,
    });
    setUploading(false);
    if (error) toast.error(error.message);
    else { toast.success("Image ajoutée"); setAlt(""); setCaption(""); load(); }
  }

  async function update(it: GalleryItem, patch: Partial<GalleryItem>) {
    const { error } = await supabase.from("gallery_items").update(patch).eq("id", it.id);
    if (error) toast.error(error.message); else load();
  }

  async function remove(it: GalleryItem) {
    if (!confirm("Supprimer cette image ?")) return;
    await supabase.storage.from("cms-media").remove([it.image_path]).catch(() => {});
    const { error } = await supabase.from("gallery_items").delete().eq("id", it.id);
    if (error) toast.error(error.message); else load();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Galerie</h1>
        <p className="text-sm text-muted-foreground">Photos avant/après affichées sur la page d'accueil</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-4 space-y-3">
        <h2 className="font-semibold">Ajouter une image</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <div><Label>Texte alternatif (alt)</Label><Input value={alt} onChange={(e) => setAlt(e.target.value)} placeholder="Avant/Après nettoyage salon" /></div>
          <div><Label>Légende</Label><Input value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Salon" /></div>
        </div>
        <label className="inline-flex items-center gap-2 px-4 py-2 border border-input rounded-md cursor-pointer hover:bg-muted">
          {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
          {uploading ? "Téléversement…" : "Choisir une image"}
          <input type="file" accept="image/*" className="hidden" disabled={uploading} onChange={(e) => { const f = e.target.files?.[0]; if (f) handleUpload(f); }} />
        </label>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.id} className="bg-card border border-border rounded-lg overflow-hidden">
              <img src={publicMediaUrl(it.image_path)} alt={it.alt_text} className="w-full h-40 object-cover" />
              <div className="p-3 space-y-2">
                <Input value={it.caption ?? ""} onChange={(e) => update(it, { caption: e.target.value })} placeholder="Légende" />
                <Input value={it.alt_text} onChange={(e) => update(it, { alt_text: e.target.value })} placeholder="Alt" />
                <div className="flex items-center justify-between">
                  <label className="text-xs flex items-center gap-1">
                    <input type="checkbox" checked={it.published} onChange={(e) => update(it, { published: e.target.checked })} /> publiée
                  </label>
                  <Input type="number" className="w-20 h-8" value={it.display_order} onChange={(e) => update(it, { display_order: Number(e.target.value) })} />
                  <Button variant="ghost" size="sm" onClick={() => remove(it)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && <p className="col-span-full text-center text-muted-foreground py-6">Aucune image.</p>}
        </div>
      )}
    </div>
  );
}