"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
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
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contato" className="relative">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Image (hidden on mobile) */}
        <div className="hidden lg:block lg:w-[40%] relative min-h-[500px]">
          <Image
            src="/images/contact-bg.jpg"
            alt="Central de monitoramento SOS"
            fill
            className="object-cover"
            sizes="40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f4f4f4]/30" />
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-[60%] bg-[#f4f4f4] px-6 sm:px-10 lg:px-14 xl:px-20 py-10 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Fale com a SOS
            </h2>
            <p className="text-gray-600 mb-6">
              Entre em contato para tirar dúvidas, solicitar orçamentos ou 
              agendar uma visita técnica.
            </p>

            {isSubmitted ? (
              <div className="py-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mensagem enviada!
                </h3>
                <p className="text-gray-600">
                  Recebemos sua mensagem e entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name and Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nome <span className="text-primary">*</span>
                    </Label>
                    <input 
                      id="name" 
                      type="text"
                      placeholder="Seu nome completo" 
                      required 
                      className="w-full px-3 py-2.5 rounded-md bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Telefone <span className="text-primary">*</span>
                    </Label>
                    <input 
                      id="phone" 
                      type="tel" 
                      placeholder="(00) 00000-0000" 
                      required 
                      className="w-full px-3 py-2.5 rounded-md bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    E-mail <span className="text-primary">*</span>
                  </Label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    required 
                    className="w-full px-3 py-2.5 rounded-md bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  />
                </div>
                
                {/* Service */}
                <div className="space-y-1.5">
                  <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                    Serviço de interesse
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full px-3 py-2.5 h-auto rounded-md bg-white border border-gray-300 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary [&>span]:text-gray-400 data-[state=open]:border-primary text-sm">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      {services.map((service) => (
                        <SelectItem 
                          key={service} 
                          value={service.toLowerCase().replace(/\s+/g, '-')}
                          className="text-gray-700 focus:bg-gray-100 focus:text-gray-900"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Mensagem <span className="text-primary">*</span>
                  </Label>
                  <textarea 
                    id="message" 
                    placeholder="Como podemos ajudar?" 
                    rows={3}
                    required 
                    className="w-full px-3 py-2.5 rounded-md bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-sm"
                  />
                </div>
                
                {/* Checkboxes */}
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <Checkbox 
                      id="lgpd" 
                      required 
                      className="mt-0.5 border-gray-400 bg-white data-[state=checked]:bg-primary data-[state=checked]:border-primary" 
                    />
                    <Label htmlFor="lgpd" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                      Concordo com a coleta e uso dos meus dados conforme a Política de Privacidade da SOS (LGPD). <span className="text-primary">*</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-start gap-2.5">
                    <Checkbox 
                      id="marketing" 
                      className="mt-0.5 border-gray-400 bg-white data-[state=checked]:bg-primary data-[state=checked]:border-primary" 
                    />
                    <Label htmlFor="marketing" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                      Aceito receber comunicações sobre novidades, conteúdos e ofertas da SOS.
                    </Label>
                  </div>
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 text-sm rounded-md mt-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="ml-2 h-4 w-4" />
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
