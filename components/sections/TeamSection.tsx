'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Github, Globe } from 'lucide-react'

const team = [
  {
    name: 'Angel Riobueno',
    role: 'Senior Frontend Dev & UI/UX',
    bio: 'Desarrollador enfocado en rendimiento, accesibilidad y diseño interactivo premium. Especialista en React/Next.js y sistemas de diseño a medida.',
    skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'TailwindCSS', 'Bootstrap', 'Framer Motion', 'UI/UX Design'],
    photo: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/angel.jpeg`,
    linkedin: '#',
    github: '#',
    accentColor: 'cyan',
  },
  {
    name: 'Brayan Gonzaléz',
    role: 'Senior Backend & DevOps',
    bio: 'Arquitecto de bases de datos, APIs robustas e infraestructura escalable en la nube. Especialista en automatizaciones complejas y DevOps.',
    skills: ['PHP', 'Laravel', 'Go', 'Node.js', 'Python', 'C++', 'C#', 'PostgreSQL', 'DevOps / Cloud'],
    photo: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/brayan.jpeg`,
    linkedin: '#',
    github: '#',
    accentColor: 'violet',
  },
]

const colorMap: Record<string, { border: string; badge: string; dot: string; skill: string }> = {
  cyan: { border: 'hover:border-cyan-500/50', badge: 'bg-cyan-500/10 text-cyan-400', dot: 'bg-cyan-400', skill: 'border-cyan-500/20 text-cyan-400' },
  violet: { border: 'hover:border-violet-500/50', badge: 'bg-violet-500/10 text-violet-400', dot: 'bg-violet-400', skill: 'border-violet-500/20 text-violet-400' },
}

export default function TeamSection() {
  return (
    <section id="nosotros" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(0,229,255,0.04)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-end mb-20"
        >
          <div>
            <p className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">// El duo técnico</p>
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-none">
              Quiénes somos<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                y qué hacemos.
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed lg:pb-2">
            Trabajamos en conjunto como un duo especializado de alta velocidad (Desarrollo Frontend + Backend/DevOps). Al contratarnos o colaborar con nosotros, tienes comunicación directa y desarrollo ágil sin intermediarios.
          </p>
        </motion.div>

        {/* Team cards (centered for 2 members) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => {
            const colors = colorMap[member.accentColor]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`group relative rounded-2xl bg-[#0a0a0a] border border-white/5 ${colors.border} transition-all duration-500 overflow-hidden`}
              >
                {/* Photo area */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#111]">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-all duration-750 scale-100 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    /* Placeholder */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className={`w-20 h-20 rounded-full ${colors.badge} border border-current/20 flex items-center justify-center`}>
                        <span className="text-3xl font-black">{member.name.charAt(0)}</span>
                      </div>
                      <span className="text-xs font-mono text-gray-600">Foto pendiente</span>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/85 via-transparent to-transparent z-10" />

                  {/* Social links */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.linkedin && member.linkedin !== '#' && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:border-cyan-500/50 transition-colors">
                        <Linkedin className="w-3.5 h-3.5 text-white" />
                      </a>
                    )}
                    {member.github && member.github !== '#' && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:border-cyan-500/50 transition-colors">
                        <Github className="w-3.5 h-3.5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  {/* Role badge */}
                  <span className={`inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded-full mb-3 ${colors.badge}`}>
                    {member.role}
                  </span>

                  <h3 className="text-xl font-black text-white mb-3">{member.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{member.bio}</p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, si) => (
                      <span
                        key={si}
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${colors.skill}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-${member.accentColor}-500 to-transparent transition-all duration-700`} />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
