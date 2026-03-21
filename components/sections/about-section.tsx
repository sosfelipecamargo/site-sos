"use client"

import { motion } from "framer-motion"
import { timeline } from "@/lib/data"
import { cn } from "@/lib/utils"

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Grupo SOS
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Hub de segurança, tecnologia e conectividade
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="text-pretty">
                A SOS Segurança Inteligente é um grupo empresarial de Americana/SP com origem em 1980, 
                que atua como hub integrado de soluções em segurança, tecnologia e conectividade.
              </p>
              <p className="text-pretty">
                Reunimos segurança eletrônica, monitoramento 24 horas, portaria virtual e presencial, 
                vigilância patrimonial, viaturas de pronta resposta e telecom em uma operação conectada 
                para residências, empresas, condomínios, comércios e indústrias.
              </p>
              <p className="text-pretty">
                Nossa proposta é clara: <strong className="text-foreground">segurança que resolve</strong>, 
                com tecnologia confiável, operação estruturada e atendimento humano.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-primary">46+</p>
                <p className="text-sm text-muted-foreground mt-1">Anos de mercado</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground mt-1">Operação contínua</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-primary">2000+</p>
                <p className="text-sm text-muted-foreground mt-1">Clientes ativos</p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-secondary/50 rounded-2xl p-8 lg:p-10">
              <h3 className="text-lg font-semibold text-foreground mb-8">
                Nossa trajetória
              </h3>
              
              <div className="relative">
                {/* Line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
                
                {/* Timeline Items */}
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="relative flex gap-4"
                    >
                      {/* Dot */}
                      <div className={cn(
                        "w-4 h-4 rounded-full flex-shrink-0 mt-1",
                        index === timeline.length - 1 ? "bg-primary" : "bg-border"
                      )} />
                      
                      {/* Content */}
                      <div>
                        <span className="text-sm font-bold text-primary">{item.year}</span>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
