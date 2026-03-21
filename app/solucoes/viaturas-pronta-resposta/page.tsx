import type { Metadata } from "next"
import { services } from "@/lib/data"
import { ServicePage } from "@/components/templates/service-page"

const service = services.find(s => s.slug === "viaturas-pronta-resposta")!

export const metadata: Metadata = {
  title: `${service.name} | SOS Segurança Inteligente`,
  description: service.heroDescription,
  openGraph: {
    title: `${service.name} | SOS Segurança Inteligente`,
    description: service.heroDescription,
  },
}

export default function ViaturasPage() {
  return <ServicePage service={service} />
}
