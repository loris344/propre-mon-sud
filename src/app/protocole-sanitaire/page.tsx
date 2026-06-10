import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ProtocoleSanitaireContent from "@/components/pages/ProtocoleSanitaireContent";

export const metadata: Metadata = buildMetadata("/protocole-sanitaire");

export default function Page() {
  return <ProtocoleSanitaireContent />;
}
