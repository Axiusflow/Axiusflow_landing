import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Axiusflow vs Tradezella — The Modern Trading Journal Alternative",
  description:
    "Compare Axiusflow and Tradezella. Axiusflow is the modern trading journal alternative with personalized AI, premium UI, broker imports, and supported auto sync — built for active traders.",
  alternates: {
    canonical: `${siteUrl}/vs/tradezella`,
  },
  openGraph: {
    title: "Axiusflow vs Tradezella — Modern Trading Journal Alternative",
    description:
      "Why traders are switching from Tradezella to Axiusflow: personalized AI, premium UI, and a focused review workspace.",
    url: `${siteUrl}/vs/tradezella`,
  },
};

export default function VsTradezellaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
