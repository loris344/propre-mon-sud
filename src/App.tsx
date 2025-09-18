import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocationProvider } from "@/contexts/LocationContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDiogene from "./pages/ServiceDiogene";
import ServiceDebarras from "./pages/ServiceDebarras";
import ServiceDesinfection from "./pages/ServiceDesinfection";
import ServiceNettoyageApresDeces from "./pages/ServiceNettoyageApresDeces";
import ServiceNettoyageInsalubre from "./pages/ServiceNettoyageInsalubre";
import Header from "./components/Header";

const App = () => (
  <LocationProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nettoyage-syndrome-diogene-montpellier" element={<ServiceDiogene />} />
          <Route path="/nettoyage-syndrome-diogene-sete" element={<ServiceDiogene />} />
          <Route path="/nettoyage-syndrome-diogene-beziers" element={<ServiceDiogene />} />
          <Route path="/nettoyage-syndrome-diogene-nimes" element={<ServiceDiogene />} />
          <Route path="/nettoyage-syndrome-diogene-perpignan" element={<ServiceDiogene />} />
          <Route path="/debarras-gros-volumes-montpellier" element={<ServiceDebarras />} />
          <Route path="/desinfection-insalubrite-montpellier" element={<ServiceDesinfection />} />
          <Route path="/nettoyage-apres-deces-montpellier" element={<ServiceNettoyageApresDeces />} />
          <Route path="/nettoyage-apres-deces-nimes" element={<ServiceNettoyageApresDeces />} />
          <Route path="/nettoyage-insalubre-montpellier" element={<ServiceNettoyageInsalubre />} />
          <Route path="/nettoyage-insalubre-nimes" element={<ServiceNettoyageInsalubre />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </LocationProvider>
);

export default App;
