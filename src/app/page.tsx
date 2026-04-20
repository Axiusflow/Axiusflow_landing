import { AxiusflowLandingPage } from "@/components/axiusflow-landing";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Axiusflow",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web, Cloud",
    "description": "Cloud-native charting, real-time market data, and an integrated trading journal for professional traders and investors. Seamless broker integrations included.",
    "url": "https://axiusflow.com",
    "publisher": {
      "@type": "Organization",
      "name": "Axiusflow",
      "url": "https://axiusflow.com",
      "logo": "https://axiusflow.com/brand/logo_transparent.svg"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free tier available for basic charting and journaling."
    },
    "featureList": [
      "Multi-Timeframe Analysis",
      "Real-time Market Data",
      "Integrated Trading Journal",
      "Smart Price Alerts",
      "Global Market Sessions",
      "Broker Integrations"
    ]
  };

  return (
    <>
      <Script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AxiusflowLandingPage />
    </>
  );
}
