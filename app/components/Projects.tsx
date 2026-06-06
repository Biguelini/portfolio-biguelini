'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-brutal-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="bg-brutal-yellow brutal-border brutal-shadow p-6 inline-block">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black uppercase">
              Projetos<br/>em destaque
            </h2>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="group bg-brutal-bg brutal-border brutal-shadow flex flex-col hover:-translate-y-2 transition-transform h-full w-full"
          >

            <div className="bg-brutal-blue brutal-border-b px-4 py-2 flex items-center justify-between">
              <span className="text-white font-black uppercase tracking-widest text-sm">Solaris.exe</span>
            </div>
            
            <div className="h-64 lg:h-80 bg-brutal-bg relative brutal-border-b flex flex-col overflow-hidden">
              <div className="flex-1 relative">
                <Image
                  src="/images/solaris.png"
                  alt="Solaris Energia Solar"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-3xl font-black text-black uppercase tracking-tight mb-4 bg-brutal-yellow inline-block px-2">
                  Solaris
                </h3>
                <p className="text-brutal-fg font-medium leading-relaxed mb-6">
                  Infraestrutura energética de precisão. Projetos solares dimensionados matematicamente para reduzir a fatura de energia a quase zero, com uma interface focada em alta conversão e performance.
                </p>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'Next.js', 'Tailwind', 'Framer Motion'].map(tech => (
                    <span key={tech} className="text-xs font-bold uppercase px-2 py-1 bg-brutal-fg brutal-border text-brutal-bg">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href="https://solaris-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brutal-fg text-brutal-bg px-6 py-3 font-black uppercase brutal-border brutal-shadow hover:bg-brutal-blue transition-colors w-full justify-center">
                  Acessar plataforma
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group bg-brutal-bg brutal-border brutal-shadow flex flex-col hover:-translate-y-2 transition-transform h-full w-full"
          >

            <div className="bg-brutal-pink brutal-border-b px-4 py-2 flex items-center justify-between">
              <span className="text-white font-black uppercase tracking-widest text-sm">PrimeSofas.exe</span>
            </div>
            
            <div className="h-64 lg:h-80 bg-brutal-bg relative brutal-border-b flex flex-col overflow-hidden">
              <div className="flex-1 relative">
                <Image
                  src="/images/prime_sofas.png"
                  alt="Prime Sofás"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-3xl font-black text-black uppercase tracking-tight mb-4 bg-brutal-yellow inline-block px-2">
                  Prime Sofás
                </h3>
                <p className="text-brutal-fg font-medium leading-relaxed mb-6">
                  E-commerce premium de sofás de alto padrão. Catálogo online sofisticado com visual imersivo e interface otimizada para maximizar as conversões e entregar uma experiência de luxo.
                </p>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'Next.js', 'Tailwind', 'Framer Motion'].map(tech => (
                    <span key={tech} className="text-xs font-bold uppercase px-2 py-1 bg-brutal-fg brutal-border text-brutal-bg">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href="https://prime-sofas.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brutal-fg text-brutal-bg px-6 py-3 font-black uppercase brutal-border brutal-shadow hover:bg-brutal-pink transition-colors w-full justify-center">
                  Acessar loja
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="group bg-brutal-bg brutal-border brutal-shadow flex flex-col hover:-translate-y-2 transition-transform h-full w-full"
          >

            <div className="bg-brutal-green brutal-border-b px-4 py-2 flex items-center justify-between">
              <span className="text-white font-black uppercase tracking-widest text-sm">Movva.exe</span>
            </div>
            
            <div className="h-64 lg:h-80 bg-brutal-bg relative brutal-border-b flex flex-col overflow-hidden">
              <div className="flex-1 relative">
                <Image
                  src="/images/movva.png"
                  alt="MOVVA Logística"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-3xl font-black text-black uppercase tracking-tight mb-4 bg-brutal-yellow inline-block px-2">
                  MOVVA
                </h3>
                <p className="text-brutal-fg font-medium leading-relaxed mb-6">
                  Logística residencial e interestadual de alto padrão. Calculadora de mudanças inteligente com roteamento rodoviário em tempo real via API e mapa de cobertura interativo.
                </p>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'Next.js', 'Tailwind', 'Framer Motion'].map(tech => (
                    <span key={tech} className="text-xs font-bold uppercase px-2 py-1 bg-brutal-fg brutal-border text-brutal-bg">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href="https://movva-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brutal-fg text-brutal-bg px-6 py-3 font-black uppercase brutal-border brutal-shadow hover:bg-brutal-green transition-colors w-full justify-center">
                  Acessar plataforma
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
