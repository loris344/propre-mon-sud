"use client";

/**
 * Dashboard de planification éditoriale (/admin).
 *
 * Classification = ARBORESCENCE D'URL : chaque segment "/" est un dossier
 * dépliable (récursif) ; un dossier n'est dépliable que s'il contient des
 * pages filles, sinon c'est une simple page cliquable.
 *
 * Modèle « baseline versionnée + calque localStorage + export » :
 *  - `baseline` = content/page-plan.json (source de vérité versionnée).
 *  - Les éditions sont stockées dans localStorage (survivent au rechargement).
 *  - « Exporter JSON » télécharge le plan ; on le recommite pour qu'il devienne
 *    la nouvelle baseline (un site statique ne peut pas écrire de fichier).
 *
 * ⚠️ Le mot de passe ne fait que MASQUER l'interface : sur un hébergement
 * statique public, les données livrées restent techniquement accessibles.
 */
import * as React from "react";
import {
  ListTree, Table2, CalendarDays, Plus, Download, Upload, Copy,
  RotateCcw, Lock, Pencil, ArrowUpDown, ChevronRight, Folder, FileText,
  ChevronsDownUp, ChevronsUpDown, Gauge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, Select } from "@/components/admin/ui/primitives";
import PageEditorModal from "@/components/admin/PageEditorModal";
import {
  type PagePlan, type PlannedPage, type PageFilters, type TreeNode,
  STATUSES, STATUS_META, INTENT_META, EMPTY_FILTERS,
  normalizePlan, filterPages, planToCSV, slugify,
  buildTree, countPages, sectionOf, sectionsOf,
} from "@/lib/page-plan";

const STORAGE_KEY = "pms-page-plan";
const AUTH_KEY = "pms-admin-auth";
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "loris34";

type ViewKey = "suivi" | "arbre" | "tableau" | "calendrier";

/* ----------------------------- helpers UI -------------------------------- */

/** ISO (YYYY-MM-DD) → jj/mm/aaaa pour l'affichage. Les données restent en ISO
 *  (tri, comparaisons) ; seul l'affichage est francisé. */
function formatDate(iso?: string): string {
  if (!iso || !/^\d{4}-\d{2}-\d{2}/.test(iso)) return "";
  const [y, m, d] = iso.slice(0, 10).split("-");
  return `${d}/${m}/${y}`;
}

function download(filename: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function StatusBadge({ status }: { status: PlannedPage["status"] }) {
  const m = STATUS_META[status];
  return <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${m.badge}`}>{m.label}</span>;
}

function IntentBadge({ intent }: { intent: PlannedPage["intent"] }) {
  const m = INTENT_META[intent];
  return <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${m.badge}`}>{m.label}</span>;
}

/** État de PRÉPARATION d'une sortie planifiée : la question n'est pas « quel
 *  statut ? » mais « sortira-t-elle bien à sa date ? ». */
function ReadinessBadge({ page }: { page: PlannedPage }) {
  if (page.status === "publie")
    return <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">en ligne</span>;
  if (page.status === "relecture")
    return <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">✓ prête</span>;
  if (page.status === "redaction")
    return <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">brouillon</span>;
  return <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-700">à rédiger</span>;
}

/* ============================== composant ================================ */

