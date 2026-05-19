"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    badge: "Mais segurança, eficiência e economia",
    title: "O futuro do controle de acesso, hoje.",
    subtitle: "Portaria Virtual SOS para empresas e condomínios que querem mais controle, economia e segurança, com operação 24/7, atendimento humano e protocolos bem definidos.",
    cta: { text: "Saiba mais", href: "/solucoes/portaria-virtual" },
    image: "/images/hero/portaria-virtual.jpg",
  },
  {
    id: 2,
    badge: "Atenção real para cada disparo",
    title: "Monitoramento inteligente de verdade",
    subtitle: "A central SOS acompanha eventos em tempo real, verifica imagens, segue protocolos definidos e aciona os responsáveis com agilidade.",
    cta: { text: "Saiba mais", href: "/solucoes/monitoramento" },
    image: "/images/hero/monitoramento.jpg",
  },
  {
    id: 3,
    badge: "+46 anos protegendo o que importa",
    title: "A segurança da sua rotina começa com uma operação preparada.",
    subtitle: "A SOS une segurança eletrônica, central de monitoramento, portaria virtual, internet e atendimento humano para proteger casas, empresas e condomínios.",
    cta: { text: "Conheça a SOS", href: "/grupo-sos" },
    image: "/images/hero/institucional.jpg",
  },
  {
    id: 4,
    badge: "Fibra de qualidade",
    title: "Internet rápida, suporte próximo e conexão confiável.",
    subtitle: "Internet fibra com velocidade, estabilidade e suporte para quem depende de uma conexão confiável todos os dias.",
    cta: { text: "Conheça a SOS Telecom", href: "/solucoes/sos-telecom" },
    image: "/images/hero/sos-telecom.jpg",
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
  const [parallaxY, setParallaxY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

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
                  objectPosition: 'center',
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-[2]" />

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

              {/* Title */}
              <motion.h1
                custom={1}
                variants={textVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight tracking-tight max-w-5xl text-balance"
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                custom={2}
                variants={textVariants}
                className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl text-pretty"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTA */}
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
