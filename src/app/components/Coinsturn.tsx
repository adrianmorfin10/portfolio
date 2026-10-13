"use client";

import React, { useEffect, useState } from "react";

import {
  Home,
  BarChart3,
  Wallet,
  Settings,
  FileText,
  ArrowUpRight,
  Calendar,
  Check,
  ArrowUp,
  LayoutDashboard,
  Bell,
  Eye,
  EyeOff,
  ArrowRight
} from "lucide-react";

/* =========================================================
   COINSTURN / CRYPTO INVESTMENT DASHBOARD
========================================================= */

type CoinsturnView =
  | "Home"
  | "Performance"
  | "Portfolio"
  | "Simulate"
  | "News"
  | "Markets"
  | "E-learning"
  | "KYC"
  | "Contracts"
  | "Operations"
  | "Index";

type CoinsturnMarketCoin = {
  id?: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number | null;
  market_cap?: number;
  image?: string;
};

const coinsturnNavigation: {
  label: CoinsturnView;
  icon: React.ElementType;
}[] = [
  { label: "Home", icon: Home },
  { label: "Performance", icon: BarChart3 },
  { label: "Portfolio", icon: Wallet },
  { label: "Simulate", icon: Settings },
  { label: "News", icon: FileText },
  { label: "Markets", icon: ArrowUpRight },
  { label: "E-learning", icon: Calendar },
  { label: "KYC", icon: Check },
  { label: "Contracts", icon: FileText },
  { label: "Operations", icon: ArrowUp },
  { label: "Index", icon: LayoutDashboard },
];

const coinsturnFallbackMarkets: CoinsturnMarketCoin[] = [
  { name: "Bitcoin", symbol: "btc", current_price: 94320.14, price_change_percentage_24h: 2.42 },
  { name: "Ethereum", symbol: "eth", current_price: 3420.86, price_change_percentage_24h: 1.83 },
  { name: "Tether", symbol: "usdt", current_price: 1, price_change_percentage_24h: 0.02 },
  { name: "BNB", symbol: "bnb", current_price: 684.12, price_change_percentage_24h: -0.74 },
  { name: "Solana", symbol: "sol", current_price: 186.45, price_change_percentage_24h: 4.16 },
  { name: "XRP", symbol: "xrp", current_price: 2.24, price_change_percentage_24h: 1.26 },
  { name: "USD Coin", symbol: "usdc", current_price: 1, price_change_percentage_24h: 0.01 },
  { name: "TRON", symbol: "trx", current_price: 0.27, price_change_percentage_24h: -0.32 },
  { name: "Dogecoin", symbol: "doge", current_price: 0.31, price_change_percentage_24h: 3.1 },
  { name: "Cardano", symbol: "ada", current_price: 0.91, price_change_percentage_24h: -1.08 },
];

function formatCryptoMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value > 0 && value < 1 ? 4 : 2,
    maximumFractionDigits: value > 0 && value < 1 ? 6 : 2,
  }).format(value);
}

