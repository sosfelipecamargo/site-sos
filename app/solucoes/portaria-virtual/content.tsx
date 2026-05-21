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
  Play,
  ChevronDown,
  Phone,
  MessageCircle,
  Star,
  MapPin,
  Camera,
  Lock,
  FileText,
  Smartphone,
  Bell,
  History,
  UserCheck,
  AlertTriangle,
  DollarSign,
  Settings,
  Eye,
  Zap,
  Target,
  Home,
  Factory,
  Building,
  HelpCircle,
  Send
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// WhatsApp link
const WHATSAPP_LINK = "https://wa.me/5519994828201?text=Olá!%20Quero%20uma%20análise%20para%20Portaria%20Virtual."

// ============================================
// DATA
// ============================================

const trustItems = [
  { icon: Building2, label: "Central de Segurança 24h" },
  { icon: Users, label: "Operadores treinados" },
  { icon: FileText, label: "Procedimentos personalizados" },
  { icon: Lock, label: "Controle remoto\nde acesso" },
  { icon: Camera, label: "Integração com câmeras e sistemas" },
  { icon: Wrench, label: "Suporte técnico próximo" },
]

const problemCards = [
  {
    icon: DollarSign,
    title: "Custo elevado",
    description: "A portaria presencial pode representar uma das maiores despesas do condomínio."
  },
  {
    icon: Settings,
    title: "Falta de padronização",
    description: "Cada situação pode ser tratada de uma forma diferente, gerando falhas e insegurança."
  },
  {
    icon: Eye,
    title: "Pouco controle de acesso",
    description: "Visitantes, prestadores e entregas precisam de validação, registro e acompanhamento."
  },
  {
    icon: AlertTriangle,
    title: "Dificuldade de gestão",
    description: "Síndicos e administradoras precisam de mais visibilidade sobre a rotina da portaria."
  },
]

const howItWorksSteps = [
  {
    number: "01",
    title: "O visitante chega ao local",
    description: "Ele aciona o interfone ou canal de atendimento instalado na entrada."
  },
  {
    number: "02",
    title: "A Central SOS atende",
    description: "Um operador treinado realiza o atendimento remoto em tempo real."
  },
  {
    number: "03",
    title: "O acesso é validado",
    description: "A central segue os procedimentos definidos para moradores, visitantes, prestadores, entregas e veículos."
  },
  {
    number: "04",
    title: "O responsável é consultado quando necessário",
    description: "A autorização acontece conforme as regras combinadas com o condomínio ou empresa."
  },
  {
    number: "05",
    title: "O acesso é liberado com controle",
    description: "A abertura é feita remotamente, com apoio de câmeras, registros e tecnologia integrada."
  },
  {
    number: "06",
    title: "A rotina fica mais organizada",
    description: "Os acessos seguem um padrão, reduzindo improvisos e aumentando a previsibilidade."
  },
]

const benefitsCards = [
  {
    icon: DollarSign,
    title: "Economia operacional",
    description: "Redução de custos em comparação com modelos tradicionais de portaria presencial."
  },
  {
    icon: Lock,
    title: "Mais controle de acesso",
    description: "Entradas e saídas passam a seguir procedimentos definidos e registrados."
  },
  {
    icon: Clock,
    title: "Atendimento 24h",
    description: "Uma central preparada para atender a rotina do condomínio ou empresa todos os dias."
  },
  {
    icon: FileText,
    title: "Padronização da operação",
    description: "Menos improviso e mais clareza sobre como cada situação deve ser conduzida."
  },
  {
    icon: Shield,
    title: "Mais segurança para moradores e gestores",
    description: "Acesso validado, câmeras integradas e acompanhamento remoto."
  },
  {
    icon: Wrench,
    title: "Implantação assistida",
    description: "A SOS acompanha a transição para que a mudança seja organizada e segura."
  },
]

const comparisonTraditional = [
  "Custo operacional mais alto",
  "Atendimento depende da pessoa no local",
  "Processos podem variar por colaborador",
  "Gestão mais difícil de acompanhar",
  "Maior dependência de escala presencial",
  "Mudanças mais lentas",
]

