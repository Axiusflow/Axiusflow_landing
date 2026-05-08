import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "NinjaTrader Trading Journal — Axiusflow",
  description:
    "The modern NinjaTrader trading journal. Import NinjaTrader futures fills, tag setups, and let personalized AI review every session inside a premium workspace.",
  alternates: { canonical: `${siteUrl}/integrations/ninjatrader` },
  openGraph: {
    title: "NinjaTrader Trading Journal — Axiusflow",
    description:
      "Modern NinjaTrader journal with personalized AI, futures imports, and premium analytics.",
    url: `${siteUrl}/integrations/ninjatrader`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
