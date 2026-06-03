'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2 } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      
      <div className="absolute inset-0 bg-gradient-purple-dark pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-tertiary/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2">
            <Code2 size={16} className="text-purple-secondary" />
            <span className="text-sm text-gray-300">Desenvolvedor de Software</span>
          </div>
        </motion.div>

        
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-gray-100">
            João Pedro Biguelini
          </span>
        </motion.h1>

        
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-300 mb-4 font-light"
        >
          Desenvolvedor de software focado em aplicações web, arquitetura de sistemas e soluções digitais.
        </motion.p>

        
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Compartilho projetos, aprendizados e experiências sobre desenvolvimento de software, tecnologia e construção de produtos digitais.
        </motion.p>

        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group bg-gradient-purple hover:shadow-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Ver Projetos
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="https://wa.me/5542998349909"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-purple-secondary/50 hover:border-purple-secondary hover:bg-purple-primary/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Entrar em Contato
            <Code2 size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 right-10 hidden lg:block text-purple-secondary/20"
      >
        <Code2 size={120} strokeWidth={0.5} />
      </motion.div>
    </section>
  )
}
