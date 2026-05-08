import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "TradeStation Trading Journal — Axiusflow",
  description:
    "Axiusflow is the modern TradeStation trading journal. Import equities, options, and futures trades, tag setups, and review every session with personalized AI.",
  alternates: { canonical: `${siteUrl}/integrations/tradestation` },
  openGraph: {
    title: "TradeStation Trading Journal — Axiusflow",
    description:
      "Modern TradeStation journal with personalized AI, broker imports, and premium analytics.",
    url: `${siteUrl}/integrations/tradestation`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
