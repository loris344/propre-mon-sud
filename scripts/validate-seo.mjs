// @ts-check
/**
 * Validation SEO BLOQUANTE — exécutée en prebuild (`npm run build`).
 * Le build échoue si une page destinée à la publication viole une règle.
 *
 * Contrôles (garde-fous client) :
 *   1. Meta title + meta description présents et UNIQUES
 *   2. H1 présent
 *   3. Canonical présent, absolu, avec trailing slash
 *   4. Schema type renseigné
 *   5. FAQPage uniquement si des Q/R sont réellement écrites (visibles)
 *   6. Image obligatoire (ex. /realisations/*) → image exacte requise
 *   7. Liens internes obligatoires : aucune cible cassée (page connue)
 *   8. Similarité : blocage si deux corps de page sont trop proches
 *   9. Cohérence : toute page écrite non-draft a bien une entrée dans le plan
 *
 * Périmètre : toutes les pages catch-all rédigées (mdx présent, non draft),
 * car elles finiront toutes publiées — PLUS le blog : articles
 * (content/articles) et catégories (content/blog-categories). Les 4 articles
 * historiques (sans categorySlug, hors plan) ont des contrôles allégés pour ne
 * pas casser l'existant. Lance : `node scripts/validate-seo.mjs`
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PAGES = JSON.parse(fs.readFileSync(path.join(ROOT, "src/data/seo-pages.json"), "utf8")).pages;
const LINKS = JSON.parse(fs.readFileSync(path.join(ROOT, "src/data/internal-links.json"), "utf8"));
const IMAGE_MAP = JSON.parse(fs.readFileSync(path.join(ROOT, "src/data/image-map.json"), "utf8"));
const CONTENT_DIR = path.join(ROOT, "content/seo");

// Barème qualité validé client (2026-06-10) — voir CLAUDE.md.
const SIMILARITY_THRESHOLD = 0.70;   // Jaccard de 5-grammes de mots (bloquant)
const MIN_BODY_WORDS = 600;          // page locale : en dessous = page mince (bloquant)
const MIN_BODY_WORDS_PILLAR = 800;   // pages mères / hubs (priority 1-2 éditoriales)
const isPillar = (page) => /mère|hub/i.test(page.type || "");
// Échappatoire EXPLICITE pour les rares pages-sommaires légitimes (ex. hub de
// navigation) : frontmatter `minWords: <n>` — à justifier en notes.

const EXISTING_PUBLIC = new Set([
  "/", "/blog/", "/mentions-legales/", "/politique-confidentialite/",
  "/partenariat-mjpm/", "/partenariat-maisons-retraite/",
]);

// Articles de blog rédigés (non draft) : collectés une fois, pour leurs propres
// contrôles ET comme cibles valides des liens du corps des autres pages.
// URL imbriquée sous la catégorie du plan si frontmatter `categorySlug`.
const BLOG_URLS = new Set();
const blogArticles = [];
const ARTICLES_DIR = path.join(ROOT, "content/articles");
if (fs.existsSync(ARTICLES_DIR)) {
  for (const f of fs.readdirSync(ARTICLES_DIR)) {
    if (!/\.mdx?$/.test(f)) continue;
    const { data, content } = matter(fs.readFileSync(path.join(ARTICLES_DIR, f), "utf8"));
    if (data.draft === true) continue;
    const slug = f.replace(/\.mdx?$/, "");
    const url = data.categorySlug ? `/blog/${data.categorySlug}/${slug}/` : `/blog/${slug}/`;
    BLOG_URLS.add(url);
    blogArticles.push({ file: f, slug, url, data, body: content.trim() });
  }
}

// Catégories de blog rédigées (non draft).
const blogCategories = [];
const CATEGORIES_DIR = path.join(ROOT, "content/blog-categories");
if (fs.existsSync(CATEGORIES_DIR)) {
  for (const f of fs.readdirSync(CATEGORIES_DIR)) {
    if (!/\.mdx?$/.test(f)) continue;
    const { data, content } = matter(fs.readFileSync(path.join(CATEGORIES_DIR, f), "utf8"));
    if (data.draft === true) continue;
    const segment = f.replace(/\.mdx?$/, "");
    blogCategories.push({ file: f, segment, url: `/blog/${segment}/`, data, body: content.trim() });
  }
}

const byUrl = new Map(PAGES.map((p) => [p.url, p]));
const errors = [];
const warnings = [];
const err = (url, msg) => errors.push(`✗ ${url}\n    ${msg}`);
const warn = (url, msg) => warnings.push(`! ${url}  ${msg}`);

/* --- Collecte des pages rédigées ------------------------------------------ */
const written = [];
if (fs.existsSync(CONTENT_DIR)) {
  for (const f of fs.readdirSync(CONTENT_DIR)) {
    if (!/\.mdx?$/.test(f)) continue;
    const slug = f.replace(/\.mdx?$/, "");
    const { data, content } = matter(fs.readFileSync(path.join(CONTENT_DIR, f), "utf8"));
    if (data.draft === true) continue;
    const page = PAGES.find((p) => p.slug === slug);
    if (!page) {
      err(`content/seo/${f}`, "MDX sans entrée correspondante dans seo-pages.json (slug inconnu).");
      continue;
    }
    written.push({ page, data, body: content.trim() });
  }
}

