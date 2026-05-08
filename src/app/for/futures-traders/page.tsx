import { LandingTemplate } from "@/components/landing-template";

export default function Page() {
  return (
    <LandingTemplate
      eyebrow="For Futures Traders"
      h1="The Modern Futures Trading Journal with Personalized AI"
      intro="Axiusflow is built for serious futures traders. Import ES, NQ, MES, MNQ, CL, GC, and prop firm contracts, tag every setup, and let personalized AI find the patterns across your futures sessions."
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "For Traders", path: "/for/futures-traders" },
        { name: "Futures Traders", path: "/for/futures-traders" },
      ]}
      relatedBrokers={{
        heading: "Built around the futures platforms serious traders run",
        logos: [
          { src: "/broker_logo/ninjatrader.png", name: "NinjaTrader" },
          { src: "/broker_logo/tradovate.png", name: "Tradovate" },
          { src: "/broker_logo/tradestation.png", name: "TradeStation" },
          { src: "/broker_logo/Ibkr.png", name: "Interactive Brokers" },
          { src: "/broker_logo/amp_futures.png", name: "AMP Futures" },
        ],
      }}
      pillars={[
        { title: "Built for futures contracts", body: "ES, NQ, MES, MNQ, RTY, M2K, YM, MYM, CL, GC and more — tick values normalized correctly across full and micro contracts." },
        { title: "NinjaTrader, TradeStation, Tradovate", body: "CSV imports for the platforms futures traders actually use, with clean field mapping." },
        { title: "AI tuned to futures behavior", body: "Personalized AI flags revenge trades, FOMC mistakes, and contract-rollover errors." },
      ]}
      featureGroups={[
        {
          title: "Contracts & Imports",
          rows: [
            { label: "ES / MES tick value normalization", status: "available" },
            { label: "NQ / MNQ tick value normalization", status: "available" },
            { label: "RTY / M2K, YM / MYM pairs", status: "available" },
            { label: "CL, GC, NG, ZB, and majors", status: "available" },
            { label: "Multi-platform CSV imports", status: "available" },
            { label: "Direct API auto sync", status: "coming-soon" },
          ],
        },
        {
          title: "Futures Analytics",
          rows: [
            { label: "Win rate by session (RTH, globex, overnight)", status: "available" },
            { label: "R-multiple and expectancy", status: "available" },
            { label: "Tick-level slippage tracking", status: "available" },
            { label: "Maximum adverse excursion (MAE)", status: "available" },
            { label: "News-event tagging", status: "available" },
            { label: "Custom report layouts", status: "available" },
          ],
        },
        {
          title: "Personalized AI",
          rows: [
            { label: "Late-breakout chasing detection", status: "available" },
            { label: "FOMC and news-day pattern flagging", status: "available" },
            { label: "Revenge-trade behavior recognition", status: "available" },
            { label: "Hold-through-close patterns", status: "available" },
            { label: "Personalized review prompts", status: "available" },
            { label: "Trade replay", status: "coming-soon" },
          ],
        },
      ]}
      howItWorks={{
        heading: "How futures traders use Axiusflow",
        steps: [
          { title: "Export executions", body: "From NinjaTrader, TradeStation, Tradovate, IBKR, or AMP Futures, export your fills to CSV." },
          { title: "Import with correct tick values", body: "Axiusflow normalizes tick values across full and micro contracts so analytics stay accurate." },
          { title: "Run a personalized AI review", body: "Let the AI catch the futures-specific failure modes — chasing, oversizing, holding losers — across your sessions." },
        ],
      }}
      faq={[
        { q: "Does it support micro futures correctly?", a: "Yes. Tick value is normalized across full and micro pairs (ES/MES, NQ/MNQ, RTY/M2K, YM/MYM) so analytics stay consistent." },
        { q: "Can I import from Tradovate?", a: "Yes. Tradovate CSV exports import cleanly today." },
        { q: "Does it handle prop firm accounts?", a: "Yes. Topstep, Apex, Earn2Trade, and other prop firm accounts running on NinjaTrader, Tradovate, or Rithmic-based platforms work via CSV imports." },
        { q: "Will the AI catch FOMC and news-day mistakes?", a: "Yes. Because the AI learns from your own tags and notes, it flags repeating mistakes around scheduled news events and high-volatility sessions." },
      ]}
      finalCta={{
        heading: "Make Axiusflow your futures trading journal",
        body: "Modern UI, personalized AI, and premium analytics built for serious futures traders.",
      }}
    />
  );
}
