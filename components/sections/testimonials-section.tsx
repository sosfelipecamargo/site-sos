"use client"

import { Star } from "lucide-react"
import { testimonials } from "@/lib/data"

// Duplicate testimonials multiple times for seamless infinite loop
const row1Testimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]
const row2Testimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] mx-2">
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 h-full">
        {/* Stars */}
        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="h-3 w-3 fill-amber-400 text-amber-400" 
            />
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="mb-4">
          <p className="text-foreground text-sm leading-relaxed line-clamp-3">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-semibold text-xs">
              {testimonial.author.charAt(0)}
            </span>
          </div>
          <div className="min-w-0">
            <p className="font-medium text-foreground text-xs truncate">
              {testimonial.author}
            </p>
            <p className="text-[11px] text-muted-foreground truncate">
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
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            O que dizem nossos clientes
          </h2>
        </div>
      </div>

      {/* Two-row Marquee Container */}
      <div className="relative space-y-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Row 1 - Left to Right */}
        <div className="flex animate-marquee-ltr hover:[animation-play-state:paused]">
          {row1Testimonials.map((testimonial, index) => (
            <TestimonialCard key={`row1-${testimonial.author}-${index}`} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Row 2 - Right to Left */}
        <div className="flex animate-marquee-rtl hover:[animation-play-state:paused]">
          {row2Testimonials.map((testimonial, index) => (
            <TestimonialCard key={`row2-${testimonial.author}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes marquee-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 35s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 35s linear infinite;
        }
      `}</style>
    </section>
  )
}
