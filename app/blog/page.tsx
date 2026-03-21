import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BlogPageContent } from "./content"

export const metadata: Metadata = {
  title: "Blog | SOS Segurança Inteligente",
  description: "Artigos, dicas e novidades sobre segurança eletrônica, portaria virtual, monitoramento de alarmes e mais. Conteúdo relevante para síndicos, gestores e empresários.",
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogPageContent />
      </main>
      <Footer />
    </>
  )
}
