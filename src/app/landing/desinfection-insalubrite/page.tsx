import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import LandingDesinfection from "@/components/landing/LandingDesinfection";

export const metadata: Metadata = buildMetadata("/landing/desinfection-insalubrite");

export default function Page() {
  return <LandingDesinfection />;
}
