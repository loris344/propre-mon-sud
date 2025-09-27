import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { preloadCriticalResources } from "./lib/performance.ts";

// Optimisations de performance au démarrage
if (typeof window !== 'undefined') {
  // Préchargement des ressources critiques
  preloadCriticalResources();
  
  // Optimisation du scroll
  import('./lib/performance.ts').then(({ optimizeScrollPerformance }) => {
    optimizeScrollPerformance();
  });
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Élément root non trouvé!");
  document.body.innerHTML = "<h1>ERREUR: Élément root non trouvé!</h1>";
} else {
  const root = createRoot(rootElement);
  root.render(<App />);
}