'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden border border-white/[0.05] bg-[#0F0F23]"
        >
          {/* Radial Immersive Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/20 via-[#0F0F23] to-[#0F0F23] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Vamos construir seu <br className="hidden md:block" />
              <span className="gradient-text">próximo projeto?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-2xl">
              Entre em contato para transformar sua ideia em uma solução digital.
            </p>
            
            <a
              href="https://wa.me/5542998349909"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-[#0F0F23] px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle size={24} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
