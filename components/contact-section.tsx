"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary">Contact</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 text-balance">
            Unmask the Conversation
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Behind every collaboration lies an invitation. Reach out, and let us craft something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-border">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">Email</h3>
                  <a 
                    href="mailto:hello@masquerade.dev" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@masquerade.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-border">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Venice, Italy</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <h3 className="font-serif text-lg mb-4">Follow the Trail</h3>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 text-xs tracking-[0.15em] uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="mt-12 p-6 border-l-2 border-primary/50 bg-card">
              <p className="italic text-muted-foreground">
                &quot;The mask never falls—until it does.&quot;
              </p>
              <cite className="block mt-2 text-xs tracking-[0.2em] uppercase text-primary not-italic">
                — The Design Table
              </cite>
            </blockquote>
          </div>

          {/* Contact Form */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-border bg-card">
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-2">Message Sent</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I&apos;ll respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors tracking-[0.15em] uppercase text-sm"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
