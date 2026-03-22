"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Send, CheckCircle, Loader2, User, Phone, Mail, MessageSquare } from "lucide-react"
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
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contato" className="relative">
      <div className="flex flex-col lg:flex-row min-h-[800px]">
        {/* Left Column - Image (hidden on mobile) */}
        <div className="hidden lg:block lg:w-[40%] relative">
          <Image
            src="/images/contact-bg.jpg"
            alt="Central de monitoramento SOS"
            fill
            className="object-cover"
            sizes="40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/50" />
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-[60%] bg-[#0a0a0a] px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Contato
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Fale com a SOS
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Entre em contato para tirar dúvidas, solicitar orçamentos ou 
              agendar uma visita técnica.
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Mensagem enviada!
                </h3>
                <p className="text-gray-400 text-lg">
                  Recebemos sua mensagem e entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Nome <span className="text-primary">*</span>
                    </Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input 
                        id="name" 
                        type="text"
                        placeholder="Seu nome completo" 
                        required 
                        className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-[#141414] border border-gray-800 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-300">
                      Telefone <span className="text-primary">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input 
                        id="phone" 
                        type="tel" 
                        placeholder="(00) 00000-0000" 
                        required 
                        className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-[#141414] border border-gray-800 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                    E-mail <span className="text-primary">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com" 
                      required 
                      className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-[#141414] border border-gray-800 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>
                
                {/* Service */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium text-gray-300">
                    Serviço de interesse
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full px-4 py-3.5 h-auto rounded-lg bg-[#141414] border border-gray-800 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 [&>span]:text-gray-500 data-[state=open]:border-primary/50">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#141414] border-gray-800">
                      {services.map((service) => (
                        <SelectItem 
                          key={service} 
                          value={service.toLowerCase().replace(/\s+/g, '-')}
                          className="text-gray-300 focus:bg-gray-800 focus:text-white"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Mensagem <span className="text-primary">*</span>
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-500" />
                    <textarea 
                      id="message" 
                      placeholder="Como podemos ajudar?" 
                      rows={4}
                      required 
                      className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-[#141414] border border-gray-800 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>
                </div>
                
                {/* Checkboxes */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="lgpd" 
                      required 
                      className="mt-0.5 border-gray-600 bg-[#141414] data-[state=checked]:bg-primary data-[state=checked]:border-primary" 
                    />
                    <Label htmlFor="lgpd" className="text-sm text-gray-400 leading-relaxed cursor-pointer">
                      Concordo com a coleta e uso dos meus dados conforme a Política de Privacidade da SOS (LGPD). <span className="text-primary">*</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="marketing" 
                      className="mt-0.5 border-gray-600 bg-[#141414] data-[state=checked]:bg-primary data-[state=checked]:border-primary" 
                    />
                    <Label htmlFor="marketing" className="text-sm text-gray-400 leading-relaxed cursor-pointer">
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
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
