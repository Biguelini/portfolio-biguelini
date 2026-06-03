'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-none ${
        isScrolled ? 'glass-effect' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        <Link href="#home" className="text-2xl font-bold gradient-text">
          João Biguelini
        </Link>

        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-300 hover:text-purple-secondary transition-colors">
            Sobre
          </a>
          <a href="#services" className="text-gray-300 hover:text-purple-secondary transition-colors">
            Serviços
          </a>
          <a href="#technologies" className="text-gray-300 hover:text-purple-secondary transition-colors">
            Tecnologias
          </a>
          <a href="#projects" className="text-gray-300 hover:text-purple-secondary transition-colors">
            Projetos
          </a>
          <a
            href="https://wa.me/5542998349909"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-purple hover:shadow-lg px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Contato
          </a>
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-purple-secondary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-purple-primary/20">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-4">
            <a
              href="#about"
              className="block text-gray-300 hover:text-purple-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#services"
              className="block text-gray-300 hover:text-purple-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#technologies"
              className="block text-gray-300 hover:text-purple-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tecnologias
            </a>
            <a
              href="#projects"
              className="block text-gray-300 hover:text-purple-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projetos
            </a>
            <a
              href="https://wa.me/5542998349909"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-purple hover:shadow-lg px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
