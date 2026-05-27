"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Shield, Eye, Clock, CheckCircle, ChevronDown,
  Phone, MessageCircle, Building2, Users, Route,
  Radio, AlertTriangle, Car, ArrowRight, MapPin
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
const WHATSAPP_LINK = "https://wa.me/5519994828201?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Vigil%C3%A2ncia%20Patrimonial%20da%20SOS."

// Data
const benefits = [
  {
    icon: Eye,
    title: "Rondas planejadas",
    description: "Vigilantes percorrem o perímetro em horários estratégicos, cobrindo pontos críticos e vulneráveis."
  },
  {
    icon: Radio,
    title: "Comunicação com a Central",
    description: "Equipe conectada à Central SOS para registro de ocorrências e acionamento de apoio."
  },
  {
    icon: AlertTriangle,
    title: "Prevenção de riscos",
    description: "Identificação de situações suspeitas, irregularidades e condições que possam gerar incidentes."
  },
  {
    icon: Users,
    title: "Profissionais capacitados",
    description: "Vigilantes treinados em procedimentos de segurança, postura e atendimento."
  },
  {
    icon: Clock,
    title: "Cobertura 24 horas",
    description: "Operação estruturada para manter a vigilância em todos os turnos, conforme a necessidade."
  },
  {
    icon: Car,
    title: "Apoio de viaturas",
    description: "Integração com o serviço de pronta-resposta para acionamento rápido em ocorrências."
  },
]

const applications = [
  {
    title: "Condomínios",
    description: "Vigilância do perímetro, áreas comuns e pontos de acesso em condomínios residenciais e empresariais."
  },
  {
    title: "Indústrias",
    description: "Proteção de plantas industriais, pátios, estoques e áreas de produção."
  },
  {
    title: "Centros logísticos",
    description: "Segurança de galpões, docas, pátios de carga e descarga."
  },
  {
    title: "Obras e canteiros",
    description: "Vigilância de materiais, equipamentos e controle de acesso em obras."
  },
  {
    title: "Áreas rurais",
    description: "Proteção de propriedades rurais, fazendas e agroindústrias."
  },
  {
    title: "Eventos",
    description: "Segurança temporária para eventos corporativos, feiras e encontros."
  },
]

const differentials = [
  {
    title: "Supervisão de campo",
    description: "Visitas periódicas de supervisores para acompanhar a operação e orientar a equipe."
  },
  {
    title: "Registro de rondas",
    description: "Documentação dos pontos percorridos, horários e observações de cada turno."
  },
  {
    title: "Integração com monitoramento",
    description: "Vigilante conectado à Central SOS e aos sistemas de câmeras e alarmes."
  },
  {
    title: "Procedimentos definidos",
    description: "Roteiro de atuação para situações do dia a dia e ocorrências específicas."
  },
  {
    title: "Gestão de escalas",
    description: "Organização de turnos, folgas e substituições sem impacto na operação."
  },
  {
    title: "Uniformes e identificação",
    description: "Equipe padronizada e identificada para reforçar a presença e a credibilidade."
  },
]

const faqItems = [
  {
    question: "Qual a diferença entre vigilância patrimonial e portaria?",
    answer: "A portaria atua no controle de acesso, recebendo e autorizando a entrada de pessoas e veículos. A vigilância patrimonial foca na proteção do perímetro e das áreas internas, realizando rondas, identificando riscos e prevenindo incidentes. Em muitos casos, os dois serviços atuam de forma integrada."
  },
  {
    question: "Os vigilantes são armados?",
    answer: "A SOS oferece vigilância armada e desarmada, conforme a necessidade e a legislação aplicável. A definição do modelo considera o perfil do local, o tipo de risco e as preferências do cliente."
  },
  {
    question: "Como funciona a cobertura de escalas?",
    answer: "A SOS mantém uma equipe de cobertura para substituições programadas e emergenciais. O objetivo é garantir que o posto não fique descoberto, mesmo em situações de ausência ou imprevistos."
  },
  {
    question: "O vigilante pode acionar apoio em caso de ocorrência?",
    answer: "Sim. O vigilante está conectado à Central SOS e pode solicitar apoio da equipe de pronta-resposta, acionar autoridades ou seguir os procedimentos definidos para cada tipo de situação."
  },
  {
    question: "A SOS atende empresas de todos os portes?",
    answer: "Sim. A operação é dimensionada conforme a estrutura, a rotina e o nível de risco de cada cliente. Atendemos desde pequenas empresas até grandes plantas industriais e condomínios."
  },
]

