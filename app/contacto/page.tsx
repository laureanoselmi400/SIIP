"use client"

import { useState } from "react"
import { Navbar } from "../components/navbar"
import { Mail, Phone, User, MessageSquare, Send, Loader2, CheckCircle } from "lucide-react"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage("")

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Limpiar formulario
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          asunto: "",
          mensaje: ""
        })
        
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Error de conexión. Por favor, intenta nuevamente.')
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    const whatsappNumber = "5492477698740"
    const message = encodeURIComponent("Hola, me gustaría contactarme con ustedes")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-24 px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
              Hablemos de tu
              <br />
              <span className="text-muted-foreground">próximo proyecto</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Completa el formulario y nos pondremos en contacto contigo a la brevedad
            </p>
          </div>

          {/* Mensajes de estado */}
          {submitStatus === 'success' && (
            <div className="mb-8 rounded-xl bg-green-50 border border-green-200 p-4 flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800 font-medium">
                ¡Mensaje enviado correctamente! Te contactaremos pronto.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 rounded-xl bg-red-50 border border-red-200 p-4">
              <p className="text-red-800 font-medium">
                {errorMessage}
              </p>
            </div>
          )}

          {/* Formulario */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre/Empresa */}
              <div className="group">
                <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                  Nombre/Empresa *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full rounded-xl border border-border bg-background pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tu nombre o empresa"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email de contacto *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full rounded-xl border border-border bg-background pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Teléfono */}
              <div className="group">
                <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                  Teléfono de contacto *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full rounded-xl border border-border bg-background pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="+54 11 1234-5678"
                  />
                </div>
              </div>

              {/* Asunto */}
              <div className="group">
                <label htmlFor="asunto" className="block text-sm font-medium text-foreground mb-2">
                  Asunto de la consulta *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full rounded-xl border border-border bg-background pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div className="group">
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                  Detalle de la consulta *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-border bg-background px-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Cuéntanos más sobre tu proyecto o consulta..."
                />
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Botón Enviar */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Enviar consulta por email
                    </>
                  )}
                </button>

                {/* Botón WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#20BA5A] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <svg 
                    className="h-6 w-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contactar por WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Información adicional */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              También puedes contactarnos directamente
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a href="mailto:info@siip.com" className="text-foreground hover:text-muted-foreground transition-colors">
                info@siip.com
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <a href="tel:+5492477698740" className="text-foreground hover:text-muted-foreground transition-colors">
                +54 9 2477 69-8740
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
