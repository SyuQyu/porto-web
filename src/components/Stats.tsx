"use client";

import { motion } from "framer-motion";

const steps = [
  {
    index: "01",
    title: "Scope",
    body: "We dig into the problem, your users, and the constraints before writing a line of code. Clarity first, always.",
  },
  {
    index: "02",
    title: "Shape",
    body: "We turn the architecture, the flows, and the edge cases into a plan you can see and pressure-test early.",
  },
  {
    index: "03",
    title: "Build",
    body: "Design and engineering in one loop, shipped in weekly, reviewable slices you can click through as we go.",
  },
  {
    index: "04",
    title: "Iterate",
    body: "We launch, watch the numbers that matter, and keep improving long after the first release.",
  },
];

const principles = [
  "Senior team, no hand-offs to juniors",
  "Transparent, weekly-shipping process",
  "Performance & accessibility by default",
  "Support that continues after launch",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Stats() {
  return (
    <section
      id="studio"
      className="scroll-mt-24 border-y border-border bg-paper-2 py-24 md:py-32"
    >
      <div className="container-editorial">
        {/* Head */}
        <div className="grid grid-cols-1 gap-10 border-b border-border pb-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">
              <span className="eyebrow-num">04</span> How we work
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.03] tracking-[-0.03em] text-foreground md:text-6xl text-balance">
              From the first call to your{" "}
              <span className="font-editorial font-normal">first release.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-2">
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Kyreon is an independent studio. Since 2018 we&apos;ve helped
              startups and established companies turn ambitious ideas into
              software people actually enjoy using. Small teams, direct
              communication, quality that&apos;s non-negotiable.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {principles.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-[15px] text-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 gap-px pt-16 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="group flex flex-col gap-4 border-t border-border pt-6 lg:pr-8"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground/70">
                  {s.index}
                </span>
                <span className="h-px flex-1 bg-border transition-colors group-hover:bg-brand" />
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
