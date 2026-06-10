import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import LandingApresDeces from "@/components/landing/LandingApresDeces";

export const metadata: Metadata = buildMetadata("/landing/nettoyage-apres-deces");

export default function Page() {
  return <LandingApresDeces />;
}
