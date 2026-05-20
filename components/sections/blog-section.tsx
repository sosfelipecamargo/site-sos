"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    slug: "portaria-virtual-vale-a-pena",
    title: "Portaria virtual vale a pena? Entenda custos e benefícios",
    excerpt: "Descubra como a portaria virtual pode reduzir custos e aumentar a segurança do seu condomínio ou empresa.",
    category: "Portaria Virtual",
    image: "/images/blog/portaria-virtual.jpg",
    date: "15 jan 2024"
  },
  {
    id: 2,
    slug: "tendencias-seguranca-2024",
    title: "Tendências em segurança eletrônica para 2024",
    excerpt: "Conheça as principais inovações e tecnologias que estão transformando o mercado de segurança.",
    category: "Tecnologia",
    image: "/images/blog/tendencias.jpg",
    date: "10 jan 2024"
  },
  {
    id: 3,
    slug: "como-escolher-sistema-alarme",
    title: "Como escolher o sistema de alarme ideal para sua empresa",
    excerpt: "Guia prático para entender os tipos de alarme e escolher a melhor opção para seu negócio.",
    category: "Segurança Eletrônica",
    image: "/images/blog/alarmes.jpg",
    date: "05 jan 2024"
  }
]

export function BlogSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#f4f4f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Glass Card - Light Theme */}
                <div className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200/50 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-gray-800 border border-gray-200">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    {/* Date */}
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {post.date}
                    </span>
                    
                    {/* Title */}
                    <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors text-balance leading-snug">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    {/* Read More */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                      <span>Ler artigo</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
