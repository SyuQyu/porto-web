"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const clients = [
  { name: "Acme Corp" },
  { name: "Globex" },
  { name: "Soylent" },
  { name: "Initech" },
  { name: "Umbrella" },
  { name: "Massive Dynamic" },
  { name: "Hooli" },
  { name: "Stark Ind." }
];

export function ClientCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-background overflow-hidden border-t border-border/30 shadow-inner">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-sm font-semibold text-primary/80 uppercase tracking-widest mb-12">
          Trusted by industry leaders worldwide
        </p>
        
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-full mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4 flex items-center">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-[15%]">
                <div className="flex items-center justify-center p-6 h-20 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 bg-secondary/50 rounded-2xl border border-border/50 hover:border-primary/50 shadow-sm cursor-pointer hover:-translate-y-1">
                  <span className="font-heading font-extrabold text-xl text-foreground/80 hover:text-foreground tracking-tight">{client.name}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
