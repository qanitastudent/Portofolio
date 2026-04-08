"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { title } from "process"

const projects = [
  {
    title: "Note Sharing App",
    category: "Web Application",
    description: "A digital museum experience featuring interactive 3D galleries and immersive storytelling for art collections.",
    tags: ["Next.js", "PostgreSQL", "Vercel", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80",
    links: { live: "#", github: "#" },
  },
  {
    title: "Portofolio Website",
    category: "Web Application",
    description: "A luxury fashion e-commerce platform with AI-driven personalization and seamless checkout experiences.",
    tags: ["Next.js", "PostgreSQL", "Vercel", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
    links: { live: "#", github: "#" },
  },
]

const projectNoCode = [
  {
    title: "Nuvia",
    category: "Template Webflow",
    description: "Luxury fashion e-commerce with AI-powered recommendations and seamless checkout experiences.",
    tags: ["Webflow", "Figma"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    links: { live: "#" },
  },
  {
    title: "Roamlog",
    category: "Template Webflow",
    description: "A travel blog template with interactive maps and user-generated content features.",
    tags: ["Webflow", "Figma"],
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80",
    links: { live: "#" },
  },
  {
    title: "Alumee",
    category: "Template Webflow",
    description: "A modern education platform template with interactive learning modules and progress tracking.",
    tags: ["Webflow", "Figma"],
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    links: { live: "#" },
  },
  {
    title: "Neurox",
    category: "Template Webflow",
    description: "A luxury lifestyle blog template with elegant design and seamless user experience.",
    tags: ["Webflow", "Figma"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    links: { live: "#" },
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])



  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary">Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 text-balance">
            Selected Work
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that reflect my approach to problem-solving, design, and development each built with intention and attention to detail.
          </p>
        </div>

        {/* Projects Grid 1 */}
        <div className="grid md:grid-cols-1 gap-8">
       {/* Projects Grid Coding*/}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative bg-card border border-border/50 overflow-hidden transition-all duration-1000 hover:border-primary/50 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={project.links.live}
                    className="p-3 bg-background/90 backdrop-blur-sm border border-border hover:border-primary transition-colors"
                    aria-label="View live site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.links.github}
                    className="p-3 bg-background/90 backdrop-blur-sm border border-border hover:border-primary transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-primary rotate-45" />
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs tracking-wider bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-primary/50 transform origin-top-right group-hover:h-16 transition-all duration-500" />
                <div className="absolute top-0 right-0 h-px w-8 bg-primary/50 transform origin-top-right group-hover:w-16 transition-all duration-500" />
              </div>
            </article>
          ))}
        </div>
       {/* Projects Grid No Code*/}
        <div className="grid md:grid-cols-2 gap-8">
          {projectNoCode.map((project, index) => (
            <article
              key={project.title}
              className={`group relative bg-card border border-border/50 overflow-hidden transition-all duration-1000 hover:border-primary/50 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={project.links.live}
                    className="p-3 bg-background/90 backdrop-blur-sm border border-border hover:border-primary transition-colors"
                    aria-label="View live site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.links.live}
                    className="p-3 bg-background/90 backdrop-blur-sm border border-border hover:border-primary transition-colors"
                    aria-label="View live site"
                  >
                    <img src="/icons/figma.svg" alt="Figma" className="w-5 h-5 invert" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-primary rotate-45" />
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs tracking-wider bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-primary/50 transform origin-top-right group-hover:h-16 transition-all duration-500" />
                <div className="absolute top-0 right-0 h-px w-8 bg-primary/50 transform origin-top-right group-hover:w-16 transition-all duration-500" />
              </div>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
