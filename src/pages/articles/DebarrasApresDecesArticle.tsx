import SEOHead from "../../components/SEOHead";
import { useSEO } from "../../hooks/useSEO";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Heart, Shield, Clock3, Users } from "lucide-react";
import { ResponsiveImage } from "../../components/ResponsiveImage";

const DebarrasApresDecesArticle = () => {
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
                <span>10 Janvier 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>4 min de lecture</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Débarras après décès : Un accompagnement respectueux
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une étape douloureuse mais nécessaire qui demande sensibilité, organisation et respect des volontés du défunt.
            </p>
          </header>

          {/* Statistiques importantes */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">3 mois</div>
                <div className="text-sm text-muted-foreground">Délai légal maximum</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 text-center">
                <Clock3 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">5 jours</div>
                <div className="text-sm text-muted-foreground">Déclaration assurance</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 text-center">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">Respectueux</div>
                <div className="text-sm text-muted-foreground">Approche délicate</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 text-center">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">5 étapes</div>
                <div className="text-sm text-muted-foreground">Protocole complet</div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border/50">
              
              {/* Introduction avec image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1623503664086-475867ec20b3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Débarras après décès - Intervention respectueuse et professionnelle"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-muted-foreground text-sm italic">
                  Notre équipe intervient avec respect et discrétion dans ces moments difficiles
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Une réalité douloureuse mais nécessaire</h2>
              <p className="text-muted-foreground mb-6">
                Le décès d'un proche marque le début d'une période de deuil complexe, où les démarches administratives et pratiques s'entremêlent avec la douleur de la perte. Le débarras du logement du défunt représente souvent l'une des étapes les plus difficiles à surmonter, car elle implique de toucher aux objets qui constituaient son quotidien, ses souvenirs, son intimité.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Cette tâche, qui peut sembler insurmontable dans les premiers jours, nécessite une approche méthodique et respectueuse. Chaque objet raconte une histoire, chaque pièce porte la trace de la vie qui s'y est déroulée. Le processus de débarras doit donc être mené avec une sensibilité particulière, en respectant le rythme émotionnel des proches et en préservant la mémoire du défunt.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Conseils pratiques pour les proches</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Prenez votre temps</strong> : Ne vous précipitez pas, respectez votre rythme de deuil</li>
                  <li>• <strong>Entourez-vous</strong> : Faites appel à des amis ou des professionnels</li>
                  <li>• <strong>Documentez</strong> : Prenez des photos des objets importants avant de les trier</li>
                  <li>• <strong>Préservez les souvenirs</strong> : Gardez les objets qui ont une valeur sentimentale</li>
                  <li>• <strong>Respectez les volontés</strong> : Consultez le testament ou les dernières volontés</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Délais légaux et obligations</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-amber-800 mb-4">📋 Cadre légal</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Délai de libération</strong> : 3 mois maximum après le décès (sauf cas particuliers)</li>
                  <li>• <strong>Inventaire obligatoire</strong> : Réalisé par un notaire ou un huissier</li>
                  <li>• <strong>Protection des biens</strong> : Sécurisation des objets de valeur</li>
                  <li>• <strong>Respect de la succession</strong> : Tri selon les volontés du défunt</li>
                  <li>• <strong>Déclaration aux assurances</strong> : Obligatoire dans les 5 jours</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Étapes du débarras après décès</h2>
              <p className="text-muted-foreground mb-6">
                Le débarras après décès suit généralement un processus en plusieurs étapes, chacune nécessitant une approche respectueuse et méthodique :
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. Évaluation et planification</h3>
                  <p className="text-muted-foreground">Visite discrète du logement, évaluation des volumes à évacuer, planification de l'intervention en coordination avec les services funéraires et les héritiers.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. Tri et inventaire</h3>
                  <p className="text-muted-foreground">Tri respectueux des objets personnels, identification des biens de valeur, séparation des objets à conserver, donner ou jeter. Documentation de l'inventaire.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. Débarras et nettoyage</h3>
                  <p className="text-muted-foreground">Évacuation des objets selon les décisions prises, nettoyage en profondeur du logement, désinfection complète des lieux pour garantir un environnement sain.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Restauration</h3>
                  <p className="text-muted-foreground">Remise en état du logement, réparations mineures si nécessaire, préparation pour la remise des clés au propriétaire ou à l'agence immobilière.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">5. Documentation et suivi</h3>
                  <p className="text-muted-foreground">Remise des documents officiels, certificat de débarras, suivi post-intervention si nécessaire, accompagnement dans les démarches administratives.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Aspects pratiques et aides disponibles</h2>
              <p className="text-muted-foreground mb-6">
                Un débarras après décès nécessite une approche professionnelle qui varie selon plusieurs facteurs : la taille du logement, la quantité d'objets à évacuer, la complexité du tri, et les services supplémentaires requis. Les familles peuvent se sentir dépassées par ces aspects pratiques, d'autant plus que cette tâche s'ajoute aux obligations liées au décès.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Il existe plusieurs sources d'aide. Les assurances habitation peuvent couvrir une partie des frais, notamment en cas de situation d'urgence ou de risque sanitaire. Les services sociaux peuvent également apporter un soutien, particulièrement pour les familles en difficulté. Certaines associations d'aide aux familles en deuil proposent également des services d'accompagnement et parfois des aides.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Accompagnement psychologique et soutien</h2>
              <p className="text-muted-foreground mb-6">
                Cette période est particulièrement difficile pour les proches. Il est important de ne pas rester seul face à cette épreuve. Plusieurs ressources peuvent vous accompagner :
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">🤝 Ressources d'accompagnement</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Psychologue</strong> : Pour un soutien psychologique personnalisé</li>
                  <li>• <strong>Associations d'aide</strong> : France Alzheimer, associations de deuil</li>
                  <li>• <strong>Groupes de parole</strong> : Échanges avec d'autres personnes dans la même situation</li>
                  <li>• <strong>Services sociaux</strong> : Accompagnement administratif et psychologique</li>
                  <li>• <strong>Famille et amis</strong> : Entourage proche pour le soutien émotionnel</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Questions fréquentes</h2>
              <div className="space-y-4 mb-8">
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Combien de temps prend une intervention ?</h3>
                  <p className="text-muted-foreground">En moyenne 3 à 5 jours selon la taille du logement et la complexité de la situation.</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Que deviennent les objets de valeur ?</h3>
                  <p className="text-muted-foreground">Ils sont inventoriés et remis aux héritiers ou au notaire selon les instructions.</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Intervenez-vous en urgence ?</h3>
                  <p className="text-muted-foreground">Oui, nous proposons un service d'urgence 24h/24 pour les situations critiques.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Conseils pratiques</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">💡 À retenir</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Prenez le temps nécessaire, ne vous précipitez pas</li>
                  <li>• Entourez-vous de personnes de confiance</li>
                  <li>• Documentez les objets de valeur pour la succession</li>
                  <li>• Respectez les volontés du défunt</li>
                  <li>• N'hésitez pas à demander de l'aide professionnelle</li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-3">💙 Besoin d'aide professionnelle ?</h3>
                <p className="text-muted-foreground mb-4">
                  Si vous devez faire face à cette situation difficile, des professionnels spécialisés peuvent vous accompagner avec respect et discrétion. SOS Nettoyage Diogène propose des interventions bienveillantes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => navigate('/#contact')}
                    className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    Demander un devis
                  </button>
                  <a 
                    href="tel:0767135458"
                    onClick={() => gtag_report_conversion()}
                    className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-medium text-center"
                  >
                    📞 07 67 13 54 58
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default DebarrasApresDecesArticle;
