import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import NotairesSuccessionContent from "@/components/pages/NotairesSuccessionContent";

export const metadata: Metadata = buildMetadata("/notaires-succession");

export default function Page() {
  return <NotairesSuccessionContent />;
}
