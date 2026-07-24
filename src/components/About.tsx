"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    index: "01",
    title: "Websites & Landing Pages",
    description:
      "Marketing sites, company profiles, and landing pages that load fast, rank well, and turn visitors into customers.",
    tags: ["Next.js", "SEO", "CMS"],
  },
  {
    index: "02",
    title: "Web Applications",
    description:
      "Dashboards, internal tools, and SaaS platforms built on scalable architecture with clean, maintainable code.",
    tags: ["React", "APIs", "Auth"],
  },
  {
    index: "03",
    title: "Mobile Products",
    description:
      "Cross-platform mobile apps that feel native, from prototype to store launch and beyond.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    index: "04",
    title: "UI/UX & Design Systems",
    description:
      "Research-backed interfaces and reusable design systems that keep your product consistent as it grows.",
    tags: ["Design", "Prototyping", "Systems"],
  },
  {
    index: "05",
    title: "AI SEO & Generative Engine Optimization",
    description:
      "Get found by AI, not just Google. We optimize your content and schema to be cited in ChatGPT, Perplexity, and Google AI Overviews.",
    tags: ["GEO", "LLM", "Schema"],
  },
  {
    index: "06",
    title: "AI Projects & Automation",
    description:
      "Custom AI features built into your product: chatbots, RAG assistants, and workflow automation powered by the latest language models.",
    tags: ["LLM", "RAG", "Agents"],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="services" className="scroll-mt-24 bg-background py-24 md:py-32">
      <div className="container-editorial">
        {/* Manifesto */}
        <div className="border-b border-border pb-16 md:pb-20">
          <p className="eyebrow">
            <span className="eyebrow-num">01</span> Why Kyreon
          </p>
          <p className="mt-8 max-w-5xl font-display text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-balance text-foreground md:text-[3.25rem]">
            Great software is{" "}
            <span className="font-editorial font-normal">invisible.</span> We
            sweat the architecture, the load times, and the details users never
            notice, so the moments they do notice feel effortless. Products that
            don&apos;t just look sharp, they{" "}
            <span className="mark-accent">perform</span>.
          </p>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 md:mt-16 md:grid-cols-4 md:pt-12">
            {[
              { k: "50", d: "Projects shipped" },
              { k: "4 years", d: "In practice" },
              { k: "96", d: "Avg. Lighthouse" },
              { k: "98%", d: "Client satisfaction" },
            ].map((c, idx) => (
              <motion.div
                key={c.d}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease, delay: idx * 0.08 }}
                className="flex flex-col gap-1"
              >
                <span className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {c.k}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {c.d}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section head */}
        <div className="flex flex-col justify-between gap-8 border-b border-border pb-10 pt-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <span className="eyebrow-num">02</span> What we do
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-foreground md:text-6xl text-balance">
              One team across every layer of the build.
            </h2>
          </div>
          <Link
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-foreground"
          >
            <span className="border-b-2 border-brand pb-0.5">Discuss your project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Service rows */}
        <div className="divide-y divide-border">
          {services.map((s, i) => (
            <motion.div
              key={s.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="group grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
            >
              <span className="font-mono text-sm text-muted-foreground/70 md:col-span-1">
                {s.index}
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand md:col-span-4 md:text-3xl">
                {s.title}
              </h3>
              <p className="max-w-xl text-muted-foreground md:col-span-5">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2 md:col-span-2 md:justify-end">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
