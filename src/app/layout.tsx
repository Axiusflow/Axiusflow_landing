import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  ogImageUrl,
  ogImageHeight,
  ogImageWidth,
  seoKeywords,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: seoKeywords,
  authors: [{ name: "Devraj", url: `${siteUrl}/story` }],
  creator: siteName,
  publisher: siteName,
  category: "finance",
  alternates: {
    canonical: siteUrl,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Axiusflow — Smart Trading Journal with Personalized AI",
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: ogImageUrl,
        width: ogImageWidth,
        height: ogImageHeight,
        alt: "Axiusflow trading journal with personalized AI, broker imports, and premium analytics workspace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiusflow — Smart Trading Journal with Personalized AI",
    description: siteDescription,
    images: [ogImageUrl],
    creator: "@axiusflow",
    site: "@axiusflow",
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
    icon: [
      { url: "/logo_transparent.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo_transparent.svg",
    apple: "/logo_transparent.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-1T17567X8V`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1T17567X8V', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

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
