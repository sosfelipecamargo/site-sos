"use client"

import { Star } from "lucide-react"
import { testimonials } from "@/lib/data"

// Duplicate testimonials for seamless infinite loop
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] mx-3">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="h-3.5 w-3.5 fill-primary text-primary" 
            />
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="mb-5">
          <p className="text-foreground text-sm leading-relaxed line-clamp-4">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-semibold text-sm">
              {testimonial.author.charAt(0)}
            </span>
          </div>
          <div className="min-w-0">
            <p className="font-medium text-foreground text-sm truncate">
              {testimonial.author}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            O que dizem nossos clientes
          </h2>
          <p className="mt-4 text-muted-foreground">
            A satisfação dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling content */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.author}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
