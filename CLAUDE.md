# CLAUDE.md — Règles & garde-fous du projet

## ⏩ REPRISE DE LA PRODUCTION SEO — à lire en premier (nouvelle session)

La mission en cours = rédiger les 790 pages SEO locales, une par une, en goutte-à-goutte.
Le **GO client est permanent** : continue sans redemander « je continue ? ». Pour reprendre :

1. `npm run seo:status` → donne l'avancement (X/790) et **les prochaines pages à rédiger dans l'ordre**.
2. Pour chaque page (1 à la fois) : lire le brief dans `src/data/seo-pages.json` (kw, H2 imposés, FAQ),
   faire 1-2 **recherches web locales** si la ville est nouvelle (sinon réutiliser les faits déjà connus),
   écrire `content/seo/<slug>.mdx` selon les règles ci-dessous.
3. **Garde-fou absolu** : `npm run build` (validation incluse) doit passer AVANT chaque commit.
   Vérifier la sortie. Committer chaque lot validé en local (PAS de push ; le client merge vers main).
4. Si coupure (tokens) : rien de cassé, le dernier commit est sain ; relancer `seo:status` et continuer.

**Les 6 erreurs à NE JAMAIS commettre** (détaillées plus bas) : page sous le minimum de mots
(≈720 mots de corps visé car la FAQ ne compte pas) · 2 pages trop similaires (varier les faits
locaux par ville) · tiret cadratin « — » dans le texte · meta description non unique · committer
un build rouge · inventer un fait local non vérifié.

État au dernier point connu : voir `seo:status` (≈77/790 au 2026-06-26). Voir aussi les mémoires
[[seo-mission]], [[style-redaction]], [[seo-etat-de-lart-2026]].

---

