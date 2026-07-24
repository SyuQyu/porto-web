"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const EMAIL = "pandu.utomo.2002@gmail.com";
const WA_NUMBER = "6282137138687";
const WA_DISPLAY = "+62 821 3713 8687";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New project inquiry from ${formData.name || "Kyreon"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-card py-24 md:py-32">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* Left: pitch + channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="eyebrow">
              <span className="eyebrow-num">07</span> Contact
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-foreground md:text-6xl text-balance">
              Let&apos;s build something worth shipping.
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground text-pretty">
              Tell us about your project and we&apos;ll get back within one
              business day. Prefer to talk? Reach us directly.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-background p-5 transition-colors hover:border-foreground/30"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/12 text-brand">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      Email
                    </span>
                    <span className="font-medium text-foreground">{EMAIL}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-background p-5 transition-colors hover:border-foreground/30"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/12 text-brand">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      WhatsApp
                    </span>
                    <span className="font-medium text-foreground">{WA_DISPLAY}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-background p-7 md:p-10"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field
                  label="Full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Cooper"
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                />
              </div>

              <div className="mt-6 space-y-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What are you building, and what's the timeline?"
                  className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/25"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="group mt-6 h-13 w-full rounded-full text-base font-semibold"
              >
                Send project brief
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/25"
      />
    </div>
  );
}
