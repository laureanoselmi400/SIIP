"use client"

import { useState } from "react"
import { Navbar } from "../../components/navbar"
import { WhatsAppFloat } from "../../components/whatsapp-float"
import {
  Monitor,
  Download,
  Wifi,
  Settings,
  Clock,
  Shield,
  Wrench,
  Headphones,
  CheckCircle,
  ArrowRight,
  Zap
} from "lucide-react"

export default function SoporteTecnico() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const ventajas = [
    {
      icon: Clock,
      titulo: "Respuesta Rápida",
      descripcion: "Atendemos tus urgencias tecnológicas con la mayor celeridad para minimizar el tiempo de inactividad de tu equipo."
    },
    {
      icon: Shield,
      titulo: "Seguridad Garantizada",
      descripcion: "Protegemos tus dispositivos y datos con las mejores prácticas de seguridad informática del mercado."
    },
    {
      icon: Wrench,
      titulo: "Soluciones Definitivas",
      descripcion: "No parches temporales. Diagnosticamos la raíz del problema para darte soluciones que duran en el tiempo."
    },
    {
      icon: Headphones,
      titulo: "Soporte Personalizado",
      descripcion: "Cada cliente es único. Adaptamos nuestros servicios a las necesidades específicas de tu empresa o hogar."
    },
    {
      icon: CheckCircle,
      titulo: "Profesionales Certificados",
      descripcion: "Nuestro equipo cuenta con la formación y experiencia necesaria para resolver cualquier problema técnico."
    },
    {
      icon: Zap,
      titulo: "Optimización de Rendimiento",
      descripcion: "Hacemos que tus equipos y sistemas funcionen a su máxima capacidad, mejorando la productividad."
    },
    {
      icon: Monitor,
      titulo: "Multi-Dispositivo",
      descripcion: "Trabajamos con todo tipo de equipos: computadoras, laptops, impresoras, servidores y más."
    },
    {
      icon: Settings,
      titulo: "Mantenimiento Preventivo",
      descripcion: "Evitamos problemas antes de que ocurran con planes de mantenimiento periódico para tu infraestructura."
    }
  ]

  const servicios = [
    {
      numero: "01",
      titulo: "Instalación y Configuración de Dispositivos",
      categoria: "Hardware",
      descripcion: "Instalamos y configuramos impresoras, computadoras, laptops, monitores, scanners y todo tipo de periféricos para que funcionen de manera óptima en tu entorno de trabajo.",
      icono: Monitor,
      color: "from-blue-500 to-cyan-600",
      tags: ["Impresoras", "Computadoras", "Periféricos"]
    },
    {
      numero: "02",
      titulo: "Instalación de Software",
      categoria: "Software",
      descripcion: "Instalamos y configuramos sistemas operativos, paquetes de oficina, antivirus, programas de gestión empresarial y cualquier aplicación que necesites para tu trabajo diario.",
      icono: Download,
      color: "from-purple-500 to-indigo-600",
      tags: ["Sistemas Operativos", "Ofimática", "Antivirus"]
    },
    {
      numero: "03",
      titulo: "Instalación y Mantenimiento de Redes",
      categoria: "Redes",
      descripcion: "Diseñamos, instalamos y mantenemos redes cableadas e inalámbricas. Configuramos routers, switches y puntos de acceso para garantizar una conectividad estable y segura.",
      icono: Wifi,
      color: "from-green-500 to-emerald-600",
      tags: ["Wi-Fi", "Cableado", "Routers"]
    },
    {
      numero: "04",
      titulo: "Configuración y Mantenimiento de Sistemas",
      categoria: "Sistemas",
      descripcion: "Realizamos la configuración inicial y el mantenimiento preventivo y correctivo de tus sistemas. Optimizamos el rendimiento, gestionamos backups y resolvemos fallas para mantener tu infraestructura operativa.",
      icono: Settings,
      color: "from-orange-500 to-red-600",
      tags: ["Backups", "Optimización", "Diagnóstico"]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50 opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-6">
              Soporte Técnico
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Profesional y Confiable
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Mantenemos tu tecnología funcionando sin interrupciones. Desde la instalación de equipos
              hasta el mantenimiento de redes, somos tu equipo técnico de confianza.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { numero: "100%", texto: "de problemas resueltos con garantía" },
              { numero: "24/7", texto: "disponibilidad para urgencias técnicas" },
              { numero: "+10", texto: "años de experiencia en el sector" },
              { numero: "4", texto: "tipos de soporte especializado disponibles" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.numero}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.texto}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas Section */}
      <section className="py-24 px-6 bg-foreground">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-background mb-4">
              ¿Por qué elegirnos para tu soporte técnico?
            </h2>
            <p className="text-background/70 text-lg max-w-2xl mx-auto">
              Tecnología que funciona, negocio que crece
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ventajas.map((ventaja, index) => {
              const Icon = ventaja.icon
              return (
                <div
                  key={index}
                  className="group relative bg-background/5 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-background/10 hover:scale-105"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-background/10 text-background transition-all duration-300 group-hover:bg-background group-hover:text-foreground group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-background mb-3">
                    {ventaja.titulo}
                  </h3>
                  <p className="text-background/70 leading-relaxed">
                    {ventaja.descripcion}
                  </p>
                  <div className={`absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl transition-opacity duration-300 ${
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  }`} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios de Soporte
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluciones técnicas integrales adaptadas a cada necesidad
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icono
              return (
                <div
                  key={index}
                  className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-foreground transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                >
                  {/* Header con gradiente */}
                  <div className={`relative h-40 bg-gradient-to-br ${servicio.color} flex items-center px-8`}>
                    <span className="text-8xl font-bold text-white/10 select-none">
                      {servicio.numero}
                    </span>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-900">
                        <Zap className="w-3 h-3" />
                        {servicio.categoria}
                      </span>
                    </div>

                    {/* Ícono */}
                    <div className="absolute bottom-4 right-6 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                      {servicio.titulo}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {servicio.descripcion}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {servicio.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/5492477698740?text=${encodeURIComponent(`Quiero obtener información sobre el servicio: ${servicio.titulo}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all"
                    >
                      Consultar servicio
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Animated border glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${servicio.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              ¿Tenés una necesidad técnica específica que no encontrás aquí?
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Consultar Caso Particular
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-cyan-600 to-green-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Tu tecnología necesita atención?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Contactanos hoy y recibí una evaluación gratuita de tu infraestructura tecnológica.
            Estamos listos para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Solicitar Soporte Ahora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
            >
              Ver Todos los Servicios
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
