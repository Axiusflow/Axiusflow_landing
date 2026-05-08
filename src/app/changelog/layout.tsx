import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Changelog — Trading Journal & Personalized AI Updates",
  description:
    "Follow Axiusflow product updates across the trading journal, personalized AI, broker imports, supported auto sync, premium analytics, and performance improvements.",
  alternates: {
    canonical: `${siteUrl}/changelog`,
  },
  openGraph: {
    title: "Axiusflow Changelog",
    description:
      "All updates to Axiusflow's trading journal, personalized AI, broker imports, supported auto sync, and premium analytics.",
    url: `${siteUrl}/changelog`,
  },
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
