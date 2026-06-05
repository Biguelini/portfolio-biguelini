'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import Image from 'next/image'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Projetos em <span className="gradient-text">destaque</span>
            </h2>
            <p className="text-muted-foreground">O que tenho construído recentemente.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Solaris Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group glass-panel rounded-3xl overflow-hidden flex flex-col hover:border-white/[0.15] transition-colors h-full w-full"
          >
            {/* Fake Mac OS Browser/App Window */}
            <div className="h-64 lg:h-80 bg-[#0F0F23] relative border-b border-white/[0.05] flex flex-col overflow-hidden">
              <div className="bg-white/[0.02] border-b border-white/[0.05] px-4 py-3 flex items-center gap-2 z-10 relative">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-[#ff5f56] transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-[#ffbd2e] transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-[#27c93f] transition-colors" />
              </div>
              
              {/* Project Image */}
              <div className="flex-1 relative">
                <Image
                  src="/images/solaris.png"
                  alt="Solaris Energia Solar"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F23] via-transparent to-transparent opacity-80" />
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow bg-[#0F0F23]/40 justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                  Solaris Energia Solar
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Infraestrutura energética de precisão. Projetos solares dimensionados matematicamente para reduzir a fatura de energia a quase zero, com uma interface focada em alta conversão e performance.
                </p>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map(tech => (
                    <span key={tech} className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded bg-white/[0.03] border border-white/[0.05] text-[#A855F7]">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href="https://solaris-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 text-sm font-medium hover:text-white transition-colors w-max group/link">
                  Acessar plataforma
                  <ArrowUpRight size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Prime Sofás Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="group glass-panel rounded-3xl overflow-hidden flex flex-col hover:border-white/[0.15] transition-colors h-full w-full"
          >
            {/* Fake Mac OS Browser/App Window */}
            <div className="h-64 lg:h-80 bg-[#0F0F23] relative border-b border-white/[0.05] flex flex-col overflow-hidden">
              <div className="bg-white/[0.02] border-b border-white/[0.05] px-4 py-3 flex items-center gap-2 z-10 relative">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-[#ff5f56] transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-[#ffbd2e] transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-[#27c93f] transition-colors" />
              </div>
              
              {/* Project Image */}
              <div className="flex-1 relative">
                <Image
                  src="/images/prime_sofas.png"
                  alt="Prime Sofás"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F23] via-transparent to-transparent opacity-80" />
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow bg-[#0F0F23]/40 justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                  Prime Sofás
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  E-commerce premium de sofás de alto padrão. Catálogo online sofisticado com visual imersivo e interface otimizada para maximizar as conversões e entregar uma experiência de luxo.
                </p>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map(tech => (
                    <span key={tech} className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded bg-white/[0.03] border border-white/[0.05] text-[#A855F7]">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href="https://prime-sofas.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 text-sm font-medium hover:text-white transition-colors w-max group/link">
                  Acessar loja
                  <ArrowUpRight size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
