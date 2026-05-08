import { LandingTemplate } from "@/components/landing-template";

export default function Page() {
  return (
    <LandingTemplate
      eyebrow="For Day Traders"
      h1="The Modern Day Trading Journal with Personalized AI"
      intro="Axiusflow is built for active day traders. Import every fill, tag every setup, and let personalized AI surface the patterns that actually matter — across scalps, momentum trades, and intraday swings."
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "For Traders", path: "/for/day-traders" },
        { name: "Day Traders", path: "/for/day-traders" },
      ]}
      relatedBrokers={{
        heading: "Built around the brokers active day traders already use",
        logos: [
          { src: "/broker_logo/Ibkr.png", name: "Interactive Brokers" },
          { src: "/broker_logo/webull.png", name: "Webull" },
          { src: "/broker_logo/robinhood.png", name: "Robinhood" },
          { src: "/broker_logo/td_ameritrade.png", name: "TD Ameritrade" },
          { src: "/broker_logo/tradestation.png", name: "TradeStation" },
          { src: "/broker_logo/e_trade.png", name: "E*TRADE" },
          { src: "/broker_logo/charles_shwab.png", name: "Charles Schwab" },
        ],
      }}
      pillars={[
        { title: "Built for high trade volume", body: "Day traders generate dozens of fills daily — Axiusflow imports, tags, and analyzes them without slowing down." },
        { title: "Personalized AI on every session", body: "AI learns from your tags, notes, and execution patterns. It catches scalping mistakes specific to your style." },
        { title: "Premium UI for long review sessions", body: "A calm, modern workspace built for the multi-hour weekly reviews active traders run." },
      ]}
      featureGroups={[
        {
          title: "Day Trading Workflow",
          rows: [
            { label: "Keyboard-driven tagging", status: "available" },
            { label: "Custom setup labels", status: "available" },
            { label: "Pre-built tag templates (momentum, breakout, reversal)", status: "available" },
            { label: "Screenshot attachments", status: "available" },
            { label: "Session notes (open, power-hour, close)", status: "available" },
            { label: "High-volume fill handling", status: "available" },
          ],
        },
        {
          title: "Intraday Analytics",
          rows: [
            { label: "Win rate by setup, session, day of week", status: "available" },
            { label: "R-multiple and expectancy", status: "available" },
            { label: "Hold-time breakdowns", status: "available" },
            { label: "Slippage tracking", status: "available" },
            { label: "Maximum adverse excursion (MAE)", status: "available" },
            { label: "Custom report layouts", status: "available" },
          ],
        },
        {
          title: "Personalized AI",
          rows: [
            { label: "Revenge-trading detection", status: "available" },
            { label: "Oversizing into news flagging", status: "available" },
            { label: "Late-entry pattern recognition", status: "available" },
            { label: "Repeat-strength surfacing", status: "available" },
            { label: "Personalized review prompts", status: "available" },
            { label: "Trade replay", status: "coming-soon" },
          ],
        },
      ]}
      howItWorks={{
        heading: "How day traders use Axiusflow",
        steps: [
          { title: "Import your fills", body: "Pull broker CSVs from Webull, IBKR, Robinhood, TD, TradeStation, and more after the close." },
          { title: "Tag setups fast", body: "Keyboard shortcuts and templates let you tag dozens of trades in minutes, not hours." },
          { title: "Run a personalized AI review", body: "Let the AI surface your real mistakes and strengths so the next session is sharper than the last." },
        ],
      }}
      faq={[
        { q: "Does it work for scalpers running 50+ trades a day?", a: "Yes. Axiusflow imports high-volume trade flow without slowdowns and the AI handles dense session data well." },
        { q: "What instruments does it support?", a: "Equities, options, futures, and crypto via CSV imports today, with broker auto sync expanding deliberately." },
        { q: "Can I tag trades quickly?", a: "Yes. Keyboard shortcuts and custom tag templates make session-end tagging fast — the workflow is built for traders who don't have time to fight their journal." },
        { q: "Does the AI work for day traders specifically?", a: "Yes. Because it's personalized, it adapts to your style — whether you scalp ES futures, momentum-trade small caps, or swing setups around the open." },
      ]}
      finalCta={{
        heading: "Make Axiusflow your day trading journal",
        body: "Personalized AI, premium UI, and clean analytics built for active day traders.",
      }}
    />
  );
}
