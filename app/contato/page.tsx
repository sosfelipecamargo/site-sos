import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactPageContent } from "./content"

export const metadata: Metadata = {
  title: "Contato | SOS Segurança Inteligente",
  description: "Entre em contato com a SOS Segurança Inteligente. Solicite orçamentos, tire dúvidas ou agende uma visita técnica. Telefone: 19 3471-4515.",
}

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </>
  )
}
