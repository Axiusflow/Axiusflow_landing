import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Story — Building a Modern Trading Journal with Personalized AI",
  description:
    "How Axiusflow is being built — a premium trading journal with personalized AI, broker imports, and a calm, modern workspace for active traders.",
  alternates: {
    canonical: `${siteUrl}/story`,
  },
  openGraph: {
    title: "Our Story — Building Axiusflow",
    description:
      "A solo founder's journey to build the modern trading journal active traders deserve, with personalized AI and a premium workspace.",
    url: `${siteUrl}/story`,
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
