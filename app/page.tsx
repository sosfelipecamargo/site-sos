import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroCarousel } from "@/components/sections/hero-carousel"
import { AboutSection } from "@/components/sections/about-section"
import { VideoSection } from "@/components/sections/video-section"
import { DifferentialsSection } from "@/components/sections/differentials-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TargetAudienceSection } from "@/components/sections/target-audience-section"
import { ClientsSection } from "@/components/sections/clients-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <ServicesSection />
        <AboutSection />
        <VideoSection />
        <TargetAudienceSection />
        <DifferentialsSection />
        <ClientsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
