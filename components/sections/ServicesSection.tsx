'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Cpu, BarChart3, Smartphone, Cloud, Zap, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Code2,
    tag: '01 — Desarrollo',
    title: 'Software a la Medida',
    shortDesc: 'Sistemas que se adaptan exactamente a tus flujos de trabajo.',
    fullDesc: 'Desarrollamos ERPs, CRMs y sistemas internos desde cero, diseñados específicamente para los procesos de tu empresa. No adaptamos tu negocio al software; adaptamos el software a tu negocio.',
    features: ['Arquitectura escalable en la nube', 'Integraciones con tu stack actual', 'Panel de administración propio', 'Mantenimiento y soporte 24/7'],
    color: 'cyan',
  },
  {
    icon: Zap,
    tag: '02 — Automatización',
    title: 'RPA & Automatización de Procesos',
    shortDesc: 'Elimina el trabajo repetitivo que frena a tu equipo.',
    fullDesc: 'Identificamos los cuellos de botella operativos y los automatizamos con robots de software (RPA) e integraciones inteligentes entre tus herramientas actuales.',
    features: ['Auditoría de procesos gratuita', 'Bots para tareas repetitivas', 'Integración con Zapier, Make y APIs', 'ROI medible en 90 días'],
    color: 'violet',
  },
  {
    icon: BarChart3,
    tag: '03 — Datos',
    title: 'Business Intelligence & Dashboards',
    shortDesc: 'Toma decisiones con datos en tiempo real, no con intuición.',
    fullDesc: 'Centralizamos todas tus fuentes de datos y las convertimos en dashboards ejecutivos interactivos. Visualiza KPIs críticos en tiempo real desde cualquier dispositivo.',
    features: ['Data warehouse unificado', 'Dashboards en Looker, Power BI o custom', 'Alertas y reportes automáticos', 'Predicciones con IA/ML'],
    color: 'emerald',
  },
  {
    icon: Smartphone,
    tag: '04 — Mobile',
    title: 'Apps Móviles para Equipos de Campo',
    shortDesc: 'Tu operación en el bolsillo de cada empleado.',
    fullDesc: 'Aplicaciones nativas y progresivas (PWA) para que tu equipo de campo gestione inventario, reportes, clientes y más, sin depender de oficina ni papel.',
    features: ['iOS y Android nativo', 'Modo offline completo', 'GPS y geolocalización', 'Firma digital y captura de fotos'],
    color: 'amber',
  },
  {
    icon: Cloud,
    tag: '05 — Infraestructura',
    title: 'Cloud & DevOps',
    shortDesc: 'Infraestructura que aguanta tu crecimiento sin explotar.',
    fullDesc: 'Migramos y optimizamos tu infraestructura en AWS, Google Cloud o Azure. Configuramos CI/CD, monitoreo y escalado automático para que tu tecnología nunca sea el límite.',
    features: ['Migración a la nube sin downtime', 'CI/CD y automatización de deploys', 'Monitoreo y alertas 24/7', 'Reducción de costos de infraestructura'],
    color: 'blue',
  },
  {
    icon: Cpu,
    tag: '06 — IA',
    title: 'Inteligencia Artificial Aplicada',
    shortDesc: 'IA que resuelve problemas reales, no demos de laboratorio.',
    fullDesc: 'Implementamos modelos de machine learning, LLMs y visión artificial para automatizar decisiones complejas: predicción de demanda, detección de fraudes, chatbots internos y más.',
    features: ['Modelos entrenados con tus datos', 'Integración de LLMs (GPT-4, Claude)', 'Visión artificial para control de calidad', 'MLOps y reentrenamiento continuo'],
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

export default function ServicesSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="servicios" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">// Lo que construimos</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Soluciones</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Haz clic en cualquier servicio para ver los detalles.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => {
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
