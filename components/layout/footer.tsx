"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Instagram, Linkedin, Facebook, Youtube, MessageCircle, MapPin, Clock } from "lucide-react"

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
            <ul className="space-y-5">
              {/* Telefones - um único bloco com um ícone */}
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-accent-foreground font-medium mb-1">Telefones</p>
                  <div className="space-y-0.5 text-accent-foreground/70">
                    <p>Portaria Virtual: <a href="tel:+551934714514" className="hover:text-primary transition-colors">(19) 3471-4514</a></p>
                    <p>Segurança Eletrônica: <a href="tel:+551934714515" className="hover:text-primary transition-colors">(19) 3471-4515</a></p>
                    <p>Monitoramento: <a href="tel:+551934714516" className="hover:text-primary transition-colors">(19) 3471-4516</a></p>
                  </div>
                </div>
              </li>

              {/* WhatsApp */}
              <li className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-accent-foreground font-medium mb-1">WhatsApp</p>
                  <a 
                    href="https://wa.me/5519994828201" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    (19) 99482-8201
                  </a>
                </div>
              </li>

              {/* E-mail */}
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-accent-foreground font-medium mb-1">E-mail</p>
                  <a 
                    href="mailto:central@sosseguranca.com.br" 
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    central@sosseguranca.com.br
                  </a>
                </div>
              </li>

              {/* Endereço */}
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-accent-foreground font-medium mb-1">Endereço</p>
                  <p className="text-accent-foreground/70">
                    Rua Dom Pedro II, 878 – Vila Galo<br />
                    13.466-000, Americana/SP
                  </p>
                </div>
              </li>

              {/* Horários */}
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-accent-foreground font-medium mb-1">Atendimento</p>
                  <p className="text-accent-foreground/70">
                    Comercial: 8h às 18h<br />
                    Monitoramento e Portaria: 24h
                  </p>
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
