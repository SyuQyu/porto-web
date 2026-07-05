"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "UMKM",
    price: "Rp 100k",
    priceNote: "starting from",
    description:
      "For local businesses ready to go digital with a clean, fast presence.",
    features: [
      "Custom landing page",
      "Fully responsive",
      "Basic on-page SEO",
      "WhatsApp integration",
      "1 month free support",
    ],
    popular: false,
  },
  {
    name: "Company",
    price: "Rp 2jt",
    priceNote: "starting from",
    description:
      "Professional multi-page sites that build credibility for your brand.",
    features: [
      "Premium UI/UX design",
      "CMS / admin dashboard",
      "Advanced SEO setup",
      "Priority maintenance",
      "3 months free support",
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: "Rp 10jt",
    priceNote: "starting from",
    description:
      "Complex web & mobile applications engineered around your workflow.",
    features: [
      "Custom web or mobile app",
      "Scalable backend architecture",
      "Payment gateway integration",
      "Third-party API integrations",
      "Dedicated project manager",
    ],
    popular: false,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-background py-24 md:py-32">
      <div className="container-editorial">
        <div className="max-w-2xl border-b border-border pb-10">
          <p className="eyebrow">
            <span className="font-mono text-brand">§</span> Pricing
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-foreground md:text-6xl text-balance">
            Clear packages. No surprises.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Every engagement is scoped to your goals. These starting points give
            you a sense of the investment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-14 md:grid-cols-3">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                tier.popular
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-foreground">
                  Most chosen
                </span>
              )}

              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  {tier.name}
                </h3>
                <span
                  className={`font-mono text-xs ${
                    tier.popular ? "text-background/60" : "text-muted-foreground"
                  }`}
                >
                  0{idx + 1}
                </span>
              </div>

              <p
                className={`mt-3 min-h-12 text-sm ${
                  tier.popular ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {tier.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2 border-t border-current/15 pt-6">
                <span className="font-display text-4xl font-extrabold tracking-tight">
                  {tier.price}
                </span>
                <span
                  className={`text-xs ${
                    tier.popular ? "text-background/60" : "text-muted-foreground"
                  }`}
                >
                  {tier.priceNote}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        tier.popular ? "text-brand" : "text-brand"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`group mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  tier.popular
                    ? "bg-background text-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Get started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
