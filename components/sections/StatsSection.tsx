'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 10, suffix: '+', label: 'Tecnologías Dominadas', desc: 'Frontend, Backend, DevOps, Bases de Datos y Cloud' },
  { value: 5, suffix: '+', label: 'Proyectos Completados', desc: 'ERPs, CRMs y plataformas web completas entregadas con éxito' },
  { value: 99, suffix: '%', label: 'Optimización de Carga', desc: 'Puntuación promedio en Lighthouse y rendimiento web' },
  { value: 3, suffix: '+ Años', label: 'Experiencia Full Stack', desc: 'Desarrollo profesional en todo el stack tecnológico' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-black text-6xl lg:text-7xl bg-gradient-to-br from-white via-cyan-200 to-cyan-500 bg-clip-text text-transparent tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.03)_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">// Métricas profesionales</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">Mi trayectoria en números.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="stats-card group relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-500 overflow-hidden"
            >
              {/* Glow corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
              {/* Animated border top */}
              <div className="absolute top-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700" />
              
              <div className="relative z-10">
                <Counter target={stat.value} suffix={stat.suffix} />
                <h3 className="mt-4 text-base font-semibold text-white/90">{stat.label}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
