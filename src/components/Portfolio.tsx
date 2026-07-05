"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  category: string;
  image: string;
  url: string;
  year: string;
  tags: string[];
  featured: boolean;
};

const allProjects: Project[] = [
  {
    title: "CrescentRating SIT",
    category: "Data Platform",
    image: "/projects/crescentrating.png",
    url: "https://sit.crescentrating.com/",
    year: "2025",
    tags: ["Next.js", "Analytics", "Dashboard"],
    featured: true,
  },
  {
    title: "Patra Logistik OILS",
    category: "Enterprise System",
    image: "/projects/oils.png",
    url: "https://oils.patralogistik.com/",
    year: "2024",
    tags: ["React", "Logistics", "Java"],
    featured: true,
  },
  {
    title: "Workfrom",
    category: "Web App",
    image: "/projects/workfrom.png",
    url: "https://workfrom-fe.vercel.app/",
    year: "2024",
    tags: ["React", "Tailwind", "Vite"],
    featured: true,
  },
  {
    title: "WeCare MentalCare",
    category: "Healthcare Platform",
    image: "/projects/wecare.png",
    url: "https://wecare-mentalcare.netlify.app/",
    year: "2023",
    tags: ["Vue", "Node.js"],
    featured: true,
  },
  {
    title: "Company Profile MNI",
    category: "Corporate Site",
    image: "/projects/mni.png",
    url: "https://company-profile-mni.vercel.app/",
    year: "2025",
    tags: ["Next.js", "Framer Motion"],
    featured: false,
  },
  {
    title: "Ngawi Teknik",
    category: "Corporate Site",
    image: "/projects/ngawi-teknik.png",
    url: "https://ngawi-teknik.netlify.app/",
    year: "2024",
    tags: ["React", "TailwindCSS"],
    featured: false,
  },
  {
    title: "Mitra Kawan Bersama",
    category: "Corporate Site",
    image: "/projects/mitra.png",
    url: "https://www.mitrakawanbersama.com/",
    year: "2023",
    tags: ["WordPress", "SEO"],
    featured: false,
  },
  {
    title: "Mudah Digital",
    category: "Marketing Page",
    image: "/projects/mudahdigital.png",
    url: "http://mudahdigital.id/",
    year: "2023",
    tags: ["React", "SEO"],
    featured: false,
  },
  {
    title: "Asco Dewi Sartika",
    category: "Business Profile",
    image: "/projects/asco.png",
    url: "https://asco-dewi-sartika.netlify.app/",
    year: "2022",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const PROJECTS_PER_PAGE = 6;

  const featuredProjects = allProjects.filter((p) => p.featured);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return allProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  useEffect(() => setCurrentPage(1), [searchQuery]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <section id="work" className="scroll-mt-24 bg-background py-24 md:py-32">
      <div className="container-editorial">
        {/* Head */}
        <div className="flex flex-col justify-between gap-8 border-b border-border pb-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <span className="font-mono text-brand">§</span> Selected work
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-foreground md:text-6xl text-balance">
              Recent projects, shipped &amp; live.
            </h2>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-foreground"
          >
            <span className="border-b border-brand pb-0.5">
              Browse full archive ({allProjects.length})
            </span>
            <ArrowUpRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 pt-14 md:grid-cols-2">
          {featuredProjects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: (idx % 2) * 0.1 }}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-secondary">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/5" />
                <div className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-background text-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-4">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.category}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Archive modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-background"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/90 px-6 py-5 backdrop-blur-md md:px-10">
              <div className="flex items-baseline gap-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                  Project Archive
                </h2>
                <span className="font-mono text-xs text-muted-foreground">
                  {filteredProjects.length} results
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="container-editorial py-10">
                <div className="relative mb-10 max-w-md">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by name, category, or tech…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 w-full rounded-full border-border bg-card pl-11 text-base focus-visible:ring-brand"
                  />
                </div>

                {filteredProjects.length === 0 ? (
                  <div className="py-24 text-center text-muted-foreground">
                    No projects match &ldquo;{searchQuery}&rdquo;.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {currentProjects.map((project) => (
                      <a
                        key={project.title}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-foreground/30"
                      >
                        <div className="relative aspect-video overflow-hidden bg-secondary">
                          <img
                            src={project.image}
                            alt={`${project.title} — ${project.category}`}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                              {project.category}
                            </span>
                            <span className="font-mono text-[11px] text-muted-foreground">
                              {project.year}
                            </span>
                          </div>
                          <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand">
                            {project.title}
                          </h3>
                          <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                            {project.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {totalPages > 1 && (
                  <div className="mt-14 flex items-center justify-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full"
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <span className="w-24 text-center font-mono text-xs text-muted-foreground">
                      {currentPage} / {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full"
                      onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
