"use client";

import { Phone, Shield, Home, FileText, Scale, Recycle, CheckCircle2, AlertTriangle, ClipboardCheck, Camera, Key, Mail, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const NotairesSuccessionContent = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* En-tête document */}
        <section className="pt-32 sm:pt-40 pb-12 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
                  <Scale className="w-3.5 h-3.5" />
                  Fiche à l'attention des notaires
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Remise en état d'un bien en succession
                </h1>
                <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                  Protocole d'intervention pour les logements insalubres, Diogène ou post-décès, dans le cadre d'une succession. Document destiné aux études notariales pour évaluer la faisabilité d'une vente, sécuriser l'estimation et apporter aux héritiers une solution clé en main.
                </p>

                {/* Trust bar : Google + ARS */}
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground ml-1">5,0</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground font-medium">En collaboration avec l'ARS</span>
                    <img src="/logos/RF.webp" alt="République Française" className="h-10 w-auto object-contain" loading="eager" width={128} height={116} />
                    <img src="/logos/ARS.webp" alt="Agence Régionale de Santé" className="h-10 w-auto object-contain" loading="eager" width={128} height={74} />
                  </div>
                </div>
              </div>
              <div className="relative w-full lg:w-80 shrink-0">
                <img
                  src="/images/examples/nettoyeurs.webp"
                  alt="Équipe d'intervention sur un logement en succession"
                  width="320"
                  height="240"
                  loading="eager"
                  className="w-full h-56 lg:h-64 object-cover rounded-xl shadow-lg border border-border"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mt-8 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Devis remis sous 24h
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Attestation d'assainissement remise
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Tri et conservation des documents
              </div>
            </div>
          </div>
        </section>

        {/* Section impact valorisation */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-10">
            {/* Avant / Après illustratif */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Impact sur la valeur du bien</h2>
              </div>
              <Card className="p-6 mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  Un logement laissé en l'état (Diogène, post-décès non découvert, accumulation extrême) subit en moyenne une décote de <strong className="text-foreground">30 à 50 % sur le prix de vente</strong>, voire un refus pur et simple des acheteurs et des banques. Une remise en état préalable rentabilise quasi systématiquement l'investissement engagé par la succession.
                </p>
              </Card>
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                <figure className="bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg">
                  <div className="rounded-lg overflow-hidden">
                    <img src="/images/examples/toulouse1.webp" alt="Avant/Après remise en état d'un salon - succession" width={800} height={600} loading="lazy" className="w-full h-auto rounded-lg" />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-2 text-xs font-medium text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" /> Avant / Après - Salon
                  </figcaption>
                </figure>
                <figure className="bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg">
                  <div className="rounded-lg overflow-hidden">
                    <img src="/images/examples/toulouse2.webp" alt="Avant/Après remise en état de sanitaires" width={800} height={600} loading="lazy" className="w-full h-auto rounded-lg" />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-2 text-xs font-medium text-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full" /> Avant / Après - Sanitaires
                  </figcaption>
                </figure>
                <figure className="bg-card rounded-xl p-3 pb-4 border border-border/50 shadow-lg">
                  <div className="rounded-lg overflow-hidden">
                    <img src="/images/examples/toulouse3.webp" alt="Avant/Après remise en état d'une salle de bain" width={800} height={600} loading="lazy" className="w-full h-auto rounded-lg" />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-2 text-xs font-medium text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" /> Avant / Après - Salle de bain
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Section 1 : Diagnostic */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">1. Diagnostic et devis chiffré sous 24h</h2>
              </div>
              <Card className="p-6 space-y-3 text-foreground">
                <p className="text-muted-foreground leading-relaxed">
                  Nous évaluons l'intégralité du dossier à partir des photos transmises par l'étude, l'héritier ou le mandataire successoral. Le devis détaillé est remis sous 24h, utilisable directement par le notaire pour informer les héritiers et provisionner les frais de succession.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Évaluation du volume à débarrasser et de la nature des déchets (encombrants, DASRI, mobilier)</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Identification des risques : moisissures, nuisibles, fluides biologiques, amiante visible</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Devis ferme et définitif, valable pour intégration au dossier successoral</span></li>
                </ul>
              </Card>
            </div>

            {/* Section 2 : Tri documents */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">2. Tri des documents et préservation du patrimoine</h2>
              </div>
              <Card className="p-6 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Étape critique dans le cadre d'une succession. Notre équipe applique un protocole strict de mise sous scellés des documents administratifs et des objets de valeur, remis directement au notaire ou à l'héritier mandaté, avec inventaire signé.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Recherche systématique : actes notariés, titres de propriété, contrats d'assurance-vie, livrets bancaires</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Mise de côté des objets de valeur : bijoux, numéraire, montres, œuvres, photos de famille</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Conditionnement en bacs scellés étiquetés, inventaire écrit contresigné à la remise</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Décontamination à sec des documents souillés mais récupérables</span></li>
                </ul>
              </Card>
            </div>

            {/* Section 3 : Remise en état */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">3. Débarras, désinfection et remise en état "prêt à visiter"</h2>
              </div>
              <Card className="p-6 grid md:grid-cols-[1fr_220px] gap-6 items-start">
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Objectif : un bien présentable en visite, sans odeur, sans risque sanitaire, dans lequel un acquéreur peut se projeter et obtenir un financement bancaire. Nous traitons l'intégralité de la chaîne, du débarras jusqu'à la désinfection finale.
                  </p>
                  <ul className="space-y-2 pt-2">
                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Débarras complet avec évacuation en filière agréée (bordereaux de suivi remis)</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Nettoyage en profondeur des surfaces, sols, sanitaires et cuisine</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Désinfection virucide (norme EN 14476) et traitement des odeurs par ozone</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Dépose des revêtements imprégnés (moquettes, parquet, plâtre bas de mur) si nécessaire</span></li>
                  </ul>
                </div>
                <img src="/images/services/Désinfection.jpg" alt="Désinfection professionnelle d'un logement en succession" width="220" height="280" loading="lazy" className="w-full h-56 md:h-full object-cover rounded-lg border border-border" />
              </Card>
            </div>

            {/* Section 4 : Délais succession */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">4. Délais compatibles avec le calendrier successoral</h2>
              </div>
              <Card className="p-6 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Nous nous adaptons aux contraintes propres à la succession : option héréditaire (4 mois), déclaration de succession (6 mois), ou mise en vente rapide pour éviter l'accumulation de charges de copropriété et de fiscalité.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Devis sous 24h, intervention planifiable sous 72h en cas d'urgence</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Chantier moyen : 2 à 5 jours selon volume, logement rendu "prêt à visiter"</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Coordination possible avec l'agence immobilière et le diagnostiqueur</span></li>
                </ul>
              </Card>
            </div>

            {/* Section 5 : Attestation pour acte */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">5. Livrables joignables au dossier de vente</h2>
              </div>
              <Card className="p-6 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  À l'issue de l'intervention, nous remettons un dossier complet utilisable par le notaire pour sécuriser la vente et écarter tout vice caché lié à la salubrité du bien.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Attestation détaillée de remise en état et de désinfection (produits, normes, durées)</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Reportage photographique complet avant / après intervention</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Bordereaux de suivi des déchets (BSD / DASRI) avec exutoires identifiés</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Inventaire signé des documents et objets de valeur récupérés</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Attestation d'assurance RC Pro fournie sur simple demande</span></li>
                </ul>
              </Card>
            </div>

            {/* Section 6 : Facturation */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Key className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">6. Facturation et logistique simplifiées</h2>
              </div>
              <Card className="p-6 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Nous savons que les héritiers ne sont pas toujours disponibles localement, et que la trésorerie d'une succession peut être bloquée. Notre fonctionnement est conçu pour ne pas alourdir le travail de l'étude.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Récupération des clés directement à l'étude ou auprès d'un mandataire</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Facturation au nom de la succession, paiement à réception ou prélèvement sur le prix de vente via l'étude</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Interlocuteur unique par dossier, échanges par mail ou téléphone</span></li>
                </ul>
              </Card>
            </div>

            {/* Section 7 : Discrétion */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">7. Discrétion absolue vis-à-vis du voisinage</h2>
              </div>
              <Card className="p-6 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  La situation du défunt ne doit pas être exposée. Nos véhicules sont neutres, sans logo, nos équipes formées à la confidentialité et liées par un engagement écrit. Les interventions peuvent être planifiées en horaires décalés pour préserver l'image du bien avant sa mise en vente.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Véhicules banalisés et bennes bâchées</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Engagement de confidentialité signé par chaque intervenant</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Information préalable du syndic ou du gardien si copropriété</span></li>
                </ul>
              </Card>
            </div>

            {/* Encart info */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
               <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pourquoi traiter avant la mise en vente ?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Un bien insalubre exposé en visite décourage les acheteurs solvables, fait fuir les banques (refus de financement pour insalubrité visible) et expose la succession à un risque de contentieux pour vice caché. Une attestation d'assainissement annexée à l'acte protège vendeur comme notaire et restaure la pleine valeur de marché du bien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA téléphone */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Un dossier de succession à débloquer ?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Transmettez-nous quelques photos du bien, nous vous renvoyons un devis chiffré sous 24h, directement utilisable dans votre dossier successoral. Zone Occitanie et PACA.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+33767135458">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  07 67 13 54 58
                </Button>
              </a>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                <Mail className="w-5 h-5" />
                Envoyer une demande écrite
              </Button>
            </div>
          </div>
        </section>

        {/* Formulaire contact */}
        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default NotairesSuccessionContent;
