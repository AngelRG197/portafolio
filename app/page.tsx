'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

// Lazy load components pesados para mejor rendimiento inicial
const CodeBackground = dynamic(() => import('@/components/CodeBackground'), {
  ssr: false,
  loading: () => null,
})

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="min-h-screen" />,
})

const Technologies = dynamic(() => import('@/components/Technologies'), {
  loading: () => <div className="min-h-screen" />,
})

const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <div className="min-h-screen" />,
})

const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="min-h-screen" />,
})

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="min-h-screen" />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <Suspense fallback={null}>
        <CodeBackground />
      </Suspense>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Technologies />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen" />}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  )
}

