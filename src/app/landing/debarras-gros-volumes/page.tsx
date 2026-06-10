import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import LandingDebarras from "@/components/landing/LandingDebarras";

export const metadata: Metadata = buildMetadata("/landing/debarras-gros-volumes");

export default function Page() {
  return <LandingDebarras />;
}
