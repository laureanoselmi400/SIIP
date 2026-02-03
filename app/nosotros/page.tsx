"use client"

import { Navbar } from "../components/navbar"
import { Building2, Users, Wrench, CheckCircle2 } from "lucide-react"

export default function Nosotros() {
  const servicios = [
    {
      icon: Building2,
      titulo: "Para Empresas (Grandes y PyMEs)",
      descripcion: "Optimizamos procesos, desarrollamos software a medida y gestionamos infraestructuras críticas para asegurar la continuidad de tu negocio."
    },
    {
      icon: Users,
      titulo: "Para Emprendedores y Profesionales",
      descripcion: "Creamos tu identidad digital desde cero, desde tu primera web hasta aplicaciones que automatizan tus ventas."
    },
    {
      icon: Wrench,
      titulo: "Para Particulares",
      descripcion: "Brindamos soporte técnico especializado con un trato cercano, transparente y eficiente para tus dispositivos personales."
    }
  ]

  const razones = [
    {
      titulo: "Visión Integral",
      descripcion: "Resolvemos desde un cable mal conectado hasta el despliegue de una plataforma en la nube."
    },
    {
      titulo: "Compromiso Local",
      descripcion: "Estamos en Pergamino, conocemos el mercado y estamos cerca para cuando nos necesites."
    },
    {
      titulo: "Innovación Constante",
      descripcion: "Utilizamos las últimas tecnologías (como React, Next.js y Cloud Computing) para que tu inversión no quede obsoleta."
    }
  ]

  return (
    <main className="min-h-screen bg-background font-['Inter',sans-serif]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Nosotros
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Soluciones Informáticas
              <br />
              <span className="text-muted-foreground">Integrales Pergamino</span>
            </h1>
          </div>

          {/* Visión */}
          <div className="prose prose-lg max-w-none mb-20">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Nació con una visión clara: convertirnos en el <strong>socio tecnológico estratégico</strong> de nuestra comunidad y la región. No solo reparamos equipos o escribimos código; diseñamos la infraestructura que permite a nuestros clientes crecer sin límites.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Creemos que la tecnología debe ser una <strong>herramienta de impulso, no un obstáculo</strong>. Por eso, combinamos años de experiencia técnica con una escucha activa para entender qué necesita realmente cada proyecto.
            </p>
          </div>

          {/* Lo que nos hace diferentes */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
              Lo que nos hace diferentes
            </h2>
            <p className="text-lg text-foreground text-center mb-12 max-w-3xl mx-auto">
              Es nuestra capacidad de adaptación. En SIIP, no hay cliente pequeño ni desafío demasiado grande:
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {servicios.map((servicio, index) => {
                const Icon = servicio.icon
                return (
                  <div 
                    key={index}
                    className="group relative bg-background border border-border rounded-2xl p-8 transition-all duration-300 hover:border-foreground hover:shadow-lg"
                  >
                    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-foreground/5 text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {servicio.titulo}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {servicio.descripcion}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Por qué elegir SIIP */}
          <div className="bg-foreground rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl font-semibold text-background mb-12 text-center">
              Por qué elegir SIIP
            </h2>
            
            <div className="space-y-8">
              {razones.map((razon, index) => (
                <div 
                  key={index}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-background mb-2">
                      {razon.titulo}
                    </h3>
                    <p className="text-background/80 leading-relaxed">
                      {razon.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              ¿Listo para llevar tu proyecto al siguiente nivel?
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
