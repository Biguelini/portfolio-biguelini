'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      
      <div className="absolute inset-0 bg-gradient-purple-dark pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-effect rounded-2xl p-12 md:p-16 text-center"
        >
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Vamos conversar?</span>
          </motion.h2>

          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Estou sempre aberto para trocar ideias sobre tecnologia, projetos e oportunidades.
          </motion.p>

          
          <motion.div variants={itemVariants}>
            <Link
              href="https://wa.me/5542998349909"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-purple hover:shadow-lg px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={24} />
              Contato
              <ArrowRight
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
