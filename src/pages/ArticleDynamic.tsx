import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import type { Article } from "@/lib/cms-types";
import SEOHead from "@/components/SEOHead";
import { Loader2 } from "lucide-react";

export default function ArticleDynamic() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      setLoading(true);
      const { data } = await supabase.from("articles").select("*").eq("slug", slug).eq("published", true).maybeSingle();
      if (!data) { navigate("/404", { replace: true }); return; }
      setArticle(data as Article);
      setLoading(false);
    })();
  }, [slug, navigate]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>;
  if (!article) return null;

  return (
    <>
      <SEOHead
        title={`${article.title} | Blog`}
        description={article.excerpt ?? article.title}
        canonical={`/blog/${article.slug}`}
      />
      <main role="main" className="pt-24 pb-16 min-h-screen">
        <article className="container mx-auto px-4 max-w-3xl">
          {article.category && <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{article.category}</span>}
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">{article.title}</h1>
          {article.published_at && (
            <p className="text-sm text-muted-foreground mb-6">
              {new Date(article.published_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
              {article.read_time && ` · ${article.read_time}`}
            </p>
          )}
          {article.cover_image && (
            <img src={article.cover_image} alt={article.title} className="w-full h-auto rounded-lg mb-8" />
          )}
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content_html }} />
        </article>
      </main>
    </>
  );
}