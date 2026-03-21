"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { timeline } from "@/lib/data"
import { cn } from "@/lib/utils"

// Animated Number Component
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    return unsubscribe
  }, [springValue])

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  )
}

// Animated Text Reveal Component
function AnimatedTextReveal({ children, className, delay = 0 }: { children: string; className?: string; delay?: number }) {
  const words = children.split(" ")
  
  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + i * 0.05 }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-card overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Block 1 - Text + Numbers (Full Width) */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider inline-block"
          >
            Grupo SOS
          </motion.span>
          
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            <AnimatedTextReveal delay={0.1}>
              Hub de segurança, tecnologia e conectividade
            </AnimatedTextReveal>
          </h2>
          
          <div className="mt-8 space-y-4 text-muted-foreground text-lg">
            <p className="text-pretty">
              <AnimatedTextReveal delay={0.3}>
                A SOS Segurança Inteligente é um grupo empresarial de Americana/SP com origem em 1980, que atua como hub integrado de soluções em segurança, tecnologia e conectividade.
              </AnimatedTextReveal>
            </p>
            <p className="text-pretty">
              <AnimatedTextReveal delay={0.5}>
                Reunimos segurança eletrônica, monitoramento 24 horas, portaria virtual e presencial, vigilância patrimonial, viaturas de pronta resposta e telecom em uma operação conectada.
              </AnimatedTextReveal>
            </p>
          </div>

          {/* Animated Stats */}
          <div className="mt-14 flex flex-wrap justify-center gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-5xl sm:text-6xl font-bold text-primary">
                <AnimatedNumber value={46} suffix="+" />
              </p>
              <p className="text-sm text-muted-foreground mt-2">Anos de mercado</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center"
            >
              <p className="text-5xl sm:text-6xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground mt-2">Operação contínua</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center"
            >
              <p className="text-5xl sm:text-6xl font-bold text-primary">
                <AnimatedNumber value={2000} suffix="+" />
              </p>
              <p className="text-sm text-muted-foreground mt-2">Clientes ativos</p>
            </motion.div>
          </div>
        </div>

        {/* Block 2 - Timeline (Full Width - Aceternity Style) */}
        <div className="relative">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-foreground text-center mb-12"
          >
            Nossa trajetória
          </motion.h3>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:hidden" />

            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0
                const isLast = index === timeline.length - 1
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "relative md:grid md:grid-cols-2 md:gap-8 items-center",
                      !isEven && "md:flex-row-reverse"
                    )}
                  >
                    {/* Content - Desktop */}
                    <div className={cn(
                      "hidden md:block",
                      isEven ? "text-right pr-12" : "col-start-2 pl-12"
                    )}>
                      <div className={cn(
                        "bg-card border border-border rounded-xl p-6 inline-block max-w-md",
                        isLast && "border-primary/30 bg-primary/5"
                      )}>
                        <span className={cn(
                          "text-sm font-bold",
                          isLast ? "text-primary" : "text-muted-foreground"
                        )}>
                          {item.year}
                        </span>
                        <h4 className="font-semibold text-foreground mt-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-10">
                      <div className={cn(
                        "w-4 h-4 rounded-full border-4 border-background",
                        isLast ? "bg-primary" : "bg-muted-foreground/30"
                      )} />
                    </div>

                    {/* Empty space for even items (desktop) */}
                    {isEven && <div className="hidden md:block" />}

                    {/* Content - Mobile */}
                    <div className="md:hidden pl-10">
                      <div className={cn(
                        "bg-card border border-border rounded-xl p-4",
                        isLast && "border-primary/30 bg-primary/5"
                      )}>
                        <span className={cn(
                          "text-sm font-bold",
                          isLast ? "text-primary" : "text-muted-foreground"
                        )}>
                          {item.year}
                        </span>
                        <h4 className="font-semibold text-foreground mt-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
