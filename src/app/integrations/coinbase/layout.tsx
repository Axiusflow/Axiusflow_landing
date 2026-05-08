import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Coinbase Crypto Trading Journal — Axiusflow",
  description:
    "Axiusflow is the modern Coinbase crypto trading journal. Import Coinbase trades, tag setups, and review every session with personalized AI in a premium workspace.",
  alternates: { canonical: `${siteUrl}/integrations/coinbase` },
  openGraph: {
    title: "Coinbase Crypto Trading Journal — Axiusflow",
    description:
      "Modern Coinbase crypto journal with personalized AI, imports, and premium analytics.",
    url: `${siteUrl}/integrations/coinbase`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
