"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/sections/cta-section"

const categories = [
  "Todos",
  "Portaria Virtual",
  "Monitoramento",
  "Segurança Eletrônica",
  "Gestão",
  "Tecnologia"
]

const posts = [
  {
    id: 1,
    slug: "portaria-virtual-vale-a-pena",
    title: "Portaria virtual vale a pena? Entenda custos e benefícios",
    excerpt: "Descubra como a portaria virtual pode reduzir custos e aumentar a segurança do seu condomínio ou empresa. Analisamos os principais pontos para você tomar a melhor decisão.",
    category: "Portaria Virtual",
    date: "2024-01-15",
    readTime: "5 min"
  },
  {
    id: 2,
    slug: "tendencias-seguranca-2024",
    title: "Tendências em segurança eletrônica para 2024",
    excerpt: "Conheça as principais inovações e tecnologias que estão transformando o mercado de segurança. IA, reconhecimento facial e muito mais.",
    category: "Tecnologia",
    date: "2024-01-10",
    readTime: "7 min"
  },
  {
    id: 3,
    slug: "como-escolher-sistema-alarme",
    title: "Como escolher o sistema de alarme ideal para sua empresa",
    excerpt: "Guia prático para entender os tipos de alarme e escolher a melhor opção para seu negócio. Conheça as tecnologias disponíveis.",
    category: "Segurança Eletrônica",
    date: "2024-01-05",
    readTime: "6 min"
  },
  {
    id: 4,
    slug: "sindico-guia-seguranca-condominial",
    title: "Guia completo de segurança para síndicos",
    excerpt: "Tudo que o síndico precisa saber sobre segurança condominial: desde a escolha do modelo de portaria até a gestão de ocorrências.",
    category: "Gestão",
    date: "2024-01-02",
    readTime: "10 min"
  },
  {
    id: 5,
    slug: "monitoramento-24h-como-funciona",
    title: "Monitoramento 24h: como funciona na prática?",
    excerpt: "Entenda o funcionamento de uma central de monitoramento, os protocolos de resposta e como isso protege seu patrimônio.",
    category: "Monitoramento",
    date: "2023-12-28",
    readTime: "5 min"
  },
  {
    id: 6,
    slug: "cftv-erros-comuns-instalacao",
    title: "5 erros comuns na instalação de câmeras de segurança",
    excerpt: "Evite os erros mais frequentes na hora de instalar seu sistema de CFTV. Dicas práticas para um projeto bem-sucedido.",
    category: "Segurança Eletrônica",
    date: "2023-12-20",
    readTime: "4 min"
  }
]

export function BlogPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-accent overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Blog
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-foreground text-balance">
              Insights e novidades
            </h1>
            <p className="mt-6 text-xl text-accent-foreground/80 text-pretty">
              Conteúdo relevante sobre segurança, tecnologia e gestão para 
              ajudar você a tomar melhores decisões.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Buscar artigos..." 
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-primary hover:bg-primary/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/10] rounded-xl bg-card border border-border overflow-hidden mb-5">
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <span className="text-muted-foreground text-sm">Imagem do artigo</span>
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
                    <span className="text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime} de leitura
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3 text-balance">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm text-pretty line-clamp-3">
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

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Button variant="outline" size="lg">
              Carregar mais artigos
            </Button>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
