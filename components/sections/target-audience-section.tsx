"use client"

import { motion } from "framer-motion"
import { targetAudiences } from "@/lib/data"

export function TargetAudienceSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Quem Atendemos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Soluções adaptadas ao seu contexto
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-pretty">
            Cada perfil de cliente tem necessidades específicas. A SOS desenvolve 
            projetos sob medida para cada realidade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative bg-card rounded-xl p-8 border border-border overflow-hidden hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Background Icon */}
              <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <audience.icon className="h-32 w-32 text-foreground" />
              </div>
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <audience.icon className="h-7 w-7 text-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {audience.title}
                </h3>
                
                <p className="text-muted-foreground text-pretty">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
