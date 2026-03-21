"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            O que dizem nossos clientes
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A satisfação dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-primary text-primary" 
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="flex-1">
                  <p className="text-foreground text-pretty leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
                
                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary/80 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
