import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { ClientCarousel } from "@/components/ClientCarousel";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <ClientCarousel />
      <About />
      <Stats />
      <Portfolio />
      <Pricing />
      <Footer />
    </main>
  );
}
