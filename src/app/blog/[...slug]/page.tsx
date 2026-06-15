import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";
import MarkdownLink from "@/components/MarkdownLink";
import RetryImage from "@/components/RetryImage";
import { getServiceHubs, getSecondaryHubs, getMaillageForUrl } from "@/lib/seo-pages";
import {
  getAllArticles,
  getArticlesByCategory,
  articleUrl,
  type Article,
} from "@/lib/articles";
import {
  getPublishedCategories,
  getCategoryBySegment,
  type BlogCategory,
} from "@/lib/blog-categories";
import { SITE_URL, jsonLd } from "@/lib/structured-data";

/**
 * Route unique du blog :
 *   - /blog/<slug>/                 → article historique (sans catégorie de plan)
 *   - /blog/<categorie>/            → page catégorie (plan Bondash)
 *   - /blog/<categorie>/<article>/  → article rattaché à sa catégorie
 *
 * Catch-all plutôt que segments dynamiques imbriqués : la route a TOUJOURS au
 * moins les articles historiques à générer, ce qui reste compatible avec
 * `output: export` même tant qu'aucune catégorie n'est encore publiée.
 */
export const dynamicParams = false;

/**
 * INVARIANT CRITIQUE (output: export) : cette route doit TOUJOURS produire au
 * moins un paramètre. Avec `output: export` + `dynamicParams = false`, un
 * `generateStaticParams()` qui renvoie [] fait ÉCHOUER `next build` en entier
 * (« Page is missing generateStaticParams() »), donc le déploiement quotidien
 * du jour ne part pas — aucune page, même les pages SEO dues, ne sort.
 * Garantie : les 8 catégories du plan publient dès la date de lancement
 * (publishAt = startDate) et ne sont jamais dépubliées → la route a au moins 8
 * params en permanence, même quand aucun article n'est encore éclos.
 * NE JAMAIS reculer la date de publication des catégories après le lancement.
 */
export function generateStaticParams() {
  const params: { slug: string[] }[] = [];
  for (const a of getAllArticles())
    params.push({ slug: a.categorySlug ? [a.categorySlug, a.slug] : [a.slug] });
  for (const c of getPublishedCategories()) params.push({ slug: [c.segment] });
  return params;
}

type Resolved =
  | { kind: "article"; article: Article }
  | { kind: "category"; category: BlogCategory }
  | null;

function resolve(segments: string[]): Resolved {
  if (segments.length === 1) {
    const category = getCategoryBySegment(segments[0]);
    if (category) return { kind: "category", category };
    const article = getAllArticles().find((a) => !a.categorySlug && a.slug === segments[0]);
    if (article) return { kind: "article", article };
  }
  if (segments.length === 2) {
    const article = getAllArticles().find(
      (a) => a.categorySlug === segments[0] && a.slug === segments[1],
    );
    if (article) return { kind: "article", article };
  }
  return null;
}

/** Dates affichées en jj/mm/aaaa (barème client) ; les données restent en ISO. */
function formatDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  return m ? `${m[3]}/${m[2]}/${m[1]}` : iso;
}

interface Crumb {
  name: string;
  url: string;
}

function articleCrumbs(article: Article): Crumb[] {
  const crumbs: Crumb[] = [
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog/" },
  ];
  if (article.categorySlug) {
    const cat = getCategoryBySegment(article.categorySlug);
    if (cat) crumbs.push({ name: cat.title, url: cat.url });
  }
  crumbs.push({ name: article.title, url: articleUrl(article) });
  return crumbs;
}

function categoryCrumbs(category: BlogCategory): Crumb[] {
  return [
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog/" },
    { name: category.title, url: category.url },
  ];
}

