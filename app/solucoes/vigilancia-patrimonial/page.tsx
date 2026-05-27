import type { Metadata } from "next"
import { VigilanciaPatrimonialContent } from "./content"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Vigilância Patrimonial | SOS Segurança Inteligente",
  description: "Vigilância patrimonial com profissionais treinados, rondas planejadas e integração com a Central SOS. Proteção ativa para condomínios, indústrias e empresas.",
  openGraph: {
    title: "Vigilância Patrimonial | SOS Segurança Inteligente",
    description: "Vigilância patrimonial com profissionais treinados, rondas planejadas e integração com a Central SOS. Proteção ativa para condomínios, indústrias e empresas.",
  },
}

export default function VigilanciaPatrimonialPage() {
  return (
    <>
      <Header />
      <main>
        <VigilanciaPatrimonialContent />
      </main>
      <Footer />
    </>
  )
}
