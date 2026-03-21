import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GrupoSosContent } from "./content"

export const metadata: Metadata = {
  title: "Grupo SOS | Nossa História e Trajetória",
  description: "Conheça a história da SOS Segurança Inteligente. Desde 1980, somos referência em segurança eletrônica, monitoramento, portaria virtual, vigilância e telecom em Americana e região.",
}

export default function GrupoSosPage() {
  return (
    <>
      <Header />
      <main>
        <GrupoSosContent />
      </main>
      <Footer />
    </>
  )
}