function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.url}`,
    })),
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolve(slug);
  if (!resolved) return {};

  if (resolved.kind === "category") {
    const c = resolved.category;
    const canonical = c.url;
    return {
      title: c.metaTitle,
      description: c.metaDescription,
      alternates: { canonical },
      openGraph: {
        title: c.metaTitle,
        description: c.metaDescription,
        url: canonical,
        type: "website",
        siteName: "SOS Nettoyage Diogène & Débarras",
        locale: "fr_FR",
      },
    };
  }

  const article = resolved.article;
  const canonical = articleUrl(article);
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical },
    openGraph: {
      title: article.title,
      description: article.description,
      url: canonical,
      type: "article",
      siteName: "SOS Nettoyage Diogène & Débarras",
      locale: "fr_FR",
      images: [{ url: article.cover || `${SITE_URL}/images/logos/p1.webp` }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function BlogCatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const resolved = resolve(slug);
  if (!resolved) notFound();

  return resolved.kind === "category" ? (
    <CategoryPage category={resolved.category} />
  ) : (
    <ArticlePage article={resolved.article} />
  );
}

/* ------------------------------------------------------------- Catégorie --- */
function CategoryPage({ category }: { category: BlogCategory }) {
  const articles = getArticlesByCategory(category.segment);
  const crumbs = categoryCrumbs(category);
  const maillage = getMaillageForUrl(category.url);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.title,
    description: category.metaDescription,
    url: `${SITE_URL}${category.url}`,
    isPartOf: { "@type": "Blog", name: "Blog SOS Nettoyage Diogène & Débarras", url: `${SITE_URL}/blog/` },
    hasPart: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${SITE_URL}${articleUrl(a)}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(collectionSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))} />

      <main role="main" className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb crumbs={crumbs} />

          <header className="max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {category.title}
            </h1>
            {category.metaDescription && (
              <p className="text-xl text-muted-foreground leading-relaxed">
                {category.metaDescription}
              </p>
            )}
          </header>

          <article className="max-w-4xl mx-auto prose prose-lg prose-headings:text-foreground prose-a:text-primary">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
              {category.intro}
            </ReactMarkdown>

            <section className="not-prose mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Nos articles</h2>
              {articles.length === 0 ? (
                <p className="text-muted-foreground">
                  Les premiers guides de cette rubrique arrivent bientôt.
                </p>
              ) : (
                <div className="grid gap-6">
                  {articles.map((a) => (
                    <div
                      key={a.slug}
                      className="bg-card rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span>{formatDate(a.date)}</span>
                        <span>{a.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        <Link href={articleUrl(a)} className="hover:text-primary transition-colors">
                          {a.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground">{a.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* FAQ visible (HTML uniquement : les rich results FAQ n'existent plus) */}
            {category.faq.length > 0 && (
              <section className="not-prose mt-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Questions fréquentes</h2>
                <div className="space-y-4">
                  {category.faq.map((f, i) => (
                    <details key={i} className="rounded-lg border border-border p-4">
                      <summary className="font-semibold cursor-pointer text-foreground">{f.q}</summary>
                      <p className="mt-2 text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <ArticleCTA />

            <Maillage url={category.url} maillage={maillage} skipChildren />
          </article>
        </div>
      </main>
      <Footer services={getServiceHubs()} secondary={getSecondaryHubs()} />
    </>
  );
}

/* ---------------------------------------------------------------- Article --- */
function ArticlePage({ article }: { article: Article }) {
  const crumbs = articleCrumbs(article);
  const url = articleUrl(article);
  const maillage = getMaillageForUrl(url);
  const backCrumb = crumbs[crumbs.length - 2];

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishAt || article.date,
    image: article.cover || `${SITE_URL}/images/logos/p1.webp`,
    author: { "@type": "Organization", name: "SOS Nettoyage Diogène & Débarras" },
    publisher: {
      "@type": "Organization",
      name: "SOS Nettoyage Diogène & Débarras",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logos/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}${url}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(blogPostingSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(crumbs))} />

      <main role="main" className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb crumbs={crumbs} />

          <div className="max-w-4xl mx-auto mb-8">
            <Link
              href={backCrumb.url}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {backCrumb.url === "/blog/" ? "Retour au blog" : `Retour : ${backCrumb.name}`}
            </Link>
          </div>

          <header className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.description}
            </p>
          </header>

          {article.cover && (
            <div className="max-w-4xl mx-auto mb-8">
              <RetryImage
                key={article.cover}
                src={article.cover}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          <article className="max-w-4xl mx-auto prose prose-lg prose-headings:text-foreground prose-a:text-primary">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
              {article.content}
            </ReactMarkdown>

            {/* FAQ visible (HTML uniquement : les rich results FAQ n'existent plus) */}
            {article.faq.length > 0 && (
              <section className="not-prose mt-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Questions fréquentes</h2>
                <div className="space-y-4">
                  {article.faq.map((f, i) => (
                    <details key={i} className="rounded-lg border border-border p-4">
                      <summary className="font-semibold cursor-pointer text-foreground">{f.q}</summary>
                      <p className="mt-2 text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <ArticleCTA />

            <Maillage url={url} maillage={maillage} />
          </article>
        </div>
      </main>
      <Footer services={getServiceHubs()} secondary={getSecondaryHubs()} />
    </>
  );
}

/* ---------------------------------------------------------------- Communs --- */
function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="max-w-4xl mx-auto mb-6 text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1">
        {crumbs.map((c, i) => (
          <li key={c.url} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden>›</span>}
            {i < crumbs.length - 1 ? (
              <Link href={c.url} className="hover:text-primary transition-colors">
                {c.name}
              </Link>
            ) : (
              <span className="text-foreground" aria-current="page">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Maillage du plan (cibles publiées uniquement). skipChildren : les articles
 *  enfants d'une catégorie sont déjà listés en cartes dans la page. */
function Maillage({
  maillage,
  skipChildren = false,
}: {
  url: string;
  maillage: ReturnType<typeof getMaillageForUrl>;
  skipChildren?: boolean;
}) {
  const sections: { title: string; links: { target: string; anchor: string }[] }[] = [];
  if (!skipChildren && maillage.children.length > 0)
    sections.push({ title: "Dans la même rubrique", links: maillage.children });
  if (maillage.related.length > 0)
    sections.push({ title: "Pages liées", links: maillage.related });
  if (maillage.suggested.length > 0)
    sections.push({ title: "Nos services associés", links: maillage.suggested });
  if (sections.length === 0) return null;

  return (
    <div className="not-prose mt-12 space-y-8 border-t border-border pt-6">
      {sections.map((s) => (
        <nav key={s.title} aria-label={s.title}>
          <h2 className="text-xl font-bold text-foreground mb-4">{s.title}</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {s.links.map((l) => (
              <li key={l.target}>
                <Link href={l.target} className="text-primary hover:underline">{l.anchor}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}
