// Audit de profondeur de clics : depuis / , combien de clics (vrais <a href>)
// pour atteindre chaque page ? Graphe construit sur le HTML rendu (out/),
// header + footer + corps inclus. BFS = plus court chemin réel.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "out");
const PAGES = JSON.parse(fs.readFileSync(path.join(ROOT, "src/data/seo-pages.json"), "utf8")).pages;

// url (avec / final) -> {priority, type, noindex}
const META = new Map();
for (const p of PAGES) {
  const u = p.url.endsWith("/") ? p.url : p.url + "/";
  META.set(u, { priority: p.priority ?? null, type: p.type || p.template || "seo" });
}

// 1) Recense les nodes = pages réellement rendues (out/**/index.html)
function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(fp));
    else if (e.name === "index.html") out.push(fp);
  }
  return out;
}
const fileToUrl = (fp) => {
  let rel = "/" + path.relative(OUT, path.dirname(fp)).split(path.sep).join("/");
  if (rel === "/.") rel = "/";
  return rel.endsWith("/") ? rel : rel + "/";
};

const files = walk(OUT);
const nodes = new Set(files.map(fileToUrl));

// Pages NOINDEX (landing payantes, fiches B2B en campagne, /admin, /404, stubs
// de redirection) : volontairement hors du maillage. Elles n'ont pas vocation
// à être à ≤ 3 clics — on les exclut du contrôle pour ne garder que le signal
// utile (pages indexables réellement orphelines = bug).
const noindex = new Set();
for (const fp of files) {
  const html = fs.readFileSync(fp, "utf8");
  if (/<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
    noindex.add(fileToUrl(fp));
  }
}

// 2) Normalise un href en chemin interne (ou null si externe/non-page)
const SITE_HOST = "sosnettoyagediogene.fr";
function normalize(href) {
  if (!href) return null;
  href = href.trim();
  if (/^(mailto:|tel:|javascript:|#)/i.test(href)) return null;
  let url = href;
  if (/^https?:\/\//i.test(href)) {
    try {
      const u = new URL(href);
      if (!u.host.includes(SITE_HOST)) return null; // lien externe
      url = u.pathname;
    } catch { return null; }
  } else {
    url = href.split("#")[0].split("?")[0]; // chemin relatif/absolu interne
    if (!url.startsWith("/")) return null;   // on ignore les relatifs ambigus
  }
  url = url.split("#")[0].split("?")[0];
  if (url === "") url = "/";
  if (!url.endsWith("/")) url += "/";
  return url;
}

// 3) Extrait les vrais <a href> de chaque page -> graphe dirigé
const graph = new Map();   // url -> Set(cibles)
for (const fp of files) {
  const from = fileToUrl(fp);
  const html = fs.readFileSync(fp, "utf8");
  const targets = new Set();
  for (const m of html.matchAll(/<a\b[^>]*\shref=["']([^"']+)["'][^>]*>/gi)) {
    const t = normalize(m[1]);
    if (t && nodes.has(t) && t !== from) targets.add(t);
  }
  graph.set(from, targets);
}

// 4) BFS depuis /
const START = "/";
const dist = new Map([[START, 0]]);
const parent = new Map();
const q = [START];
while (q.length) {
  const u = q.shift();
  for (const v of graph.get(u) || []) {
    if (!dist.has(v)) {
      dist.set(v, dist.get(u) + 1);
      parent.set(v, u);
      q.push(v);
    }
  }
}
const pathTo = (u) => {
  const chain = [u];
  while (parent.has(chain[0])) chain.unshift(parent.get(chain[0]));
  return chain.join(" → ");
};

// 5) Rapport
const rows = [...nodes].map((u) => ({
  url: u,
  depth: dist.has(u) ? dist.get(u) : Infinity,
  priority: META.get(u)?.priority ?? "—",
  type: META.get(u)?.type ?? "core",
})).sort((a, b) => (a.depth - b.depth) || String(a.priority).localeCompare(String(b.priority)));

console.log(`\nNodes (pages rendues) : ${nodes.size}  |  liens internes pris en compte : header+footer+corps`);
console.log(`Profondeur = nb de clics minimum depuis / via de vrais <a href>.\n`);
console.log("clics  priority  type                url");
console.log("-----  --------  ------------------  ----------------------------------");
for (const r of rows) {
  const d = r.depth === Infinity ? "∞" : String(r.depth);
  const flag = (r.depth > 3) ? "  ⚠️ >3" : "";
  console.log(`  ${d.padEnd(4)} ${String(r.priority).padEnd(8)}  ${String(r.type).padEnd(18)}  ${r.url}${flag}`);
}

// Seules les pages INDEXABLES comptent : une page noindex orpheline est voulue.
const bad = rows.filter((r) => r.depth > 3 && !noindex.has(r.url));
const skipped = rows.filter((r) => r.depth > 3 && noindex.has(r.url)).length;
console.log(
  `\n${bad.length === 0 ? "✓ Toutes les pages INDEXABLES sont à ≤ 3 clics de /." : `⚠️ ${bad.length} page(s) indexable(s) à plus de 3 clics (ou inaccessibles) :`}` +
    (skipped ? `  (${skipped} page(s) noindex orpheline(s) ignorée(s) : landing, partenariats campagne, redirections, admin, 404)` : ""),
);
for (const r of bad) {
  console.log(`  [${r.depth === Infinity ? "∞" : r.depth} clics] ${r.url}  (priority ${r.priority})`);
  if (r.depth !== Infinity) console.log(`       chemin: ${pathTo(r.url)}`);
}

// Focus : pages "prioritaires" SEO réellement en ligne (priority 1 et 2)
const prio = rows.filter((r) => r.priority === 1 || r.priority === 2);
console.log(`\n--- URL prioritaires SEO en ligne (priority 1-2) : ${prio.length} ---`);
for (const r of prio) {
  console.log(`  [${r.depth === Infinity ? "∞" : r.depth} clics] P${r.priority}  ${r.url}`);
  console.log(`       ${pathTo(r.url)}`);
}
