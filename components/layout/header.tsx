"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

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

const navigation = [
  { name: "Home", href: "/" },
  { name: "Grupo SOS", href: "/grupo-sos" },
  { name: "Soluções", href: "#", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo - Left */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src={isScrolled ? "/images/logo-sos-preto.png" : "/images/logo-sos-branco.png"}
                alt="SOS Segurança Inteligente"
                width={120}
                height={48}
                className="object-contain"
                style={{ height: 40, width: 'auto' }}
                priority
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.hasDropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <button
                          className={cn(
                            "relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group",
                            isScrolled
                              ? "text-foreground/70 hover:text-foreground"
                              : "text-white/70 hover:text-white"
                          )}
                        >
                          <span className="relative z-10">{item.name}</span>
                          <ChevronDown className={cn(
                            "h-4 w-4 transition-transform duration-200 relative z-10",
                            isDropdownOpen && "rotate-180"
                          )} />
                          {/* Glow effect */}
                          <span className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/20 transition-colors duration-200" />
                        </button>
                        
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
                            >
                              <div className="w-64 rounded-xl bg-white border border-border shadow-xl p-2">
                                {services.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    className="relative block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground rounded-lg transition-colors group"
                                  >
                                    <span className="relative z-10">{service.name}</span>
                                    <span className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200" />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group",
                          isScrolled
                            ? "text-foreground/70 hover:text-foreground"
                            : "text-white/70 hover:text-white"
                        )}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {/* Glow effect */}
                        <span className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/20 transition-colors duration-200" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* CTA Button - Right */}
            <div className="hidden lg:block">
              <Link 
                href="/contato"
                className="inline-flex items-center px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
              >
                Fale Conosco
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden relative z-10 p-2",
                isScrolled ? "text-foreground" : "text-white"
              )}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
                          >
                            {item.name}
                            <ChevronDown className={cn(
                              "h-5 w-5 transition-transform duration-200",
                              isDropdownOpen && "rotate-180"
                            )} />
                          </button>
                          
                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 py-2 space-y-1">
                                  {services.map((service) => (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block px-4 py-2.5 text-base text-foreground/70 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-3 text-lg font-medium text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-auto pt-8">
                  <Link 
                    href="/contato" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full px-4 py-3 bg-primary text-white text-base font-medium rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Fale Conosco
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
