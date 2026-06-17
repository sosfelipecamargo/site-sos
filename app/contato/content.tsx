"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contato
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-foreground text-balance">
              Fale com a SOS
            </h1>
            <p className="mt-6 text-xl text-accent-foreground/80 text-pretty">
              Entre em contato para tirar dúvidas, solicitar orçamentos ou 
              agendar uma visita técnica. Nossa equipe está pronta para ajudar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
              Atendimento rápido pelo WhatsApp
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
              Fale agora mesmo com a nossa equipe. Para monitoramento e portaria, 
              nossa operação funciona 24 horas por dia.
            </p>

            {/* WhatsApp CTA */}
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="font-semibold h-14 px-10 text-base">
                <a
                  href="https://wa.me/5519994828201?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20a%20SOS%20Seguran%C3%A7a%20Inteligente."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar pelo WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-16 grid sm:grid-cols-2 gap-8"
          >
            {/* Telefones */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground mb-3">Telefones</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Portaria Virtual</p>
                    <a href="tel:+551934714514" className="text-foreground hover:text-primary transition-colors font-medium">
                      (19) 3471-4514
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Segurança Eletrônica</p>
                    <a href="tel:+551934714515" className="text-foreground hover:text-primary transition-colors font-medium">
                      (19) 3471-4515
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Monitoramento e Viaturas</p>
                    <a href="tel:+551934714516" className="text-foreground hover:text-primary transition-colors font-medium">
                      (19) 3471-4516
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Vigilância e Portaria Presencial</p>
                    <a href="tel:+551934057329" className="text-foreground hover:text-primary transition-colors font-medium">
                      (19) 3405-7329
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <a
                  href="https://wa.me/5519994828201?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20a%20SOS%20Seguran%C3%A7a%20Inteligente."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                >
                  (19) 99482-8201
                </a>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-mail</p>
                <a href="mailto:central@sosseguranca.com.br" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  central@sosseguranca.com.br
                </a>
              </div>
            </div>

            {/* Endereço */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Endereço</p>
                <p className="text-lg font-semibold text-foreground">
                  Rua Dom Pedro II, 878 – Vila Galo<br />
                  13.466-000, Americana/SP
                </p>
              </div>
            </div>

            {/* Horário de atendimento */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Horário de atendimento</p>
                <p className="text-lg font-semibold text-foreground">
                  Comercial: 8h às 18h<br />
                  <span className="text-primary">Monitoramento e Portaria: 24h</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