const localTypes = [
  "Condomínio residencial",
  "Condomínio empresarial",
  "Indústria",
  "Centro logístico / galpão",
  "Obra / canteiro",
  "Propriedade rural",
  "Outro",
]

// Main Component
export function VigilanciaPatrimonialContent() {
  return (
    <main className="bg-background">
      <HeroSection />
      <WhatIsSection />
      <BenefitsSection />
      <ApplicationsSection />
      <DifferentialsSection />
      <FaqSection />
      <FormSection />
    </main>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services/vigilancia.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-white">Vigilância Patrimonial</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Proteção <span className="text-primary">ativa</span> do seu patrimônio
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Vigilantes treinados para percorrer, observar e proteger. Rondas planejadas, comunicação com a Central SOS e apoio de viaturas quando necessário.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-base">
              <a href="#formulario">
                Solicitar proposta
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base bg-white/10 border-white/30 text-white hover:bg-white/20">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-8 w-8 text-white/60" />
          </motion.div>
        </motion.div>
      </div>
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
                src="/images/services/vigilancia.jpg"
                alt="Vigilante em ronda"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl max-w-[200px]">
              <Route className="h-8 w-8 mb-2" />
              <p className="text-2xl font-bold">Rondas</p>
              <p className="text-sm text-white/80">planejadas e registradas</p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              O que é <span className="text-primary">Vigilância Patrimonial</span>?
            </h2>
            <div className="space-y-4 text-white/70 text-lg leading-relaxed">
              <p>
                A Vigilância Patrimonial é um serviço de segurança com foco na proteção de instalações, áreas externas e perímetros. Vigilantes treinados percorrem o local em rondas planejadas, identificam situações de risco e atuam de forma preventiva.
              </p>
              <p>
                Na SOS, a vigilância vai além da presença física: a equipe está conectada à Central de Monitoramento, pode acionar apoio de viaturas e segue procedimentos definidos para cada tipo de ocorrência.
              </p>
              <p>
                O serviço é indicado para condomínios, indústrias, centros logísticos, obras e qualquer local que exija proteção ativa e constante.
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
    <section className="py-20 lg:py-28 bg-[#0a0a0a]">
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
            Uma operação estruturada para proteger seu patrimônio com profissionais preparados e tecnologia integrada.
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

// Applications Section
function ApplicationsSection() {
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
            Onde <span className="text-primary">atuamos</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A vigilância patrimonial da SOS atende diversos segmentos, sempre com operação adaptada ao perfil e às necessidades de cada cliente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{app.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{app.description}</p>
                </div>
              </div>
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
    <section className="py-20 lg:py-28 bg-[#0a0a0a]">
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
              A vigilância patrimonial da SOS combina profissionais preparados, supervisão ativa e integração com tecnologia para garantir uma proteção mais eficiente.
            </p>
            <Button asChild size="lg" className="transition-colors hover:bg-[#ab0000]">
              <a href="#formulario">
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
              Tire suas dúvidas sobre a vigilância patrimonial da SOS.
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
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    address: "",
    localType: "",
    coverage: "",
    message: "",
  })

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
    const message = `Olá! Gostaria de saber mais sobre a Vigilância Patrimonial da SOS.%0A%0ANome: ${formData.name}%0AWhatsApp: ${formData.whatsapp}%0AEndereço: ${formData.address}%0ATipo de local: ${formData.localType}%0ACobertura desejada: ${formData.coverage}%0AMensagem: ${formData.message || "Não informada"}`
    window.open(`https://wa.me/5519994828201?text=${message}`, "_blank")
  }

  return (
    <section id="formulario" className="py-20 lg:py-28 bg-gradient-to-b from-[#0a0a0a] to-[#070707]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Fale com a SOS sobre Vigilância Patrimonial
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Conte sobre a estrutura, a rotina e os pontos de atenção do seu local. Nossa equipe avalia o cenário e apresenta uma proposta adequada para a proteção do seu patrimônio.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Telefone</p>
                  <a href="tel:+551934714514" className="text-white font-medium hover:text-primary transition-colors">
                    (19) 3471-4514
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cobertura desejada</label>
                  <select
                    required
                    value={formData.coverage}
                    onChange={(e) => setFormData({ ...formData, coverage: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="24 horas">24 horas</option>
                    <option value="12 horas diurno">12 horas (diurno)</option>
                    <option value="12 horas noturno">12 horas (noturno)</option>
                    <option value="Fins de semana e feriados">Fins de semana e feriados</option>
                    <option value="Temporário / evento">Temporário / evento</option>
                    <option value="Outro">Outro</option>
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
