import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import LandingOdeursNuisibles from "@/components/landing/LandingOdeursNuisibles";

export const metadata: Metadata = buildMetadata("/landing/traitement-odeurs-nuisibles");

export default function Page() {
  return <LandingOdeursNuisibles />;
}
