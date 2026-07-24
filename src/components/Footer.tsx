import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Menu",
    links: [
      { name: "Selected work", href: "#work" },
      { name: "Services", href: "#services" },
      { name: "The studio", href: "#studio" },
      { name: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { name: "Web development", href: "#services" },
      { name: "Web applications", href: "#services" },
      { name: "Mobile products", href: "#services" },
      { name: "UI/UX & SEO", href: "#services" },
    ],
  },
];

const EMAIL = "pandu.utomo.2002@gmail.com";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-foreground text-background">
      <div className="container-editorial py-20 md:py-28">
        {/* Big CTA */}
        <p className="eyebrow text-background/50">
          <span className="font-mono text-background/40">08</span> Let&apos;s begin
        </p>
        <Link
          href="#contact"
          className="group mt-8 block max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em]"
        >
          Let&apos;s build something{" "}
          <span className="font-editorial font-normal text-brand">
            that lasts.
          </span>
          <ArrowUpRight className="ml-2 inline h-10 w-10 align-baseline text-brand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:h-16 md:w-16" />
        </Link>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="#contact"
            className="group inline-flex h-13 items-center gap-2 rounded-full bg-background px-7 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-5 w-5 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href={`mailto:${EMAIL}`}
            className="font-mono text-sm text-background/70 transition-colors hover:text-background"
          >
            {EMAIL}
          </a>
        </div>

        {/* Columns */}
        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-background/15 pt-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="block h-3.5 w-3.5 bg-brand" />
              <span className="font-display text-lg font-bold tracking-tight">
                Kyreon
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-background/60 text-pretty">
              An independent web &amp; product studio. We design and build fast,
              conversion-focused software for teams worldwide.
            </p>
            <a
              href="https://github.com/SyuQyu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/25 text-background transition-colors hover:bg-background hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-background/40">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      className="text-sm text-background/80 transition-colors hover:text-brand"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-background/15 pt-8 font-mono text-xs text-background/50 md:flex-row">
          <p>© {new Date().getFullYear()} Kyreon Studio. All rights reserved.</p>
          <p>Built with Next.js. Designed in-house.</p>
        </div>
      </div>
    </footer>
  );
}
