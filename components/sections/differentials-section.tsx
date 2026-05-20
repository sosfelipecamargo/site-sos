"use client"

import { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import { 
  Award,
  Clock,
  Cpu,
  ShieldCheck,
  HeartHandshake,
  Wrench,
  Wifi,
  Users,
  Car,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

// 9 Differentials data
const differentialsData = [
  {
    Icon: Award,
    title: "Mais de 46 anos de mercado",
    description: "Experiência construída ao longo de décadas, acompanhando a evolução da segurança e das necessidades dos clientes."
  },
  {
    Icon: Clock,
    title: "Central de Segurança 24 horas",
    description: "Operação ativa todos os dias, com equipe treinada para acompanhar eventos, acessos e ocorrências em tempo real."
  },
  {
    Icon: Cpu,
    title: "Tecnologia confiável",
    description: "Soluções integradas de câmeras, alarmes, controle de acesso e sistemas inteligentes para uma segurança mais eficiente."
  },
  {
    Icon: ShieldCheck,
    title: "Hub de Segurança",
    description: "Uma estrutura centralizada que conecta monitoramento, portaria virtual, pronta-resposta, manutenção e suporte operacional."
  },
  {
    Icon: HeartHandshake,
    title: "Atendimento humano",
    description: "Tecnologia com proximidade: nossa equipe acompanha, orienta e atende com clareza em cada etapa da operação."
  },
  {
    Icon: Wrench,
    title: "Projetos sob medida",
    description: "Cada solução é desenhada conforme a realidade do cliente, considerando rotina, riscos, estrutura e necessidade operacional."
  },
  {
    Icon: Wifi,
    title: "Monitoramento de links",
    description: "Acompanhamento da conectividade para manter a operação estável e reduzir riscos de falhas na comunicação dos sistemas."
  },
  {
    Icon: Users,
    title: "Equipe própria de manutenção",
    description: "Mais agilidade e controle técnico com profissionais próprios para instalação, suporte e manutenção dos sistemas."
  },
  {
    Icon: Car,
    title: "Viaturas de pronta-resposta",
    description: "Apoio em campo para verificação de ocorrências, suporte à central e atendimento operacional quando necessário."
  },
]

// Carousel Card Component
function DifferentialCard({ item, index }: { item: typeof differentialsData[0]; index: number }) {
  const { Icon } = item
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group h-full bg-white border border-gray-200/80 rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        <h3 className="font-semibold text-[#070707] text-lg mb-2">
          {item.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed flex-1">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export function DifferentialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
  })
  
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="py-20 lg:py-28 bg-[#f4f4f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#070707]">
            Por que escolher a SOS?
          </h2>
          
          {/* Navigation Arrows - Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={cn(
                "p-2.5 rounded-full border border-gray-300 transition-all duration-200",
                canScrollPrev 
                  ? "hover:bg-primary hover:border-primary hover:text-white text-gray-700" 
                  : "opacity-40 cursor-not-allowed text-gray-400"
              )}
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={cn(
                "p-2.5 rounded-full border border-gray-300 transition-all duration-200",
                canScrollNext 
                  ? "hover:bg-primary hover:border-primary hover:text-white text-gray-700" 
                  : "opacity-40 cursor-not-allowed text-gray-400"
              )}
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {differentialsData.map((item, index) => (
              <div
                key={item.title}
                className="flex-none w-[85%] sm:w-[45%] lg:w-[31%]"
              >
                <DifferentialCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Mobile */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "p-2.5 rounded-full border border-gray-300 transition-all duration-200",
              canScrollPrev 
                ? "hover:bg-primary hover:border-primary hover:text-white text-gray-700" 
                : "opacity-40 cursor-not-allowed text-gray-400"
            )}
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "p-2.5 rounded-full border border-gray-300 transition-all duration-200",
              canScrollNext 
                ? "hover:bg-primary hover:border-primary hover:text-white text-gray-700" 
                : "opacity-40 cursor-not-allowed text-gray-400"
            )}
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
