'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, GraduationCap, Code2, Award, ArrowRight } from 'lucide-react'

const history = [
  {
    icon: Briefcase,
    number: '01',
    title: 'Full Stack Developer',
    subtitle: 'Proyectos Independientes // 2021 - Presente',
    desc: 'Diseño e implementación de sistemas ERP, CRM y aplicaciones web completas para clientes de logística, salud y comercio. Desarrollo tanto del frontend como del backend, optimizando rendimiento y migrando sistemas legacy a arquitecturas modernas.',
    output: 'Stack Completo + Arquitectura Escalable',
  },
  {
    icon: Code2,
    number: '02',
    title: 'Desarrollador Web Full Stack',
    subtitle: 'Consultora de Software // 2020 - 2021',
    desc: 'Desarrollo de aplicaciones web robustas usando PHP, Laravel, React y Node.js. Implementación de APIs REST, integración de servicios externos y automatización de despliegues con CI/CD.',
    output: 'APIs & Integraciones',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Frontend Developer',
    subtitle: 'Freelance & Proyectos Locales // 2019 - 2020',
    desc: 'Construcción de interfaces modernas y responsivas con React, Angular y Vue.js. Diseño de componentes reutilizables, optimización de rendimiento y animaciones CSS avanzadas.',
    output: 'UI/UX + Componentes React',
  },
  {
    icon: GraduationCap,
    number: '04',
    title: 'Formación Tecnológica',
    subtitle: 'Educación & Certificaciones // 2018 - 2022',
    desc: 'Formación profesional en ingeniería de sistemas y desarrollo de software. Certificaciones en bases de datos PostgreSQL, patrones de diseño, metodologías ágiles y arquitectura cloud.',
    output: 'Especialización Continua',
  },
]

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 80%', 'end 20%'] })

  return (
    <section id="experiencia" className="py-24 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.03)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">// Mi experiencia</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Trayectoria &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Experiencia Profesional</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Mi trayectoria está enfocada en resolver problemas reales con código eficiente y arquitecturas escalables.
          </p>
        </motion.div>

        {/* Circuit-style timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5">
            <motion.div
              className="w-full bg-gradient-to-b from-cyan-500 to-cyan-500/0"
              style={{ height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
            />
          </div>

          <div className="space-y-12 lg:space-y-0">
            {history.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${i > 0 ? 'lg:-mt-8' : ''}`}
                >
                  {/* Content */}
                  <div className={`${isLeft ? 'lg:text-right lg:order-1' : 'lg:order-2'} mb-8 lg:mb-0`}>
                    <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden">
                      {/* Corner glow */}
                      <div className={`absolute ${isLeft ? 'bottom-0 left-0' : 'bottom-0 right-0'} w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all`} />
                      
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <span className="font-mono text-xs text-cyan-400">{step.number}</span>
                        <span className="text-xs text-gray-600 bg-white/5 px-2.5 py-0.5 rounded-full">{step.subtitle}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">{step.desc}</p>
                      <div className={`flex items-center gap-2 text-sm ${isLeft ? 'lg:justify-end' : ''}`}>
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 font-medium">{step.output}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-10">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-cyan-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                    >
                      <step.icon className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                  </div>

                  {/* Empty col for alternating */}
                  <div className={`hidden lg:block ${isLeft ? 'lg:order-2' : 'lg:order-1'}`} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
