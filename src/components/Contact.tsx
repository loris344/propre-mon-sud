import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, ContactFormData } from "@/lib/emailService";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Heart,
  Send,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

// Déclaration TypeScript pour gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

interface FormErrors {
  firstName?: string;
  phone?: string;
  email?: string;
}

const Contact = () => {
  const { toast } = useToast();
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

  // Validation des champs
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

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion des changements de champs
  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Effacer l'erreur du champ modifié
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Soumission du formulaire
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
      // Envoyer l'email via le service
      const success = await sendContactEmail(formData);
      
      if (success) {
        // Marquer comme soumis
        setIsSubmitted(true);
        
        // Événement de conversion Google Ads
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-17579670391/JzBOCJz696AbEPf20b5B'
          });
        }
        
        toast({
          title: "Demande envoyée avec succès !",
          description: "Votre demande a été transmise à notre équipe. Nous vous contacterons rapidement au " + formData.phone + ".",
          variant: "default",
        });

        // Réinitialiser le formulaire après 5 secondes
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
        description: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez nous appeler directement au 07 67 13 54 58.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-secondary/20 to-background">
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
          
          {/* Contact Form */}
          <Card className="shadow-xl border-border/50 p-4 sm:p-6">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl font-semibold text-foreground">
                Demande de Devis Gratuit
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Demande envoyée !</h3>
                  <p className="text-muted-foreground">
                    Votre demande a été transmise. Nous vous contacterons rapidement au {formData.phone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3">
                      <label className="text-base sm:text-lg font-medium text-foreground">Prénom *</label>
                      <Input 
                        placeholder="Votre prénom" 
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`text-base sm:text-lg py-3 sm:py-4 ${errors.firstName ? "border-red-500" : ""}`}
                      />
                      {errors.firstName && (
                        <p className="text-sm sm:text-base text-red-500 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-3">
                      <label className="text-base sm:text-lg font-medium text-foreground">Téléphone *</label>
                      <Input 
                        placeholder="06 00 00 00 00" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`text-base sm:text-lg py-3 sm:py-4 ${errors.phone ? "border-red-500" : ""}`}
                      />
                      {errors.phone && (
                        <p className="text-sm sm:text-base text-red-500 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-base sm:text-lg font-medium text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="votre.email@exemple.fr" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`text-base sm:text-lg py-3 sm:py-4 ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-sm sm:text-base text-red-500 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-base sm:text-lg font-medium text-foreground">Ville ou village d'intervention</label>
                    <Input 
                      placeholder="Montpellier, Sète, Béziers..." 
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="text-base sm:text-lg py-3 sm:py-4"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-base sm:text-lg font-medium text-foreground">Description de la situation</label>
                    <Textarea 
                      placeholder="Décrivez brièvement votre situation (type de logement, surfaces approximatives, urgence...)"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="text-base sm:text-lg py-3 sm:py-4"
                    />
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-accent/10 rounded-lg border border-accent/20">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      <span className="font-medium text-foreground">Confidentialité garantie :</span> 
                      {" "}Toutes vos informations sont traitées avec la plus grande discrétion et ne seront jamais communiquées à des tiers.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full text-lg sm:text-xl py-6 sm:py-8 min-h-[60px] sm:min-h-[70px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                        Envoyer ma demande
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            
            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <Phone className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Urgence 7j/7</h3>
                <p className="text-lg sm:text-xl font-semibold mb-4">07 67 13 54 58</p>
                <p className="text-primary-foreground/90 text-sm sm:text-base">
                  Intervention rapide dans le Sud de la France
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
                    Montpellier, Sète, Béziers, Nîmes, Perpignan, Toulouse, Marseille, Nice, Bordeaux et tout le Sud de la France
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