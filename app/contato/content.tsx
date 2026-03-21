"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const services = [
  "Portaria Virtual",
  "Monitoramento de Alarmes",
  "Portaria Híbrida",
  "Portaria Presencial",
  "Vigilância Patrimonial",
  "Viaturas de Pronta Resposta",
  "Segurança Eletrônica",
  "SOS Telecom",
  "Outro"
]

export function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informações de contato
                </h2>
                <p className="text-muted-foreground">
                  Estamos disponíveis para atender você de segunda a sexta, das 8h às 18h. 
                  Nossa central de monitoramento e portaria virtual funcionam 24 horas.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <a href="tel:1934714515" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      19 3471-4515
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a 
                      href="https://wa.me/5519994828201" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      19 99482-8201
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <a href="mailto:contato@sosseguranca.com.br" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      contato@sosseguranca.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Endereço</p>
                    <p className="text-lg font-semibold text-foreground">
                      Rua Dom Pedro II, Vila Galo<br />
                      13.466-000, Americana/SP
                    </p>
                  </div>
                </div>
                
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
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-6">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold"
                >
                  <a 
                    href="https://wa.me/5519994828201?text=Olá! Gostaria de saber mais sobre as soluções da SOS." 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Envie sua mensagem
                </h2>
                <p className="text-muted-foreground mb-8">
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Mensagem enviada!
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Recebemos sua mensagem e entraremos em contato em breve. 
                      Obrigado pelo interesse na SOS Segurança Inteligente.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome completo *</Label>
                        <Input 
                          id="name" 
                          placeholder="Seu nome" 
                          required 
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="(00) 00000-0000" 
                          required 
                          className="h-12"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="seu@email.com" 
                        required 
                        className="h-12"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa / Condomínio</Label>
                        <Input 
                          id="company" 
                          placeholder="Nome da empresa ou condomínio" 
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Serviço de interesse</Label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Descreva como podemos ajudar..." 
                        rows={5}
                        required 
                        className="resize-none"
                      />
                    </div>
                    
                    <div className="space-y-4 pt-2">
                      <div className="flex items-start gap-3">
                        <Checkbox id="lgpd" required />
                        <Label htmlFor="lgpd" className="text-sm text-muted-foreground leading-tight">
                          Concordo com a coleta e uso dos meus dados conforme a Política de Privacidade da SOS (LGPD). *
                        </Label>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Checkbox id="marketing" />
                        <Label htmlFor="marketing" className="text-sm text-muted-foreground leading-tight">
                          Aceito receber comunicações sobre novidades, conteúdos e ofertas da SOS.
                        </Label>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 text-base"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          Enviar mensagem
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground">
              Nossa localização
            </h2>
            <p className="mt-2 text-muted-foreground">
              Rua Dom Pedro II, Vila Galo, Americana/SP
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-[21/9] rounded-2xl overflow-hidden bg-secondary"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.7892!2d-47.3317!3d-22.7378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89b0f0b0b0b0b%3A0x0!2sAmericana%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização SOS Segurança Inteligente"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}
