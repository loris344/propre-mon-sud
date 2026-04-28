import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Save } from "lucide-react";
import { toast } from "sonner";

/** Editable text blocks across the public site. Add new entries here as needed. */
const PAGE_BLOCKS: Array<{ page: string; key: string; label: string; multiline?: boolean }> = [
  { page: "home", key: "hero_title", label: "Accueil — Titre Hero" },
  { page: "home", key: "hero_subtitle", label: "Accueil — Sous-titre Hero", multiline: true },
  { page: "home", key: "services_intro", label: "Accueil — Intro Services", multiline: true },
  { page: "landing-diogene", key: "hero_title", label: "Landing Diogène — Titre" },
  { page: "landing-diogene", key: "hero_subtitle", label: "Landing Diogène — Sous-titre", multiline: true },
  { page: "landing-debarras", key: "hero_title", label: "Landing Débarras — Titre" },
  { page: "landing-debarras", key: "hero_subtitle", label: "Landing Débarras — Sous-titre", multiline: true },
  { page: "landing-desinfection", key: "hero_title", label: "Landing Désinfection — Titre" },
  { page: "landing-desinfection", key: "hero_subtitle", label: "Landing Désinfection — Sous-titre", multiline: true },
  { page: "landing-apresdeces", key: "hero_title", label: "Landing Après-Décès — Titre" },
  { page: "landing-apresdeces", key: "hero_subtitle", label: "Landing Après-Décès — Sous-titre", multiline: true },
  { page: "service-debarras", key: "intro", label: "Service Débarras — Intro", multiline: true },
  { page: "service-desinfection", key: "intro", label: "Service Désinfection — Intro", multiline: true },
  { page: "service-apresdeces", key: "intro", label: "Service Après-Décès — Intro", multiline: true },
];

export default function PagesAdmin() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("page_contents").select("*");
      if (error) toast.error(error.message);
      else {
        const map: Record<string, string> = {};
        data?.forEach((r: any) => { map[`${r.page_key}::${r.block_key}`] = r.value; });
        setValues(map);
      }
      setLoading(false);
    })();
  }, []);

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
        <h1 className="text-2xl font-bold">Contenu des pages</h1>
        <p className="text-sm text-muted-foreground">Modifier les textes affichés dans les sections clés du site. Laisser vide pour utiliser le texte par défaut.</p>
      </div>

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
    </div>
  );
}