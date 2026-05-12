'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook } from 'lucide-react'
import Image from 'next/image'

// Componente de icono TikTok personalizado
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/zyberprooficial?igsh=NDR2ZGF1NXlwcmRy', label: 'Instagram', isCustom: false },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@zyberprooficial?_r=1&_t=ZS-96HxBgRVyIH', label: 'TikTok', isCustom: true },
    { icon: Facebook, href: 'https://www.facebook.com/share/1BJQu6ToKd/?mibextid=wwXIfr', label: 'Facebook', isCustom: false },
  ]

  return (
    <footer className="border-t border-charcoal-700/50 bg-black/50 backdrop-blur-sm py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <motion.div
              className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="ZyberPro Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                ZyberPro
              </span>
            </motion.div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-md">
              Transformando ideas en soluciones digitales innovadoras. Tu socio
              de confianza en tecnología.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Tecnologías', href: '#tecnologias' },
                { name: 'Nosotros', href: '#nosotros' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Servicios</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                'Desarrollo Web',
                'Apps Móviles',
                'Cloud Computing',
                'Consultoría',
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-sm sm:text-base text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-charcoal-700/50 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © {currentYear} ZyberPro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

