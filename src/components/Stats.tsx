"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const AnimatedCounter = ({
  to,
  duration = 1.8,
}: {
  to: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * to));
      if (p < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}</span>;
};

const stats = [
  { label: "Projects shipped", value: 150, suffix: "+" },
  { label: "Client satisfaction", value: 98, suffix: "%" },
  { label: "Years in practice", value: 6, suffix: "" },
  { label: "Avg. Lighthouse score", value: 96, suffix: "" },
];

const principles = [
  "Senior team, no hand-offs to juniors",
  "Transparent, weekly-shipping process",
  "Performance & accessibility by default",
  "Support that continues after launch",
];

export function Stats() {
  return (
    <section
      id="studio"
      className="scroll-mt-24 border-y border-border bg-card py-24 md:py-32"
    >
      <div className="container-editorial grid grid-cols-1 gap-16 lg:grid-cols-12">
        {/* Narrative */}
        <div className="lg:col-span-5">
          <p className="eyebrow">
            <span className="font-mono text-brand">§</span> The studio
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground md:text-5xl text-balance">
            A small team with a bias for craft.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Kyreon is an independent studio. Since 2018 we&apos;ve helped
            startups and established companies turn ambitious ideas into
            software people actually enjoy using. We keep teams small,
            communication direct, and quality non-negotiable.
          </p>

          <ul className="mt-8 space-y-3">
            {principles.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 text-foreground"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-[15px]">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Numbers */}
        <div className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-xl border border-border bg-border lg:col-span-7">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-2 bg-card p-8 md:p-10"
            >
              <div className="flex items-baseline font-display text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
                <AnimatedCounter to={s.value} />
                <span className="text-brand">{s.suffix}</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
