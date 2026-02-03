"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Contacto", href: "/contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleServiciosClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si ya estamos en la home, hacer scroll suave
    if (pathname === '/') {
      e.preventDefault()
      const serviciosSection = document.getElementById('servicios')
      if (serviciosSection) {
        serviciosSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    // Si estamos en otra página, el Link normal nos llevará a /#servicios
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative z-10 text-xl font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
          >
            <Image 
              src="/LogoSinFondo.png" 
              width={100} 
              height={200} 
              alt="SIIP Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.slice(0, -1).map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={item.name === "Servicios" ? handleServiciosClick : undefined}
                className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                  isScrolled ? 'text-white' : 'text-foreground'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Underline animation */}
                <span 
                  className={`absolute bottom-1 left-4 right-4 h-px transition-transform duration-300 origin-left ${
                    hoveredIndex === index ? "scale-x-100" : "scale-x-0"
                  } ${isScrolled ? 'bg-white' : 'bg-foreground'}`}
                />
              </Link>
            ))}
            
            {/* Contact button - destacado */}
            <Link
              href="/contacto"
              className={`ml-4 inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'border-white bg-white text-black hover:bg-transparent hover:text-white' 
                  : 'border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground'
              }`}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 md:hidden p-2 transition-colors ${
              isScrolled ? 'text-white' : 'text-foreground'
            }`}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`} 
              />
              <X 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`} 
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-background md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.name === "Servicios") {
                  handleServiciosClick(e)
                }
                setIsOpen(false)
              }}
              className="group relative overflow-hidden py-3"
              style={{
                transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
              }}
            >
              <span 
                className={`block text-4xl font-medium text-foreground transition-all duration-500 ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 75 + 100}ms` : "0ms",
                }}
              >
                {item.name}
              </span>
              {/* Animated underline on mobile */}
              <span className="absolute bottom-2 left-0 h-0.5 w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          {/* Social links or additional info */}
          <div 
            className={`mt-12 text-sm text-muted-foreground transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen ? "500ms" : "0ms",
            }}
          >
            <p>info@siip.com</p>
            <p className="mt-1">+54 9 2477 69-8740</p>
          </div>
        </div>
      </div>
    </header>
  )
}