/* --- Index des cibles publiables (pour les liens) ------------------------- */
const writtenUrls = new Set(written.map((w) => w.page.url));
const linkTargetOk = (url) => EXISTING_PUBLIC.has(url) || writtenUrls.has(url) || byUrl.has(url);

/**
 * Liens INTERNES DU CORPS (markdown). Le rendu les rend auto-activants
 * (cible non publiée → texte simple, jamais de 404), donc :
 *   - cible inconnue du plan = ERREUR (faute de frappe, lien mort pour toujours),
 *     rétrogradée en warning si strict=false (articles historiques hors plan)
 *   - cible publiée APRÈS la page = lien dormant N jours : comportement NORMAL
 *     du goutte-à-goutte, agrégé en une ligne de synthèse pour ne pas noyer
 *     les vrais warnings (seuls les dormants > 90 j sont listés un par un).
 */
const dormant = { count: 0, maxDays: 0, pages: new Set() };
function checkBodyLinks(u, body, pagePublishAt, strict = true) {
  for (const m of body.matchAll(/\]\((\/[^)#?\s]*)[^)]*\)/g)) {
    const raw = m[1];
    const target = raw.endsWith("/") ? raw : `${raw}/`;
    if (target === "/") continue;
    const known = byUrl.has(target) || EXISTING_PUBLIC.has(target) || BLOG_URLS.has(target);
    if (!known) {
      const msg = `Lien du corps vers une cible inconnue (jamais résolue) : ${raw}`;
      if (strict) err(u, msg);
      else warn(u, msg);
      continue;
    }
    const t = byUrl.get(target);
    if (t?.publishAt && pagePublishAt && t.publishAt > pagePublishAt) {
      const days = Math.round((new Date(t.publishAt) - new Date(pagePublishAt)) / 864e5);
      dormant.count++;
      dormant.pages.add(u);
      if (days > dormant.maxDays) dormant.maxDays = days;
      if (days > 90)
        warn(u, `lien du corps dormant ${days} j (cible ${target} publiée le ${t.publishAt}) — long, vérifier le planning.`);
    }
  }
}

/** Liens contextuels du corps : barème client = 3 à 6 par page. */
function countBodyInternalLinks(body) {
  let n = 0;
  for (const m of body.matchAll(/\]\((\/[^)#?\s]*)[^)]*\)/g)) if (m[1] !== "/") n++;
  return n;
}

/* --- Contrôles par page --------------------------------------------------- */
const titles = new Map();
const descs = new Map();
const h1s = new Map();

for (const { page, data, body } of written) {
  const u = page.url;
  // Meta EFFECTIVE : l'override du frontmatter prime sur le plan Excel.
  const metaTitle = data.metaTitle || page.metaTitle;
  const metaDescription = data.metaDescription || page.metaDescription;
  const h1 = data.h1 || page.h1;

  if (!metaTitle) err(u, "Meta title manquant.");
  else {
    if (titles.has(metaTitle)) err(u, `Meta title dupliqué avec ${titles.get(metaTitle)}.`);
    else titles.set(metaTitle, u);
    if (metaTitle.length > 65) warn(u, `Meta title long (${metaTitle.length} car.).`);
  }

  if (!metaDescription) err(u, "Meta description manquante.");
  else {
    if (descs.has(metaDescription)) err(u, `Meta description dupliquée avec ${descs.get(metaDescription)}.`);
    else descs.set(metaDescription, u);
    const L = metaDescription.length;
    if (L < 70 || L > 165) warn(u, `Meta description hors plage (${L} car., viser 120-160).`);
  }

  if (!h1) err(u, "H1 manquant.");
  else {
    // Deux pages avec le même H1 = deux pages en compétition sur la même
    // requête (cannibalisation) : à différencier par un override frontmatter.
    if (h1s.has(h1)) err(u, `H1 dupliqué avec ${h1s.get(h1)} (cannibalisation interne).`);
    else h1s.set(h1, u);
  }
  if (!page.canonical) err(u, "Canonical absente.");
  else if (!/^https:\/\//.test(page.canonical)) err(u, `Canonical non absolue : ${page.canonical}`);

  if (!page.schemaType) err(u, "Schema type manquant.");

  // FAQPage doit être adossé à des Q/R visibles
  const faq = Array.isArray(data.faq) ? data.faq.filter((f) => f && f.q && f.a) : [];
  if (/faqpage/i.test(page.schemaType || "") && faq.length === 0)
    err(u, "Schema FAQPage annoncé mais aucune Q/R visible (frontmatter faq vide).");

  // Image obligatoire → image exacte requise
  if (page.imageRequired && !IMAGE_MAP[u])
    err(u, "Image obligatoire mais aucune image exacte dans image-map.json.");

  // Corps trop mince (BLOQUANT — barème client : 600 mots, 800 pour mères/hubs)
  const minWords = Number(data.minWords) || (isPillar(page) ? MIN_BODY_WORDS_PILLAR : MIN_BODY_WORDS);
  const words = body.split(/\s+/).filter(Boolean).length;
  if (words < minWords)
    err(u, `Corps trop court : ${words} mots (minimum ${minWords}${isPillar(page) ? ", page mère/hub" : ""}).`);

  // Liens obligatoires cassés (cible inconnue du plan)
  for (const link of LINKS[u] || []) {
    if (link.priority === "Obligatoire" && !byUrl.has(link.target) && !EXISTING_PUBLIC.has(link.target))
      err(u, `Lien obligatoire vers une cible inconnue : ${link.target}`);
  }

  // Barème client : 3-6 liens contextuels dans le corps (le maillage structuré
  // en pied de page ne compte pas).
  const bodyLinks = countBodyInternalLinks(body);
  if (bodyLinks < 3) warn(u, `${bodyLinks} lien(s) contextuel(s) dans le corps (barème : 3-6).`);

  checkBodyLinks(u, body, page.publishAt || "");
}

/* --- Contrôles BLOG : articles --------------------------------------------- */
const categoryPlanBySegment = new Map(
  PAGES.filter((p) => p.type === "Catégorie blog").map((p) => [
    p.url.replace(/^\/blog\//, "").replace(/\/$/, ""),
    p,
  ]),
);
const MIN_ARTICLE_WORDS = 600;   // même barème que les pages locales
const MIN_CATEGORY_WORDS = 120;  // intro de page-liste (les cartes articles complètent)

for (const a of blogArticles) {
  const u = a.url;
  const isPlanned = Boolean(a.data.categorySlug);

  const title = a.data.metaTitle || a.data.title;
  const description = a.data.metaDescription || a.data.description;
  if (!title) err(u, "Titre manquant (frontmatter title).");
  else if (titles.has(title)) err(u, `Titre dupliqué avec ${titles.get(title)}.`);
  else titles.set(title, u);
  if (!description) err(u, "Description manquante (frontmatter description).");
  else {
    if (descs.has(description)) err(u, `Description dupliquée avec ${descs.get(description)}.`);
    else descs.set(description, u);
    const L = description.length;
    if (L < 70 || L > 165) warn(u, `Description hors plage (${L} car., viser 120-160).`);
  }
  if (!a.data.date) err(u, "Date manquante (frontmatter date).");

  if (!isPlanned) {
    // Article historique (hors plan) : contrôles allégés, pas de régression.
    checkBodyLinks(u, a.body, "", false);
    continue;
  }

  // Article du plan : contrôles complets.
  const seg = String(a.data.categorySlug);
  if (!categoryPlanBySegment.has(seg)) err(u, `categorySlug inconnu du plan : ${seg}`);
  const planned = byUrl.get(u);
  if (!planned) err(u, "URL hors plan : aucune entrée correspondante dans seo-pages.json.");
  if (!a.data.publishAt) err(u, "publishAt manquant (goutte-à-goutte des articles du plan).");
  else if (planned?.publishAt && String(a.data.publishAt) !== planned.publishAt)
    warn(u, `publishAt (${a.data.publishAt}) différent du plan (${planned.publishAt}).`);

  const faq = Array.isArray(a.data.faq) ? a.data.faq.filter((f) => f && f.q && f.a) : [];
  if (faq.length === 0) err(u, "FAQ manquante (frontmatter faq) — exigée sur les articles du plan.");

  const minWords = Number(a.data.minWords) || MIN_ARTICLE_WORDS;
  const words = a.body.split(/\s+/).filter(Boolean).length;
  if (words < minWords) err(u, `Corps trop court : ${words} mots (minimum ${minWords}).`);

  checkBodyLinks(u, a.body, String(a.data.publishAt || ""));
}

/* --- Contrôles BLOG : catégories ------------------------------------------- */
for (const c of blogCategories) {
  const u = c.url;
  const plan = categoryPlanBySegment.get(c.segment);
  if (!plan) {
    err(`content/blog-categories/${c.file}`, "Segment inconnu du plan (aucune « Catégorie blog » correspondante).");
    continue;
  }

  const title = c.data.metaTitle || plan.metaTitle;
  const description = c.data.metaDescription || plan.metaDescription;
  const h1 = c.data.title || plan.h1;
  if (!title) err(u, "Meta title manquant.");
  else if (titles.has(title)) err(u, `Meta title dupliqué avec ${titles.get(title)}.`);
  else titles.set(title, u);
  if (!description) err(u, "Meta description manquante.");
  else {
    if (descs.has(description)) err(u, `Meta description dupliquée avec ${descs.get(description)} (écrire l'override frontmatter).`);
    else descs.set(description, u);
    const L = description.length;
    if (L < 70 || L > 165) warn(u, `Meta description hors plage (${L} car., viser 120-160).`);
  }
  if (!h1) err(u, "Titre manquant (frontmatter title).");

  const faq = Array.isArray(c.data.faq) ? c.data.faq.filter((f) => f && f.q && f.a) : [];
  if (faq.length === 0) err(u, "FAQ manquante (frontmatter faq) — le rendu affiche une section FAQ rédigée.");

  const minWords = Number(c.data.minWords) || MIN_CATEGORY_WORDS;
  const words = c.body.split(/\s+/).filter(Boolean).length;
  if (words < minWords) err(u, `Intro trop courte : ${words} mots (minimum ${minWords}).`);

  checkBodyLinks(u, c.body, plan.publishAt || "");
}

/* --- Similarité inter-pages (Jaccard de 5-grammes) ------------------------ */
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
function shingles(words, n = 5) {
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(" "));
  return set;
}
function jaccard(a, b) {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  const uni = a.size + b.size - inter;
  return uni === 0 ? 0 : inter / uni;
}
const sig = [
  ...written.map((w) => ({ url: w.page.url, sh: shingles(norm(w.body)) })),
  ...blogArticles.map((a) => ({ url: a.url, sh: shingles(norm(a.body)) })),
  ...blogCategories.map((c) => ({ url: c.url, sh: shingles(norm(c.body)) })),
];
for (let i = 0; i < sig.length; i++) {
  for (let j = i + 1; j < sig.length; j++) {
    const s = jaccard(sig[i].sh, sig[j].sh);
    if (s >= SIMILARITY_THRESHOLD)
      err(sig[i].url, `Trop similaire à ${sig[j].url} (${(s * 100).toFixed(0)}%). Différencie le contenu.`);
  }
}

/* --- Rapport -------------------------------------------------------------- */
console.log(
  `\nValidation SEO — ${written.length} page(s) catch-all, ${blogArticles.length} article(s) de blog, ${blogCategories.length} catégorie(s) de blog contrôlés.`,
);
if (dormant.count)
  console.log(
    `ℹ ${dormant.count} lien(s) dormant(s) sur ${dormant.pages.size} page(s) (max ${dormant.maxDays} j) — normal, auto-activés au fil des publications.`,
  );
if (warnings.length) {
  console.log(`\n${warnings.length} avertissement(s) :`);
  for (const w of warnings) console.log("  " + w);
}
if (errors.length) {
  console.error(`\n${errors.length} ERREUR(S) BLOQUANTE(S) :\n`);
  for (const e of errors) console.error("  " + e);
  console.error("\nBuild interrompu : corrige les erreurs ci-dessus.\n");
  process.exit(1);
}
console.log("\n✓ Validation SEO passée. Aucune erreur bloquante.\n");
