"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Shield, 
  Clock, 
  Users, 
  Building2, 
  Headphones, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown,
  Phone,
  MessageCircle,
  MapPin,
  Camera,
  Bell,
  AlertTriangle,
  Zap,
  Home,
  Factory,
  Building,
  Lock,
  Eye,
  Settings,
  Target,
  Wifi,
  Monitor,
  Smartphone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// WhatsApp link
const WHATSAPP_LINK = "https://wa.me/5519994828201?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguran%C3%A7a%20Eletr%C3%B4nica."

// ============================================
// DATA
// ============================================

const trustItems = [
  { icon: Camera, label: "CFTV profissional" },
  { icon: Bell, label: "Alarmes monitorados" },
  { icon: Lock, label: "Controle de acesso" },
  { icon: Wifi, label: "Sensores integrados" },
  { icon: Wrench, label: "Equipe técnica própria" },
  { icon: Building2, label: "Central 24h" },
]

const problemCards = [
  {
    icon: Eye,
    title: "Equipamentos sem monitoramento",
    description: "Ter câmeras e alarmes instalados não adianta se ninguém está acompanhando ou preparado para agir."
  },
  {
    icon: Settings,
    title: "Sistemas mal configurados",
    description: "Equipamentos instalados sem projeto adequado podem ter pontos cegos, falhas de cobertura ou baixa qualidade."
  },
  {
    icon: AlertTriangle,
    title: "Falta de manutenção",
    description: "Sistemas sem acompanhamento técnico podem parar de funcionar sem que o cliente perceba."
  },
  {
    icon: Target,
    title: "Soluções desconectadas",
    description: "Câmeras de um lado, alarmes de outro, sem integração com uma central preparada para atender."
  },
]

const howItWorksSteps = [
  {
    number: "01",
    title: "Avaliação do local",
    description: "Nossa equipe técnica visita o local para entender a necessidade e identificar os pontos críticos."
  },
  {
    number: "02",
    title: "Projeto personalizado",
    description: "Definimos os equipamentos, posicionamento e configurações adequados para cada situação."
  },
  {
    number: "03",
    title: "Instalação profissional",
    description: "Equipe própria realiza a instalação com qualidade, organização e atenção aos detalhes."
  },
  {
    number: "04",
    title: "Integração com a Central",
    description: "Os equipamentos são conectados à Central SOS para monitoramento 24 horas."
  },
  {
    number: "05",
    title: "Treinamento do cliente",
    description: "Orientamos sobre o uso do sistema, aplicativos e procedimentos básicos."
  },
  {
    number: "06",
    title: "Suporte contínuo",
    description: "Manutenção preventiva e corretiva para garantir que o sistema funcione sempre."
  },
]

const servicesCards = [
  {
    icon: Camera,
    title: "CFTV - Câmeras de Segurança",
    description: "Sistemas de câmeras com gravação, acesso remoto pelo celular e integração com a central de monitoramento."
  },
  {
    icon: Bell,
    title: "Alarmes Monitorados",
    description: "Centrais de alarme com sensores de presença, abertura e outros dispositivos conectados à Central SOS."
  },
  {
    icon: Lock,
    title: "Controle de Acesso",
    description: "Sistemas de identificação por biometria, cartão, senha ou facial para controlar entradas e saídas."
  },
  {
    icon: Wifi,
    title: "Sensores e Automação",
    description: "Sensores de presença, cerca elétrica, cerca virtual e outros dispositivos para proteção perimetral."
  },
  {
    icon: Monitor,
    title: "Vídeo Porteiro",
    description: "Sistemas de comunicação com identificação visual para controle de visitantes."
  },
  {
    icon: Smartphone,
    title: "Acesso Remoto",
    description: "Aplicativos para acompanhar câmeras, receber alertas e controlar o sistema pelo celular."
  },
]

const benefitsCards = [
  {
    icon: Eye,
    title: "Visibilidade total",
    description: "Acompanhe o que acontece no seu local a qualquer momento, de qualquer lugar."
  },
  {
    icon: Shield,
    title: "Proteção preventiva",
    description: "A presença de câmeras e alarmes já inibe ações suspeitas e tentativas de invasão."
  },
  {
    icon: Zap,
    title: "Resposta rápida",
    description: "Com monitoramento integrado, qualquer alerta é tratado de forma imediata pela central."
  },
  {
    icon: Lock,
    title: "Controle de quem entra e sai",
    description: "Registros de acesso que ajudam a organizar a rotina e aumentar a segurança."
  },
  {
    icon: Wrench,
    title: "Suporte técnico próprio",
    description: "Equipe da SOS disponível para instalação, manutenção e ajustes quando necessário."
  },
  {
    icon: Building2,
    title: "Integração com a Central SOS",
    description: "Seus equipamentos conectados a uma operação preparada para agir 24 horas."
  },
]

