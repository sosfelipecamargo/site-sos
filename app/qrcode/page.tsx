import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "QRCode SOS | Segurança Inteligente",
  description: "Acesse rapidamente os principais canais da SOS Segurança Inteligente.",
  robots: { index: false, follow: true },
}

const whatsappLink =
  "https://wa.me/5519994828201?text=" +
  encodeURIComponent("Olá, vim pelo QR Code e gostaria de falar com a SOS.")

const buttons = [
  { label: "Falar com a SOS", href: whatsappLink, external: true },
  { label: "Conheça nossas soluções", href: "/", external: false },
  { label: "Conheça a nossa central", href: "/#central", external: false },
]

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sossegurancainteligente/",
    Icon: Instagram,
  },
  { name: "Facebook", href: "#", Icon: Facebook },
  { name: "LinkedIn", href: "#", Icon: Linkedin },
  { name: "YouTube", href: "#", Icon: Youtube },
]

export default function QrCodePage() {
  return (
    <main
      className={`${montserrat.className} min-h-[100dvh] bg-[#070707] flex items-center justify-center px-6 py-12`}
    >
      <div className="w-full max-w-[520px] flex flex-col items-center text-center">
        {/* Logo */}
        <Image
          src="/images/logo-sos-branco.png"
          alt="SOS Segurança Inteligente"
          width={180}
          height={72}
          priority
          style={{ height: "auto", width: 180 }}
        />

        {/* Tagline */}
        <p className="mt-8 text-[#f4f4f4]/80 text-base sm:text-lg leading-relaxed text-pretty">
          Segurança inteligente, atendimento humano.
        </p>

        {/* Buttons */}
        <div className="mt-10 w-full flex flex-col gap-4">
          {buttons.map((btn) =>
            btn.external ? (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[56px] flex items-center justify-center rounded-xl bg-[#bb1e16] text-[#f4f4f4] font-semibold text-base sm:text-lg transition-all duration-200 hover:bg-[#a51810] active:scale-[0.98]"
              >
                {btn.label}
              </a>
            ) : (
              <a
                key={btn.label}
                href={btn.href}
                className="w-full h-[56px] flex items-center justify-center rounded-xl bg-[#bb1e16] text-[#f4f4f4] font-semibold text-base sm:text-lg transition-all duration-200 hover:bg-[#a51810] active:scale-[0.98]"
              >
                {btn.label}
              </a>
            )
          )}
        </div>

        {/* Social icons */}
        <div className="mt-12 flex items-center justify-center gap-5">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#f4f4f4]/30 text-[#f4f4f4] transition-all duration-200 hover:bg-[#bb1e16] hover:border-[#bb1e16]"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
