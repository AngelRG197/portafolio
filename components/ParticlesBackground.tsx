'use client'

import { useEffect, useRef, useCallback } from 'react'

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const particlesRef = useRef<Particle[]>([])

  // Particle class
  class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    opacity: number

    constructor(width: number, height: number) {
      this.x = Math.random() * width
      this.y = Math.random() * height
      this.size = Math.random() * 1.5 + 0.5
      this.speedX = Math.random() * 0.3 - 0.15
      this.speedY = Math.random() * 0.3 - 0.15
      this.opacity = Math.random() * 0.4 + 0.1
    }

    update(width: number, height: number) {
      this.x += this.speedX
      this.y += this.speedY

      if (this.x > width) this.x = 0
      if (this.x < 0) this.x = width
      if (this.y > height) this.y = 0
      if (this.y < 0) this.y = height
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = `rgba(0, 229, 255, ${this.opacity})`
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // Optimized distance calculation (avoiding sqrt when possible)
  const getDistanceSquared = (dx: number, dy: number) => dx * dx + dy * dy
  const CONNECTION_DISTANCE_SQUARED = 150 * 150

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const particles = particlesRef.current

    // Optimización para prevenir líneas blancas
    ctx.imageSmoothingEnabled = false
    ctx.globalCompositeOperation = 'source-over'

    // Clear canvas con fondo negro
    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillRect(0, 0, width, height)

    // Batch draw connections for better performance
    ctx.beginPath()
    let hasConnections = false

    // Draw connections (optimized)
    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i]
      for (let j = i + 1; j < particles.length; j++) {
        const otherParticle = particles[j]
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distanceSquared = getDistanceSquared(dx, dy)

        if (distanceSquared < CONNECTION_DISTANCE_SQUARED) {
          const distance = Math.sqrt(distanceSquared)
          const opacity = 0.15 * (1 - distance / 150)
          ctx.strokeStyle = `rgba(0, 229, 255, ${opacity})`
          ctx.moveTo(Math.floor(particle.x), Math.floor(particle.y))
          ctx.lineTo(Math.floor(otherParticle.x), Math.floor(otherParticle.y))
          hasConnections = true
        }
      }
    }

    if (hasConnections) {
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Update and draw particles with rounded positions
    particles.forEach((particle) => {
      particle.update(width, height)
      ctx.fillStyle = `rgba(0, 229, 255, ${particle.opacity})`
      ctx.beginPath()
      ctx.arc(Math.floor(particle.x), Math.floor(particle.y), particle.size, 0, Math.PI * 2)
      ctx.fill()
    })

    animationFrameRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { 
      alpha: false, 
      desynchronized: true,
      willReadFrequently: false
    })
    if (!ctx) return

    // Detect device performance
    const isMobile = window.innerWidth < 768
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4

    // Set canvas size with device pixel ratio for crisp rendering
    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2) // Limit to 2x for performance
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      
      // Fondo negro sólido
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    setCanvasSize()

    // Optimize particle count based on device
    const particleCount = isMobile || isLowEnd ? 30 : 40
    const width = window.innerWidth
    const height = window.innerHeight

    // Create particles
    particlesRef.current = Array.from({ length: particleCount }, () => 
      new Particle(width, height)
    )

    // Throttled resize handler
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        setCanvasSize()
        // Recreate particles on resize for better distribution
        const newWidth = window.innerWidth
        const newHeight = window.innerHeight
        particlesRef.current = Array.from({ length: particleCount }, () => 
          new Particle(newWidth, newHeight)
        )
      }, 250)
    }

    window.addEventListener('resize', handleResize, { passive: true })

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [animate])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 motion-element"
      style={{ 
        background: '#000000',
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
    />
  )
}

