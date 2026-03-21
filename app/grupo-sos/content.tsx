"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Shield, 
  Monitor, 
  Camera, 
  Wifi, 
  Users, 
  Car, 
  Bell,
  Award,
  Clock,
  HeartHandshake,
  CheckCircle,
  MapPin,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { timeline, differentials } from "@/lib/data"
import { CtaSection } from "@/components/sections/cta-section"

const frentes = [
  { icon: Bell, title: "Monitoramento 24h", description: "Central de monitoramento de alarmes com resposta estruturada e viaturas próprias." },
  { icon: Monitor, title: "Portaria Virtual", description: "Controle de acesso remoto com operação 24 horas e tecnologia de ponta." },
  { icon: Users, title: "Portaria Presencial e Híbrida", description: "Porteiros treinados e supervisionados, com ou sem apoio remoto." },
  { icon: Shield, title: "Vigilância Patrimonial", description: "Vigilantes armados e desarmados para proteção ostensiva." },
  { icon: Car, title: "Pronta Resposta", description: "Viaturas próprias para verificação presencial e apoio em ocorrências." },
  { icon: Camera, title: "Segurança Eletrônica", description: "Projetos sob medida em CFTV, alarmes, cercas e controle de acesso." },
  { icon: Wifi, title: "SOS Telecom", description: "Internet fibra e telefonia para suportar operações e sistemas de segurança." },
]

const valores = [
  { icon: Award, title: "Tradição", description: "Mais de 46 anos de mercado com conhecimento acumulado e reputação construída." },
  { icon: Clock, title: "Operação estruturada", description: "Processos definidos, equipes treinadas e tecnologia que funciona." },
  { icon: HeartHandshake, title: "Atendimento humano", description: "Suporte próximo, comunicação direta e compromisso com cada cliente." },
  { icon: CheckCircle, title: "Confiabilidade", description: "Entregamos o que prometemos, com consistência e seriedade." },
]

export function GrupoSosContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Grupo SOS
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-foreground text-balance">
              Segurança, tecnologia e conectividade desde 1980
            </h1>
            <p className="mt-6 text-xl text-accent-foreground/80 text-pretty">
              Um hub integrado de soluções que une tradição, operação estruturada 
              e atendimento humano para entregar segurança de verdade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Nossa História
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Uma trajetória de evolução e compromisso
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="text-pretty">
                  A SOS Segurança Inteligente nasceu em 1980 em Americana/SP, inicialmente 
                  focada em sistemas de alarme e segurança eletrônica. Ao longo das décadas, 
                  evoluímos acompanhando as transformações do mercado e as necessidades 
                  dos nossos clientes.
                </p>
                <p className="text-pretty">
                  Em 1993, inauguramos nossa central de monitoramento 24 horas, um marco 
                  que nos posicionou como referência regional. Nos anos seguintes, expandimos 
                  para vigilância patrimonial e portaria, sempre com foco em qualidade operacional.
                </p>
                <p className="text-pretty">
                  A partir de 2015, incorporamos a portaria virtual e a SOS Telecom ao nosso 
                  portfólio, consolidando nossa proposta de <strong className="text-foreground">hub 
                  de segurança, tecnologia e conectividade</strong>. Hoje, atendemos mais de 
                  2.000 clientes entre residências, condomínios, empresas e indústrias.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-secondary/50 rounded-2xl p-8 lg:p-10">
                <h3 className="text-lg font-semibold text-foreground mb-8">
                  Marcos da nossa trajetória
                </h3>
                
                <div className="relative">
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
                  
                  <div className="space-y-6">
                    {timeline.map((item, index) => (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="relative flex gap-4"
                      >
                        <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-1 ${
                          index === timeline.length - 1 ? "bg-primary" : "bg-border"
                        }`} />
                        
                        <div>
                          <span className="text-sm font-bold text-primary">{item.year}</span>
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Frentes de Atuação */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Frentes de Atuação
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Um portfólio completo em uma operação integrada
            </h2>
            <p className="mt-4 text-muted-foreground text-lg text-pretty">
              A SOS reúne diferentes soluções de segurança, tecnologia e conectividade 
              para oferecer uma experiência completa aos seus clientes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {frentes.map((frente, index) => (
              <motion.div
                key={frente.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <frente.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{frente.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{frente.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/#solucoes">
                Ver todas as soluções
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nossos Valores
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              O que nos define
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <valor.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{valor.title}</h3>
                <p className="text-muted-foreground text-pretty">{valor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Presença Regional */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Presença Regional
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Operação forte com raízes na região
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="text-pretty">
                  Com sede em Americana/SP, a SOS construiu ao longo de mais de quatro 
                  décadas uma operação sólida que atende toda a região metropolitana 
                  de Campinas e cidades vizinhas.
                </p>
                <p className="text-pretty">
                  Nossa central de monitoramento funciona 24 horas, 7 dias por semana, 
                  com equipe própria e infraestrutura redundante. Contamos com frota 
                  de viaturas de pronta resposta estrategicamente posicionadas para 
                  garantir tempo de atendimento otimizado.
                </p>
                <p className="text-pretty">
                  Conhecemos a região, suas particularidades e necessidades. Isso nos 
                  permite oferecer um <strong className="text-foreground">atendimento 
                  verdadeiramente próximo</strong>, com suporte ágil e relacionamento 
                  de longo prazo com nossos clientes.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Rua Dom Pedro II, Vila Galo</p>
                  <p className="text-sm text-muted-foreground">13.466-000, Americana/SP</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <p className="text-4xl font-bold text-primary">46+</p>
                <p className="text-sm text-muted-foreground mt-1">Anos de mercado</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <p className="text-4xl font-bold text-primary">2000+</p>
                <p className="text-sm text-muted-foreground mt-1">Clientes ativos</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <p className="text-4xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground mt-1">Operação contínua</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <p className="text-4xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Viaturas na região</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Diferenciais
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              Por que escolher a SOS?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-background rounded-xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
