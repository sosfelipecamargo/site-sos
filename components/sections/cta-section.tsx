"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#070707] overflow-hidden">
      {/* Animated fog effect - CSS only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary fog layer */}
        <div 
          className="absolute inset-0 animate-[fogPulse1_8s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)',
          }}
        />
        {/* Secondary fog layer */}
        <div 
          className="absolute inset-0 animate-[fogPulse2_10s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 40% 60%, rgba(255,255,255,0.04) 0%, transparent 50%)',
          }}
        />
        {/* Tertiary fog layer */}
        <div 
          className="absolute inset-0 animate-[fogPulse3_12s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(ellipse 70% 45% at 60% 40%, rgba(255,255,255,0.03) 0%, transparent 55%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            Vamos desenhar a solução ideal para sua segurança?
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
            Fale com nossos especialistas e receba um projeto personalizado para 
            sua residência, condomínio ou empresa.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base"
            >
              <Link href="#contato">
                Solicitar proposta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-base"
            >
              <Link href="https://wa.me/551932222500" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com consultor
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
