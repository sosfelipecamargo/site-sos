import type { Metadata } from "next"
import Image from "next/image"
import { Outfit } from "next/font/google"
import styles from "./qrcode.module.css"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "600"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "SOS Área Segura | Acesso rápido",
  description: "Acesse os principais serviços da SOS Área Segura.",
  robots: { index: false, follow: false },
}

const whatsappImagesLink =
  "https://wa.me/5519994828201?text=" +
  encodeURIComponent("Olá, vim pelo QR Code do totem Área Segura e gostaria de solicitar imagens.")

const whatsappSpecialistLink =
  "https://wa.me/5519994828201?text=" +
  encodeURIComponent("Olá, vim pelo QR Code do totem Área Segura e gostaria de falar com um especialista em segurança.")

type ActionLine = { before?: string; strong?: string; after?: string }
type Action = { href: string; external?: boolean; lines: ActionLine[] }

const actions: Action[] = [
  {
    href: "/#sobre",
    lines: [
      { before: "CONHEÇA MAIS SOBRE" },
      { before: "A ", strong: "HISTÓRIA DA SOS" },
    ],
  },
  {
    href: whatsappImagesLink,
    external: true,
    lines: [
      { strong: "SOLICITAR IMAGENS", after: " DE UM" },
      { before: "TOTEM ÁREA SEGURA" },
    ],
  },
  {
    href: "/solucoes",
    lines: [
      { before: "CONHEÇA NOSSA REDE" },
      { strong: "SOS ÁREA SEGURA" },
    ],
  },
  {
    href: whatsappSpecialistLink,
    external: true,
    lines: [
      { strong: "FALE COM UM ESPECIALISTA" },
      { before: "EM SEGURANÇA AGORA" },
    ],
  },
]

const backgroundImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fundo-totem.jpg-16XWFiuedl7AFh2oFDsMTt8K6RiuEF.jpg"
const logoImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-sos.png-XdYyb9WFaTQ31tfrd28KmURPrpfrVq.png"

export default function QrCodePage() {
  return (
    <main className={`${styles.page} ${outfit.variable}`}>
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <Image
        src={logoImage}
        alt="SOS Segurança Inteligente"
        width={1000}
        height={500}
        priority
        unoptimized
        className={styles.logo}
      />

      <nav className={styles.actions} aria-label="Acessos da SOS Área Segura">
        {actions.map((action) => (
          <a
            key={action.href}
            href={action.href}
            className={styles.action}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            aria-label={action.lines.map((line) => `${line.before ?? ""}${line.strong ?? ""}${line.after ?? ""}`).join(" ")}
          >
            {action.lines.map((line) => (
              <span key={`${line.before ?? ""}${line.strong ?? ""}`} className={styles.line}>
                {line.before}
                {line.strong && <strong>{line.strong}</strong>}
                {line.after}
              </span>
            ))}
          </a>
        ))}
      </nav>
    </main>
  )
}
