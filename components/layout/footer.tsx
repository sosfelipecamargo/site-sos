import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Facebook, Youtube } from "lucide-react"

const services = [
  { name: "Portaria Virtual", href: "/solucoes/portaria-virtual" },
  { name: "Monitoramento de Alarmes", href: "/solucoes/monitoramento-de-alarmes" },
  { name: "Portaria Híbrida", href: "/solucoes/portaria-hibrida" },
  { name: "Portaria Presencial", href: "/solucoes/portaria-presencial" },
  { name: "Vigilância Patrimonial", href: "/solucoes/vigilancia-patrimonial" },
  { name: "Viaturas de Pronta Resposta", href: "/solucoes/viaturas-pronta-resposta" },
  { name: "Segurança Eletrônica", href: "/solucoes/seguranca-eletronica" },
  { name: "SOS Telecom", href: "/solucoes/sos-telecom" },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Grupo SOS", href: "/grupo-sos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
  { name: "Política de Privacidade", href: "/privacidade" },
]

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/sosseguranca", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/company/sosseguranca", icon: Linkedin },
  { name: "Facebook", href: "https://facebook.com/sosseguranca", icon: Facebook },
  { name: "YouTube", href: "https://youtube.com/sosseguranca", icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-sos-branco.png"
                alt="SOS Segurança Inteligente"
                width={100}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-accent-foreground/70 text-sm leading-relaxed mb-6">
              Desde 1980, unindo tecnologia confiável, operação estruturada e atendimento humano para entregar segurança de verdade.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Soluções</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-accent-foreground/70">Telefone</p>
                  <a href="tel:1934714515" className="text-accent-foreground hover:text-primary transition-colors font-medium">
                    19 3471-4515
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-accent-foreground/70">WhatsApp</p>
                  <a href="https://wa.me/5519994828201" target="_blank" rel="noopener noreferrer" className="text-accent-foreground hover:text-primary transition-colors font-medium">
                    19 99482-8201
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-accent-foreground/70">E-mail</p>
                  <a href="mailto:contato@sosseguranca.com.br" className="text-accent-foreground hover:text-primary transition-colors font-medium">
                    contato@sosseguranca.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-accent-foreground/70">
                  <p>Rua Dom Pedro II, Vila Galo</p>
                  <p>13.466-000, Americana/SP</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-accent-foreground/70">
                  <p>Comercial: 8h às 18h</p>
                  <p>Monitoramento e Portaria: 24h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-accent-foreground/50 text-center md:text-left">
              © {new Date().getFullYear()} SOS Segurança Inteligente. Todos os direitos reservados.
            </p>
            <p className="text-sm text-accent-foreground/50">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
