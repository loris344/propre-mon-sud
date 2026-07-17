"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, ContactFormData } from "@/lib/emailService";
import { trackMetaLead } from "@/lib/meta-pixel";
import { Shield, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface FormErrors {
  firstName?: string;
  phone?: string;
  email?: string;
  city?: string;
  description?: string;
}

const ContactForm = ({ className }: { className?: string }) => {
  const { toast } = useToast();
  const pathname = usePathname();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    phone: '',
    email: '',
    city: '',
    description: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est obligatoire";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est obligatoire";
    } else if (!/^[0-9\s\+\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Format de téléphone invalide";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.city.trim()) {
      newErrors.city = "La ville ou le village d'intervention est obligatoire";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Merci de décrire brièvement la situation";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Erreur de validation",
        description: "Veuillez corriger les erreurs dans le formulaire",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await sendContactEmail(formData);

      if (success) {
        setIsSubmitted(true);
        // Conversion Meta Pixel : sur TOUTE page du site (le formulaire est le
        // même partout), identifiée par la page où le lead a été soumis.
        const contentName = pathname && pathname !== "/" ? pathname.replace(/^\/|\/$/g, "").replace(/\//g, "-") : "home";
        trackMetaLead(contentName);

        toast({
          title: "Demande envoyée avec succès !",
          description: "Votre demande a été transmise à notre équipe. Nous vous contacterons rapidement au " + formData.phone + ".",
          variant: "default",
        });

        setTimeout(() => {
          setFormData({
            firstName: '',
            phone: '',
            email: '',
            city: '',
            description: ''
          });
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Échec de l\'envoi de l\'email');
      }

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer ou nous contacter par email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={`shadow-xl border-border/50 p-3 sm:p-6 ${className ?? ""}`}>
      <CardHeader className="pb-3 sm:pb-6">
        <CardTitle className="text-xl sm:text-3xl font-semibold text-foreground">
          Demande de Devis Gratuit
        </CardTitle>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
          Réservé aux demandes de devis, pas aux candidatures.
        </p>
      </CardHeader>

      <CardContent>
        {isSubmitted ? (
          <div className="text-center py-6 sm:py-8 space-y-3 sm:space-y-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">Demande envoyée !</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Votre demande a été transmise. Nous vous contacterons rapidement au {formData.phone}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-sm sm:text-base font-medium text-foreground">Prénom *</label>
                <Input
                  placeholder="Votre prénom"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`text-sm sm:text-base py-2 sm:py-3 ${errors.firstName ? "border-destructive" : ""}`}
                />
                {errors.firstName && (
                  <p className="text-xs sm:text-sm text-destructive flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-sm sm:text-base font-medium text-foreground">Téléphone *</label>
                <Input
                  placeholder="06 00 00 00 00"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`text-sm sm:text-base py-2 sm:py-3 ${errors.phone ? "border-destructive" : ""}`}
                />
                {errors.phone && (
                  <p className="text-xs sm:text-sm text-destructive flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-sm sm:text-base font-medium text-foreground">Email *</label>
              <Input
                type="email"
                placeholder="votre.email@exemple.fr"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`text-sm sm:text-base py-2 sm:py-3 ${errors.email ? "border-destructive" : ""}`}
              />
              {errors.email && (
                <p className="text-xs sm:text-sm text-destructive flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-sm sm:text-base font-medium text-foreground">Ville ou village d'intervention *</label>
              <Input
                placeholder="Montpellier, Marseille, Toulouse..."
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className={`text-sm sm:text-base py-2 sm:py-3 ${errors.city ? "border-destructive" : ""}`}
              />
              {errors.city && (
                <p className="text-xs sm:text-sm text-destructive flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {errors.city}
                </p>
              )}
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-sm sm:text-base font-medium text-foreground">Description de la situation *</label>
              <Textarea
                placeholder="Décrivez brièvement votre situation (type de logement, surfaces approximatives, urgence...)"
                rows={3}
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className={`text-sm sm:text-base py-2 sm:py-3 ${errors.description ? "border-destructive" : ""}`}
              />
              {errors.description && (
                <p className="text-xs sm:text-sm text-destructive flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {errors.description}
                </p>
              )}
            </div>

            <div className="flex items-start gap-2.5 sm:gap-4 p-3 sm:p-5 bg-accent/10 rounded-lg border border-accent/20">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Confidentialité garantie :</span>
                {" "}Toutes vos informations sont traitées avec la plus grande discrétion et ne seront jamais communiquées à des tiers.
              </p>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full text-base sm:text-lg py-4 sm:py-6 min-h-[48px] sm:min-h-[60px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Envoyer ma demande
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;
