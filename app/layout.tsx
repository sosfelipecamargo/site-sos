import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: {
    default: 'SOS Segurança Inteligente | Segurança, Tecnologia e Conectividade',
    template: '%s | SOS Segurança Inteligente',
  },
  description: 'Desde 1980, a SOS oferece soluções integradas em segurança eletrônica, monitoramento 24h, portaria virtual, vigilância patrimonial e telecom para residências, empresas e condomínios.',
  keywords: ['segurança eletrônica', 'portaria virtual', 'monitoramento 24h', 'vigilância patrimonial', 'CFTV', 'alarmes', 'controle de acesso', 'telecom', 'Americana SP'],
  authors: [{ name: 'SOS Segurança Inteligente' }],
  creator: 'SOS Segurança Inteligente',
  publisher: 'SOS Segurança Inteligente',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sosseguranca.com.br',
    siteName: 'SOS Segurança Inteligente',
    title: 'SOS Segurança Inteligente | Segurança, Tecnologia e Conectividade',
    description: 'Desde 1980, a SOS oferece soluções integradas em segurança eletrônica, monitoramento 24h, portaria virtual, vigilância patrimonial e telecom.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOS Segurança Inteligente',
    description: 'Segurança que resolve. Tecnologia confiável com atendimento humano.',
  },
}

export const viewport: Viewport = {
  themeColor: '#ab0101',
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
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
