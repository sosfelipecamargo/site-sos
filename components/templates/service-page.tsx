"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { Service } from "@/lib/data"

interface ServicePageProps {
  service: Service
}

export function ServicePage({ service }: ServicePageProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-accent overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Soluções SOS
                </span>
                <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-foreground text-balance">
                  {service.heroTitle}
                </h1>
                <p className="mt-4 text-xl sm:text-2xl text-accent-foreground/90 font-medium">
                  {service.heroSubtitle}
                </p>
                <p className="mt-4 text-lg text-accent-foreground/70 max-w-2xl text-pretty">
                  {service.heroDescription}
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base"
                  >
                    <Link href="/contato">
                      Solicitar proposta
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-semibold px-8 py-6 text-base"
                  >
                    <a 
                      href="https://wa.me/5519994828201" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-xl"
            >
              {service.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-accent-foreground/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* O que é */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Entenda
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
                  {service.whatIs.title}
                </h2>
                <p className="mt-6 text-muted-foreground text-lg text-pretty leading-relaxed">
                  {service.whatIs.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Para quem é indicado</h3>
                  <ul className="space-y-2">
                    {service.whatIs.forWhom.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Problemas que resolve</h3>
                  <ul className="space-y-2">
                    {service.whatIs.problems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vantagens */}
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
                Vantagens
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Por que contratar a SOS?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg text-pretty">
                Tradição, tecnologia e atendimento humano em uma operação estruturada.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
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
                Benefícios
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Ganhos reais para sua operação
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
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
                Processo
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Como funciona na prática
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-border -translate-x-1/2" />
              
              <div className="space-y-8 lg:space-y-0">
                {service.steps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`lg:grid lg:grid-cols-2 lg:gap-16 ${
                      index % 2 === 1 ? "lg:direction-rtl" : ""
                    }`}
                  >
                    <div className={`lg:text-right ${index % 2 === 1 ? "lg:order-2 lg:text-left" : ""}`}>
                      <div className={`inline-flex items-center gap-4 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                          <p className="text-muted-foreground mt-1">{step.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? "lg:order-1" : ""} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Para quem é indicado */}
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
                Público-alvo
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Para quem é indicado
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.targetAudience.map((audience, index) => (
                <motion.div
                  key={audience.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-center p-6 bg-background rounded-xl border border-border"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <audience.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground">{audience.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais Técnicos */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Tecnologia
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
                  Diferenciais técnicos e operacionais
                </h2>
                <p className="mt-4 text-muted-foreground text-lg text-pretty">
                  Combinamos equipamentos de qualidade, infraestrutura confiável 
                  e processos bem definidos para garantir uma operação eficiente.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-card rounded-xl p-8 border border-border">
                  <ul className="space-y-4">
                    {service.technicalDifferentials.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Depoimento */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              
              <blockquote className="text-xl sm:text-2xl font-medium text-foreground italic text-pretty">
                &ldquo;{service.testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="mt-6">
                <p className="font-semibold text-foreground">{service.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{service.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 lg:py-28 bg-accent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground text-balance">
                Pronto para ter mais controle e segurança?
              </h2>
              <p className="mt-6 text-lg text-accent-foreground/80 text-pretty">
                Entre em contato e entenda como a SOS pode ajudar sua empresa, 
                condomínio ou residência com uma solução de {service.name.toLowerCase()}.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base"
                >
                  <Link href="/contato">
                    Solicitar proposta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-semibold px-8 py-6 text-base"
                >
                  <a href="tel:1934714515">
                    <Phone className="mr-2 h-5 w-5" />
                    19 3471-4515
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
