'use client'

import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Award, Rocket } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Enfoque en Resultados',
    description:
      'Nos comprometemos a entregar soluciones que generen valor real para tu negocio.',
  },
  {
    icon: Users,
    title: 'Trabajo en Equipo',
    description:
      'Colaboramos estrechamente contigo para entender tus necesidades y objetivos.',
  },
  {
    icon: Award,
    title: 'Calidad Garantizada',
    description:
      'Mantenemos los más altos estándares de calidad en cada proyecto que desarrollamos.',
  },
  {
    icon: Rocket,
    title: 'Innovación Constante',
    description:
      'Estamos siempre al día con las últimas tendencias y tecnologías del mercado.',
  },
]

function About() {
  const memoizedValues = useMemo(() => values, [])

  return (
    <section
      id="nosotros"
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
            Sobre Nosotros
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            En ZyberPro, somos un equipo de desarrolladores apasionados por la
            tecnología y comprometidos con la excelencia. Transformamos ideas
            complejas en soluciones elegantes y funcionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {memoizedValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-charcoal-800/50 backdrop-blur-sm border border-charcoal-700 rounded-xl p-5 sm:p-6 hover:border-cyan-500/50 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-3 sm:mb-4">
                <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <motion.div
            className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 rounded-xl p-6 sm:p-7 md:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Nuestra Misión</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Proporcionar soluciones tecnológicas de clase mundial que
              impulsen la innovación y el crecimiento de nuestros clientes,
              utilizando las mejores prácticas y tecnologías de vanguardia.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-cyan-600/10 to-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 sm:p-7 md:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Nuestra Visión</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Ser reconocidos como líderes en el desarrollo de software y
              consultoría tecnológica, siendo el socio preferido para empresas
              que buscan transformación digital y excelencia técnica.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(About)