const comparisonSOS = [
  "Possibilidade de economia significativa",
  "Atendimento por central 24h",
  "Procedimentos definidos e padronizados",
  "Mais controle e registros",
  "Operação remota com suporte técnico",
  "Implantação planejada e assistida",
]

const structureBlocks = [
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
    title: "Experiência regional",
    description: "Mais de 40 anos atuando em segurança em Americana e região."
  },
  {
    icon: Zap,
    title: "Soluções integradas",
    description: "CFTV, alarmes, controle de acesso, monitoramento, portaria virtual e internet."
  },
  {
    icon: Headphones,
    title: "Atendimento próximo",
    description: "A SOS entende a realidade de condomínios e empresas da região."
  },
]

const targetAudienceCards = [
  {
    icon: Home,
    title: "Condomínios residenciais",
    description: "Para quem busca reduzir custos, organizar acessos e modernizar a rotina da portaria."
  },
  {
    icon: Building,
    title: "Condomínios empresariais",
    description: "Para locais com fluxo de colaboradores, visitantes, fornecedores, prestadores e entregas."
  },
  {
    icon: Factory,
    title: "Empresas e indústrias",
    description: "Para operações que precisam de controle de acesso com mais padronização e acompanhamento."
  },
  {
    icon: Users,
    title: "Portarias híbridas",
    description: "Para locais que precisam combinar atendimento remoto com apoio presencial em determinados horários ou situações."
  },
]

const implementationSteps = [
  {
    number: "1",
    title: "Diagnóstico da estrutura atual",
    description: "Análise da portaria, acessos, câmeras, comunicação e necessidades do local."
  },
  {
    number: "2",
    title: "Definição dos procedimentos",
    description: "Criação das regras de atendimento para visitantes, moradores, entregas, prestadores e emergências."
  },
  {
    number: "3",
    title: "Instalação e integração",
    description: "Adequação da estrutura técnica para operação remota."
  },
  {
    number: "4",
    title: "Treinamento e comunicação",
    description: "Orientação para síndico, administradora, moradores ou equipe interna."
  },
  {
    number: "5",
    title: "Início da operação assistida",
    description: "Acompanhamento inicial para ajustar detalhes e garantir uma transição mais segura."
  },
]

const appFeatures = [
  { icon: UserCheck, label: "Liberação de visitantes" },
  { icon: Users, label: "Cadastro de prestadores" },
  { icon: Bell, label: "Notificações de eventos" },
  { icon: Lock, label: "Apoio na gestão de acessos" },
  { icon: History, label: "Histórico de movimentações" },
  { icon: MessageCircle, label: "Comunicação mais organizada" },
]

const testimonials = [
  {
    name: "ANDREA RIGONATO",
    role: "Proprietária da USICOMP",
    text: "A Portaria Virtual trouxe mais controle, padronização e segurança para o nosso acesso. A implantação foi simples, rápida e de fácil adaptação. Vale o investimento, pois facilita o fluxo de funcionários, fornecedores e clientes."
  },
  {
    name: "LIGIA",
    role: "Gerente do Condomínio Empresarial Alvorada",
    text: "A SOS transmite tranquilidade e eficiência. Sempre que há uma ocorrência, a equipe se posiciona rapidamente e busca resolver da melhor forma. O atendimento é ágil, acessível e muito eficaz."
  },
  {
    name: "GUILHERME FONTES",
    role: "Síndico do Condomínio Comercial American Park",
    text: "A implantação da Portaria Virtual foi rápida e muito positiva. A solução trouxe mais agilidade no atendimento, segurança no monitoramento e organização para o dia a dia."
  },
]

const faqItems = [
  {
    question: "A rotina do condomínio muda muito?",
    answer: "A rotina é adaptada de forma planejada. O objetivo não é complicar o dia a dia, mas organizar os acessos com procedimentos mais claros e seguros."
  },
  {
    question: "E se a internet cair?",
    answer: "O projeto pode prever estrutura de comunicação e contingência conforme a necessidade do local. Na análise técnica, a SOS avalia a melhor configuração para manter a operação mais segura."
  },
  {
    question: "O morador precisa saber usar aplicativo?",
    answer: "O aplicativo pode facilitar a rotina, mas a operação é desenhada para que o atendimento continue sendo conduzido pela central e pelos procedimentos definidos."
  },
  {
    question: "A Portaria Virtual serve para qualquer condomínio?",
    answer: "Nem sempre. Por isso, a SOS realiza uma análise da estrutura, dos acessos e da rotina antes de indicar o melhor modelo."
  },
  {
    question: "A portaria presencial deixa de existir?",
    answer: "Depende do projeto. Em alguns casos, a Portaria Virtual substitui a portaria presencial. Em outros, pode funcionar em modelo híbrido."
  },
  {
    question: "É seguro abrir portão remotamente?",
    answer: "Sim, desde que exista estrutura adequada, câmeras, procedimentos definidos, validação de acesso e operação profissional. Por isso, a implantação precisa ser feita com critério."
  },
]

