/**
 * Modèle de données du plan éditorial (dashboard /admin).
 *
 * Ce module est ISOMORPHE (aucun accès fichier / navigateur) : il est importé
 * à la fois par le script de seed Node et par le composant client du dashboard.
 * La source de vérité versionnée est `content/page-plan.json` ; le dashboard la
 * lit puis applique un calque localStorage par-dessus (voir AdminDashboard).
 */

export type PageStatus = "idee" | "planifie" | "redaction" | "relecture" | "publie";
export type PageIntent = "informationnel" | "commercial" | "transactionnel";
export type PageType = "pilier" | "fille";
export type PageSource = "existant" | "prevu";

export interface Silo {
  id: string;
  name: string;
  color: string;        // hex, pour la pastille du silo
  description?: string;
  pillarPageId?: string | null; // page pilier du silo (facultatif)
}

export interface PlannedPage {
  id: string;
  siloId: string;
  type: PageType;
  parentId: string | null;      // id de la page pilier si type "fille"
  title: string;
  slug: string;
  url: string;                  // ex: /landing/xxx/ (avec trailing slash)
  status: PageStatus;
  publishDate: string;          // ISO YYYY-MM-DD, vide si non planifié
  intent: PageIntent;
  keywords: string[];
  description: string;
  source: PageSource;           // déjà en ligne ou simplement prévu
  notes: string;
}

export interface PagePlan {
  silos: Silo[];
  pages: PlannedPage[];
  /** ISO datetime de la dernière modification (informational). */
  updatedAt?: string;
}

/* ------------------------------------------------------------------ */
/* Métadonnées d'affichage (labels FR + classes de badge Tailwind)     */
/* ------------------------------------------------------------------ */

export interface StatusMeta {
  value: PageStatus;
  label: string;
  /** Classes Tailwind pour le badge (fond + texte). */
  badge: string;
  /** Ordre logique du workflow éditorial. */
  order: number;
}

export const STATUS_META: Record<PageStatus, StatusMeta> = {
  idee: { value: "idee", label: "Idée", badge: "bg-slate-100 text-slate-600", order: 0 },
  planifie: { value: "planifie", label: "Planifié", badge: "bg-blue-100 text-blue-700", order: 1 },
  redaction: { value: "redaction", label: "Rédaction", badge: "bg-amber-100 text-amber-700", order: 2 },
  relecture: { value: "relecture", label: "Relecture", badge: "bg-purple-100 text-purple-700", order: 3 },
  publie: { value: "publie", label: "Publié", badge: "bg-green-100 text-green-700", order: 4 },
};

export const STATUSES: StatusMeta[] = Object.values(STATUS_META).sort((a, b) => a.order - b.order);

export const INTENT_META: Record<PageIntent, { label: string; badge: string }> = {
  informationnel: { label: "Informationnel", badge: "bg-sky-100 text-sky-700" },
  commercial: { label: "Commercial", badge: "bg-orange-100 text-orange-700" },
  transactionnel: { label: "Transactionnel", badge: "bg-rose-100 text-rose-700" },
};

export const INTENTS: PageIntent[] = ["informationnel", "commercial", "transactionnel"];
export const PAGE_TYPES: PageType[] = ["pilier", "fille"];
export const SOURCES: PageSource[] = ["existant", "prevu"];

/* ------------------------------------------------------------------ */
/* Helpers purs                                                        */
/* ------------------------------------------------------------------ */

export function emptyPlan(): PagePlan {
  return { silos: [], pages: [] };
}

/** Slug URL-safe à partir d'un texte libre (sans accents, minuscules, tirets). */
export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

/**
 * Identifiant stable et lisible. `seed` permet de dériver un id d'une URL
 * (seed script) ; sans seed on suffixe par un compteur fourni par l'appelant
 * pour éviter Math.random (indisponible côté workflow / non déterministe).
 */
export function makeId(prefix: string, seed: string): string {
  const base = slugify(seed) || "x";
  return `${prefix}_${base}`;
}

/** Garantit la cohérence minimale d'un plan chargé (types, tableaux). */
export function normalizePlan(raw: unknown): PagePlan {
  const plan = (raw ?? {}) as Partial<PagePlan>;
  const silos = Array.isArray(plan.silos) ? plan.silos : [];
  const pages = Array.isArray(plan.pages) ? plan.pages : [];
  return {
    silos: silos.map((s) => ({
      id: String(s.id),
      name: String(s.name ?? ""),
      color: String(s.color ?? "#64748b"),
      description: s.description ?? "",
      pillarPageId: s.pillarPageId ?? null,
    })),
    pages: pages.map((p) => ({
      id: String(p.id),
      siloId: String(p.siloId ?? ""),
      type: (p.type as PageType) ?? "fille",
      parentId: p.parentId ?? null,
      title: String(p.title ?? ""),
      slug: String(p.slug ?? ""),
      url: String(p.url ?? ""),
      status: (p.status as PageStatus) ?? "idee",
      publishDate: String(p.publishDate ?? ""),
      intent: (p.intent as PageIntent) ?? "informationnel",
      keywords: Array.isArray(p.keywords) ? p.keywords.map(String) : [],
      description: String(p.description ?? ""),
      source: (p.source as PageSource) ?? "prevu",
      notes: String(p.notes ?? ""),
    })),
    updatedAt: plan.updatedAt,
  };
}

