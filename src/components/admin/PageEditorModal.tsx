"use client";

/**
 * Modale de création / édition d'une page.
 * La classification est dérivée de l'URL (cf. arborescence) : il n'y a donc
 * plus de champ « silo » — c'est le chemin saisi qui place la page dans l'arbre.
 */
import * as React from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Modal, Select } from "@/components/admin/ui/primitives";
import {
  type PlannedPage,
  STATUSES,
  INTENTS,
  INTENT_META,
  PAGE_TYPES,
  SOURCES,
} from "@/lib/page-plan";

interface Props {
  open: boolean;
  page: PlannedPage | null;
  isNew: boolean;
  onSave: (page: PlannedPage) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
}

export default function PageEditorModal({ open, page, isNew, onSave, onDelete, onClose }: Props) {
  const [draft, setDraft] = React.useState<PlannedPage | null>(page);
  const [keywordsText, setKeywordsText] = React.useState("");

  React.useEffect(() => {
    setDraft(page);
    setKeywordsText(page?.keywords.join(", ") ?? "");
  }, [page]);

  if (!draft) return null;
  const set = <K extends keyof PlannedPage>(key: K, value: PlannedPage[K]) =>
    setDraft((d) => (d ? { ...d, [key]: value } : d));

  const handleSave = () => {
    const keywords = keywordsText.split(",").map((k) => k.trim()).filter(Boolean);
    onSave({ ...draft, keywords });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={isNew ? "Nouvelle page" : "Modifier la page"}
      footer={
        <>
          {!isNew && (
            <Button variant="destructive" size="sm" className="mr-auto" onClick={() => onDelete(draft.id)}>
              <Trash2 className="h-4 w-4" /> Supprimer
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={onClose}>Annuler</Button>
          <Button size="sm" onClick={handleSave} disabled={!draft.title.trim()}>Enregistrer</Button>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="pe-title">Titre</Label>
          <Input id="pe-title" value={draft.title}
            onChange={(e) => set("title", e.target.value)}
            placeholder="Ex : Nettoyage syndrome de Diogène à Montpellier" />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="pe-url">URL <span className="font-normal text-muted-foreground">(détermine la place dans l'arborescence)</span></Label>
          <Input id="pe-url" value={draft.url}
            onChange={(e) => set("url", e.target.value)} placeholder="/landing/nettoyage/diogene/" />
        </div>

        <div>
          <Label htmlFor="pe-slug">Slug</Label>
          <Input id="pe-slug" value={draft.slug}
            onChange={(e) => set("slug", e.target.value)} placeholder="nettoyage-diogene-montpellier" />
        </div>
        <div>
          <Label>Type</Label>
          <Select value={draft.type} onChange={(v) => set("type", v as PlannedPage["type"])}
            options={PAGE_TYPES.map((t) => ({ value: t, label: t === "pilier" ? "Pilier (page index)" : "Fille" }))} />
        </div>

        <div>
          <Label>Statut</Label>
          <Select value={draft.status} onChange={(v) => set("status", v as PlannedPage["status"])}
            options={STATUSES.map((s) => ({ value: s.value, label: s.label }))} />
        </div>
        <div>
          <Label htmlFor="pe-date">Date de parution</Label>
          <Input id="pe-date" type="date" value={draft.publishDate}
            onChange={(e) => set("publishDate", e.target.value)} />
        </div>

        <div>
          <Label>Intention de recherche</Label>
          <Select value={draft.intent} onChange={(v) => set("intent", v as PlannedPage["intent"])}
            options={INTENTS.map((i) => ({ value: i, label: INTENT_META[i].label }))} />
        </div>
        <div>
          <Label>Source</Label>
          <Select value={draft.source} onChange={(v) => set("source", v as PlannedPage["source"])}
            options={SOURCES.map((s) => ({ value: s, label: s === "existant" ? "Existante (en ligne)" : "Prévue" }))} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="pe-kw">Mots-clés (séparés par des virgules)</Label>
          <Input id="pe-kw" value={keywordsText}
            onChange={(e) => setKeywordsText(e.target.value)}
            placeholder="syndrome diogène, nettoyage, montpellier" />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="pe-desc">Description / meta</Label>
          <Textarea id="pe-desc" value={draft.description}
            onChange={(e) => set("description", e.target.value)} rows={3} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="pe-notes">Notes internes</Label>
          <Textarea id="pe-notes" value={draft.notes}
            onChange={(e) => set("notes", e.target.value)} rows={2}
            placeholder="Angle, maillage interne prévu, brief rédacteur…" />
        </div>
      </div>
    </Modal>
  );
}
