import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PortariaVirtualContent } from "./content"

export const metadata: Metadata = {
  title: "Portaria Virtual para Condomínios e Empresas | SOS Segurança",
  description: "Modernize sua portaria com a Portaria Virtual SOS. Mais controle, segurança e economia com central 24h, atendimento humano e equipe técnica própria em Americana e região.",
  keywords: [
    "Portaria Virtual",
    "Portaria Remota",
    "Portaria Virtual em Americana",
    "Portaria Virtual para condomínios",
    "Controle de acesso remoto",
    "Segurança para condomínios",
    "Monitoramento 24h",
    "Central de Segurança SOS"
  ],
  openGraph: {
    title: "Portaria Virtual para Condomínios e Empresas | SOS Segurança",
    description: "Modernize sua portaria com a Portaria Virtual SOS. Mais controle, segurança e economia com central 24h, atendimento humano e equipe técnica própria.",
    type: "website",
  },
}

export default function PortariaVirtualPage() {
  return (
    <>
      <Header />
      <main>
        <PortariaVirtualContent />
      </main>
      <Footer />
    </>
  )
}
