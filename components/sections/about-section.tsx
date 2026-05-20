"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
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

// Timeline Glass Card with Hover Border Gradient
function TimelineGlassCard({ item, index, isLast }: { item: typeof timeline[0]; index: number; isLast: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(75% 181% at 50% 50%, rgba(227, 6, 19, ${isHovered ? 0.6 : 0.2}) 0%, rgba(227, 6, 19, 0) 100%)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isHovered 
              ? [
                  "conic-gradient(from 0deg, transparent, rgba(227, 6, 19, 0.4), transparent)",
                  "conic-gradient(from 360deg, transparent, rgba(227, 6, 19, 0.4), transparent)"
                ]
              : "conic-gradient(from 0deg, transparent, rgba(227, 6, 19, 0.1), transparent)"
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        />
      </div>
      
      {/* Card content */}
      <div className={cn(
        "relative rounded-2xl p-6 transition-all duration-300",
        "bg-white/[0.03] backdrop-blur-xl border border-white/10",
        isLast && "border-primary/30 bg-primary/[0.08]"
      )}>
        <div className="flex items-start gap-4">
          <span className={cn(
            "text-2xl font-bold shrink-0",
            isLast ? "text-primary" : "text-primary/70"
          )}>
            {item.year}
          </span>
          <div>
            <h4 className="font-semibold text-white text-lg">{item.title}</h4>
            <p className="text-sm text-gray-400 mt-1 leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Aurora Background Component
function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Aurora layers */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(227, 6, 19, 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse 80% 50% at 30% 30%, rgba(227, 6, 19, 0.12) 0%, transparent 50%)",
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(227, 6, 19, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 60% 40% at 70% 60%, rgba(187, 30, 22, 0.12) 0%, transparent 50%)",
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(187, 30, 22, 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse 60% 40% at 70% 60%, rgba(187, 30, 22, 0.12) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 50% 30% at 50% 80%, rgba(255, 60, 60, 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse 50% 30% at 40% 70%, rgba(255, 60, 60, 0.06) 0%, transparent 50%)",
            "radial-gradient(ellipse 50% 30% at 50% 80%, rgba(255, 60, 60, 0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  )
}

export function AboutSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Aurora Background */}
      <AuroraBackground />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Liquid Glass Container */}
        <div className="relative">
          {/* Glass reflection effect */}
          <div className="absolute -inset-px rounded-[32px] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
          
          <div className="relative rounded-[32px] bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Inner glass highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
            
            <div className="relative p-8 sm:p-12 lg:p-16">
              {/* Header */}
              <div className="max-w-4xl mx-auto text-center mb-16">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-primary font-semibold text-sm uppercase tracking-[0.2em] inline-block"
                >
                  Grupo SOS
                </motion.span>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                  Uma operação integrada para proteger, conectar e atender melhor.
                </motion.h2>
                
                <div className="mt-8 space-y-4 text-gray-300 text-lg max-w-3xl mx-auto">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-pretty leading-relaxed"
                  >
                    A SOS nasceu em Americana/SP e cresceu acompanhando a evolução da segurança, da tecnologia e das necessidades dos clientes. O que começou com soluções de proteção se transformou em um grupo completo, preparado para atender residências, empresas, indústrias e condomínios com mais estrutura e inteligência operacional.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-pretty leading-relaxed"
                  >
                    Hoje, reunimos segurança eletrônica, monitoramento 24 horas, portaria virtual, portaria presencial, vigilância patrimonial, pronta-resposta e telecom em uma operação conectada, com tecnologia confiável e atendimento humano em cada etapa.
                  </motion.p>
                </div>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mb-20"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} isStatic={stat.isStatic} />
                    </p>
                    <p className="text-sm sm:text-base text-gray-400 mt-2">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Timeline Section */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold text-white text-center mb-10"
                >
                  Nossa trajetória
                </motion.h3>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {timeline.map((item, index) => (
                    <TimelineGlassCard
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
        </div>
      </div>
    </section>
  )
}
