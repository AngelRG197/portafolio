import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZyberPro - Soluciones Tecnológicas Profesionales',
  description: 'ZyberPro ofrece servicios de desarrollo de software, consultoría tecnológica y soluciones innovadoras para tu negocio.',
  keywords: 'desarrollo web, aplicaciones móviles, cloud computing, consultoría tecnológica, software a medida',
  authors: [{ name: 'ZyberPro' }],
  creator: 'ZyberPro',
  publisher: 'ZyberPro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  metadataBase: new URL('https://zyberprooficial.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://zyberprooficial.vercel.app',
    title: 'ZyberPro - Soluciones Tecnológicas Profesionales',
    description: 'ZyberPro ofrece servicios de desarrollo de software, consultoría tecnológica y soluciones innovadoras para tu negocio.',
    siteName: 'ZyberPro',
    images: [
      {
        url: 'https://zyberprooficial.vercel.app/logo.png',
        width: 512,
        height: 512,
        alt: 'ZyberPro Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZyberPro - Soluciones Tecnológicas Profesionales',
    description: 'ZyberPro ofrece servicios de desarrollo de software, consultoría tecnológica y soluciones innovadoras para tu negocio.',
    images: ['https://zyberprooficial.vercel.app/logo.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#00e5ff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="bg-black">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta property="og:image" content="https://zyberprooficial.vercel.app/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image" content="https://zyberprooficial.vercel.app/logo.png" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}

