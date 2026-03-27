"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedCounter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

export function Stats() {
  const stats = [
    { label: "Completed Projects", value: 154, suffix: "+" },
    { label: "Happy Clients", value: 98, suffix: "%" },
    { label: "Years Experience", value: 6, suffix: "+" },
  ];

  return (
    <section id="stats" className="py-20 bg-secondary/30 border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-2"
            >
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-primary flex items-baseline">
                <AnimatedCounter from={0} to={stat.value} duration={2} />
                <span className="text-2xl md:text-3xl">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
