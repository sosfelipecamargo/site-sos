"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
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
            Vamos desenhar a solução ideal para a sua operação?
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80 text-pretty">
            Fale com a equipe da SOS e entenda como unir segurança, tecnologia 
            e eficiência em um projeto sob medida para sua empresa, residência 
            ou condomínio.
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
              <a 
                href="https://wa.me/5519994828201?text=Olá! Gostaria de saber mais sobre as soluções da SOS." 
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
    </section>
  )
}
