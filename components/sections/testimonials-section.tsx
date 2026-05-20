"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

// New testimonials data
const testimonials = [
  {
    name: "ANDREA RIGONATO",
    role: "Proprietária da USICOMP",
    quote: "A Portaria Virtual trouxe mais controle, padronização e segurança para o nosso acesso. A implantação foi simples, rápida e de fácil adaptação. Vale o investimento, pois facilita o fluxo de funcionários, fornecedores e clientes.",
  },
  {
    name: "LIGIA",
    role: "Gerente do Condomínio Empresarial Alvorada",
    quote: "A SOS transmite tranquilidade e eficiência. Sempre que há uma ocorrência, a equipe se posiciona rapidamente e busca resolver da melhor forma. O atendimento é ágil, acessível e muito eficaz.",
  },
  {
    name: "GUILHERME FONTES",
    role: "Síndico do Condomínio Comercial American Park",
    quote: "A implantação da Portaria Virtual foi rápida e muito positiva. A solução trouxe mais agilidade no atendimento, segurança no monitoramento e organização para o dia a dia, com um custo mais econômico e sem exigir uma estrutura complexa.",
  },
  {
    name: "MARCIA",
    role: "Síndica do Condomínio Residencial Sunset",
    quote: "O que mais nos chamou a atenção foi o profissionalismo da equipe, a praticidade nos acessos e a qualidade dos equipamentos. A SOS Portaria Virtual trouxe mais segurança, facilidade para os moradores e rapidez nos atendimentos.",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-md hover:border-gray-200 transition-all duration-300">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="h-5 w-5 fill-primary text-primary" 
            />
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="flex-1 mb-6">
          <p className="text-gray-700 text-base leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>
        
        {/* Author - Name above Role */}
        <div className="pt-4 border-t border-gray-100">
          <p className="font-bold text-gray-900 text-base">
            {testimonial.name}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Quem confia na SOS
          </h2>
        </motion.div>

        {/* Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.name} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
