"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

const animationhero = [
  {
    src: "/icons/cat1.png",
    bg: "#fbc462",
    text : "#3d3d3b",
  },
  {
    src: "/icons/cat2.png",
    bg: "#6e83b5",
    text : "#fefefe",
  },
];

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [index, setIndex] = useState(0)
  const current = animationhero[index]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % animationhero.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 animate-in fade-in slide-in-from-bottom-4 duration-1000"
        style={{
          backgroundColor: animationhero[index].bg,
          transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute inset-0 mix-blend-overlay opacity-30 z-10" />
        <img
          src={animationhero[index].bg}
          className="w-full h-full object-cover object-top scale-110"
        />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20">
        <img
          key={index}
          src={animationhero[index].src}
          className="w-150 h-150 transition-all duration-100 animate-float animate-float-disappear"
        />
      </div>
      </div>

      <div 
          style={{
            color: current.text,
            textShadow: '0 0 80px rgba(212, 175, 55, 0.3)',
            letterSpacing: '-0.02em'
          }}
      >
      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 z-20 text-xs tracking-[0.3em] uppercase animate-in fade-in slide-in-from-top-4 duration-1000">
        Diperbarui Tahun 2026
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h5
          className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[5rem] font-bold tracking-tight mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000"
          style={{
            color: current.text,
            textShadow: '0 0 80px rgba(212, 175, 55, 0.3)',
            letterSpacing: '-0.02em'
          }}
        >
          Ayu Qanita Putri Wasch
        </h5>

        <div className="md:flex grid gap-1 items-center md:justify-center md:gap-8 text-sm tracking-[0.2em] uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span>Frontend Developer</span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span>UI/UX Design</span>
        </div>

        {/* Decorative Cross Symbol */}
        <div className="mt-16 flex justify-center animate-in fade-in duration-1000 delay-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/60">
            <path d="M12 2v20M2 12h20M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Side Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block max-w-[200px] text-xs leading-relaxed animate-in fade-in slide-in-from-left-4 duration-1000 delay-300">
        <p>
          Frontend Developer yang fokus pada UI modern dan interaktif untuk pengalaman pengguna yang optimal.
        </p>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block max-w-[200px] text-xs leading-relaxed text-right animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
        <p>
          UI/UX Designer dengan keahlian dalam menciptakan antarmuka yang estetis dan mudah digunakan.
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
    </div>
    </section>
  )
}
