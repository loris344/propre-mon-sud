import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/index.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import PhoneToast from "@/components/PhoneToast";
import Analytics from "@/components/Analytics";
import { SITE_URL } from "@/lib/structured-data";
import { getServiceHubs } from "@/lib/seo-pages";

const GTM_ID = "GTM-T2V8JRGG";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SOS Nettoyage Diogène | Nettoyage & Débarras Sud France",
    template: "%s",
  },
  description:
    "Société spécialisée dans le nettoyage syndrome de Diogène, débarras, insalubrité et nettoyage après décès. Intervention discrète à Montpellier, Marseille et tout le Sud de la France.",
  authors: [{ name: "SOS Nettoyage Diogène" }],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "SOS Nettoyage Diogène",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e40af",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // LocalBusiness JSON-LD : émis sur la page d'accueil uniquement (reco
    // Google), pas ici — sinon il serait dupliqué sur les centaines de
    // pages SEO qui le référencent déjà via provider @id.
    <html lang="fr">
      <body>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Providers>
          <PhoneToast />
          <Header services={getServiceHubs()} />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