const structureBlocks = [
  {
    icon: Wrench,
    title: "Equipe técnica própria",
    description: "Profissionais da SOS para projeto, instalação e manutenção dos equipamentos."
  },
  {
    icon: Building2,
    title: "Central de Segurança SOS",
    description: "Operação 24h preparada para receber os sinais e tomar as ações necessárias."
  },
  {
    icon: MapPin,
    title: "Experiência regional",
    description: "Mais de 40 anos atuando em segurança em Americana e região."
  },
  {
    icon: Zap,
    title: "Soluções integradas",
    description: "CFTV, alarmes, controle de acesso, monitoramento, portaria virtual e internet."
  },
]

const targetAudienceCards = [
  {
    icon: Home,
    title: "Residências",
    description: "Para quem quer proteger a família e o patrimônio com tecnologia e monitoramento."
  },
  {
    icon: Building,
    title: "Condomínios",
    description: "Para portarias, áreas comuns e perímetros que precisam de vigilância eletrônica."
  },
  {
    icon: Factory,
    title: "Empresas e indústrias",
    description: "Para operações que exigem controle de acesso, CFTV e proteção perimetral."
  },
  {
    icon: Target,
    title: "Comércios",
    description: "Para lojas e estabelecimentos que precisam de segurança visual e alarmes."
  },
]

const faqItems = [
  {
    question: "A SOS vende equipamentos ou só instala?",
    answer: "A SOS oferece a solução completa: projeto, fornecimento dos equipamentos, instalação, configuração e integração com nossa central de monitoramento. Também fazemos manutenção preventiva e corretiva."
  },
  {
    question: "Posso usar equipamentos que já tenho?",
    answer: "Depende. Nossa equipe técnica avalia os equipamentos existentes e verifica se são compatíveis com nosso sistema de monitoramento. Em alguns casos, é possível aproveitar parte da infraestrutura."
  },
  {
    question: "Consigo ver as câmeras pelo celular?",
    answer: "Sim. Configuramos o acesso remoto para que você possa acompanhar as câmeras em tempo real pelo celular ou computador, de qualquer lugar com internet."
  },
  {
    question: "E se o sistema apresentar algum problema?",
    answer: "Nossa equipe técnica está disponível para atendimento. Além disso, a central monitora a comunicação com os equipamentos e pode identificar falhas antes mesmo que você perceba."
  },
  {
    question: "Qual a diferença de contratar segurança eletrônica com a SOS?",
    answer: "A diferença está na integração. Nossos equipamentos são conectados a uma central de monitoramento 24h com equipe treinada para agir. Não é só instalar câmeras e alarmes, é ter alguém preparado para responder quando necessário."
  },
]

// ============================================
// COMPONENTS
// ============================================

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#070707] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/seguranca-eletronica.jpg"
          alt="Segurança Eletrônica SOS"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/95 via-[#070707]/85 to-[#070707]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/50" />
        {/* Subtle red glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-wider uppercase rounded-full mb-6">
            Segurança Eletrônica
          </span>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Tecnologia bem instalada para proteger o que importa
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
            Projetos de câmeras, alarmes, sensores, cercas elétricas e controle de acesso dimensionados para a necessidade real do seu imóvel.
          </p>

          {/* Single CTA */}
          <Button asChild size="lg" className="h-14 px-10 text-base">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Solicitar avaliação técnica
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-white/40 animate-bounce" />
      </motion.div>
    </section>
  )
}

