import type { Metadata } from "next"
import { PortariaPresencialContent } from "./content"

export const metadata: Metadata = {
  title: "Portaria Presencial | SOS Segurança Inteligente",
  description: "Portaria presencial com profissionais treinados, apoio da Central SOS e gestão completa de escalas. Controle de acesso com presença física e supervisão ativa.",
  openGraph: {
    title: "Portaria Presencial | SOS Segurança Inteligente",
    description: "Portaria presencial com profissionais treinados, apoio da Central SOS e gestão completa de escalas. Controle de acesso com presença física e supervisão ativa.",
  },
}

export default function PortariaPresencialPage() {
  return <PortariaPresencialContent />
}
