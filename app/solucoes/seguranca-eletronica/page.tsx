import type { Metadata } from "next"
import { SegurancaEletronicaContent } from "./content"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Segurança Eletrônica | Grupo SOS",
  description:
    "Câmeras, alarmes, controle de acesso e cerca elétrica com projeto, instalação e manutenção da SOS Segurança Inteligente.",
  openGraph: {
    title: "Segurança Eletrônica | Grupo SOS",
    description:
      "Câmeras, alarmes, controle de acesso e cerca elétrica com projeto, instalação e manutenção da SOS Segurança Inteligente.",
    type: "website",
  },
  alternates: {
    canonical: "/solucoes/seguranca-eletronica",
  },
}

export default function SegurancaEletronicaPage() {
  return (
    <>
      <Header />
      <main>
        <SegurancaEletronicaContent />
      </main>
      <Footer />
      {/* Espaçador para o CTA fixo mobile não cobrir o final do rodapé */}
      <div className="h-20 lg:hidden" aria-hidden="true" />
    </>
  )
}
