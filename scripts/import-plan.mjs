// @ts-check
/**
 * Rend canonique un plan exporté depuis le dashboard /admin.
 * Copie un fichier JSON (téléchargé via « Exporter JSON ») vers
 * content/page-plan.json après validation minimale, puis il suffit de commiter.
 *
 * Usage : node scripts/import-plan.mjs ~/Downloads/page-plan.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_FILE = path.join(ROOT, "content/page-plan.json");

const src = process.argv[2];
if (!src) {
  console.error("Usage : node scripts/import-plan.mjs <fichier-exporté.json>");
  process.exit(1);
}
if (!fs.existsSync(src)) {
  console.error(`Fichier introuvable : ${src}`);
  process.exit(1);
}

let data;
try {
  data = JSON.parse(fs.readFileSync(src, "utf8"));
} catch (e) {
  console.error("JSON invalide :", e.message);
  process.exit(1);
}
if (!Array.isArray(data?.silos) || !Array.isArray(data?.pages)) {
  console.error("Format inattendu : il faut un objet { silos: [], pages: [] }.");
  process.exit(1);
}

// On ne conserve que les deux clés attendues (on ignore updatedAt etc.).
const clean = { silos: data.silos, pages: data.pages };
fs.writeFileSync(OUT_FILE, JSON.stringify(clean, null, 2) + "\n", "utf8");
console.log(`✓ ${OUT_FILE} mis à jour — ${clean.pages.length} pages, ${clean.silos.length} silos.`);
console.log("  Pense à : git add content/page-plan.json && git commit");
