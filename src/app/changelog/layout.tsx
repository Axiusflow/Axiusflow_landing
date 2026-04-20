import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog & Updates",
  description:
    "Discover the latest features, enhancements, and bug fixes for the Axiusflow trading platform. See how we're improving your charting and journaling experience.",
  alternates: {
    canonical: "https://axiusflow.com/changelog",
  },
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
