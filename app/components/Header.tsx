'use client'

import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-4 md:top-8 inset-x-0 w-full z-50 flex justify-center px-4`}
    >
      <div className="w-full max-w-7xl flex items-center justify-between">
        

        <nav className="bg-brutal-bg brutal-border brutal-shadow px-4 py-3 flex items-center gap-2 md:gap-6 flex-1 max-w-fit">
          <Link href="#home" className="font-black text-brutal-fg tracking-tighter uppercase text-lg">
            biguelini.
          </Link>
          
          <div className="hidden md:flex items-center gap-4 border-l-4 border-brutal-border pl-6 ml-2">
            <a href="#about" className="text-sm font-bold uppercase text-brutal-fg hover:text-brutal-blue transition-colors">Sobre</a>
            <a href="#services" className="text-sm font-bold uppercase text-brutal-fg hover:text-brutal-blue transition-colors">Serviços</a>
            <a href="#projects" className="text-sm font-bold uppercase text-brutal-fg hover:text-brutal-blue transition-colors">Projetos</a>
          </div>

          <a
            href="https://wa.me/5542998349909"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-brutal-yellow brutal-border text-black px-4 py-2 text-sm font-black uppercase hover:bg-brutal-pink hover:text-white transition-colors"
          >
            Contato <ArrowRight size={18} />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brutal-fg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
          </button>
        </nav>


        <div className="hidden lg:flex items-center gap-4">
          <a href="https://linkedin.com/in/joaopedrobiguelini" target="_blank" rel="noopener noreferrer" className="bg-brutal-bg brutal-border brutal-shadow px-4 py-2 font-bold uppercase text-brutal-fg hover:bg-brutal-blue hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/biguelini" target="_blank" rel="noopener noreferrer" className="bg-brutal-bg brutal-border brutal-shadow px-4 py-2 font-bold uppercase text-brutal-fg hover:bg-brutal-blue hover:text-white transition-colors">
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-brutal-bg brutal-border brutal-shadow p-6 md:hidden flex flex-col gap-6"
          >
            <div className="flex justify-end mb-2">
              <ThemeToggle />
            </div>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase text-brutal-fg border-b-4 border-brutal-border pb-2">Sobre</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase text-brutal-fg border-b-4 border-brutal-border pb-2">Serviços</a>
            <a href="#technologies" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase text-brutal-fg border-b-4 border-brutal-border pb-2">Tecnologias</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase text-brutal-fg border-b-4 border-brutal-border pb-2">Projetos</a>
            
            <a href="https://wa.me/5542998349909" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-black bg-brutal-yellow brutal-border p-4 font-black uppercase mt-4">
              CONTATO <ArrowRight size={24} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
