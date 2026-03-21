"use client"

import { motion } from "framer-motion"
import { 
  Monitor, 
  Shield, 
  Users, 
  Building2, 
  Car, 
  Camera, 
  Wifi,
  Bell,
  Home,
  Building,
  Factory,
  Store,
  Landmark,
  Clock,
  HeartHandshake,
  Settings,
  Wrench,
  Award,
  CheckCircle,
  Zap,
  Lock,
  type LucideIcon
} from "lucide-react"
import { differentials, type IconName } from "@/lib/data"
import { cn } from "@/lib/utils"

const iconMap: Record<IconName, LucideIcon> = {
  Monitor,
  Shield,
  Users,
  Building2,
  Car,
  Camera,
  Wifi,
  Bell,
  Home,
  Building,
  Factory,
  Store,
  Landmark,
  Clock,
  HeartHandshake,
  Settings,
  Wrench,
  Award,
  CheckCircle,
  Zap,
  Lock,
}

// Bento Grid Item Component
function BentoItem({ 
  item, 
  index,
  className,
  featured = false
}: { 
  item: { icon: string; title: string; description: string }
  index: number
  className?: string
  featured?: boolean
}) {
  const Icon = iconMap[item.icon as IconName] ?? Shield
  
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
            item={differentials[0]} 
            index={0} 
            className="col-span-2 row-span-1"
            featured
          />
          
          {/* Featured: 24/7 - spans 2 cols */}
          <BentoItem 
            item={differentials[1]} 
            index={1} 
            className="col-span-2 row-span-1"
            featured
          />
          
          {/* Row 2 */}
          {/* Tecnologia confiável */}
          <BentoItem 
            item={differentials[2]} 
            index={2} 
            className="col-span-1"
          />
          
          {/* Portfólio completo - spans 2 cols */}
          <BentoItem 
            item={differentials[3]} 
            index={3} 
            className="col-span-2"
          />
          
          {/* Atendimento humano */}
          <BentoItem 
            item={differentials[4]} 
            index={4} 
            className="col-span-1"
          />
          
          {/* Row 3 */}
          {/* Projetos sob medida - spans 2 cols */}
          <BentoItem 
            item={differentials[5]} 
            index={5} 
            className="col-span-2"
          />
          
          {/* Conformidade */}
          <BentoItem 
            item={differentials[6]} 
            index={6} 
            className="col-span-1"
          />
          
          {/* Eficiência */}
          <BentoItem 
            item={differentials[7]} 
            index={7} 
            className="col-span-1"
          />
        </div>
      </div>
    </section>
  )
}
