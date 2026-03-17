import SEOHead from "../../components/SEOHead";
import { useSEO } from "../../hooks/useSEO";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Shield, CheckCircle, AlertTriangle, Home, Users } from "lucide-react";
import { ResponsiveImage } from "../../components/ResponsiveImage";

const PreventionInsalubriteArticle = () => {
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
                <span>1 Janvier 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>7 min de lecture</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Prévention de l'insalubrité : Conseils pour maintenir un logement sain
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              La prévention est la meilleure approche pour éviter les situations d'insalubrité. Nos experts partagent leurs conseils pour maintenir un environnement de vie sain et sécurisé.
            </p>
          </header>

          {/* Statistiques importantes */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">15</div>
                <div className="text-sm text-muted-foreground">Conseils essentiels</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">4 catégories</div>
                <div className="text-sm text-muted-foreground">Organisation claire</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 text-center">
                <Home className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">Checklist</div>
                <div className="text-sm text-muted-foreground">Mensuelle</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 text-center">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">Préventif</div>
                <div className="text-sm text-muted-foreground">Approche proactive</div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border/50">
              
              {/* Introduction avec image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1586992953119-9d5d3ebf1da0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Prévention de l'insalubrité - Logement sain et bien entretenu"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-muted-foreground text-sm italic">
                  Un logement bien entretenu et organisé est la meilleure prévention contre l'insalubrité
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Pourquoi la prévention est cruciale</h2>
              <p className="text-muted-foreground mb-6">
                La prévention de l'insalubrité est <strong>plus efficace</strong> qu'une intervention curative. En France, <strong>plus de 2 millions de logements</strong> présentent des risques d'insalubrité, et <strong>la plupart de ces situations</strong> auraient pu être évitées avec un entretien préventif approprié.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Un logement insalubre nécessite une <strong>remise en état complète</strong>, sans compter les risques sanitaires et les conséquences sur la santé des occupants. La prévention permet d'éviter ces situations complexes.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Les 15 conseils essentiels de prévention</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">🧹 Entretien régulier (5 conseils)</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• <strong>Nettoyage hebdomadaire</strong> : Toutes les surfaces, sols et sanitaires</li>
                    <li>• <strong>Aération quotidienne</strong> : 15 minutes matin et soir, même en hiver</li>
                    <li>• <strong>Dépoussiérage</strong> : Éviter l'accumulation de poussière et d'allergènes</li>
                    <li>• <strong>Nettoyage des filtres</strong> : VMC, climatisation, aspirateur</li>
                    <li>• <strong>Entretien des équipements</strong> : Chaudière, chauffe-eau, électroménager</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">🗑️ Gestion des déchets (3 conseils)</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• <strong>Tri sélectif</strong> : Respecter les consignes de tri de votre commune</li>
                    <li>• <strong>Évacuation régulière</strong> : Ne pas laisser s'accumuler les déchets</li>
                    <li>• <strong>Stockage approprié</strong> : Poubelles fermées, local aéré</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-800 mb-4">🏠 Organisation et rangement (4 conseils)</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• <strong>Rangement logique</strong> : Chaque objet à sa place</li>
                    <li>• <strong>Désencombrement</strong> : Se débarrasser régulièrement des objets inutiles</li>
                    <li>• <strong>Espace de circulation</strong> : Maintenir des passages dégagés</li>
                    <li>• <strong>Stockage vertical</strong> : Utiliser les murs et les hauteurs</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-4">🔍 Surveillance et maintenance (3 conseils)</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• <strong>Inspection mensuelle</strong> : Vérifier l'état général du logement</li>
                    <li>• <strong>Maintenance préventive</strong> : Réparer les petits problèmes avant qu'ils s'aggravent</li>
                    <li>• <strong>Documentation</strong> : Tenir un carnet d'entretien</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Signes d'alerte à surveiller</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-amber-800 mb-4">⚠️ Alertes précoces</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Signes visuels</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Taches d'humidité sur les murs</li>
                      <li>• Moisissures dans les coins</li>
                      <li>• Accumulation de poussière</li>
                      <li>• Objets qui s'empilent</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Signes olfactifs</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Odeurs de moisi</li>
                      <li>• Odeurs de renfermé</li>
                      <li>• Odeurs de déchets</li>
                      <li>• Odeurs chimiques</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Checklist de prévention mensuelle</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">📋 À vérifier chaque mois</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Intérieur</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>☐ Nettoyage des surfaces</li>
                      <li>☐ Aération des pièces</li>
                      <li>☐ Vérification des fuites</li>
                      <li>☐ État des joints</li>
                      <li>☐ Fonctionnement VMC</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Extérieur</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>☐ Évacuation des eaux</li>
                      <li>☐ État des gouttières</li>
                      <li>☐ Végétation autour</li>
                      <li>☐ État des portes/fenêtres</li>
                      <li>☐ Éclairage extérieur</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Évaluation préventive</h2>
              <p className="text-muted-foreground mb-6">
                Pour une évaluation complète de votre logement, il est recommandé de faire appel à des professionnels qui peuvent réaliser un audit préventif incluant :
              </p>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>• <strong>Inspection complète</strong> : État général du logement et de ses équipements</li>
                <li>• <strong>Diagnostic des risques</strong> : Identification des points faibles et des risques potentiels</li>
                <li>• <strong>Plan d'action personnalisé</strong> : Priorités et échéances pour les travaux nécessaires</li>
                <li>• <strong>Conseils pratiques</strong> : Techniques d'entretien adaptées à votre situation</li>
                <li>• <strong>Suivi personnalisé</strong> : Accompagnement dans la mise en œuvre des recommandations</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">Impact de la prévention</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">📊 Comparaison prévention vs réparation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Prévention (approche proactive)</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Entretien régulier</li>
                      <li>• Temps personnel : 2h/semaine</li>
                      <li>• Maintenance préventive</li>
                      <li><strong>Approche durable</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Réparation (intervention curative)</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Nettoyage d'insalubrité</li>
                      <li>• Désinfection complète</li>
                      <li>• Réparations importantes</li>
                      <li><strong>Coût significatif</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Ressources et contacts utiles</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">📞 Contacts utiles</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Services sociaux</strong> : CCAS, assistante sociale de secteur</li>
                  <li>• <strong>Agence nationale de l'habitat (ANAH)</strong> : Aides pour l'amélioration de l'habitat</li>
                  <li>• <strong>ADIL</strong> : Agence départementale d'information sur le logement</li>
                  <li>• <strong>Mairie</strong> : Service urbanisme, service social</li>
                  <li>• <strong>Associations</strong> : Associations d'aide au logement, France Alzheimer</li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-3">🛡️ Besoin d'un audit préventif ?</h3>
                <p className="text-muted-foreground mb-4">
                  Si vous souhaitez une évaluation complète de votre logement, des professionnels peuvent vous accompagner dans la mise en place de bonnes pratiques pour maintenir un environnement sain.
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

export default PreventionInsalubriteArticle;
