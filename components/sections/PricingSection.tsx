'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Crown, Building2 } from 'lucide-react'

const plans = [
  {
    icon: Zap,
    name: 'Starter',
    price: 'Desde $3,500',
    period: 'proyecto único',
    desc: 'Ideal para automatizar un proceso crítico o lanzar una herramienta interna específica.',
    features: [
      'Auditoría de proceso inicial',
      '1 automatización o módulo',
      'Integraciones con APIs existentes',
      'Panel de administración básico',
      '30 días de soporte post-lanzamiento',
    ],
    cta: 'Cotizar Proyecto',
    highlight: false,
  },
  {
    icon: Crown,
    name: 'Pro',
    price: 'Desde $9,800',
    period: 'proyecto único',
    desc: 'Para empresas listas para sistematizar operaciones completas y escalar con tecnología propia.',
    features: [
      'Auditoría profunda de operaciones',
      'Sistema completo a medida (ERP/CRM/BI)',
      'App web + App móvil incluidas',
      'Integraciones ilimitadas',
      '90 días de soporte premium',
      'SLA de respuesta en 4 horas',
      'Capacitación completa del equipo',
    ],
    cta: 'Este es el mío',
    highlight: true,
  },
  {
    icon: Building2,
    name: 'Enterprise',
    price: 'A medida',
    period: 'contrato anual',
    desc: 'Para corporaciones que necesitan un socio tecnológico permanente con equipo dedicado.',
    features: [
      'Equipo técnico dedicado (3–6 devs)',
      'Múltiples proyectos simultáneos',
      'Infraestructura y DevOps incluidos',
      'Dashboard ejecutivo de proyectos',
      'Soporte 24/7 con SLA garantizado',
      'Revisiones estratégicas trimestrales',
    ],
    cta: 'Hablar con Ventas',
    highlight: false,
  },
]

export default function PricingSection() {
  return (
    <section id="precios" className="py-24 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(0,229,255,0.05)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">// Inversión</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Precios <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">transparentes.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Sin cuotas mensuales de licencias. Sin costos ocultos. Un precio fijo por un sistema que es tuyo para siempre.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-cyan-950/50 to-[#0a0a0a] border border-cyan-500/50 shadow-[0_0_60px_rgba(0,229,255,0.12)] scale-105'
                  : 'bg-[#0a0a0a] border border-white/5 hover:border-white/15'
              }`}
            >
              {plan.highlight && (
                <>
                  {/* Top glow line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-cyan-500 text-black text-xs font-black px-3 py-1 rounded-full tracking-wider uppercase">
                      Más Popular
                    </span>
                  </div>
                </>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.highlight ? 'bg-cyan-500/20 border border-cyan-500/40' : 'bg-white/5 border border-white/10'}`}>
                  <plan.icon className={`w-5 h-5 ${plan.highlight ? 'text-cyan-400' : 'text-gray-400'}`} />
                </div>
                <div>
                  <div className="text-xs text-gray-600 font-mono">{plan.period}</div>
                  <div className="font-bold text-white">{plan.name}</div>
                </div>
              </div>

              <div className="mb-4">
                <span className={`text-3xl font-black ${plan.highlight ? 'text-cyan-400' : 'text-white'}`}>{plan.price}</span>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed mb-8">{plan.desc}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-cyan-400' : 'text-gray-500'}`} />
                    <span className={plan.highlight ? 'text-gray-200' : 'text-gray-400'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] active:scale-95'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 active:scale-95'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-600 mt-10"
        >
          Todos los proyectos incluyen diagnóstico inicial gratuito, arquitectura técnica documentada y garantía de resultados.
        </motion.p>
      </div>
    </section>
  )
}
