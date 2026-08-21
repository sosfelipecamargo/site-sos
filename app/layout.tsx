import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sosseguranca.com.br'),
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.sosseguranca.com.br',
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
    <html lang="pt-BR" className={`${inter.variable} overflow-x-hidden bg-background`} data-scroll-behavior="smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V33EE8QSQC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-V33EE8QSQC');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
