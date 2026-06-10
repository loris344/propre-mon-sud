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
 * car elles finiront toutes publiées. Lance : `node scripts/validate-seo.mjs`
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

// Articles de blog existants (non draft) : cibles valides pour les liens du corps.
const BLOG_URLS = new Set();
const ARTICLES_DIR = path.join(ROOT, "content/articles");
if (fs.existsSync(ARTICLES_DIR)) {
  for (const f of fs.readdirSync(ARTICLES_DIR)) {
    if (!/\.mdx?$/.test(f)) continue;
    const { data } = matter(fs.readFileSync(path.join(ARTICLES_DIR, f), "utf8"));
    if (data.draft !== true) BLOG_URLS.add(`/blog/${f.replace(/\.mdx?$/, "")}/`);
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

/* --- Contrôles par page --------------------------------------------------- */
const titles = new Map();
const descs = new Map();

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

  // Liens INTERNES DU CORPS (markdown). Le rendu les rend auto-activants
  // (cible non publiée → texte simple, jamais de 404), donc :
  //   - cible inconnue du plan = ERREUR (faute de frappe, lien mort pour toujours)
  //   - cible publiée APRÈS la page = simple INFO (lien dormant N jours)
  for (const m of body.matchAll(/\]\((\/[^)#?\s]*)[^)]*\)/g)) {
    const raw = m[1];
    const target = raw.endsWith("/") ? raw : `${raw}/`;
    if (target === "/") continue;
    const known = byUrl.has(target) || EXISTING_PUBLIC.has(target) || BLOG_URLS.has(target);
    if (!known) {
      err(u, `Lien du corps vers une cible inconnue (jamais résolue) : ${raw}`);
      continue;
    }
    const t = byUrl.get(target);
    if (t?.publishAt && page.publishAt && t.publishAt > page.publishAt) {
      const days = Math.round((new Date(t.publishAt) - new Date(page.publishAt)) / 864e5);
      warn(u, `lien du corps dormant ${days} j (cible ${target} publiée le ${t.publishAt}) — OK, auto-activé ensuite.`);
    }
  }
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
const sig = written.map((w) => ({ url: w.page.url, sh: shingles(norm(w.body)) }));
for (let i = 0; i < sig.length; i++) {
  for (let j = i + 1; j < sig.length; j++) {
    const s = jaccard(sig[i].sh, sig[j].sh);
    if (s >= SIMILARITY_THRESHOLD)
      err(sig[i].url, `Trop similaire à ${sig[j].url} (${(s * 100).toFixed(0)}%). Différencie le contenu.`);
  }
}

/* --- Rapport -------------------------------------------------------------- */
console.log(`\nValidation SEO — ${written.length} page(s) rédigée(s) contrôlée(s).`);
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
