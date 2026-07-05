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
      "Cross-platform mobile apps that feel native — from prototype to store launch and beyond.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    index: "04",
    title: "UI/UX & Design Systems",
    description:
      "Research-backed interfaces and reusable design systems that keep your product consistent as it grows.",
    tags: ["Design", "Prototyping", "Systems"],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="services" className="scroll-mt-24 bg-background py-24 md:py-32">
      <div className="container-editorial">
        {/* Section head */}
        <div className="flex flex-col justify-between gap-8 border-b border-border pb-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <span className="font-mono text-brand">§</span> Services
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-foreground md:text-6xl text-balance">
              Everything you need to go from idea to shipped.
            </h2>
          </div>
          <Link
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-foreground"
          >
            <span className="border-b border-brand pb-0.5">Discuss your project</span>
            <ArrowUpRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              <span className="font-mono text-sm text-muted-foreground md:col-span-1">
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
