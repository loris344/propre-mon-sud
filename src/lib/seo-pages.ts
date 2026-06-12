/**
 * Couche d'accès aux pages SEO programmatiques (issues de Bondash.xlsx).
 *
 * Source de vérité runtime :
 *   - src/data/seo-pages.json     : structure, metas, planning, schema, image
 *   - src/data/internal-links.json: maillage interne + ancres
 *   - content/seo/<slug>.mdx      : CORPS UNIQUE de chaque page + FAQ rédigée
 *
 * Règles clés (garde-fous client) :
 *   - Publication par DATE : en production, une page n'est visible que si
 *     `publishAt <= date du build` ET qu'elle n'est pas en draft. Un rebuild
 *     quotidien (GitHub Actions) fait passer les pages dues automatiquement.
 *   - Les pages futures restent en noindex et HORS sitemap.
 *   - Le maillage interne ne pointe JAMAIS vers une page non publiée.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import seoData from "@/data/seo-pages.json";
import internalLinks from "@/data/internal-links.json";
import { SITE_URL, BUSINESS_ID } from "@/lib/structured-data";
import { getAllArticles, articleUrl } from "@/lib/articles";
import { getPublishedCategories } from "@/lib/blog-categories";
import { buildDate, publicationDate } from "@/lib/build-date";
import type { PlannedPage, PageStatus, PageIntent } from "@/lib/page-plan";

export { buildDate, publicationDate };

const CONTENT_DIR = path.join(process.cwd(), "content/seo");
const isProd = process.env.NODE_ENV === "production";

export interface SeoPage {
  id: string;
  slug: string;
  url: string;
  title: string;
  type: string;
  template: string;
  service: string;
  departement: string;
  ville: string;
  region: string;
  priority: number | null;
  publishAt: string | null;
  author: string;
  keyword: string;
  secondaryKeywords: string[];
  intent: string;
  parentUrl: string | null;
  childrenUrls: string[];
  requiredLinks: string[];
  suggestedLinks: string[];
  needsImage: boolean;
  imageRequired: boolean;
  imageType: string;
  altProposed: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h2: string[];
  faq: string[];
  schemaType: string;
  canonical: string;
  noindexBeforePublish: boolean;
  notes: string;
  handledBy: "catchall" | "blog" | "existing";
}

export interface MdxFaq {
  q: string;
  a: string;
}
export interface SeoMdx {
  draft: boolean;
  body: string;
  faq: MdxFaq[];
  sources: string[];
  /** Overrides facultatifs : améliorent une meta/H1 trop générique du plan Excel. */
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
  /** Force l'absence d'image sur cette page (ex. visuel inadapté). */
  noImage?: boolean;
}
export interface InternalLink {
  target: string;
  anchor: string;
  type: string;
  priority: string;
}

const PAGES: SeoPage[] = (seoData as { pages: SeoPage[] }).pages;
const LINKS: Record<string, InternalLink[]> = internalLinks as Record<string, InternalLink[]>;
const BY_URL = new Map(PAGES.map((p) => [p.url, p]));

/** Routes concrètes déjà publiées (hors plan Excel) : cibles de maillage valides. */
const EXISTING_PUBLIC = new Set<string>([
  "/",
  "/blog/",
  "/mentions-legales/",
  "/politique-confidentialite/",
  "/partenariat-mjpm/",
  "/partenariat-maisons-retraite/",
]);

/* ------------------------------------------------------------------ MDX --- */
/** Cache de build : readMdx est appelé par isPublished pour CHAQUE page, et
 *  getPublishedPages l'est par le layout, le footer de chaque page et le
 *  sitemap. Sans mémoïsation, le build relit/re-parse les ~790 MDX des
 *  centaines de fois (coût quadratique au fil des publications). En dev, pas
 *  de cache : la prévisualisation doit refléter les éditions à chaud. */
const mdxCache = new Map<string, SeoMdx | null>();

export function readMdx(slug: string): SeoMdx | null {
  if (isProd && mdxCache.has(slug)) return mdxCache.get(slug) ?? null;
  const result = readMdxUncached(slug);
  if (isProd) mdxCache.set(slug, result);
  return result;
}

function readMdxUncached(slug: string): SeoMdx | null {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const faq = Array.isArray(data.faq)
    ? (data.faq as Array<{ q?: string; a?: string }>)
        .filter((f) => f && f.q && f.a)
        .map((f) => ({ q: String(f.q), a: String(f.a) }))
    : [];
  return {
    draft: data.draft === true,
    body: content.trim(),
    faq,
    sources: Array.isArray(data.sources) ? data.sources.map(String) : [],
    metaTitle: data.metaTitle ? String(data.metaTitle) : undefined,
    metaDescription: data.metaDescription ? String(data.metaDescription) : undefined,
    h1: data.h1 ? String(data.h1) : undefined,
    noImage: data.noImage === true,
  };
}

