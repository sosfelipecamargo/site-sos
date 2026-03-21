"use client"

import { motion } from "framer-motion"
import { Building2 } from "lucide-react"

// Placeholder client logos - in production these would be real logos
const clients = [
  { name: "Metalúrgica Ferreira" },
  { name: "Condomínio Aurora" },
  { name: "Grupo Costa" },
  { name: "TechParts Brasil" },
  { name: "Construtora Americana" },
  { name: "Hospital Santa Maria" },
  { name: "Supermercados União" },
  { name: "Indústria Textil Nova" },
]

export function ClientsSection() {
  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Clientes
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Quem confia na SOS
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Empresas, condomínios e indústrias que escolheram a SOS para 
            cuidar da sua segurança.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Building2 className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground text-center transition-colors">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
