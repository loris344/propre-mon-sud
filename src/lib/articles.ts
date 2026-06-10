import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO (YYYY-MM-DD)
  category?: string;
  keywords?: string;
  readTime: string;
  cover?: string;
  draft?: boolean;
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
  return { ...(data as Record<string, unknown>), slug, content, readTime } as Article;
}

/**
 * Tous les articles, triés du plus récent au plus ancien.
 * En production, les brouillons (draft: true) sont exclus — c'est le mécanisme
 * de publication différée. En dev (npm run dev), ils restent visibles pour
 * relecture avant publication.
 */
export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => /\.mdx?$/.test(f));
  let articles = files.map(readArticleFile);
  if (isProd) articles = articles.filter((a) => !a.draft);
  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | null {
  return getAllArticles().find((a) => a.slug === slug) ?? null;
}

export function getPublishedSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}
