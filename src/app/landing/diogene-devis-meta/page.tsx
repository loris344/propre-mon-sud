import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import LandingDiogeneMeta from "@/components/landing/LandingDiogeneMeta";

export const metadata: Metadata = buildMetadata("/landing/diogene-devis-meta");

export default function Page() {
  return <LandingDiogeneMeta />;
}
