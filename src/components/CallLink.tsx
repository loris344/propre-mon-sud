"use client";

/**
 * Lien d'appel téléphonique avec suivi de conversion Google Ads.
 * Composant client (à cause du onClick) utilisable depuis des pages serveur.
 */
export default function CallLink({
  phone,
  className,
  children,
}: {
  phone: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`tel:${phone}`}
      onClick={() => gtag_report_conversion()}
      className={className}
    >
      {children}
    </a>
  );
}
