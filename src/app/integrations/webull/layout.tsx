import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Webull Trading Journal — Axiusflow",
  description:
    "Axiusflow is the modern Webull trading journal. Import Webull stock and options trades into a premium workspace with personalized AI and clean analytics.",
  alternates: { canonical: `${siteUrl}/integrations/webull` },
  openGraph: {
    title: "Webull Trading Journal — Axiusflow",
    description:
      "Modern Webull journal with personalized AI, broker imports, and premium analytics.",
    url: `${siteUrl}/integrations/webull`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
