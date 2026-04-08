"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    period: "Present",
    role: "Frontend Developer / Web Designer",
    company: "Ongoing Personal Development",
    description: "Continuously learning and adapting to industry standards and best practices.",
    technologies: ["Figma", "Webflow", "UI/UX Principles", "Responsive Design", "Modern Frontend Stack"],
  },
  {
    period: "2025 — Present",
    role: "Frontend Developer",
    company: "Personal Projects & Practice",
    description: "Translated ideas into functional products while improving both technical and visual aspects of development.",
    technologies: ["PostgreSQL", "Git", "GitHub", "React", "Next.js"],
  },
  {
    period: "2024 — 2025",
    role: "Cybersecurity Learner",
    company: "Self Learning and LKS Cybersecurity",
    description: "Explored cybersecurity concepts through practical challenges such as Capture The Flag (CTF).",
    technologies: ["Kali Linux","Python Scripting" ,"Web Security Basics", "CTF Platforms"],
  },
  {
    period: "2023 - 2024",
    role: "Computer and Network Engineer Student",
    company: "Vocation High School 2 Malang",
    description: "Built a strong foundation in computer systems, networking, and technical problem-solving.",
    technologies: ["Networking Fundamentals", "Linux", "Basic System Administration"],
  },
]

export function ExperienceSection() {
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
      id="experience"
      className="relative py-32 px-6 bg-card"
    >
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary">Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 text-balance">
            Professional Journey
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A progression of learning, exploration, and creation—each stage reflecting a deeper understanding of technology and design.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.period}
                className={`relative grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rotate-45 -translate-x-1/2 md:-translate-x-1/2 z-10" />

                {/* Left Side (Period) */}
                <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:text-left md:pl-12"} pl-8 md:pl-0`}>
                  <span className="text-sm tracking-[0.2em] uppercase text-primary">
                    {exp.period}
                  </span>
                </div>

                {/* Right Side (Content) */}
                <div className={`${index % 2 === 0 ? "md:pl-12" : "md:order-1 md:pr-12 md:text-right"} pl-8 md:pl-0`}>
                  <h3 className="font-serif text-2xl mb-1">{exp.role}</h3>
                  <p className="text-muted-foreground mb-4">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                  
                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs tracking-wider border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
