import React from "react";
import { TVLChartWrapper } from "@/components/tvl-chart-wrapper";

export default function LandingPage() {
  const iconSize = 20;

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      <header className="px-8 pt-6 pb-2">
          <img src="/HFT Labs Banner.svg" alt="HFT Labs" className="h-12 w-auto" />
      </header>

      <section className="flex flex-1 items-center px-6 py-4 lg:py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1 space-y-4 text-left">
            <div className="space-y-3">
              <p className="text-base text-white/70 sm:text-lg">
                <span className="font-semibold text-white">hft.studio</span> is developed by HFT Labs. It is an advanced concentrated liquidity management platform for professionals.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://hft.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-white hover:bg-white/15"
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <TVLChartWrapper />
          </div>
        </div>
      </section>

      <footer className="px-8 pb-4 pt-2 flex items-center justify-end gap-6">
        <div className="flex items-center justify-center space-x-8">
          <a
            href="https://github.com/hft-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-[#5AA1E3]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={iconSize}
              height={iconSize}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          <a
            href="https://discord.gg/dKvWjKbw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-[#5AA1E3]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={iconSize}
              height={iconSize}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Discord</title>
              <path d="M9 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm6 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
              <path d="M7.5 3h9l.5 1.5L18.5 9c0 6-3 7.5-6.5 7.5S5.5 15 5.5 9L7 4.5 7.5 3z" />
              <path d="M8 17.5c-2 2-2 4.5-2 4.5h12s0-2.5-2-4.5" />
            </svg>
          </a>

          <a
            href="https://x.com/HftStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-[#5AA1E3]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={iconSize}
              height={iconSize}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <title>X</title>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/hft-labs/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-[#5AA1E3]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={iconSize}
              height={iconSize}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}