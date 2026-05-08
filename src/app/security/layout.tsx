import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Security — How Axiusflow Protects Your Trading Data",
  description:
    "How Axiusflow handles trading data security: read-only broker imports, encryption in transit and at rest, no credential storage, and clear data ownership.",
  alternates: { canonical: `${siteUrl}/security` },
  openGraph: {
    title: "Axiusflow Security",
    description:
      "How Axiusflow protects your trading data — encryption, read-only imports, and clear data ownership.",
    url: `${siteUrl}/security`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
