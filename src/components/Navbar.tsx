"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Services", href: "#services", index: "01" },
  { name: "Work", href: "#work", index: "02" },
  { name: "Studio", href: "#studio", index: "03" },
  { name: "Pricing", href: "#pricing", index: "04" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-16 items-center justify-between md:h-18">
        {/* Wordmark */}
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Kyreon home">
          <span className="block h-3.5 w-3.5 rounded-[3px] bg-brand transition-transform duration-300 group-hover:rotate-45" />
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
            Kyreon
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              <span className="font-mono text-[10px] text-muted-foreground group-hover:text-brand">
                {link.index}
              </span>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0 md:inline-flex"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <nav className="container-editorial flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-border/60 py-4 text-lg font-medium text-foreground last:border-0"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{link.index}</span>
                    {link.name}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground"
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
