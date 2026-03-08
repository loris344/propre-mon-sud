import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <>
      <SEOHead
        title="Mentions Légales | SOS Nettoyage Diogène"
        description="Mentions légales du site SOS Nettoyage Diogène. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation."
        canonical="/mentions-legales"
      />
      <main className="min-h-screen pt-24 sm:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Mentions Légales</h1>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Éditeur du site</h2>
              <p>
                Le site <strong>sosnettoyagediogene.fr</strong> est édité par :<br />
                <strong>SOS Nettoyage Diogène</strong><br />
                Société spécialisée dans le nettoyage et débarras professionnel<br />
                Siège social : Sud de la France<br />
                Téléphone : <a href="tel:+33605310199" className="text-primary hover:underline">06 05 31 01 99</a><br />
                Email : contact@sosnettoyagediogene.fr
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Directeur de la publication</h2>
              <p>Le directeur de la publication est le représentant légal de SOS Nettoyage Diogène.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">3. Hébergement</h2>
              <p>
                Ce site est hébergé par :<br />
                Lovable / Netlify<br />
                Adresse : San Francisco, CA, États-Unis
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, vidéos) est protégé par le droit d'auteur.
                Toute reproduction, même partielle, est interdite sans autorisation préalable de SOS Nettoyage Diogène.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Responsabilité</h2>
              <p>
                SOS Nettoyage Diogène s'efforce de fournir des informations exactes et à jour. 
                Toutefois, la société ne saurait être tenue responsable des erreurs, omissions ou résultats 
                obtenus suite à l'utilisation des informations du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">6. Liens hypertextes</h2>
              <p>
                Ce site peut contenir des liens vers des sites tiers. SOS Nettoyage Diogène n'exerce aucun 
                contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MentionsLegales;
