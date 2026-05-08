import { AxiusflowLandingPage } from "@/components/axiusflow-landing";
import {
  faqItems,
  ogImageHeight,
  ogImageUrl,
  ogImageWidth,
  proPriceMonthlyUSD,
  proPriceYearlyUSD,
  siteDescription,
  siteName,
  siteUrl,
  socialLinks,
} from "@/lib/seo";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo_transparent.svg`,
        },
        sameAs: [
          socialLinks.twitter,
          socialLinks.linkedin,
          socialLinks.discord,
          socialLinks.github,
        ],
        founder: {
          "@type": "Person",
          name: "Devraj",
          url: `${siteUrl}/story`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#software`,
        name: siteName,
        applicationCategory: "FinanceApplication",
        applicationSubCategory: "TradingJournal",
        operatingSystem: "Web",
        url: siteUrl,
        image: {
          "@type": "ImageObject",
          url: ogImageUrl,
          width: ogImageWidth,
          height: ogImageHeight,
        },
        description: siteDescription,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: proPriceMonthlyUSD,
          highPrice: proPriceYearlyUSD,
          offerCount: 2,
          offers: [
            {
              "@type": "Offer",
              name: "Axiusflow Pro Monthly",
              price: proPriceMonthlyUSD,
              priceCurrency: "USD",
              url: `${siteUrl}/pricing`,
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: proPriceMonthlyUSD,
                priceCurrency: "USD",
                billingIncrement: 1,
                unitCode: "MON",
              },
            },
            {
              "@type": "Offer",
              name: "Axiusflow Pro Yearly",
              price: proPriceYearlyUSD,
              priceCurrency: "USD",
              url: `${siteUrl}/pricing`,
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: proPriceYearlyUSD,
                priceCurrency: "USD",
                billingIncrement: 12,
                unitCode: "ANN",
              },
            },
          ],
        },
        featureList: [
          "Trading journal",
          "Personalized AI trade reviews",
          "Broker and CSV trade imports",
          "Supported broker auto sync",
          "Premium analytics dashboard",
          "Trade tagging, notes, and screenshots",
          "Behavior pattern detection",
          "Modern, premium UI",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <AxiusflowLandingPage />
    </>
  );
}
