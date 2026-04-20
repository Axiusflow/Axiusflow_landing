import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axiusflow.com"),
  title: {
    default: "Axiusflow | Cloud Charting & Integrated Trading Platform",
    template: "%s | Axiusflow",
  },
  description:
    "Axiusflow brings cloud-native charting, real-time market data, trade replay, and an integrated trading journal into one deliberate review loop for active traders and investors.",
  keywords: [
    "trading platform",
    "cloud charting",
    "trading journal",
    "financial charting tools",
    "real-time market data",
    "multi-timeframe analysis",
    "trading terms",
    "in trading terms",
    "stock market analysis",
    "day trading software",
    "broker integrations",
  ],
  authors: [{ name: "Axiusflow Team", url: "https://axiusflow.com" }],
  creator: "Axiusflow",
  publisher: "Axiusflow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Axiusflow | Advanced Cloud Charting & Trading Journal",
    description: "Cloud-native charting, real-time market data, and an integrated trading journal. Professional-grade tools to analyze markets and execute trades.",
    url: "https://axiusflow.com",
    siteName: "Axiusflow",
    images: [
      {
        url: "/brand/og-image.jpg", // Ensure this image exists or serves as a placeholder
        width: 1200,
        height: 630,
        alt: "Axiusflow Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiusflow | Professional Trading & Charting Platform",
    description: "Cloud-native charting, real-time market data, and an integrated trading journal.",
    creator: "@axiusflow", // Optional: Update if there is an official handle
    images: ["/brand/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/brand/logo_transparent.svg",
    shortcut: "/brand/logo_transparent.svg",
    apple: "/brand/logo_transparent.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} h-full scroll-smooth antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
