'use client'

import { motion } from 'framer-motion'

export function About() {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="gradient-text">João Pedro Biguelini</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-purple rounded" />
          </motion.div>

          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed mb-6"
          >
            Sou desenvolvedor de software com experiência na construção de aplicações web, APIs e sistemas voltados para resolver problemas reais.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed mb-6"
          >
            Tenho interesse especial por <span className="text-purple-secondary font-semibold">arquitetura de software</span>, <span className="text-purple-secondary font-semibold">boas práticas de desenvolvimento</span> e <span className="text-purple-secondary font-semibold">tecnologias modernas</span> para web.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed mb-6"
          >
            Atualmente trabalho com <span className="text-purple-secondary font-semibold">PHP</span>, <span className="text-purple-secondary font-semibold">Laravel</span>, <span className="text-purple-secondary font-semibold">React</span>, <span className="text-purple-secondary font-semibold">TypeScript</span> e bancos de dados relacionais.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
