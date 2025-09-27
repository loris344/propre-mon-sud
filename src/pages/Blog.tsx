import SEOHead from "../components/SEOHead";
import { useSEO } from "../hooks/useSEO";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { subscribeToNewsletter } from "../lib/newsletterService";
import { toast } from "sonner";

const Blog = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  
  const seoConfig = useSEO({
    title: "Blog - SOS Nettoyage Diogène | Conseils et Actualités",
    description: "Découvrez nos conseils d'experts pour le nettoyage, le débarras et la désinfection. Actualités et guides pratiques par SOS Nettoyage Diogène.",
    keywords: "blog nettoyage, conseils débarras, syndrome diogène, désinfection, actualités nettoyage",
    canonical: "/blog"
  });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Veuillez saisir votre adresse email");
      return;
    }

    setIsSubscribing(true);
    
    try {
      const success = await subscribeToNewsletter(email.trim());
      
      if (success) {
        toast.success("Inscription réussie ! Vous recevrez nos actualités par email.");
        setEmail("");
      } else {
        toast.error("Erreur lors de l'inscription. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur newsletter:", error);
      toast.error("Erreur lors de l'inscription. Veuillez réessayer.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <>
      <SEOHead {...seoConfig} />
      <main role="main" className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog & Conseils
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos conseils d'experts, actualités et guides pratiques pour le nettoyage, le débarras et la désinfection.
            </p>
          </section>

          {/* Blog Content */}
          <section className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
              
              {/* Article 1 */}
              <article className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Santé mentale</span>
                    <span className="text-sm text-muted-foreground">15 Janvier 2022</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    Syndrome de Diogène : Comment identifier et gérer cette situation
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Découvrez les 8 signes d'alerte du syndrome de Diogène, les statistiques en France et les étapes pour accompagner une personne concernée avec bienveillance.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>📖 5 min de lecture</span>
                    <span>👥 60+ ans à risque</span>
                  </div>
                  <button 
                    onClick={() => navigate('/blog/syndrome-diogene-identifier-gerer')}
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                  >
                    Lire l'article <span>→</span>
                  </button>
                </div>
              </article>

              {/* Article 2 */}
              <article className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Accompagnement</span>
                    <span className="text-sm text-muted-foreground">10 Janvier 2023</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    Débarras après décès : Un accompagnement respectueux et professionnel
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Guide complet sur le débarras après décès : délais légaux, protocole en 5 étapes, coûts et ressources d'accompagnement psychologique.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>📖 4 min de lecture</span>
                    <span>⏰ 3 mois délai légal</span>
                  </div>
                  <button 
                    onClick={() => navigate('/blog/debarras-apres-deces-accompagnement')}
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                  >
                    Lire l'article <span>→</span>
                  </button>
                </div>
              </article>

              {/* Article 3 */}
              <article className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Technique</span>
                    <span className="text-sm text-muted-foreground">5 Janvier 2025</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    Désinfection et assainissement : Protocoles et bonnes pratiques
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Protocole de désinfection en 6 étapes, produits certifiés, normes ISO et conseils pratiques pour garantir un environnement sain.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>📖 6 min de lecture</span>
                    <span>🛡️ Protocoles certifiés</span>
                  </div>
                  <button 
                    onClick={() => navigate('/blog/desinfection-assainissement-protocoles')}
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                  >
                    Lire l'article <span>→</span>
                  </button>
                </div>
              </article>

              {/* Article 4 */}
              <article className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Prévention</span>
                    <span className="text-sm text-muted-foreground">1 Janvier 2025</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    Prévention de l'insalubrité : Conseils pour maintenir un logement sain
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  15 conseils essentiels organisés en 4 catégories, checklist mensuelle et comparaison des coûts prévention vs réparation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>📖 7 min de lecture</span>
                    <span>🛡️ 15 conseils pratiques</span>
                  </div>
                  <button 
                    onClick={() => navigate('/blog/prevention-insalubrite-conseils')}
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                  >
                    Lire l'article <span>→</span>
                  </button>
                </div>
              </article>

            </div>

            {/* Newsletter Section */}
            <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Restez informé
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Recevez nos derniers conseils et actualités directement dans votre boîte mail.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  disabled={isSubscribing}
                  className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  required
                />
                <button 
                  type="submit"
                  disabled={isSubscribing}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribing ? "Inscription..." : "S'abonner"}
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Blog;
