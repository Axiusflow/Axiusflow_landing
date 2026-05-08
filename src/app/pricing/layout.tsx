import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Trading Journal Pricing — Axiusflow Pro at $20/Month",
  description:
    "Axiusflow Pro is one premium trading journal plan at $20/month or $192/year. Personalized AI, broker imports, supported auto sync, and analytics in a modern workspace.",
  alternates: {
    canonical: `${siteUrl}/pricing`,
  },
  openGraph: {
    title: "Axiusflow Pricing — One Pro Plan at $20/Month",
    description:
      "One serious plan. Personalized AI trading journal with broker imports, supported auto sync, and premium analytics for $20/month or $192/year.",
    url: `${siteUrl}/pricing`,
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
