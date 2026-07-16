"use client";

import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const teamMembers = [
  { src: "/images/loris-photo.webp", alt: "Loris" },
  { src: "/images/team/paul.webp", alt: "Paul" },
  { src: "/images/team/aymeric.webp", alt: "Aymeric" },
];

// Landing pages Meta Ads : la mention "non surtaxé" y est retirée à la demande
// du client (pas de tracking d'appel Google Ads dessus, mention jugée superflue).
const NON_SURTAXE_EXCLUDED_PATHS = ["/landing/diogene-devis-meta", "/landing/insalubrite-devis-meta"];

const PhoneToast = () => {
  const pathname = usePathname();
  // Mention "non surtaxé" uniquement sur les landing pages Google Ads : le
  // numéro peut y être swappé en 08/09 par le tracking d'appels (voir
  // CallTracking.tsx), ce qui peut inquiéter le visiteur.
  const isLandingPage =
    pathname?.startsWith("/landing/") &&
    !NON_SURTAXE_EXCLUDED_PATHS.some((path) => pathname.startsWith(path));

  return (
    <div className="fixed bottom-3 left-3 z-50 flex flex-col items-start gap-1">
      {isLandingPage && (
        <span className="ml-1 rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-accent-foreground shadow-md">
          Numéro non surtaxé
        </span>
      )}
      <a
        href="tel:0767135458"
        aria-label="Appeler le 07 67 13 54 58"
        onClick={() => gtag_report_conversion()}
        className="flex items-center gap-2 rounded-full bg-primary px-2.5 py-2 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15">
          <Phone className="h-4 w-4" />
        </div>

        <span className="whitespace-nowrap text-[13px] font-semibold leading-none sm:text-sm">
          07 67 13 54 58
        </span>

        <div className="flex shrink-0 items-center rounded-full bg-primary-foreground/15 px-1.5 py-1">
          <div className="flex -space-x-2.5">
            {teamMembers.map((member) => (
              <img
                key={member.alt}
                src={member.src}
                alt={member.alt}
                className="h-7 w-7 rounded-full object-cover object-top ring-2 ring-primary"
              />
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default PhoneToast;
