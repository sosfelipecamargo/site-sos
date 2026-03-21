"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Desde 1980, protegendo pessoas, patrimônios e operações.",
    subtitle: "A SOS une atendimento humano, tecnologia confiável e operação estruturada para entregar segurança de verdade.",
    cta: { text: "Conheça o Grupo SOS", href: "/grupo-sos" },
    ctaSecondary: { text: "Fale Conosco", href: "/contato" },
  },
  {
    id: 2,
    title: "Mais controle de acesso, mais segurança, mais eficiência e redução de custos",
    subtitle: "Portaria Virtual com operação 24h, processos definidos e atendimento especializado.",
    cta: { text: "Conheça a solução", href: "/solucoes/portaria-virtual" },
    ctaSecondary: null,
  },
  {
    id: 3,
    title: "Conectividade estável para operações mais inteligentes.",
    subtitle: "Internet fibra, telefonia e estrutura para suportar segurança, comunicação e desempenho.",
    cta: { text: "Conheça a SOS Telecom", href: "/solucoes/sos-telecom" },
    ctaSecondary: null,
  },
  {
    id: 4,
    title: "Cada operação exige uma solução do tamanho certo.",
    subtitle: "Projetos sob medida em câmeras, alarmes, cercas, controle de acesso e infraestrutura de segurança.",
    cta: { text: "Solicitar avaliação", href: "/contato" },
    ctaSecondary: null,
  }
]

// Animated Grid Background
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent/95" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/30 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

// Floating particles
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Text animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
    transition: {
      duration: 0.3,
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -10,
    transition: {
      duration: 0.3,
    },
  },
}

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse parallax effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  
  const parallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20])
  const parallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }, [mouseX, mouseY])

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
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slide = slides[currentSlide]

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen min-h-[700px] max-h-[1000px] overflow-hidden"
    >
      {/* Background */}
      <GridBackground />
      <FloatingParticles />

      {/* Logo watermark */}
      <motion.div 
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block"
        style={{ x: parallaxX, y: parallaxY }}
      >
        <Image
          src="/images/logo-sos-branco.png"
          alt=""
          width={600}
          height={200}
          className="w-[600px] h-auto"
          priority
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSlide}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-4xl"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  +46 anos de experiência em segurança
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              >
                {slide.title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block mr-[0.25em]">
                    {word === "1980," || word === "pessoas," || word === "24h," || word === "inteligentes." ? (
                      <span className="text-primary">{word}</span>
                    ) : (
                      word
                    )}
                  </span>
                ))}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg sm:text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <motion.div variants={buttonVariants}>
                  <Button 
                    asChild 
                    size="lg" 
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  >
                    <Link href={slide.cta.href} className="flex items-center gap-2">
                      {slide.cta.text}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                
                {slide.ctaSecondary && (
                  <motion.div variants={buttonVariants}>
                    <Button 
                      asChild 
                      size="lg" 
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white hover:text-accent font-semibold px-8 py-6 text-base rounded-full backdrop-blur-sm transition-all duration-300"
                    >
                      <Link href={slide.ctaSecondary.href}>
                        {slide.ctaSecondary.text}
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
                className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
              >
                {[
                  { value: "46+", label: "Anos de mercado" },
                  { value: "500+", label: "Clientes atendidos" },
                  { value: "24/7", label: "Monitoramento" },
                  { value: "100%", label: "Compromisso" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    className="text-center sm:text-left"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
        {/* Prev button */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/10"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative group"
              aria-label={`Ir para slide ${index + 1}`}
            >
              <span
                className={cn(
                  "block w-12 h-1 rounded-full transition-all duration-500",
                  index === currentSlide 
                    ? "bg-primary" 
                    : "bg-white/30 group-hover:bg-white/50"
                )}
              />
              {index === currentSlide && (
                <motion.span
                  layoutId="activeSlide"
                  className="absolute inset-0 bg-primary rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/10"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 text-white/60 font-mono text-sm">
        <span className="text-white font-bold text-lg">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span>/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-8 hidden lg:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest rotate-90 origin-center translate-y-8">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  )
}
