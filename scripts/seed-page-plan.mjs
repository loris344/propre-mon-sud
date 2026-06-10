// @ts-check
/**
 * Pré-remplit `content/page-plan.json` à partir du VRAI site :
 *   - routes existantes scannées dans src/app/**\/page.tsx
 *   - articles MDX de content/articles (frontmatter via gray-matter)
 *   - titres/descriptions tirés de src/lib/seo-config.ts (parsé en regex)
 *
 * La classification est dérivée de l'URL (arborescence) côté dashboard : ce
 * script ne range donc PAS les pages dans des silos thématiques. Il déduit
 * juste le type "pilier" (page index ayant des pages filles sous son chemin).
 *
 * Idempotent : préserve les pages "prevu" (créées dans le dashboard) et les
 * statuts/dates/intentions déjà édités. Lance : `node scripts/seed-page-plan.mjs`
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_DIR = path.join(ROOT, "src/app");
const ARTICLES_DIR = path.join(ROOT, "content/articles");
const SEO_FILE = path.join(ROOT, "src/lib/seo-config.ts");
const OUT_FILE = path.join(ROOT, "content/page-plan.json");

const withSlash = (p) => (p === "/" ? "/" : p.endsWith("/") ? p : `${p}/`);
const slugify = (s) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
const idFor = (url) => `p_${slugify(url) || "home"}`;

// Intention heuristique : pages d'offre / conversion = commercial, sinon info.
const COMMERCIAL = ["/landing/", "/partenariat", "/notaires-succession", "/protocole-sanitaire"];
const intentFor = (url) => (COMMERCIAL.some((p) => url.startsWith(p)) ? "commercial" : "informationnel");

/* ---- Parse léger de seo-config.ts pour titres/descriptions ---------------- */
function parseSeoConfigs() {
  const map = {};
  if (!fs.existsSync(SEO_FILE)) return map;
  const src = fs.readFileSync(SEO_FILE, "utf8");
  const blockRe = /'([^']+)':\s*\{([^}]*)\}/g;
  let m;
  while ((m = blockRe.exec(src))) {
    const [, key, body] = m;
    const get = (field) => {
      const fm = new RegExp(`${field}:\\s*"((?:[^"\\\\]|\\\\.)*)"`).exec(body);
      return fm ? fm[1] : "";
    };
    map[key] = { title: get("title"), description: get("description") };
  }
  return map;
}

/* ---- Scan des routes app/**\/page.tsx ------------------------------------- */
function scanAppRoutes(dir = APP_DIR, base = "") {
  const routes = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith("[")) continue; // route dynamique
      if (entry.name === "admin") continue;       // le dashboard lui-même
      routes.push(...scanAppRoutes(path.join(dir, entry.name), `${base}/${entry.name}`));
    } else if (entry.name === "page.tsx") {
      routes.push(withSlash(base === "" ? "/" : base));
    }
  }
  return routes;
}

/* ---- Articles MDX --------------------------------------------------------- */
function scanArticles() {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs.readdirSync(ARTICLES_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => {
      const slug = f.replace(/\.mdx?$/, "");
      const { data } = matter(fs.readFileSync(path.join(ARTICLES_DIR, f), "utf8"));
      return { slug, data };
    });
}

/* ---- Construction des pages "existant" ------------------------------------ */
const seo = parseSeoConfigs();
const seoFor = (url) => seo[url.replace(/\/$/, "") || "/"] || {};
const existing = [];

for (const url of scanAppRoutes()) {
  if (url.startsWith("/blog/") && url !== "/blog/") continue; // articles en dessous
  const meta = seoFor(url);
  const slug = url.replace(/\/$/, "").split("/").filter(Boolean).pop() || "accueil";
  existing.push({
    id: idFor(url), siloId: "", type: "fille", parentId: null,
    title: meta.title || slug, slug, url,
    status: "publie", publishDate: "", intent: intentFor(url),
    keywords: [], description: meta.description || "",
    source: "existant", notes: "",
  });
}

for (const { slug, data } of scanArticles()) {
  const url = `/blog/${slug}/`;
  const meta = seoFor(url);
  existing.push({
    id: idFor(url), siloId: "", type: "fille", parentId: null,
    title: data.title || meta.title || slug, slug, url,
    status: data.draft ? "redaction" : "publie",
    publishDate: data.date || "",
    intent: "informationnel",
    keywords: typeof data.keywords === "string"
      ? data.keywords.split(",").map((k) => k.trim()).filter(Boolean) : [],
    description: data.description || meta.description || "",
    source: "existant", notes: "",
  });
}

/* ---- type "pilier" = page dont l'URL préfixe une autre page (page index) -- */
for (const p of existing) {
  if (p.url === "/") continue; // l'accueil n'est pas un pilier de tout
  const isPillar = existing.some((o) => o !== p && o.url.startsWith(p.url));
  if (isPillar) p.type = "pilier";
}

/* ---- Fusion avec un plan existant (préserve "prevu" et l'édition manuelle) - */
let merged = { silos: [], pages: existing };
if (fs.existsSync(OUT_FILE)) {
  try {
    const prev = JSON.parse(fs.readFileSync(OUT_FILE, "utf8"));
    const prevPages = Array.isArray(prev.pages) ? prev.pages : [];
    const prevById = new Map(prevPages.map((p) => [p.id, p]));
    const refreshed = existing.map((p) => {
      const old = prevById.get(p.id);
      if (!old) return p;
      return { ...p, status: old.status, intent: old.intent, publishDate: old.publishDate,
        type: old.type || p.type, keywords: old.keywords?.length ? old.keywords : p.keywords,
        notes: old.notes ?? "" };
    });
    const planned = prevPages.filter((p) => p.source === "prevu");
    merged = { silos: [], pages: [...refreshed, ...planned] };
  } catch {
    /* fichier illisible → on repart du scan */
  }
}

fs.writeFileSync(OUT_FILE, JSON.stringify(merged, null, 2) + "\n", "utf8");
console.log(
  `✓ ${OUT_FILE}\n  ${merged.pages.length} pages (` +
  `${merged.pages.filter((p) => p.source === "existant").length} existantes, ` +
  `${merged.pages.filter((p) => p.source === "prevu").length} prévues)`
);
