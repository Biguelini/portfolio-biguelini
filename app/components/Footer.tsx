'use client'

import { Github, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative border-t-8 border-brutal-border bg-brutal-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black text-brutal-fg tracking-tighter uppercase mb-2">
              Biguelini Dev
            </h3>
            <p className="text-black font-bold uppercase text-sm bg-brutal-yellow inline-block px-2 brutal-border">
              Desenvolvimento Web e Soluções Digitais
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/biguelini/biguelini" target="_blank" rel="noopener noreferrer" className="p-4 bg-brutal-fg brutal-border brutal-shadow text-brutal-bg hover:bg-brutal-blue hover:text-white transition-colors">
              <Github size={24} strokeWidth={2} />
            </a>
            <a href="https://www.linkedin.com/in/joaopedrobiguelini" target="_blank" rel="noopener noreferrer" className="p-4 bg-brutal-fg brutal-border brutal-shadow text-brutal-bg hover:bg-brutal-blue hover:text-white transition-colors">
              <Linkedin size={24} strokeWidth={2} />
            </a>
            <a href="https://www.instagram.com/biguelinidev" target="_blank" rel="noopener noreferrer" className="p-4 bg-brutal-fg brutal-border brutal-shadow text-brutal-bg hover:bg-brutal-pink hover:text-white transition-colors">
              <Instagram size={24} strokeWidth={2} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