export default function Coinsturn() {
  const [activeView, setActiveView] = useState<CoinsturnView>("Home");
  const [showBalance, setShowBalance] = useState(true);
  const [investment, setInvestment] = useState(10000);
  const [simulationMonths, setSimulationMonths] = useState(6);
  const [selectedLesson, setSelectedLesson] = useState("Trading basics");
  const [markets, setMarkets] = useState<CoinsturnMarketCoin[]>(coinsturnFallbackMarkets);
  const [marketStatus, setMarketStatus] = useState<"loading" | "live" | "demo">("loading");

  useEffect(() => {
    let mounted = true;

    const loadMarkets = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
        );

        if (!response.ok) {
          throw new Error("Market data is temporarily unavailable.");
        }

        const data = (await response.json()) as CoinsturnMarketCoin[];

        if (mounted && data.length > 0) {
          setMarkets(data.slice(0, 10));
          setMarketStatus("live");
        }
      } catch {
        if (mounted) setMarketStatus("demo");
      }
    };

    void loadMarkets();
    const interval = window.setInterval(() => void loadMarkets(), 120000);

    return () => {
      mounted = false;
      window.clearInterval(interval);
    };
  }, []);

  const simulationValue = investment * Math.pow(1.08, simulationMonths);

  return (
    <div className="relative h-[560px] overflow-hidden bg-[#050505] text-white md:h-[720px]" style={{ fontFamily: "'Albert Sans', Arial, sans-serif" }}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_0%,rgba(202,255,0,0.09),transparent_38%),radial-gradient(ellipse_at_0%_100%,rgba(255,255,255,0.035),transparent_36%)]" />

      <div className="relative flex h-full">
        {/* SIDEBAR */}
        <aside className="relative z-10 hidden w-[174px] shrink-0 flex-col border-r border-white/[0.07] bg-[#080808]/90 px-3 py-5 md:flex lg:w-[190px]">
          <div className="mb-8 flex h-9 items-center px-2">
            <img
              src="/coins.png"
              alt="Coinsturn"
              className="max-h-8 w-[138px] object-contain object-left"
            />
          </div>

          <div className="mb-3 px-3 font-mono text-[7px] uppercase tracking-[0.24em] text-white/25">
            Investment desk
          </div>

          <nav className="space-y-1">
            {coinsturnNavigation.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveView(label)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[9px] transition-all ${
                  activeView === label
                    ? "bg-[#caff00] font-semibold text-black shadow-[0_8px_24px_rgba(202,255,0,0.08)]"
                    : "text-white/45 hover:bg-white/[0.06] hover:text-white/85"
                }`}
              >
                <Icon size={13} className="shrink-0" />
                <span>{label}</span>
                {label === "Operations" && (
                  <span className={`ml-auto h-1.5 w-1.5 rounded-full ${activeView === label ? "bg-black" : "bg-[#caff00]"}`} />
                )}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-xl border border-[#caff00]/15 bg-[#caff00]/[0.05] p-3">
            <div className="flex items-center gap-2 text-[#caff00]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#caff00] shadow-[0_0_10px_#caff00]" />
              <span className="font-mono text-[7px] uppercase tracking-[0.12em]">Bots online</span>
            </div>
            <div className="mt-2 text-[8px] leading-4 text-white/35">
              Strategies are monitoring the market.
            </div>
          </div>
        </aside>

        {/* MAIN APP */}
        <main className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-[62px] shrink-0 items-center justify-between border-b border-white/[0.07] bg-[#080808]/70 px-4 backdrop-blur-xl md:h-[70px] md:px-7">
            <div className="flex min-w-0 items-center gap-3">
              <img src="/coins.png" alt="Coinsturn" className="h-7 w-[90px] object-contain object-left md:hidden" />
              <div className="hidden md:block">
                <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">Coinsturn / Client portal</div>
                <h3 className="mt-1 text-[14px] font-medium tracking-[-0.03em]">{activeView}</h3>
              </div>
              <div className="md:hidden">
                <div className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/30">Client portal</div>
                <div className="mt-0.5 text-[11px] font-medium">{activeView}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 md:gap-4">
              <div className="hidden items-center gap-2 rounded-full border border-[#caff00]/15 bg-[#caff00]/[0.06] px-3 py-1.5 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#caff00]" />
                <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-[#caff00]">Systems active</span>
              </div>
              <button type="button" aria-label="Notifications" className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/55">
                <Bell size={13} />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#caff00]" />
              </button>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#caff00]/25 bg-[#caff00]/10 text-[8px] font-semibold text-[#caff00]">AM</div>
            </div>
          </header>

          {/* MOBILE SECTION NAV */}
          <div className="flex shrink-0 gap-1.5 overflow-x-auto border-b border-white/[0.07] px-3 py-2.5 scrollbar-none md:hidden">
            {coinsturnNavigation.map(({ label }) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveView(label)}
                className={`shrink-0 rounded-full px-3 py-2 text-[8px] transition ${activeView === label ? "bg-[#caff00] font-semibold text-black" : "border border-white/10 text-white/45"}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-3 py-4 scrollbar-none sm:px-5 md:px-7 md:py-6">
            {activeView === "Home" && (
              <CoinsturnHome
                markets={markets}
                marketStatus={marketStatus}
                showBalance={showBalance}
                onToggleBalance={() => setShowBalance((value) => !value)}
                onNavigate={setActiveView}
              />
            )}

            {activeView === "Performance" && <CoinsturnPerformance />}
            {activeView === "Portfolio" && <CoinsturnPortfolio />}
            {activeView === "Simulate" && (
              <CoinsturnSimulation
                investment={investment}
                setInvestment={setInvestment}
                months={simulationMonths}
                setMonths={setSimulationMonths}
                result={simulationValue}
              />
            )}
            {activeView === "News" && <CoinsturnNews />}
            {activeView === "Markets" && <CoinsturnMarkets markets={markets} status={marketStatus} />}
            {activeView === "E-learning" && (
              <CoinsturnLearning selectedLesson={selectedLesson} setSelectedLesson={setSelectedLesson} />
            )}
            {activeView === "KYC" && <CoinsturnKYC />}
            {activeView === "Contracts" && <CoinsturnContracts />}
            {activeView === "Operations" && <CoinsturnOperations />}
            {activeView === "Index" && <CoinsturnIndex markets={markets} />}
          </div>
        </main>
      </div>
    </div>
  );
}

