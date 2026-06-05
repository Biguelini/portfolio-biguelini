'use client'

import { motion } from 'framer-motion'
import { Code2, MonitorPlay, Building2, Network } from 'lucide-react'

const services = [
  {
    title: 'Desenvolvimento Web',
    description: 'Criação de sistemas e aplicações personalizadas.',
    icon: Code2
  },
  {
    title: 'Landing Pages',
    description: 'Páginas otimizadas para conversão.',
    icon: MonitorPlay
  },
  {
    title: 'Sites Institucionais',
    description: 'Presença profissional para empresas.',
    icon: Building2
  },
  {
    title: 'APIs e Integrações',
    description: 'Integrações entre plataformas e serviços.',
    icon: Network
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden transition-colors hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 via-transparent to-[#7C3AED]/0 group-hover:from-[#7C3AED]/10 transition-all duration-500" />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 text-[#A855F7]">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
