'use client'

import { motion } from 'framer-motion'

export function Differentials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-purple-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Como gosto de trabalhar</span>
            </h2>
          </motion.div>

          
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-center"
            >
              Acredito que software deve ser <span className="text-purple-secondary font-semibold">simples de entender</span>, <span className="text-purple-secondary font-semibold">fácil de manter</span> e <span className="text-purple-secondary font-semibold">preparado para evoluir</span>.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 leading-relaxed text-center"
            >
              Busco desenvolver soluções priorizando <span className="text-purple-secondary font-semibold">clareza</span>, <span className="text-purple-secondary font-semibold">qualidade de código</span> e <span className="text-purple-secondary font-semibold">experiência do usuário</span>.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
