"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Smartphone, Zap } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse animation-delay-2000" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6 max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/10 text-primary flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Next-Gen App & Web Agency</span>
              </Badge>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-[1.1]">
              We craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">digital experiences</span> that inspire.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Elevate your brand with high-performance web applications, beautiful UI/UX, and robust mobile solutions designed to convert.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Link href="#portfolio" className={cn(buttonVariants({ size: "lg" }), "rounded-full text-base h-14 px-8")}>
                View Our Work <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#contact" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full text-base h-14 px-8 border-border hover:bg-secondary/50")}>
                Contact Us
              </Link>
            </motion.div>
            
            {/* Quick Stats or Trust Indicators in Hero */}
            <motion.div variants={itemVariants} className="flex items-center gap-8 pt-8 mt-4 border-t border-border/50 w-full max-w-md">
              <div className="flex flex-col">
                <span className="text-3xl font-heading font-bold text-foreground">150+</span>
                <span className="text-sm text-muted-foreground">Successful Projects</span>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="flex flex-col">
                <span className="text-3xl font-heading font-bold text-foreground">99%</span>
                <span className="text-sm text-muted-foreground">Client Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual/3D Element Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main abstract card */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-8 inset-y-12 bg-card border border-border/50 rounded-3xl shadow-2xl overflow-hidden glassmorphism"
              >
                <div className="h-12 border-b border-border/50 flex items-center px-4 gap-2 bg-muted/30">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="w-3/4 h-6 rounded-md bg-muted animate-pulse" />
                  <div className="w-full h-4 rounded-md bg-muted/50 animate-pulse" />
                  <div className="w-5/6 h-4 rounded-md bg-muted/50 animate-pulse delay-75" />
                  <div className="w-full h-32 mt-6 border border-border/50 rounded-lg bg-primary/5 flex items-center justify-center">
                     <Code2 className="w-12 h-12 text-primary/40" />
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 top-1/4 p-4 bg-card rounded-2xl border border-border/50 shadow-xl glassmorphism"
              >
                <Smartphone className="w-8 h-8 text-indigo-400" />
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-8 bottom-1/3 p-4 bg-card rounded-2xl border border-border/50 shadow-xl glassmorphism"
              >
                <Code2 className="w-8 h-8 text-primary" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
