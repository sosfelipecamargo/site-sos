import type { Metadata } from "next"
import { notFound } from "next/navigation"
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
  },
  "tendencias-seguranca-2024": {
    title: "Tendências em segurança eletrônica para 2024",
    excerpt: "Conheça as principais inovações e tecnologias que estão transformando o mercado de segurança.",
    category: "Tecnologia",
    date: "2024-01-10",
    readTime: "6 min",
    content: `
      <p>O mercado de segurança eletrônica evolui rapidamente, impulsionado por inteligência artificial, conectividade e automação. Conhecer as tendências ajuda a tomar decisões mais inteligentes na hora de proteger o seu patrimônio.</p>

      <h2>1. Inteligência artificial no monitoramento</h2>
      <p>Câmeras com análise de vídeo por IA já conseguem diferenciar pessoas, veículos e animais, reduzindo alarmes falsos e permitindo respostas mais rápidas a eventos reais. A detecção de comportamento suspeito em tempo real é uma das maiores evoluções do setor.</p>

      <h2>2. Integração e centralização</h2>
      <p>A tendência é unificar CFTV, alarmes, controle de acesso e automação em uma única plataforma. Isso simplifica a operação, melhora a visibilidade e torna a resposta a incidentes muito mais ágil.</p>

      <h2>3. Reconhecimento facial e biometria</h2>
      <p>O controle de acesso por biometria e reconhecimento facial ganha espaço em condomínios e empresas, oferecendo mais conveniência e segurança, sem a necessidade de chaves ou cartões que podem ser perdidos ou clonados.</p>

      <h2>4. Monitoramento em nuvem</h2>
      <p>O armazenamento e a gestão de imagens em nuvem garantem acesso remoto seguro, redundância de dados e escalabilidade, sem depender exclusivamente de gravadores locais.</p>

      <h2>Conclusão</h2>
      <p>Investir em tecnologia atualizada é essencial para acompanhar a evolução das ameaças. Contar com um parceiro que domina essas soluções, como a SOS Segurança Inteligente, faz toda a diferença na proteção do seu patrimônio.</p>
    `
  },
  "como-escolher-sistema-alarme": {
    title: "Como escolher o sistema de alarme ideal para sua empresa",
    excerpt: "Guia prático para entender os tipos de alarme e escolher a melhor opção para seu negócio.",
    category: "Segurança Eletrônica",
    date: "2024-01-05",
    readTime: "5 min",
    content: `
      <p>Escolher o sistema de alarme certo é um passo fundamental para proteger a sua empresa. Com tantas opções disponíveis, entender os principais critérios evita gastos desnecessários e garante uma proteção eficiente.</p>

      <h2>Avalie o tipo de imóvel e os riscos</h2>
      <p>O primeiro passo é mapear vulnerabilidades: pontos de acesso, áreas de maior movimentação de valores e histórico de ocorrências na região. Cada empresa tem necessidades diferentes, e o projeto deve refletir isso.</p>

      <h2>Tipos de sensores</h2>
      <ul>
        <li><strong>Sensores de presença (infravermelho):</strong> detectam movimento em ambientes internos.</li>
        <li><strong>Sensores de abertura:</strong> instalados em portas e janelas, avisam quando são abertas.</li>
        <li><strong>Sensores de barreira:</strong> protegem perímetros e áreas externas.</li>
        <li><strong>Detecção por vídeo:</strong> combina alarme com verificação por imagem, reduzindo falsos disparos.</li>
      </ul>

      <h2>Monitoramento 24 horas faz diferença</h2>
      <p>Um alarme que apenas dispara uma sirene tem eficácia limitada. Com monitoramento 24h conectado a uma central, cada disparo é verificado e, quando necessário, uma viatura de pronta resposta é acionada. Essa é a camada que realmente inibe e responde a ocorrências.</p>

      <h2>Escolha um parceiro estruturado</h2>
      <p>Mais importante que o equipamento é a empresa por trás dele. Verifique se há central de monitoramento própria, tempo de resposta, manutenção e suporte. A SOS Segurança Inteligente une equipamentos de qualidade a uma operação robusta e atendimento humano.</p>

      <h2>Conclusão</h2>
      <p>O sistema de alarme ideal é aquele projetado para a realidade da sua empresa e apoiado por um monitoramento confiável. Faça uma avaliação técnica antes de decidir e priorize segurança de verdade, não apenas o menor preço.</p>
    `
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
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
  const post = posts[slug]

  if (!post) {
    notFound()
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
