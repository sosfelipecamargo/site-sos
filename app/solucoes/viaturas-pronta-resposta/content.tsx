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
  Bell,
  AlertTriangle,
  Zap,
  Home,
  Factory,
  Building,
  Radio,
  Car,
  Navigation,
  Siren,
  Timer,
  Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// WhatsApp link
const WHATSAPP_LINK = "https://wa.me/5519994828201?text=Olá!%20Quero%20saber%20mais%20sobre%20as%20Viaturas%20de%20Pronta%20Resposta."

// ============================================
// DATA
// ============================================

const trustItems = [
  { icon: Car, label: "Viaturas 24h" },
  { icon: Radio, label: "Comunicação direta" },
  { icon: Building2, label: "Central integrada" },
  { icon: MapPin, label: "Cobertura regional" },
  { icon: Timer, label: "Resposta rápida" },
  { icon: Users, label: "Equipe treinada" },
]

const problemCards = [
  {
    icon: Clock,
    title: "Demora no atendimento",
    description: "Quando algo acontece, cada minuto conta. Esperar por uma resposta pode aumentar os danos."
  },
  {
    icon: AlertTriangle,
    title: "Alarmes sem verificação",
    description: "Muitos alertas ficam sem conferência presencial, deixando dúvidas sobre o que realmente aconteceu."
  },
  {
    icon: Navigation,
    title: "Distância das forças públicas",
    description: "Em muitas situações, a polícia pode demorar a chegar por conta da demanda e distância."
  },
  {
    icon: Target,
    title: "Falta de presença preventiva",
    description: "A ausência de rondas e verificações regulares pode facilitar a ação de invasores."
  },
]

const howItWorksSteps = [
  {
    number: "01",
    title: "Alerta é recebido",
    description: "A Central SOS recebe o sinal de alarme, câmera ou solicitação de atendimento."
  },
  {
    number: "02",
    title: "Situação é analisada",
    description: "O operador verifica câmeras, histórico e contexto para entender a ocorrência."
  },
  {
    number: "03",
    title: "Viatura é acionada",
    description: "A equipe mais próxima é direcionada ao local com informações sobre a situação."
  },
  {
    number: "04",
    title: "Verificação presencial",
    description: "O vigilante da viatura chega ao local e realiza a verificação conforme o protocolo."
  },
  {
    number: "05",
    title: "Ações são tomadas",
    description: "Conforme a situação, o vigilante pode acionar polícia, bombeiros ou responsáveis."
  },
  {
    number: "06",
    title: "Registro e feedback",
    description: "Toda a ocorrência é documentada e o cliente é informado sobre o atendimento."
  },
]

const benefitsCards = [
  {
    icon: Zap,
    title: "Resposta rápida",
    description: "Viaturas posicionadas estrategicamente para atender com agilidade em Americana e região."
  },
  {
    icon: Clock,
    title: "Operação 24 horas",
    description: "Atendimento disponível todos os dias, a qualquer hora, inclusive feriados e madrugadas."
  },
  {
    icon: Shield,
    title: "Verificação profissional",
    description: "Vigilantes treinados para avaliar a situação com segurança e seguir os procedimentos corretos."
  },
  {
    icon: Radio,
    title: "Comunicação integrada",
    description: "Contato direto entre viatura, central e cliente durante todo o atendimento."
  },
  {
    icon: Building2,
    title: "Apoio à central",
    description: "As viaturas complementam o monitoramento remoto com presença física quando necessário."
  },
  {
    icon: Target,
    title: "Presença preventiva",
    description: "Rondas e passagens regulares que ajudam a inibir ações suspeitas na região."
  },
]

const structureBlocks = [
  {
    icon: Car,
    title: "Frota própria de viaturas",
    description: "Veículos identificados e equipados para atendimento de segurança."
  },
  {
    icon: Building2,
    title: "Central de Segurança SOS",
    description: "Operação 24h com equipe treinada e ambiente estruturado para atendimento."
  },
  {
    icon: Wrench,
    title: "Equipe técnica própria",
    description: "Instalação, manutenção e suporte com profissionais da SOS."
  },
  {
    icon: MapPin,
    title: "Cobertura regional",
    description: "Atuação em Americana, Santa Bárbara d'Oeste, Nova Odessa e região."
  },
]

const targetAudienceCards = [
  {
    icon: Home,
    title: "Residências",
    description: "Para quem quer uma resposta rápida em caso de invasão, arrombamento ou emergência."
  },
  {
    icon: Building,
    title: "Condomínios",
    description: "Para portarias e áreas comuns que precisam de apoio presencial quando necessário."
  },
  {
    icon: Factory,
    title: "Empresas e indústrias",
    description: "Para operações que exigem verificação presencial de alarmes e ocorrências."
  },
  {
    icon: Target,
    title: "Comércios",
    description: "Para lojas que precisam de atendimento rápido fora do horário de funcionamento."
  },
]

