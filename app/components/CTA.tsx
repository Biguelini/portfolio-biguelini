'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-brutal-bg">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative brutal-border brutal-shadow bg-brutal-yellow p-12 md:p-20 text-center flex flex-col items-center"
        >
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-black mb-8 uppercase leading-[1.1]">
            Vamos construir seu <br className="hidden md:block" />
            <span className="bg-brutal-pink text-white px-4 brutal-border rotate-2 inline-block mt-2">próximo projeto?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-brutal-fg font-medium mb-12 max-w-2xl bg-brutal-bg p-4 brutal-border">
            Entre em contato para transformar sua ideia em uma solução digital.
          </p>
          
          <a
            href="https://wa.me/5542998349909"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brutal-fg text-brutal-bg px-10 py-5 font-black text-xl uppercase brutal-border brutal-shadow hover:bg-brutal-blue hover:-translate-y-1 hover:translate-x-1 active:translate-y-0 active:translate-x-0 transition-all"
          >
            <MessageCircle size={28} />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>


      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200vw] overflow-hidden opacity-5 pointer-events-none -z-10 rotate-[-5deg]">
        <div className="animate-marquee whitespace-nowrap text-[20vw] font-black uppercase text-brutal-fg leading-none">
          LET'S BUILD LET'S BUILD LET'S BUILD LET'S BUILD
        </div>
      </div>
    </section>
  )
}
