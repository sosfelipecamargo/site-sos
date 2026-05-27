import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'SOS Seguranca Inteligente | Seguranca, Tecnologia e Conectividade',
    template: '%s | SOS Seguranca Inteligente',
  },
  description: 'Desde 1980, a SOS oferece solucoes integradas em seguranca eletronica, monitoramento 24h, portaria virtual, vigilancia patrimonial e telecom para residencias, empresas e condominios.',
  keywords: ['seguranca eletronica', 'portaria virtual', 'monitoramento 24h', 'vigilancia patrimonial', 'CFTV', 'alarmes', 'controle de acesso', 'telecom', 'Americana SP'],
  authors: [{ name: 'SOS Seguranca Inteligente' }],
  creator: 'SOS Seguranca Inteligente',
  publisher: 'SOS Seguranca Inteligente',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sosseguranca.com.br',
    siteName: 'SOS Seguranca Inteligente',
    title: 'SOS Seguranca Inteligente | Seguranca, Tecnologia e Conectividade',
    description: 'Desde 1980, a SOS oferece solucoes integradas em seguranca eletronica, monitoramento 24h, portaria virtual, vigilancia patrimonial e telecom.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOS Seguranca Inteligente',
    description: 'Seguranca que resolve. Tecnologia confiavel com atendimento humano.',
  },
}

export const viewport: Viewport = {
  themeColor: '#AB0000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
