// @ts-check
/**
 * Pipeline images SEO : public/images/seo/source/<service>/* → WebP optimisés.
 *
 *   - Convertit en WebP (largeur max 1600px, qualité 82) via Sharp.
 *   - Nom de sortie propre : <service>-<base>.webp (minuscules, sans accents).
 *   - Met à jour src/data/image-fallbacks.json (pool réutilisable par service).
 *   - Les vraies photos d'un chantier précis se déclarent dans image-map.json
 *     (clé = URL exacte de la page → nom de fichier WebP), à la main.
 *
 * Prérequis : `npm i -D sharp`. Lance : `node scripts/optimize-images.mjs`
 * Idempotent : ne reconvertit pas un WebP déjà présent et à jour.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "public/images/seo/source");
const OUT = path.join(ROOT, "public/images/seo/optimized");
const FALLBACKS_FILE = path.join(ROOT, "src/data/image-fallbacks.json");

// Services du plan + slug de sortie. Le rapprochement dossier → service se fait
// par NORMALISATION (accents, parenthèses, tirets ignorés), donc tes dossiers
// peuvent s'appeler "Désinfection logement", "Débarras (+ cave/grenier...)", etc.
const SERVICES = [
  { label: "Désinfection logement", slug: "desinfection-logement" },
  { label: "Nettoyage après décès", slug: "nettoyage-apres-deces" },
  { label: "Nettoyage insalubre", slug: "nettoyage-insalubre" },
  { label: "Nettoyage après squat", slug: "nettoyage-apres-squat" },
  { label: "Nettoyage Diogène", slug: "nettoyage-diogene" },
  { label: "Débarras", slug: "debarras" },
];

const slug = (s) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

// Clé de comparaison : minuscules, sans accents, sans parenthèses, espaces unifiés.
const normKey = (s) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/\([^)]*\)/g, " ").replace(/[^a-z0-9]+/g, " ").trim();

// Retrouve le service correspondant à un nom de dossier, même approximatif
// (accents, parenthèses, fautes de frappe). On compte les mots-clés partagés et
// on garde le meilleur score : "Désinfection logment" → "Désinfection logement".
function matchService(dirName) {
  const dirTokens = new Set(normKey(dirName).split(" ").filter(Boolean));
  let best = null;
  let bestScore = 0;
  for (const s of SERVICES) {
    const tokens = normKey(s.label).split(" ").filter(Boolean);
    const score = tokens.filter((t) => dirTokens.has(t)).length;
    if (score > bestScore) {
      bestScore = score;
      best = s;
    } else if (score === bestScore && score > 0 && best && s !== best) {
      best = "AMBIGU"; // égalité parfaite → on n'invente pas
    }
  }
  return best === "AMBIGU" ? null : best;
}

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.error("✗ Sharp manquant. Lance d'abord : npm i -D sharp");
    process.exit(1);
  }
  fs.mkdirSync(OUT, { recursive: true });
  const fallbacks = fs.existsSync(FALLBACKS_FILE)
    ? JSON.parse(fs.readFileSync(FALLBACKS_FILE, "utf8")) : {};

  if (!fs.existsSync(SRC)) {
    console.log("Aucun dossier source. Dépose tes photos dans public/images/seo/source/<service>/");
    return;
  }

  let converted = 0;
  for (const dir of fs.readdirSync(SRC)) {
    const dirPath = path.join(SRC, dir);
    if (!fs.statSync(dirPath).isDirectory()) continue;
    const match = matchService(dir);
    if (!match) {
      console.warn(`! Dossier ignoré (service non reconnu) : "${dir}"`);
      continue;
    }
    console.log(`• "${dir}" → ${match.label}`);
    const pool = new Set(fallbacks[match.label] || []);
    let i = 0;
    for (const file of fs.readdirSync(dirPath).sort()) {
      if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
      i++;
      const base = slug(path.parse(file).name) || `photo-${i}`;
      const outName = `${match.slug}-${base}.webp`;
      const outPath = path.join(OUT, outName);
      const srcStat = fs.statSync(path.join(dirPath, file));
      const fresh = fs.existsSync(outPath) && fs.statSync(outPath).mtimeMs >= srcStat.mtimeMs;
      if (!fresh) {
        await sharp(path.join(dirPath, file))
          // Recadrage homogène 16:9 centré sur la zone d'intérêt (visages /
          // sujet), pour éviter les images mal cadrées quel que soit le format
          // d'origine (portrait, carré, panoramique).
          .resize(1600, 900, { fit: "cover", position: sharp.strategy.attention })
          .webp({ quality: 82 })
          .toFile(outPath);
        converted++;
      }
      pool.add(outName);
    }
    fallbacks[match.label] = [...pool].sort();
  }

  fs.writeFileSync(FALLBACKS_FILE, JSON.stringify(fallbacks, null, 2) + "\n", "utf8");
  console.log(`✓ ${converted} image(s) converties en WebP → ${path.relative(ROOT, OUT)}`);
  for (const [s, arr] of Object.entries(fallbacks)) console.log(`  ${s}: ${arr.length} image(s)`);
}

main();
