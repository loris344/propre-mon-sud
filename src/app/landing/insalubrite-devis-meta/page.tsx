import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import LandingInsalubriteMeta from "@/components/landing/LandingInsalubriteMeta";

export const metadata: Metadata = buildMetadata("/landing/insalubrite-devis-meta");

export default function Page() {
  return <LandingInsalubriteMeta />;
}
