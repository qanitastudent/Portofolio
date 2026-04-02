"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "The Gilded Archive",
    category: "Web Application",
    description: "A digital museum experience featuring interactive 3D galleries and immersive storytelling for art collections.",
    tags: ["Next.js", "Three.js", "GSAP", "Prisma"],
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80",
    links: { live: "#", github: "#" },
  },
  {
    title: "Velvet Commerce",
    category: "E-Commerce Platform",
    description: "Luxury fashion e-commerce with AI-powered recommendations and seamless checkout experiences.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    links: { live: "#", github: "#" },
  },
  {
    title: "Nocturne Dashboard",
    category: "SaaS Application",
    description: "Analytics dashboard with real-time data visualization and dark-themed interface design.",
    tags: ["TypeScript", "D3.js", "GraphQL", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    links: { live: "#", github: "#" },
  },
  {
    title: "Shadow Protocol",
    category: "Mobile Application",
    description: "Secure messaging app with end-to-end encryption and elegant minimalist design.",
    tags: ["React Native", "WebSocket", "Encryption"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    links: { live: "#", github: "#" },
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
            Works of Intrigue
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Each project is a performance—carefully choreographed to captivate, engage, and leave an indelible mark.
          </p>
        </div>

        {/* Projects Grid */}
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
      </div>
    </section>
  )
}
