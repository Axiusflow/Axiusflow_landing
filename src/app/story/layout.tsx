import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about Axiusflow's mission to empower retail traders with institutional-grade cloud charting and integrated trading journals.",
  alternates: {
    canonical: "https://axiusflow.com/story",
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
