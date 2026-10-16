"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Stats data
const stats = [
  { value: 46, suffix: "+", label: "Anos de história" },
  { value: 24, suffix: "/7", label: "Central em operação", isStatic: true },
  { value: 2000, suffix: "+", label: "Clientes atendidos" },
]

// Timeline data
const timeline = [
  { year: "1980", title: "Fundação em Americana", description: "O início de uma marca construída com proximidade, confiança e compromisso com a segurança." },
  { year: "1993", title: "Monitoramento 24h", description: "A SOS amplia sua operação com uma central dedicada ao acompanhamento de alarmes." },
  { year: "1998", title: "Portaria e vigilância", description: "Novas frentes passam a atender empresas e condomínios com soluções mais completas." },
  { year: "2015", title: "Portaria Virtual e Telecom", description: "Segurança, controle de acesso e conectividade passam a trabalhar de forma integrada." },
  { year: "2026", title: "Nova fase operacional", description: "A modernização da central reforça o foco em tecnologia, agilidade e eficiência no atendimento." },
]

// Animated Number Component
function AnimatedNumber({ value, suffix = "", isStatic = false }: { value: number; suffix?: string; isStatic?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView && !isStatic) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue, isStatic])

  useEffect(() => {
    if (isStatic) {
      setDisplayValue(value)
      return
    }
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    return unsubscribe
  }, [springValue, isStatic, value])

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  )
}

// Timeline Item Component - Line on the RIGHT (continuous line via parent)
function TimelineItem({ item, index, isLast }: { item: typeof timeline[0]; index: number; isLast: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-start gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content Card - LEFT side */}
      <motion.div 
        className={cn(
          "flex-1 p-5 rounded-xl bg-white border transition-all duration-300",
          isHovered 
            ? "border-primary/30 shadow-lg shadow-primary/5" 
            : "border-gray-200 shadow-sm",
          isLast && "border-primary/40 bg-primary/[0.02]"
        )}
        animate={{ 
          y: isHovered ? -2 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <span className={cn(
          "text-xl font-bold",
          isLast ? "text-primary" : "text-primary/80"
        )}>
          {item.year}
        </span>
        <h4 className="font-semibold text-[#070707] text-lg mt-1">{item.title}</h4>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.description}</p>
      </motion.div>

      {/* Marker only - line is rendered by parent */}
      <div className="relative flex items-center justify-center w-4">
        <motion.div 
          className={cn(
            "relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-300",
            isLast 
              ? "bg-primary border-primary" 
              : isHovered 
                ? "bg-primary/20 border-primary" 
                : "bg-white border-gray-300"
          )}
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
        >
          {/* Glow effect */}
          {(isHovered || isLast) && !shouldReduceMotion && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/30"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-16 lg:py-20 bg-[#f4f4f4] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN - Institutional Content */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-primary font-semibold text-sm uppercase tracking-[0.2em] inline-block"
            >
              Grupo SOS
            </motion.span>
            
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#070707] leading-[1.15] max-w-lg"
            >
              Uma operação integrada para proteger, conectar e atender melhor.
            </motion.h2>
            
            {/* Description */}
            <div className="mt-6 space-y-4 text-gray-600 text-base max-w-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="leading-relaxed"
              >
                A SOS nasceu em Americana/SP e cresceu acompanhando a evolução da segurança, da tecnologia e das necessidades dos clientes. O que começou com soluções de proteção se transformou em um grupo completo, preparado para atender residências, empresas, indústrias e condomínios.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="leading-relaxed"
              >
                Hoje, reunimos segurança eletrônica, monitoramento 24 horas, portaria virtual, vigilância patrimonial e telecom em uma operação conectada.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="#solucoes"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Conheça nossos serviços
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent border border-gray-300 text-[#070707] font-medium text-sm hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Fale com a SOS
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-8 lg:gap-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <p className="text-4xl lg:text-5xl font-bold text-primary">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} isStatic={stat.isStatic} />
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Timeline */}
          <div className="flex flex-col">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-[#070707] mb-8"
            >
              Nossa trajetória
            </motion.h3>

            {/* Timeline - Line on RIGHT */}
            <div className="relative flex flex-col gap-4">
              {/* Continuous vertical line - single element */}
              <div className="absolute right-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-gray-300 via-primary/30 to-primary/50" />
              
              {timeline.map((item, index) => (
                <TimelineItem
                  key={item.year}
                  item={item}
                  index={index}
                  isLast={index === timeline.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
