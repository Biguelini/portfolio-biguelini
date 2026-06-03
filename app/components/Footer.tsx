'use client'

import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Footer() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-secondary border-t border-purple-primary/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">João Pedro Biguelini</div>
            <p className="text-gray-400">
              Desenvolvedor de Software
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Laravel • React • TypeScript • PHP
            </p>
          </div>

          
          <div>
            <h3 className="text-white font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-purple-secondary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-purple-secondary transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-purple-secondary transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5542998349909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-secondary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/biguelini/biguelini"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-lg text-gray-400 hover:text-purple-secondary hover:border-purple-secondary/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/joaopedrobiguelini"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-lg text-gray-400 hover:text-purple-secondary hover:border-purple-secondary/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/biguelinidev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-lg text-gray-400 hover:text-purple-secondary hover:border-purple-secondary/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        
        <div className="h-px bg-gradient-to-r from-purple-primary/0 via-purple-primary/20 to-purple-primary/0 my-8" />

        
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>
            © 2024 João Pedro Biguelini. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido com <span className="text-purple-secondary">♥</span> por João Pedro Biguelini
          </p>
        </div>
      </div>

      
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-purple rounded-full text-white hover:shadow-lg transition-all duration-300 hover:scale-110 z-40"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  )
}
