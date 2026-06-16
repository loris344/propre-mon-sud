import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";
import MarkdownLink from "@/components/MarkdownLink";
import { jsonLd } from "@/lib/structured-data";
import { withTrailingSlash } from "@/lib/metadata";
import { resolveSeoImage } from "@/lib/seo-images";
import {
  getPublishedPages,
  getPageByUrl,
  urlFromSlugSegments,
  readMdx,
  effectiveMeta,
  getMaillage,
  buildBreadcrumb,
  buildJsonLd,
  getServiceHubs,
  getSecondaryHubs,
} from "@/lib/seo-pages";

export const dynamicParams = false;

/** Ne génère QUE les pages publiées (publishAt <= build). Les pages futures
 *  n'existent donc pas dans l'export statique : ni accessibles, ni dans le sitemap. */
export function generateStaticParams() {
  return getPublishedPages().map((p) => ({
    slug: p.url.replace(/^\/|\/$/g, "").split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageByUrl(urlFromSlugSegments(slug));
  if (!page) return {};
  const mdx = readMdx(page.slug);
  const meta = effectiveMeta(page, mdx);
  const canonical = withTrailingSlash(page.canonical || page.url);
  const img = mdx?.noImage ? null : resolveSeoImage(page);
  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      url: canonical,
      siteName: "SOS Nettoyage Diogène & Débarras",
      locale: "fr_FR",
      type: "website",
      images: img ? [{ url: img.src, alt: img.alt }] : undefined,
    },
  };
}

export default async function SeoPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const url = urlFromSlugSegments(slug);
  const page = getPageByUrl(url);
  const mdx = page ? readMdx(page.slug) : null;
  if (!page || !mdx) notFound();

  const meta = effectiveMeta(page, mdx);
  const crumbs = buildBreadcrumb(page);
  const maillage = getMaillage(page);
  const schemas = buildJsonLd(page, crumbs, meta);
  const img = mdx.noImage ? null : resolveSeoImage(page);
  const childrenLabel = page.type.includes("hub") || page.type.includes("mère")
    ? "Nos services spécialisés"
    : "Pages associées";

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={jsonLd(s)} />
      ))}

      <main role="main" className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Fil d'Ariane */}
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

          <header className="max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{meta.h1}</h1>
            {meta.metaDescription && (
              <p className="text-xl text-muted-foreground leading-relaxed">{meta.metaDescription}</p>
            )}
          </header>

          {img && (
            <figure className="max-w-4xl mx-auto mb-8">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} width={1600} height={900}
                     className="absolute inset-0 w-full h-full object-cover"
                     loading="eager" fetchPriority="high" decoding="async" />
              </div>
            </figure>
          )}

          <article className="max-w-4xl mx-auto prose prose-lg prose-headings:text-foreground prose-a:text-primary">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
              {mdx.body}
            </ReactMarkdown>

            {/* FAQ visible (alimente le schema FAQPage) */}
            {mdx.faq.length > 0 && (
              <section className="not-prose mt-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Questions fréquentes</h2>
                <div className="space-y-4">
                  {mdx.faq.map((f, i) => (
                    <details key={i} className="rounded-lg border border-border p-4">
                      <summary className="font-semibold cursor-pointer text-foreground">{f.q}</summary>
                      <p className="mt-2 text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <ArticleCTA />

            {/* Maillage interne STRUCTURÉ (types + ancres du plan, cibles publiées). */}
            <div className="not-prose mt-12 space-y-8 border-t border-border pt-6">
              {page.ville && maillage.sameCity.length > 0 && (
                <MeshSection title={`À ${page.ville}, voir aussi`} links={maillage.sameCity} />
              )}
              {maillage.children.length > 0 && (
                <MeshSection title={childrenLabel} links={maillage.children} />
              )}
              {maillage.related.length > 0 && (
                <MeshSection title="Prestations et zones liées" links={maillage.related} />
              )}
              {maillage.suggested.length > 0 && (
                <MeshSection title="À consulter aussi" links={maillage.suggested} />
              )}
            </div>
          </article>
        </div>
      </main>
      <Footer services={getServiceHubs()} secondary={getSecondaryHubs()} />
    </>
  );
}

/** Bloc de maillage interne (une catégorie : même ville, sous-pages, etc.). */
function MeshSection({ title, links }: { title: string; links: { target: string; anchor: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-xl font-bold text-foreground mb-4">{title}</h2>
      <ul className="grid sm:grid-cols-2 gap-2">
        {links.map((l) => (
          <li key={l.target}>
            <Link href={l.target} className="text-primary hover:underline">{l.anchor}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
