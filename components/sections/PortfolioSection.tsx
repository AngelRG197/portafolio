'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Cpu, Terminal, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'CRM de Ventas, Facturación y Gestión Administrativa',
    tag: 'Sistemas Internos',
    desc: 'Plataforma integral diseñada para la automatización de la fuerza de ventas, generación instantánea de facturas y el control administrativo centralizado de flujos de trabajo operativos.',
    impact: [
      'Desarrollo de un motor de facturación automatizado en PHP puro (POO) con generación dinámica de reportes comerciales y conciliación contable inmediata.',
      'Interactividad dinámica del flujo de embudos de venta y paneles administrativos mediante JavaScript nativo (AJAX/Fetch) en tiempo real.',
      'Estructura relacional optimizada en PostgreSQL para auditoría administrativa, control de inventarios y registro seguro de transacciones comerciales.'
    ],
    techs: ['PHP Puro', 'JavaScript (ES6)', 'Bootstrap', 'CSS Personalizado', 'PostgreSQL'],
    year: '2024',
    github: '#',
    live: '#',
    image: '/crm.png',
    gradient: 'from-cyan-500/10 to-transparent',
    icon: Cpu,
  },
  {
    title: 'SaaS de Gestión Contable, Administrativa y Presupuestaria',
    tag: 'FinTech / ERP',
    desc: 'Plataforma administrativa para el registro contable de ingresos y egresos, conciliación bancaria y generación instantánea de balances financieros.',
    impact: [
      'Lógica contable compleja y generación de reportes implementados con algoritmos estructurados en PHP puro.',
      'Optimización de consultas relacionales complejas en PostgreSQL, reduciendo los tiempos de consulta de balances de 15s a menos de 300ms.',
      'Panel administrativo fluido estructurado con Bootstrap e interactividad optimizada en Vanilla JavaScript.'
    ],
    techs: ['PHP Puro', 'JavaScript (ES6)', 'Bootstrap', 'CSS Personalizado', 'PostgreSQL'],
    year: '2024',
    github: '#',
    live: '#',
    image: '/contable.png',
    gradient: 'from-violet-500/10 to-transparent',
    icon: Terminal,
  },
]

export default function PortfolioSection() {
  return (
    <section id="proyectos" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,229,255,0.04)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <p className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">// Proyectos reales</p>
            <h2 className="text-4xl lg:text-6xl font-black text-white">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">desarrollos.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm">Los sistemas principales que hemos desarrollado en conjunto, optimizados para impacto operativo real.</p>
        </motion.div>

        {/* 2-column balanced layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-white/20`}
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-2.5 py-1 rounded-full">{item.tag}</span>
                    <span className="text-xs text-gray-700">{item.year}</span>
                  </div>

                  {/* Project Image */}
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 border border-white/10 bg-[#111]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                      <item.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white leading-snug">{item.title}</h3>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{item.desc}</p>

                  {/* Impact bullet points - High value for CV analysts */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">// Logros de Ingeniería & Impacto</div>
                    {item.impact.map((bullet, bi) => (
                      <div key={bi} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Techs & Links */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.techs.map((tech, ti) => (
                      <span key={ti} className="text-[10px] font-mono text-gray-500 bg-white/[0.02] px-2 py-0.5 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      {item.github && item.github !== '#' && (
                        <a href={item.github} className="text-xs text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
                          <Github className="w-3.5 h-3.5" /> Code
                        </a>
                      )}
                      {item.live && item.live !== '#' && (
                        <a href={item.live} className="text-xs text-gray-500 hover:text-cyan-400 flex items-center gap-1 transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" /> Demo Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