/** Meta effective : l'override du MDX prime sur la valeur (parfois générique) du plan. */
export function effectiveMeta(page: SeoPage, mdx: SeoMdx | null) {
  return {
    metaTitle: mdx?.metaTitle || page.metaTitle || page.title,
    metaDescription: mdx?.metaDescription || page.metaDescription,
    h1: mdx?.h1 || page.h1 || page.title,
  };
}

export function hasMdx(slug: string): boolean {
  return fs.existsSync(path.join(CONTENT_DIR, `${slug}.mdx`));
}

/* ------------------------------------------------------------ Publication -- */
/** Une page est publiée si elle a un corps, n'est pas en draft, et que sa date
 *  d'échéance est atteinte (en prod). En dev, tout corps existant est visible. */
export function isPublished(page: SeoPage): boolean {
  if (page.handledBy !== "catchall") return false;
  const mdx = readMdx(page.slug);
  if (!mdx || mdx.draft) return false;
  if (!isProd) return true; // dev : prévisualisation de tout ce qui est rédigé
  if (!page.publishAt) return false;
  return page.publishAt <= publicationDate();
}

/** Toutes les pages catch-all qui DOIVENT être générées statiquement.
 *  Mémoïsé en prod (résultat invariant pendant un build). */
let _publishedPages: SeoPage[] | null = null;
export function getPublishedPages(): SeoPage[] {
  if (isProd && _publishedPages) return _publishedPages;
  const pages = PAGES.filter(isPublished);
  if (isProd) _publishedPages = pages;
  return pages;
}

export interface NavLink {
  url: string;
  label: string;
}

/**
 * Pages-hubs services de 1er niveau réellement publiées (priority 1, URL à un
 * seul segment : /debarras/, /nettoyage-diogene/…). Alimente la navigation
 * GLOBALE crawlable (footer + header) en vrais liens, pour que chaque page mère
 * soit à 1 clic de n'importe quelle page. La liste croît automatiquement au fil
 * des publications et ne pointe JAMAIS vers une page future (filtre isPublished).
 */
export function getServiceHubs(): NavLink[] {
  return getPublishedPages()
    .filter((p) => p.priority === 1 && /^\/[^/]+\/$/.test(p.url))
    .map((p) => ({ url: p.url, label: p.title }));
}

/**
 * Pillars SECONDAIRES (silos transversaux et hubs) : pages racines à un seul
 * segment qui ne sont PAS dans la nav principale (priorité ≠ 1) mais qui ont
 * une descendance (villes, sous-pages). Sans lien sitewide, leurs villes
 * tombent à 4 clics de l'accueil (pillar à 2-3 clics + département + ville).
 * Affichés dans le footer (crawlable partout) → le pillar passe à 1 clic et
 * toute sa descendance repasse à ≤ 3 clics. Liste curÉe et stable, filtrée
 * sur les pages réellement publiées (jamais de lien vers une page future).
 */
const SECONDARY_HUB_URLS = [
  "/nettoyage-apres-sinistre/",
  "/remise-en-etat-logement/",
  "/nettoyage-debarras-proprietaire-bailleur/",
  "/zones-intervention/",
  "/realisations/",
];
export function getSecondaryHubs(): NavLink[] {
  const pub = publicUrlSet();
  return SECONDARY_HUB_URLS.filter((u) => pub.has(u)).map((u) => ({
    url: u,
    label: BY_URL.get(u)?.title || u,
  }));
}

export function getPageByUrl(url: string): SeoPage | undefined {
  return BY_URL.get(url);
}

/** Convertit un tableau de segments (route catch-all) en URL canonique. */
export function urlFromSlugSegments(segments: string[] | undefined): string {
  if (!segments || segments.length === 0) return "/";
  return `/${segments.join("/")}/`;
}

/** Ensemble des URLs publiquement accessibles (pour filtrer le maillage).
 *  Inclut les articles de blog publiés (URL plate ou imbriquée sous leur
 *  catégorie) et les catégories de blog publiées : le maillage du plan et les
 *  liens rédigés dans les corps peuvent pointer vers ces pages. */
let _publicUrls: Set<string> | null = null;
function publicUrlSet(): Set<string> {
  if (_publicUrls) return _publicUrls;
  const set = new Set<string>(EXISTING_PUBLIC);
  for (const p of getPublishedPages()) set.add(p.url);
  for (const a of getAllArticles()) set.add(articleUrl(a));
  for (const c of getPublishedCategories()) set.add(c.url);
  _publicUrls = set;
  return set;
}

