"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight,
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
import { services, type IconName } from "@/lib/data"
import { Button } from "@/components/ui/button"

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

function getIcon(name: IconName | string): LucideIcon {
  if (typeof name === 'string' && name in iconMap) {
    return iconMap[name as IconName]
  }
  return Shield
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = getIcon(service.icon)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative"
    >
      {/* Glow effect container */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:from-primary/60 group-hover:via-primary/40 group-hover:to-primary/60" />
      
      {/* Card border glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:from-primary/50 group-hover:via-primary/30 group-hover:to-primary/50" />
      
      {/* Card content */}
      <Link
        href={`/solucoes/${service.slug}`}
        className="relative flex h-full flex-col bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10"
      >
        {/* Icon */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 transition-colors duration-300 group-hover:bg-primary/10">
          <Icon className="h-6 w-6 text-gray-700 transition-colors duration-300 group-hover:text-primary" />
        </div>
        
        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary">
          {service.name}
        </h3>
        
        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
          {service.shortDescription}
        </p>
        
        {/* Link */}
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <span>Saiba mais</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Soluções
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            Soluções integradas para sua segurança
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-pretty">
            Do monitoramento à conectividade, oferecemos um portfólio completo 
            para proteger o que importa para você.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
            <Link href="/contato">
              Solicitar avaliação gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
