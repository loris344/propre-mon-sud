import SEOHead from "../../components/SEOHead";
import { useSEO } from "../../hooks/useSEO";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Users, AlertTriangle, Heart } from "lucide-react";
import { ResponsiveImage } from "../../components/ResponsiveImage";

const SyndromeDiogeneArticle = () => {
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
                <span>15 Janvier 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>5 min de lecture</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Syndrome de Diogène : Comprendre et accompagner
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Un trouble comportemental méconnu qui touche principalement les personnes âgées, nécessitant une approche délicate et multidisciplinaire.
            </p>
          </header>

          {/* Statistiques importantes */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">60+</div>
                <div className="text-sm text-muted-foreground">ans : population à risque</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200 text-center">
                <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">Femmes</div>
                <div className="text-sm text-muted-foreground">légèrement plus touchées</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 text-center">
                <Heart className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">Multifactoriel</div>
                <div className="text-sm text-muted-foreground">causes complexes</div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border/50">
              
              {/* Introduction avec image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Syndrome de Diogène - Accumulation d'objets dans un logement"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-muted-foreground text-sm italic">
                  Illustration d'une situation de syndrome de Diogène nécessitant une intervention professionnelle
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Comprendre le syndrome de Diogène</h2>
              <p className="text-muted-foreground mb-6">
                Le syndrome de Diogène tire son nom du philosophe grec Diogène de Sinope, qui vivait dans un tonneau et rejetait les conventions sociales. Ce trouble comportemental se caractérise par une accumulation compulsive d'objets, souvent sans valeur apparente, associée à une négligence extrême de l'hygiène personnelle et domestique. Les personnes atteintes développent un attachement émotionnel intense à leurs possessions, même les plus insignifiantes, créant un environnement de vie progressivement envahi et insalubre.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Ce syndrome touche principalement les personnes âgées de plus de 60 ans, avec une légère prédominance féminine. Les causes sont multifactorielles : traumatismes psychologiques, troubles cognitifs, isolement social, ou encore certaines maladies neurodégénératives comme la démence. L'accumulation d'objets peut représenter une tentative de contrôle sur l'environnement ou un mécanisme de défense face à l'anxiété et à la solitude.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-amber-800 mb-4">⚠️ Signes d'alerte précoces</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Accumulation progressive</strong> : Objets qui s'empilent dans toutes les pièces</li>
                  <li>• <strong>Refus d'aide</strong> : Rejet systématique des propositions d'assistance</li>
                  <li>• <strong>Isolement social</strong> : Évitement des visites et des contacts</li>
                  <li>• <strong>Négligence hygiénique</strong> : Délaissement de l'hygiène personnelle et domestique</li>
                  <li>• <strong>Anxiété de séparation</strong> : Angoisse à l'idée de se séparer d'objets</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Reconnaître les signes d'alerte</h2>
              <p className="text-muted-foreground mb-6">
                L'identification précoce du syndrome de Diogène est cruciale pour une intervention efficace. Les signes se développent généralement de manière progressive, rendant le diagnostic parfois difficile. L'accumulation excessive d'objets constitue souvent le premier indicateur visible, transformant progressivement l'espace de vie en un environnement encombré et insalubre.
              </p>
              
              <p className="text-muted-foreground mb-6">
                L'isolement social s'installe parallèlement à l'accumulation, les personnes concernées évitant les visites et refusant toute aide extérieure. Cette réticence s'accompagne souvent d'un déni de la situation, rendant l'approche particulièrement délicate. L'anxiété liée à la séparation d'objets, même les plus insignifiants, révèle l'attachement émotionnel profond développé envers ces possessions.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Les conséquences sur la santé et la sécurité deviennent rapidement préoccupantes : risques d'incendie dus à l'encombrement, prolifération de bactéries et parasites, chutes et accidents liés aux obstacles, sans oublier l'impact psychologique sur l'entourage et les relations familiales.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Les conséquences multiples</h2>
              <p className="text-muted-foreground mb-6">
                Le syndrome de Diogène engendre des conséquences qui dépassent largement le cadre individuel, affectant la santé, la sécurité et le bien-être social. L'environnement insalubre favorise la prolifération de micro-organismes pathogènes, créant des risques sanitaires majeurs pour la personne concernée et potentiellement pour son entourage. Les conditions d'hygiène défaillantes peuvent entraîner des infections cutanées, respiratoires ou digestives.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Les risques d'incendie représentent une préoccupation majeure, l'encombrement excessif créant des obstacles à l'évacuation et favorisant la propagation des flammes. De même, les chutes et accidents domestiques sont fréquents dans ces environnements encombrés, où les passages deviennent impraticables et dangereux.
              </p>
              
              <p className="text-muted-foreground mb-6">
                L'impact social et familial est tout aussi préoccupant. L'isolement progressif détériore les relations avec les proches, créant une spirale de solitude et de détresse. Les problèmes financiers s'accumulent souvent, avec des factures impayées et des dettes qui s'alourdissent, aggravant encore la situation.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Comment accompagner une personne atteinte du syndrome de Diogène</h2>
              <p className="text-muted-foreground mb-6">
                L'accompagnement d'une personne atteinte du syndrome de Diogène nécessite une approche multidisciplinaire et bienveillante. Voici les étapes recommandées par les professionnels :
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. Évaluation et diagnostic</h3>
                  <p className="text-muted-foreground">Faire appel à un médecin généraliste ou un psychiatre pour évaluer la situation. Contact avec les services sociaux et médicaux pour un accompagnement global.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. Préparation et planification</h3>
                  <p className="text-muted-foreground">Élaborer un plan d'intervention personnalisé avec l'accord de la personne concernée. Obtenir les autorisations nécessaires et coordonner les différents intervenants.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. Intervention et nettoyage</h3>
                  <p className="text-muted-foreground">Procéder au débarras de manière respectueuse, en préservant les objets de valeur sentimentale. Effectuer un nettoyage et une désinfection complète des lieux.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Suivi et prévention</h3>
                  <p className="text-muted-foreground">Mettre en place un suivi psychologique et social. Instaurer des mesures préventives pour éviter la récidive et maintenir un environnement sain.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Ressources et aides disponibles</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">📞 Contacts utiles</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Médecin traitant</strong> : Premier interlocuteur pour évaluer la situation</li>
                  <li>• <strong>Services sociaux</strong> : CCAS, assistante sociale de secteur</li>
                  <li>• <strong>Psychiatre</strong> : Pour un diagnostic et un suivi médical</li>
                  <li>• <strong>Associations</strong> : France Alzheimer, associations d'aide aux personnes âgées</li>
                  <li>• <strong>Pompiers</strong> : En cas de situation d'urgence (risque d'incendie)</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Aspects financiers et aides</h2>
              <p className="text-muted-foreground mb-6">
                L'intervention dans un cas de syndrome de Diogène nécessite une approche professionnelle qui varie selon la complexité de la situation, la taille du logement et l'ampleur de l'accumulation. Les familles peuvent se sentir dépassées par ces aspects pratiques, d'autant plus que la situation s'accompagne souvent de difficultés préexistantes.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Il est important de savoir que plusieurs dispositifs d'aide existent. Les services sociaux peuvent apporter un soutien, notamment dans le cadre de l'aide sociale à l'hébergement ou de l'allocation personnalisée d'autonomie. Certaines mutuelles et assurances habitation peuvent également prendre en charge une partie des frais, particulièrement en cas de situation d'urgence ou de risque sanitaire avéré.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Prévention et suivi</h2>
              <p className="text-muted-foreground mb-6">
                La prévention du syndrome de Diogène passe par un suivi régulier et une attention particulière aux signes précurseurs. Il est important de maintenir un lien social et de surveiller l'évolution de la situation.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Mesures préventives</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Maintenir un contact social régulier</li>
                  <li>• Visites régulières de la famille ou des amis</li>
                  <li>• Aide ménagère si nécessaire</li>
                  <li>• Suivi médical régulier</li>
                  <li>• Aide psychologique en cas de besoin</li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-3">💡 Besoin d'aide professionnelle ?</h3>
                <p className="text-muted-foreground mb-4">
                  Si vous êtes confronté à une situation de syndrome de Diogène, des professionnels spécialisés peuvent vous accompagner. SOS Nettoyage Diogène & Débarras propose des interventions respectueuses et bienveillantes.
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

export default SyndromeDiogeneArticle;
