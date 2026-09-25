"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const audiences = [
  { 
    id: "residencias",
    title: "Residências", 
    description: "Soluções para casas e apartamentos com tecnologia e monitoramento.",
    image: "/images/audiences/residencias.jpg"
  },
  { 
    id: "condominios",
    title: "Condomínios", 
    description: "Portaria virtual, controle de acesso e segurança integrada.",
    image: "/images/audiences/condominios.jpg"
  },
  { 
    id: "empresas",
    title: "Empresas", 
    description: "Proteção patrimonial com projetos sob medida.",
    image: "/images/audiences/empresas.jpg"
  },
  { 
    id: "comercios",
    title: "Comércios", 
    description: "Alarmes, câmeras e monitoramento para lojas e estabelecimentos.",
    image: "/images/audiences/comercios.jpg"
  },
  { 
    id: "industrias",
    title: "Indústrias", 
    description: "Vigilância, controle de acesso e segurança perimetral.",
    image: "/images/audiences/industrias.jpg"
  },
  { 
    id: "predios",
    title: "Prédios Comerciais", 
    description: "Portaria, CFTV e controle de acesso para edifícios empresariais.",
    image: "/images/audiences/predios-comerciais.jpg"
  },
]

export function TargetAudienceSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Quem Atendemos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white text-balance">
            Soluções adaptadas ao seu contexto
          </h2>
        </motion.div>

        {/* Interactive Image Accordion */}
        <div className="flex flex-col lg:flex-row gap-2 h-[500px] lg:h-[600px]">
          {audiences.map((audience, index) => {
            const isActive = activeIndex === index
            
            return (
              <motion.div
                key={audience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`${audience.title}: ${audience.description}`}
                className="focus-ring relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{
                  flex: isActive ? 4 : 1,
                  transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex((current) => (current === index ? null : current))}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex((current) => (current === index ? null : index))}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setActiveIndex((current) => (current === index ? null : index))
                  }
                }}
              >
                {/* Background Image */}
                <Image
                  src={audience.image}
                  alt={audience.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Red Accent Line */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left transition-transform duration-500"
                  style={{ transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 
                    className="text-white font-bold text-xl lg:text-2xl transition-all duration-500"
                    style={{ 
                      transform: isActive ? "translateY(0)" : "translateY(0)",
                    }}
                  >
                    {audience.title}
                  </h3>
                  
                  <p 
                    className="text-white/80 text-sm lg:text-base mt-2 transition-all duration-500 overflow-hidden"
                    style={{ 
                      maxHeight: isActive ? "100px" : "0",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
