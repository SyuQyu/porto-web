import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Studio",
    links: [
      { name: "Services", href: "#services" },
      { name: "Selected work", href: "#work" },
      { name: "About the studio", href: "#studio" },
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

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-editorial py-16 md:py-20">
        {/* Big CTA line */}
        <div className="flex flex-col justify-between gap-8 border-b border-border pb-14 md:flex-row md:items-end">
          <Link
            href="#contact"
            className="group max-w-3xl font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground md:text-5xl"
          >
            Have a project in mind?{" "}
            <span className="text-brand underline decoration-brand/30 decoration-2 underline-offset-8 transition-colors group-hover:decoration-brand">
              Let&apos;s talk
            </span>
            <ArrowUpRight className="ml-2 inline h-8 w-8 align-baseline text-brand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:h-11 md:w-11" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="block h-3.5 w-3.5 rounded-[3px] bg-brand" />
              <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
                Kyreon
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground text-pretty">
              An independent web &amp; product studio. We design and build fast,
              conversion-focused software for teams worldwide.
            </p>
            <a
              href="https://github.com/SyuQyu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-brand"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-8 font-mono text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Kyreon Studio. All rights reserved.</p>
          <p>Built with Next.js · Designed in-house</p>
        </div>
      </div>
    </footer>
  );
}
