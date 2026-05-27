"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Instagram, Linkedin, Facebook, Youtube } from "lucide-react"

const services = [
  { name: "Portaria Virtual", href: "/solucoes/portaria-virtual" },
  { name: "Monitoramento de Alarmes", href: "/solucoes/monitoramento-de-alarmes" },
  { name: "Portaria Presencial", href: "/solucoes/portaria-presencial" },
  { name: "Vigilância Patrimonial", href: "/solucoes/vigilancia-patrimonial" },
  { name: "Viaturas", href: "/solucoes/viaturas-pronta-resposta" },
  { name: "Segurança Eletrônica", href: "/solucoes/seguranca-eletronica" },
  { name: "SOS Telecom", href: "https://sostelecom.net.br", external: true },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Grupo SOS", href: "/grupo-sos" },
  { name: "Contato", href: "/contato" },
  { name: "Política de Privacidade", href: "/privacidade" },
]

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/sossegurancainteligente/", Icon: Instagram },
  { name: "LinkedIn", href: "#", Icon: Linkedin },
  { name: "Facebook", href: "#", Icon: Facebook },
  { name: "YouTube", href: "#", Icon: Youtube },
]

const contacts = [
  { label: "Portaria Virtual", phone: "(19) 3471-4514", tel: "tel:+551934714514" },
  { label: "Segurança Eletrônica", phone: "(19) 3471-4515", tel: "tel:+551934714515" },
  { label: "Monitoramento", phone: "(19) 3471-4516", tel: "tel:+551934714516" },
]

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-sos-branco.png"
                alt="SOS Segurança Inteligente"
                width={120}
                height={48}
                style={{ height: 48, width: 'auto' }}
              />
            </Link>
            <p className="text-accent-foreground/70 text-sm leading-relaxed mb-6">
              Desde 1980, unindo tecnologia confiável, operação estruturada e atendimento humano para entregar segurança de verdade.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                social.href !== "#" ? (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.name}
                  >
                    <social.Icon className="h-5 w-5" />
                  </a>
                ) : (
                  <span
                    key={social.name}
                    className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center cursor-default"
                    aria-label={social.name}
                  >
                    <social.Icon className="h-5 w-5" />
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Soluções</h3>
            <ul className="space-y-1.5">
              {services.map((service) => (
                <li key={service.href}>
                  {'external' in service && service.external ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                    >
                      {service.name}
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                    >
                      {service.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Links Rápidos</h3>
            <ul className="space-y-1.5">
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
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Contato</h3>
            <ul className="space-y-4">
              {contacts.map((contact) => (
                <li key={contact.tel} className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-accent-foreground/70">{contact.label}</p>
                    <a href={contact.tel} className="text-accent-foreground hover:text-primary transition-colors font-medium">
                      {contact.phone}
                    </a>
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-accent-foreground/70">E-mail</p>
                  <a href="mailto:central@sosseguranca.com.br" className="text-accent-foreground hover:text-primary transition-colors font-medium">
                    central@sosseguranca.com.br
                  </a>
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
              © 2026 Grupo SOS. Todos os direitos reservados.
            </p>
            <p className="text-sm text-accent-foreground/50">
              CNPJ 66.839.838/0001-81
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
