import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/sections/cta-section"

// In a real app, this would come from a CMS or database
const posts: Record<string, { title: string; excerpt: string; category: string; date: string; readTime: string; content: string }> = {
  "portaria-virtual-vale-a-pena": {
    title: "Portaria virtual vale a pena? Entenda custos e benefícios",
    excerpt: "Descubra como a portaria virtual pode reduzir custos e aumentar a segurança do seu condomínio ou empresa.",
    category: "Portaria Virtual",
    date: "2024-01-15",
    readTime: "5 min",
    content: `
      <p>A portaria virtual tem se tornado uma opção cada vez mais popular para condomínios e empresas que buscam equilibrar segurança e economia. Mas será que vale a pena para o seu caso? Vamos analisar os principais pontos.</p>

      <h2>O que é portaria virtual?</h2>
      <p>A portaria virtual é um sistema de controle de acesso operado remotamente por uma central de monitoramento 24 horas. Através de câmeras, interfones IP, biometria e automação, uma equipe especializada gerencia entradas e saídas sem a necessidade de porteiros presenciais.</p>

      <h2>Principais benefícios</h2>
      <ul>
        <li><strong>Redução de custos:</strong> A economia pode chegar a 40% em comparação com a portaria presencial tradicional.</li>
        <li><strong>Operação 24/7:</strong> Diferente de porteiros que podem ter momentos de distração, a central opera de forma ininterrupta e padronizada.</li>
        <li><strong>Registro completo:</strong> Todos os acessos ficam registrados com imagens e dados, facilitando auditorias e investigações.</li>
        <li><strong>Padronização:</strong> Os procedimentos são sempre os mesmos, independente do horário ou do operador.</li>
      </ul>

      <h2>Quando a portaria virtual é indicada?</h2>
      <p>A portaria virtual funciona muito bem em condomínios residenciais, prédios comerciais, loteamentos fechados e empresas com múltiplas unidades. É especialmente indicada quando:</p>
      <ul>
        <li>O custo com portaria presencial é muito alto</li>
        <li>Há problemas com padronização de procedimentos</li>
        <li>O condomínio quer mais controle e registro de acessos</li>
        <li>Existe dificuldade em gerenciar a equipe de porteiros</li>
      </ul>

      <h2>Pontos de atenção</h2>
      <p>A portaria virtual exige uma boa infraestrutura de internet e equipamentos. Além disso, é importante escolher uma empresa com experiência e estrutura operacional sólida. A SOS Segurança Inteligente, por exemplo, opera há mais de 46 anos e conta com central de monitoramento própria e viaturas de pronta resposta.</p>

      <h2>Conclusão</h2>
      <p>A portaria virtual é uma excelente opção para quem busca redução de custos sem abrir mão da segurança. O segredo está em escolher um parceiro confiável, com estrutura operacional robusta e atendimento próximo.</p>
    `
  }
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  
  if (!post) {
    return {
      title: "Artigo não encontrado | SOS Segurança Inteligente"
    }
  }

  return {
    title: `${post.title} | Blog SOS`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const post = posts[slug] || {
    title: "Artigo de exemplo",
    excerpt: "Este é um artigo de exemplo do blog da SOS Segurança Inteligente.",
    category: "Geral",
    date: "2024-01-01",
    readTime: "5 min",
    content: "<p>Conteúdo do artigo em breve.</p>"
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-card border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o blog
            </Link>

            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {post.category}
            </span>
            
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              {post.title}
            </h1>
            
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('pt-BR', { 
                  day: '2-digit', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime} de leitura
              </span>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