/**
 * Une URL interne est-elle réellement en ligne au moment du build ?
 * Utilisé par le rendu markdown pour les liens AUTO-ACTIVANTS : un lien du
 * corps vers une page pas encore publiée s'affiche en texte simple (pas de
 * 404), puis devient un vrai lien au rebuild quotidien qui suit la
 * publication de sa cible. Ancres internes (#…) tolérées.
 */
export function isUrlPublished(href: string): boolean {
  const clean = href.split("#")[0].split("?")[0];
  if (clean === "" || clean === "/") return true;
  const norm = clean.endsWith("/") ? clean : `${clean}/`;
  return publicUrlSet().has(norm);
}

/* --------------------------------------------------------------- Maillage -- */
/**
 * Liens internes d'une page, filtrés pour ne JAMAIS exposer une page future.
 * On part du maillage Excel (avec ancres), on retire les cibles non publiées
 * et l'auto-référence, puis on dédoublonne.
 */
export function getInternalLinksFor(url: string): InternalLink[] {
  const pub = publicUrlSet();
  const seen = new Set<string>();
  const out: InternalLink[] = [];
  for (const link of LINKS[url] ?? []) {
    if (link.target === url) continue;
    if (!pub.has(link.target)) continue; // page future / inexistante → masquée
    if (seen.has(link.target)) continue;
    seen.add(link.target);
    out.push({ ...link, anchor: link.anchor || labelForUrl(link.target) });
  }
  return out;
}

function labelForUrl(url: string): string {
  const p = BY_URL.get(url);
  return p?.title || url;
}

/**
 * Maillage interne STRUCTURÉ selon les types du document (Bondash.xlsx) :
 *   - sameCity : « Même ville » → autres services dans la même ville (silo local)
 *   - children : « Enfant » / « Ville enfant » → sous-pages
 *   - related  : « Maillage obligatoire » → services liés / pages mères
 *   - suggested: « Lien suggéré »
 * Le type « Parent » est exclu (déjà rendu dans le fil d'Ariane). Toutes les
 * cibles non publiées sont retirées, avec leur ancre exacte du plan.
 */
export interface MaillageGroups {
  sameCity: InternalLink[];
  children: InternalLink[];
  related: InternalLink[];
  suggested: InternalLink[];
}
export function getMaillage(page: SeoPage): MaillageGroups {
  return getMaillageForUrl(page.url);
}

/** Même maillage, pour les pages hors catch-all (articles et catégories blog). */
export function getMaillageForUrl(url: string): MaillageGroups {
  const pub = publicUrlSet();
  const seen = new Set<string>();
  const groups: MaillageGroups = { sameCity: [], children: [], related: [], suggested: [] };
  for (const link of LINKS[url] ?? []) {
    if (link.target === url || !pub.has(link.target) || seen.has(link.target)) continue;
    const t = (link.type || "").toLowerCase();
    if (t.includes("parent")) continue; // déjà dans le fil d'Ariane
    seen.add(link.target);
    const entry: InternalLink = { ...link, anchor: link.anchor || labelForUrl(link.target) };
    if (t.includes("même ville") || t.includes("meme ville")) groups.sameCity.push(entry);
    else if (t.includes("enfant")) groups.children.push(entry);
    else if (t.includes("sugg")) groups.suggested.push(entry);
    else groups.related.push(entry); // « Maillage obligatoire »
  }
  return groups;
}

/* ----------------------------------------------------------- Fil d'Ariane -- */
export interface Crumb {
  name: string;
  url: string;
}
/**
 * Fil d'Ariane limité aux ancêtres RÉELLEMENT publiés : avec la publication
 * goutte-à-goutte, un parent (ex. page département) peut sortir APRÈS ses
 * enfants — le lien pointerait alors vers un 404 pendant plusieurs jours.
 * On saute les ancêtres non publiés (la chaîne remonte au publié suivant) ;
 * ils réapparaissent automatiquement au rebuild qui suit leur publication.
 */
export function buildBreadcrumb(page: SeoPage): Crumb[] {
  const crumbs: Crumb[] = [{ name: "Accueil", url: "/" }];
  const pub = publicUrlSet();
  const chain: SeoPage[] = [];
  let cur: SeoPage | undefined = page;
  const guard = new Set<string>();
  while (cur && cur.parentUrl && !guard.has(cur.url)) {
    guard.add(cur.url);
    const parent = BY_URL.get(cur.parentUrl);
    if (!parent || parent.url === "/") break;
    if (pub.has(parent.url)) chain.unshift(parent);
    cur = parent;
  }
  for (const c of chain) crumbs.push({ name: c.title, url: c.url });
  crumbs.push({ name: page.title, url: page.url });
  return crumbs;
}

