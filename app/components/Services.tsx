'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Database, Layout } from 'lucide-react'

const expertise = [
  {
    icon: Code,
    title: 'Desenvolvimento Backend',
    description: 'Construção de APIs, regras de negócio e integrações.',
  },
  {
    icon: Layout,
    title: 'Frontend Moderno',
    description: 'Interfaces responsivas utilizando React e TypeScript.',
  },
  {
    icon: Zap,
    title: 'Arquitetura de Software',
    description: 'Estruturação de aplicações escaláveis e de fácil manutenção.',
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    description: 'Modelagem, consultas e otimização de performance.',
  },
]

export function Services() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Áreas de atuação</span>
            </h2>
          </motion.div>

          
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group glass-effect p-8 rounded-xl hover:border-purple-secondary/50 transition-all duration-300 hover-glow"
                >
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-purple/10 group-hover:bg-gradient-purple/20 transition-colors">
                    <Icon size={32} className="text-purple-secondary" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 h-1 w-12 bg-gradient-purple rounded opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