function CoinsturnHome({
  markets,
  marketStatus,
  showBalance,
  onToggleBalance,
  onNavigate,
}: {
  markets: CoinsturnMarketCoin[];
  marketStatus: "loading" | "live" | "demo";
  showBalance: boolean;
  onToggleBalance: () => void;
  onNavigate: (view: CoinsturnView) => void;
}) {
  return (
    <div className="space-y-4 md:space-y-5">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#caff00]/70">Your capital. In motion.</div>
          <h4 className="mt-2 text-[23px] font-medium leading-tight tracking-[-0.06em] md:text-[30px]">Welcome back, Adrian<span className="text-[#caff00]">.</span></h4>
          <p className="mt-1.5 text-[9px] leading-4 text-white/35">A clear view of your investment strategy and portfolio.</p>
        </div>
        <div className="flex items-center gap-2 self-start rounded-full border border-white/10 px-3 py-2 sm:self-auto">
          <span className="h-1.5 w-1.5 rounded-full bg-[#caff00]" />
          <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/50">Strategy monitoring active</span>
        </div>
      </div>

      <div className="grid gap-3 xl:grid-cols-[1.2fr_.8fr]">
        <div className="relative overflow-hidden rounded-[20px] border border-[#caff00]/15 bg-gradient-to-br from-[#171717] via-[#101010] to-[#090909] p-4 sm:p-5 md:p-6">
          <div className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-[#caff00]/10 bg-[radial-gradient(circle,rgba(202,255,0,0.13),transparent_66%)]" />
          <div className="relative flex items-start justify-between gap-3">
            <div>
              <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/40">Total portfolio value</div>
              <div className="mt-3 text-[clamp(1.65rem,4vw,2.5rem)] font-medium tracking-[-0.07em]">{showBalance ? "$1,007,667.48" : "••••••••••"}</div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#caff00]/10 px-2 py-1 text-[8px] font-medium text-[#caff00]">+18.42%</span>
                <span className="text-[8px] text-white/35">illustrative monthly performance</span>
              </div>
            </div>
            <button type="button" onClick={onToggleBalance} aria-label={showBalance ? "Hide balance" : "Show balance"} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:bg-white/10">
              {showBalance ? <Eye size={13} /> : <EyeOff size={13} />}
            </button>
          </div>

          <div className="mt-5 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.14em] text-white/25">
            <span>Portfolio performance</span>
            <span>Last 30 days</span>
          </div>
          <CoinsturnLineChart />
          <div className="mt-1 flex justify-between text-[7px] text-white/25"><span>SEP 12</span><span>SEP 19</span><span>SEP 26</span><span>OCT 03</span><span>OCT 12</span></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <CoinsturnMetric label="Trading bots" value="$51,000.00" detail="Capital in strategies" accent />
          <CoinsturnMetric label="Vault" value="$60,051.96" detail="Long-term positions" />
          <CoinsturnMetric label="Spot" value="$1,560.05" detail="Available assets" />
          <CoinsturnMetric label="Futures" value="$0.00" detail="Open positions" />
        </div>
      </div>

      <div className="grid gap-3 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[18px] border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[11px] font-medium">Your assets</div>
              <div className="mt-1 text-[8px] text-white/30">Allocation by asset</div>
            </div>
            <button type="button" onClick={() => onNavigate("Portfolio")} className="text-[8px] text-[#caff00] transition hover:text-white">View portfolio <ArrowUpRight size={10} className="ml-1 inline" /></button>
          </div>
          <div className="mt-5 flex items-center gap-4 sm:gap-6">
            <div className="relative h-[122px] w-[122px] shrink-0 rounded-full" style={{ background: "conic-gradient(#caff00 0deg 205deg, #a8a8a8 205deg 258deg, #707070 258deg 315deg, #d4d4d4 315deg 346deg, #303030 346deg 360deg)" }}>
              <div className="absolute inset-[17px] flex flex-col items-center justify-center rounded-full border border-white/[0.06] bg-[#0b0b0b]">
                <span className="font-mono text-[7px] text-white/35">USDT</span>
                <span className="mt-1 text-[11px] font-medium">$647,875</span>
                <span className="mt-1 text-[6px] text-white/25">Main asset</span>
              </div>
            </div>
            <div className="min-w-0 flex-1 space-y-3">
              {[["USDT", "65%", "#caff00"], ["ETH", "14%", "#a8a8a8"], ["BTC", "11%", "#707070"], ["BNB", "6%", "#d4d4d4"], ["Other", "4%", "#303030"]].map(([label, amount, color]) => (
                <div key={label} className="flex items-center gap-2 text-[8px]">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
                  <span className="flex-1 text-white/55">{label}</span>
                  <span className="font-mono text-white/35">{amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[18px] border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[11px] font-medium">Automated strategies</div>
              <div className="mt-1 text-[8px] text-white/30">Bot activity overview</div>
            </div>
            <span className="rounded-full border border-[#caff00]/20 bg-[#caff00]/[0.06] px-2 py-1 font-mono text-[7px] text-[#caff00]">08 ACTIVE</span>
          </div>
          <div className="mt-5 space-y-3">
            {[
              ["BTC / USDT", "Arbitrage bot", "+4.82%", "82%"],
              ["ETH / USDT", "Trend strategy", "+3.16%", "68%"],
              ["Multi-asset", "Quant strategy", "+2.47%", "56%"],
            ].map(([pair, type, profit, width]) => (
              <div key={pair} className="rounded-xl border border-white/[0.06] bg-black/10 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div><div className="text-[8px] font-medium">{pair}</div><div className="mt-1 text-[7px] text-white/30">{type}</div></div>
                  <div className="text-right"><div className="text-[9px] font-medium text-[#caff00]">{profit}</div><div className="mt-1 text-[6px] text-white/25">strategy sample</div></div>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full rounded-full bg-gradient-to-r from-[#a8a8a8] to-[#caff00]" style={{ width }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[18px] border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div><div className="text-[11px] font-medium">Market pulse</div><div className="mt-1 text-[8px] text-white/30">Top assets by market cap</div></div>
          <div className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${marketStatus === "live" ? "bg-[#caff00]" : "bg-white/40"}`} />
            <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/35">{marketStatus === "live" ? "Live API" : marketStatus === "loading" ? "Syncing" : "Demo snapshot"}</span>
            <button type="button" onClick={() => onNavigate("Markets")} className="ml-1 text-[8px] text-[#caff00]">All markets <ArrowUpRight size={10} className="ml-1 inline" /></button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {markets.slice(0, 4).map((coin) => (
            <div key={coin.id || coin.symbol} className="rounded-xl border border-white/[0.06] bg-black/10 p-3">
              <div className="flex items-center justify-between gap-2"><span className="truncate text-[8px] font-medium">{coin.name}</span><span className="font-mono text-[6px] uppercase text-white/30">{coin.symbol}</span></div>
              <div className="mt-2 text-[11px] font-medium">{formatCryptoMoney(coin.current_price)}</div>
              <div className={`mt-1 text-[7px] ${(coin.price_change_percentage_24h ?? 0) >= 0 ? "text-[#caff00]" : "text-white/45"}`}>{(coin.price_change_percentage_24h ?? 0) >= 0 ? "+" : ""}{(coin.price_change_percentage_24h ?? 0).toFixed(2)}% / 24h</div>
            </div>
          ))}
        </div>
      </div>

      <p className="pb-1 text-[7px] leading-4 text-white/20">Illustrative account data for portfolio presentation. Crypto assets are volatile; historical performance and simulations do not guarantee future results.</p>
    </div>
  );
}

function CoinsturnLineChart() {
  return (
    <svg viewBox="0 0 620 120" preserveAspectRatio="none" className="mt-4 h-[100px] w-full" aria-label="Illustrative portfolio performance line chart" role="img">
      <defs>
        <linearGradient id="coinsturnArea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#caff00" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#caff00" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[20, 50, 80, 110].map((y) => <line key={y} x1="0" y1={y} x2="620" y2={y} stroke="rgba(255,255,255,0.07)" strokeDasharray="3 5" />)}
      <path d="M0,91 C28,94 42,70 67,76 S108,82 128,61 S168,75 195,54 S234,61 257,45 S294,58 322,35 S358,49 387,29 S425,39 454,22 S490,35 516,16 S559,28 584,13 S604,19 620,8 L620,120 L0,120 Z" fill="url(#coinsturnArea)" />
      <path d="M0,91 C28,94 42,70 67,76 S108,82 128,61 S168,75 195,54 S234,61 257,45 S294,58 322,35 S358,49 387,29 S425,39 454,22 S490,35 516,16 S559,28 584,13 S604,19 620,8" fill="none" stroke="#caff00" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="620" cy="8" r="4" fill="#caff00" stroke="#caff00" strokeOpacity="0.25" strokeWidth="7" />
    </svg>
  );
}

function CoinsturnMetric({ label, value, detail, accent = false }: { label: string; value: string; detail: string; accent?: boolean }) {
  return (
    <div className={`rounded-[18px] border p-4 ${accent ? "!border-[#caff00] !bg-[#caff00] !text-black [&_*]:!text-black" : "border-white/[0.08] bg-white/[0.025] text-white"}`}>
      <div className="flex items-center justify-between gap-2"><span className="text-[8px] text-white/40">{label}</span><ArrowUpRight size={11} className={accent ? "text-[#caff00]" : "text-white/20"} /></div>
      <div className="mt-4 break-words text-[clamp(0.92rem,2vw,1.2rem)] font-medium tracking-[-0.05em]">{value}</div>
      <div className="mt-2 text-[7px] leading-4 text-white/25">{detail}</div>
    </div>
  );
}

function CoinsturnPageTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-5">
      <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#caff00]/65">{eyebrow}</div>
      <h4 className="mt-2 text-[24px] font-medium tracking-[-0.06em] md:text-[30px]">{title}</h4>
      <p className="mt-1.5 max-w-2xl text-[9px] leading-5 text-white/35">{description}</p>
    </div>
  );
}

function CoinsturnPanel({ title, detail, children }: { title: string; detail?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[18px] border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
      <div className="mb-4"><div className="text-[10px] font-medium">{title}</div>{detail && <div className="mt-1 text-[7px] text-white/30">{detail}</div>}</div>
      {children}
    </div>
  );
}

function CoinsturnPerformance() {
  return (
    <div>
      <CoinsturnPageTitle eyebrow="Performance analytics" title="Growth over time." description="Review portfolio evolution, strategy contribution and recent performance. The figures shown are illustrative interface data." />
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <CoinsturnMetric label="Portfolio value" value="$1.008M" detail="Current sample balance" accent />
        <CoinsturnMetric label="30-day change" value="+18.42%" detail="Illustrative period return" />
        <CoinsturnMetric label="Active strategies" value="08" detail="Trading bots online" />
        <CoinsturnMetric label="Assets held" value="12" detail="Across portfolio categories" />
      </div>
      <div className="mt-4 grid gap-3 xl:grid-cols-[1.3fr_.7fr]">
        <CoinsturnPanel title="Portfolio value" detail="Illustrative balance history · last 30 days"><CoinsturnLineChart /><div className="mt-2 grid grid-cols-4 gap-2">{[["Start", "$842K"], ["Week 1", "$891K"], ["Week 2", "$936K"], ["Current", "$1.008M"]].map(([label, value]) => <div key={label} className="rounded-lg bg-white/[0.03] p-2"><div className="text-[7px] text-white/30">{label}</div><div className="mt-1 text-[9px]">{value}</div></div>)}</div></CoinsturnPanel>
        <CoinsturnPanel title="Strategy contribution" detail="Portfolio weight by strategy">{[["Quant trading", "42%", "#caff00"], ["Vault positions", "28%", "#a8a8a8"], ["Spot holdings", "18%", "#bdbdbd"], ["Other strategies", "12%", "#707070"]].map(([label, value, color]) => <div key={label} className="mb-4 last:mb-0"><div className="flex justify-between text-[8px]"><span className="text-white/50">{label}</span><span>{value}</span></div><div className="mt-2 h-1.5 rounded-full bg-white/[0.07]"><div className="h-full rounded-full" style={{ width: value, backgroundColor: color }} /></div></div>)}</CoinsturnPanel>
      </div>
      <div className="mt-4 rounded-xl border border-amber-300/15 bg-white/40/[0.035] p-3 text-[7px] leading-4 text-white/35">Monthly returns can vary significantly. Some strategies may have shown historical periods of up to +50%; this is not a projection or a guarantee of future results.</div>
    </div>
  );
}

function CoinsturnPortfolio() {
  const assets = [
    ["BTC", "Bitcoin", "0.8452 BTC", "$80,412.60", "+6.42%", "#caff00"],
    ["ETH", "Ethereum", "12.48 ETH", "$42,680.14", "+3.18%", "#a8a8a8"],
    ["USDT", "Tether", "647,875 USDT", "$647,875.00", "+0.02%", "#a8a8a8"],
    ["BNB", "BNB", "18.52 BNB", "$12,678.20", "-0.74%", "#a3a3a3"],
    ["COV", "Cover", "2,450 COV", "$8,120.45", "+2.11%", "#d4d4d4"],
  ];
  return (
    <div>
      <CoinsturnPageTitle eyebrow="Asset allocation" title="Your portfolio." description="A consolidated view of the crypto assets allocated across your holdings and strategies." />
      <div className=" mb-5 grid grid-cols-2 gap-3 md:grid-cols-3">
        <CoinsturnMetric label="Total allocation" value="$791,766" detail="Sample asset value" accent />
        <CoinsturnMetric label="Assets" value="12" detail="Tracked in this account" />
        <div className="col-span-2 md:col-span-1"><CoinsturnMetric label="Largest position" value="USDT · 81.8%" detail="Share of shown assets" /></div>
      </div>
      <CoinsturnPanel title="Asset breakdown" detail="Balances and example daily movement">
        <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-2 border-b border-white/[0.07] pb-3 font-mono text-[6px] uppercase tracking-[0.12em] text-white/25 sm:grid-cols-[1.5fr_1fr_1fr_0.8fr]"><span>Asset</span><span>Balance</span><span>Value (USD)</span><span className="hidden sm:block">24h</span></div>
        {assets.map(([symbol, name, balance, value, change, color]) => <div key={symbol} className="grid grid-cols-[1.5fr_1fr_1fr] items-center gap-2 border-b border-white/[0.05] py-4 last:border-0 sm:grid-cols-[1.5fr_1fr_1fr_0.8fr]"><div className="flex min-w-0 items-center gap-2"><div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[7px] font-bold text-[#101010]" style={{ backgroundColor: color }}>{symbol.slice(0, 1)}</div><div className="min-w-0"><div className="text-[8px] font-medium">{name}</div><div className="mt-1 font-mono text-[6px] text-white/30">{symbol}</div></div></div><span className="truncate text-[7px] text-white/55">{balance}</span><span className="truncate text-[7px]">{value}</span><span className={`hidden text-[8px] sm:block ${change.startsWith("-") ? "text-white/45" : "text-[#caff00]"}`}>{change}</span></div>)}
      </CoinsturnPanel>
    </div>
  );
}

function CoinsturnSimulation({ investment, setInvestment, months, setMonths, result }: { investment: number; setInvestment: (value: number) => void; months: number; setMonths: (value: number) => void; result: number }) {
  return (
    <div>
      <CoinsturnPageTitle eyebrow="Strategy lab" title="Model a scenario." description="Explore how a hypothetical investment amount could compound over time. Adjust the assumptions below to compare scenarios." />
      <div className="grid gap-4 xl:grid-cols-[.9fr_1.1fr]">
        <CoinsturnPanel title="Simulation inputs" detail="Change the values to update the model">
          <div className="mb-7"><div className="flex items-center justify-between gap-3"><label htmlFor="coinsturn-investment" className="text-[8px] text-white/45">Initial investment</label><span className="text-[12px] font-medium">${investment.toLocaleString("en-US")}</span></div><input id="coinsturn-investment" type="range" min={1000} max={100000} step={1000} value={investment} onChange={(event) => setInvestment(Number(event.target.value))} className="mt-4 w-full accent-[#caff00]" /><div className="mt-2 flex justify-between text-[7px] text-white/25"><span>$1,000</span><span>$100,000</span></div></div>
          <div><div className="flex items-center justify-between gap-3"><label htmlFor="coinsturn-months" className="text-[8px] text-white/45">Time horizon</label><span className="text-[12px] font-medium">{months} months</span></div><input id="coinsturn-months" type="range" min={1} max={24} step={1} value={months} onChange={(event) => setMonths(Number(event.target.value))} className="mt-4 w-full accent-[#caff00]" /><div className="mt-2 flex justify-between text-[7px] text-white/25"><span>1 month</span><span>24 months</span></div></div>
          <div className="mt-7 rounded-xl border border-white/[0.07] bg-black/15 p-4"><div className="text-[7px] text-white/35">Assumed monthly rate</div><div className="mt-2 text-[19px] font-medium text-[#caff00]">8.0%</div><p className="mt-2 text-[7px] leading-4 text-white/25">Editable example assumption used only to illustrate compounding, not an estimate of actual performance.</p></div>
        </CoinsturnPanel>
        <div className="relative overflow-hidden rounded-[18px] border border-[#caff00]/15 bg-gradient-to-br from-[#171717] to-[#090909] p-5 md:p-7"><div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full bg-[#caff00]/[0.06] blur-2xl"/><div className="relative"><div className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">Hypothetical end value</div><div className="mt-4 break-words text-[clamp(2rem,5vw,3.6rem)] font-medium tracking-[-0.07em]">{formatCryptoMoney(result)}</div><div className="mt-3 inline-flex rounded-full bg-[#caff00]/10 px-3 py-1.5 text-[8px] text-[#caff00]">+{formatCryptoMoney(result - investment)} illustrative gain</div><div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-xl border border-white/[0.07] bg-black/10 p-4"><div className="text-[7px] text-white/35">Initial amount</div><div className="mt-2 text-[13px]">{formatCryptoMoney(investment)}</div></div><div className="rounded-xl border border-white/[0.07] bg-black/10 p-4"><div className="text-[7px] text-white/35">Compounding periods</div><div className="mt-2 text-[13px]">{months}</div></div></div><div className="mt-7 flex h-[100px] items-end gap-1.5">{Array.from({ length: months > 12 ? 12 : months }, (_, index) => { const n = Math.max(1, months > 12 ? Math.round((index + 1) * months / 12) : index + 1); const height = 18 + Math.min(82, (Math.pow(1.08, n) - 1) / (Math.pow(1.08, months) - 1) * 82); return <div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#a8a8a8]/50 to-[#caff00]" style={{ height: `${height}%` }} />; })}</div><p className="mt-4 text-[7px] leading-4 text-white/25">Illustrative simulation only. Crypto investments can lose value; actual returns can be negative and may differ materially from this calculation.</p></div></div>
      </div>
    </div>
  );
}

function CoinsturnMarkets({ markets, status }: { markets: CoinsturnMarketCoin[]; status: "loading" | "live" | "demo" }) {
  return (
    <div>
      <CoinsturnPageTitle eyebrow="Market intelligence" title="The market, in context." description="Top 10 cryptocurrencies ranked by market capitalization. This view requests current pricing data and refreshes automatically." />
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"><div className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${status === "live" ? "bg-[#caff00] shadow-[0_0_10px_#caff00]" : "bg-white/40"}`} /><span className="text-[8px]">{status === "live" ? "Live market feed connected" : status === "loading" ? "Connecting to market feed…" : "Showing a clearly labeled demo snapshot"}</span></div><span className="font-mono text-[7px] text-white/25">AUTO REFRESH · 2 MIN</span></div>
      <CoinsturnPanel title="Top 10 crypto assets" detail="USD pricing · 24-hour price change">
        <div className="grid grid-cols-[1.4fr_1fr_.8fr] gap-2 border-b border-white/[0.07] pb-3 font-mono text-[6px] uppercase tracking-[0.13em] text-white/25 sm:grid-cols-[1.4fr_1fr_.8fr_.8fr]"><span>Asset</span><span>Price</span><span>24h change</span><span className="hidden sm:block">Market rank</span></div>
        {markets.slice(0, 10).map((coin, index) => <div key={coin.id || coin.symbol} className="grid grid-cols-[1.4fr_1fr_.8fr] items-center gap-2 border-b border-white/[0.05] py-3.5 last:border-0 sm:grid-cols-[1.4fr_1fr_.8fr_.8fr]"><div className="flex min-w-0 items-center gap-2"><span className="w-3 text-[7px] text-white/20">{String(index + 1).padStart(2, "0")}</span>{coin.image ? <img src={coin.image} alt="" className="h-6 w-6 shrink-0 rounded-full" /> : <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#caff00]/10 text-[7px] font-semibold text-[#caff00]">{coin.symbol.slice(0, 1).toUpperCase()}</span>}<div className="min-w-0"><div className="truncate text-[8px] font-medium">{coin.name}</div><div className="mt-0.5 font-mono text-[6px] uppercase text-white/30">{coin.symbol}</div></div></div><span className="truncate text-[8px]">{formatCryptoMoney(coin.current_price)}</span><span className={`text-[7px] sm:text-[8px] ${(coin.price_change_percentage_24h ?? 0) >= 0 ? "text-[#caff00]" : "text-white/45"}`}>{(coin.price_change_percentage_24h ?? 0) >= 0 ? "+" : ""}{(coin.price_change_percentage_24h ?? 0).toFixed(2)}%</span><span className="hidden text-[8px] text-white/30 sm:block">#{index + 1}</span></div>)}
      </CoinsturnPanel>
      <p className="mt-3 text-[7px] leading-4 text-white/25">Market data is supplied by CoinGecko when the public endpoint is reachable. Demo values appear if the feed is unavailable.</p>
    </div>
  );
}

function CoinsturnNews() {
  const articles = [
    ["MARKET OUTLOOK", "How market cycles shape digital asset strategies", "5 min read", "from-[#181818] via-[#121212] to-[#292929]"],
    ["RESEARCH", "Liquidity, volatility and the role of risk controls", "7 min read", "from-[#222222] via-[#151515] to-[#242424]"],
    ["COINSTURN INSIGHTS", "Understanding automated trading in volatile markets", "4 min read", "from-[#2b2b2b] via-[#171717] to-[#262626]"],
  ];
  return <div><CoinsturnPageTitle eyebrow="Research & updates" title="News and insights." description="Market observations and educational updates to help you understand your portfolio context."/><div className="grid gap-3 md:grid-cols-3">{articles.map(([tag, title, read, gradient], index) => <article key={title} className="overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.025]"><div className={`relative h-[125px] overflow-hidden bg-gradient-to-br ${gradient}`}><div className="absolute -right-4 -top-10 h-40 w-40 rounded-full border border-white/15"/><div className="absolute right-8 top-6 h-24 w-24 rounded-full border border-[#caff00]/25 bg-[#caff00]/[0.04]"/><div className="absolute bottom-3 left-4 font-mono text-[7px] tracking-[0.2em] text-white/30">CT / RESEARCH 0{index + 1}</div></div><div className="p-4"><div className="font-mono text-[7px] uppercase tracking-[0.15em] text-[#caff00]/70">{tag}</div><h5 className="mt-3 min-h-[58px] text-[13px] font-medium leading-5 tracking-[-0.03em]">{title}</h5><div className="mt-3 flex items-center justify-between text-[7px] text-white/30"><span>{read}</span><ArrowUpRight size={13}/></div></div></article>)}</div></div>;
}

function CoinsturnLearning({ selectedLesson, setSelectedLesson }: { selectedLesson: string; setSelectedLesson: (lesson: string) => void }) {
  const lessons = [["01", "Trading basics", "Market orders, limit orders and execution", "12:40"], ["02", "Risk management", "Volatility, drawdowns and position sizing", "18:25"], ["03", "Reading a portfolio", "Understand allocation and performance", "09:50"], ["04", "Automated strategies", "How trading bots monitor market signals", "15:10"]];
  return <div><CoinsturnPageTitle eyebrow="Coinsturn academy" title="Learn at your pace." description="Short learning modules designed to make crypto concepts, portfolio allocation and trading workflows easier to understand."/><div className="grid gap-4 xl:grid-cols-[1fr_.85fr]"><CoinsturnPanel title="Learning path" detail="Choose a lesson to open its preview"><div className="space-y-2">{lessons.map(([number, title, description, duration])=><button type="button" key={number} onClick={()=>setSelectedLesson(title)} className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${selectedLesson===title ? "border-[#caff00]/35 bg-[#caff00]/[0.06]" : "border-white/[0.06] bg-black/10 hover:bg-white/[0.04]"}`}><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] font-mono text-[8px] text-[#caff00]">{number}</span><span className="min-w-0 flex-1"><span className="block text-[9px] font-medium">{title}</span><span className="mt-1 block text-[7px] leading-4 text-white/30">{description}</span></span><span className="shrink-0 text-[7px] text-white/30">{duration}</span></button>)}</div></CoinsturnPanel><div className="overflow-hidden rounded-[18px] border border-white/[0.08] bg-gradient-to-br from-[#171717] to-[#0b0b0b] p-5"><div className="flex h-[170px] items-center justify-center rounded-xl border border-white/[0.06] bg-black/20"><div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#caff00]/30 bg-[#caff00]/10 text-[#caff00]"><ArrowRight size={20}/></div></div><div className="mt-5 font-mono text-[7px] uppercase tracking-[0.18em] text-[#caff00]/70">Selected lesson</div><h5 className="mt-2 text-[20px] font-medium tracking-[-0.05em]">{selectedLesson}</h5><p className="mt-2 text-[8px] leading-5 text-white/35">Explore core concepts and examples before applying the ideas to your own investment decisions.</p><div className="mt-5 h-1 overflow-hidden rounded-full bg-white/[0.08]"><div className="h-full w-[32%] rounded-full bg-[#caff00]"/></div><div className="mt-2 flex justify-between text-[7px] text-white/30"><span>Progress</span><span>32%</span></div></div></div></div>;
}

function CoinsturnKYC() {
  const steps = [["Identity verification", "Personal documents checked", "Completed"], ["Address confirmation", "Proof of address received", "Completed"], ["Investor profile", "Risk profile information", "Completed"]];
  return <div><CoinsturnPageTitle eyebrow="Account verification" title="Your account status." description="Manage verification steps and keep your account documentation organized."/><div className="grid gap-3 md:grid-cols-[.75fr_1.25fr]"><div className="rounded-[18px] border border-[#caff00]/15 bg-[#caff00]/[0.045] p-5"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#caff00]/10 text-[#caff00]"><Check size={18}/></div><div className="mt-5 font-mono text-[7px] uppercase tracking-[0.15em] text-white/35">Verification status</div><div className="mt-2 text-[22px] font-medium tracking-[-0.05em]">Verified</div><div className="mt-3 inline-flex rounded-full bg-[#caff00]/10 px-3 py-1 text-[7px] text-[#caff00]">All required steps complete</div></div><CoinsturnPanel title="Verification checklist" detail="Example account state">{steps.map(([title, desc, status])=><div key={title} className="flex items-center gap-3 border-b border-white/[0.06] py-4 last:border-0"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#caff00]/10 text-[#caff00]"><Check size={13}/></div><div className="min-w-0 flex-1"><div className="text-[8px] font-medium">{title}</div><div className="mt-1 text-[7px] text-white/30">{desc}</div></div><span className="shrink-0 text-[7px] text-[#caff00]">{status}</span></div>)}</CoinsturnPanel></div></div>;
}

function CoinsturnContracts() {
  const contracts = [["Investment agreement", "CT-2026-001", "Signed", "Jun 12, 2026"], ["Strategy risk disclosure", "CT-2026-002", "Signed", "Jun 12, 2026"], ["Custody terms", "CT-2026-003", "Review", "Jun 14, 2026"]];
  return <div><CoinsturnPageTitle eyebrow="Documents & agreements" title="Your contracts." description="Access agreements and review the documentation associated with your investment account."/><CoinsturnPanel title="Documents" detail="Illustrative document register"><div className="grid grid-cols-[1.4fr_.8fr_.7fr] gap-2 border-b border-white/[0.07] pb-3 font-mono text-[6px] uppercase tracking-[0.12em] text-white/25 sm:grid-cols-[1.4fr_.8fr_.7fr_.8fr]"><span>Document</span><span>Reference</span><span>Status</span><span className="hidden sm:block">Updated</span></div>{contracts.map(([title, reference, status, date])=><div key={reference} className="grid grid-cols-[1.4fr_.8fr_.7fr] items-center gap-2 border-b border-white/[0.05] py-4 last:border-0 sm:grid-cols-[1.4fr_.8fr_.7fr_.8fr]"><div className="flex min-w-0 items-center gap-2"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-white/55"><FileText size={13}/></div><span className="text-[8px]">{title}</span></div><span className="truncate font-mono text-[7px] text-white/35">{reference}</span><span className={`text-[7px] ${status === "Signed" ? "text-[#caff00]" : "text-white/60"}`}>{status}</span><span className="hidden text-[7px] text-white/30 sm:block">{date}</span></div>)}</CoinsturnPanel></div>;
}

function CoinsturnOperations() {
  const operations = [["OP-92881", "Strategy allocation", "BTC / USDT bot", "$12,430.00", "Completed"], ["OP-92880", "Portfolio rebalance", "Multi-asset", "$7,660.00", "Completed"], ["OP-92879", "Withdrawal request", "USDT", "$2,150.00", "Processing"], ["OP-92878", "Strategy settlement", "Vault", "$980.00", "Completed"]];
  return <div><CoinsturnPageTitle eyebrow="Transaction history" title="Operations." description="Review entries, exits, portfolio transfers and the status of investment operations."/><div className="grid grid-cols-2 gap-3 md:grid-cols-3"><CoinsturnMetric label="This month" value="$48,230" detail="Illustrative operation volume" accent/><CoinsturnMetric label="Completed" value="28" detail="Settled operations"/><div className="col-span-2 md:col-span-1"><CoinsturnMetric label="In progress" value="02" detail="Awaiting settlement"/></div></div><div className="mt-4"><CoinsturnPanel title="Recent operations" detail="Newest activity first">{operations.map(([id, title, category, amount, status])=><div key={id} className="flex flex-wrap items-center gap-3 border-b border-white/[0.05] py-4 last:border-0"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-white/55"><ArrowUpRight size={13}/></div><div className="min-w-0 flex-1"><div className="text-[8px] font-medium">{title}</div><div className="mt-1 text-[7px] text-white/30">{id} · {category}</div></div><div className="text-right"><div className="text-[8px]">{amount}</div><div className={`mt-1 text-[7px] ${status === "Completed" ? "text-[#caff00]" : "text-white/60"}`}>{status}</div></div></div>)}</CoinsturnPanel></div></div>;
}

function CoinsturnIndex({ markets }: { markets: CoinsturnMarketCoin[] }) {
  const bitcoin = markets.find((coin) => coin.symbol.toLowerCase() === "btc");
  const ethereum = markets.find((coin) => coin.symbol.toLowerCase() === "eth");
  return <div><CoinsturnPageTitle eyebrow="Digital asset index" title="A wider market view." description="A high-level view of market indicators alongside the assets most often followed by investors."/><div className="grid grid-cols-2 gap-3 xl:grid-cols-4"><CoinsturnMetric label="Tracked assets" value="10" detail="Top market-cap assets" accent/><CoinsturnMetric label="Bitcoin" value={bitcoin ? formatCryptoMoney(bitcoin.current_price) : "—"} detail="Current feed value"/><CoinsturnMetric label="Ethereum" value={ethereum ? formatCryptoMoney(ethereum.current_price) : "—"} detail="Current feed value"/><CoinsturnMetric label="Market refresh" value="120 sec" detail="Automatic feed polling"/></div><div className="mt-4 grid gap-3 xl:grid-cols-2"><CoinsturnPanel title="Market breadth" detail="Illustrative distribution by asset class"><div className="flex items-center gap-5"><div className="relative h-[132px] w-[132px] shrink-0 rounded-full" style={{ background: "conic-gradient(#caff00 0deg 185deg,#a8a8a8 185deg 240deg,#bdbdbd 240deg 292deg,#707070 292deg 326deg,#454545 326deg 360deg)" }}><div className="absolute inset-[18px] flex items-center justify-center rounded-full bg-[#101010]"><span className="text-[9px] text-white/55">INDEX</span></div></div><div className="flex-1 space-y-3">{[["Large cap", "51%", "#caff00"], ["Smart-contract platforms", "23%", "#a8a8a8"], ["Stablecoins", "15%", "#bdbdbd"], ["Other assets", "11%", "#707070"]].map(([name, value, color])=><div key={name} className="flex items-center gap-2 text-[8px]"><span className="h-1.5 w-1.5 rounded-full" style={{backgroundColor:color}}/><span className="flex-1 text-white/45">{name}</span><span>{value}</span></div>)}</div></div></CoinsturnPanel><CoinsturnPanel title="Top assets" detail="Price moves from the current market feed">{markets.slice(0,5).map((coin)=><div key={coin.id || coin.symbol} className="flex items-center justify-between gap-4 border-b border-white/[0.05] py-3 last:border-0"><div><div className="text-[8px] font-medium">{coin.name}</div><div className="mt-1 font-mono text-[6px] uppercase text-white/30">{coin.symbol}</div></div><div className="text-right"><div className="text-[8px]">{formatCryptoMoney(coin.current_price)}</div><div className={`mt-1 text-[7px] ${(coin.price_change_percentage_24h ?? 0) >= 0 ? "text-[#caff00]" : "text-white/45"}`}>{(coin.price_change_percentage_24h ?? 0) >= 0 ? "+" : ""}{(coin.price_change_percentage_24h ?? 0).toFixed(2)}%</div></div></div>)}</CoinsturnPanel></div></div>;
}
