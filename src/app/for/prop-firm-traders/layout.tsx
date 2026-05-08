import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Prop Firm Trading Journal — Axiusflow",
  description:
    "Axiusflow is the modern prop firm trading journal for FTMO, Topstep, Apex, MyForexFunds, and challenge accounts. Personalized AI, imports, and premium analytics built for prop traders.",
  alternates: { canonical: `${siteUrl}/for/prop-firm-traders` },
  openGraph: {
    title: "Prop Firm Trading Journal — Axiusflow",
    description:
      "Modern prop firm journal with personalized AI, broker imports, and premium analytics.",
    url: `${siteUrl}/for/prop-firm-traders`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
