"use client";

import { Phone, Mail, MapPin, Clock, Shield, Heart, Building2 } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";
import Link from "next/link";
import type { NavLink } from "@/lib/seo-pages";

const Footer = ({ services = [] }: { services?: NavLink[] }) => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Contenu principal */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          
          {/* Logo et description */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logos/logo-transparent.webp"
                alt="SOS Nettoyage Diogène Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                loading="lazy"
                width={160}
                height={160}
              />
              <div>
                <div className="font-bold text-foreground text-lg sm:text-xl">SOS Nettoyage Diogène</div>
                <div className="text-sm text-muted-foreground">Nettoyage professionnel</div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Société spécialisée dans le nettoyage et débarras syndrome de Diogène. 
              Intervention discrète, professionnelle et respectueuse dans le Sud de la France.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <a href="tel:0767135458" onClick={() => gtag_report_conversion()} className="font-medium text-foreground hover:text-primary transition-colors">
                    07 67 13 54 58
                  </a>
                  <div className="text-sm text-muted-foreground">Disponible 7j/7</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">contact@sosnettoyagediogene.fr</div>
                  <div className="text-sm text-muted-foreground">Réponse rapide</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">8h00 - 20h00</div>
                  <div className="text-sm text-muted-foreground">Lundi au Dimanche</div>
                </div>
              </div>
            </div>
          </div>

          {/* Zones d'intervention */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Zones d'intervention</h3>
            <div className="space-y-2">
              {["Hérault (34)", "Bouches-du-Rhône (13)", "Haute-Garonne (31)", "Alpes-Maritimes (06)", "Var (83)", "Gard (30)", "Vaucluse (84)", "Pyrénées-Orientales (66)", "Tarn (81)", "Aude (11)", "Aveyron (12)"].map((dept) => (
                <div key={dept} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{dept}</span>
                </div>
              ))}
              <div className="text-sm text-muted-foreground font-medium">
                + Toute l'Occitanie & PACA
              </div>
            </div>
          </div>

          {/* Services — vrais liens crawlables vers les pages mères publiées */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Nos Services</h3>
            <div className="space-y-2">
              {services.length > 0 ? (
                services.map((s) => (
                  <Link
                    key={s.url}
                    href={s.url}
                    className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.label}
                  </Link>
                ))
              ) : (
                <>
                  <div className="text-sm text-muted-foreground">• Nettoyage Syndrome de Diogène</div>
                  <div className="text-sm text-muted-foreground">• Débarras Gros Volumes</div>
                  <div className="text-sm text-muted-foreground">• Désinfection & Insalubrité</div>
                  <div className="text-sm text-muted-foreground">• Nettoyage Extrême</div>
                  <div className="text-sm text-muted-foreground">• Évacuation Déchets</div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Section de réassurance */}
        <div className="bg-card rounded-xl p-6 sm:p-8 mb-8 sm:mb-12 border border-border/50">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Shield className="w-8 h-8 text-primary" />
              <h4 className="font-semibold text-foreground">Confidentialité</h4>
              <p className="text-sm text-muted-foreground">Discrétion totale garantie</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Heart className="w-8 h-8 text-accent" />
              <h4 className="font-semibold text-foreground">Respect</h4>
              <p className="text-sm text-muted-foreground">Approche humaine et bienveillante</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Clock className="w-8 h-8 text-primary" />
              <h4 className="font-semibold text-foreground">Réactivité</h4>
              <p className="text-sm text-muted-foreground">Intervention rapide 7j/7</p>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="border-t border-border/50 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} SOS Nettoyage Diogène. Tous droits réservés.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <Link
                href="/mentions-legales"
                className="hover:text-foreground transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="hover:text-foreground transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
