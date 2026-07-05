"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.08 },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      {/* Masthead rule */}
      <div className="container-editorial">
        <div className="flex flex-wrap items-center justify-between gap-y-2 border-b border-border py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>Kyreon Studio</span>
          <span className="hidden sm:inline">Web · Product · Interface</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Booking Q3 2026
          </span>
        </div>
      </div>

      <div className="container-editorial pt-12 md:pt-16">
        {/* Eyebrow */}
        <motion.p
          custom={0}
          variants={rise}
          initial="hidden"
          animate="visible"
          className="eyebrow"
        >
          <span className="h-px w-8 bg-brand" />
          Independent web &amp; product studio · Est. 2018
        </motion.p>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={rise}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-balance text-foreground"
        >
          We design &amp; build digital products worth{" "}
          <span className="relative whitespace-nowrap text-brand">
            shipping
            <svg
              className="absolute -bottom-2 left-0 w-full text-brand/40"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M2 9C60 3 240 3 298 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </motion.h1>

        {/* Sub + actions row */}
        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-border pt-10 lg:grid-cols-12">
          <motion.p
            custom={2}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:col-span-6 text-pretty"
          >
            From first pixel to production. Kyreon partners with founders and
            teams to craft fast, conversion-focused websites, web apps, and
            mobile products — engineered in Next.js &amp; React, designed to
            last.
          </motion.p>

          <motion.div
            custom={3}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:col-span-6 lg:justify-end"
          >
            <Link
              href="#work"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group h-13 rounded-full px-7 text-base"
              )}
            >
              View selected work
              <ArrowUpRight className="ml-1.5 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-13 rounded-full border-foreground/20 px-7 text-base hover:bg-foreground hover:text-background"
              )}
            >
              Start a project
            </Link>
          </motion.div>
        </div>

        {/* Capability index */}
        <motion.div
          custom={4}
          variants={rise}
          initial="hidden"
          animate="visible"
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4"
        >
          {[
            { k: "01", t: "Web Design", d: "Sites & landing pages" },
            { k: "02", t: "Web Apps", d: "Dashboards & platforms" },
            { k: "03", t: "Mobile", d: "iOS & Android" },
            { k: "04", t: "SEO & Growth", d: "Found & fast" },
          ].map((c) => (
            <div
              key={c.k}
              className="group flex flex-col gap-3 bg-card p-5 transition-colors hover:bg-accent md:p-6"
            >
              <span className="font-mono text-xs text-brand">{c.k}</span>
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                {c.t}
              </span>
              <span className="text-sm text-muted-foreground">{c.d}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <div className="flex items-center justify-center pb-16 pt-10 md:pb-24">
          <Link
            href="#studio"
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
            Scroll to explore
          </Link>
        </div>
      </div>
    </section>
  );
}
