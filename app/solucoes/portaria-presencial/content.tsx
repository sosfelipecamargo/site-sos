"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Users, Shield, Clock, CheckCircle, ChevronDown,
  Phone, MessageCircle, Building2, UserCheck, ClipboardList,
  Eye, Award, Headphones, ArrowRight, BadgeCheck
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Constants
const WHATSAPP_LINK = "https://wa.me/5519994828201?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Portaria%20Presencial."

// Data
const benefits = [
  {
    icon: UserCheck,
    title: "Profissionais treinados",
    description: "Equipe selecionada e capacitada para atuar com postura, atenção e preparo em situações do dia a dia."
  },
  {
    icon: Eye,
    title: "Presença física no local",
    description: "Um profissional no ponto de acesso para identificar, orientar e acompanhar a movimentação."
  },
  {
    icon: ClipboardList,
    title: "Controle de entrada e saída",
    description: "Registro de visitantes, prestadores e moradores conforme procedimentos definidos."
  },
  {
    icon: Headphones,
    title: "Apoio da Central SOS",
    description: "Porteiro conectado à central de monitoramento para suporte em ocorrências."
  },
  {
    icon: Shield,
    title: "Postura preventiva",
    description: "Atuação voltada à prevenção, com atenção ao perímetro e à rotina do local."
  },
  {
    icon: Clock,
    title: "Escalas organizadas",
    description: "Gestão de turnos, cobertura de folgas e substituições sem impacto na operação."
  },
]

const differentials = [
  {
    title: "Seleção criteriosa",
    description: "Processo de recrutamento com verificação de antecedentes, referências e perfil comportamental."
  },
  {
    title: "Treinamento contínuo",
    description: "Capacitação inicial e reciclagens periódicas sobre procedimentos, postura e atendimento."
  },
  {
    title: "Supervisão ativa",
    description: "Acompanhamento da equipe por supervisores de campo e pela Central SOS."
  },
  {
    title: "Integração com tecnologia",
    description: "Porteiro pode operar em conjunto com câmeras, controle de acesso e monitoramento."
  },
  {
    title: "Cobertura garantida",
    description: "Gestão de escalas para manter o posto sempre coberto, inclusive em folgas e ausências."
  },
  {
    title: "Comunicação com a central",
    description: "Canal direto com a Central SOS para apoio em situações que exijam suporte ou acionamento."
  },
]

const faqItems = [
  {
    question: "Qual a diferença entre portaria presencial e portaria virtual?",
    answer: "Na portaria presencial, há um profissional fisicamente no local, realizando o controle de acesso de forma direta. Na portaria virtual, o atendimento é feito remotamente, por uma central de operações. A escolha depende do perfil do condomínio, da estrutura disponível e do volume de acessos."
  },
  {
    question: "A SOS oferece portaria 24 horas?",
    answer: "Sim. A operação pode ser estruturada para cobertura 24 horas, 12 horas ou conforme a necessidade do cliente. A escala é organizada para garantir a presença do profissional nos horários definidos."
  },
  {
    question: "O porteiro fica sozinho ou tem apoio?",
    answer: "O porteiro tem apoio da Central SOS, que pode ser acionada em situações de dúvida, ocorrências ou emergências. Além disso, a supervisão de campo realiza visitas periódicas aos postos."
  },
  {
    question: "Os profissionais são funcionários da SOS?",
    answer: "Sim. Todos os porteiros são contratados pela SOS, com registro em carteira, treinamento e acompanhamento contínuo. Isso garante responsabilidade, padronização e segurança jurídica para o cliente."
  },
  {
    question: "E se o porteiro faltar?",
    answer: "A SOS mantém uma equipe de cobertura para substituições programadas e emergenciais. O objetivo é garantir que o posto não fique descoberto, mesmo em situações imprevistas."
  },
]

// Main Component
export function PortariaPresencialContent() {
  return (
    <main className="bg-background">
      <HeroSection />
      <WhatIsSection />
      <BenefitsSection />
      <DifferentialsSection />
      <FaqSection />
      <FormSection />
    </main>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#070707] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/portaria-presencial.jpg"
          alt="Portaria Presencial SOS"
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
            Portaria Presencial
          </span>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Presença profissional para organizar acessos e apoiar a rotina do local
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
            Profissionais preparados para atender visitantes, controlar entradas e saídas e seguir procedimentos alinhados às necessidades do condomínio ou empresa.
          </p>

          {/* Single CTA */}
          <Button asChild size="lg" className="h-14 px-10 text-base">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Solicitar proposta
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

// What Is Section
function WhatIsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/services/portaria-presencial.jpg"
                alt="Porteiro em posto de trabalho"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl max-w-[200px]">
              <Users className="h-8 w-8 mb-2" />
              <p className="text-2xl font-bold">+40 anos</p>
              <p className="text-sm text-white/80">de experiência</p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              O que é <span className="text-primary">Portaria Presencial</span>?
            </h2>
            <div className="space-y-4 text-white/70 text-lg leading-relaxed">
              <p>
                A Portaria Presencial é o modelo tradicional de controle de acesso, com um profissional fisicamente no local para receber, identificar e autorizar a entrada de pessoas e veículos.
              </p>
              <p>
                Na SOS, esse serviço vai além da presença física: os porteiros são treinados, supervisionados e conectados à Central de Monitoramento, garantindo uma operação mais segura e organizada.
              </p>
              <p>
                O modelo é indicado para condomínios e empresas que preferem o atendimento presencial, seja pelo volume de acessos, pelo perfil dos moradores ou pela estrutura do local.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Benefits Section
function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que escolher a <span className="text-primary">SOS</span>?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Uma operação estruturada para manter o controle de acesso organizado e seguro.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/60 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Differentials Section
function DifferentialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Diferenciais da <span className="text-primary">operação SOS</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              A portaria presencial da SOS combina profissionais preparados com processos bem definidos e suporte tecnológico, garantindo uma operação mais segura e eficiente.
            </p>
            <Button asChild size="lg" className="transition-colors hover:bg-[#ab0000]">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Solicitar proposta
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Right - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {differentials.map((item, index) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Perguntas <span className="text-primary">frequentes</span>
            </h2>
            <p className="text-white/60 text-lg mb-6">
              Tire suas dúvidas sobre a portaria presencial da SOS.
            </p>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 transition-colors hover:bg-[#ab0000] hover:text-white hover:border-[#ab0000]">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Tire suas dúvidas
              </a>
            </Button>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-white/10 rounded-xl px-6 bg-white/5 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left text-white hover:no-underline py-5 text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
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
            Fale com a SOS sobre Portaria Presencial
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            Conte sobre a estrutura e a rotina do seu condomínio ou empresa. Nossa equipe avalia o cenário e apresenta uma proposta adequada para o controle de acesso.
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
                <a href="tel:+551934714514" className="text-white font-medium hover:text-primary transition-colors">
                  (19) 3471-4514
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
