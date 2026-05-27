"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  { name: "Portaria Virtual", href: "/solucoes/portaria-virtual" },
  { name: "Monitoramento", href: "/solucoes/monitoramento-de-alarmes" },
  { name: "Vigilância Patrimonial", href: "/solucoes/vigilancia-patrimonial" },
  { name: "Segurança Eletrônica", href: "/solucoes/seguranca-eletronica" },
  { name: "Viaturas", href: "/solucoes/viaturas-pronta-resposta" },
  { name: "Internet Fibra Óptica", href: "/solucoes/sos-telecom" },
  { name: "Portaria Presencial", href: "/solucoes/portaria-presencial" },
]

const navigation = [
  { name: "HOME", href: "/" },
  { name: "GRUPO SOS", href: "/#sobre" },
  { name: "SOLUÇÕES", href: "#", hasDropdown: true },
  { name: "CONTATO", href: "/contato" },
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
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3">
        <div
          className={cn(
            "mx-auto max-w-[90%] rounded-2xl transition-all duration-300",
            isScrolled
              ? "bg-white/80 backdrop-blur-md shadow-lg shadow-black/5 border border-gray-200/50"
              : "bg-black/20 backdrop-blur-sm shadow-lg shadow-black/10"
          )}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            {/* Logo - Left */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src={isScrolled ? "/images/logo-sos-preto.png" : "/images/logo-sos-branco.png"}
                alt="SOS Segurança Inteligente"
                width={100}
                height={40}
                className="object-contain"
                style={{ height: 32, width: 'auto' }}
                priority
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-8">
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
                            "relative flex items-center gap-1 py-2 text-[13px] font-normal tracking-[0.1em] transition-colors duration-200 group",
                            isScrolled
                              ? "text-gray-600 hover:text-gray-900"
                              : "text-white/80 hover:text-white"
                          )}
                        >
                          <span className="relative">
                            {item.name}
                            <span className={cn(
                              "absolute -bottom-0.5 left-0 w-full h-px transition-transform duration-200 origin-left scale-x-0 group-hover:scale-x-100",
                              isScrolled ? "bg-gray-900" : "bg-white"
                            )} />
                          </span>
                          <ChevronDown className={cn(
                            "h-3.5 w-3.5 transition-transform duration-200",
                            isDropdownOpen && "rotate-180"
                          )} />
                        </button>
                        
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.15 }}
                              className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
                            >
                              <div className="w-[580px] rounded-lg bg-white shadow-lg shadow-black/10 border border-gray-100 p-8">
                                <div className="flex gap-8">
                                  {/* Column 1 */}
                                  <div className="flex-1">
                                    <div className="space-y-3">
                                      {services.slice(0, 4).map((service) => (
                                        <Link
                                          key={service.href}
                                          href={service.href}
                                          className="block text-lg font-semibold text-gray-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap"
                                        >
                                          {service.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  {/* Vertical Divider */}
                                  <div className="w-px bg-gray-200" />
                                  
                                  {/* Column 2 */}
                                  <div className="flex-1">
                                    <div className="space-y-3">
                                      {services.slice(4).map((service) => (
                                        <Link
                                          key={service.href}
                                          href={service.href}
                                          className="block text-lg font-semibold text-gray-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap"
                                        >
                                          {service.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "relative py-2 text-[13px] font-normal tracking-[0.1em] transition-colors duration-200 group",
                          isScrolled
                            ? "text-gray-600 hover:text-gray-900"
                            : "text-white/80 hover:text-white"
                        )}
                      >
                        <span className="relative">
                          {item.name}
                          <span className={cn(
                            "absolute -bottom-0.5 left-0 w-full h-px transition-transform duration-200 origin-left scale-x-0 group-hover:scale-x-100",
                            isScrolled ? "bg-gray-900" : "bg-white"
                          )} />
                        </span>
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
                className={cn(
                  "inline-flex items-center px-5 py-2 text-[12px] font-normal tracking-[0.1em] uppercase border rounded-sm transition-colors duration-200",
                  isScrolled
                    ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-gray-900"
                )}
              >
                Fale Conosco
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden relative z-10 p-2",
                isScrolled ? "text-gray-900" : "text-white"
              )}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
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
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-white"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
                <nav className="flex flex-col gap-1">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center justify-between w-full py-3 text-[13px] font-normal tracking-[0.1em] text-gray-900 transition-colors"
                          >
                            {item.name}
                            <ChevronDown className={cn(
                              "h-4 w-4 transition-transform duration-200",
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
                                <div className="pl-4 py-2 space-y-2 border-l border-gray-200">
                                  {services.map((service) => (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block py-2 text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
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
                          className="block py-3 text-[13px] font-normal tracking-[0.1em] text-gray-900 hover:underline transition-colors"
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
                    className="flex items-center justify-center w-full py-3 text-[12px] font-normal tracking-[0.1em] uppercase border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
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
