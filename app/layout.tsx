import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ZyberPro - Duo de Ingeniería & Desarrollo de Software B2B',
  description: 'Portafolio y CV de Angel Riobueno (Frontend Dev & UI/UX) y Brayan González (Backend & DevOps). Soluciones de software a medida y desarrollo de sistemas B2B.',
  keywords: 'desarrollo web, aplicaciones móviles, cloud computing, consultoría tecnológica, software a medida, ZyberPro, Angel Riobueno, Brayan Gonzalez',
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
    title: 'ZyberPro - Duo de Ingeniería & Desarrollo de Software B2B',
    description: 'Portafolio y CV de Angel Riobueno (Frontend Dev & UI/UX) y Brayan González (Backend & DevOps). Soluciones de software a medida y desarrollo de sistemas B2B.',
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
    title: 'ZyberPro - Duo de Ingeniería & Desarrollo de Software B2B',
    description: 'Portafolio y CV de Angel Riobueno (Frontend Dev & UI/UX) y Brayan González (Backend & DevOps). Soluciones de software a medida y desarrollo de sistemas B2B.',
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
    <html lang="es" className="bg-black scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta property="og:image" content="https://zyberprooficial.vercel.app/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image" content="https://zyberprooficial.vercel.app/logo.png" />
      </head>
      <body className="bg-black text-white antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
