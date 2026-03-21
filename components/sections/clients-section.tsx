"use client"

import { motion } from "framer-motion"

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

// Duplicate for seamless loop
const duplicatedClients = [...clients, ...clients]

export function ClientsSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 overflow-hidden">
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
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Track */}
        <div className="flex animate-marquee">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-6"
            >
              <div className="flex items-center justify-center px-8 py-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-300 min-w-[200px]">
                <span className="text-gray-500 font-medium text-sm tracking-wide whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
