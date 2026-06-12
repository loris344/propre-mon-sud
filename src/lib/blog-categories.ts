/**
 * Catégories du blog (plan Bondash) — /blog/<segment>/.
 *
 * Même mécanique d'éclosion que les pages SEO catch-all : une catégorie
 * n'existe en production que si son MDX (content/blog-categories/<segment>.mdx)
 * est rédigé, non-draft, et que sa date publishAt (donnée par le plan) est
 * atteinte. En dev, tout MDX rédigé se prévisualise.
 *
 * Le MDX apporte le contenu rédigé (intro markdown, FAQ) et les overrides de
 * metas ; la structure (URL, canonical, planning, maillage) reste pilotée par
 * seo-pages.json + internal-links.json comme pour le reste du site.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import seoData from "@/data/seo-pages.json";
import { publicationDate } from "@/lib/build-date";

const CONTENT_DIR = path.join(process.cwd(), "content/blog-categories");
const isProd = process.env.NODE_ENV === "production";

interface PlanEntry {
  url: string;
  type: string;
  publishAt: string | null;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  canonical: string;
}

export interface CategoryFaq {
  q: string;
  a: string;
}

export interface BlogCategory {
  segment: string;
  url: string;
  canonical: string;
  publishAt: string | null;
  /** H1 + libellé de fil d'Ariane (override MDX, sinon plan). */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Corps d'introduction rédigé (markdown). */
  intro: string;
  faq: CategoryFaq[];
  draft: boolean;
}

const PLAN: PlanEntry[] = (seoData as { pages: PlanEntry[] }).pages.filter(
  (p) => p.type === "Catégorie blog",
);

function segmentOf(url: string): string {
  return url.replace(/^\/blog\//, "").replace(/\/$/, "");
}

function readCategory(plan: PlanEntry): BlogCategory | null {
  const segment = segmentOf(plan.url);
  const file = path.join(CONTENT_DIR, `${segment}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const faq = Array.isArray(data.faq)
    ? (data.faq as Array<{ q?: string; a?: string }>)
        .filter((f) => f && f.q && f.a)
        .map((f) => ({ q: String(f.q), a: String(f.a) }))
    : [];
  return {
    segment,
    url: plan.url,
    canonical: plan.canonical || plan.url,
    publishAt: plan.publishAt,
    title: data.title ? String(data.title) : plan.h1,
    metaTitle: data.metaTitle ? String(data.metaTitle) : plan.metaTitle,
    metaDescription: data.metaDescription ? String(data.metaDescription) : plan.metaDescription,
    intro: content.trim(),
    faq,
    draft: data.draft === true,
  };
}

function isCategoryPublished(c: BlogCategory): boolean {
  if (c.draft) return false;
  if (!isProd) return true; // dev : prévisualisation de tout ce qui est rédigé
  if (!c.publishAt) return false;
  // publicationDate() (plancher au lancement), cohérent avec les pages SEO et
  // les articles : garantit que le squelette blog est présent dès le 1er build.
  return c.publishAt <= publicationDate();
}

export function getPublishedCategories(): BlogCategory[] {
  return PLAN.map(readCategory).filter(
    (c): c is BlogCategory => c !== null && isCategoryPublished(c),
  );
}

export function getCategoryBySegment(segment: string): BlogCategory | null {
  return getPublishedCategories().find((c) => c.segment === segment) ?? null;
}
