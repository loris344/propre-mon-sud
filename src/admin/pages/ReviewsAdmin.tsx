import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Review } from "@/lib/cms-types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Loader2, Star, Save } from "lucide-react";
import { toast } from "sonner";

const empty = {
  author_name: "", location: "", rating: 5, text: "",
  service: "", date: new Date().toISOString().slice(0, 10),
  display_order: 0, published: true,
};

export default function ReviewsAdmin() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [draft, setDraft] = useState({ ...empty });
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase.from("reviews").select("*").order("display_order").order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    else setReviews(data as Review[]);
    setLoading(false);
  }
  useEffect(() => { load(); }, []);

  async function add() {
    if (!draft.author_name || !draft.text) { toast.error("Nom et texte requis"); return; }
    setSaving(true);
    const { error } = await supabase.from("reviews").insert(draft);
    setSaving(false);
    if (error) toast.error(error.message);
    else { toast.success("Avis ajouté"); setDraft({ ...empty }); load(); }
  }

  async function update(r: Review, patch: Partial<Review>) {
    const { error } = await supabase.from("reviews").update(patch).eq("id", r.id);
    if (error) toast.error(error.message); else load();
  }

  async function remove(id: string) {
    if (!confirm("Supprimer cet avis ?")) return;
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    if (error) toast.error(error.message); else load();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Avis clients</h1>
        <p className="text-sm text-muted-foreground">Gérer les témoignages affichés sur le site</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-4 space-y-3">
        <h2 className="font-semibold flex items-center gap-2"><Plus className="w-4 h-4" /> Nouvel avis</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <div><Label>Nom</Label><Input value={draft.author_name} onChange={(e) => setDraft({ ...draft, author_name: e.target.value })} /></div>
          <div><Label>Ville</Label><Input value={draft.location} onChange={(e) => setDraft({ ...draft, location: e.target.value })} /></div>
          <div><Label>Service</Label><Input value={draft.service} onChange={(e) => setDraft({ ...draft, service: e.target.value })} /></div>
          <div><Label>Date</Label><Input type="date" value={draft.date} onChange={(e) => setDraft({ ...draft, date: e.target.value })} /></div>
          <div><Label>Note (1-5)</Label><Input type="number" min={1} max={5} value={draft.rating} onChange={(e) => setDraft({ ...draft, rating: Number(e.target.value) })} /></div>
          <div><Label>Ordre</Label><Input type="number" value={draft.display_order} onChange={(e) => setDraft({ ...draft, display_order: Number(e.target.value) })} /></div>
        </div>
        <div><Label>Texte</Label><Textarea rows={3} value={draft.text} onChange={(e) => setDraft({ ...draft, text: e.target.value })} /></div>
        <Button onClick={add} disabled={saving}>{saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Save className="w-4 h-4 mr-2" /> Ajouter</>}</Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
      ) : (
        <div className="space-y-3">
          {reviews.map((r) => (
            <div key={r.id} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{r.author_name}</span>
                    {r.location && <span className="text-sm text-muted-foreground">— {r.location}</span>}
                    <div className="flex">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}</div>
                  </div>
                  <p className="text-sm mt-1">{r.text}</p>
                  <p className="text-xs text-muted-foreground mt-1">{r.service} · {r.date}</p>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <label className="text-xs flex items-center gap-1">
                    <input type="checkbox" checked={r.published} onChange={(e) => update(r, { published: e.target.checked })} /> publié
                  </label>
                  <Button variant="ghost" size="sm" onClick={() => remove(r.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </div>
              </div>
            </div>
          ))}
          {reviews.length === 0 && <p className="text-center text-muted-foreground py-6">Aucun avis enregistré.</p>}
        </div>
      )}
    </div>
  );
}