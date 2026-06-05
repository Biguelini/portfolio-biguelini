'use client'

import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 md:top-8 inset-x-0 w-full z-50 flex justify-center px-4`}
    >
      <div className="w-full max-w-7xl flex items-center justify-between">
        
        {/* Left/Center Pill Nav */}
        <nav className="glass-panel px-2 py-2 rounded-full flex items-center gap-2 md:gap-6 shadow-2xl">
          <Link href="#home" className="pl-4 pr-2 font-semibold text-white tracking-tight flex items-center gap-2 text-sm">
            biguelini.
          </Link>
          
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] rounded-full p-1 border border-white/[0.05]">
            <a href="#about" className="px-4 py-1.5 rounded-full text-xs font-medium text-white/60 hover:text-white hover:bg-white/[0.05] transition-all">Sobre</a>
            <a href="#services" className="px-4 py-1.5 rounded-full text-xs font-medium text-white/60 hover:text-white hover:bg-white/[0.05] transition-all">Serviços</a>
            <a href="#projects" className="px-4 py-1.5 rounded-full text-xs font-medium text-white/60 hover:text-white hover:bg-white/[0.05] transition-all">Projetos</a>
          </div>

          <a
            href="https://wa.me/5542998349909"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-medium transition-all"
          >
            Let's Chat <ArrowUpRight size={14} className="text-[#A855F7]" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white rounded-full bg-white/[0.05]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>

        {/* Right Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="https://linkedin.com/in/joaopedrobiguelini" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-white/50 hover:text-white transition-colors flex items-center gap-2">
            in <span className="hidden xl:inline">LinkedIn</span>
          </a>
          <a href="https://github.com/biguelini" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-white/50 hover:text-white transition-colors flex items-center gap-2">
            gh <span className="hidden xl:inline">GitHub</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-4 right-4 glass-panel rounded-3xl p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/80 hover:text-white">Sobre</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/80 hover:text-white">Serviços</a>
              <a href="#technologies" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/80 hover:text-white">Tecnologias</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/80 hover:text-white">Projetos</a>
              <div className="h-px bg-white/[0.1] my-2" />
              <a href="https://wa.me/5542998349909" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-white font-medium">
                Let's Chat <ArrowUpRight size={18} className="text-[#A855F7]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
