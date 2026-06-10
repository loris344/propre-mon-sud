import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { getServiceHubs } from "@/lib/seo-pages";
import NewsletterForm from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/metadata";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = buildMetadata("/blog");

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

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      <main role="main" className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog &amp; Conseils
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos conseils d&apos;experts, actualités et guides pratiques
              pour le nettoyage, le débarras et la désinfection.
            </p>
          </section>

          <section className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      {article.category && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {article.category}
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground">
                        {formatDate(article.date)}
                      </span>
                      {article.draft && (
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                          Brouillon
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {article.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>📖 {article.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                    >
                      Lire l&apos;article <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {articles.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                Aucun article publié pour le moment. Revenez bientôt !
              </p>
            )}

            {/* Newsletter */}
            <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Restez informé</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Recevez nos derniers conseils et actualités directement dans votre
                boîte mail.
              </p>
              <NewsletterForm />
            </div>
          </section>
        </div>
      </main>
      <Footer services={getServiceHubs()} />
    </>
  );
}
