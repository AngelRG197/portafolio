'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal, Cpu } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Sobre mí', href: '#nosotros' },
    { name: 'Stack', href: '#stack' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Floating Capsule Container */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-7xl mx-auto rounded-full border border-cyan-500/20 bg-[#080808]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,229,255,0.08)] py-2 sm:py-3 px-6 sm:px-8 relative overflow-hidden"
        >
          {/* Subtle neon pulse line inside the capsule */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a href="#inicio" className="flex items-center gap-2 sm:gap-3 group z-50">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`}
                  alt="Ángel García Logo"
                  className="w-full h-full object-contain group-hover:rotate-12 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  ANGEL RIOBUENO
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-cyan-500/80 tracking-widest -mt-0.5 hidden sm:block">// FULL STACK DEV</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-mono font-bold text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-wider relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop Status + CTA */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Cyberpunk beveled small CTA */}
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-sm uppercase tracking-wider overflow-hidden block"
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
              >
                Hablemos
              </motion.a>
            </div>

            {/* Mobile Menu Action Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors p-2 z-50 relative"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer (Tech styled) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 lg:hidden flex flex-col justify-center px-6"
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            
            <div className="relative z-10 space-y-6 max-w-md mx-auto w-full text-center">
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                  <span className="text-xl font-black text-white tracking-widest">ANGEL RIOBUENO</span>
                </div>
              </div>

              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-mono text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-widest py-2"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 space-y-4">
                <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-500">
                  <Terminal className="w-4 h-4" />
                  <span>// FULL STACK DEVELOPER</span>
                </div>
                
                <a
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-4 bg-cyan-500 text-black font-black text-sm uppercase tracking-wider text-center"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                >
                  Contactar
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
