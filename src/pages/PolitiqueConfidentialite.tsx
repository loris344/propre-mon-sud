import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <SEOHead
        title="Politique de Confidentialité | SOS Nettoyage Diogène"
        description="Politique de confidentialité et protection des données personnelles (RGPD) du site SOS Nettoyage Diogène."
        canonical="/politique-confidentialite"
      />
      <main className="min-h-screen pt-24 sm:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Politique de Confidentialité</h1>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <p className="text-sm">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données personnelles est :<br />
                <strong>SOS Nettoyage Diogène</strong><br />
                Email : contact@sosnettoyagediogene.fr<br />
                Téléphone : <a href="tel:+33605310199" className="text-primary hover:underline">06 05 31 01 99</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Données collectées</h2>
              <p>Nous collectons les données suivantes via notre formulaire de contact :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Ville</li>
                <li>Description de la situation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">3. Finalités du traitement</h2>
              <p>Vos données sont collectées pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Répondre à vos demandes de devis</li>
                <li>Vous recontacter concernant nos services</li>
                <li>Améliorer notre service client</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Base légale</h2>
              <p>
                Le traitement de vos données est fondé sur votre consentement (article 6.1.a du RGPD) 
                lorsque vous remplissez notre formulaire de contact, et sur notre intérêt légitime 
                (article 6.1.f) pour améliorer nos services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Durée de conservation</h2>
              <p>
                Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter 
                de votre dernière interaction avec nous, conformément aux recommandations de la CNIL.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">6. Vos droits (RGPD)</h2>
              <p>Conformément au Règlement Général sur la Protection des Données, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
                <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
                <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                <li><strong>Droit de limitation</strong> : restreindre le traitement</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à : <strong>contact@sosnettoyagediogene.fr</strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">7. Cookies</h2>
              <p>
                Ce site utilise Google Tag Manager et Google Analytics pour analyser le trafic. 
                Ces outils peuvent déposer des cookies sur votre navigateur. Vous pouvez les refuser 
                via les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">8. Transfert de données</h2>
              <p>
                Vos données peuvent être transférées vers des services tiers (hébergement, email) 
                situés en dehors de l'Union européenne. Ces transferts sont encadrés par des garanties 
                appropriées (clauses contractuelles types).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">9. Réclamation</h2>
              <p>
                Si vous estimez que le traitement de vos données ne respecte pas la réglementation, 
                vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong> 
                (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;