export default function AdminDashboard({ baseline }: { baseline: PagePlan }) {
  const [mounted, setMounted] = React.useState(false);
  const [authed, setAuthed] = React.useState(false);
  const [pwd, setPwd] = React.useState("");
  const [pwdError, setPwdError] = React.useState(false);

  const [plan, setPlan] = React.useState<PagePlan>(() => normalizePlan(baseline));
  const [view, setView] = React.useState<ViewKey>("suivi");
  const [filters, setFilters] = React.useState<PageFilters>(EMPTY_FILTERS);
  const [sort, setSort] = React.useState<{ key: string; dir: 1 | -1 }>({ key: "url", dir: 1 });

  const [editingPage, setEditingPage] = React.useState<PlannedPage | null>(null);
  const [isNewPage, setIsNewPage] = React.useState(false);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(AUTH_KEY) === "ok") setAuthed(true);
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try { setPlan(normalizePlan(JSON.parse(raw))); } catch { /* ignore */ }
    }
  }, []);

  const commit = React.useCallback((next: PagePlan) => {
    const stamped = { ...next, updatedAt: new Date().toISOString() };
    setPlan(stamped);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(stamped)); } catch { /* quota */ }
  }, []);

  /* ----------------------------- actions -------------------------------- */

  const upsertPage = (page: PlannedPage) => {
    const exists = plan.pages.some((p) => p.id === page.id);
    const pages = exists
      ? plan.pages.map((p) => (p.id === page.id ? page : p))
      : [...plan.pages, page];
    commit({ ...plan, pages });
    setEditingPage(null);
  };

  const deletePage = (id: string) => {
    commit({ ...plan, pages: plan.pages.filter((p) => p.id !== id) });
    setEditingPage(null);
  };

  const openEdit = (p: PlannedPage) => { setEditingPage(p); setIsNewPage(false); };

  // Crée une page ; `prefillUrl` (chemin d'un dossier) place la page dans la
  // bonne branche de l'arborescence.
  const newPage = (prefillUrl = "") => {
    setEditingPage({
      id: `p_${slugify(`${Date.now()}`)}`,
      siloId: "", type: "fille", parentId: null,
      title: "", slug: "", url: prefillUrl, status: "idee", publishDate: "",
      intent: "informationnel", keywords: [], description: "", source: "prevu", notes: "",
    });
    setIsNewPage(true);
  };

  const exportJSON = () =>
    download("page-plan.json", JSON.stringify({ silos: plan.silos, pages: plan.pages }, null, 2) + "\n", "application/json");

  const exportCSV = () =>
    download("plan-editorial.csv", "﻿" + planToCSV(plan.pages), "text/csv;charset=utf-8");

  const copyForClaude = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify({ silos: plan.silos, pages: plan.pages }, null, 2));
      alert("Plan copié dans le presse-papier — tu peux le coller dans la conversation.");
    } catch { alert("Copie impossible (autorise le presse-papier)."); }
  };

  const onImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try { commit(normalizePlan(JSON.parse(String(reader.result)))); }
      catch { alert("Fichier JSON invalide."); }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const resetToBaseline = () => {
    if (!confirm("Réinitialiser sur la dernière version versionnée ? Tes modifications locales non exportées seront perdues.")) return;
    localStorage.removeItem(STORAGE_KEY);
    setPlan(normalizePlan(baseline));
  };

  /* --------------------------- données dérivées ------------------------- */

  const filtered = React.useMemo(() => filterPages(plan.pages, filters), [plan.pages, filters]);

  // Date du jour côté NAVIGATEUR : le planning reste juste même si le build
  // statique date d'hier (contrairement aux statuts, figés au build).
  const today = React.useMemo(() => new Date().toISOString().slice(0, 10), []);

  /** Pages EN RETARD : date de sortie atteinte mais aucun contenu publiable
   *  (pas de MDX ou brouillon). Elles ne sortiront PAS tant que rien n'est
   *  rédigé — c'est le risque silencieux du goutte-à-goutte piloté par date. */
  const late = React.useMemo(
    () => plan.pages
      .filter((p) => p.publishDate && p.publishDate <= today
        && (p.status === "planifie" || p.status === "redaction" || p.status === "idee"))
      .sort((a, b) => a.publishDate.localeCompare(b.publishDate)),
    [plan.pages, today],
  );

  /** Sorties des 14 prochains jours, groupées par jour, avec état de préparation. */
  const next14 = React.useMemo(() => {
    const horizon = new Date(Date.now() + 13 * 864e5).toISOString().slice(0, 10);
    const groups = new Map<string, PlannedPage[]>();
    for (const p of plan.pages) {
      if (!p.publishDate || p.publishDate < today || p.publishDate > horizon) continue;
      const list = groups.get(p.publishDate) ?? [];
      list.push(p);
      groups.set(p.publishDate, list);
    }
    return [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [plan.pages, today]);

  const statusCounts = React.useMemo(() => {
    const c: Record<string, number> = {};
    for (const p of plan.pages) c[p.status] = (c[p.status] ?? 0) + 1;
    return c;
  }, [plan.pages]);

  /** Avancement éditorial : part des pages dont le contenu existe (prêtes ou en ligne). */
  const readiness = React.useMemo(() => {
    const total = plan.pages.length || 1;
    const ready = plan.pages.filter((p) => p.status === "publie" || p.status === "relecture").length;
    return { ready, total, pct: Math.round((ready / total) * 100) };
  }, [plan.pages]);

  /* ------------------------------ rendu --------------------------------- */

  if (!mounted) {
    return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-muted-foreground">Chargement…</div>;
  }

  if (!authed) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-muted/30 px-4">
        <Card className="w-full max-w-sm">
          <CardContent className="space-y-4 p-6">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Lock className="h-5 w-5 text-primary" /> Espace privé
            </div>
            <p className="text-sm text-muted-foreground">
              Planification éditoriale du site. Accès réservé.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (pwd === ADMIN_PASSWORD) {
                  sessionStorage.setItem(AUTH_KEY, "ok");
                  setAuthed(true);
                } else { setPwdError(true); }
              }}
              className="space-y-3"
            >
              <Input type="password" value={pwd} autoFocus placeholder="Mot de passe"
                onChange={(e) => { setPwd(e.target.value); setPwdError(false); }} />
              {pwdError && <p className="text-sm text-destructive">Mot de passe incorrect.</p>}
              <Button type="submit" className="w-full">Entrer</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-muted/20">
      <input ref={fileInputRef} type="file" accept="application/json" className="hidden" onChange={onImportFile} />

      {/* En-tête / barre d'outils */}
      <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3">
          <h1 className="mr-2 text-lg font-bold">Plan éditorial</h1>
          <Tabs
            value={view}
            onChange={(v) => setView(v as ViewKey)}
            tabs={[
              { value: "suivi", label: <span className="flex items-center gap-1.5"><Gauge className="h-4 w-4" />Suivi</span> },
              { value: "arbre", label: <span className="flex items-center gap-1.5"><ListTree className="h-4 w-4" />Arborescence</span> },
              { value: "tableau", label: <span className="flex items-center gap-1.5"><Table2 className="h-4 w-4" />Tableau</span> },
              { value: "calendrier", label: <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />Calendrier</span> },
            ]}
          />
          <div className="ml-auto flex flex-wrap items-center gap-1.5">
            <Button size="sm" onClick={() => newPage()}><Plus className="h-4 w-4" />Page</Button>
            <Button size="sm" variant="outline" onClick={exportJSON}><Download className="h-4 w-4" />JSON</Button>
            <Button size="sm" variant="outline" onClick={exportCSV}><Download className="h-4 w-4" />CSV</Button>
            <Button size="sm" variant="ghost" onClick={copyForClaude} title="Copier le plan pour le coller dans la conversation"><Copy className="h-4 w-4" /></Button>
            <Button size="sm" variant="ghost" onClick={() => fileInputRef.current?.click()} title="Importer un JSON"><Upload className="h-4 w-4" /></Button>
            <Button size="sm" variant="ghost" onClick={resetToBaseline} title="Réinitialiser sur la version versionnée"><RotateCcw className="h-4 w-4" /></Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6">
        {/* Stats + avancement */}
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <Card><CardContent className="p-4">
            <div className="text-2xl font-bold">{plan.pages.length}</div>
            <div className="text-xs text-muted-foreground">Pages totales</div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${readiness.pct}%` }} />
            </div>
            <div className="mt-1 text-[10px] text-muted-foreground">
              {readiness.ready} rédigées ({readiness.pct} %)
            </div>
          </CardContent></Card>
          {STATUSES.map((s) => (
            <Card key={s.value}><CardContent className="p-4">
              <div className="text-2xl font-bold">{statusCounts[s.value] ?? 0}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </CardContent></Card>
          ))}
        </section>

        {/* ===================== vue : Suivi des sorties ==================== */}
        {/* Alerte : dates atteintes sans contenu — ces pages ne sortiront pas */}
        {view === "suivi" && late.length > 0 && (
          <section className="rounded-lg border border-destructive/40 bg-destructive/5 p-4">
            <h2 className="mb-1 text-sm font-semibold text-destructive">
              ⚠️ {late.length} page{late.length > 1 ? "s" : ""} en retard de rédaction
            </h2>
            <p className="mb-3 text-xs text-muted-foreground">
              Leur date de sortie est atteinte mais aucun contenu n'est publiable : elles ne
              seront PAS mises en ligne tant que le texte n'est pas rédigé.
            </p>
            <div className="flex flex-wrap gap-2">
              {late.slice(0, 8).map((p) => (
                <button key={p.id} onClick={() => openEdit(p)}
                  className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-background px-3 py-1.5 text-sm hover:bg-muted">
                  <span className="font-mono text-xs text-destructive">{formatDate(p.publishDate)}</span>
                  <span className="max-w-[16rem] truncate">{p.title}</span>
                </button>
              ))}
              {late.length > 8 && (
                <span className="self-center text-xs text-muted-foreground">… et {late.length - 8} autre(s)</span>
              )}
            </div>
          </section>
        )}

        {/* Planning de sortie : 14 prochains jours, jour par jour */}
        {view === "suivi" && next14.length === 0 && late.length === 0 && (
          <p className="text-sm text-muted-foreground">Aucune sortie planifiée dans les 14 prochains jours.</p>
        )}
        {view === "suivi" && next14.length > 0 && (
          <section>
            <h2 className="mb-2 text-sm font-semibold text-muted-foreground">
              Sorties des 14 prochains jours
            </h2>
            <div className="space-y-2">
              {next14.map(([date, pages]) => (
                <div key={date} className="flex flex-col gap-1.5 rounded-lg border bg-background p-3 sm:flex-row sm:items-start">
                  <div className="w-32 shrink-0 pt-1">
                    <div className={`text-sm font-semibold capitalize ${date === today ? "text-primary" : ""}`}>
                      {date === today
                        ? "Aujourd'hui"
                        : new Date(`${date}T00:00:00`).toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" })}
                    </div>
                    <div className="text-[10px] text-muted-foreground">{pages.length} page{pages.length > 1 ? "s" : ""}</div>
                  </div>
                  <div className="flex flex-1 flex-wrap gap-1.5">
                    {pages.map((p) => (
                      <button key={p.id} onClick={() => openEdit(p)}
                        className="flex items-center gap-2 rounded-md border bg-background px-2.5 py-1 text-sm hover:bg-muted">
                        <span className="max-w-[18rem] truncate">{p.title}</span>
                        <ReadinessBadge page={p} />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {view === "arbre" && (
          <TreeView pages={plan.pages} onEditPage={openEdit} onAddChild={newPage} />
        )}
        {view === "tableau" && (
          <TableView pages={filtered} allPages={plan.pages} filters={filters} setFilters={setFilters}
            sort={sort} setSort={setSort} onEditPage={openEdit} />
        )}
        {view === "calendrier" && (
          <CalendarView pages={plan.pages} onEditPage={openEdit} />
        )}

        {plan.updatedAt && (
          <p className="pt-4 text-center text-xs text-muted-foreground">
            Dernière modification locale : {new Date(plan.updatedAt).toLocaleString("fr-FR")} ·
            pense à <button onClick={exportJSON} className="underline">exporter le JSON</button> pour la rendre permanente.
          </p>
        )}
      </main>

      <PageEditorModal
        open={!!editingPage} page={editingPage} isNew={isNewPage}
        onSave={upsertPage} onDelete={deletePage} onClose={() => setEditingPage(null)} />
    </div>
  );
}

/* ========================= vue : Arborescence ============================ */

function TreeView({
  pages, onEditPage, onAddChild,
}: {
  pages: PlannedPage[];
  onEditPage: (p: PlannedPage) => void;
  onAddChild: (prefillUrl: string) => void;
}) {
  const tree = React.useMemo(() => buildTree(pages), [pages]);
  const allFolderPaths = React.useMemo(() => {
    const acc: string[] = [];
    const walk = (nodes: TreeNode[]) => nodes.forEach((n) => {
      if (n.children.length) { acc.push(n.path); walk(n.children); }
    });
    walk(tree);
    return acc;
  }, [tree]);

  // Par défaut TOUT REPLIÉ : on ne voit que la liste des sections de 1er niveau
  // (groupées par 1er segment d'URL), jamais des centaines de pages éparpillées.
  const [expanded, setExpanded] = React.useState<Set<string>>(new Set());

  const toggle = (path: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(path) ? next.delete(path) : next.add(path);
      return next;
    });

  if (pages.length === 0) {
    return <p className="text-sm text-muted-foreground">Aucune page. Clique sur « + Page » pour commencer.</p>;
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setExpanded(new Set(allFolderPaths))}>
          <ChevronsUpDown className="h-4 w-4" /> Tout déplier
        </Button>
        <Button size="sm" variant="outline" onClick={() => setExpanded(new Set())}>
          <ChevronsDownUp className="h-4 w-4" /> Tout replier
        </Button>
      </div>

      <Card><CardContent className="p-2">
        {tree.map((node) => (
          <TreeRow key={node.path} node={node} depth={0}
            expanded={expanded} toggle={toggle} onEditPage={onEditPage} onAddChild={onAddChild} />
        ))}
      </CardContent></Card>
    </div>
  );
}

function TreeRow({
  node, depth, expanded, toggle, onEditPage, onAddChild,
}: {
  node: TreeNode;
  depth: number;
  expanded: Set<string>;
  toggle: (path: string) => void;
  onEditPage: (p: PlannedPage) => void;
  onAddChild: (prefillUrl: string) => void;
}) {
  const isFolder = node.children.length > 0;
  const open = expanded.has(node.path);

  return (
    <div>
      <div
        className={`group flex items-center gap-1.5 rounded-md py-1.5 pl-1 pr-2 hover:bg-muted/60 ${
          isFolder ? "bg-muted/30" : ""
        }`}
      >
        {/* Chevron (dossier) ou espace (feuille) */}
        {isFolder ? (
          <button onClick={() => toggle(node.path)} className="rounded p-0.5 text-muted-foreground hover:bg-muted" aria-label={open ? "Replier" : "Déplier"}>
            <ChevronRight className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`} />
          </button>
        ) : (
          <span className="w-5" />
        )}

        {isFolder
          ? <Folder className="h-4 w-4 shrink-0 text-amber-500" />
          : <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />}

        {/* Libellé : si une page existe à ce chemin → édition ; sinon (dossier pur) → toggle */}
        <button
          onClick={() => (node.page ? onEditPage(node.page) : isFolder ? toggle(node.path) : undefined)}
          className="flex min-w-0 flex-1 items-center gap-2 text-left"
        >
          <span className="truncate text-sm font-medium">
            {node.page ? (node.page.title || node.segment) : node.segment}
          </span>
          {!node.page && isFolder && !node.synthetic && (
            <span className="shrink-0 font-mono text-xs text-muted-foreground">/{node.segment}/</span>
          )}
          {node.synthetic && (
            <span className="shrink-0 text-xs italic text-muted-foreground">pages sans sous-pages</span>
          )}
          {node.page && <StatusBadge status={node.page.status} />}
          {node.page?.type === "pilier" && (
            <span className="shrink-0 rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">PILIER</span>
          )}
          {node.page?.publishDate && (
            <span className="shrink-0 font-mono text-xs text-muted-foreground">{formatDate(node.page.publishDate)}</span>
          )}
        </button>

        {isFolder && (
          <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {countPages(node)}
          </span>
        )}
        {/* Ajouter une page sous ce chemin */}
        <button
          onClick={() => onAddChild(node.synthetic ? "" : node.path === "/" ? "/" : node.path)}
          className="shrink-0 rounded p-1 text-muted-foreground opacity-0 transition-opacity hover:bg-muted group-hover:opacity-100"
          title="Ajouter une page ici"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
        {node.page && (
          <button onClick={() => onEditPage(node.page!)} className="shrink-0 rounded p-1 text-muted-foreground opacity-0 transition-opacity hover:bg-muted group-hover:opacity-100" title="Modifier">
            <Pencil className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Enfants indentés avec une ligne de guidage → la hiérarchie est sans ambiguïté */}
      {isFolder && open && (
        <div className="ml-[1.1rem] border-l border-border pl-1">
          {node.children.map((child) => (
            <TreeRow key={child.path} node={child} depth={depth + 1}
              expanded={expanded} toggle={toggle} onEditPage={onEditPage} onAddChild={onAddChild} />
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================== vue : Tableau =============================== */

function TableView({
  pages, allPages, filters, setFilters, sort, setSort, onEditPage,
}: {
  pages: PlannedPage[];
  allPages: PlannedPage[];
  filters: PageFilters;
  setFilters: (f: PageFilters) => void;
  sort: { key: string; dir: 1 | -1 };
  setSort: (s: { key: string; dir: 1 | -1 }) => void;
  onEditPage: (p: PlannedPage) => void;
}) {
  const sections = React.useMemo(() => sectionsOf(allPages), [allPages]);

  const sorted = React.useMemo(() => {
    const val = (p: PlannedPage): string | number => {
      switch (sort.key) {
        case "section": return sectionOf(p.url);
        case "status": return STATUS_META[p.status].order;
        case "date": return p.publishDate || "9999";
        default: return (p[sort.key as keyof PlannedPage] as string) ?? "";
      }
    };
    return [...pages].sort((a, b) => {
      const va = val(a), vb = val(b);
      if (va < vb) return -1 * sort.dir;
      if (va > vb) return 1 * sort.dir;
      return 0;
    });
  }, [pages, sort]);

  const toggleSort = (key: string) =>
    setSort({ key, dir: sort.key === key ? (sort.dir === 1 ? -1 : 1) : 1 });

  const Th = ({ k, children }: { k: string; children: React.ReactNode }) => (
    <th className="cursor-pointer select-none px-3 py-2 text-left font-medium hover:text-foreground" onClick={() => toggleSort(k)}>
      <span className="inline-flex items-center gap-1">{children}<ArrowUpDown className="h-3 w-3 opacity-40" /></span>
    </th>
  );

  return (
    <div className="space-y-3">
      {/* Filtres */}
      <div className="flex flex-wrap items-center gap-2">
        <Input placeholder="Rechercher…" value={filters.search} className="h-9 max-w-xs"
          onChange={(e) => setFilters({ ...filters, search: e.target.value })} />
        <div className="w-44"><Select placeholder="Toutes les sections" value={filters.section}
          onChange={(v) => setFilters({ ...filters, section: v })}
          options={sections.map((s) => ({ value: s, label: s }))} /></div>
        <div className="w-40"><Select placeholder="Tous les statuts" value={filters.status}
          onChange={(v) => setFilters({ ...filters, status: v })}
          options={STATUSES.map((s) => ({ value: s.value, label: s.label }))} /></div>
        <div className="w-44"><Select placeholder="Toutes intentions" value={filters.intent}
          onChange={(v) => setFilters({ ...filters, intent: v })}
          options={Object.entries(INTENT_META).map(([k, m]) => ({ value: k, label: m.label }))} /></div>
        <div className="w-36"><Select placeholder="Toutes sources" value={filters.source}
          onChange={(v) => setFilters({ ...filters, source: v })}
          options={[{ value: "existant", label: "Existante" }, { value: "prevu", label: "Prévue" }]} /></div>
        {(filters.search || filters.section || filters.status || filters.intent || filters.source) && (
          <Button size="sm" variant="ghost" onClick={() => setFilters(EMPTY_FILTERS)}>Réinitialiser</Button>
        )}
        <span className="ml-auto text-sm text-muted-foreground">{pages.length} page(s)</span>
      </div>

      <div className="overflow-x-auto rounded-lg border bg-background">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/50 text-muted-foreground">
            <tr>
              <Th k="title">Titre</Th>
              <Th k="section">Section</Th>
              <Th k="type">Type</Th>
              <Th k="status">Statut</Th>
              <Th k="date">Date</Th>
              <Th k="intent">Intention</Th>
              <Th k="source">Source</Th>
              <Th k="url">URL</Th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((p) => (
              <tr key={p.id} onClick={() => onEditPage(p)} className="cursor-pointer border-b last:border-0 hover:bg-muted/40">
                <td className="px-3 py-2 font-medium">{p.title || <em className="text-muted-foreground">Sans titre</em>}</td>
                <td className="px-3 py-2">{sectionOf(p.url)}</td>
                <td className="px-3 py-2">{p.type === "pilier" ? "Pilier" : "Fille"}</td>
                <td className="px-3 py-2"><StatusBadge status={p.status} /></td>
                <td className="px-3 py-2 font-mono text-xs">{formatDate(p.publishDate) || <span className="text-muted-foreground/50">non planifié</span>}</td>
                <td className="px-3 py-2"><IntentBadge intent={p.intent} /></td>
                <td className="px-3 py-2 text-xs">{p.source === "existant" ? "Existante" : "Prévue"}</td>
                <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{p.url || "—"}</td>
              </tr>
            ))}
            {sorted.length === 0 && (
              <tr><td colSpan={8} className="px-3 py-8 text-center text-muted-foreground">Aucune page.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ========================== vue : Calendrier ============================= */

function CalendarView({ pages, onEditPage }: { pages: PlannedPage[]; onEditPage: (p: PlannedPage) => void }) {
  const { months, unplanned } = React.useMemo(() => {
    const groups = new Map<string, PlannedPage[]>();
    const noDate: PlannedPage[] = [];
    for (const p of pages) {
      if (!p.publishDate) { noDate.push(p); continue; }
      const key = p.publishDate.slice(0, 7);
      const list = groups.get(key) ?? [];
      list.push(p);
      groups.set(key, list);
    }
    const months = [...groups.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, list]) => ({
        key,
        label: new Date(`${key}-01T00:00:00`).toLocaleDateString("fr-FR", { month: "long", year: "numeric" }),
        list: list.sort((a, b) => a.publishDate.localeCompare(b.publishDate)),
      }));
    return { months, unplanned: noDate };
  }, [pages]);

  return (
    <div className="space-y-6">
      {months.length === 0 && <p className="text-sm text-muted-foreground">Aucune page planifiée (renseigne une date de parution).</p>}
      {months.map((m) => (
        <div key={m.key}>
          <h3 className="mb-2 text-sm font-semibold capitalize text-primary">{m.label}</h3>
          <div className="space-y-1.5">
            {m.list.map((p) => (
              <button key={p.id} onClick={() => onEditPage(p)}
                className="flex w-full items-center gap-3 rounded-md border bg-background px-3 py-2 text-left text-sm hover:bg-muted">
                <span className="w-24 shrink-0 font-mono text-xs text-primary">{formatDate(p.publishDate)}</span>
                <span className="flex-1 truncate font-medium">{p.title || "Sans titre"}</span>
                <StatusBadge status={p.status} />
              </button>
            ))}
          </div>
        </div>
      ))}
      {unplanned.length > 0 && (
        <div>
          <h3 className="mb-2 text-sm font-semibold text-muted-foreground">Non planifié ({unplanned.length})</h3>
          <div className="flex flex-wrap gap-2">
            {unplanned.map((p) => (
              <button key={p.id} onClick={() => onEditPage(p)}
                className="flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-sm hover:bg-muted">
                <span className="max-w-[16rem] truncate">{p.title || "Sans titre"}</span>
                <StatusBadge status={p.status} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
