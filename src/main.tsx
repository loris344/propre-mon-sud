import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  document.body.innerHTML = "<h1>ERREUR: Élément root non trouvé!</h1>";
} else {
  const root = createRoot(rootElement);
  
  // Rendu immédiat sans attendre PostHog
  root.render(<App />);

  // Charger PostHog de manière asynchrone après le rendu initial
  requestIdleCallback(() => {
    import("posthog-js").then(({ default: posthog }) => {
      posthog.init("phc_yfy5hw92dKEGdcfSC98cTGzNK8nxgJvwunnLFTSznXNc", {
        api_host: "https://eu.i.posthog.com",
        loaded: (ph) => ph.capture("$pageview"),
      });
    });
  });
}
