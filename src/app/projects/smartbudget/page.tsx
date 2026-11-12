import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SmartBudget — Tyson",
  description:
    "A UX case study for SmartBudget, a personal budgeting app designed to make expense tracking clearer and easier to stick with.",
};

const screens = [
  {
    src: "/projects/smartbudget/dashboard.png",
    alt: "SmartBudget dashboard showing monthly balance, spending by category, and recent activity",
    width: 333,
    height: 1024,
    label: "Dashboard",
  },
  {
    src: "/projects/smartbudget/new-log.png",
    alt: "SmartBudget new log screen for entering an expense",
    width: 408,
    height: 946,
    label: "New log",
  },
  {
    src: "/projects/smartbudget/transactions.png",
    alt: "SmartBudget calendar of October 2025 transactions",
    width: 402,
    height: 946,
    label: "Transactions",
  },
  {
    src: "/projects/smartbudget/stats.png",
    alt: "SmartBudget financial trends chart and spending by category",
    width: 289,
    height: 1024,
    label: "Stats",
  },
  {
    src: "/projects/smartbudget/settings.png",
    alt: "SmartBudget settings with theme, language, and privacy options",
    width: 402,
    height: 946,
    label: "Settings",
  },
];

export default function SmartBudgetPage() {
  return (
    <main className="flex-1">
      <article className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <Link
          href="/work"
          className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
        >
          ← Work
        </Link>
        <p className="mt-8 text-sm tracking-[0.18em] text-zinc-400 uppercase">
          2025 · Capstone
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.15] font-medium tracking-tight text-[var(--ink)] sm:text-5xl">
          SmartBudget
        </h1>
        <p className="mt-3 max-w-2xl text-xl text-[var(--muted)]">
          Designing financial clarity through simplicity
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
          A UX case study for a personal budgeting app that helps people build
          better money habits. The work covers research, problem framing,
          flows, and high-fidelity interface design.
        </p>
        <a
          href="/projects/smartbudget/capstone.pdf"
          className="mt-6 inline-block text-sm text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4"
        >
          Read the full case study PDF
        </a>

        <Image
          src="/projects/smartbudget/mid-fi-wireframes.png"
          alt="Five mid-fidelity SmartBudget phone screens: dashboard, new log, calendar, trends, and settings"
          width={1024}
          height={434}
          className="mt-12 h-auto w-full rounded-[2px] border border-[var(--line)] bg-[#e8eef3]"
          priority
        />

        <section className="mt-16 grid gap-10 border-t border-[var(--line)] pt-12 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-medium text-[var(--ink)]">The problem</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              People who already budget find manual logging tedious, so they
              drop off. People who are new to budgeting often never start,
              because the tools feel complex and intimidating.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-[var(--ink)]">How might we</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Design an intuitive budgeting app that helps users track savings,
              see their spending, and stay consistent — without feeling
              overwhelmed.
            </p>
          </div>
        </section>

        <section className="mt-16 border-t border-[var(--line)] pt-12">
          <h2 className="text-2xl font-medium text-[var(--ink)]">What research showed</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Interviews with five people aged 22–55, plus published data on
            financial literacy in Singapore, pointed to three design needs:
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            <li className="rounded-[2px] border border-[var(--line)] bg-white/[0.04] p-5">
              <h3 className="text-lg font-medium text-[var(--ink)]">Visual clarity</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Graphs and summaries help people understand patterns and stay
                engaged.
              </p>
            </li>
            <li className="rounded-[2px] border border-[var(--line)] bg-white/[0.04] p-5">
              <h3 className="text-lg font-medium text-[var(--ink)]">Less friction</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Heavy manual entry is the main reason people stop logging
                transactions.
              </p>
            </li>
            <li className="rounded-[2px] border border-[var(--line)] bg-white/[0.04] p-5">
              <h3 className="text-lg font-medium text-[var(--ink)]">Customization</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Categories and personal control make budgeting feel relevant
                instead of generic.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-16 border-t border-[var(--line)] pt-12">
          <h2 className="text-2xl font-medium text-[var(--ink)]">Interface</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            High-fidelity screens for the core loop: see a monthly overview, log
            an expense quickly, review the calendar, and check trends.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {screens.map((screen) => (
              <li key={screen.src} className="min-w-0">
                <div className="overflow-hidden rounded-[2px] border border-[var(--line)] bg-[#0b0d16]">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={screen.width}
                    height={screen.height}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-2 text-center text-xs text-[var(--muted)]">
                  {screen.label}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
