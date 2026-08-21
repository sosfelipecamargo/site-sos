import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/qrcode",
    },
    sitemap: "https://www.sosseguranca.com.br/sitemap.xml",
  }
}
