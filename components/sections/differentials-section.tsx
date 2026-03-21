"use client"

import { motion } from "framer-motion"
import { 
  Shield,
  Clock,
  HeartHandshake,
  Settings,
  Wrench,
  Award,
  CheckCircle,
  Zap,
  Lock,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Define differentials data directly with icon components
const differentialsData = [
  {
    Icon: Award,
    title: "Mais de 46 anos de mercado",
    description: "Tradição e experiência acumulada desde 1980 em segurança e tecnologia."
  },
  {
    Icon: Clock,
    title: "Operação 24/7 estruturada",
    description: "Central de monitoramento com equipe treinada e processos definidos."
  },
  {
    Icon: Settings,
    title: "Tecnologia confiável",
    description: "Equipamentos de qualidade e infraestrutura redundante para sua segurança."
  },
  {
    Icon: Lock,
    title: "Portfólio completo",
    description: "Segurança eletrônica, portaria, vigilância, monitoramento e telecom."
  },
  {
    Icon: HeartHandshake,
    title: "Atendimento humano",
    description: "Suporte próximo e comunicação direta com nossa equipe."
  },
  {
    Icon: Wrench,
    title: "Projetos sob medida",
    description: "Cada solução é desenhada conforme a realidade do cliente."
  },
  {
    Icon: CheckCircle,
    title: "Conformidade e estrutura",
    description: "Empresa regularizada com processos operacionais definidos."
  },
  {
    Icon: Zap,
    title: "Eficiência operacional",
    description: "Redução de custos com aumento de controle e padronização."
  }
]

// Bento Grid Item Component
function BentoItem({ 
  item, 
  index,
  className,
  featured = false
}: { 
  item: typeof differentialsData[0]
  index: number
  className?: string
  featured?: boolean
}) {
  const { Icon } = item
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "group relative bg-card border border-border/60 rounded-xl p-5 transition-all duration-300 hover:border-primary/20 hover:bg-card/80",
        featured && "bg-gradient-to-br from-card to-muted/30",
        className
      )}
    >
      <Icon className={cn(
        "text-primary mb-3 transition-transform duration-300 group-hover:scale-110",
        featured ? "h-6 w-6" : "h-5 w-5"
      )} />
      
      <h3 className={cn(
        "font-semibold text-foreground mb-1.5",
        featured ? "text-lg" : "text-base"
      )}>
        {item.title}
      </h3>
      
      <p className={cn(
        "text-muted-foreground text-pretty leading-relaxed",
        featured ? "text-sm" : "text-xs"
      )}>
        {item.description}
      </p>
    </motion.div>
  )
}

export function DifferentialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Diferenciais
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Por que escolher a SOS?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-pretty">
            Combinamos tradição, tecnologia e operação estruturada para entregar 
            segurança de verdade.
          </p>
        </motion.div>

        {/* Bento Grid - Asymmetric Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {/* Row 1 */}
          {/* Featured: 46 anos - spans 2 cols */}
          <BentoItem 
            item={differentialsData[0]} 
            index={0} 
            className="col-span-2 row-span-1"
            featured
          />
          
          {/* Featured: 24/7 - spans 2 cols */}
          <BentoItem 
            item={differentialsData[1]} 
            index={1} 
            className="col-span-2 row-span-1"
            featured
          />
          
          {/* Row 2 */}
          {/* Tecnologia confiável */}
          <BentoItem 
            item={differentialsData[2]} 
            index={2} 
            className="col-span-1"
          />
          
          {/* Portfólio completo - spans 2 cols */}
          <BentoItem 
            item={differentialsData[3]} 
            index={3} 
            className="col-span-2"
          />
          
          {/* Atendimento humano */}
          <BentoItem 
            item={differentialsData[4]} 
            index={4} 
            className="col-span-1"
          />
          
          {/* Row 3 */}
          {/* Projetos sob medida - spans 2 cols */}
          <BentoItem 
            item={differentialsData[5]} 
            index={5} 
            className="col-span-2"
          />
          
          {/* Conformidade */}
          <BentoItem 
            item={differentialsData[6]} 
            index={6} 
            className="col-span-1"
          />
          
          {/* Eficiência */}
          <BentoItem 
            item={differentialsData[7]} 
            index={7} 
            className="col-span-1"
          />
        </div>
      </div>
    </section>
  )
}
