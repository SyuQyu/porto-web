"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.08 },
  }),
};

const ROTATING = ["faster.", "simpler.", "effortless.", "premium.", "yours."];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROTATING.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="grain relative w-full overflow-hidden bg-background pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Background motif */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
        {/* dotted grid */}
        <div className="absolute inset-0 opacity-[0.5] [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
        {/* soft brand glow */}
        <div className="absolute left-1/2 top-[42%] h-[65vh] w-[65vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.07] blur-[100px]" />
        {/* oversized faded arrows */}
        <ArrowUpRight
          className="absolute -left-24 top-10 h-[34rem] w-[34rem] -rotate-12 text-foreground/[0.03]"
          strokeWidth={1}
        />
        <ArrowUpRight
          className="absolute -right-24 bottom-0 h-[34rem] w-[34rem] rotate-12 text-foreground/[0.03]"
          strokeWidth={1}
        />
      </div>

      <div className="container-editorial relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow pill */}
        <motion.div
          custom={0}
          variants={rise}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background/60 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Web &amp; Product Studio
          <span className="text-muted-foreground/40">·</span>
          Jakarta
          <ArrowRight className="h-3.5 w-3.5" />
        </motion.div>

        {/* Headline */}
        <h1 className="mt-8 max-w-[18ch] font-display text-[clamp(2.9rem,9vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.03em] text-foreground">
          <motion.span
            custom={1}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="block"
          >
            We make the web
          </motion.span>
          <span className="flex flex-wrap items-baseline justify-center gap-x-4">
            <motion.span
              custom={2}
              variants={rise}
              initial="hidden"
              animate="visible"
            >
              feel
            </motion.span>
            <span className="relative inline-grid">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={i}
                  initial={{ y: "0.45em", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-0.45em", opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="col-start-1 row-start-1 whitespace-nowrap font-editorial text-foreground"
                >
                  {ROTATING[i]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          custom={3}
          variants={rise}
          initial="hidden"
          animate="visible"
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
        >
          An independent studio in Southeast Asia. We help founders and teams
          turn ambitious ideas into fast, reliable websites, web apps, and
          mobile products, built in Next.js &amp; React and{" "}
          <span className="font-editorial text-foreground">
            made to feel effortless.
          </span>
        </motion.p>

        {/* Actions */}
        <motion.div
          custom={4}
          variants={rise}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="#work"
            className="group inline-flex h-13 items-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            See the work
            <ArrowUpRight className="h-5 w-5 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-13 items-center gap-2 rounded-full border border-foreground/20 px-7 text-base font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Let&apos;s talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