> Source de vérité **humaine** des règles SEO. Le code (`scripts/validate-seo.mjs`,
> `src/lib/seo-pages.ts`) les *applique* ; ce fichier explique le *quoi* et le *pourquoi*.
> En cas de doute sur un seuil chiffré, le code fait foi (les valeurs ci-dessous y renvoient).
>
> ⚠️ Le `README.md` est **périmé** (décrit l'ancien stack Vite/React Router/Helmet
> d'avant la migration Next.js). Ne pas s'y fier pour l'architecture.

## Le projet en une phrase

Site **SOS Nettoyage Diogène** (sosnettoyagediogene.fr) — **Next.js 15 App Router en
export statique** (`output: 'export'` → `out/`), hébergé sur GitHub Pages. C'est une
**usine à pages SEO programmatiques** : 839 pages planifiées (790 SEO catch-all + 47 blog
+ 2 existantes), publiées en **goutte-à-goutte** piloté par date. Tout est dans le repo,
pas de CMS ni de base de données.

## Architecture (source de vérité runtime)

| Brique | Fichier | Rôle |
|---|---|---|
| Plan complet | `src/data/seo-pages.json` | 839 pages : metas, H1/H2, FAQ, planning, schema, canonical |
| Maillage | `src/data/internal-links.json` | Liens internes typés + ancres exactes |
| Corps des pages | `content/seo/<slug>.mdx` | Le **texte unique** de chaque page (seule chose à rédiger) |
| Articles blog | `content/articles/*.mdx` | Articles éditoriaux |
| Rendu SEO | `src/app/[...slug]/page.tsx` | Route catch-all (H1, image 16:9, corps, FAQ, maillage, JSON-LD) |
| Publication | `src/lib/seo-pages.ts` | Filtre `publishAt`/`draft`, maillage typé, JSON-LD |
| Validation | `scripts/validate-seo.mjs` | **Bloquante au build** |

slug d'une page SEO = son URL sans les `/` de bord, avec les `/` internes → `--`
(ex. `/desinfection-logement/herault/montpellier/` → `desinfection-logement--herault--montpellier`).

## Stratégie de publication — goutte-à-goutte (décision client verrouillée)

Définie dans `seo-pages.json > meta.schedule` : **démarrage le 2026-06-10**, 14 jours à
**4 pages/jour**, puis **7 pages/jour** en croisière (étalement jusqu'au ~2026-10-08).

- Une page n'est publiée que si `publishAt <= date du build` **ET** `draft: false` **ET** son MDX existe.
- Un **rebuild quotidien** (cron GitHub Actions `0 5 * * *` dans `.github/workflows/deploy.yml`)
  fait éclore les pages dues. **JAMAIS d'édition manuelle quotidienne.**
- Les pages futures n'existent pas dans l'export : ni route, ni sitemap, ni lien interne vers elles.
- En `npm run dev`, tout MDX rédigé est visible (prévisualisation) ; le filtre date ne s'applique qu'en prod.

**Pourquoi** : publier 800 pages d'un coup est un signal de spam pour Google. Le drip imite
une croissance éditoriale organique.

## Procédure de rédaction d'UNE page (à suivre dans l'ordre)

1. `npm run seo:status` → avancement + les 10 prochaines pages à rédiger (triées par `publishAt`).
   Reprendre dans cet ordre, jamais au hasard, jamais de zéro.
2. Lire le brief dans `seo-pages.json` pour la page cible : `keyword`, `secondaryKeywords`,
   **H2 imposés**, **questions FAQ du plan**, `schemaType`, `canonical`, `intent`.
3. **Page ville/locale → recherche web OBLIGATOIRE** (1-2 `WebSearch`) avant d'écrire :
   vrais éléments locaux (quartiers, bâti, climat, dispositifs SCHS/ARS…). Sources en frontmatter `sources:`.
4. Écrire le MDX : frontmatter (`faq`, `sources`, overrides `metaTitle/metaDescription/h1`
   si le plan est trop générique, `noImage` si visuel inadapté) + corps markdown.
5. **Différencier le corps** des pages sœurs/mères (la similarité est contrôlée, voir §validation).
6. `npm run seo:validate`. Travailler par **lots de ~10-15 pages**, checkpoint (validate + commit) entre chaque.
7. Publier : `draft: false` + commit + push sur `main`. Sitemap et robots se régénèrent seuls
   depuis les pages publiées (`src/app/sitemap.ts`, `src/app/robots.ts`).

## Garde-fous — INTERDITS absolus

- ❌ **Inventer** un fait, un avis, un chantier, une statistique, un quartier. Non vérifié = pas écrit.
- ❌ **Faux avis / fausse note** : JAMAIS d'`AggregateRating` ni de balises `Review` sur nos
  propres pages — même avec de vrais avis. Les *self-serving reviews* (LocalBusiness/Organization
  qui se note lui-même) sont **inéligibles aux étoiles depuis sept. 2019** (règle Google toujours
  en vigueur, vérifiée 2026-06) ; un rating codé en dur = action manuelle « spammy structured
  markup » + pratique commerciale trompeuse (DGCCRF). Les étoiles locales viennent du **Google
  Business Profile**, pas du site. Les avis réels s'affichent en HTML visible, sans markup.
- ❌ **LocalBusiness par ville ou dupliqué partout** : UN SEUL `LocalBusiness` (adresse réelle
  Montpellier 34000, `@id` stable ex. `#business`), émis sur la **page d'accueil uniquement**
  (reco Google : home ou une seule page, pas sur les 839). Les pages villes émettent un
  `Service` + `areaServed: ville` + `provider: {"@id": …#business}` (référence, pas copie) —
  jamais une 2ᵉ adresse locale fabriquée (signal doorway / faux établissement).
- ❌ **Templating des meta descriptions.** ~331 descriptions du plan Excel sont en collision :
  l'override `metaDescription` du frontmatter s'écrit À LA MAIN, unique, nourri par la recherche
  locale de la page. Jamais de génération « {service} à {ville}, devis gratuit ».
- ❌ **Rédiger plusieurs pages en parallèle.** Les pages s'écrivent UNE PAR UNE, séquentiellement
  (décision client) : chaque page a sa recherche locale propre, sa relecture, et la cohérence du
  maillage se vérifie au fil de l'eau.
- ❌ **Tirets cadratins « — » dans le contenu rédigé** (corps MDX, FAQ, metas) : le client
  les juge « trop IA ». Utiliser virgules, deux-points, parenthèses ou phrases coupées à la
  place. (Dans les commentaires de code, peu importe : ils ne sont pas visibles.)
- ❌ **Bourrage de mots-clés.** Les secondaires s'intègrent naturellement.
- ❌ **Accroche « Basés à Montpellier » en tête d'article, ou martèlement du siège.** Sur une page
  qui cible une ville (surtout lointaine : Toulouse, Marseille…), répéter « basés à Montpellier »
  dessert le lecteur sans rien lui apporter, et ça ne protège PAS du doorway (qui se joue dans le
  JSON-LD, pas dans l'accroche). Une **seule** mention, discrète et subordonnée, en fin de page,
  orientée couverture/contact. Voir le barème « Mention d'implantation (Montpellier) ».
- ❌ **Éditer la publication à la main au quotidien.** Tout passe par `publishAt` + le cron.
- ❌ **Pointer un lien interne vers une page non publiée** (géré auto par `getMaillage`, ne pas contourner).
- ❌ Annoncer un schema **`FAQPage` sans Q/R réellement visibles** sur la page.
- ❌ Faire indexer les pages volontairement en **`noindex`** : les 5 `/landing/*`,
  `/notaires-succession`, `/protocole-sanitaire` (voir `src/app/robots.ts`).
## Production autonome (mandat client donné le 2026-06-10)

Le client a donné le **GO permanent** : dérouler la rédaction des 790 pages sans redemander
« je continue ? ». C'est la mission. Faire le maximum à chaque session.

**Protocole anti-coupure (tokens limités → l'agent peut s'arrêter net et reprendre ~5 h plus tard) :**
1. Travailler par **petits lots** (≈ 5-8 pages), une page à la fois.
2. **Ne JAMAIS committer du contenu invalide** : `npm run build` (donc validate) doit passer AVANT
   chaque `git commit`. Vérifier la sortie, pas seulement lancer la commande.
3. **Committer chaque lot validé** (repo local, pas de push ; le client merge vers main lui-même).
4. Conséquence : une coupure en plein lot ne perd au pire qu'une page non encore écrite — rien
   de cassé, rien de bancal. Tout commit est un point de reprise sain.
5. **Reprise** : `npm run seo:status` donne l'avancement et les prochaines pages. La présence du
   MDX = page faite. On reprend dans l'ordre du planning, jamais de zéro.
6. **Calibration longueur (leçon vécue) :** le validateur ne compte QUE le corps markdown,
   PAS le frontmatter (donc la FAQ ne compte pas). Un brouillon « qui semble long » tombe
   souvent à ~500 mots de corps. Pour passer 600 du 1er coup, viser **~720 mots de corps
   VISIBLE** : intro nourrie (~110) + chaque section H2 à ~110-120 mots + un paragraphe de
   contexte local supplémentaire (~110). Vérifier avec un comptage avant `npm run build`.

## Barème qualité validé (client, 2026-06-10)

| Critère | Valeur validée |
|---|---|
| Mots — page locale (ville/département) | **≥ 600** |
| Mots — pages mères P1/P2 | **≥ 800** |
| Similarité inter-pages (Jaccard 5-grammes) | **bloquant ≥ 0.70** (à câbler dans `validate-seo.mjs`) |
| Faits locaux | **≥ 1 fait local vérifié par section H2** (quartier, bâti, SCHS/ARS, INSEE…) |
| Meta description | unique, écrite à la main au moment de la rédaction |
| Images | selon l'approvisionnement client (pools `source/<service>/`) ; alt unique/page. Image obligatoire sur toute page (pas de `noImage` sauf cas exceptionnel). Photo précise via `image-map.json` (URL → fichier) |
| Dates affichées | format **jj/mm/aaaa** (les données restent en ISO pour le tri) |
| Nom de l'entreprise | **SOS Nettoyage Diogène & Débarras** (exactement, depuis le 11/06/2026 — aligné sur la fiche Google Business Profile). Ancien nom « SOS Nettoyage Diogène » conservé en `alternateName` dans le JSON-LD. Le corps des pages SEO ne cite pas le nom complet (parler de « nos équipes », « nous ») ; « nettoyage Diogène » en minuscules = le service, à ne pas confondre avec la marque. |
| Mention d'implantation (Montpellier) | **JAMAIS dans l'intro/accroche.** Au plus **UNE** mention par page ville, en position **subordonnée** dans la section finale (« …nous intervenons à X et dans [secteur], au départ de Montpellier »), tournée couverture/contact — **jamais** d'accroche « Basés à Montpellier ». Pas de promesse de proximité chiffrée (« à 30 min », « à trois quarts d'heure ») hors agglomération de Montpellier. **L'anti-doorway repose sur le JSON-LD (Service + areaServed + provider `#business`) et le contenu local unique, PAS sur la répétition de « Montpellier ».** Les pages dont la ville EST Montpellier le mentionnent naturellement (inchangé). |
| Liens contextuels dans le corps | 3-6 par page, ancres variées (la diversité d'ancres > ancre exacte répétée) |
| Liens externes sortants | **uniquement si utile** : 1 lien vers une source OFFICIELLE/autoritaire (service-public, ARS, mairie, ANIL, INSEE…) sur les pages qui citent une procédure ou un dispositif (insalubre, squat, Diogène). JAMAIS le même lien templaté partout, ni sur les pages purement transactionnelles (débarras). Le rendu ouvre l'externe en `target="_blank" rel="noopener noreferrer"`. Pas de `nofollow` vers une source de confiance. Les URLs doivent être réelles (issues de la recherche, conservées dans `sources:`). |

## État de l'art vérifié (recherche web 2026-06-10) — faits qui pilotent les choix

- **FAQ rich results : supprimés par Google le 7 mai 2026** pour tous les sites. Le schema
  `FAQPage` n'apporte plus rien (inoffensif mais inutile). Les FAQ restent OBLIGATOIRES en
  HTML visible (valeur utilisateur + extraits IA) — la règle « FAQ rédigée par page » tient.
- **Scaled content abuse / doorway** : le critère n'est ni le volume ni l'outil, mais la
  similarité entre pages sœurs et la valeur par page. Zone rouge praticien : > 50-60 % de texte
  interchangeable hors nom de ville. Viser ≥ 40-50 % de contenu non partagé entre pages sœurs.
- **Cadence 4→7/j : aucun risque documenté** — mais pilotage par GSC obligatoire : jalon
  stop-or-go à ~50-80 pages publiées ; si indexation < 50 % à 30 j ou « Crawled - currently
  not indexed » s'accumule → GELER et corriger le template avant de continuer.
- **Indexation réaliste sur domaine à faible autorité : 40-70 % à 6 mois**, et purge Google des
  pages à 0 clic vers 90-130 jours. Prévoir un **élagage trimestriel** : page à 0 impression
  après 4-6 mois → consolidation/redirect vers la page département. Les micro-villes sans
  demande locale se couvrent par la page département, pas par une page ville vide.
- **E-E-A-T (sujets sensibles : décès, Diogène, insalubrité = YMYL-adjacent)** : il faut une
  couche d'entité — page « Qui sommes-nous » substantielle, référent humain identifiable,
  kit confiance (SIRET, RC pro, **Certibiocide désinfectants — obligatoire depuis le
  1er janvier 2026** pour les biocides TP2/TP3/TP4, véhicules banalisés), avis GBP récents.
- **Google Business Profile ≈ 32 % du classement local pack** (Whitespark 2026) : la fiche GBP
  est l'actif n°1 du local — à créer/optimiser côté client en parallèle du site.
- **AI Overviews** : ~15 % seulement des requêtes transactionnelles locales (pages villes
  relativement protégées) mais 92-97 % des requêtes informationnelles → le blog doit être
  « extractible » (réponse directe en 2-3 phrases sous chaque H2 question).
- **llms.txt : non adopté par les crawlers IA** (Google compare au meta keywords). Coût zéro
  de le garder, mais aucune priorité — et il ne doit JAMAIS contenir de fausses stats.
- **Avant/après photos** : consentement écrit du client requis (vie privée/RGPD, même sans
  visage) ; anonymisation (pas de courrier/photos de famille/vue extérieure identifiable) ;
  ton digne, jamais sensationnaliste.

## Validation bloquante — les contrôles (`scripts/validate-seo.mjs`)

Tourne en `prebuild` : **le build échoue** si une règle est violée. Périmètre = tous les MDX non-draft.

1. Meta title **présent et unique** (warn si > 65 car.).
2. Meta description **présente et unique** (warn hors 70-165 car. ; viser **120-160**).
3. H1 présent.
4. Canonical absolue (`https://`) avec trailing slash.
5. Schema type renseigné.
6. `FAQPage` ⇒ Q/R réellement écrites (frontmatter `faq` non vide).
7. Image exacte requise si `imageRequired` (`src/data/image-map.json`).
8. Liens obligatoires : aucune cible cassée.
9. **Similarité inter-pages** : bloquant si Jaccard de 5-grammes ≥ `SIMILARITY_THRESHOLD`.
   Corps < `MIN_BODY_WORDS` → warning (page mince).

⚠️ Seuils actuels du code (0.82 / 250 mots) **à durcir** vers les valeurs validées du barème
qualité (0.70 / 600 mots) avant le lancement de la production. Tant que le code n'est pas
aligné, le barème client prime sur le code pour la rédaction.

## Maillage interne & profondeur

Maillage typé depuis le plan (`getMaillage`, `src/lib/seo-pages.ts`) :
`sameCity` (silo local) · `children` (sous-pages) · `related` (obligatoire) · `suggested`.
Le type `Parent` est exclu (déjà dans le fil d'Ariane + BreadcrumbList JSON-LD). Les cibles
non publiées sont retirées automatiquement. Header/footer injectent les hubs services en liens
crawlables. Objectif : **chaque page à ≤ 3 clics de l'accueil** — audit via `node scripts/crawl-depth.mjs`.

## Images

Photos client dans `public/images/seo/source/<service>/` → `npm run seo:images`
(`scripts/optimize-images.mjs`) : **WebP 1600×900**, recadrage Sharp `attention`, qualité 82.
Rapprochement dossier→service tolérant (accents/parenthèses/fautes). **Alt unique par page.**
`noImage: true` retire l'image d'une page. Le client remplace ses photos lui-même.

## Commandes

```bash
npm run dev            # dev sur localhost:3000 (prévisualise tout le rédigé)
npm run seo:status     # avancement + prochaines pages à rédiger
npm run seo:validate   # validation bloquante (= prebuild)
npm run seo:images     # optimise les photos → WebP
npm run seo:import     # régénère seo-pages.json depuis Bondash.xlsx (si l'Excel change)
npm run build          # prebuild (validate) puis export statique → out/
node scripts/crawl-depth.mjs   # audit profondeur de clics (sur out/, après build)
```

## Notes techniques

- Rendu markdown via **`react-markdown`** (PAS `next-mdx-remote` : incompatible Next 15 + React 18).
- `trailingSlash: true` → canonicals normalisés avec `/` final (`withTrailingSlash`).
- SEO via l'API `metadata`/`generateMetadata` de Next + `src/lib/metadata.ts` ; JSON-LD dans `src/lib/structured-data.ts`.
- Supabase et l'admin dynamique ont été **supprimés** : avis clients en dur (`src/data/reviews.ts`), galerie en dur.
- `gtag_report_conversion()` est global (GTM, `global.d.ts`) ; tout composant avec `onClick` doit être `"use client"`.
