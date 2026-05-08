import { LandingTemplate } from "@/components/landing-template";

export default function Page() {
  return (
    <LandingTemplate
      eyebrow="Coinbase Integration"
      h1="The Modern Coinbase Crypto Trading Journal"
      intro="Axiusflow turns your Coinbase trade history into a serious crypto review workflow. Import trades, tag setups, and let personalized AI surface what's actually working across your spot crypto activity."
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Integrations", path: "/integrations/coinbase" },
        { name: "Coinbase", path: "/integrations/coinbase" },
      ]}
      heroLogo={{ src: "/broker_logo/coinbase.png", name: "Coinbase" }}
      relatedBrokers={{
        heading: "Also use Axiusflow with these crypto exchanges",
        logos: [
          { src: "/broker_logo/binance.png", name: "Binance" },
          { src: "/broker_logo/kraken.png", name: "Kraken" },
        ],
      }}
      pillars={[
        { title: "Coinbase CSV imports", body: "Pull your Coinbase trade history into Axiusflow — fills, pairs, fees, and timestamps map automatically." },
        { title: "Personalized AI for crypto", body: "AI trained on your own crypto trades surfaces patterns specific to spot crypto behavior." },
        { title: "Premium analytics", body: "Win rate, R-multiple, expectancy, and tag breakdowns inside a clean, modern UI." },
      ]}
      featureGroups={[
        {
          title: "Imports & Sync",
          rows: [
            { label: "Coinbase trade history CSV", status: "available" },
            { label: "Pair normalization (BTC, ETH, USDC, USDT, USD)", status: "available" },
            { label: "Spot crypto trades", status: "available" },
            { label: "Bulk historical imports", status: "available" },
            { label: "Direct Coinbase API auto sync", status: "coming-soon" },
            { label: "Perpetuals & futures", status: "coming-soon" },
          ],
        },
        {
          title: "Personalized AI",
          rows: [
            { label: "AI trained on your own crypto trades", status: "available" },
            { label: "Overnight gap and weekend volatility patterns", status: "available" },
            { label: "Oversizing and altcoin behavior detection", status: "available" },
            { label: "Personalized review prompts", status: "available" },
          ],
        },
        {
          title: "Workspace & Analytics",
          rows: [
            { label: "Premium UI built for crypto review", status: "available" },
            { label: "Win rate, R-multiple, expectancy", status: "available" },
            { label: "Tag, setup, session breakdowns", status: "available" },
            { label: "Custom report layouts", status: "available" },
            { label: "Data export (CSV)", status: "available" },
            { label: "Trade replay", status: "coming-soon" },
          ],
        },
      ]}
      howItWorks={{
        heading: "Get Coinbase trades into Axiusflow in 3 steps",
        steps: [
          { title: "Export from Coinbase", body: "From Reports → Generate Report, export your Coinbase trade history to CSV." },
          { title: "Import into Axiusflow", body: "Drop the CSV — pair quoting, fills, and fees are normalized automatically." },
          { title: "Review with personalized AI", body: "Tag setups and let the AI find the crypto-specific patterns showing up across your sessions." },
        ],
      }}
      faq={[
        { q: "Does Axiusflow auto-sync with Coinbase?", a: "Coinbase CSV imports are supported today. Direct API auto sync is on the roadmap and ships when reliable." },
        { q: "Will it handle altcoin pairs?", a: "Yes. Axiusflow normalizes pair quoting (BTC, ETH, USDC, USDT, USD) so analytics stay consistent across spot crypto trades." },
        { q: "Can I import historical Coinbase trades?", a: "Yes. Bulk historical CSV imports work and Pro plan retention is full." },
        { q: "Does it support futures and perpetuals?", a: "Coinbase spot today; perpetual and futures support across other venues is on the roadmap." },
      ]}
      finalCta={{
        heading: "Make Axiusflow your Coinbase crypto journal",
        body: "Personalized AI, premium UI, and clean analytics for serious crypto traders.",
      }}
    />
  );
}
