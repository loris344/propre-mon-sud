import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  Users, 
  Building,
  Award,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const EntrepriseNettoyageMarseille: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Entreprise de Nettoyage Marseille | Services Professionnels & Spécialisés | SOS Nettoyage Diogène</title>
        <meta name="description" content="Entreprise de nettoyage professionnel à Marseille. Services spécialisés : syndrome de Diogène, nettoyage après décès, débarras, désinfection. Équipe certifiée, intervention 7j/7. Devis gratuit." />
        <meta name="keywords" content="entreprise nettoyage Marseille, nettoyage professionnel Marseille, société nettoyage Bouches-du-Rhône, nettoyage spécialisé Marseille, syndrome diogène Marseille, nettoyage après décès Marseille, débarras Marseille, désinfection Marseille" />
        <link rel="canonical" href="/entreprise-nettoyage-marseille" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section avec image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="/images/cities/marseille1.jpg"
            alt="Vue de Marseille - Entreprise de nettoyage professionnel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Entreprise de Nettoyage Marseille
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Services professionnels de nettoyage et d'intervention spécialisée dans les Bouches-du-Rhône
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <MapPin className="h-4 w-4 mr-1" />
                  Marseille & Bouches-du-Rhône
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <Clock className="h-4 w-4 mr-1" />
                  Intervention 7j/7
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <Shield className="h-4 w-4 mr-1" />
                  Équipe certifiée
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-6 w-6 text-blue-600" />
                    Notre Entreprise de Nettoyage à Marseille
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Implantée dans la métropole marseillaise, notre entreprise de nettoyage professionnel couvre 
                    l'ensemble des Bouches-du-Rhône pour répondre aux besoins spécifiques de nettoyage et d'intervention 
                    spécialisée. Avec une équipe formée aux protocoles sanitaires les plus exigeants, nous intervenons 
                    auprès des particuliers, entreprises et collectivités de la région.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Marseille, en tant que deuxième ville de France et principal port méditerranéen, concentre une 
                    activité économique intense qui génère une demande importante en services de nettoyage professionnel. 
                    La métropole Aix-Marseille-Provence accueille de nombreuses entreprises, établissements de santé, 
                    ports et infrastructures qui nécessitent des services de nettoyage spécialisés.
                  </p>
                </CardContent>
              </Card>

              {/* Services spécialisés */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                    Nos Services Spécialisés à Marseille
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Nettoyage Syndrome de Diogène</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Intervention dans tous les arrondissements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Équipe formée au risque biologique</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Protocoles adaptés aux logements marseillais</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Nettoyage Après Décès</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Intervention 24h/24 dans la métropole</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Désinfection selon normes EN</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Évacuation vers déchèteries AMP</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Marché du nettoyage */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    Le Marché du Nettoyage à Marseille
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Marseille, métropole dynamique des Bouches-du-Rhône, représente un marché majeur pour les services 
                    de nettoyage professionnel. La ville concentre de nombreuses entreprises, établissements de santé, 
                    ports, aéroports et infrastructures qui externalisent leurs besoins en nettoyage et maintenance.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Le secteur du nettoyage professionnel en France connaît une croissance régulière, portée par 
                    l'externalisation croissante des services de nettoyage par les entreprises et les collectivités. 
                    Cette tendance s'observe particulièrement dans les grandes métropoles comme Marseille, où la 
                    densité urbaine et l'activité économique génèrent une demande soutenue en services spécialisés.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Les entreprises de nettoyage spécialisé, comme la nôtre, se distinguent par leur expertise dans 
                    des domaines spécifiques tels que le nettoyage après décès, le syndrome de Diogène, ou la 
                    désinfection d'environnements insalubres. Ces services requièrent des compétences particulières 
                    et des protocoles sanitaires stricts, conformément aux réglementations en vigueur.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      Sources : Données sectorielles du marché du nettoyage professionnel français, 
                      <a href="https://sante.gouv.fr/sante-et-environnement/eaux/produits-et-procedes-de-traitement-de-l-eau/article/nettoyage-et-desinfection-des-installations-d-eau-destinee-a-la-consommation" 
                         target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                        Ministère de la Santé - Nettoyage et désinfection
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Zone d'intervention */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    Zone d'Intervention dans les Bouches-du-Rhône
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Notre entreprise de nettoyage intervient dans tout le département des Bouches-du-Rhône, avec une 
                    expertise particulière sur Marseille et sa métropole. Nous couvrons également les principales 
                    villes du département pour assurer une proximité optimale avec nos clients.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Marseille', 'Aix-en-Provence', 'Arles', 'Aubagne', 'La Ciotat', 'Cassis', 'Martigues', 'Salon-de-Provence', 'Vitrolles'].map((ville) => (
                      <Badge key={ville} variant="outline" className="justify-center py-2">
                        {ville}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-600" />
                    <a href="mailto:contact@sosnettoyagediogene.fr" className="text-blue-600 hover:underline">
                      contact@sosnettoyagediogene.fr
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Disponible 7j/7</span>
                  </div>
                </CardContent>
              </Card>

              {/* Services rapides */}
              <Card>
                <CardHeader>
                  <CardTitle>Services Rapides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full">
                    <a href="/nettoyage-syndrome-diogene-marseille">
                      Syndrome de Diogène
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/nettoyage-apres-deces-marseille">
                      Nettoyage après décès
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/debarras-gros-volumes">
                      Débarras gros volumes
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Formation risque biologique
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Protocoles sanitaires EN
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Assurance responsabilité civile
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Équipements de protection
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'un devis pour votre entreprise de nettoyage ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une intervention professionnelle à Marseille et dans tout le département
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                <a href="/#contact">
                  Demander un devis
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntrepriseNettoyageMarseille;
