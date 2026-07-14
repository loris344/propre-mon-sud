"use client";

import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-secondary/20 to-background scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <h2 id="contact-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Contactez-Nous en Toute Discrétion
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Nous comprenons la sensibilité de votre situation.
            Contactez-nous pour un échange confidentiel et un devis gratuit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">

          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-8">

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <Phone className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Urgence 7j/7</h3>
                <a href="tel:0767135458" onClick={() => gtag_report_conversion()} className="text-2xl sm:text-3xl font-bold mb-3 block hover:underline">
                  07 67 13 54 58
                </a>
                <p className="text-primary-foreground/90 text-sm sm:text-base">
                  Intervention rapide dans le Sud de la France : Occitanie, PACA, Nouvelle-Aquitaine
                </p>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Zone d'intervention</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Hérault, Gard, Aude, Bouches-du-Rhône, Var, Vaucluse, Pyrénées-Orientales, Haute-Garonne et toute la région Occitanie & PACA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Horaires</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Lundi au Dimanche : 8h00 - 20h00<br />
                    <span className="font-medium">Urgences acceptées en soirée</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    contact@sosnettoyagediogene.fr
                  </p>
                </div>
              </div>
            </div>

            {/* Reassurance */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Notre engagement</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
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
