"use client";

import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  Clock01Icon,
  GlobeIcon,
  Layers01Icon,
  Notification03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const brokers = [
  { name: "Coinbase", logo: "/broker_logo/coinbase.png" },
  { name: "Binance", logo: "/broker_logo/binance.png" },
  { name: "Kraken", logo: "/broker_logo/kraken.png" },
  { name: "Interactive Brokers", logo: "/broker_logo/Ibkr.png" },
  { name: "TradeStation", logo: "/broker_logo/tradestation.png" },
  { name: "TradingView", logo: "/broker_logo/tradingview.png" },
];

// Card Visual Components
function IntegrationsVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="pointer-events-none absolute inset-x-16 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      {/* Left column - 3 brokers */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        {brokers.slice(0, 3).map((broker) => (
          <div
            key={broker.name}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-white/90 overflow-hidden p-1.5"
            title={broker.name}
          >
            <Image
              src={broker.logo}
              alt={broker.name}
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Center - Axiusflow Logo */}
      <div
        className="relative z-20 w-16 h-16 rounded-full bg-blue-500 border-2 border-blue-600 shadow-lg flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/logo_transparent.svg"
          alt="Axiusflow"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Right column - 3 brokers */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        {brokers.slice(3, 6).map((broker) => (
          <div
            key={broker.name}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-white/90 overflow-hidden p-1.5"
            title={broker.name}
          >
            <Image
              src={broker.logo}
              alt={broker.name}
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarVisual() {
  return (
    <div className="w-full max-w-[220px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-3 shadow-sm">
      {/* Timeframe tabs */}
      <div className="flex gap-1 mb-3">
        {['1H', '4H', '1D'].map((tf, i) => (
          <span 
            key={tf} 
            className={`flex-1 text-center text-xs py-1 rounded ${
              i === 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-white/10 af-text-secondary'
            }`}
          >
            {tf}
          </span>
        ))}
      </div>
      {/* Mini chart representations */}
      <div className="space-y-2">
        {[
          { tf: '1H', trend: 'up', bars: [40, 45, 42, 50, 55, 52, 60] },
          { tf: '4H', trend: 'up', bars: [30, 35, 45, 50, 48, 55, 58] },
          { tf: '1D', trend: 'down', bars: [60, 55, 50, 45, 48, 42, 40] },
        ].map((chart) => (
          <div key={chart.tf} className="flex items-center gap-2">
            <span className="w-6 text-xs font-medium af-text-secondary">{chart.tf}</span>
            <div className="flex-1 h-6 flex items-end gap-0.5">
              {chart.bars.map((h, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-sm ${chart.trend === 'up' ? 'bg-emerald-400' : 'bg-red-400'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <span className={`text-xs ${chart.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
              {chart.trend === 'up' ? '↑' : '↓'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimezoneVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* World map dots pattern */}
        <div className="w-56 h-32 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/10 flex items-center justify-center">
          <HugeiconsIcon
            icon={GlobeIcon}
            className="w-16 h-16 text-gray-300 dark:text-white/20"
            strokeWidth={0.5}
          />
        </div>
        {/* Market session badges */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-[8px] bg-emerald-100 dark:bg-emerald-500/20 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          TSE Open
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 px-2 py-1 rounded-[8px] bg-blue-100 dark:bg-blue-500/20 text-xs text-blue-600 dark:text-blue-400">
          NYSE
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 px-2 py-1 rounded-[8px] bg-amber-100 dark:bg-amber-500/20 text-xs text-amber-600 dark:text-amber-400">
          LSE
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-[8px] bg-blue-500 text-white text-xs font-medium">
          Live
        </div>
      </div>
    </div>
  );
}

function RemindersVisual() {
  return (
    <div className="w-full max-w-[360px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={Notification03Icon} className="w-4 h-4 af-text-secondary" />
          <span className="text-sm font-medium af-text-primary">Price Alerts</span>
        </div>
        <button className="text-xs px-3 py-1 rounded-[8px] border border-gray-200 dark:border-white/10 af-text-secondary">
          + New Alert
        </button>
      </div>
      <div className="space-y-3">
        {[
          { active: true, symbol: 'AAPL', condition: 'Above', price: '$185.00', color: 'text-emerald-500' },
          { active: true, symbol: 'TSLA', condition: 'Below', price: '$240.00', color: 'text-red-500' },
          { active: false, symbol: 'SPY', condition: 'Cross', price: '$450.00', color: 'text-blue-500' },
        ].map((alert, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-9 h-5 rounded-full ${alert.active ? 'bg-blue-500' : 'bg-gray-200 dark:bg-white/10'} relative`}>
              <div className={`absolute top-0.5 ${alert.active ? 'right-0.5' : 'left-0.5'} w-4 h-4 rounded-full bg-white shadow-sm`} />
            </div>
            <div className="w-14 h-8 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center text-sm font-medium af-text-primary">
              {alert.symbol}
            </div>
            <div className={`w-16 h-8 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center text-xs ${alert.color}`}>
              {alert.condition}
            </div>
            <div className="flex-1 h-8 rounded-lg border border-gray-200 dark:border-white/10 flex items-center px-3 text-sm af-text-primary">
              {alert.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamMembersVisual() {
  return (
    <div className="w-full max-w-[280px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <HugeiconsIcon icon={Layers01Icon} className="w-4 h-4 af-text-secondary" />
        <span className="text-sm font-medium af-text-primary">Trading Accounts</span>
      </div>
      <div className="text-xs af-text-secondary mb-2">Connected (3)</div>
      <div className="space-y-2">
        {[
          { name: 'Coinbase Import', balance: '142 trades', status: 'Synced', statusColor: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400', logo: '/broker_logo/coinbase.png' },
          { name: 'Broker CSV', balance: '88 trades', status: 'Ready', statusColor: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400', logo: '/logo_transparent.svg' },
          { name: 'Manual Journal', balance: '24 notes', status: 'Review', statusColor: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400', logo: '/logo_transparent.svg' },
        ].map((account, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white dark:bg-white/90 flex items-center justify-center overflow-hidden p-1">
              <Image src={account.logo} alt={account.name} width={24} height={24} className="w-6 h-6 object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium af-text-primary truncate">{account.name}</div>
              <div className="text-xs af-text-secondary">{account.balance}</div>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded whitespace-nowrap ${account.statusColor}`}>{account.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GroupBookingVisual() {
  return (
    <div className="w-full max-w-[200px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden shadow-sm">
      <div className="p-3 border-b border-gray-100 dark:border-white/5">
        <div className="text-sm font-medium af-text-primary">Review Labels</div>
        <div className="text-xs af-text-secondary mt-1">Find repeatable patterns</div>
      </div>
      <div className="p-3 space-y-2">
        {[
          { type: 'Entry', desc: 'Setup context', color: 'bg-emerald-500' },
          { type: 'Exit', desc: 'Decision review', color: 'bg-blue-500' },
          { type: 'Risk', desc: 'Stop discipline', color: 'bg-red-500' },
          { type: 'Mistake', desc: 'Behavior tag', color: 'bg-purple-500' },
        ].map((order, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${order.color}`} />
            <span className="text-xs font-medium af-text-primary">{order.type}</span>
            <span className="text-xs af-text-secondary ml-auto">{order.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DurationVisual() {
  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-[220px] mx-auto">
      {['1m', '5m', '15m', '1H', '4H', '1D', '1W', '1M'].map((timeframe, i) => (
        <span 
          key={i} 
          className={`px-3 py-1.5 rounded-[8px] text-xs font-medium ${
            timeframe === '4H' 
              ? 'bg-gray-900 text-white dark:bg-white dark:text-black' 
              : 'border border-gray-200 dark:border-white/10 af-text-secondary'
          }`}
        >
          {timeframe}
        </span>
      ))}
    </div>
  );
}

function BlockDatesVisual() {
  return (
    <div className="w-full max-w-[240px] mx-auto rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <HugeiconsIcon icon={Clock01Icon} className="w-4 h-4 af-text-secondary" />
        <span className="text-sm font-medium af-text-primary">Market Sessions</span>
      </div>
      <div className="space-y-2">
        {[
          { session: 'Pre-Market', active: true, times: ['4:00 AM', '9:30 AM'], color: 'text-amber-500' },
          { session: 'Regular', active: true, times: ['9:30 AM', '4:00 PM'], color: 'text-emerald-500' },
          { session: 'After-Hours', active: false, times: ['4:00 PM', '8:00 PM'], color: 'text-purple-500' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-8 h-4 rounded-full ${item.active ? 'bg-blue-500' : 'bg-gray-200 dark:bg-white/10'} relative`}>
              <div className={`absolute top-0.5 ${item.active ? 'right-0.5' : 'left-0.5'} w-3 h-3 rounded-full bg-white shadow-sm`} />
            </div>
            <span className={`w-20 text-xs font-medium ${item.color}`}>{item.session}</span>
            <div className="flex gap-1">
              {item.times.map((t, j) => (
                <span key={j} className="text-xs px-1.5 py-0.5 rounded border border-gray-200 dark:border-white/10 af-text-secondary">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BentoDemo() {
  return (
    <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Row 1: 3 equal cards */}
      <BentoCard
        title="Broker Imports & Sync Roadmap"
        description="Bring CSV imports and supported sync workflows into one journal while new broker connections are added deliberately."
      >
        <IntegrationsVisual />
      </BentoCard>

      <BentoCard
        title="Multi-Timeframe Analysis"
        description="Analyze charts across multiple timeframes simultaneously to spot trends and patterns."
      >
        <CalendarVisual />
      </BentoCard>

      <BentoCard
        title="Market Session Context"
        description="Review trades with the session, timezone, and market context that shaped each decision."
      >
        <TimezoneVisual />
      </BentoCard>

      {/* Row 2: 2 cards (wider left, narrower right) */}
      <BentoCard
        title="Smart Alerts & Real-Time Notifications"
        description="Get instant alerts for price movements, technical signals, and market events."
        className="lg:col-span-2"
      >
        <RemindersVisual />
      </BentoCard>

      <BentoCard
        title="Multi-Source Journal"
        description="Unify crypto, CSV, manual, and future broker-sync trade history in one review surface."
      >
        <TeamMembersVisual />
      </BentoCard>

      {/* Row 3: 3 equal cards */}
      <BentoCard
        title="Trade Review Playbooks"
        description="Tag entries, exits, risk decisions, and mistakes so every replay becomes searchable."
      >
        <GroupBookingVisual />
      </BentoCard>

      <BentoCard
        title="Customizable Timeframes"
        description="From tick charts to monthly candles, analyze any timeframe that fits your strategy."
      >
        <DurationVisual />
      </BentoCard>

      <BentoCard
        title="Market Sessions & Hours"
        description="Automatic detection of pre-market, regular hours, and after-hours trading sessions."
      >
        <BlockDatesVisual />
      </BentoCard>
    </BentoGrid>
  );
}
