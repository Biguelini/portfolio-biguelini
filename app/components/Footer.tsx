'use client'

import { Github, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#0F0F23] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Biguelini Dev
            </h3>
            <p className="text-muted-foreground font-light text-sm">
              Desenvolvimento Web e Soluções Digitais
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/biguelini/biguelini" target="_blank" rel="noopener noreferrer" className="p-3 glass-panel rounded-full text-white/70 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/joaopedrobiguelini" target="_blank" rel="noopener noreferrer" className="p-3 glass-panel rounded-full text-white/70 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/biguelinidev" target="_blank" rel="noopener noreferrer" className="p-3 glass-panel rounded-full text-white/70 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
