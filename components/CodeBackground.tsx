'use client'

import { useEffect, useRef } from 'react'

export default function CodeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Código simple y limpio
    const codeLines = [
      'const app = new Application();',
      'app.initialize();',
      'export default app;',
      '',
      'interface User {',
      '  id: string;',
      '  name: string;',
      '}',
      '',
      'async function getData() {',
      '  return await fetch("/api");',
      '}',
      '',
      'class Service {',
      '  constructor() {}',
      '  async start() {}',
      '}',
    ]

    // Crear elementos de texto
    const fragment = document.createDocumentFragment()
    
    // Repetir el código varias veces para llenar la pantalla
    for (let i = 0; i < 30; i++) {
      codeLines.forEach((line, index) => {
        const lineElement = document.createElement('div')
        lineElement.className = 'code-line'
        lineElement.textContent = line || ' '
        lineElement.style.animationDelay = `${(i * codeLines.length + index) * 0.1}s`
        fragment.appendChild(lineElement)
      })
    }

    container.appendChild(fragment)

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden code-background-container"
      />
      <style jsx>{`
        .code-background-container {
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 13px;
          line-height: 26px;
          color: rgba(0, 229, 255, 0.08);
          padding: 80px 0 0 8%;
          animation: scroll-up 60s linear infinite;
        }

        .code-line {
          white-space: pre;
          opacity: 0.8;
        }

        @keyframes scroll-up {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        @media (max-width: 768px) {
          .code-background-container {
            font-size: 11px;
            line-height: 22px;
          }
        }
      `}</style>
    </>
  )
}
