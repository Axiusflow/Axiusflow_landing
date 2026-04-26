import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
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
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: seoKeywords,
  authors: [{ name: "Axiusflow Team", url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "finance",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Axiusflow - Trading Journal, Replay & AI Review Platform",
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: ogImageUrl,
        width: ogImageWidth,
        height: ogImageHeight,
        alt: "Axiusflow trading journal, replay, AI review, and crypto charting workspace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiusflow - Trading Journal, Replay & AI Review Platform",
    description: siteDescription,
    images: [ogImageUrl],
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
    icon: "/logo_transparent.svg",
    shortcut: "/logo_transparent.svg",
    apple: "/logo_transparent.svg",
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
