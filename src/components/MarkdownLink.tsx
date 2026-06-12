import Link from "next/link";
import { isUrlPublished } from "@/lib/seo-pages";

/**
 * Lien markdown AUTO-ACTIVANT : si la cible interne n'est pas encore publiée
 * (publication goutte-à-goutte), on rend le texte sans lien — jamais de 404.
 * Le rebuild quotidien qui suit la publication de la cible transforme
 * automatiquement le texte en vrai lien, sans toucher au MDX.
 * Les liens externes s'ouvrent en nouvel onglet (noopener noreferrer).
 */
export default function MarkdownLink({
  href,
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  const h = href || "";
  if (h.startsWith("/")) {
    if (!isUrlPublished(h)) return <span>{children}</span>;
    const norm = h.split("#")[0].endsWith("/") || h.includes("#") ? h : `${h}/`;
    return <Link href={norm}>{children}</Link>;
  }
  return (
    <a href={h} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
