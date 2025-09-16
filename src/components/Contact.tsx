import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Heart
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Contactez-Nous en Toute Discrétion
          </h2>
          <p className="text-lg text-muted-foreground">
            Nous comprenons la sensibilité de votre situation. 
            Contactez-nous pour un échange confidentiel et un devis gratuit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Contact Form */}
          <Card className="shadow-xl border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Demande de Devis Gratuit
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Prénom *</label>
                  <Input placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Téléphone *</label>
                  <Input placeholder="06 00 00 00 00" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="votre.email@exemple.fr" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Ville d'intervention</label>
                <Input placeholder="Montpellier, Sète, Béziers..." />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Description de la situation</label>
                <Textarea 
                  placeholder="Décrivez brièvement votre situation (type de logement, surfaces approximatives, urgence...)"
                  rows={4}
                />
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Confidentialité garantie :</span> 
                  {" "}Toutes vos informations sont traitées avec la plus grande discrétion et ne seront jamais communiquées à des tiers.
                </p>
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Phone className="w-5 h-5" />
                Envoyer ma demande
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            
            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Urgence 7j/7</h3>
                <p className="text-xl font-semibold mb-4">04 67 XX XX XX</p>
                <p className="text-primary-foreground/90">
                  Intervention rapide dans l'Hérault et départements limitrophes
                </p>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Zone d'intervention</h4>
                  <p className="text-muted-foreground">
                    Montpellier et agglomération, Sète, Béziers, Nîmes, Perpignan et toute l'Occitanie
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Horaires</h4>
                  <p className="text-muted-foreground">
                    Lundi au Dimanche : 8h00 - 20h00<br />
                    <span className="font-medium">Urgences acceptées en soirée</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    contact@nettoyage-diogene-montpellier.fr
                  </p>
                </div>
              </div>
            </div>

            {/* Reassurance */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Notre engagement</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Nous comprenons la difficulté de franchir le pas. Notre équipe vous accompagne 
                      avec bienveillance, sans jugement, et dans le respect total de votre intimité. 
                      Chaque intervention est unique et adaptée à vos besoins.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;