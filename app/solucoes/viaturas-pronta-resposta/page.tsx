import type { Metadata } from "next"
import { ViaturasContent } from "./content"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Viaturas de Pronta Resposta | SOS Segurança Inteligente",
  description: "Viaturas 24h para verificação presencial de alarmes e ocorrências em Americana e região. Resposta rápida integrada ao monitoramento da Central SOS.",
  openGraph: {
    title: "Viaturas de Pronta Resposta | SOS Segurança Inteligente",
    description: "Viaturas 24h para verificação presencial de alarmes e ocorrências em Americana e região. Resposta rápida integrada ao monitoramento da Central SOS.",
  },
}

export default function ViaturasPage() {
  return (
    <>
      <Header />
      <main>
        <ViaturasContent />
      </main>
      <Footer />
    </>
  )
}
