import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import SyndromeDiogeneArticle from "./pages/articles/SyndromeDiogeneArticle";
import DebarrasApresDecesArticle from "./pages/articles/DebarrasApresDecesArticle";
import DesinfectionArticle from "./pages/articles/DesinfectionArticle";
import PreventionInsalubriteArticle from "./pages/articles/PreventionInsalubriteArticle";
import ServicePage from "./components/ServicePage";
import Header from "./components/Header";
import MJPMPartnership from "./pages/MJPMPartnership";
import DebarrasGrosVolumes from "./pages/DebarrasGrosVolumes";
import NettoyageApresDeces from "./pages/NettoyageApresDeces";
import NettoyageAppartementApresDeces from "./pages/NettoyageAppartementApresDeces";
import DesinfectionInsalubrite from "./pages/DesinfectionInsalubrite";
import MentionsLegales from "./pages/MentionsLegales";
import SyndromeDiogeneMontpellier from "./pages/SyndromeDiogeneMontpellier";
import SyndromeDiogeneSete from "./pages/SyndromeDiogeneSete";
import SyndromeDiogeneBeziers from "./pages/SyndromeDiogeneBeziers";
import SyndromeDiogeneNimes from "./pages/SyndromeDiogeneNimes";
import SyndromeDiogenePerpignan from "./pages/SyndromeDiogenePerpignan";
import SyndromeDiogeneMarseille from "./pages/SyndromeDiogeneMarseille";
import NettoyageApresDecesMarseille from "./pages/NettoyageApresDecesMarseille";
import TousNosServices from "./pages/TousNosServices";
import EntrepriseNettoyageMontpellier from "./pages/EntrepriseNettoyageMontpellier";
import EntrepriseNettoyageMarseille from "./pages/EntrepriseNettoyageMarseille";
import MeilleuresSocietesNettoyageMontpellier from "./pages/MeilleuresSocietesNettoyageMontpellier";
import PrixDiogene from "./pages/PrixDiogene";

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        
        {/* Routes des articles de blog */}
        <Route path="/blog/syndrome-diogene-identifier-gerer" element={<SyndromeDiogeneArticle />} />
        <Route path="/blog/debarras-apres-deces-accompagnement" element={<DebarrasApresDecesArticle />} />
        <Route path="/blog/desinfection-assainissement-protocoles" element={<DesinfectionArticle />} />
        <Route path="/blog/prevention-insalubrite-conseils" element={<PreventionInsalubriteArticle />} />
        
        {/* Nouvelles pages complètes */}
        <Route path="/debarras-gros-volumes" element={<DebarrasGrosVolumes />} />
        <Route path="/nettoyage-apres-deces" element={<NettoyageApresDeces />} />
        <Route path="/nettoyage-appartement-apres-deces" element={<NettoyageAppartementApresDeces />} />
        <Route path="/desinfection-insalubrite" element={<DesinfectionInsalubrite />} />
        
        {/* Routes de services - pages spécifiques par ville */}
        <Route path="/nettoyage-syndrome-diogene-montpellier" element={<SyndromeDiogeneMontpellier />} />
        <Route path="/nettoyage-syndrome-diogene-sete" element={<SyndromeDiogeneSete />} />
        <Route path="/nettoyage-syndrome-diogene-beziers" element={<SyndromeDiogeneBeziers />} />
        <Route path="/nettoyage-syndrome-diogene-nimes" element={<SyndromeDiogeneNimes />} />
        <Route path="/nettoyage-syndrome-diogene-perpignan" element={<SyndromeDiogenePerpignan />} />
        <Route path="/nettoyage-syndrome-diogene-marseille" element={<SyndromeDiogeneMarseille />} />
        <Route path="/nettoyage-apres-deces-marseille" element={<NettoyageApresDecesMarseille />} />
        <Route path="/tous-nos-services" element={<TousNosServices />} />
        <Route path="/entreprise-nettoyage-montpellier" element={<EntrepriseNettoyageMontpellier />} />
        <Route path="/entreprise-nettoyage-marseille" element={<EntrepriseNettoyageMarseille />} />
        <Route path="/meilleures-societes-nettoyage-montpellier" element={<MeilleuresSocietesNettoyageMontpellier />} />
        <Route path="/prix-diogene" element={<PrixDiogene />} />
        
        <Route path="/debarras-gros-volumes-montpellier" element={<ServicePage />} />
        
        <Route path="/desinfection-insalubrite-montpellier" element={<ServicePage />} />
        
        <Route path="/nettoyage-apres-deces-montpellier" element={<ServicePage />} />
        <Route path="/nettoyage-apres-deces-nimes" element={<ServicePage />} />
        
        <Route path="/nettoyage-insalubre-montpellier" element={<ServicePage />} />
        <Route path="/nettoyage-insalubre-nimes" element={<ServicePage />} />
        
        {/* Route partenariat MJPM (non visible publiquement) */}
        <Route path="/partenariat-mjpm" element={<MJPMPartnership />} />
        
        {/* Route mentions légales */}
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        
        {/* Route 404 */}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;