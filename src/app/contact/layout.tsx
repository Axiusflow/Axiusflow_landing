import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Axiusflow — Trading Journal Team",
  description:
    "Contact the Axiusflow team. Discuss broker imports, supported auto sync, personalized AI, and how Axiusflow Pro fits your active trading workflow.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Axiusflow",
    description:
      "Reach the Axiusflow team about broker imports, supported auto sync, personalized AI, and integrations.",
    url: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
