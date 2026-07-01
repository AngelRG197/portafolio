'use client'

import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'
import Image from 'next/image'

// Componente para mostrar código animado en el fondo
const CodeBackground = ({ codeLines }: { codeLines: string[] }) => (
  <div className="absolute inset-0 overflow-hidden opacity-30 group-hover:opacity-40 transition-opacity duration-500">
    <div className="absolute inset-0 font-mono text-[10px] sm:text-xs text-cyan-400/40 leading-relaxed p-4">
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          className="whitespace-pre"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5] }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  </div>
)

interface Project {
  title: string
  description: string
  image: string
  demoUrl?: string
  githubUrl?: string
  technologies?: string[]
  codeLines?: string[]
}

const projects: Project[] = [
  {
    title: 'Tierra Gourmet',
    description: 'Landing page moderna y atractiva para productos gourmet con diseño responsive y optimizada para conversiones',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/tierra_gourmet.png`,
    demoUrl: 'https://tierra-gourmet.vercel.app/',
    githubUrl: '#',
    codeLines: [
      'const Hero = () => {',
      '  return <motion.div>Landing</motion.div>;',
      '};',
    ],
  },
  {
    title: 'AR Studio',
    description: 'Landing page innovadora para estudio de realidad aumentada con diseño moderno y experiencia inmersiva',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ar_studio.png`,
    demoUrl: 'https://arstudio-seven.vercel.app/',
    githubUrl: '#',
    codeLines: [
      'class FinancialAI {',
      '  predictTrend(data) {',
      '    return model.analyze(data);',
      '  }',
      '}',
    ],
  },
  {
    title: 'Sistema CRM',
    description: 'Plataforma de gestión de relaciones con clientes para optimizar ventas y mejorar la atención al cliente',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/crm.png`,
    demoUrl: '#',
    githubUrl: '#',
    codeLines: [
      'public function getInventory() {',
      '  return DB::table("items")',
      '    ->where("stock", ">", 0)',
      '    ->get();',
      '}',
    ],
  },
  {
    title: 'ContaPlus',
    description: 'Sistema contable y administrativo integral para gestión financiera, facturación y reportes empresariales',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/contable.png`,
    demoUrl: '#',
    githubUrl: '#',
    codeLines: [
      'const Chart = ({ data }) => {',
      '  const svg = d3.select(ref.current);',
      '  return <svg ref={ref} />;',
      '};',
    ],
  },
]

function Portfolio() {
  const memoizedProjects = useMemo(() => projects, [])

  return (
    <section
      id="portafolio"
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
            Portafolio Destacado
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Algunos de nuestros proyectos más recientes y exitosos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {memoizedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-charcoal-800/50 backdrop-blur-sm border border-charcoal-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image Container */}
              <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Code Background */}
                {project.codeLines && (
                  <CodeBackground codeLines={project.codeLines} />
                )}

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
                </div>

                {/* Project Image or Placeholder */}
                {project.image && project.image !== '/api/placeholder/600/400' ? (
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-cyan-900/40 flex items-center justify-center relative">
                      {/* Simulated code lines for placeholder */}
                      <div className="absolute inset-0 font-mono text-[8px] text-cyan-400/20 p-4 space-y-1">
                        <div className="text-green-400/30">const</div>
                        <div className="text-purple-400/30">function</div>
                        <div className="text-yellow-400/30">return</div>
                      </div>
                      <div className="text-gray-400 text-xs z-10">Imagen del Proyecto</div>
                    </div>
                  </div>
                )}

                {/* Overlay con iconos */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <GitBranch className="w-5 h-5 text-white" />
                    </motion.a>
                  )}
                </div>

                {/* Gradient Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8 relative">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-600/0 group-hover:from-cyan-500/5 group-hover:to-cyan-600/5 transition-opacity duration-300" />

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>

              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Portfolio)


