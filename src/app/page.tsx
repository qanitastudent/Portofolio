import { Navigation } from "@/src/components/navigation"
import { HeroSection } from "@/src/components/hero-section"
import { AboutSection } from "@/src/components/about-section"
import { SkillsSection } from "@/src/components/skills-section"
import { ProjectsSection } from "@/src/components/projects-section"
import { ExperienceSection } from "@/src/components/experience-section"
import { ContactSection } from "@/src/components/contact-section"
import { Footer } from "@/src/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
