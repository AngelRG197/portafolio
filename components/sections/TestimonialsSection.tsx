'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'CEO, Distribuidora Andina',
    text: 'Angel no solo entregó el sistema, entregó exactamente el impacto que prometió. Recuperamos la inversión en el primer mes.',
    rating: 5,
  },
  {
    name: 'Ana Berríos',
    role: 'Directora de Ops, TechLogistics',
    text: 'Probamos 3 agencias antes. Ninguna entendía realmente nuestros procesos. Angel llegó, diagnosticó y ejecutó sin excusas.',
    rating: 5,
  },
  {
    name: 'Miguel Torres',
    role: 'Fundador, ImportCorp',
    text: 'El dashboard en tiempo real cambió cómo tomamos decisiones. Ahora sabemos qué pasa en el negocio antes de que se convierta en problema.',
    rating: 5,
  },
  {
    name: 'Luisa Fernández',
    role: 'CTO, Constructora BLD',
    text: 'La app de campo eliminó el 80% del papeleo. Nuestros supervisores ahora entregan reportes en minutos, no en días.',
    rating: 5,
  },
  {
    name: 'Roberto Salazar',
    role: 'Gerente General, Clínica Salud+',
    text: 'La automatización de agendas redujo cancelaciones en un 35%. Es dinero que antes simplemente se perdía.',
    rating: 5,
  },
  {
    name: 'Patricia Gómez',
    role: 'Dir. Comercial, Software Solutions',
    text: 'Transparencia total. Precios fijos, cronogramas reales, demos bi-semanales. Nunca me dejaron en la oscuridad.',
    rating: 5,
  },
]

// Duplicate for infinite scroll
const doubled = [...testimonials, ...testimonials]

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  return (
    <section id="testimonios" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.03)_0%,transparent_60%)]" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <p className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">// Clientes reales</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Lo que dicen<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">quienes ya escalaron.</span>
          </h2>
        </motion.div>

        {/* Marquee track */}
        <div className="relative overflow-hidden">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          <div ref={trackRef} className="flex gap-5 marquee-track">
            {doubled.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-cyan-500/20 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/30 to-cyan-700/30 flex items-center justify-center text-xs font-bold text-cyan-300">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-gray-600">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
