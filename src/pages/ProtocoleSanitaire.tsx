import { Phone, Shield, Droplets, FileText, Biohazard, Recycle, CheckCircle2, AlertTriangle, ClipboardCheck, FlaskConical, HardHat, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ProtocoleSanitaire = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEOHead
        title="Fiche Protocole Sanitaire | SOS Nettoyage Diogène"
        description="Protocole sanitaire d'intervention en logement insalubre : traitement des odeurs, gestion des risques biologiques, tri et préservation des documents. Document à joindre aux rapports CCAS et préfecture."
        canonical="/protocole-sanitaire"
        noIndex={true}
      />
      <main className="min-h-screen bg-background">
        {/* En-tête document */}
        <section className="pt-32 sm:pt-40 pb-12 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              <FileText className="w-3.5 h-3.5" />
              Document de référence
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Fiche Protocole Sanitaire
            </h1>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              Protocole d'intervention en logement insalubre, syndrome de Diogène et après décès. Document destiné aux CCAS, MJPM, services sociaux et autorités préfectorales pour annexer aux rapports d'évaluation ou aux procédures d'insalubrité.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-8 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Traitement des odeurs
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Risques biologiques maîtrisés
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Tri et préservation des documents
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 : Évaluation */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">1. Évaluation préalable et diagnostic</h2>
              </div>
              <Card className="p-6 space-y-3 text-foreground">
                <p className="text-muted-foreground leading-relaxed">
                  Avant chaque intervention, notre équipe réalise un diagnostic à distance via photos et entretien téléphonique avec le donneur d'ordre (CCAS, MJPM, famille, bailleur). Cette phase permet de classer la situation selon le degré d'encombrement, le risque sanitaire estimé et la présence éventuelle de fluides biologiques.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Classification du logement selon l'échelle de Clutter Image Rating (niveaux 1 à 9)</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Identification des risques : punaises, rongeurs, moisissures, fluides corporels, seringues</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Évaluation du volume à débarrasser et planification de la benne adaptée</span></li>
                </ul>
              </Card>
            </div>

            {/* Section 2 : Sécurisation et EPI */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HardHat className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">2. Sécurisation du chantier et équipements de protection</h2>
              </div>
              <Card className="p-6 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Chaque intervenant est équipé d'EPI conformes à la norme EN 14126 (protection contre les agents infectieux) afin de garantir sa propre sécurité et celle du voisinage.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Combinaison jetable type 5/6, gants nitrile double épaisseur, surchaussures</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Demi-masque FFP3 ou masque complet à cartouche A2P3 selon contexte</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Balisage de la zone, protection des parties communes (films plastiques, tapis de propreté)</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Mise en dépression du logement si nécessaire pour limiter la diffusion d'odeurs</span></li>
                </ul>
              </Card>
            </div>

            {/* Section 3 : Tri documents */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">3. Tri et préservation des documents</h2>
              </div>
              <Card className="p-6 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Le tri des documents administratifs, valeurs et objets personnels est une étape sensible, particulièrement dans le cadre d'une mesure de protection (tutelle, curatelle) ou d'une succession. Notre équipe applique un protocole rigoureux de mise sous scellés.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Séparation systématique : papiers d'identité, documents bancaires, factures, courriers administratifs</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Conditionnement en bacs scellés étiquetés, remis en main propre au donneur d'ordre</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Mise de côté des objets de valeur (bijoux, numéraire, photos) avec inventaire signé</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Décontamination des documents souillés par nébulisation à sec si récupérables</span></li>
                </ul>
              </Card>
            </div>

            {/* Section 4 : Risques biologiques */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Biohazard className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">4. Gestion des risques biologiques</h2>
              </div>
              <Card className="p-6 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Les fluides biologiques, déjections animales, denrées putréfiées et nuisibles représentent un risque infectieux réel. Notre protocole respecte les recommandations de l'INRS et de l'ARS.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Pré-désinfection à la pulvérisation avant manipulation (peroxyde d'hydrogène 5%)</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Conditionnement des déchets souillés en sacs DASRI jaunes, double emballage normé NF X30-501</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Élimination via filière agréée avec bordereau de suivi (BSDA / CERFA 11352)</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Traitement des nuisibles en partenariat avec entreprise certifiée Certibiocide</span></li>
                </ul>
              </Card>
            </div>

            {/* Section 5 : Désinfection / odeurs */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">5. Désinfection et traitement des odeurs</h2>
              </div>
              <Card className="p-6 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Une fois le logement vidé et nettoyé, nous procédons à une désinfection complète des surfaces et de l'air ambiant. Le traitement olfactif est indispensable pour permettre la remise en location ou le retour de l'occupant.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><Droplets className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Nettoyage haute pression des surfaces lessivables avec détergent désinfectant virucide (norme EN 14476)</span></li>
                  <li className="flex gap-3"><Droplets className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Désinfection par voie aérienne (DSVA) au peroxyde d'hydrogène pour les zones inaccessibles</span></li>
                  <li className="flex gap-3"><Droplets className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Traitement anti-odeurs par générateur d'ozone et neutralisateurs moléculaires</span></li>
                  <li className="flex gap-3"><Droplets className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Si nécessaire : dépose des revêtements imprégnés (moquettes, parquet, plâtre bas de mur)</span></li>
                </ul>
              </Card>
            </div>

            {/* Section 6 : Traçabilité */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">6. Traçabilité et remise du dossier</h2>
              </div>
              <Card className="p-6 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  À l'issue de l'intervention, un dossier complet est remis au donneur d'ordre. Il peut être joint à un rapport de visite, une procédure d'insalubrité menée par l'ARS ou un signalement préfectoral.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Reportage photographique avant / pendant / après intervention</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Bordereaux de suivi des déchets (BSD / DASRI) avec exutoires identifiés</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Attestation d'intervention détaillée avec produits utilisés et durées d'application</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Inventaire signé des objets de valeur et documents remis</span></li>
                </ul>
              </Card>
            </div>

            {/* Section 7 : Confidentialité */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">7. Discrétion et respect du voisinage</h2>
              </div>
              <Card className="p-6 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Nos véhicules sont neutres (sans logo apparent), nos équipes formées à la confidentialité. Les interventions peuvent être planifiées en horaires décalés pour préserver l'intimité de l'occupant et limiter la gêne du voisinage.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Engagement de confidentialité signé par chaque intervenant</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Information préalable du syndic ou du gardien si copropriété</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>Évacuation des déchets en bennes bâchées</span></li>
                </ul>
              </Card>
            </div>

            {/* Encart info */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Document opposable</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Cette fiche peut être annexée à tout rapport CCAS, MJPM, ARS ou préfectoral dans le cadre d'une procédure d'insalubrité (articles L1331-22 à L1331-30 du Code de la santé publique). Sur demande, nous fournissons également nos attestations d'assurance RC Pro et nos certificats de formation aux risques biologiques.
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
              Besoin d'un protocole adapté à un dossier précis ?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Notre équipe (Loris, Paul, Aymeric) répond directement aux travailleurs sociaux, MJPM et services CCAS. Devis gratuit à distance sous 24h.
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

export default ProtocoleSanitaire;