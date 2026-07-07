'use client'

import { memo, useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Rocket, TrendingUp } from 'lucide-react'
import Image from 'next/image'

function Hero() {
  const [counted, setCounted] = useState({ projects: 0, clients: 0, support: 0 })
  const stats = useMemo(() => [
    { number: 100, suffix: '+', label: 'Proyectos', icon: Rocket, isText: false },
    { number: 50, suffix: '+', label: 'Clientes', icon: TrendingUp, isText: false },
    { number: 0, suffix: '', label: 'Soporte Técnico', icon: Zap, isText: true, textValue: '24/7' },
  ], [])

  // Animación de contador para estadísticas
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const timers = stats.map((stat, index) => {
      if (stat.isText) return null // No animar si es texto fijo
      const timer = setInterval(() => {
        setCounted(prev => {
          const key = ['projects', 'clients', 'support'][index]
          const current = prev[key as keyof typeof prev]
          const target = stat.number
          const increment = target / steps
          
          if (current < target) {
            return { ...prev, [key]: Math.min(Math.ceil(current + increment), target) }
          }
          return prev
        })
      }, interval)
      return timer
    }).filter(Boolean) as NodeJS.Timeout[]

    return () => timers.forEach(timer => clearInterval(timer))
  }, [stats])

  const codeLines = useMemo(() => [
    'const developer = new AngelRiobueno();',
    'developer.build(innovation);',
    'developer.deploy(success);',
  ], [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 motion-element"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20 motion-element" />

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/30 rounded-full blur-[100px] gradient-element"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] gradient-element"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] gradient-element"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 text-center relative z-10 w-full">
        {/* Logo Centrado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="mb-3 sm:mb-4 md:mb-6"
        >
          <div className="relative w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto mb-2 sm:mb-3 animate-pulse-glow">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`}
              alt="Angel Riobueno Logo"
              className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]"
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 sm:mb-6"
        >
          <motion.div
            className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-cyan-500/10 border border-cyan-500/50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 backdrop-blur-md shadow-lg shadow-cyan-500/20"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 229, 255, 0.4)' }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-[10px] xs:text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
              Soluciones Tecnológicas de Vanguardia
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-3 sm:mb-4 md:mb-6"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
            <span className="block text-white mb-1">Construimos el</span>
            <span className="block shimmer-text text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Futuro Digital</span>
            <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-3">
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                Angel Riobueno
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-3 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Transformamos ideas complejas en{' '}
          <span className="text-cyan-400 font-semibold relative">
            soluciones digitales innovadoras
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </span>
          . Expertos en desarrollo de software, arquitectura cloud y transformación digital.
        </motion.p>

        {/* Code Terminal Preview */}
        <motion.div
          className="max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="code-terminal text-left overflow-hidden">
            <div className="flex items-center space-x-1 sm:space-x-1.5 mb-2">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
              <span className="text-gray-500 text-[9px] sm:text-[10px] ml-1">terminal</span>
            </div>
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                className="text-cyan-400 font-mono text-[9px] xs:text-[10px] sm:text-xs md:text-sm mb-0.5 overflow-x-auto whitespace-nowrap scrollbar-hide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.3, duration: 0.5 }}
              >
                <span className="text-cyan-500">$</span> {line}
              </motion.div>
            ))}
            <motion.div
              className="text-cyan-400 font-mono text-[9px] xs:text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              <span className="text-green-400">✓</span> <span className="text-white">Compilación exitosa</span>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-stretch sm:items-center px-3 sm:px-4 mb-20 sm:mb-24 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="#contacto"
            className="group relative w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg sm:rounded-xl text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center space-x-2 overflow-hidden touch-manipulation"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 229, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 whitespace-nowrap">Comienza tu Proyecto</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform relative z-10" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#servicios"
            className="group w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-cyan-500 rounded-lg sm:rounded-xl text-cyan-400 font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:bg-cyan-500/10 transition-all backdrop-blur-sm text-center relative overflow-hidden touch-manipulation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 whitespace-nowrap">Explorar Servicios</span>
            <motion.div
              className="absolute inset-0 bg-cyan-500/5"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-3 sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const countValue = Object.values(counted)[index]
            const displayValue = stat.isText ? stat.textValue : `${countValue}${stat.suffix}`
            return (
              <motion.div
                key={index}
                className="group relative bg-charcoal-800/30 backdrop-blur-md border border-cyan-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:border-cyan-500/50 transition-all hover:bg-charcoal-800/50"
                whileHover={{ y: -8, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                  </div>
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent mb-1">
                    {displayValue}
                  </div>
                  <div className="text-gray-400 text-[10px] xs:text-xs sm:text-sm font-semibold uppercase tracking-wider text-center">
                    {stat.label}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/0 to-cyan-600/0 group-hover:from-cyan-500/10 group-hover:to-cyan-600/10 transition-all duration-300" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['<', '/>', '{', '}', '[', ']', '(', ')'].map((char, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-400/20 font-mono text-4xl sm:text-6xl"
            style={{
              left: `${(index * 12.5) % 100}%`,
              top: `${(index * 20) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.5,
            }}
          >
            {char}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default memo(Hero)
