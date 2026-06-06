'use client'

import { motion } from 'framer-motion'
import { Code2, MonitorPlay, Building2, Network } from 'lucide-react'

const services = [
  {
    title: 'Desenvolvimento Web',
    description: 'Criação de sistemas e aplicações personalizadas.',
    icon: Code2,
    color: 'bg-brutal-yellow'
  },
  {
    title: 'Landing Pages',
    description: 'Páginas otimizadas para conversão.',
    icon: MonitorPlay,
    color: 'bg-brutal-pink'
  },
  {
    title: 'Sites Institucionais',
    description: 'Presença profissional para empresas.',
    icon: Building2,
    color: 'bg-brutal-blue'
  },
  {
    title: 'APIs e Integrações',
    description: 'Integrações entre plataformas e serviços.',
    icon: Network,
    color: 'bg-brutal-green'
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-brutal-bg">
      <div className="max-w-6xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-16 tracking-tight text-brutal-fg uppercase text-center"
        >
          Meus Serviços
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className={`group ${service.color} p-8 md:p-10 brutal-border brutal-shadow flex flex-col h-full justify-between`}
              >
                <div>
                  <div className="w-16 h-16 bg-brutal-bg brutal-border flex items-center justify-center mb-6 text-brutal-fg brutal-shadow">
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-3xl font-black text-black mb-4 tracking-tight uppercase">
                    {service.title}
                  </h3>
                </div>
                <p className="text-brutal-fg font-medium text-lg leading-relaxed bg-brutal-bg p-4 brutal-border mt-4">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
