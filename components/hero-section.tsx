"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute inset-0 bg-background/60 z-10" />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0yo5h00HLFCK0IP8HAki86q3SyjdCp.png"
          alt="Masquerade figure in ornate Venetian mask"
          className="w-full h-full object-cover object-top scale-110"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 z-20 text-xs tracking-[0.3em] uppercase text-muted-foreground">
        Nocturna 2025 Collection
      </div>
      <div className="absolute top-8 right-8 z-20 text-xs tracking-[0.3em] uppercase text-muted-foreground">
        The Design Table 2025
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 
          className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tight mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000"
          style={{ 
            textShadow: '0 0 80px rgba(212, 175, 55, 0.3)',
            letterSpacing: '-0.02em'
          }}
        >
          MASQUERADE
        </h1>
        
        <div className="flex items-center justify-center gap-8 text-sm tracking-[0.2em] uppercase text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <span>Reveal Nothing</span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span>Become Everything</span>
        </div>

        {/* Decorative Cross Symbol */}
        <div className="mt-16 flex justify-center animate-in fade-in duration-1000 delay-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/60">
            <path d="M12 2v20M2 12h20M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Side Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block max-w-[200px] text-xs leading-relaxed text-muted-foreground/70 animate-in fade-in slide-in-from-left-4 duration-1000 delay-300">
        <p>
          Set against a world where masks are more sacred than faces, Masquerade is an ode to silent power, veiled divinity, and the elegance of deception.
        </p>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block max-w-[200px] text-xs leading-relaxed text-muted-foreground/70 text-right animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
        <p>
          She moves not to be seen, but to be remembered—like a hymn sung in ruins. Step inside—but do not expect to leave unchanged.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
        <ChevronDown className="w-4 h-4 text-primary" />
      </div>

      {/* Corner Decorations */}
      <div className="absolute bottom-8 left-8 z-20">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary/40">
          <circle cx="8" cy="8" r="2" fill="currentColor" />
          <path d="M8 0v4M8 12v4M0 8h4M12 8h4" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 z-20">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary/40">
          <circle cx="8" cy="8" r="2" fill="currentColor" />
          <path d="M8 0v4M8 12v4M0 8h4M12 8h4" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </section>
  )
}
