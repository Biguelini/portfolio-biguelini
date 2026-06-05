'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
              className="glass-effect border border-purple-primary/20 rounded-xl overflow-hidden hover:border-purple-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 w-full border-b border-purple-primary/20">
                <Image
                  src="/images/solaris.png"
                  alt="Solaris"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Solaris</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  Infraestrutura energética de precisão. Projetos solares dimensionados matematicamente para reduzir a fatura de energia a quase zero.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://solaris-three.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-secondary hover:text-purple-tertiary transition-colors font-semibold"
                  >
                    Visitar site
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="md:col-span-1 lg:col-span-2 flex flex-col items-center justify-center text-center py-16 glass-effect rounded-xl text-gray-300 border-purple-primary/20 border"
              >
                <h3 className="text-2xl font-bold mb-4">Em breve</h3>
                <p className="text-lg text-gray-400">Mais projetos serão publicados aqui assim que estiverem prontos.</p>
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
