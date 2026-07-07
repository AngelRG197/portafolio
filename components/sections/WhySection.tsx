'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const rows = [
  { feature: 'Software 100% a medida', angel: true, agency: false, saas: false },
  { feature: 'Sin cuotas mensuales de licencias', angel: true, agency: false, saas: false },
  { feature: 'Código fuente entregado', angel: true, agency: true, saas: false },
  { feature: 'ROI garantizado en contrato', angel: true, agency: false, saas: false },
  { feature: 'Equipo técnico dedicado', angel: true, agency: false, saas: false },
  { feature: 'Integraciones ilimitadas', angel: true, agency: false, saas: false },
  { feature: 'Soporte continuo', angel: true, agency: false, saas: false },
  { feature: 'Demo funcional rápida', angel: true, agency: false, saas: false },
]

const whyPoints = [
  'Especializado en desarrollo Full Stack completo.',
  'Precios transparentes sin costos ocultos.',
  'Código limpio, escalable y bien documentado.',
  'Comunicación directa y trabajo ágil.',
]

export default function WhySection() {
  return (
    <section id="por-que" className="py-24 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.04)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">// La diferencia</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
            ¿Por qué <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Angel Riobueno</span>?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">Comparativa honesta. Sin marketing.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="grid grid-cols-4 bg-[#0a0a0a] border-b border-white/10">
              <div className="p-4 col-span-1" />
              <div className="p-4 text-center">
                <div className="text-sm font-bold text-cyan-400">Angel</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-xs text-gray-500">Agencia<br />Tradicional</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-xs text-gray-500">SaaS<br />Genérico</div>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`grid grid-cols-4 border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}
              >
                <div className="p-4 text-sm text-gray-400">{row.feature}</div>
                <div className="p-4 flex justify-center items-center">
                  {row.angel
                    ? <div className="w-6 h-6 rounded-full bg-cyan-500/15 flex items-center justify-center"><Check className="w-3.5 h-3.5 text-cyan-400" /></div>
                    : <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center"><X className="w-3.5 h-3.5 text-red-500" /></div>
                  }
                </div>
                <div className="p-4 flex justify-center items-center">
                  {row.agency
                    ? <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center"><Check className="w-3.5 h-3.5 text-green-500" /></div>
                    : <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center"><X className="w-3.5 h-3.5 text-red-500" /></div>
                  }
                </div>
                <div className="p-4 flex justify-center items-center">
                  {row.saas
                    ? <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center"><Check className="w-3.5 h-3.5 text-green-500" /></div>
                    : <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center"><X className="w-3.5 h-3.5 text-red-500" /></div>
                  }
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Why points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Desarrollo profesional con resultados medibles.</h3>
            <p className="text-gray-400 leading-relaxed">
              No solo entrego código, entrego soluciones completas que impactan tu negocio.
              Cada proyecto comienza con un análisis detallado y termina con un producto escalable y optimizado.
            </p>
            <ul className="space-y-4">
              {whyPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Accent quote */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20">
              <p className="text-white font-medium italic text-sm leading-relaxed">
                &ldquo;Pasamos de 3 sistemas a 1. El primer mes recuperamos la inversión en eficiencia.&rdquo;
              </p>
              <p className="text-cyan-400 text-xs mt-2 font-medium">— Director de Operaciones, Distribuidora Regional</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
