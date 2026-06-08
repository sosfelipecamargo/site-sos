import type { Metadata } from "next"
import { MonitoramentoContent } from "./content"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Monitoramento 24h | SOS Segurança Inteligente",
  description: "Monitoramento de alarmes e câmeras 24 horas com central própria, equipe treinada e resposta rápida. Proteção profissional para sua casa, empresa ou condomínio.",
  openGraph: {
    title: "Monitoramento 24h | SOS Segurança Inteligente",
    description: "Monitoramento de alarmes e câmeras 24 horas com central própria, equipe treinada e resposta rápida. Proteção profissional para sua casa, empresa ou condomínio.",
  },
}

export default function MonitoramentoDeAlarmesPage() {
  return (
    <>
      <Header />
      <main>
        <MonitoramentoContent />
      </main>
      <Footer />
      {/* Espaçador para o CTA fixo mobile não cobrir o final do rodapé */}
      <div className="h-20 lg:hidden" aria-hidden="true" />
    </>
  )
}
