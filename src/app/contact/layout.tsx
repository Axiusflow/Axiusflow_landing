import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Support",
  description:
    "Need help with your Axiusflow charting platform or trading journal? Reach out to our support team and get fast assistance.",
  alternates: {
    canonical: "https://axiusflow.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
