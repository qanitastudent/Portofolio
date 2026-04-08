"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 85, note: "Advanced" },
      { name: "TypeScript", level: 75, note: "Intermediate" },
      { name: "Tailwind CSS", level: 50, note: "Advanced" },
      { name: "Webflow", level: 80, note: "Advanced" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 65, note: "Basic" },
      { name: "PostgreSQL", level: 60, note: "Basic" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", level: 80, note: "Advanced" },
      { name: "UI/UX Design", level: 75, note: "Intermediate" },
    ],
  },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 px-6 bg-card"
    >
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary">Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 text-balance">
            Skills and Expertise
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A blend of technical skills and creative thinking, developed through hands-on experience in building modern and user-focused web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className={`p-8 bg-background border border-border/50 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${groupIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-2 bg-primary rotate-45" />
                <h3 className="font-serif text-2xl">{skillGroup.category}</h3>
              </div>

              {/* Skill Items */}
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.note}</span>
                    </div>
                    <div className="h-1 bg-muted overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${groupIndex * 200 + skillIndex * 100 + 400}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center mt-16">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary/30">
            <circle cx="24" cy="24" r="4" fill="currentColor" />
            <path d="M24 8v8M24 32v8M8 24h8M32 24h8" stroke="currentColor" strokeWidth="1" />
            <path d="M14 14l6 6M28 28l6 6M34 14l-6 6M20 28l-6 6" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  )
}
