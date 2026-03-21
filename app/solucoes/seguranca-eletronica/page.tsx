import type { Metadata } from "next"
import { services } from "@/lib/data"
import { ServicePage } from "@/components/templates/service-page"

const service = services.find(s => s.slug === "seguranca-eletronica")!

export const metadata: Metadata = {
  title: `${service.name} | SOS Segurança Inteligente`,
  description: service.heroDescription,
  openGraph: {
    title: `${service.name} | SOS Segurança Inteligente`,
    description: service.heroDescription,
  },
}

export default function SegurancaEletronicaPage() {
  return <ServicePage service={service} />
}
