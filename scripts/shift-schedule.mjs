// @ts-check
/**
 * Recale TOUT le calendrier de publication sur une nouvelle date de départ,
 * en décalant uniformément chaque `publishAt` (plan + frontmatter des
 * articles de blog). La séquence et le budget par jour (ramp 4/j puis 7/j)
 * sont préservés à l'identique : seul le point de départ bouge.
 *
 * Usage : node scripts/shift-schedule.mjs 2026-06-13
 *
 * À lancer si le lancement réel (premier push sur main) ne correspond plus au
 * `meta.schedule.startDate` du plan : un démarrage en retard ferait éclore
 * d'un coup toutes les pages « dues » entre-temps, ce que le goutte-à-goutte
 * veut justement éviter. Penser ensuite à `npm run seo:status` (état) et
 * `npm run build` (validation) avant commit.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PLAN_FILE = path.join(ROOT, "src/data/seo-pages.json");
const ARTICLES_DIR = path.join(ROOT, "content/articles");

const target = process.argv[2];
if (!target || !/^\d{4}-\d{2}-\d{2}$/.test(target)) {
  console.error("Usage : node scripts/shift-schedule.mjs <YYYY-MM-DD>  (nouvelle date de départ)");
  process.exit(1);
}

const plan = JSON.parse(fs.readFileSync(PLAN_FILE, "utf8"));
const start = plan.meta?.schedule?.startDate;
if (!start) {
  console.error("meta.schedule.startDate introuvable dans seo-pages.json");
  process.exit(1);
}
const DAY = 864e5;
const deltaDays = Math.round((new Date(`${target}T00:00:00Z`).getTime() - new Date(`${start}T00:00:00Z`).getTime()) / DAY);
if (deltaDays === 0) {
  console.log(`Le plan démarre déjà le ${target} : rien à faire.`);
  process.exit(0);
}
const shift = (/** @type {string} */ d) => {
  const t = new Date(`${d}T00:00:00Z`);
  t.setUTCDate(t.getUTCDate() + deltaDays);
  return t.toISOString().slice(0, 10);
};

/* --- Plan --------------------------------------------------------------- */
plan.meta.schedule.startDate = target;
let shifted = 0;
for (const p of plan.pages) {
  if (p.publishAt) {
    p.publishAt = shift(p.publishAt);
    shifted++;
  }
}
fs.writeFileSync(PLAN_FILE, JSON.stringify(plan, null, 2) + "\n");

/* --- Frontmatter des articles (publishAt + date, tenus égaux) ------------ */
let articles = 0;
for (const f of fs.readdirSync(ARTICLES_DIR)) {
  if (!/\.mdx?$/.test(f)) continue;
  const file = path.join(ARTICLES_DIR, f);
  let txt = fs.readFileSync(file, "utf8");
  const m = txt.match(/^publishAt: "(\d{4}-\d{2}-\d{2})"$/m);
  if (!m) continue; // article historique hors plan : pas de goutte-à-goutte
  const next = shift(m[1]);
  txt = txt.replace(`publishAt: "${m[1]}"`, `publishAt: "${next}"`);
  txt = txt.replace(`date: "${m[1]}"`, `date: "${next}"`);
  fs.writeFileSync(file, txt);
  articles++;
}

const last = plan.pages.reduce((a, p) => (p.publishAt && p.publishAt > a ? p.publishAt : a), "");
console.log(`Décalage de ${deltaDays} jour(s) : ${shifted} entrées du plan, ${articles} articles.`);
console.log(`Nouveau calendrier : du ${target} au ${last}.`);
