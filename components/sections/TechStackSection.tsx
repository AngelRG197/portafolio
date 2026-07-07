'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Server, Layout, Database, Terminal, Cloud, ArrowRight } from 'lucide-react'

const skillCategories = [
  {
    icon: Code2,
    tag: '01 — FRONTEND DEVELOPMENT',
    title: 'Desarrollo Frontend Premium',
    shortDesc: 'Interfaces de usuario fluidas, animadas y de alto rendimiento.',
    fullDesc: 'Especialista en construir SPA, SSR y aplicaciones estáticas optimizadas. Foco en rendimiento, accesibilidad (a11y), y micro-interacciones interactivas de primer nivel.',
    features: ['React.js / Next.js / Angular', 'TypeScript / JavaScript', 'TailwindCSS / Bootstrap / SCSS', 'Framer Motion / GSAP'],
    color: 'cyan',
  },
  {
    icon: Server,
    tag: '02 — BACKEND & APIS',
    title: 'Arquitectura Backend',
    shortDesc: 'Sistemas escalables, APIs robustas y optimización de bases de datos.',
    fullDesc: 'Desarrollo de microservicios, RESTful y GraphQL APIs. Diseño de bases de datos relacionales y no relacionales preparadas para soportar cargas pesadas de tráfico.',
    features: ['PHP / Laravel', 'Node.js / Express', 'Python (Django / FastAPI)', 'Go / C++ / C#'],
    color: 'violet',
  },
  {
    icon: Database,
    tag: '03 — DATABASES',
    title: 'Bases de Datos & Optimización',
    shortDesc: 'Diseño, optimización y gestión de datos eficiente.',
    fullDesc: 'Experiencia en bases de datos relacionales y NoSQL. Optimización de consultas, diseño de esquemas escalables y gestión de datos en la nube.',
    features: ['PostgreSQL / MySQL', 'MongoDB / Redis', 'Diseño de Esquemas', 'Optimización de Queries'],
    color: 'emerald',
  },
  {
    icon: Cloud,
    tag: '04 — CLOUD & DEVOPS',
    title: 'Infraestructura & DevOps',
    shortDesc: 'Automatización de deploys (CI/CD) y gestión cloud completa.',
    fullDesc: 'Configuración de pipelines automatizados de integración y entrega continua. Aprovisionamiento de servidores, contenedores y hosting serverless de alta disponibilidad.',
    features: ['Docker / Kubernetes', 'AWS / Google Cloud / Azure', 'GitHub Actions / Jenkins CI/CD', 'Linux / Bash Scripting'],
    color: 'amber',
  },
  {
    icon: Layout,
    tag: '05 — UI/UX DESIGN',
    title: 'Diseño de Experiencia y UI',
    shortDesc: 'Estructuración limpia, layouts premium y prototipado.',
    fullDesc: 'Fusión de ingeniería y diseño. Creación de sistemas de diseño reutilizables, wireframes de alta fidelidad, pruebas de usabilidad y transiciones interactivas detalladas.',
    features: ['Figma profesional', 'Creación de Design Systems', 'Prototipado Interactivo', 'Accesibilidad & UX Research'],
    color: 'blue',
  },
  {
    icon: Terminal,
    tag: '06 — METODOLOGÍAS & CALIDAD',
    title: 'Metodologías & Clean Code',
    shortDesc: 'Desarrollo ágil, código limpio y mejores prácticas.',
    fullDesc: 'Aplicación de Clean Code, principios SOLID, GitFlow estricto y metodologías Scrum/Kanban para mantener el código legible y de fácil mantenimiento en proyectos de cualquier escala.',
    features: ['Git / GitHub (GitFlow)', 'Clean Code & SOLID', 'Metodologías Ágiles (Scrum)', 'Testing (Jest / PHPUnit)'],
    color: 'pink',
  },
]

const colorMap: Record<string, string> = {
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30 group-hover:border-cyan-400/60',
  violet: 'text-violet-400 bg-violet-500/10 border-violet-500/30 group-hover:border-violet-400/60',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30 group-hover:border-emerald-400/60',
  amber: 'text-amber-400 bg-amber-500/10 border-amber-500/30 group-hover:border-amber-400/60',
  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/30 group-hover:border-blue-400/60',
  pink: 'text-pink-400 bg-pink-500/10 border-pink-500/30 group-hover:border-pink-400/60',
}

export default function TechStackSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="stack" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">// Stack tecnológico completo</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Habilidades & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Tecnologías</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Full Stack Developer con experiencia en Frontend, Backend, Bases de Datos y DevOps. Haz clic en cualquier categoría para ver el detalle técnico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((svc, i) => {
            const isOpen = expanded === i
            const colors = colorMap[svc.color]

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setExpanded(isOpen ? null : i)}
                className={`group cursor-pointer relative p-6 rounded-2xl bg-[#0a0a0a] border transition-all duration-500 overflow-hidden ${
                  isOpen ? `border-${svc.color}-500/50` : 'border-white/5 hover:border-white/15'
                }`}
              >
                {/* Animated gradient background on open */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 bg-gradient-to-br from-${svc.color}-500/5 to-transparent`}
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono text-gray-600 block mb-2">{svc.tag}</span>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 border ${colors}`}>
                        <svc.icon className={`w-5 h-5 text-${svc.color}-400`} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>
                      <p className="text-sm text-gray-500">{svc.shortDesc}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <ArrowRight className="w-4 h-4 text-gray-600" />
                    </motion.div>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 mt-5 border-t border-white/5">
                          <p className="text-sm text-gray-400 leading-relaxed mb-4">{svc.fullDesc}</p>
                          <ul className="space-y-2">
                            {svc.features.map((f, fi) => (
                              <li key={fi} className="flex items-center gap-2 text-sm">
                                <span className={`w-1.5 h-1.5 rounded-full bg-${svc.color}-400 flex-shrink-0`} />
                                <span className="text-gray-300">{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