// Trust Section
function TrustSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#f4f4f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#070707]">
            Soluções completas de segurança eletrônica
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center p-5 bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-[#070707] whitespace-pre-line">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Problem Section
function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#070707] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/services/seguranca-eletronica.jpg')] bg-cover bg-center grayscale" />
        <div className="absolute inset-0 bg-[#070707]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Equipamentos <span className="text-primary">sozinhos</span> não garantem <span className="text-primary">segurança</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Muitas empresas e residências têm câmeras e alarmes instalados, mas sem projeto adequado, monitoramento profissional e manutenção regular, esses sistemas podem falhar justamente quando são mais necessários.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problemCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services Section
function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f4f4f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070707] leading-tight mb-4">
            Soluções que a SOS oferece
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Projeto, instalação e monitoramento de sistemas de segurança eletrônica para diferentes necessidades.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-[#070707] mb-2">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="h-12 px-8">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Solicitar avaliação gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-[#070707] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Como funciona o processo
          </h2>
        </motion.div>

        {/* Desktop: Alternating Timeline */}
        <div className="hidden lg:block relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />
          
          <div className="flex flex-col gap-20">
            {howItWorksSteps.map((step, index) => {
              const isLeft = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-8"
                >
                  {/* Left content or empty */}
                  <div className={cn("pr-8", isLeft ? "text-right" : "")}>
                    {isLeft && (
                      <>
                        <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                        <p className="text-white/50 leading-snug">{step.description}</p>
                      </>
                    )}
                  </div>

                  {/* Center marker */}
                  <div className="relative flex items-center justify-center">
                    {/* Glow effect */}
                    <div className="absolute w-16 h-16 rounded-full bg-primary/25 blur-xl" />
                    {/* Number circle */}
                    <div className="relative w-14 h-14 rounded-full bg-primary text-white font-bold flex items-center justify-center text-base shadow-lg shadow-primary/50">
                      {step.number}
                    </div>
                  </div>

                  {/* Right content or empty */}
                  <div className={cn("pl-8", !isLeft ? "text-left" : "")}>
                    {!isLeft && (
                      <>
                        <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                        <p className="text-white/50 leading-snug">{step.description}</p>
                      </>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-primary/20" />
          
          <div className="space-y-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Number circle */}
                <div className="absolute left-0 w-14 h-14 rounded-full bg-primary text-white font-bold flex items-center justify-center text-base shadow-lg shadow-primary/50">
                  {step.number}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Benefits Section
function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f4f4f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070707] leading-tight">
            Vantagens da Segurança Eletrônica <span className="text-primary">integrada</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-[#070707] mb-2">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Structure Section
function StructureSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#070707] relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Estrutura SOS
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Projeto, instalação e monitoramento em um só lugar
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A SOS oferece a solução completa: desde a avaliação inicial até a manutenção dos equipamentos. Tudo integrado a uma central de monitoramento 24 horas preparada para agir quando necessário.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {structureBlocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <block.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-1">{block.title}</h3>
                <p className="text-sm text-white/60">{block.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Target Audience Section
function TargetAudienceSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f4f4f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#070707]">
            A Segurança Eletrônica SOS é indicada para
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudienceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <card.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-[#070707] mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="duvidas" className="py-20 lg:py-28 bg-[#f4f4f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#070707] mb-6">
                Dúvidas comuns sobre Segurança Eletrônica
              </h2>
              <p className="text-gray-600 mb-8">
                Tire suas dúvidas sobre câmeras, alarmes, controle de acesso e como a SOS pode ajudar a proteger o seu patrimônio.
              </p>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 transition-colors hover:bg-[#ab0000] hover:text-white hover:border-[#ab0000] [&:hover_svg]:text-white">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 transition-colors" />
                  Tire suas dúvidas
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right - Accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-[#070707] pr-4">{item.question}</span>
                  <ChevronDown className={cn(
                    "h-5 w-5 text-gray-400 transition-transform flex-shrink-0",
                    openIndex === index && "rotate-180"
                  )} />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Form Section
function FormSection() {
  return (
    <section id="formulario" className="py-20 lg:py-28 bg-gradient-to-b from-[#070707] to-[#070707]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Solicite uma avaliação gratuita
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            Conte sobre o seu local e o que você precisa proteger. Nossa equipe técnica avalia o cenário e apresenta uma solução adequada para a sua segurança.
          </p>

          <div className="flex justify-center mb-10">
            <Button asChild size="lg" className="h-14 px-10 text-base font-semibold">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 flex-1">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-white/60 text-sm">Telefone</p>
                <a href="tel:+551934714516" className="text-white font-medium hover:text-primary transition-colors">
                  (19) 3471-4516
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 flex-1">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-white/60 text-sm">WhatsApp</p>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-primary transition-colors"
                >
                  (19) 99482-8201
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Mobile Fixed CTA
function MobileFixedCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-[#070707]/95 backdrop-blur-md border-t border-white/10 lg:hidden">
      <div className="flex gap-3">
        <Button asChild className="flex-1 h-12">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline" className="flex-1 h-12 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white">
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Solicitar avaliação
          </Link>
        </Button>
      </div>
    </div>
  )
}

// ============================================
// MAIN EXPORT
// ============================================

export function SegurancaEletronicaContent() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <ServicesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <StructureSection />
      <TargetAudienceSection />
      <FAQSection />
      <FormSection />
      <MobileFixedCTA />
    </>
  )
}
