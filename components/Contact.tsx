'use client'

import { memo, useCallback, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, X } from 'lucide-react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_kpd2693'
const TEMPLATE_ID = 'template_v509l1x'
const PUBLIC_KEY = 'S8DTexbeChudJCogm'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Enviar email usando EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )

      // Mostrar modal de éxito
      setShowSuccessModal(true)
      
      // Limpiar formulario
      setFormData({ name: '', email: '', message: '' })
      
      // Cerrar modal automáticamente después de 5 segundos
      setTimeout(() => {
        setShowSuccessModal(false)
      }, 5000)
    } catch (error) {
      console.error('Error al enviar el mensaje:', error)
      alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  const closeModal = useCallback(() => {
    setShowSuccessModal(false)
  }, [])

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const contactInfo = useMemo(() => [
    {
      icon: Mail,
      title: 'Email',
      content: 'zyberprooficial@gmail.com',
      href: 'mailto:zyberprooficial@gmail.com',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+58 412-9050109',
      href: 'tel:+584129050109',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Caracas, Venezuela',
      href: '#',
    },
  ], [])

  return (
    <section
      id="contacto"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent px-4">
            ¿Listo para Empezar?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Contáctanos y conversemos sobre tu próximo proyecto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Información de Contacto
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Estamos aquí para ayudarte. Envíanos un mensaje y te
                responderemos lo antes posible.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-start space-x-3 sm:space-x-4 bg-charcoal-800/50 backdrop-blur-sm border border-charcoal-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-cyan-500/50 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ x: 8 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm text-gray-400 mb-1">{item.title}</div>
                    <div className="text-sm sm:text-base text-white font-medium break-words">{item.content}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-charcoal-800/50 backdrop-blur-sm border border-charcoal-700 rounded-xl p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-charcoal-700 rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-charcoal-700 rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-charcoal-700 rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg text-black font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all border border-cyan-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
              {!isSubmitting && <Send className="w-4 h-4 sm:w-5 sm:h-5" />}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            {/* Modal Card */}
            <motion.div
              className="relative bg-charcoal-800 border-2 border-cyan-500/50 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl shadow-cyan-500/20"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Success Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
                </div>
              </div>

              {/* Success Message */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.
                </p>
              </div>

              {/* Auto-close indicator */}
              <div className="mt-6 text-center text-xs sm:text-sm text-gray-400">
                Este mensaje se cerrará automáticamente
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default memo(Contact)

