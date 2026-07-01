'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Users, FileText, Code2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TechStackSection from '@/components/sections/TechStackSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import TeamSection from '@/components/sections/TeamSection'
import StatsSection from '@/components/sections/StatsSection'
import CTASection from '@/components/sections/CTASection'

/* ─────────────────────────────────────────────
   DUO PORTFOLIO HERO SECTION
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 sm:pt-30 lg:pt-32 pb-16 overflow-hidden bg-[#050505]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Bio & Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono mb-8 border border-emerald-500/20 tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              DISPONIBLES PARA PROYECTOS // LIVE STATUS
            </motion.span>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8">
              Angel & Brayan<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-600">
                Duo de Ingeniería B2B.
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-lg">
              Desarrollador Frontend + Ingeniero Backend/DevOps trabajando en conjunto. Diseñamos, construimos e implementamos sistemas a medida sin intermediarios ni burocracia de agencia.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Primary — Projects link */}
              <motion.a
                href="#proyectos"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-4 bg-cyan-500 text-black font-black text-base overflow-hidden block text-center w-full sm:w-auto"
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  <Code2 className="w-4 h-4" />
                  Ver Proyectos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              {/* Secondary — Download CV */}
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 text-white font-medium text-base border border-white/15 hover:border-cyan-500/40 hover:bg-white/5 transition-all duration-300 block text-center w-full sm:w-auto"
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
              >
                <span className="flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  Ver Contacto / CV
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT — Terminal Simulator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 to-transparent blur-3xl rounded-full scale-110" />

            {/* Code Terminal */}
            <div className="relative rounded-2xl border border-white/10 bg-[#080808] p-5 shadow-2xl font-mono">
              {/* Window chrome */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-gray-600">engineering-duo.json</span>
                <Terminal className="w-3.5 h-3.5 text-gray-600" />
              </div>

              {/* Terminal Code Lines */}
              <div className="text-xs space-y-1.5 overflow-x-auto text-gray-400">
                <p className="text-gray-500">{`{`}</p>
                <p className="pl-4">
                  <span className="text-cyan-400">"teamName"</span>: <span className="text-amber-300">"ZyberPro Technical Duo"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">"engineers"</span>: <span className="text-gray-300">{`[`}</span>
                </p>
                <p className="pl-8 text-gray-300">
                  {`{ `}<span className="text-cyan-400">"name"</span>: <span className="text-amber-300">"Angel RG"</span>, <span className="text-cyan-400">"role"</span>: <span className="text-emerald-400">"Frontend & UI/UX"</span>{` },`}
                </p>
                <p className="pl-8 text-gray-300">
                  {`{ `}<span className="text-cyan-400">"name"</span>: <span className="text-amber-300">"Brayan GT"</span>, <span className="text-cyan-400">"role"</span>: <span className="text-emerald-400">"Backend & DevOps"</span>{` }`}
                </p>
                <p className="pl-4 text-gray-300">{`],`}</p>
                <p className="pl-4">
                  <span className="text-cyan-400">"focus"</span>: <span className="text-amber-300">"Sistemas ERP, CRMs, Dashboards y Apps de Campo"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">"methodology"</span>: <span className="text-amber-300">"Sprints quincenales, demos en vivo, sin intermediarios"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">"codebaseQuality"</span>: <span className="text-emerald-400">"Clean Code, TypeScript estricto, 100% testeable"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-400">"philosophy"</span>: <span className="text-amber-300">"Bypass de agencias infladas. Ingeniería de alta velocidad directa al cliente."</span>
                </p>
                <p className="text-gray-500">{`}`}</p>
              </div>

              {/* Mini status display */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-cyan-400">Available Session</span>
                </span>
                <span>UTF-8 // JSON</span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                <Users className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="text-[10px] text-gray-500">Formato</div>
                <div className="text-xs font-black text-white">Duo Técnico Ágil</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <TechStackSection />
      <ExperienceSection />
      <PortfolioSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}
