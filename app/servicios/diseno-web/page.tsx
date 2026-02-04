"use client"

import { useState } from "react"
import { Navbar } from "../../components/navbar"
import { 
  Globe, 
  TrendingUp, 
  Clock, 
  Target, 
  Users, 
  Shield,
  Smartphone,
  Search,
  Zap,
  ArrowRight,
  ExternalLink
} from "lucide-react"
import Image from "next/image"

export default function DisenoWeb() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const ventajas = [
    {
      icon: Globe,
      titulo: "Presencia Online 24/7",
      descripcion: "Tu negocio estará disponible las 24 horas del día, los 7 días de la semana, sin límites geográficos."
    },
    {
      icon: TrendingUp,
      titulo: "Aumenta tus Ventas",
      descripcion: "Expande tu alcance y convierte visitantes en clientes con un sitio web profesional y optimizado."
    },
    {
      icon: Users,
      titulo: "Credibilidad y Confianza",
      descripcion: "Un sitio web profesional transmite seriedad y genera confianza en tus clientes potenciales."
    },
    {
      icon: Target,
      titulo: "Marketing Digital Efectivo",
      descripcion: "Base fundamental para tus estrategias de marketing digital, redes sociales y publicidad online."
    },
    {
      icon: Clock,
      titulo: "Ahorra Tiempo",
      descripcion: "Automatiza consultas frecuentes, reservas y ventas, liberando tiempo para tu equipo."
    },
    {
      icon: Search,
      titulo: "Mejor Posicionamiento",
      descripcion: "Aparecer en Google cuando tus clientes buscan tus productos o servicios."
    },
    {
      icon: Smartphone,
      titulo: "Responsive y Móvil",
      descripcion: "Diseños que se adaptan perfectamente a cualquier dispositivo: celular, tablet o computadora."
    },
    {
      icon: Shield,
      titulo: "Seguridad y Respaldo",
      descripcion: "Protección de datos, certificados SSL y respaldos automáticos para tu tranquilidad."
    }
  ]

  const ejemplos = [
    {
      nombre: "E-commerce Moderno",
      categoria: "Tienda Online",
      descripcion: "Plataforma completa de comercio electrónico con carrito de compras y pagos integrados",
      imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: "from-blue-500 to-purple-600",
      tags: ["Pagos Online", "Inventario", "Multi-idioma"]
    },
    {
      nombre: "Landing Page Corporativa",
      categoria: "Sitio Corporativo",
      descripcion: "Diseño elegante y profesional para empresas que buscan destacar en su industria",
      imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      color: "from-gray-700 to-gray-900",
      tags: ["Profesional", "SEO", "Blog"]
    },
    {
      nombre: "Portfolio Creativo",
      categoria: "Portfolio",
      descripcion: "Showcase dinámico para artistas, fotógrafos y profesionales creativos",
      imagen: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      color: "from-pink-500 to-rose-600",
      tags: ["Galería", "Animaciones", "Contacto"]
    },
    {
      nombre: "Restaurante & Delivery",
      categoria: "Gastronomía",
      descripcion: "Sistema de menú digital con pedidos online y reservas integradas",
      imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      color: "from-orange-500 to-red-600",
      tags: ["Menú Digital", "Reservas", "Delivery"]
    },
    {
      nombre: "SaaS Dashboard",
      categoria: "Aplicación Web",
      descripcion: "Panel de control moderno para servicios de software y aplicaciones",
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      color: "from-cyan-500 to-blue-600",
      tags: ["Dashboard", "Analytics", "API"]
    },
    {
      nombre: "Inmobiliaria Digital",
      categoria: "Bienes Raíces",
      descripcion: "Catálogo interactivo de propiedades con tours virtuales y filtros avanzados",
      imagen: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      color: "from-green-500 to-emerald-600",
      tags: ["Búsqueda", "Tours 360°", "Comparador"]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-6">
              Tu Presencia Digital
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Profesional y Efectiva
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              En el mundo digital actual, tu sitio web es tu carta de presentación. 
              Creamos experiencias web que convierten visitantes en clientes.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { numero: "85%", texto: "de usuarios juzgan credibilidad por diseño web" },
              { numero: "24/7", texto: "tu negocio siempre disponible" },
              { numero: "70%", texto: "de las compras empiezan online" },
              { numero: "100%", texto: "diseños responsive y optimizados" }
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
              ¿Por qué tu negocio necesita una página web?
            </h2>
            <p className="text-background/70 text-lg max-w-2xl mx-auto">
              Una inversión que se paga sola con los resultados
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
                  
                  {/* Decorative element */}
                  <div className={`absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl transition-opacity duration-300 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ejemplos de Diseño Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ejemplos de Diseños Web
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cada proyecto es único. Diseñamos sitios web adaptados a tu industria y objetivos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ejemplos.map((ejemplo, index) => (
              <div
                key={index}
                className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-foreground transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br ${ejemplo.color}">
                  <img
                    src={ejemplo.imagen}
                    alt={ejemplo.nombre}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${ejemplo.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-900">
                      <Zap className="w-3 h-3" />
                      {ejemplo.categoria}
                    </span>
                  </div>

                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="rounded-full bg-white p-2">
                      <ExternalLink className="w-4 h-4 text-gray-900" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                    {ejemplo.nombre}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {ejemplo.descripcion}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ejemplo.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View more button */}
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                    Ver detalles
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </div>
            ))}
          </div>

          {/* Ver más diseños */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              ¿Quieres ver más ejemplos personalizados para tu industria?
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Solicitar Propuesta Personalizada
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Agenda una consultoría gratuita y descubre cómo un sitio web profesional 
            puede transformar tu negocio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Comenzar Ahora
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
