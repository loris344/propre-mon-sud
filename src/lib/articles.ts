import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { buildDate } from "@/lib/build-date";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export interface ArticleFaq {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO (YYYY-MM-DD) — date affichée
  /** Date d'éclosion (goutte-à-goutte, comme les pages SEO). Absente = publiable dès que draft: false. */
  publishAt?: string;
  /** Libellé de catégorie affiché (ex. « Santé mentale »). */
  category?: string;
  /** Segment de la catégorie blog du plan (ex. « diogene ») → URL /blog/<categorySlug>/<slug>/. */
  categorySlug?: string;
  keywords?: string;
  readTime: string;
  cover?: string;
  draft?: boolean;
  faq: ArticleFaq[];
  sources: string[];
  content: string;
}

const isProd = process.env.NODE_ENV === "production";

function readArticleFile(filename: string): Article {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const readTime =
    (data.readTime as string) ||
    `${Math.max(1, Math.round(readingTime(content).minutes))} min de lecture`;
  const faq = Array.isArray(data.faq)
    ? (data.faq as Array<{ q?: string; a?: string }>)
        .filter((f) => f && f.q && f.a)
        .map((f) => ({ q: String(f.q), a: String(f.a) }))
    : [];
  const sources = Array.isArray(data.sources) ? data.sources.map(String) : [];
  return {
    ...(data as Record<string, unknown>),
    slug,
    content,
    readTime,
    faq,
    sources,
  } as Article;
}

/**
 * Tous les articles, triés du plus récent au plus ancien.
 * En production sont exclus les brouillons (draft: true) ET les articles dont
 * la date d'éclosion n'est pas atteinte (publishAt > date du build) — même
 * goutte-à-goutte que les pages SEO, déclenché par le rebuild quotidien.
 * En dev (npm run dev), tout reste visible pour relecture avant publication.
 */
export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => /\.mdx?$/.test(f));
  let articles = files.map(readArticleFile);
  if (isProd) {
    const today = buildDate();
    articles = articles.filter((a) => !a.draft && (!a.publishAt || a.publishAt <= today));
  }
  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** URL publique d'un article : imbriquée sous sa catégorie de plan si elle existe. */
export function articleUrl(article: Article): string {
  return article.categorySlug
    ? `/blog/${article.categorySlug}/${article.slug}/`
    : `/blog/${article.slug}/`;
}

export function getArticleBySlug(slug: string): Article | null {
  return getAllArticles().find((a) => a.slug === slug) ?? null;
}

/** Articles publiés d'une catégorie du plan (segment d'URL, ex. « diogene »). */
export function getArticlesByCategory(categorySlug: string): Article[] {
  return getAllArticles().filter((a) => a.categorySlug === categorySlug);
}
