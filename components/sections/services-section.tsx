"use client"

import Link from "next/link"
import Image from "next/image"
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
import { ShimmerText } from "@/components/ui/shimmer-text"

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

// Map service slugs to their images
const serviceImages: Record<string, string> = {
  "portaria-virtual": "/images/services/portaria-virtual.jpg",
  "monitoramento-de-alarmes": "/images/services/monitoramento.jpg",
  "portaria-hibrida": "/images/services/portaria-hibrida.jpg",
  "portaria-presencial": "/images/services/portaria-presencial.jpg",
  "vigilancia-patrimonial": "/images/services/vigilancia.jpg",
  "viaturas-pronta-resposta": "/images/services/viaturas.jpg",
  "seguranca-eletronica": "/images/services/seguranca-eletronica.jpg",
  "sos-telecom": "/images/services/sos-telecom.jpg",
}

function getIcon(name: string): LucideIcon {
  const icon = iconMap[name as keyof typeof iconMap]
  return icon ?? Shield
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = getIcon(service.icon)
  const imageUrl = serviceImages[service.slug] || "/images/services/portaria-virtual.jpg"
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <Link
        href={`/solucoes/${service.slug}`}
        className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-primary"
        style={{ aspectRatio: '3/4' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={service.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
        
        {/* Content - positioned at bottom */}
        <div className="relative mt-auto p-6 z-10">
          {/* Icon */}
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
            <Icon className="h-5 w-5 text-white" />
          </div>
          
          {/* Title */}
          <h3 className="mb-3 text-xl font-bold text-white leading-tight">
            {service.name}
          </h3>
          
          {/* Link */}
          <div className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors duration-300 group-hover:text-primary">
            <span>Saiba mais</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-white tracking-tight leading-[1.05] whitespace-nowrap py-2">
            <ShimmerText shimmerColor="rgba(255, 255, 255, 0.5)" duration={3}>
              SOLUÇÕES INTELIGENTES
            </ShimmerText>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40">
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
