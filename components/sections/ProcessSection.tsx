'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Search, Rocket, CheckCircle2, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Diagnóstico Gratuito',
    subtitle: 'Semana 1',
    desc: 'Reunión de 30 min donde radiografiamos tus procesos actuales, identificamos los cuellos de botella y calculamos el costo real de tu ineficiencia.',
    output: 'Mapa de procesos + estimación de ROI',
  },
  {
    icon: Search,
    number: '02',
    title: 'Propuesta & Arquitectura',
    subtitle: 'Semana 1–2',
    desc: 'Nuestro equipo técnico diseña la arquitectura de solución. Te entregamos un blueprint técnico detallado con cronograma, costos fijos y KPIs de éxito.',
    output: 'Blueprint técnico + Cronograma fijo',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Sprint de Desarrollo',
    subtitle: 'Semanas 2–8',
    desc: 'Desarrollo ágil en sprints de 2 semanas. Cada sprint incluye una demo en vivo donde ves avances reales. Sin cajas negras, sin sorpresas.',
    output: 'Demos bi-semanales + Entregas incrementales',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Lanzamiento & Soporte',
    subtitle: 'Ongoing',
    desc: 'Despliegue con capacitación para tu equipo. Monitoreamos el sistema 24/7 el primer mes y proveemos soporte continuo para que nunca estés solo.',
    output: 'Sistema en producción + 90 días de garantía',
  },
]

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 80%', 'end 20%'] })

  return (
    <section id="proceso" className="py-24 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.03)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">// Cómo trabajamos</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Sin sorpresas.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Sin cajas negras.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Un proceso transparente donde tú ves el progreso en tiempo real.
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
            {steps.map((step, i) => {
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
                    <div className={`p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden`}>
                      {/* Corner glow */}
                      <div className={`absolute ${isLeft ? 'bottom-0 left-0' : 'bottom-0 right-0'} w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all`} />
                      
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <span className="font-mono text-xs text-cyan-400">{step.number}</span>
                        <span className="text-xs text-gray-600 bg-white/5 px-2 py-0.5 rounded-full">{step.subtitle}</span>
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
