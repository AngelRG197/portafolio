'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, DollarSign, TrendingDown, Database, Users } from 'lucide-react'

const problems = [
  {
    icon: Database,
    title: 'Datos dispersos, decisiones ciegas',
    desc: 'Tu información crítica vive en 12 hojas de Excel distintas y nadie sabe cuál es la versión actual.',
    stat: '73%',
    statLabel: 'de PYMEs pierden datos clave semanalmente',
  },
  {
    icon: Clock,
    title: 'Tu equipo trabaja, no produce',
    desc: 'Procesos manuales repetitivos consumen el 40% del tiempo productivo de tus mejores empleados.',
    stat: '18h',
    statLabel: 'semanales perdidas por empleado en tareas manuales',
  },
  {
    icon: DollarSign,
    title: 'Software genérico que no encaja',
    desc: 'Pagas por herramientas que cubren el 60% de tus necesidades y adaptas tu negocio al software, no al revés.',
    stat: '$840',
    statLabel: 'mensuales promedio en suscripciones que se superponen',
  },
  {
    icon: TrendingDown,
    title: 'Escalar te cuesta más de lo que ingresa',
    desc: 'Cada vez que creces, tu equipo de soporte crece proporcionalmente. No es escala, es inflación operativa.',
    stat: '3x',
    statLabel: 'más costoso escalar sin automatización',
  },
  {
    icon: Users,
    title: 'Experiencia de cliente inconsistente',
    desc: 'Errores operativos invisibles que llegan al cliente final y erosionan la reputación que tardaste años en construir.',
    stat: '91%',
    statLabel: 'de clientes no vuelven tras una mala experiencia',
  },
  {
    icon: AlertTriangle,
    title: 'Sin visibilidad en tiempo real',
    desc: 'Para saber cómo va tu negocio hoy, necesitas esperar el reporte del lunes. Ya es demasiado tarde para actuar.',
    stat: '48h',
    statLabel: 'de retraso promedio en información crítica',
  },
]

export default function ProblemSection() {
  return (
    <section id="problema" className="py-24 relative overflow-hidden bg-[#030303]">
      {/* Red radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(239,68,68,0.07)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(239,68,68,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-mono text-red-400 tracking-[0.3em] uppercase mb-3">// El diagnóstico</p>
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-none">
              Tu empresa está<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                sangrando dinero
              </span><br />
              y no lo sabes.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pb-2"
          >
            <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-red-500/40 pl-6">
              La mayoría de empresas en crecimiento pierden entre el <strong className="text-white">20% y el 35% de su margen</strong> en ineficiencias invisibles. No es mala suerte, es tecnología mal implementada.
            </p>
          </motion.div>
        </div>

        {/* Floating misaligned grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, i) => {
            const offsets = ['translate-y-0', 'translate-y-4', '-translate-y-4', 'translate-y-2', '-translate-y-2', 'translate-y-6']
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`group relative ${offsets[i]}`}
              >
                <div className="h-full p-6 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-red-500/30 transition-all duration-500 relative overflow-hidden">
                  {/* Corner glow */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-all" />
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 border border-red-500/20">
                      <item.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">{item.title}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{item.desc}</p>
                  
                  <div className="border-t border-white/5 pt-4">
                    <span className="text-2xl font-black text-red-400">{item.stat}</span>
                    <span className="ml-2 text-xs text-gray-600">{item.statLabel}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
