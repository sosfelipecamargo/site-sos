"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Desde 1980, protegendo pessoas, patrimônios e operações.",
    subtitle: "A SOS une atendimento humano, tecnologia confiável e operação estruturada para entregar segurança de verdade.",
    cta: { text: "Conheça o Grupo SOS", href: "/grupo-sos" },
    ctaSecondary: { text: "Fale Conosco", href: "/contato" },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
  },
  {
    id: 2,
    title: "Mais controle de acesso, mais segurança, mais eficiência e redução de custos",
    subtitle: "Portaria Virtual com operação 24h, processos definidos e atendimento especializado.",
    cta: { text: "Conheça a solução", href: "/solucoes/portaria-virtual" },
    ctaSecondary: null,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
  },
  {
    id: 3,
    title: "Conectividade estável para operações mais inteligentes.",
    subtitle: "Internet fibra, telefonia e estrutura para suportar segurança, comunicação e desempenho.",
    cta: { text: "Conheça a SOS Telecom", href: "/solucoes/sos-telecom" },
    ctaSecondary: null,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80"
  },
  {
    id: 4,
    title: "Cada operação exige uma solução do tamanho certo.",
    subtitle: "Projetos sob medida em câmeras, alarmes, cercas, controle de acesso e infraestrutura de segurança.",
    cta: { text: "Solicitar avaliação", href: "/contato" },
    ctaSecondary: null,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }, [currentSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0
    })
  }

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-accent/70" />
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl text-pretty"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base"
                  >
                    <Link href={slides[currentSlide].cta.href}>
                      {slides[currentSlide].cta.text}
                    </Link>
                  </Button>
                  
                  {slides[currentSlide].ctaSecondary && (
                    <Button 
                      asChild 
                      size="lg" 
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-accent font-semibold px-8 py-6 text-base"
                    >
                      <Link href={slides[currentSlide].ctaSecondary.href}>
                        {slides[currentSlide].ctaSecondary.text}
                      </Link>
                    </Button>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide 
                ? "bg-primary w-8" 
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
