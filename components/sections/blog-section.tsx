"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { blogPosts } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Blog
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              Insights e novidades
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
              Conteúdo relevante sobre segurança, tecnologia e gestão para 
              ajudar você a tomar melhores decisões.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/blog">
              Ver todos os artigos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Image Placeholder */}
                <div className="aspect-[16/10] rounded-xl bg-secondary overflow-hidden mb-5">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-muted-foreground text-sm">Imagem</span>
                  </div>
                </div>
                
                {/* Category & Date */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('pt-BR', { 
                      day: '2-digit', 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3 text-balance">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-muted-foreground text-sm text-pretty">
                  {post.excerpt}
                </p>
                
                {/* Read More */}
                <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary">
                  Ler artigo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
