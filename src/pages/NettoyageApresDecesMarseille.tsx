import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';

const NettoyageApresDecesMarseille: React.FC = () => {
  const seoConfig = {
    title: "Nettoyage Après Décès Marseille | Guide 2025",
    description: "Guide complet nettoyage après décès à Marseille : protocoles sanitaires, délais, coûts. Intervention 24h/24.",
    canonical: "/nettoyage-apres-deces-marseille"
  };

  return (
    <>
      <SEOHead {...seoConfig} />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/images/cities/marseille1.jpg" 
              alt="Vue de Marseille, ville phocéenne des Bouches-du-Rhône"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-800/30"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nettoyage après décès à Marseille</h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Faire soi-même ou confier à des spécialistes — le guide clair, utile et actionnable pour agir correctement sans faux pas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0605310199" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                📞 06 05 31 01 99
              </a>
              <Link to="/#contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                📧 Devis Gratuit
              </Link>
            </div>
            <div className="mt-6 text-blue-100">
              <p className="text-lg font-medium">Intervention 24h/24 – Devis gratuit et confidentiel</p>
              <p className="text-sm">Équipe formée aux protocoles sanitaires stricts</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          {/* Introduction */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Une situation complexe qui nécessite une approche réfléchie</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Perdre un proche est déjà une épreuve. Se retrouver face à un logement marqué par un décès à Marseille ajoute une couche de complexité : <strong>risques sanitaires, odeurs persistantes, objets à trier, délais pour relouer/vendre, pression du voisinage…</strong>
              </p>
              <p className="text-gray-700 mb-6">
                Vous avez deux options réalistes : agir vous-même dans un cadre très précis, ou déléguer à une entreprise spécialisée. Voici comment décider rapidement et agir correctement, sans faux pas.
              </p>
            </div>
          </div>

          {/* Option 1 - Faire soi-même */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Option 1 — Faire soi-même : possible mais seulement dans des cas simples</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Conditions strictes</h3>
              <p className="text-yellow-700">
                Si le décès a été constaté rapidement, sans présence visible de sang ou de fluides corporels, et que la zone est limitée, un traitement "maîtrisé" est envisageable.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Sécuriser et aérer</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Équipement de protection :</strong> gants jetables, masque FFP2/FFP3, lunettes, surblouse</li>
                  <li>• <strong>Aération :</strong> ouvrez en grand, éteignez la clim si elle peut diffuser les odeurs/particules</li>
                  <li>• <strong>Isolement :</strong> isolez la pièce concernée</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Neutraliser la charge émotionnelle</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Périmètre d'intervention :</strong> définissez une pièce, un couloir</li>
                  <li>• <strong>Prudence :</strong> évitez d'ouvrir les contenants sensibles</li>
                  <li>• <strong>Documentation :</strong> photographiez l'existant si une assurance doit intervenir</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Traiter le "dur" avant le "mou"</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Surfaces non poreuses :</strong> carrelage, inox, faïence, sanitaires avec détergent puis désinfection aux normes EN 14476/13697</li>
                  <li>• <strong>Surfaces poreuses :</strong> textiles, matelas, moquettes, parquets imprégnés = souvent à déposer</li>
                  <li>• <strong>Principe :</strong> mieux vaut enlever proprement que "masquer" des odeurs qui reviendront</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Désodoriser de manière crédible</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Charbon actif, nébulisation ciblée</strong> ou générateur d'ozone avec protocole strict</li>
                  <li>• <strong>Local vide, temps de contact, aération longue</strong></li>
                  <li>• <strong>Attention :</strong> une simple bougie/parfum ne règle jamais une odeur de décomposition</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Gestion responsable des déchets</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Ne mélangez pas</strong> des éléments potentiellement souillés avec les ordures ménagères</li>
                  <li>• <strong>Si vous doutez</strong> qu'un déchet relève d'une filière spécialisée (type DASRI), stoppez</li>
                  <li>• <strong>Principe :</strong> mieux vaut un pro que des ennuis sanitaires ou juridiques</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-red-800 mb-3">🚨 Quand arrêter le DIY immédiatement</h3>
              <ul className="text-red-700 space-y-2">
                <li>• Traces de sang/fluide, découverte tardive</li>
                <li>• Odeurs fortes persistantes</li>
                <li>• Présence de mouches/asticots</li>
                <li>• Matériaux poreux imbibés</li>
                <li>• Logement très encombré (Diogène) ou insalubre</li>
              </ul>
              <p className="text-red-800 font-medium mt-4">
                Dans ces cas, continuer soi-même expose à des risques infectieux, à une mauvaise évacuation des déchets et à un échec olfactif quasi certain.
              </p>
            </div>
          </div>

          {/* Option 2 - Professionnel */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Option 2 — Faire intervenir une société spécialisée</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎯 Quand faire appel à un professionnel</h3>
              <p className="text-blue-700">
                Dès qu'il y a contamination biologique, découverte tardive, ou que le logement doit être reloué/vendu rapidement, l'intervention professionnelle s'impose.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Protocole professionnel à Marseille</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Équipement EPI :</strong> FFP3, combinaisons étanches</li>
                  <li>• <strong>Zonage strict :</strong> délimitation des zones contaminées</li>
                  <li>• <strong>Désinfection :</strong> selon normes EN</li>
                  <li>• <strong>Dépose :</strong> matériaux poreux atteints (plinthes, parquet, moquette)</li>
                  <li>• <strong>Évacuation :</strong> filière déchets appropriée avec traçabilité</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce que vous obtenez concrètement</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Protocole sanitaire documenté</strong> qui sécurise occupants, voisins et transaction immobilière</li>
                  <li>• <strong>Traitement des odeurs en profondeur</strong> (nébulisation, techniques moléculaires, parfois ozone)</li>
                  <li>• <strong>Rapport d'intervention</strong> utile pour assurances, notaire et remise en état</li>
                  <li>• <strong>Contrôle de rémanence</strong> des odeurs</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">💰 Délais et budget réalistes à Marseille</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Délais</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Visite et devis sous 24–48h</li>
                    <li>• Intervention rapide derrière</li>
                    <li>• Disponibilité 24h/24</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Budget indicatif</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• <strong>Cas simples :</strong> quelques centaines d'€</li>
                    <li>• <strong>Avec fluides/odeurs :</strong> 800–1 500 €+</li>
                    <li>• <strong>Dossiers complexes :</strong> chiffrage sur place</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Prise en charge assurance */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">💡 Astuce prise en charge</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800 mb-4">
                <strong>Vérifiez l'assurance habitation</strong> (rubriques "décontamination/nettoyage après sinistre").
              </p>
              <p className="text-blue-700 mb-4">
                Un rapport détaillé et des photos avant/après facilitent la prise en charge, voire le déblocage de fonds via le notaire pour les successions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">📋 Documents utiles</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Rapport d'intervention détaillé</li>
                    <li>• Photos avant/après</li>
                    <li>• Factures et justificatifs</li>
                    <li>• Certificat de désinfection</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🏢 Contacts utiles</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Assurance habitation</li>
                    <li>• Notaire (succession)</li>
                    <li>• Services sociaux</li>
                    <li>• Médecin traitant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Guide de décision */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment décider, en 60 secondes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">🔴 Faire appel à un professionnel</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• Odeurs fortes ou présence de fluides</li>
                  <li>• Matelas/moquette/plinthes atteints</li>
                  <li>• Relocation/vente rapide</li>
                  <li>• Copropriété exigeante</li>
                  <li>• Voisinage incommodé</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">🟢 DIY prudent possible</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Petite zone, aucune contamination visible</li>
                  <li>• Émotionnellement gérable</li>
                  <li>• Décès constaté rapidement</li>
                  <li>• Aucun fluide corporel</li>
                  <li>• Matériaux non poreux uniquement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Spécificités Marseille */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi cette rigueur compte à Marseille</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Le bâti ancien, les accès parfois difficiles, les copropriétés sensibles et la densité urbaine amplifient les nuisances olfactives et les tensions de voisinage.
              </p>
              <p className="text-gray-700 mb-6">
                Un protocole "propre" et documenté évite retours en arrière, plaintes et coûts cachés. Et sur le plan humain, déléguer cette charge évite un traumatisme supplémentaire.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🏢</div>
                <h4 className="font-semibold text-gray-900 mb-2">Bâti ancien</h4>
                <p className="text-gray-700 text-sm">Matériaux poreux, ventilation complexe</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🚗</div>
                <h4 className="font-semibold text-gray-900 mb-2">Accès difficiles</h4>
                <p className="text-gray-700 text-sm">Rues étroites, parkings limités</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">👥</div>
                <h4 className="font-semibold text-gray-900 mb-2">Densité urbaine</h4>
                <p className="text-gray-700 text-sm">Voisinage proche, nuisances amplifiées</p>
              </div>
            </div>
          </div>

          {/* Recommandations finales */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vous voulez aller vite et juste ?</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Diagnostic professionnel</h3>
                <p className="text-gray-700">Faites établir un diagnostic clair, sur place, avec un plan d'intervention et la mention de la filière déchets.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Exigences qualité</h3>
                <p className="text-gray-700">Exigez normes EN pour les produits, EPI adaptés, et rapport final.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. DIY prudent</h3>
                <p className="text-gray-700">Si vous tentez le DIY sur une zone saine : limitez le périmètre, travaillez méthodiquement, et arrêtez au moindre doute.</p>
              </div>
            </div>
          </div>

          {/* Vues de Marseille */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Marseille, Ville Phocéenne</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <img
                  src="/images/cities/marseille1.jpg"
                  alt="Vue de Marseille - Port et Vieux-Port"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600">Port et Vieux-Port</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/cities/marseille2.jpg"
                  alt="Vue de Marseille - Centre-ville et monuments"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600">Centre-ville et monuments</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/cities/marseille3.jpg"
                  alt="Vue de Marseille - Quartiers et architecture"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600">Quartiers et architecture</p>
              </div>
            </div>
          </div>

          {/* Images d'exemples */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Réalisations à Marseille</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <img
                  src="/images/examples/ex1.png"
                  alt="Intervention nettoyage après décès Marseille - Avant"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600">Intervention professionnelle</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/examples/ex2.jpg"
                  alt="Résultat après nettoyage spécialisé Marseille - Après"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600">Résultat exceptionnel</p>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin d'une Intervention Professionnelle ?</h2>
            <p className="text-xl mb-6">
              Notre équipe spécialisée intervient rapidement à Marseille avec protocoles sanitaires stricts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0605310199" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                📞 06 05 31 01 99
              </a>
              <Link to="/#contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                📧 Demander un Devis
              </Link>
            </div>
            <p className="text-blue-100 mt-4 text-sm">
              <a href="mailto:contact@sosnettoyagediogene.fr" className="hover:underline">contact@sosnettoyagediogene.fr</a>
            </p>
          </div>

          {/* Liens connexes */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pages Connexes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/nettoyage-syndrome-diogene-marseille" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Nettoyage Syndrome de Diogène à Marseille</h3>
                <p className="text-gray-700 text-sm">Découvrez nos services spécialisés pour les situations d'accumulation</p>
              </Link>
              <Link to="/nettoyage-apres-deces" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Nettoyage Après Décès</h3>
                <p className="text-gray-700 text-sm">Service général de nettoyage après décès</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NettoyageApresDecesMarseille;
