"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedTextCycle } from "@/components/ui/animated-text-cycle"

interface SlideBase {
  id: number
  badge: string
  cta: { text: string; href: string; external?: boolean }
  image: string
  objectPosition?: string
  overlayOpacity?: number
}

interface AnimatedSlide extends SlideBase {
  line1Before: string
  animatedWords: string[]
  line1After: string
  line2: string
}

interface StaticSlide extends SlideBase {
  line1: string
  line1Bold?: string[]
  line1BoldColor?: string
  line2: string
  line2Bold?: string[]
  line2BoldColor?: string
}

type Slide = AnimatedSlide | StaticSlide

function isAnimatedSlide(slide: Slide): slide is AnimatedSlide {
  return 'animatedWords' in slide
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "PORTARIA VIRTUAL SOS",
    line1Before: "Mais",
    animatedWords: ["segurança", "eficiência", "economia"],
    line1After: "para",
    line2: "a sua portaria",
    cta: { text: "Saiba mais", href: "/solucoes/portaria-virtual" },
    image: "/images/hero/portaria-virtual-bg.png",
    objectPosition: "center center",
    overlayOpacity: 0.65,
  },
  {
    id: 2,
    badge: "MONITORAMENTO SOS",
    line1: "Resposta inteligente",
    line1Bold: ["inteligente"],
    line1BoldColor: "text-primary",
    line2: "em cada disparo",
    cta: { text: "Saiba mais", href: "/solucoes/monitoramento-de-alarmes" },
    image: "/images/hero/monitoramento-bg.png",
    objectPosition: "left center",
    overlayOpacity: 0.75,
  },
  {
    id: 3,
    badge: "GRUPO SOS",
    line1: "Há 46 anos cuidando",
    line1Bold: ["46 anos"],
    line2: "do que realmente importa",
    line2Bold: ["realmente importa"],
    line2BoldColor: "text-primary",
    cta: { text: "Saiba mais", href: "#sobre" },
    image: "/images/hero/sos-telecom-bg.png",
    objectPosition: "center center",
    overlayOpacity: 0.70,
  },
  {
    id: 4,
    badge: "SOS TELECOM",
    line1: "Internet rápida com",
    line1Bold: ["rápida"],
    line2: "suporte de qualidade",
    line2Bold: ["qualidade"],
    line2BoldColor: "text-primary",
    cta: { text: "Saiba mais", href: "https://sostelecom.net.br", external: true },
    image: "/images/hero/grupo-sos-bg.png",
    objectPosition: "center center",
    overlayOpacity: 0.75,
  },
]

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3 },
  },
}

// Helper function to bold specific words in a line
function renderLineWithBold(text: string, boldWords?: string[], boldColor?: string) {
  if (!boldWords || boldWords.length === 0) {
    return <span className="font-extralight">{text}</span>
  }

  let result = text
  const parts: React.ReactNode[] = []
  let lastIndex = 0

  boldWords.forEach((word) => {
    const index = result.toLowerCase().indexOf(word.toLowerCase())
    if (index !== -1) {
      // Add text before the bold word
      if (index > lastIndex) {
        parts.push(
          <span key={`before-${word}`} className="font-extralight">
            {result.substring(lastIndex, index)}
          </span>
        )
      }
      // Add the bold word with optional color
      parts.push(
        <span key={`bold-${word}`} className={cn("font-extrabold", boldColor)}>
          {result.substring(index, index + word.length)}
        </span>
      )
      lastIndex = index + word.length
    }
  })

  // Add remaining text
  if (lastIndex < result.length) {
    parts.push(
      <span key="remaining" className="font-extralight">
        {result.substring(lastIndex)}
      </span>
    )
  }

  return <>{parts}</>
}

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [parallaxY, setParallaxY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // 10 seconds per slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000)
    return () => clearInterval(timer)
  }, [nextSlide])

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Parallax scroll effect using JavaScript scroll event
  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      // Move image at 30% of scroll speed
      setParallaxY(scrollY * 0.3)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial call
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const slide = slides[currentSlide]

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Images Container - All images stacked with position absolute */}
      <div className="absolute inset-0">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                transform: isMobile ? 'none' : `translateY(${parallaxY}px)`,
              }}
            >
              <Image
                src={s.image}
                alt=""
                fill
                className="object-cover"
                style={{ 
                  objectPosition: s.objectPosition || 'center',
                  // Scale up to allow parallax movement without showing edges
                  transform: isMobile ? 'none' : 'scale(1.3)',
                  transformOrigin: 'center top',
                  filter: 'grayscale(100%)',
                }}
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dark overlay - dynamic per slide */}
      <div 
        className="absolute inset-0 z-[2] transition-opacity duration-1000"
        style={{ backgroundColor: `rgba(0, 0, 0, ${slide.overlayOpacity || 0.6})` }}
      />

      {/* Bottom gradient for smooth transition to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[45%] bg-gradient-to-t from-[#070707] via-[#070707]/70 to-transparent" />

      {/* Main Content - Centralized */}
      <div className="relative h-full flex items-center justify-center z-[3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center text-center"
            >
              {/* Badge */}
              <motion.div
                custom={0}
                variants={textVariants}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide uppercase text-white/90 border border-white/20 rounded-full backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  {slide.badge}
                </span>
              </motion.div>

              {/* Title - Always 2 lines */}
              <motion.h1
                custom={1}
                variants={textVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[0.95] tracking-tight max-w-5xl"
              >
                {isAnimatedSlide(slide) ? (
                  <>
                    {/* Line 1 with animated word */}
                    <span className="block whitespace-nowrap">
                      <span className="font-extralight">{slide.line1Before} </span>
                      <AnimatedTextCycle 
                        words={slide.animatedWords} 
                        interval={2500}
                        className="font-extrabold text-primary"
                      />
                      {slide.line1After && (
                        <span className="font-extralight"> {slide.line1After}</span>
                      )}
                    </span>
                    {/* Line 2 */}
                    <span className="block whitespace-nowrap font-extralight">
                      {slide.line2}
                    </span>
                  </>
                ) : (
                  <>
                    {/* Line 1 with bold keywords */}
                    <span className="block whitespace-nowrap">
                      {renderLineWithBold(slide.line1, slide.line1Bold, slide.line1BoldColor)}
                    </span>
                    {/* Line 2 with bold keywords */}
                    <span className="block whitespace-nowrap">
                      {renderLineWithBold(slide.line2, slide.line2Bold, slide.line2BoldColor)}
                    </span>
                  </>
                )}
              </motion.h1>

              {/* CTA */}
              <motion.div
                custom={2}
                variants={textVariants}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                {slide.cta.external ? (
                  <a
                    href={slide.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
                  >
                    {slide.cta.text}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <Link
                    href={slide.cta.href}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
                  >
                    {slide.cta.text}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-[4]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
            className={cn(
              "w-12 h-1 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-primary"
                : "bg-white/30 hover:bg-white/50"
            )}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 right-10 hidden md:block z-[4]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/30 p-2"
        >
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
