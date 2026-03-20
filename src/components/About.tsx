"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code, Layers, Layout, Smartphone } from "lucide-react";

export function About() {
  const features = [
    {
      title: "Custom Web Applications",
      description: "Scalable, high-performance web apps tailored to your business needs.",
      icon: <Layout className="w-6 h-6 text-primary" />
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile experiences that users love.",
      icon: <Smartphone className="w-6 h-6 text-indigo-400" />
    },
    {
      title: "UI/UX & Design Systems",
      description: "Beautiful, conversion-optimized interfaces that reflect your brand.",
      icon: <Layers className="w-6 h-6 text-pink-400" />
    },
    {
      title: "API & Backend Systems",
      description: "Robust architectures and secure APIs to power your digital ecosystem.",
      icon: <Code className="w-6 h-6 text-emerald-400" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">About Our Agency</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              We translate your vision into digital reality.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in the digital frontier, Nero Agency has been delivering exceptional software solutions since 2018. We believe in writing clean code, designing intuitive interfaces, and building products that drive real business value.
            </p>
            
            <ul className="space-y-4 pt-4">
              {["Agile & Transparent Process", "Senior Engineering Team", "Post-Launch Support & Maintenance", "Focused on ROI & Performance"].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/50 transition-colors shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-background border border-border/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-heading font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
