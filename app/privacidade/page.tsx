import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da SOS Segurança Inteligente. Saiba como coletamos, usamos, armazenamos e protegemos seus dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018).",
  alternates: {
    canonical: "/privacidade",
  },
}

const sections = [
  {
    title: "1. Quem somos",
    paragraphs: [
      "A SOS Segurança Inteligente (Grupo SOS), inscrita no CNPJ 66.839.838/0001-81, com sede na Rua Dom Pedro II, 878 – Vila Galo, Americana/SP, CEP 13.466-000, é a controladora dos dados pessoais tratados por meio deste site.",
      "Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as suas informações, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018).",
    ],
  },
  {
    title: "2. Dados que coletamos",
    paragraphs: [
      "Podemos coletar dados fornecidos diretamente por você ao entrar em contato conosco pelos canais de atendimento (nome, telefone, e-mail e informações sobre o local a ser protegido), bem como dados de navegação coletados automaticamente, como endereço IP, tipo de dispositivo, navegador e páginas acessadas.",
    ],
  },
  {
    title: "3. Como utilizamos os dados",
    paragraphs: [
      "Utilizamos os seus dados para responder às suas solicitações, elaborar propostas comerciais, prestar e aprimorar nossos serviços de segurança, cumprir obrigações legais e regulatórias e, quando autorizado, enviar comunicações institucionais.",
    ],
  },
  {
    title: "4. Compartilhamento de dados",
    paragraphs: [
      "A SOS não vende os seus dados pessoais. O compartilhamento ocorre apenas quando necessário para a prestação dos serviços contratados, com fornecedores e parceiros que atuam em nosso nome, ou para o cumprimento de obrigações legais e determinações de autoridades competentes.",
    ],
  },
  {
    title: "5. Armazenamento e segurança",
    paragraphs: [
      "Adotamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acessos não autorizados, perda, alteração ou divulgação indevida. Os dados são mantidos apenas pelo tempo necessário às finalidades para as quais foram coletados ou conforme exigido por lei.",
    ],
  },
  {
    title: "6. Seus direitos como titular",
    paragraphs: [
      "Nos termos da LGPD, você pode solicitar a confirmação da existência de tratamento, o acesso, a correção, a anonimização, o bloqueio ou a eliminação dos seus dados, bem como a portabilidade e a revogação do consentimento. Para exercer esses direitos, entre em contato pelos canais indicados abaixo.",
    ],
  },
  {
    title: "7. Cookies",
    paragraphs: [
      "Este site pode utilizar cookies e tecnologias semelhantes para melhorar a sua experiência de navegação e obter estatísticas de uso. Você pode gerenciar as preferências de cookies diretamente nas configurações do seu navegador.",
    ],
  },
  {
    title: "8. Alterações desta política",
    paragraphs: [
      "Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a consulte com regularidade. A data da última atualização está indicada ao final deste documento.",
    ],
  },
  {
    title: "9. Contato do encarregado (DPO)",
    paragraphs: [
      "Em caso de dúvidas sobre esta Política ou sobre o tratamento dos seus dados, entre em contato pelo e-mail central@sosseguranca.com.br ou pelo telefone (19) 3471-4515.",
    ],
  },
]

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-accent overflow-hidden">
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Privacidade
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-accent-foreground text-balance">
              Política de Privacidade
            </h1>
            <p className="mt-6 text-lg text-accent-foreground/80 text-pretty leading-relaxed">
              Sua privacidade é importante para nós. Entenda como a SOS Segurança
              Inteligente trata os seus dados pessoais em conformidade com a LGPD.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 text-balance">
                    {section.title}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-muted-foreground leading-relaxed text-pretty"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}

              <p className="text-sm text-muted-foreground/70 border-t border-border pt-6">
                Última atualização: agosto de 2026.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
