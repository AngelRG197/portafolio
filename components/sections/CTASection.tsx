'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Linkedin, Github, FileText } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="contacto" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#030303] py-12 sm:py-16">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 cta-mesh-bg" />
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase mb-6">// ¿Listo para colaborar?</p>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-none mb-8">
            Hablemos de tu<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-600">
              próximo proyecto.
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Actualmente estoy disponible para proyectos Full Stack o para integrarme a equipos de alto rendimiento.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-6">
            <motion.a
              href="mailto:angeldavidriobueno@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative w-full sm:w-auto px-12 py-5 bg-cyan-500 text-black font-black text-lg overflow-hidden block text-center"
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Enviar Email
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="Curriculum_angel/index.html"
              target="_blank"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group w-full sm:w-auto px-8 py-4 bg-transparent text-white font-bold text-sm border border-white/20 hover:border-cyan-400/40 rounded-none transition-all duration-300 block text-center"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
            >
              <span className="flex items-center justify-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                Ver mi CV / Currículum
              </span>
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
            <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <span className="text-gray-700">|</span>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Disponible para trabajo remoto y presencial
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
