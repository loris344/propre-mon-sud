import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import { getServiceHubs } from "@/lib/seo-pages";
import ArticleCTA from "@/components/ArticleCTA";
import { getArticleBySlug, getPublishedSlugs } from "@/lib/articles";
import { SITE_URL, jsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const canonical = `/blog/${article.slug}/`;
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
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

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    image: article.cover || `${SITE_URL}/images/logos/p1.webp`,
    author: { "@type": "Organization", name: "SOS Nettoyage Diogène & Débarras" },
    publisher: {
      "@type": "Organization",
      name: "SOS Nettoyage Diogène & Débarras",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logos/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(blogPostingSchema)}
      />
      <main role="main" className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.cover}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          <article className="max-w-4xl mx-auto prose prose-lg prose-headings:text-foreground prose-a:text-primary">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
            <ArticleCTA />
          </article>
        </div>
      </main>
      <Footer services={getServiceHubs()} />
    </>
  );
}
