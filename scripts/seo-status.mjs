// @ts-check
/**
 * État d'avancement + REPRISE de la génération SEO.
 *
 * Écrit src/data/_generation-state.json : pour chaque page catch-all, indique
 * si son MDX est rédigé, s'il est en draft, et sa date de publication. Permet
 * de reprendre EXACTEMENT où une session s'est arrêtée (jamais repartir de
 * zéro) et de connaître la prochaine page à rédiger selon le planning.
 *
 * Lance : `node scripts/seo-status.mjs`
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PAGES = JSON.parse(fs.readFileSync(path.join(ROOT, "src/data/seo-pages.json"), "utf8")).pages;
const CONTENT_DIR = path.join(ROOT, "content/seo");
const OUT = path.join(ROOT, "src/data/_generation-state.json");

const catchall = PAGES.filter((p) => p.handledBy === "catchall");
const state = catchall.map((p) => {
  const file = path.join(CONTENT_DIR, `${p.slug}.mdx`);
  let written = false, draft = false, words = 0;
  if (fs.existsSync(file)) {
    written = true;
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    draft = data.draft === true;
    words = content.trim().split(/\s+/).filter(Boolean).length;
  }
  return { url: p.url, slug: p.slug, type: p.type, publishAt: p.publishAt, written, draft, words };
});

const done = state.filter((s) => s.written && !s.draft);
const remaining = state.filter((s) => !s.written || s.draft)
  .sort((a, b) => String(a.publishAt).localeCompare(String(b.publishAt)));

// Descriptions du PLAN en collision : ces pages partagent leur metaDescription
// Excel avec d'autres → l'override frontmatter `metaDescription` (écrit à la
// main, unique) est OBLIGATOIRE à la rédaction, sinon le build cassera quand
// la 2e page entrera en validation.
const descCount = new Map();
for (const p of catchall) {
  const d = (p.metaDescription || "").trim();
  if (d) descCount.set(d, (descCount.get(d) || 0) + 1);
}
const needsUniqueDesc = new Set(
  catchall.filter((p) => descCount.get((p.metaDescription || "").trim()) > 1).map((p) => p.slug),
);

// Pages EN RETARD : date de publication atteinte mais rien de publiable
// (pas de MDX ou encore en draft) → elles ne sortiront pas, silencieusement.
const today = new Date().toISOString().slice(0, 10);
const late = remaining.filter((s) => s.publishAt && s.publishAt <= today);

fs.writeFileSync(OUT, JSON.stringify({
  updatedFor: "génération SEO",
  total: catchall.length,
  done: done.length,
  remaining: remaining.length,
  late: late.length,
  nextBatch: remaining.slice(0, 10).map((s) => ({
    url: s.url, slug: s.slug, publishAt: s.publishAt,
    needsUniqueDesc: needsUniqueDesc.has(s.slug),
  })),
  pages: state,
}, null, 2) + "\n", "utf8");

console.log(`Avancement génération : ${done.length}/${catchall.length} pages rédigées.`);
if (late.length) {
  console.log(`\n⚠️  ${late.length} page(s) EN RETARD (date atteinte, pas de contenu publiable) :`);
  for (const s of late.slice(0, 10)) console.log(`  ${s.publishAt}  ${s.url}`);
  if (late.length > 10) console.log(`  … et ${late.length - 10} autre(s)`);
}
console.log(`\nProchaines à rédiger (par date) — ✍︎ = metaDescription unique à écrire (collision dans le plan) :`);
for (const s of remaining.slice(0, 10))
  console.log(`  ${s.publishAt}  ${s.url}${needsUniqueDesc.has(s.slug) ? "  ✍︎" : ""}`);
console.log(`\n${needsUniqueDesc.size} page(s) du plan ont une description en collision (override manuel requis à la rédaction).`);
console.log(`✓ État écrit → ${path.relative(ROOT, OUT)}`);
