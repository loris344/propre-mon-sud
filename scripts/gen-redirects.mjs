// @ts-check
/**
 * Génère des redirections 301 « façon statique » pour GitHub Pages (qui n'a ni
 * règles serveur ni next.config redirects en mode export). Pour chaque entrée
 * de src/data/redirects.json, écrit out/<from>/index.html : une page minimale
 * qui pose un canonical vers la cible et redirige le navigateur (meta refresh)
 * ET les bots (lien visible + canonical). C'est le pattern reconnu par Google
 * pour un export statique.
 *
 * Lancé en POSTBUILD (après `next build`). Idempotent : régénéré à chaque build
 * quotidien. N'écrase jamais une page réellement générée par Next (collision
 * = erreur signalée, pas d'écrasement silencieux).
 *
 * Sert deux usages : retrait d'anciens contenus (articles hérités) ET élagage
 * trimestriel (page ville à 0 clic → page département), cf. CLAUDE.md.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "out");
const SITE_URL = "https://sosnettoyagediogene.fr";

const { redirects } = JSON.parse(fs.readFileSync(path.join(ROOT, "src/data/redirects.json"), "utf8"));

if (!fs.existsSync(OUT)) {
  console.error("✗ gen-redirects : dossier out/ absent. Lancer `next build` d'abord.");
  process.exit(1);
}

const html = (target) => {
  const abs = `${SITE_URL}${target}`;
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex,follow">
<title>Page déplacée</title>
<link rel="canonical" href="${abs}">
<meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace(${JSON.stringify(target)});</script>
</head>
<body>
<p>Cette page a été déplacée. Si la redirection ne s'effectue pas, <a href="${target}">cliquez ici</a>.</p>
</body>
</html>
`;
};

let written = 0;
const collisions = [];
for (const [from, target] of Object.entries(redirects)) {
  if (typeof target !== "string" || !from.startsWith("/")) continue;
  const dir = path.join(OUT, from.replace(/^\/|\/$/g, ""));
  const file = path.join(dir, "index.html");
  if (fs.existsSync(file)) {
    // Une vraie page existe à cette URL : ne jamais l'écraser silencieusement.
    collisions.push(from);
    continue;
  }
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, html(target));
  written++;
}

if (collisions.length) {
  console.error(`✗ gen-redirects : ${collisions.length} collision(s) avec une page existante :`);
  for (const c of collisions) console.error("    " + c);
  process.exit(1);
}
console.log(`✓ gen-redirects : ${written} redirection(s) statique(s) générée(s).`);
