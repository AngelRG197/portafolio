'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Cpu, Terminal, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

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
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/crm.png`],
    gradient: 'from-cyan-500/10 to-transparent',
    icon: Cpu,
  },
  {
    title: 'SICAP - Sistema Integral de Capacitación y Aprendizaje Profesional',
    tag: 'EdTech / LMS',
    desc: 'Plataforma completa de gestión de capacitaciones dirigida al sector público venezolano, con gestión académica, biblioteca digital, certificación profesional y sistema avanzado de auditoría.',
    impact: [
      'Arquitectura full-stack moderna con Laravel 12 (backend API REST), React 18 + TypeScript (frontend SPA) y PostgreSQL con schemas seguros para datos sensibles médicos encriptados.',
      'Sistema académico integral que incluye gestión de cursos con programaciones multi-modalidad, matriculación con flujo de aprobación, evaluaciones automáticas y generación de certificados digitales con competencias profesionales.',
      'Implementación de seguridad enterprise-grade con Laravel Sanctum para autenticación, Spatie Permission para roles jerárquicos, Activity Log para auditoría completa, y sistema de notificaciones en tiempo real con colas asíncronas.'
    ],
    techs: ['Laravel 12', 'React 18', 'TypeScript', 'PostgreSQL', 'TailwindCSS', 'Vite'],
    year: '2026',
    github: '#',
    live: '#',
    images: [
      `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Inicio_sesion.png`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Panel_administrativo.png`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Panel_participante.png`
    ],
    gradient: 'from-blue-500/10 to-transparent',
    icon: Terminal,
  },
  {
    title: 'Sistema de Atención y Gestión de Emergencias',
    tag: 'Sistemas Críticos',
    desc: 'Plataforma integral de gestión operativa en tiempo real para la coordinación de atención de emergencias, con interfaz de reporte ciudadano, control de unidades de respuesta, roles de usuario y generación automática de informes críticos.',
    impact: [
      'Interfaz de reporte ciudadano con formulario multi-paso intuitivo, permitiendo a usuarios reportar emergencias por categoría (desastres naturales, salud, incendios, incidentes, rescate) con seguimiento en tiempo real del estatus.',
      'Arquitectura backend robusta construida con PHP puro orientado a objetos, garantizando alta disponibilidad y respuesta inmediata bajo condiciones críticas.',
      'Sistema de autenticación multinivel con control de roles y permisos granulares para operadores, supervisores y administradores, con panel de alertas activas, gestión de vehículos y estadísticas operativas en tiempo real mediante JavaScript nativo.'
    ],
    techs: ['PHP Puro (POO)', 'JavaScript (ES6)', 'MySQL', 'Bootstrap', 'CSS Personalizado'],
    year: '2025',
    github: '#',
    live: '#',
    images: [
      `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/gestion_emergencia.png`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/reporte_emergencia.png`
    ],
    gradient: 'from-red-500/10 to-transparent',
    icon: Terminal,
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
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/contable.png`],
    gradient: 'from-violet-500/10 to-transparent',
    icon: Cpu,
  },
]

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 1) {
    return (
      <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/10 bg-[#111]">
        <Image
          src={images[0]}
          alt="Project screenshot"
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
      </div>
    )
  }

  return (
    <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/10 bg-[#111] group/carousel">
      <Image
        src={images[currentIndex]}
        alt={`Project screenshot ${currentIndex + 1}`}
        fill
        className="object-cover object-top transition-all duration-500"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
      
      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/80"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/80"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              idx === currentIndex ? 'bg-cyan-400 w-4' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

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
              Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">desarrollos.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm">Los sistemas principales que hemos desarrollado en conjunto, optimizados para impacto operativo real.</p>
        </motion.div>

        {/* 2x2 grid for 4 projects */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                  <div className="mb-5">
                    <ImageCarousel images={item.images} />
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
