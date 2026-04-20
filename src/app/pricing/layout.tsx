import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "Choose the right plan for your trading journey. Axiusflow offers flexible pricing for day traders, swing traders, and active investors.",
  alternates: {
    canonical: "https://axiusflow.com/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
