"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Segurança que resolve.",
    subtitle: "Tecnologia confiável com atendimento humano.",
    cta: { text: "Conheça o Grupo SOS", href: "/grupo-sos" },
    ctaSecondary: { text: "Fale Conosco", href: "/contato" },
    image: "/images/hero-slide-1.jpg",
  },
  {
    id: 2,
    title: "Controle total de acesso.",
    subtitle: "Portaria Virtual com operação 24h.",
    cta: { text: "Saiba mais", href: "/solucoes/portaria-virtual" },
    ctaSecondary: null,
    image: "/images/hero-slide-2.jpg",
  },
  {
    id: 3,
    title: "Conectividade estável.",
    subtitle: "Internet e telefonia para sua operação.",
    cta: { text: "Conheça a SOS Telecom", href: "/solucoes/sos-telecom" },
    ctaSecondary: null,
    image: "/images/hero-slide-3.jpg",
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

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
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

  // Parallax scroll effect (disabled on mobile)
  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const parallaxOffset = isMobile ? 0 : scrollY * 0.3
  const slide = slides[currentSlide]

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            transform: isMobile ? 'none' : `translateY(${parallaxOffset}px)`,
          }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover"
            style={{ 
              objectPosition: 'center',
              transform: isMobile ? 'none' : 'scale(1.3)',
              transformOrigin: 'center center',
            }}
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main Content - Centralized */}
      <div className="relative h-full flex items-center justify-center">
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
                  +46 anos protegendo o que importa
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                custom={1}
                variants={textVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight tracking-tight max-w-4xl"
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                custom={2}
                variants={textVariants}
                className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={3}
                variants={textVariants}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href={slide.cta.href}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
                >
                  {slide.cta.text}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                {slide.ctaSecondary && (
                  <Link
                    href={slide.ctaSecondary.href}
                    className="inline-flex items-center px-8 py-4 text-white text-sm font-medium border border-white/30 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
                  >
                    {slide.ctaSecondary.text}
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
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
        className="absolute bottom-10 right-10 hidden md:block"
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
