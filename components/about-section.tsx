"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CWYgDwDTW0FwrTs4QrtOAXnKGjnt7m.png"
                alt="The Buffoon of Vanity - Venetian mask portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-primary/30" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-primary/30" />

            {/* Floating Label */}
            <div className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-sm px-4 py-2 border border-border">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Qanita</p>
              <p className="font-serif text-lg text-foreground">Ayu Qanita Putri Wasch</p>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="mb-8">
              <span className="text-xs tracking-[0.3em] uppercase text-primary">About</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 text-balance">
                Behind Every Mask Lies a Story
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am passionate about technology, with a strong focus on web development and a growing interest in cybersecurity. I specialize in building modern, responsive, and interactive web interfaces using technologies such as React, Next.js, and Tailwind CSS, with an emphasis on creating intuitive and engaging user experiences.
              </p>
              <p>
                Alongside development, I explore cybersecurity through web application testing and Capture The Flag (CTF) challenges. This experience allows me to understand how vulnerabilities occur and how to build systems that are more secure and reliable.
              </p>
              <p>
                I am experienced in using tools like Figma, Webflow, and Git to support the development process from design to deployment. I continuously strive to improve my skills, adapt to new technologies, and approach problems with a structured and analytical mindset.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-border/50">
              {[
                { number: "1+", label: "Years Building" },
                { number: "6+", label: "Projects Completed" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-3xl md:text-4xl text-primary">{stat.number}</div>
                  <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
