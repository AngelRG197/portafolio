'use client'

import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap,
} from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description:
      'Aplicaciones web modernas y responsivas con las últimas tecnologías. React, Next.js, Vue.js y más.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    description:
      'Apps nativas e híbridas para iOS y Android. Experiencia de usuario excepcional en todos los dispositivos.',
    color: 'from-cyan-400 to-cyan-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description:
      'Migración a la nube, arquitectura serverless y soluciones escalables con AWS, Azure y Google Cloud.',
    color: 'from-cyan-500 to-cyan-700',
  },
  {
    icon: Database,
    title: 'Bases de Datos',
    description:
      'Diseño e implementación de bases de datos optimizadas. SQL, NoSQL y soluciones de big data.',
    color: 'from-cyan-600 to-cyan-800',
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description:
      'Auditorías de seguridad, implementación de mejores prácticas y protección de datos sensibles.',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Consultoría',
    description:
      'Asesoramiento técnico especializado para optimizar tus procesos y tomar decisiones tecnológicas acertadas.',
    color: 'from-cyan-500 to-cyan-700',
  },
]

function Services() {
  const memoizedServices = useMemo(() => services, [])

  return (
    <section
      id="servicios"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent px-4">
            Nuestros Servicios
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Soluciones tecnológicas completas para impulsar tu negocio al
            siguiente nivel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {memoizedServices.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-charcoal-800/50 backdrop-blur-sm border border-charcoal-700 rounded-xl p-5 sm:p-6 md:p-8 hover:border-cyan-500/50 transition-all overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Services)

