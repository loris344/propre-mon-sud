import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import LandingDiogene from "@/components/landing/LandingDiogene";

export const metadata: Metadata = buildMetadata("/landing/nettoyage-syndrome-diogene");

export default function Page() {
  return <LandingDiogene />;
}
