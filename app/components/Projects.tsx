'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function Projects() {
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Projetos</span>
            </h2>
            <p className="text-xl text-gray-400">
              Alguns projetos, estudos e experiências que representam minha trajetória como desenvolvedor.
            </p>
          </motion.div>

          
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
                variants={itemVariants}
                className="col-span-full text-center py-16 glass-effect rounded-xl text-gray-300 border-purple-primary/20 border"
              >
                <h3 className="text-2xl font-bold mb-4">Em breve</h3>
                <p className="text-lg text-gray-400">Projetos serão publicados aqui assim que estiverem prontos.</p>
              </motion.div>
              
          </motion.div>

          
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Link
              href="https://wa.me/5542998349909"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-secondary hover:text-purple-tertiary transition-colors font-semibold"
            >
              Ver mais projetos
              <ExternalLink size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
