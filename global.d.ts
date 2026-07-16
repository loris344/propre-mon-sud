// `gtag_report_conversion` est injecté globalement par Google Tag Manager
// (GTM-T2V8JRGG, chargé dans app/layout.tsx). On déclare juste son type.
export {};

declare global {
  function gtag_report_conversion(url?: string): void;

  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    // Injecté par le Meta Pixel (posé via GTM, tag "Meta Pixel - Base Code").
    fbq?: (...args: unknown[]) => void;
  }
}
