import type { MetadataRoute } from "next"

const BASE_URL = "https://www.sosseguranca.com.br"

// Slugs com página interna real em app/solucoes/. "sos-telecom" é um link
// externo (sostelecom.net.br), por isso não entra no sitemap.
const solutionSlugs = [
  "portaria-virtual",
  "portaria-presencial",
  "portaria-hibrida",
  "monitoramento-de-alarmes",
  "vigilancia-patrimonial",
  "seguranca-eletronica",
  "viaturas-pronta-resposta",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = solutionSlugs.map((slug) => ({
    url: `${BASE_URL}/solucoes/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
