import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Day Trading Journal with Personalized AI — Axiusflow",
  description:
    "Axiusflow is the modern day trading journal for active traders. Personalized AI, broker imports, and premium analytics built for scalpers, momentum, and intraday traders.",
  alternates: { canonical: `${siteUrl}/for/day-traders` },
  openGraph: {
    title: "Day Trading Journal — Axiusflow",
    description:
      "Modern day trading journal with personalized AI, broker imports, and premium analytics.",
    url: `${siteUrl}/for/day-traders`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
