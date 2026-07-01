'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Github, Linkedin, Terminal, Cpu, Globe } from 'lucide-react'
import Image from 'next/image'

// Componente de icono TikTok personalizado
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.0i" />
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
    <footer className="border-t border-white/5 bg-[#050505] pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Laser line effect at top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 flex-shrink-0">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`}
                  alt="ZyberPro Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent tracking-widest">
                ZYBERPRO
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6 max-w-sm leading-relaxed">
              Duo de ingeniería enfocado en el desarrollo de software a medida, SaaS y sistemas administrativos optimizados para alto rendimiento empresarial.
            </p>
            
            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white font-mono text-xs uppercase tracking-widest mb-4">// Menú</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Nosotros', href: '#nosotros' },
                { name: 'Stack', href: '#stack' },
                { name: 'Experiencia', href: '#experiencia' },
                { name: 'Proyectos', href: '#proyectos' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-200 font-mono"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Focus area */}
          <div>
            <h3 className="text-white font-mono text-xs uppercase tracking-widest mb-4">// Especialidades</h3>
            <ul className="space-y-2.5">
              {[
                'Arquitectura SaaS',
                'Desarrollo Frontend',
                'Bases de Datos SQL/NoSQL',
                'Automatizaciones & APIs',
              ].map((spec, index) => (
                <li key={index} className="text-sm text-gray-500 font-mono">
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Status / Info */}
          <div>
            <h3 className="text-white font-mono text-xs uppercase tracking-widest mb-4">// Estado del Dúo</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponibilidad inmediata
              </li>
              <li className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                <Globe className="w-3.5 h-3.5" />
                Remoto a nivel mundial
              </li>
              <li className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                <Terminal className="w-3.5 h-3.5" />
                Código 100% a medida
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-mono">
            © {currentYear} ZYBERPRO. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] text-gray-700 font-mono">// CONSTRUIDO CON PASIÓN POR EL DÚO</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
