import React from 'react';
import SEOHead from '../components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Building2, Mail, Phone, MapPin, FileText, Shield, Users, Calendar } from 'lucide-react';

const MentionsLegales = () => {
  return (
    <>
      <SEOHead
        title="Mentions Légales - SOS Nettoyage Diogène"
        description="Mentions légales de SOS Nettoyage Diogène - Société spécialisée dans le nettoyage et débarras syndrome de Diogène"
        keywords="mentions légales, SOS nettoyage diogène, société nettoyage, débarras professionnel"
        canonicalUrl="/mentions-legales"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Mentions Légales
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Informations légales concernant SOS Nettoyage Diogène
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Informations de l'entreprise */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Informations de l'entreprise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Dénomination sociale</h4>
                    <p className="text-muted-foreground">SOS Nettoyage Diogène</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">SIREN</h4>
                    <p className="text-muted-foreground">891 792 749</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">SIRET</h4>
                    <p className="text-muted-foreground">891 792 749 00055</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Code APE</h4>
                    <p className="text-muted-foreground">70.22Z - Conseil pour les affaires et autres conseils de gestion</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Adresse du siège */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Adresse du siège social
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground">GLOBAL AGENCY</p>
                  <p className="text-muted-foreground">135 RUE DE LA CAVALADE</p>
                  <p className="text-muted-foreground">34000 MONTPELLIER</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Coordonnées de contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">07 67 13 54 58</p>
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">contact@sosnettoyagediogene.fr</p>
                      <p className="text-sm text-muted-foreground">Email</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Disponible 7j/7 de 8h00 à 20h00</p>
                    <p className="text-sm text-muted-foreground">Horaires d'ouverture</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hébergement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Hébergement du site
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ce site est hébergé par des services d'hébergement web professionnels 
                  conformes aux réglementations françaises et européennes en vigueur.
                </p>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Propriété intellectuelle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  L'ensemble du contenu de ce site (textes, images, vidéos, graphismes, logo) 
                  est la propriété exclusive de SOS Nettoyage Diogène et est protégé par les 
                  lois françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="text-muted-foreground">
                  Toute reproduction, représentation, modification, publication, adaptation 
                  de tout ou partie des éléments du site, quel que soit le moyen ou le 
                  procédé utilisé, est interdite, sauf autorisation écrite préalable.
                </p>
              </CardContent>
            </Card>

            {/* Protection des données */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Protection des données personnelles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), 
                  SOS Nettoyage Diogène s'engage à protéger la confidentialité et la sécurité 
                  de vos données personnelles.
                </p>
                <p className="text-muted-foreground">
                  Les données collectées sont utilisées exclusivement dans le cadre de la 
                  prestation de nos services de nettoyage et débarras. Elles ne sont jamais 
                  transmises à des tiers sans votre consentement explicite.
                </p>
                <p className="text-muted-foreground">
                  Vous disposez d'un droit d'accès, de rectification, de suppression et 
                  d'opposition concernant vos données personnelles. Pour exercer ces droits, 
                  contactez-nous à l'adresse : contact@sosnettoyagediogene.fr
                </p>
              </CardContent>
            </Card>

            {/* Responsabilité */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Limitation de responsabilité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  SOS Nettoyage Diogène met tout en œuvre pour fournir des informations 
                  exactes et à jour sur ce site. Cependant, nous ne pouvons garantir 
                  l'exactitude, la précision ou l'exhaustivité des informations mises 
                  à disposition.
                </p>
                <p className="text-muted-foreground">
                  L'utilisation des informations et contenus disponibles sur l'ensemble 
                  du site se fait sous l'entière responsabilité de l'utilisateur.
                </p>
              </CardContent>
            </Card>

            {/* Droit applicable */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Droit applicable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Le présent site et les présentes mentions légales sont régis par le 
                  droit français. En cas de litige, les tribunaux français seront seuls 
                  compétents.
                </p>
              </CardContent>
            </Card>

            {/* Dernière mise à jour */}
            <div className="text-center pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentionsLegales;
