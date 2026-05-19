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
import { BlogSection } from "@/components/sections/blog-section"
import { CtaSection } from "@/components/sections/cta-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <VideoSection />
        <TargetAudienceSection />
        <DifferentialsSection />
        <ServicesSection />
        <ClientsSection />
        <TestimonialsSection />
        <BlogSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
