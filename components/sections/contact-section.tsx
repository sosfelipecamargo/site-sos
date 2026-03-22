"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
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

export function ContactSection() {
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
    <section id="contato" className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Fale com a SOS
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto">
            Entre em contato para tirar dúvidas, solicitar orçamentos ou 
            agendar uma visita técnica.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {isSubmitted ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="h-10 w-10 text-green-500" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Mensagem enviada!
              </h3>
              <p className="text-muted-foreground text-lg">
                Recebemos sua mensagem e entraremos em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm">
              <div className="space-y-6">
                {/* Name and Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome <span className="text-primary">*</span>
                    </Label>
                    <input 
                      id="name" 
                      type="text"
                      placeholder="Seu nome completo" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Telefone <span className="text-primary">*</span>
                    </Label>
                    <input 
                      id="phone" 
                      type="tel" 
                      placeholder="(00) 00000-0000" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail <span className="text-primary">*</span>
                  </Label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                
                {/* Service */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium text-foreground">
                    Serviço de interesse
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full px-4 py-3 h-auto rounded-lg border border-gray-200 bg-gray-50/50 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary">
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
                
                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem <span className="text-primary">*</span>
                  </Label>
                  <textarea 
                    id="message" 
                    placeholder="Como podemos ajudar?" 
                    rows={4}
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
                
                {/* Checkboxes */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <Checkbox id="lgpd" required className="mt-0.5 border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                    <Label htmlFor="lgpd" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Concordo com a coleta e uso dos meus dados conforme a Política de Privacidade da SOS (LGPD). <span className="text-primary">*</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Checkbox id="marketing" className="mt-0.5 border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                    <Label htmlFor="marketing" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Aceito receber comunicações sobre novidades, conteúdos e ofertas da SOS.
                    </Label>
                  </div>
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-base rounded-lg mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