/* ------------------------------------------------------------------ */
/* Arborescence d'URL : la classification est dérivée du chemin.        */
/* Chaque segment entre "/" devient un dossier ; un dossier est         */
/* dépliable seulement s'il a des pages filles.                         */
/* ------------------------------------------------------------------ */

/** Segments non vides d'une URL : "/landing/diogene/" -> ["landing","diogene"]. */
export function urlSegments(url: string): string[] {
  return (url || "").split("/").filter(Boolean);
}

/** Section de premier niveau (pour les filtres du tableau). */
export function sectionOf(url: string): string {
  if (url === "/") return "(accueil)";
  const segs = urlSegments(url);
  return segs[0] ?? "(sans URL)";
}

/** Liste triée des sections présentes dans le plan. */
export function sectionsOf(pages: PlannedPage[]): string[] {
  return [...new Set(pages.map((p) => sectionOf(p.url)))].sort((a, b) => a.localeCompare(b));
}

export interface TreeNode {
  segment: string;          // libellé du segment (ex: "landing")
  path: string;             // chemin cumulé avec slash final (ex: "/landing/")
  page: PlannedPage | null; // page située exactement à ce chemin, le cas échéant
  children: TreeNode[];
  synthetic?: boolean;      // true pour le dossier "Pages satellites" (regroupement)
}

/** Chemin sentinelle du dossier regroupant les pages racine isolées. */
export const SATELLITE_PATH = "/__satellites__/";

/** Construit l'arbre des pages à partir de leurs URLs. */
export function buildTree(pages: PlannedPage[]): TreeNode[] {
  const roots: TreeNode[] = [];
  const ensure = (siblings: TreeNode[], segment: string, path: string): TreeNode => {
    let n = siblings.find((c) => c.segment === segment);
    if (!n) { n = { segment, path, page: null, children: [] }; siblings.push(n); }
    return n;
  };

  for (const p of pages) {
    if (p.url === "/") { ensure(roots, "/", "/").page = p; continue; }
    const segs = urlSegments(p.url);
    if (segs.length === 0) { ensure(roots, "(sans URL)", "").page = p; continue; }
    let siblings = roots;
    let acc = "";
    segs.forEach((seg, i) => {
      acc += `/${seg}`;
      const node = ensure(siblings, seg, `${acc}/`);
      if (i === segs.length - 1) node.page = p;
      siblings = node.children;
    });
  }

  const sortNodes = (nodes: TreeNode[]) => {
    // Dossiers (avec enfants) d'abord, puis pages, chacun par ordre alpha.
    nodes.sort((a, b) => {
      const fa = a.children.length > 0 ? 0 : 1;
      const fb = b.children.length > 0 ? 0 : 1;
      return fa !== fb ? fa - fb : a.segment.localeCompare(b.segment);
    });
    nodes.forEach((n) => sortNodes(n.children));
  };

  // Au 1er niveau : on sépare les vrais dossiers (≥1 page fille) des pages
  // racine isolées (rien derrière). Ces dernières sont regroupées dans un
  // dossier "satellite" dédié, plutôt que laissées éparpillées à la racine.
  const folders = roots.filter((n) => n.children.length > 0);
  const leaves = roots.filter((n) => n.children.length === 0);
  sortNodes(folders);
  leaves.sort((a, b) =>
    (a.page?.title || a.segment).localeCompare(b.page?.title || b.segment));

  const result: TreeNode[] = [...folders];
  if (leaves.length > 0) {
    result.push({
      segment: "Pages satellites",
      path: SATELLITE_PATH,
      page: null,
      children: leaves,
      synthetic: true,
    });
  }
  return result;
}

/** Nombre de pages contenues dans un nœud (lui-même + descendants). */
export function countPages(node: TreeNode): number {
  return (node.page ? 1 : 0) + node.children.reduce((s, c) => s + countPages(c), 0);
}

export interface PageFilters {
  search: string;
  section: string;  // "" = toutes (segment de 1er niveau)
  status: string;   // "" = tous
  intent: string;   // "" = tous
  source: string;   // "" = tous
}

export const EMPTY_FILTERS: PageFilters = { search: "", section: "", status: "", intent: "", source: "" };

export function filterPages(pages: PlannedPage[], f: PageFilters): PlannedPage[] {
  const q = f.search.trim().toLowerCase();
  return pages.filter((p) => {
    if (f.section && sectionOf(p.url) !== f.section) return false;
    if (f.status && p.status !== f.status) return false;
    if (f.intent && p.intent !== f.intent) return false;
    if (f.source && p.source !== f.source) return false;
    if (q) {
      const hay = `${p.title} ${p.url} ${p.slug} ${p.description} ${p.keywords.join(" ")}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

/** Export CSV de la liste de pages (séparateur ';' pour Excel FR). */
export function planToCSV(pages: PlannedPage[]): string {
  const esc = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
  const header = [
    "Titre", "URL", "Section", "Type", "Statut", "Date parution",
    "Intention", "Source", "Mots-clés", "Description",
  ];
  const rows = pages.map((p) => [
    p.title, p.url, sectionOf(p.url), p.type,
    STATUS_META[p.status]?.label ?? p.status, p.publishDate,
    INTENT_META[p.intent]?.label ?? p.intent, p.source,
    p.keywords.join(", "), p.description,
  ].map(esc).join(";"));
  return [header.map(esc).join(";"), ...rows].join("\r\n");
}