const localTypes = [
  "Condomínio residencial",
  "Condomínio empresarial",
  "Empresa",
  "Indústria",
  "Outro",
]

const portariaTypes = [
  "Sim, presencial 24h",
  "Sim, presencial em horário parcial",
  "Sim, virtual 24h",
  "Não",
  "Não sei informar",
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
          src="/images/hero/portaria-virtual-bg.png"
          alt="Central de Monitoramento SOS"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay with red gradient */}
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
            Portaria Virtual
          </span>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Mais controle, segurança e economia para sua portaria
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
            A Portaria Virtual SOS moderniza o controle de acesso com central 24h, atendimento humano, procedimentos definidos e tecnologia integrada à rotina do seu condomínio ou empresa.
          </p>

          {/* Single CTA */}
          <Button asChild size="lg" className="h-14 px-10 text-base">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
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
            Uma operação completa por trás da sua portaria
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
        <div className="absolute inset-0 bg-[url('/images/hero/portaria-virtual-bg.png')] bg-cover bg-center grayscale" />
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
            Sua portaria pode <span className="text-primary">custar caro</span> e ainda assim não entregar o controle que <span className="text-primary">você precisa</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            A rotina de uma portaria envolve moradores, visitantes, entregadores, prestadores de serviço, veículos, encomendas e situações inesperadas. Quando não existem processos bem definidos, a segurança fica dependente de improviso, memória e decisões individuais.
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
              Portaria Virtual SOS: controle de acesso com tecnologia, processos e atendimento humano
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A Portaria Virtual SOS permite que o acesso ao condomínio ou empresa seja atendido remotamente por uma central preparada, seguindo procedimentos definidos junto ao cliente. O objetivo é tornar a rotina mais segura, organizada e eficiente, sem perder o cuidado humano no atendimento.
            </p>
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="#formulario">
                Quero entender se funciona para o meu condomínio
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
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#070707]">Portaria Virtual SOS</h3>
                  <p className="text-gray-500">Operação completa de segurança</p>
                </div>
              </div>
              <ul className="space-y-3">
                {["Atendimento remoto 24h", "Procedimentos personalizados", "Câmeras integradas", "Equipe técnica própria", "Implantação assistida"].map((item, i) => (
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

// How It Works Section - Cascading Timeline
function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-[#070707] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Como funciona a Portaria Virtual SOS
          </h2>
        </motion.div>

        {/* Desktop: Cascading Timeline */}
        <div className="hidden lg:block relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent -translate-x-1/2" />
          
          <div className="space-y-0">
            {howItWorksSteps.map((step, index) => {
              const isLeft = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative flex items-center",
                    isLeft ? "justify-start" : "justify-end"
                  )}
                >
                  {/* Content */}
                  <div className={cn(
                    "w-[45%] flex items-center gap-6",
                    isLeft ? "flex-row" : "flex-row-reverse"
                  )}>
                    {/* Text block */}
                    <div className={cn(
                      "flex-1",
                      isLeft ? "text-right" : "text-left"
                    )}>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-white/50 leading-relaxed text-sm">{step.description}</p>
                    </div>
                  </div>

                  {/* Center marker */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="relative">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 w-14 h-14 rounded-full bg-primary/20 blur-md -translate-x-1 -translate-y-1" />
                      {/* Number circle */}
                      <div className="relative w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-lg shadow-primary/40">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Horizontal connector line */}
                  <div className={cn(
                    "absolute top-1/2 -translate-y-1/2 h-px bg-gradient-to-r",
                    isLeft 
                      ? "right-1/2 mr-6 w-[calc(5%-24px)] from-primary/40 to-transparent" 
                      : "left-1/2 ml-6 w-[calc(5%-24px)] from-transparent to-primary/40"
                  )} />

                  {/* Spacer for alternating layout */}
                  <div className="w-[45%]" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          
          <div className="space-y-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start gap-6 pl-2"
              >
                {/* Number marker */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="absolute inset-0 w-10 h-10 rounded-full bg-primary/20 blur-md" />
                  <div className="relative w-9 h-9 rounded-full bg-primary text-white font-bold flex items-center justify-center text-xs shadow-lg shadow-primary/30">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="#formulario">
              Ver como seria no meu condomínio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
      </span>
      <h3 className="text-lg font-semibold text-white mt-4 mb-3">{step.title}</h3>
      <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
    </motion.div>
  )
}

// Benefits Section - Cybernetic Bento Grid
function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(227, 6, 19, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(227, 6, 19, 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mais do que substituir a portaria, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">é evoluir a gestão de acesso</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefitsCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative p-6 rounded-2xl overflow-hidden transition-all duration-500",
                "bg-gradient-to-br from-white/[0.05] to-transparent",
                "border border-white/[0.08]",
                "hover:border-primary/40 hover:shadow-[0_0_30px_rgba(227,6,19,0.15)]",
                // Make first and last items span 2 columns on larger screens
                index === 0 && "lg:col-span-2",
                index === benefitsCards.length - 1 && "lg:col-span-2"
              )}
            >
              {/* Animated border glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-sm" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <card.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-white/60 leading-relaxed">{card.description}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Comparison Section
function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f4f4f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070707]">
            Compare os modelos de operação
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 lg:p-8 rounded-2xl bg-white border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-500 mb-6">Portaria tradicional</h3>
            <ul className="space-y-3">
              {comparisonTraditional.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-gray-400" />
                  </div>
                  <span className="text-gray-600 text-sm lg:text-base whitespace-nowrap">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SOS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 lg:p-8 rounded-2xl bg-[#070707] border border-primary/20"
          >
            <h3 className="text-xl font-semibold text-primary mb-6">Portaria Virtual SOS</h3>
            <ul className="space-y-3">
              {comparisonSOS.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-white text-sm lg:text-base whitespace-nowrap">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="#formulario">
              Calcular possibilidade de economia
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Structure Section - Same style as "Quem Atendemos"
function StructureSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const structureItems = [
    {
      id: "central",
      title: "Central de Segurança SOS",
      description: "Operação 24h com equipe treinada e ambiente estruturado para atendimento.",
      image: "/images/hero/portaria-virtual-bg.png"
    },
    {
      id: "equipe",
      title: "Equipe técnica própria",
      description: "Instalação, manutenção e suporte com profissionais da SOS.",
      image: "/images/hero/hero-monitoramento.jpg"
    },
    {
      id: "experiencia",
      title: "Experiência regional",
      description: "Mais de 40 anos atuando em segurança em Americana e região.",
      image: "/images/hero/hero-cftv.jpg"
    },
    {
      id: "solucoes",
      title: "Soluções integradas",
      description: "CFTV, alarmes, controle de acesso, monitoramento, portaria virtual e internet.",
      image: "/images/hero/hero-alarmes.jpg"
    },
    {
      id: "atendimento",
      title: "Atendimento próximo",
      description: "A SOS entende a realidade de condomínios e empresas da região.",
      image: "/images/hero/hero-portaria.jpg"
    },
  ]

  return (
    <section id="estrutura" className="py-20 lg:py-28 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Estrutura SOS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white text-balance">
            A sua portaria conectada a uma central de segurança de verdade
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            A SOS Segurança Inteligente conta com uma estrutura própria de atendimento, monitoramento e suporte, preparada para operar rotinas de controle de acesso com segurança, agilidade e proximidade.
          </p>
        </motion.div>

        {/* Interactive Image Accordion */}
        <div className="flex flex-col lg:flex-row gap-2 h-[400px] lg:h-[500px]">
          {structureItems.map((item, index) => {
            const isActive = activeIndex === index
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{
                  flex: isActive ? 4 : 1,
                  transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
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
                  >
                    {item.title}
                  </h3>
                  
                  <p 
                    className="text-white/80 text-sm lg:text-base mt-2 transition-all duration-500 overflow-hidden"
                    style={{ 
                      maxHeight: isActive ? "100px" : "0",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    {item.description}
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070707]">
            A Portaria Virtual SOS é indicada para diferentes tipos de operação
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudienceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                <card.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-[#070707] mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Implementation Section
function ImplementationSection() {
  return (
    <section id="implantacao" className="py-20 lg:py-28 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070707] leading-tight mb-6">
              A mudança é planejada para não complicar a rotina
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A implantação da Portaria Virtual SOS é feita de forma assistida, considerando a estrutura atual do local, os procedimentos necessários e a rotina dos moradores, colaboradores ou usuários.
            </p>
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="#formulario">
                Quero uma análise da minha portaria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <div className="space-y-4">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// App Section
function AppSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Mais autonomia e organização no dia a dia
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Com os recursos integrados à Portaria Virtual, moradores e gestores podem ter mais praticidade para autorizações, cadastros, notificações e acompanhamento da rotina de acesso.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <feature.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white/80">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-white/50 italic">
              Os recursos podem variar conforme o projeto e a estrutura contratada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mockup placeholder */}
            <div className="relative mx-auto max-w-[280px]">
              <div className="aspect-[9/19] rounded-[3rem] bg-gradient-to-b from-gray-800 to-gray-900 border-4 border-gray-700 p-2 shadow-2xl">
                <div className="w-full h-full rounded-[2.5rem] bg-[#0a0a0a] flex items-center justify-center">
                  <div className="text-center p-6">
                    <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-white/60 text-sm">App Portaria Virtual</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Quem conhece a SOS, confia
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6 text-sm">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="pt-4 border-t border-white/10">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-white/50">{testimonial.role}</p>
              </div>
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
                Dúvidas comuns sobre Portaria Virtual
              </h2>
              <p className="text-gray-600 mb-8">
                Tire suas dúvidas sobre como funciona a Portaria Virtual SOS e entenda se essa solução faz sentido para o seu condomínio ou empresa.
              </p>
              <Button asChild size="lg" variant="outline" className="h-12 px-8">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Fale com a SOS e tire suas dúvidas
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
    city: "",
    localType: "",
    hasPortaria: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    const message = `Olá! Gostaria de uma análise para Portaria Virtual.%0A%0ANome: ${formData.name}%0AWhatsApp: ${formData.whatsapp}%0ACidade: ${formData.city}%0ATipo: ${formData.localType}%0APortaria atual: ${formData.hasPortaria}%0AMensagem: ${formData.message}`
    window.open(`https://wa.me/5519994828201?text=${message}`, "_blank")
  }

  return (
    <section id="formulario" className="py-20 lg:py-28 bg-gradient-to-b from-[#070707] to-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Solicite uma análise para sua portaria
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Preencha os dados e a equipe da SOS entrará em contato para entender sua estrutura, sua rotina e indicar o melhor caminho para modernizar o controle de acesso.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Prefere falar direto?</p>
                <a href="tel:1934714515" className="text-white font-medium hover:text-primary transition-colors">
                  19 3471-4515
                </a>
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
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Sua cidade"
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
                    <option value="">Selecione...</option>
                    {localTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Você já possui portaria hoje?</label>
                  <select
                    required
                    value={formData.hasPortaria}
                    onChange={(e) => setFormData({ ...formData, hasPortaria: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                  >
                    <option value="">Selecione...</option>
                    {portariaTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem (opcional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    rows={3}
                    placeholder="Conte mais sobre sua necessidade..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-12">
                  <Send className="mr-2 h-5 w-5" />
                  Quero receber uma análise
                </Button>

                <p className="text-center text-sm text-gray-500">
                  Se preferir, fale diretamente pelo WhatsApp.
                </p>

                <Button asChild variant="outline" size="lg" className="w-full h-12">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </a>
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

export function PortariaVirtualContent() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ComparisonSection />
      <StructureSection />
      <TargetAudienceSection />
      <ImplementationSection />
      <AppSection />
      <TestimonialsSection />
      <FAQSection />
      <FormSection />
      <MobileFixedCTA />
    </>
  )
}
