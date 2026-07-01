'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Cuánto tiempo tarda un proyecto típico?',
    a: 'Depende del alcance. Un módulo de automatización específico puede estar listo en 3–4 semanas. Un sistema completo (ERP o CRM a medida) toma entre 8–16 semanas. Siempre entregamos un cronograma fijo en la propuesta y lo cumplimos.',
  },
  {
    q: '¿Qué pasa si mis necesidades cambian a mitad del proyecto?',
    a: 'Trabajamos con metodología ágil. Los cambios de alcance menores se absorben en los sprints sin costo adicional. Los cambios mayores se documentan, se evalúa el impacto y se aprueba contigo antes de ejecutar. Sin sorpresas.',
  },
  {
    q: '¿El código fuente nos pertenece al terminar?',
    a: 'Absolutamente. Desde el día 1, todo el código generado es propiedad intelectual de tu empresa. Te entregamos el repositorio completo, documentación técnica y manual de usuario al cierre del proyecto.',
  },
  {
    q: '¿Pueden integrarse con nuestras herramientas actuales?',
    a: 'Sí. Tenemos experiencia integrando con más de 50 plataformas: ERPs legacy, sistemas contables, marketplaces, pasarelas de pago, CRMs de terceros, y cualquier sistema que tenga API o acceso a base de datos.',
  },
  {
    q: '¿Qué incluye el soporte post-lanzamiento?',
    a: 'El primer mes incluye soporte prioritario gratuito para cualquier ajuste o bug. A partir del mes 2, ofrecemos planes de mantenimiento mensual con SLA garantizado. También puedes optar por capacitar a tu equipo interno para gestionar el sistema.',
  },
  {
    q: '¿Tienen experiencia en mi industria?',
    a: 'Hemos trabajado con empresas de logística, distribución, salud, construcción, retail B2B, importación y servicios profesionales. Cada proyecto comienza con un diagnóstico profundo de tu industria específica, no con plantillas genéricas.',
  },
  {
    q: '¿Cómo calculan el precio de un proyecto?',
    a: 'Basado en alcance técnico, complejidad de integraciones y tiempo estimado. Ofrecemos precio fijo por proyecto (no por hora) para que puedas presupuestar con certeza. El diagnóstico inicial es siempre gratuito.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">// Preguntas frecuentes</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Tienes preguntas.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Nosotros tenemos respuestas.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-base font-medium transition-colors duration-200 ${open === i ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'}`}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className={`w-4 h-4 transition-colors ${open === i ? 'text-cyan-400' : 'text-gray-600'}`} />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
