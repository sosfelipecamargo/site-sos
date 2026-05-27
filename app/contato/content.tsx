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
  "Monitoramento 24h",
  "Viaturas de Pronta-Resposta",
  "Segurança Eletrônica",
  "Portaria Presencial",
  "Vigilância Patrimonial",
  "Ainda não sei qual solução preciso"
]

// Phone mask helper
function formatPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, "")
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}

export function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [whatsapp, setWhatsapp] = useState("")

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneMask(e.target.value)
    setWhatsapp(formatted)
  }

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
                  Nossa equipe está disponível para orientar você sobre a solução mais adequada para sua casa, empresa ou condomínio. Para monitoramento e portaria, nossa operação funciona 24 horas por dia.
                </p>
              </div>

              <div className="space-y-6">
                {/* Telefones - Bloco único */}
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
                
                {/* WhatsApp - Bloco único */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground mb-3">WhatsApp</p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Portaria Virtual, Monitoramento, Viaturas, Vigilância e Portaria Presencial</p>
                        <a 
                          href="https://wa.me/5519994828201?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20a%20SOS%20Seguran%C3%A7a%20Inteligente." 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          (19) 99482-8201
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Segurança Eletrônica</p>
                        <a 
                          href="https://wa.me/5519993476898?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20sobre%20Seguran%C3%A7a%20Eletr%C3%B4nica%20da%20SOS." 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          (19) 99347-6898
                        </a>
                      </div>
                    </div>
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
              </div>

              {/* WhatsApp CTA - Botão vermelho padrão */}
              <div className="pt-6">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full font-semibold"
                >
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
                  Preencha o formulário abaixo e nossa equipe entrará em contato para entender sua necessidade.
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
                    {/* Nome */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input 
                        id="name" 
                        placeholder="Digite seu nome" 
                        required 
                        className="h-12"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp *</Label>
                      <Input 
                        id="whatsapp" 
                        type="tel" 
                        placeholder="(19) 99999-9999" 
                        required 
                        className="h-12"
                        value={whatsapp}
                        onChange={handleWhatsappChange}
                        maxLength={15}
                      />
                    </div>
                    
                    {/* E-mail */}
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

                    {/* Serviço de interesse */}
                    <div className="space-y-2">
                      <Label htmlFor="service">Serviço de interesse *</Label>
                      <Select required>
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
                    
                    {/* Mensagem */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Conte brevemente o que você precisa ou quais são suas dúvidas" 
                        rows={5}
                        required 
                        className="resize-none"
                      />
                    </div>
                    
                    {/* Checkboxes */}
                    <div className="space-y-4 pt-2">
                      <div className="flex items-start gap-3">
                        <Checkbox id="lgpd" required />
                        <Label htmlFor="lgpd" className="text-sm text-muted-foreground leading-tight">
                          Concordo com a coleta e o uso dos meus dados conforme a Política de Privacidade da SOS (LGPD). *
                        </Label>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Checkbox id="marketing" />
                        <Label htmlFor="marketing" className="text-sm text-muted-foreground leading-tight">
                          Aceito receber comunicações sobre novidades, conteúdos e ofertas da SOS.
                        </Label>
                      </div>
                    </div>
                    
                    {/* Botão de enviar */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full font-semibold h-14 text-base"
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
    </>
  )
}