const faqItems = [
  {
    question: "Em quanto tempo a viatura chega?",
    answer: "O tempo de resposta varia conforme a localização e o trânsito, mas nossas viaturas são posicionadas estrategicamente para atender Americana e região com a maior agilidade possível. Em situações de emergência, priorizamos o deslocamento imediato."
  },
  {
    question: "A viatura pode prender alguém?",
    answer: "Não. Nossos vigilantes não têm poder de polícia. O papel da viatura é verificar a situação, garantir a segurança do local e acionar as autoridades competentes quando necessário. A abordagem segue protocolos para preservar a integridade de todos."
  },
  {
    question: "Posso solicitar a viatura quando quiser?",
    answer: "O serviço de pronta resposta é acionado conforme os protocolos definidos para cada cliente. Em situações de emergência, você também pode entrar em contato diretamente com nossa central para solicitar atendimento."
  },
  {
    question: "A viatura atende apenas clientes de monitoramento?",
    answer: "Sim. O serviço de viaturas de pronta resposta é um complemento ao monitoramento de alarmes da SOS. Ele funciona de forma integrada com nossa central para garantir verificação presencial quando os protocolos indicarem necessidade."
  },
  {
    question: "A SOS atende em quais cidades?",
    answer: "Atuamos em Americana, Santa Bárbara d'Oeste, Nova Odessa e região. Se você está em uma cidade próxima, entre em contato para verificarmos a viabilidade de atendimento."
  },
]

const localTypes = [
  "Residência",
  "Condomínio residencial",
  "Condomínio empresarial",
  "Empresa",
  "Comércio",
  "Indústria",
  "Outro",
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
          src="/images/services/viaturas.jpg"
          alt="Viatura SOS Segurança"
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
            Viaturas de Pronta Resposta
          </span>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Apoio em campo quando a operação precisa verificar de perto
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
            Viaturas conectadas à Central SOS para apoiar ocorrências previstas nos serviços monitorados, verificar o perímetro e ampliar a capacidade de resposta da operação.
          </p>

          {/* Single CTA */}
          <Button asChild size="lg" className="h-14 px-10 text-base">
            <a href="#formulario">
              Conhecer a Pronta-Resposta SOS
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
            Atendimento integrado à Central SOS
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
        <div className="absolute inset-0 bg-[url('/images/services/viaturas.jpg')] bg-cover bg-center grayscale" />
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
            O monitoramento <span className="text-primary">identifica</span>, mas quem <span className="text-primary">verifica</span>?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Quando um alarme dispara, a central precisa saber o que aconteceu. E quando a situação exige presença física, é fundamental ter uma equipe preparada para chegar ao local com rapidez e segurança.
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

// Solution Section
function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f4f4f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070707] leading-tight mb-6">
              Viaturas SOS: presença física quando o monitoramento indica
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              As viaturas de pronta resposta da SOS são acionadas pela central quando uma situação exige verificação presencial. Com equipe treinada e comunicação integrada, garantimos uma resposta rápida e profissional em Americana e região.
            </p>
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="#formulario">
                Quero essa proteção
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Car className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#070707]">Pronta Resposta SOS</h3>
                  <p className="text-gray-500">Verificação presencial integrada</p>
                </div>
              </div>
              <ul className="space-y-3">
                {["Viaturas 24 horas", "Vigilantes treinados", "Comunicação com a central", "Acionamento de autoridades", "Registro de ocorrências"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
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
            Como funciona a Pronta Resposta SOS
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="#formulario">
              Quero essa proteção
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
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
            Mais do que monitorar, <span className="text-primary">é estar presente</span>
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
              Operação própria e integrada
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              As viaturas de pronta resposta fazem parte da operação SOS, integradas à central de monitoramento e ao suporte técnico. Isso garante comunicação direta, agilidade no acionamento e profissionalismo no atendimento.
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
            A Pronta Resposta SOS é indicada para diferentes perfis
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
                Dúvidas comuns sobre Viaturas de Pronta Resposta
              </h2>
              <p className="text-gray-600 mb-8">
                Tire suas dúvidas sobre como funciona o atendimento das viaturas SOS e entenda como esse serviço pode complementar a sua segurança.
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
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    address: "",
    localType: "",
    message: "",
  })

  // Phone mask function
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData({ ...formData, whatsapp: formatted })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Gostaria de saber mais sobre as Viaturas de Pronta Resposta da SOS.%0A%0ANome: ${formData.name}%0AWhatsApp: ${formData.whatsapp}%0AEndereço: ${formData.address}%0ATipo de local: ${formData.localType}%0AMensagem: ${formData.message || "Não informada"}`
    window.open(`https://wa.me/5519994828201?text=${message}`, "_blank")
  }

  return (
    <section id="formulario" className="py-20 lg:py-28 bg-gradient-to-b from-[#070707] to-[#070707]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Fale com a SOS sobre Viaturas de Pronta Resposta
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Conte sobre o seu local e o que você precisa proteger. Nossa equipe avalia o cenário e apresenta uma solução adequada que inclui monitoramento e atendimento presencial.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Telefone</p>
                  <a href="tel:+551934714516" className="text-white font-medium hover:text-primary transition-colors">
                    (19) 3471-4516
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">WhatsApp</p>
                  <a 
                    href="https://wa.me/5519994828201?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20Viaturas%20de%20Pronta%20Resposta%20da%20SOS." 
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

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="(19) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Endereço do local</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Informe o endereço"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de local</label>
                  <select
                    required
                    value={formData.localType}
                    onChange={(e) => setFormData({ ...formData, localType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                  >
                    <option value="">Selecione uma opção</option>
                    {localTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    rows={3}
                    placeholder="Conte brevemente o que você precisa ou quais são suas dúvidas"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 transition-colors hover:bg-[#ab0000]"
                >
                  Solicitar contato
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
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
        <Button asChild variant="outline" className="flex-1 h-12 border-white/20 text-white hover:bg-white/10">
          <Link href="#formulario">
            Solicitar análise
          </Link>
        </Button>
      </div>
    </div>
  )
}

// ============================================
// MAIN EXPORT
// ============================================

export function ViaturasContent() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
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
