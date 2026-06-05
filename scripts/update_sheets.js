import fs from 'fs';
import path from 'path';
import https from 'https';

// 1. Lire le sitemap généré par ton script npm run sitemap
// Ajuste le chemin si ton sitemap est généré dans 'dist/' ou 'public/' après le build
const sitemapPath = path.resolve('public/sitemap.xml'); 

if (!fs.existsSync(sitemapPath)) {
  console.error("Erreur : Le fichier sitemap.xml n'existe pas. Lance d'abord npm run sitemap.");
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// 2. Extraire toutes les URLs (<loc>...</loc>) via une Regex
const urlRegex = /<loc>(<\/loc>|[^<]+)<\/loc>/g;
const urls = [];
let match;

while ((match = urlRegex.exec(sitemapContent)) !== null) {
  urls.push(match[1]);
}

console.log(`Trouvé ${urls.length} URLs à envoyer.`);

// 3. Envoyer la liste à Google Sheets (via l'URL Apps Script)
const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK;

if (!webhookUrl) {
  console.error("Erreur : La variable d'environnement GOOGLE_SHEET_WEBHOOK est manquante.");
  process.exit(1);
}

const data = JSON.stringify({ urls: urls });

const urlParts = new URL(webhookUrl);
const options = {
  hostname: urlParts.hostname,
  path: urlParts.pathname + urlParts.search,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  if (res.statusCode >= 200 && res.statusCode < 300) {
    console.log("✅ Google Sheet mis à jour avec succès !");
  } else {
    console.error(`❌ Échec de l'envoi. Statut : ${res.statusCode}`);
  }
});

req.on('error', (error) => {
  console.error("Erreur lors de la requête HTTP :", error);
});

req.write(data);
req.end();
