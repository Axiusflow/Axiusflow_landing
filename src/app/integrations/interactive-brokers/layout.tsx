import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Interactive Brokers Trading Journal — Axiusflow",
  description:
    "Use Axiusflow as your Interactive Brokers (IBKR) trading journal. Import IBKR trades into a modern workspace with personalized AI, premium analytics, and clean review.",
  alternates: { canonical: `${siteUrl}/integrations/interactive-brokers` },
  openGraph: {
    title: "Interactive Brokers Trading Journal — Axiusflow",
    description:
      "Modern IBKR trading journal with personalized AI, broker imports, and premium analytics.",
    url: `${siteUrl}/integrations/interactive-brokers`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
