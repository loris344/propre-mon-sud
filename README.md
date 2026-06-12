# SOS Nettoyage Diogène & Débarras — site web

Site professionnel de **SOS Nettoyage Diogène & Débarras** (nettoyage extrême, débarras,
désinfection, syndrome de Diogène) à Montpellier et dans le Sud de la France.

- **Production** : https://sosnettoyagediogene.fr
- **Stack** : Next.js 15 (App Router) en **export statique**, TypeScript, Tailwind + shadcn/ui
- **Hébergement** : GitHub Pages, déploiement auto via GitHub Actions à chaque push sur `main`
  **et un rebuild quotidien** (cron 05:00 UTC) qui fait éclore les pages dues. Une étape
  keepalive empêche GitHub de désactiver le cron après 60 j d'inactivité.

> 📖 **Les règles SEO, garde-fous et la procédure de rédaction des pages sont dans
> [`CLAUDE.md`](./CLAUDE.md).** À lire avant toute intervention sur le contenu SEO.

## Principe

Le site est une fabrique de **pages SEO programmatiques** : le plan complet (metas, H1/H2,
FAQ, planning, maillage) vit dans `src/data/seo-pages.json` ; seul le **corps unique** de
chaque page se rédige, dans `content/seo/<slug>.mdx`. Les pages sont publiées en
**goutte-à-goutte** par date (`publishAt`), via un rebuild quotidien. Sitemap, robots et
maillage interne sont générés automatiquement depuis les pages réellement publiées (jamais
de lien vers une page future). Les anciennes URL retirées sont redirigées via des stubs
statiques (`src/data/redirects.json` → générés en postbuild).

## Installation

```bash
git clone https://github.com/loris344/propre-mon-sud.git
cd propre-mon-sud
npm install
npm run dev        # http://localhost:3000
```

## Scripts

```bash
npm run dev            # serveur de dev (localhost:3000)
npm run build          # validation SEO (prebuild) puis export statique → out/
npm run start          # sert le build
npm run lint           # ESLint (next lint)
npm run serve          # sert le dossier out/ en local

npm run seo:status     # avancement de la rédaction + prochaines pages à écrire
npm run seo:validate   # validation SEO bloquante (metas uniques, H1 uniques, similarité, liens…)
npm run seo:images     # optimise les photos sources → WebP 1600×900
npm run seo:import     # régénère seo-pages.json depuis Bondash.xlsx
npm run seo:reschedule -- 2026-06-13   # recale TOUT le calendrier sur une nouvelle date de départ

node scripts/crawl-depth.mjs           # audit profondeur de clics (sur out/, après build)
```

## Structure

```
content/seo/         # corps MDX des pages SEO programmatiques
content/articles/    # articles de blog (MDX)
src/app/             # routes Next.js (App Router) — dont [...slug] (catch-all SEO)
src/data/            # seo-pages.json, internal-links.json (plan + maillage)
src/lib/             # accès données, metadata, JSON-LD
scripts/             # validation SEO, import Excel, optimisation images, audit maillage
out/                 # export statique généré (déployé sur GitHub Pages)
```

## Contact

- **Email** : contact@sosnettoyagediogene.fr
- **Site** : https://sosnettoyagediogene.fr

## Licence

Projet privé, propriété de SOS Nettoyage Diogène.
