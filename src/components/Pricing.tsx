"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "UMKM",
    price: "From Rp. 100k",
    description: "The most affordable package strictly designed to help local businesses grow and go digital.",
    features: [
      "Custom Landing Page",
      "Mobile Responsive View",
      "Basic On-Page SEO",
      "WhatsApp Contact Integration",
      "1 Month Free Support"
    ],
    popular: false,
  },
  {
    name: "Company",
    price: "From Rp. 2000k",
    description: "Professional multi-page websites designed to elevate your company's credibility and corporate brand.",
    features: [
      "Premium UI/UX Design",
      "CMS (Admin Dashboard)",
      "Advanced SEO Setup",
      "Priority Maintenance",
      "3 Months Free Support"
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: "From Rp. 10000k",
    description: "Complex software solutions, web applications, or custom mobile apps tailored strictly to your needs.",
    features: [
      "Custom Web or Mobile App",
      "Scalable Backend Architecture",
      "Payment Gateway Integration",
      "Third-party API Integrations",
      "Dedicated Project Manager",
      "24/7 SLA Support"
    ],
    popular: false,
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-card relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary uppercase tracking-wider mb-2"
          >
            Transparent Pricing
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
          >
            Invest in your digital growth
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            We don't just build apps; we build businesses. Choose a package that fits your objectives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative flex flex-col p-8 rounded-3xl border ${
                tier.popular 
                  ? "bg-background border-primary shadow-2xl shadow-primary/10 scale-100 md:scale-105 z-10" 
                  : "bg-background/50 border-border/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-2xl font-bold font-heading mb-2">{tier.name}</h4>
                <p className="text-muted-foreground text-sm h-12">{tier.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-foreground">{tier.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={tier.popular ? "default" : "outline"} 
                className={`w-full h-12 rounded-xl text-base ${
                  !tier.popular && "border-border hover:bg-secondary/50"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
