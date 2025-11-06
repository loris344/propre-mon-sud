import SEOHead from "../../components/SEOHead";
import { useSEO } from "../../hooks/useSEO";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Shield, CheckCircle, AlertTriangle, Zap } from "lucide-react";
import { ResponsiveImage } from "../../components/ResponsiveImage";

const DesinfectionArticle = () => {
  const navigate = useNavigate();
  const seoConfig = useSEO();

  return (
    <>
      <SEOHead {...seoConfig} />
      <main role="main" className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          
          {/* Navigation */}
          <div className="mb-8">
            <button 
              onClick={() => navigate('/blog')}
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </button>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>5 Janvier 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>6 min de lecture</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Désinfection et assainissement : Protocoles et bonnes pratiques
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              La désinfection est une étape cruciale après un nettoyage d'insalubrité. Découvrez nos protocoles rigoureux et les produits utilisés pour garantir un environnement sain et sécurisé.
            </p>
          </header>

          {/* Statistiques importantes */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">6 étapes</div>
                <div className="text-sm text-muted-foreground">Protocole complet</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">Certifiés</div>
                <div className="text-sm text-muted-foreground">Produits homologués</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 text-center">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">Normes</div>
                <div className="text-sm text-muted-foreground">ISO & OMS</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 text-center">
                <AlertTriangle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">Sécurisé</div>
                <div className="text-sm text-muted-foreground">Environnement sain</div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border/50">
              
              {/* Introduction avec image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1628689814107-61cff402f7cc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Désinfection professionnelle - Protocoles et équipements certifiés"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-muted-foreground text-sm italic">
                  Nos équipes utilisent des équipements professionnels et des produits certifiés pour une désinfection optimale
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Pourquoi la désinfection est cruciale</h2>
              <p className="text-muted-foreground mb-6">
                La désinfection n'est pas un simple nettoyage renforcé. C'est un processus scientifique rigoureux qui élimine <strong>99,9% des agents pathogènes</strong> (virus, bactéries, champignons, parasites). Après une situation d'insalubrité, <strong>plus de 200 types de micro-organismes</strong> peuvent proliférer, créant des risques sanitaires majeurs.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Les études montrent que <strong>70% des infections nosocomiales</strong> et <strong>40% des allergies respiratoires</strong> sont liées à des environnements mal désinfectés. C'est pourquoi notre approche se base sur les <strong>normes hospitalières</strong> et les <strong>protocoles de l'OMS</strong>.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Protocole de désinfection professionnel</h2>
              <p className="text-muted-foreground mb-6">
                Un protocole de désinfection efficace suit généralement ces étapes, basées sur les normes sanitaires en vigueur :
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. Diagnostic microbiologique</h3>
                  <p className="text-muted-foreground">Prélèvements et analyses pour identifier les agents pathogènes présents, leur concentration et leur résistance aux désinfectants.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. Préparation et confinement</h3>
                  <p className="text-muted-foreground">Mise en place de barrières de protection, ventilation contrôlée, équipements de sécurité pour protéger les intervenants et l'environnement.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. Nettoyage pré-désinfection</h3>
                  <p className="text-muted-foreground">Élimination mécanique des souillures, dégraissage, préparation des surfaces pour optimiser l'efficacité de la désinfection.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Désinfection chimique</h3>
                  <p className="text-muted-foreground">Application de désinfectants certifiés selon les temps de contact requis, en respectant les concentrations et les protocoles d'application.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">5. Désinfection complémentaire</h3>
                  <p className="text-muted-foreground">Traitement complémentaire par rayonnement ultraviolet (UV-C) ou vapeur pour éliminer les résistances et assurer une désinfection complète.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">6. Contrôle et validation</h3>
                  <p className="text-muted-foreground">Tests de surface, prélèvements post-intervention, certification de l'assainissement et documentation des résultats.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Produits et technologies utilisés</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">🧪 Gamme de produits certifiés</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Désinfectants hospitaliers</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Hypochlorite de sodium (eau de Javel)</li>
                      <li>• Peroxyde d'hydrogène</li>
                      <li>• Ammoniums quaternaires</li>
                      <li>• Alcools éthyliques</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Équipements professionnels</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Pulvérisateurs haute pression</li>
                      <li>• Nébuliseurs ULV</li>
                      <li>• Lampes UV-C</li>
                      <li>• Détecteurs de contamination</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Certifications et normes</h2>
              <p className="text-muted-foreground mb-6">
                Tous nos produits et protocoles respectent les normes les plus strictes :
              </p>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>• <strong>NF EN 1276</strong> : Efficacité bactéricide</li>
                <li>• <strong>NF EN 1650</strong> : Efficacité fongicide</li>
                <li>• <strong>NF EN 14476</strong> : Efficacité virucide</li>
                <li>• <strong>ISO 9001</strong> : Système de management qualité</li>
                <li>• <strong>ISO 14001</strong> : Management environnemental</li>
                <li>• <strong>OHSAS 18001</strong> : Santé et sécurité au travail</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">Durée d'efficacité et suivi</h2>
              <p className="text-muted-foreground mb-6">
                L'efficacité d'une désinfection dépend de plusieurs facteurs : la qualité des produits utilisés, la méthode d'application, et les conditions environnementales. Voici ce qu'il faut savoir :
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Facteurs d'efficacité</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Qualité des produits</strong> : Utilisation de désinfectants certifiés</li>
                  <li>• <strong>Méthode d'application</strong> : Respect des temps de contact et concentrations</li>
                  <li>• <strong>Conditions environnementales</strong> : Température, humidité, ventilation</li>
                  <li>• <strong>Formation des intervenants</strong> : Compétences et certification</li>
                  <li>• <strong>Contrôles qualité</strong> : Vérifications post-intervention</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Types d'intervention</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">🔬 Types de désinfection</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Désinfection standard</h4>
                    <p className="text-muted-foreground">Protocole de base</p>
                    <p className="text-xs text-muted-foreground">Logements &lt; 50m²</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Désinfection renforcée</h4>
                    <p className="text-muted-foreground">Protocole avancé</p>
                    <p className="text-xs text-muted-foreground">Situations complexes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Désinfection d'urgence</h4>
                    <p className="text-muted-foreground">Intervention rapide</p>
                    <p className="text-xs text-muted-foreground">Disponible 24h/24</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Conseils pratiques</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Points importants</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Vérifiez les certifications des produits utilisés</li>
                  <li>• Assurez-vous que les intervenants sont formés</li>
                  <li>• Demandez un certificat d'assainissement</li>
                  <li>• Prévoyez un suivi post-intervention</li>
                  <li>• Respectez les délais de réoccupation</li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-3">🛡️ Besoin d'une désinfection professionnelle ?</h3>
                <p className="text-muted-foreground mb-4">
                  Si vous devez faire face à une situation nécessitant une désinfection professionnelle, il est important de faire appel à des experts certifiés. SOS Nettoyage Diogène propose des interventions selon les normes les plus strictes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => navigate('/#contact')}
                    className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default DesinfectionArticle;
