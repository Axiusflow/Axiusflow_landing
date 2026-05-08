import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Futures Trading Journal with Personalized AI — Axiusflow",
  description:
    "Axiusflow is the modern futures trading journal for ES, NQ, MES, MNQ, CL, GC, and prop firm contracts. Personalized AI, broker imports, and premium analytics for serious futures traders.",
  alternates: { canonical: `${siteUrl}/for/futures-traders` },
  openGraph: {
    title: "Futures Trading Journal — Axiusflow",
    description:
      "Modern futures trading journal with personalized AI, NinjaTrader and Tradovate imports, and premium analytics.",
    url: `${siteUrl}/for/futures-traders`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
