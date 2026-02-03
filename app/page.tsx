import { Navbar } from "./components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section para demostrar el navbar */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Bienvenidos
          </p>
          <h1 className="text-balance text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Creamos experiencias
            <br />
            <span className="text-muted-foreground">digitales únicas</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
            Transformamos ideas en soluciones innovadoras que impulsan 
            el crecimiento de tu negocio en el mundo digital.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/productos"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-all duration-300 hover:scale-105"
            >
              Ver Servicios
            </a>
            <a
              href="/nosotros"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground"
            >
              Conocer más sobre nosotros
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
          </div>
        </div>
      </section>
      
      {/* Second section to demonstrate scroll behavior */}
      <section className="min-h-screen bg-foreground px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-medium text-background sm:text-5xl">
            Nuestros servicios
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {["Diseño Web", "Desarrollo de Aplicaciones", "Soporte Técnico","Infrastuctura/Redes"].map((service, index) => (
              <div
                key={service}
                className="group relative overflow-hidden rounded-2xl border border-background/10 bg-background/5 p-8 transition-all duration-300 hover:bg-background/10"
              >
                <span className="text-6xl font-light text-background/20">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-medium text-background">
                  {service}
                </h3>
                <p className="mt-2 text-sm text-background/60 leading-relaxed">
                  Soluciones personalizadas para llevar tu negocio al siguiente nivel.
                </p>
                <div className="mt-6 inline-flex items-center text-sm text-background/80 transition-colors group-hover:text-background">
                  Saber más
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
