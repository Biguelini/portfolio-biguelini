'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Dotted Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />

      {/* Gradient backdrop */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#7C3AED]/15 via-[#A855F7]/5 to-transparent rounded-full blur-[80px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left z-20 order-2 lg:order-1">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#A855F7] shadow-[0_0_10px_#A855F7] animate-pulse" />
              <span className="text-sm font-medium text-white/60 tracking-widest uppercase">
                Biguelini Dev
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter text-white leading-[1.05] mb-8"
            >
              Transformando<br /> ideias em <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#7C3AED]">
                  soluções digitais
                </span>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-transparent rounded-full origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-white/50 font-light leading-relaxed mb-10 max-w-md"
            >
              Desenvolvimento de sistemas, websites, landing pages e aplicações web modernas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Link href="https://wa.me/5542998349909" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-sm font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all"
                >
                  Solicitar orçamento
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                </motion.button>
              </Link>
              <Link href="#projects">
                <motion.button 
                  whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 rounded-full border border-white/[0.1] hover:bg-white/[0.03] transition-all text-sm font-semibold flex items-center gap-2 text-white"
                >
                  Ver projetos
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: The Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex justify-center items-center order-1 lg:order-2"
          >
            <div className="scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
              <HeroVisual />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
