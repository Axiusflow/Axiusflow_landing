import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Axiusflow — Smart Trading Journal with Personalized AI",
    short_name: "Axiusflow",
    description:
      "A modern trading journal with personalized AI, broker imports, supported auto sync, and premium analytics for active traders.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo_transparent.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    categories: ["finance", "productivity", "business"],
  };
}
