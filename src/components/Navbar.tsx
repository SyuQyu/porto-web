"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Stats", href: "#stats" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Rocket className="w-8 h-8 text-primary" />
          </motion.div>
          <span className="text-xl font-heading font-bold tracking-tight">
            Nero
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all hover:scale-105 active:scale-95"
          >
            Get in touch
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl md:hidden flex flex-col items-center py-6 gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-3 w-4/5 text-center mt-4 rounded-full bg-primary text-primary-foreground font-medium text-lg"
            >
              Get in touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
