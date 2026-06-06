'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-brutal-bg"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          

          <div className="flex flex-col items-start text-left z-20 order-2 lg:order-1">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8 brutal-border bg-brutal-yellow px-4 py-2 font-bold uppercase tracking-widest text-black brutal-shadow"
            >
              Biguelini Dev
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] font-black tracking-tight text-brutal-fg leading-[1.0] mb-8 uppercase"
            >
              CRIANDO<br />
              <span className="bg-brutal-pink text-white px-2 mt-2 inline-block brutal-border rotate-[-2deg]">
                SOLUÇÕES
              </span><br />
              BRUTAIS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-brutal-fg font-medium leading-relaxed mb-10 max-w-lg brutal-border bg-brutal-bg p-4 brutal-shadow"
            >
              Desenvolvimento de sistemas, websites, landing pages e aplicações web que não passam despercebidas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-6"
            >
              <Link href="https://wa.me/5542998349909" target="_blank" rel="noopener noreferrer">
                <button 
                  className="px-8 py-4 bg-brutal-blue text-white text-lg font-black uppercase brutal-border brutal-shadow flex items-center gap-3 transition-all"
                >
                  Solicitar orçamento
                  <ArrowRight size={24} />
                </button>
              </Link>
              <Link href="#projects">
                <button 
                  className="px-8 py-4 bg-brutal-fg text-brutal-bg text-lg font-black uppercase brutal-border brutal-shadow hover:bg-brutal-green transition-colors"
                >
                  Ver projetos
                </button>
              </Link>
            </motion.div>
          </div>


          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1 lg:order-2 min-h-[400px]"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
