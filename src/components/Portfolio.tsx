"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const allProjects = [
  {
    title: "Ngawi Teknik",
    category: "Corporate Site",
    image: "/projects/ngawi-teknik.png",
    tags: ["React", "TailwindCSS"],
    featured: true,
  },
  {
    title: "Company Profile MNI",
    category: "Landing Page",
    image: "/projects/mni.png",
    tags: ["Next.js", "Framer Motion"],
    featured: true,
  },
  {
    title: "Asco Dewi Sartika",
    category: "Business Profile",
    image: "/projects/asco.png",
    tags: ["HTML", "CSS", "JS"],
    featured: true,
  },
  {
    title: "WeCare MentalCare",
    category: "Healthcare Platform",
    image: "/projects/wecare.png",
    tags: ["Vue", "Node.js"],
    featured: true,
  },
  {
    title: "Mitra Kawan Bersama",
    category: "Corporate Site",
    image: "/projects/mitra.png",
    tags: ["WordPress", "SEO"],
    featured: false,
  },
  {
    title: "Workfrom",
    category: "Web App",
    image: "/projects/workfrom.png",
    tags: ["React", "Tailwind", "Vite"],
    featured: false,
  },
  {
    title: "CrescentRating SIT",
    category: "Dashboard",
    image: "/projects/crescentrating.png",
    tags: ["Next.js", "Data Analytics"],
    featured: false,
  },
  {
    title: "Mudah Digital",
    category: "Marketing Page",
    image: "/projects/mudahdigital.png",
    tags: ["React", "SEO"],
    featured: false,
  },
  {
    title: "Patra Logistik OILS",
    category: "Enterprise System",
    image: "/projects/oils.png",
    tags: ["Java", "React", "Logistics"],
    featured: false,
  }
];

export function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const PROJECTS_PER_PAGE = 6;

  const featuredProjects = allProjects.filter(p => p.featured);

  const filteredProjects = useMemo(() => {
    return allProjects.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isModalOpen]);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Featured Client Projects
            </h3>
            <p className="text-muted-foreground text-lg">
              Explore some of the award-winning web and mobile applications we've built for ambitious companies worldwide.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <button 
                onClick={() => setIsModalOpen(true)}
                className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 cursor-pointer"
             >
                View all projects <ArrowUpRight className="w-4 h-4" />
             </button>
          </motion.div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 shadow-md border border-border/20">
                <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply group-hover:bg-transparent transition-all duration-700 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-background/90 text-foreground backdrop-blur-md hover:bg-background/90 shadow-sm border-0">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <div className="flex gap-2 flex-wrap mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center block md:hidden">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 cursor-pointer"
            >
              View all projects <ArrowUpRight className="w-4 h-4" />
            </button>
        </div>
      </div>

      {/* Fullscreen Animated Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 md:px-12 border-b border-border/50 bg-background/80 backdrop-blur-md z-10 sticky top-0">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                All Projects
              </h2>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full w-10 h-10 hover:bg-muted"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto w-full">
              <div className="max-w-7xl mx-auto p-6 md:p-12">
                
                {/* Search Bar */}
                <div className="relative mb-10 max-w-md mx-auto md:mx-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    type="text"
                    placeholder="Search projects, tags, or categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 rounded-full bg-secondary/50 border-border/50 focus-visible:ring-primary w-full text-base"
                  />
                </div>

                {/* Projects Grid */}
                {filteredProjects.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-lg text-muted-foreground">No projects found matching "{searchQuery}"</p>
                  </div>
                ) : (
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {currentProjects.map((project, idx) => (
                      <motion.div
                        key={`${project.title}-${idx}`}
                        variants={{
                          hidden: { opacity: 0, scale: 0.95 },
                          visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                        }}
                        className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          />
                          <Badge className="absolute top-3 left-3 bg-background/90 text-foreground backdrop-blur-md shadow-sm border-0">
                            {project.category}
                          </Badge>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <h4 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h4>
                          <div className="flex gap-2 flex-wrap mt-auto">
                            {project.tags.map(tag => (
                              <span key={tag} className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md bg-secondary text-secondary-foreground border border-border/30">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-16 flex items-center justify-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-10 h-10 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:hover:border-border/50"
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    
                    <div className="text-sm font-medium text-muted-foreground w-24 text-center">
                      Page {currentPage} of {totalPages}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-10 h-10 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:hover:border-border/50"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="w-5 h-5" />
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
