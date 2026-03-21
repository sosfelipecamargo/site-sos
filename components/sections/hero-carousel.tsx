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
  },
  {
    id: 2,
    title: "Controle total de acesso.",
    subtitle: "Portaria Virtual com operação 24h.",
    cta: { text: "Saiba mais", href: "/solucoes/portaria-virtual" },
    ctaSecondary: null,
  },
  {
    id: 3,
    title: "Conectividade estável.",
    subtitle: "Internet e telefonia para sua operação.",
    cta: { text: "Conheça a SOS Telecom", href: "/solucoes/sos-telecom" },
    ctaSecondary: null,
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

  const slide = slides[currentSlide]

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-3xl"
            >
              {/* Badge */}
              <motion.div
                custom={0}
                variants={textVariants}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium tracking-wide uppercase text-white/80 border border-white/20 rounded-full">
                  +46 anos
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                custom={1}
                variants={textVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight"
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                custom={2}
                variants={textVariants}
                className="mt-4 text-lg sm:text-xl text-white/70"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={3}
                variants={textVariants}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link
                  href={slide.cta.href}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
                >
                  {slide.cta.text}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                {slide.ctaSecondary && (
                  <Link
                    href={slide.ctaSecondary.href}
                    className="inline-flex items-center px-6 py-3 text-white text-sm font-medium border border-white/30 rounded-full hover:bg-white/10 transition-colors"
                  >
                    {slide.ctaSecondary.text}
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Minimal Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
            className={cn(
              "w-8 h-0.5 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-white"
                : "bg-white/30 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </section>
  )
}
