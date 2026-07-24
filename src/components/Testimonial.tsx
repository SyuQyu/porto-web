"use client";

import { motion } from "framer-motion";

export function Testimonial() {
  return (
    <section className="scroll-mt-24 bg-paper-2 py-24 md:py-32">
      <div className="container-editorial">
        <p className="eyebrow">
          <span className="eyebrow-num">06</span> Word of mouth
        </p>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-5xl font-display text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-balance text-foreground md:text-5xl"
        >
          &ldquo;Kyreon rebuilt our platform in six weeks. It&apos;s faster, it
          converts better, and for the first time our own team{" "}
          <span className="font-editorial font-normal text-brand">
            isn&apos;t afraid to ship.
          </span>
          &rdquo;
        </motion.blockquote>

        <div className="mt-10 flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground font-display text-sm font-bold text-background">
            K
          </span>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <p className="text-foreground">Kyreon team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
