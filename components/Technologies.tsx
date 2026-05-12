'use client'

import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Language' },
  { name: 'PHP', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Kotlin', category: 'Mobile' },
  { name: 'Redis', category: 'Database' },
]

function Technologies() {
  const memoizedTechnologies = useMemo(() => technologies, [])

  return (
    <section
      id="tecnologias"
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
            Tecnologías que Dominamos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Trabajamos con las herramientas y frameworks más modernos del
            mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {memoizedTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative bg-charcoal-800/50 backdrop-blur-sm border border-charcoal-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-cyan-500/50 transition-all cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.25,
                delay: index * 0.03,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                  {tech.category}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/0 to-cyan-600/0 group-hover:from-cyan-500/10 group-hover:to-cyan-600/10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Technologies)

