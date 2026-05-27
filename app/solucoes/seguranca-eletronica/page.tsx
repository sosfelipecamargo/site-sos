import type { Metadata } from "next"
import { SegurancaEletronicaContent } from "./content"

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
  return <SegurancaEletronicaContent />
}
