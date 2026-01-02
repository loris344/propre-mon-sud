import Hero from "../components/Hero";
import Services from "../components/Services";
import ExamplesGallery from "../components/ExamplesGallery";
import CustomerReviews from "../components/CustomerReviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";
import { useSEO } from "../hooks/useSEO";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, ContactFormData } from "@/lib/emailService";
import { 
  Heart, 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone,
  MapPin,
  Users,
  Home,
  Leaf,
  Zap,
  Droplets,
  Send,
  AlertCircle
} from "lucide-react";

// Déclaration TypeScript pour gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

interface FormErrors {
  city?: string;
  phone?: string;
  email?: string;
}

const NettoyageApresDeces = () => {
  const location = useLocation();
  const { toast } = useToast();
  
  // État du formulaire
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

  // Remettre le scroll en haut de page à chaque navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gérer les ancres dans l'URL
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  // Validation des champs
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.city.trim()) {
      newErrors.city = "La ville d'intervention est obligatoire";
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
        description: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer ou nous contacter par email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const seoConfig = useSEO();

  return (
    <>
      <SEOHead {...seoConfig} />
      <main role="main">
        {/* Hero Section avec formulaire à droite */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Contenu principal */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                    Nettoyage Après Décès
                    <span className="block text-primary">Service Respectueux et Discret</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Service spécialisé de nettoyage et remise en état après décès. 
                    Intervention respectueuse, discrète et professionnelle avec protocoles sanitaires stricts 
                    dans tout le Sud de la France.
                  </p>
                  
                  {/* Images d'exemples */}
                  <div className="grid md:grid-cols-2 gap-4 my-8">
                    <div className="text-center">
                      <img
                        src="/images/examples/ex1.png"
                        alt="Intervention nettoyage après décès - Avant"
                        className="w-full h-48 object-cover rounded-lg mb-3"
                      />
                      <p className="text-sm text-muted-foreground">Intervention professionnelle</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="/images/examples/ex2.jpg"
                        alt="Résultat après nettoyage spécialisé - Après"
                        className="w-full h-48 object-cover rounded-lg mb-3"
                      />
                      <p className="text-sm text-muted-foreground">Résultat exceptionnel</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="text-lg px-6 py-4"
                      onClick={() => {
                        const element = document.querySelector('#contact-form');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <Phone className="w-5 h-5" />
                      Devis Gratuit - 06 05 31 01 99
                    </Button>
                  </div>
                </div>

                {/* Formulaire de contact compact */}
                <div className="lg:col-span-1">
                  <Card id="contact-form" className="bg-card/95 backdrop-blur-sm border-border/50 shadow-lg">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-center text-foreground">
                        Demandez votre Devis
                      </CardTitle>
                      <p className="text-xs text-muted-foreground text-center">
                        Intervention rapide et discrète
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {isSubmitted ? (
                        <div className="text-center py-6 space-y-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-foreground">Demande envoyée !</h3>
                          <p className="text-sm text-muted-foreground">
                            Nous vous contacterons rapidement au {formData.phone}.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1">
                              Ville ou village d'intervention *
                            </label>
                            <input
                              type="text"
                              className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.city ? "border-red-500" : "border-border"}`}
                              placeholder="Montpellier, Sète, Béziers..."
                              value={formData.city}
                              onChange={(e) => handleInputChange('city', e.target.value)}
                            />
                            {errors.city && (
                              <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-3 h-3" />
                                {errors.city}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1">
                              Téléphone *
                            </label>
                            <input
                              type="tel"
                              className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? "border-red-500" : "border-border"}`}
                              placeholder="06 00 00 00 00"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                            />
                            {errors.phone && (
                              <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-3 h-3" />
                                {errors.phone}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? "border-red-500" : "border-border"}`}
                              placeholder="votre@email.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                            />
                            {errors.email && (
                              <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-3 h-3" />
                                {errors.email}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1">
                              Message
                            </label>
                            <textarea
                              rows={3}
                              className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                              placeholder="Décrivez votre situation..."
                              value={formData.description}
                              onChange={(e) => handleInputChange('description', e.target.value)}
                            />
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Envoi en cours...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 mr-2" />
                                Envoyer ma demande
                              </>
                            )}
                          </Button>
                          <p className="text-xs text-muted-foreground text-center">
                            Confidentialité garantie
                          </p>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
                Nos Services Spécialisés
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Intervention Discrète</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Véhicules discrets et respect total de l'intimité</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Protocoles Sanitaires</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Traitement selon les normes les plus strictes</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Remise en État</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Nettoyage et désinfection professionnelle</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
                Zone d'Intervention - Sud de la France
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {["Montpellier", "Sète", "Béziers", "Nîmes", "Perpignan", "Carcassonne", "Marseille", "Aix-en-Provence"].map((city, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground p-3 rounded-lg hover:bg-card/50 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{city}</span>
                  </div>
                ))}
              </div>
              <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0 shadow-xl">
                <CardContent className="p-8">
                  <Phone className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Intervention d'Urgence</h3>
                  <p className="text-xl font-semibold mb-4">06 05 31 01 99</p>
                  <p className="text-primary-foreground/90">
                    Disponible 7j/7 de 8h à 20h pour tout le Sud de la France
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default NettoyageApresDeces;