/* ----------------------------------------------------------------- JSON-LD --- */
/**
 * Construit les blocs JSON-LD d'une page locale.
 *
 * Règles (état de l'art vérifié 2026-06, voir CLAUDE.md) :
 *   - PAS de LocalBusiness par ville : une adresse fabriquée dans une ville
 *     sans établissement = markup trompeur (signal doorway). L'entité unique
 *     vit sur la page d'accueil ; ici on la RÉFÉRENCE via provider @id.
 *   - PAS de bloc FAQPage : rich results FAQ supprimés par Google (mai 2026).
 *     Les FAQ restent visibles en HTML — c'est là qu'est leur valeur.
 *   - Service + areaServed (City/AdministrativeArea) = la modélisation honnête
 *     d'une entreprise qui se déplace.
 */
export function buildJsonLd(
  page: SeoPage,
  crumbs: Crumb[],
  meta: ReturnType<typeof effectiveMeta>,
): object[] {
  const blocks: object[] = [];
  const wants = (s: string) => page.schemaType?.toLowerCase().includes(s);
  const absolute = (u: string) => (u.startsWith("http") ? u : `${SITE_URL}${u}`);

  if (wants("service") || wants("localbusiness")) {
    const area = page.ville
      ? { "@type": "City", name: page.ville }
      : page.departement
      ? { "@type": "AdministrativeArea", name: page.departement }
      : { "@type": "AdministrativeArea", name: page.region || "Sud de la France" };
    blocks.push({
      "@context": "https://schema.org",
      "@type": "Service",
      // Metas EFFECTIVES (override frontmatter > plan) : les descriptions du
      // plan Excel sont templatées/en collision, elles ne doivent fuir nulle
      // part — y compris dans les données structurées.
      name: meta.h1,
      serviceType: page.service || page.keyword,
      url: absolute(page.url),
      areaServed: area,
      provider: { "@id": BUSINESS_ID },
      description: meta.metaDescription,
    });
  }
  if (crumbs.length > 1) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: absolute(c.url),
      })),
    });
  }
  return blocks;
}

/* --------------------------------------------------- Intégration /admin --- */
/**
 * Convertit les pages SEO programmatiques dans le modèle `PlannedPage` du
 * dashboard /admin, pour qu'elles s'affichent AVEC les pages existantes
 * (même tableau, mêmes statuts, mêmes filtres). Source unique : seo-pages.json
 * + l'état réel des MDX. Pas de duplication dans content/page-plan.json.
 */
export function getSeoPagesAsPlanned(): PlannedPage[] {
  const today = buildDate();
  const urlToId = new Map(PAGES.map((p) => [p.url, p.id]));
  return PAGES.filter((p) => p.handledBy === "catchall").map((p) => {
    const mdx = readMdx(p.slug);
    let status: PageStatus;
    if (!mdx) status = "planifie";              // au plan, pas encore rédigée
    else if (mdx.draft) status = "redaction";   // brouillon en cours
    else if (p.publishAt && p.publishAt <= today) status = "publie";
    else status = "relecture";                  // rédigée, programmée plus tard
    const intent: PageIntent = /transac/i.test(p.intent)
      ? "transactionnel"
      : /commerc/i.test(p.intent)
      ? "commercial"
      : "informationnel";
    const isPillar = p.childrenUrls.length > 0;
    return {
      id: p.id,
      siloId: "",
      type: isPillar ? "pilier" : "fille",
      parentId: p.parentUrl ? urlToId.get(p.parentUrl) ?? null : null,
      title: p.metaTitle || p.title,
      slug: p.slug,
      url: p.url,
      status,
      publishDate: p.publishAt || "",
      intent,
      keywords: [p.keyword, ...p.secondaryKeywords].filter((k) => k && !k.startsWith("/")),
      description: p.metaDescription,
      source: "prevu",
      notes: p.notes || "",
    };
  });
}

/* ------------------------------------------------------------------ Stats --- */
export function planStats() {
  const meta = (seoData as { meta: unknown }).meta;
  return {
    meta,
    catchallTotal: PAGES.filter((p) => p.handledBy === "catchall").length,
    written: PAGES.filter((p) => p.handledBy === "catchall" && hasMdx(p.slug)).length,
    published: getPublishedPages().length,
  };
}
