import React from "react";

const projects = [
  {
    name: "hft.studio",
    description:
      "Advanced concentrated liquidity management platform for professionals.",
    href: "https://hft.studio",
  },
  {
    name: "poker-study-ai",
    description: "Live agent poker coach.",
    href: "#",
  },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/hft-studio",
    path: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
    stroke: true,
  },
  {
    name: "Discord",
    href: "https://discord.gg/dKvWjKbw",
    path: (
      <>
        <path d="M9 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm6 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
        <path d="M7.5 3h9l.5 1.5L18.5 9c0 6-3 7.5-6.5 7.5S5.5 15 5.5 9L7 4.5 7.5 3z" />
        <path d="M8 17.5c-2 2-2 4.5-2 4.5h12s0-2.5-2-4.5" />
      </>
    ),
    stroke: true,
  },
  {
    name: "X",
    href: "https://x.com/HftStudio",
    path: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    stroke: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/hft-labs/posts/?feedView=all",
    path: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    stroke: true,
  },
];

export default function LandingPage() {
  const iconSize = 22;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="bg-black px-8 pt-6 pb-2">
        <img src="/HFT Labs Banner.svg" alt="HFT Labs" className="h-12 w-auto" />
      </header>

      <section className="flex-1 flex items-center px-6 py-10">
        <div className="mx-auto w-full max-w-3xl space-y-10">
          <p className="text-base text-white/70 sm:text-lg">
            HFT Labs builds tools and platforms for professionals.
          </p>

          <ul className="divide-y divide-white/10 border-y border-white/10">
            {projects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-6 py-6 transition hover:text-[#5AA1E3]"
                >
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold text-white group-hover:text-[#5AA1E3]">
                      {project.name}
                    </h2>
                    <p className="text-sm text-white/70">{project.description}</p>
                  </div>
                  <span
                    aria-hidden
                    className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50 transition group-hover:text-[#5AA1E3]"
                  >
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-8 pt-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#5AA1E3]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={iconSize}
                  height={iconSize}
                  viewBox="0 0 24 24"
                  fill={social.stroke ? "none" : "currentColor"}
                  stroke={social.stroke ? "currentColor" : undefined}
                  strokeWidth={social.stroke ? 2 : undefined}
                  strokeLinecap={social.stroke ? "round" : undefined}
                  strokeLinejoin={social.stroke ? "round" : undefined}
                >
                  <title>{social.name}</title>
                  {social.path}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
