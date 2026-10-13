
"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  ArrowUp,
  ArrowUpRight,
  FileText,
  Users,
  ChevronLeft,
  ChevronDown,
  User,
  Search,
  MoreHorizontal,
  Menu,
  X,
} from "lucide-react";

type Screen = "dashboard" | "upload" | "transactions" | "users";

const navItems = [
  ["dashboard", LayoutDashboard, "Dashboard"],
  ["upload", ArrowUp, "Upload batch"],
  ["transactions", FileText, "Transactions"],
  ["users", Users, "Users"],
] as const;

const screenTitles: Record<Screen, string> = {
  dashboard: "Dashboard",
  upload: "Upload batch",
  transactions: "Transactions",
  users: "Users",
};

export default function DisbursementPortal() {
  const [screen, setScreen] = useState<Screen>("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = (next: Screen) => {
    setScreen(next);
    setMobileMenuOpen(false);
  };

  return (
    <div
    className="disbursement-font relative h-full min-h-0 w-full overflow-hidden bg-[#141414] text-white"
    style={{
      backgroundImage:
        "linear-gradient(130deg, rgba(0,80,246,.24), rgba(20,20,20,.88) 52%, rgba(88,163,255,.12)), url('/backdisp.png')",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
      <div className="pointer-events-none absolute inset-0 bg-[#141414]/40" />

      <div className="relative z-10 flex h-full min-h-0">
        {/* DESKTOP SIDEBAR */}
        <aside
          className={`${
            collapsed ? "w-[64px]" : "w-[174px] lg:w-[196px]"
          } hidden shrink-0 flex-col border-r border-white/10 bg-[#141414]/85 backdrop-blur-2xl transition-all duration-300 md:flex`}
        >
          <div className="flex h-[64px] items-center justify-between border-b border-white/10 px-3 lg:px-4">
            {!collapsed && (
              <div>
                <div className="text-[12px] font-semibold tracking-[-0.04em]">
                  BLXCK PAY
                </div>
                <div className="mt-1 text-[7px] text-white/40">
                  Disbursement portal
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setCollapsed((value) => !value)}
              aria-label={
                collapsed ? "Expand navigation" : "Collapse navigation"
              }
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/65 hover:bg-white/10"
            >
              <ChevronLeft
                size={14}
                className={collapsed ? "rotate-180" : ""}
              />
            </button>
          </div>

          <nav className="flex-1 space-y-1 p-2.5">
            {!collapsed && (
              <div className="mb-3 px-3 pt-2 text-[7px] uppercase tracking-[0.16em] text-white/35">
                Workspace
              </div>
            )}

            {navItems.map(([key, Icon, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => navigate(key)}
                title={collapsed ? label : undefined}
                aria-current={screen === key ? "page" : undefined}
                className={`flex w-full items-center gap-3 rounded-[10px] px-3 py-2.5 text-left text-[9px] transition ${
                  screen === key
                    ? "bg-[#0050F6] text-white shadow-[0_8px_22px_rgba(0,80,246,.24)]"
                    : "text-white/55 hover:bg-white/[0.07] hover:text-white"
                } ${collapsed ? "justify-center px-0" : ""}`}
              >
                <Icon size={14} className="shrink-0" />
                {!collapsed && label}
              </button>
            ))}
          </nav>

          <div className="border-t border-white/10 p-3">
            <div
              className={`flex items-center ${
                collapsed ? "justify-center" : "gap-2.5"
              }`}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#58A3FF]/35 bg-[#0050F6]/20 text-[#58A3FF]">
                <User size={13} />
              </div>

              {!collapsed && (
                <div className="min-w-0">
                  <div className="truncate text-[8px]">
                    Alberto Martinez
                  </div>
                  <div className="mt-0.5 text-[7px] text-white/40">
                    Administrator
                  </div>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* APP CONTENT */}
        <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <header className="flex h-[56px] shrink-0 items-center justify-between border-b border-white/10 bg-[#141414]/70 px-3 backdrop-blur-xl sm:px-4 md:h-[64px] md:px-5">
            <div className="flex min-w-0 items-center gap-2.5">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((value) => !value)}
                aria-label="Toggle navigation"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white/65 md:hidden"
              >
                {mobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
              </button>

              <div className="min-w-0">
                <div className="text-[7px] tracking-[0.08em] text-white/40">
                  BLXCK PAY / DISBURSEMENTS
                </div>
                <h3 className="mt-1 truncate text-[16px] font-medium leading-tight tracking-[-0.045em] sm:text-[18px] md:text-[21px]">
                  {screenTitles[screen]}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("upload")}
              className="hidden shrink-0 items-center gap-2 rounded-full bg-[#0050F6] px-4 py-2.5 text-[8px] font-medium text-white transition hover:bg-[#58A3FF] hover:text-[#141414] sm:flex"
            >
              <ArrowUp size={12} />
              Upload batch
            </button>
          </header>

          {/* MOBILE NAVIGATION */}
          {mobileMenuOpen && (
            <div className="absolute left-3 right-3 top-[62px] z-50 rounded-xl border border-white/10 bg-[#141414] p-2 shadow-2xl md:hidden">
              {navItems.map(([key, Icon, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => navigate(key)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-[10px] ${
                    screen === key
                      ? "bg-[#0050F6] text-white"
                      : "text-white/65 hover:bg-white/[0.06]"
                  }`}
                >
                  <Icon size={14} />
                  {label}
                </button>
              ))}
            </div>
          )}

          <div className="min-h-0 flex-1 overflow-y-auto p-3 scrollbar-none sm:p-4 md:p-5">
            {screen === "dashboard" && (
              <Dashboard
                onUpload={() => navigate("upload")}
                onTransactions={() => navigate("transactions")}
              />
            )}

            {screen === "upload" && <UploadScreen />}
            {screen === "transactions" && <TransactionsScreen />}
            {screen === "users" && <UsersScreen />}
          </div>
        </main>
      </div>
    </div>
  );
}

/* =========================================================
   SHARED UI
========================================================= */

function Heading({
  children,
  detail,
}: {
  children: React.ReactNode;
  detail?: string;
}) {
  return (
    <div>
      <h4 className="text-[19px] font-medium leading-tight tracking-[-0.06em] sm:text-[21px] md:text-[23px]">
        {children}
      </h4>
      {detail && (
        <p className="mt-1.5 max-w-xl text-[8px] leading-4 text-white/45 sm:text-[9px]">
          {detail}
        </p>
      )}
    </div>
  );
}

function Panel({
  title,
  detail,
  children,
}: {
  title: string;
  detail?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="min-w-0 rounded-[14px] border border-white/10 bg-[#141414]/80 p-3 backdrop-blur-xl sm:rounded-[16px] sm:p-4 md:p-5">
      <div className="mb-4">
        <h5 className="text-[10px] font-medium tracking-[-0.02em] sm:text-[11px]">
          {title}
        </h5>
        {detail && (
          <p className="mt-1 text-[7px] leading-4 text-white/40 sm:text-[8px]">
            {detail}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

function Metric({
  label,
  value,
  detail = "Updated today",
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="min-w-0 rounded-[12px] border border-[#58A3FF]/25 bg-[#0050F6]/[0.14] p-3 backdrop-blur-xl sm:rounded-[14px] sm:p-4">
      <div className="text-[7px] leading-4 text-white/60 sm:text-[8px]">
        {label}
      </div>
      <div className="mt-2 break-words text-[15px] font-medium leading-tight tracking-[-0.055em] sm:text-[18px] md:mt-3 md:text-[20px]">
        {value}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[7px] text-[#58A3FF]">
        <ArrowUpRight size={10} className="shrink-0" />
        {detail}
      </div>
    </div>
  );
}

function Status({ value }: { value: string }) {
  const style =
    value === "Completed"
      ? "border-[#58A3FF]/30 bg-[#58A3FF]/10 text-[#8abfff]"
      : value === "Processing"
        ? "border-[#0050F6]/40 bg-[#0050F6]/20 text-white"
        : "border-white/15 bg-white/[0.06] text-white/65";

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 text-[6px] ${style}`}
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      {value}
    </span>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard({
  onUpload,
  onTransactions,
}: {
  onUpload: () => void;
  onTransactions: () => void;
}) {
  return (
    <div className="space-y-3 md:space-y-4">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <Heading detail="Overview of your disbursement operations.">
          Dashboard
        </Heading>
        <button
          type="button"
          onClick={onUpload}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0050F6] px-3.5 py-2.5 text-[8px] font-medium text-white transition hover:bg-[#58A3FF] hover:text-[#141414] sm:px-4"
        >
          <ArrowUp size={12} />
          Upload batch
        </button>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:gap-3">
        <Metric label="Available balance" value="$320,090.00" />
        <Metric label="Dispersing" value="$20,090.00" />
        <Metric label="Pending authorization" value="12 batches" />
      </div>

      <div className="grid gap-3 xl:grid-cols-[1.15fr_.85fr] md:gap-4">
        <Panel
          title="Batch history"
          detail="Recent disbursement batches and their current status."
        >
          <div className="mb-3 flex flex-col gap-2 sm:flex-row">
            <label className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/10 bg-[#141414] px-3 py-2.5">
              <Search size={12} className="shrink-0 text-white/50" />
              <input
                aria-label="Search batch"
                placeholder="Search batch"
                className="w-full min-w-0 bg-transparent text-[8px] outline-none placeholder:text-white/35"
              />
            </label>

            <button
              type="button"
              className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[8px] text-white/70"
            >
              Status
              <ChevronDown size={11} className="ml-2" />
            </button>
          </div>

          <div className="space-y-2">
            <Batch name="employees_july.csv" amount="$84,230.00" status="Completed" />
            <Batch name="providers_july.csv" amount="$52,180.00" status="Completed" />
            <Batch name="payroll_0626.csv" amount="$20,090.00" status="Pending" />
            <Batch name="operations_0619.csv" amount="$31,400.00" status="Processing" />
          </div>

          <button
            type="button"
            onClick={onTransactions}
            className="mt-4 text-[8px] text-[#58A3FF] transition hover:text-white"
          >
            View all transactions
            <ArrowUpRight size={11} className="ml-1 inline" />
          </button>
        </Panel>

        <Panel
          title="Pending authorization"
          detail="Operations waiting for approval."
        >
          <div className="space-y-2.5">
            <Pending name="Batch_07032026.csv" amount="$12,430.00" onReview={onUpload} />
            <Pending name="Batch_06032026.csv" amount="$7,660.00" onReview={onUpload} />
            <Pending name="Batch_05032026.csv" amount="$4,920.00" onReview={onUpload} />
          </div>
        </Panel>
      </div>
    </div>
  );
}

function Batch({
  name,
  amount,
  status,
}: {
  name: string;
  amount: string;
  status: string;
}) {
  return (
    <div className="flex min-w-0 items-center justify-between gap-2 rounded-[10px] border border-white/[0.08] bg-[#141414]/75 px-2.5 py-2.5 sm:px-3">
      <div className="flex min-w-0 items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#58A3FF]/20 bg-[#0050F6]/15 text-[#58A3FF]">
          <FileText size={13} />
        </div>
        <div className="min-w-0">
          <div className="truncate text-[7px] sm:text-[8px]">{name}</div>
          <div className="mt-1 text-[7px] text-white/45">{amount}</div>
        </div>
      </div>
      <Status value={status} />
    </div>
  );
}

function Pending({
  name,
  amount,
  onReview,
}: {
  name: string;
  amount: string;
  onReview: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-[10px] border border-white/[0.08] bg-[#141414]/75 p-2.5 sm:p-3">
      <div className="flex min-w-0 items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-[#58A3FF]">
          <FileText size={13} />
        </div>
        <div className="min-w-0">
          <div className="truncate text-[7px] sm:text-[8px]">{name}</div>
          <div className="mt-1 text-[7px] text-white/45">{amount}</div>
        </div>
      </div>
      <button
        type="button"
        onClick={onReview}
        className="shrink-0 rounded-full border border-[#58A3FF]/30 px-2.5 py-2 text-[6px] text-[#8abfff] transition hover:bg-[#0050F6] hover:text-white"
      >
        Review
      </button>
    </div>
  );
}

/* =========================================================
   UPLOAD
========================================================= */

function UploadScreen() {
  return (
    <div className="mx-auto max-w-[850px]">
      <Heading detail="Upload a new batch of disbursement operations.">
        Upload batch
      </Heading>

      <div className="mt-5 rounded-[14px] border border-dashed border-[#58A3FF]/40 bg-[#0050F6]/[0.08] p-5 text-center backdrop-blur-xl sm:mt-6 sm:rounded-[18px] sm:p-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#58A3FF]/30 bg-[#0050F6]/20 text-[#58A3FF] sm:h-14 sm:w-14">
          <ArrowUp size={20} />
        </div>
        <div className="mt-5 text-[10px] font-medium">
          Upload your batch file
        </div>
        <p className="mx-auto mt-2 max-w-sm text-[8px] leading-5 text-white/45">
          Drag and drop your CSV file here or select a file from your computer.
        </p>
        <button
          type="button"
          className="mt-5 rounded-full bg-[#0050F6] px-5 py-3 text-[8px] font-medium text-white transition hover:bg-[#58A3FF] hover:text-[#141414]"
        >
          Select file
        </button>
      </div>

      <div className="mt-3 rounded-xl border border-white/[0.08] bg-[#141414]/75 p-3 text-[7px] leading-4 text-white/40">
        Supported format: CSV. Validate recipient details and amounts before submitting a batch.
      </div>
    </div>
  );
}

/* =========================================================
   TRANSACTIONS
========================================================= */

function TransactionsScreen() {
  const rows = [
    ["TX-92881", "Maria Lopez", "$2,450.00", "Completed"],
    ["TX-92880", "Carlos Ramirez", "$1,820.00", "Completed"],
    ["TX-92879", "Ana Hernandez", "$3,200.00", "Pending"],
    ["TX-92878", "Diego Torres", "$980.00", "Completed"],
  ];

  return (
    <div>
      <Heading detail="Review all disbursement transactions.">
        Transactions
      </Heading>

      <div className="mt-5 overflow-x-auto rounded-[14px] border border-white/10 bg-[#141414]/85 backdrop-blur-xl md:mt-6 md:rounded-[18px]">
        <div className="grid min-w-[440px] grid-cols-[1fr_1.2fr_1fr_1fr] border-b border-white/10 bg-white/[0.03] px-4 py-3 text-[7px] uppercase tracking-[0.09em] text-white/45 sm:px-5">
          <span>Reference</span>
          <span>Recipient</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        {rows.map(([reference, recipient, amount, status]) => (
          <div
            key={reference}
            className="grid min-w-[440px] grid-cols-[1fr_1.2fr_1fr_1fr] items-center gap-2 border-b border-white/[0.06] px-4 py-4 text-[8px] last:border-0 sm:px-5"
          >
            <span className="text-[#58A3FF]">{reference}</span>
            <span className="text-white/75">{recipient}</span>
            <span>{amount}</span>
            <span><Status value={status} /></span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   USERS
========================================================= */

function UsersScreen() {
  const users = [
    ["Alberto Martinez", "Administrator"],
    ["Maria Lopez", "Finance"],
    ["Carlos Ramirez", "Operations"],
    ["Ana Hernandez", "Viewer"],
  ];

  return (
    <div>
      <Heading detail="Manage users with access to the platform.">
        Users
      </Heading>

      <div className="mt-5 grid gap-2 sm:grid-cols-2 md:mt-6 md:gap-3">
        {users.map(([name, role]) => (
          <div
            key={name}
            className="flex items-center justify-between gap-3 rounded-[12px] border border-white/10 bg-[#141414]/85 p-3 backdrop-blur-xl sm:rounded-[15px] sm:p-4"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#58A3FF]/25 bg-[#0050F6]/15 text-[#58A3FF]">
                <User size={14} />
              </div>
              <div className="min-w-0">
                <div className="truncate text-[8px] font-medium">{name}</div>
                <div className="mt-1 text-[7px] text-white/40">{role}</div>
              </div>
            </div>
            <button
              type="button"
              aria-label={`More options for ${name}`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/40 transition hover:bg-white/10 hover:text-white"
            >
              <MoreHorizontal size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}