'use client'

import { motion } from 'framer-motion'
import { Terminal, Cpu } from 'lucide-react'

const techCategories = [
  {
    category: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
    color: 'bg-brutal-pink'
  },
  {
    category: 'Backend',
    techs: ['Node.js', 'Laravel', 'PHP', 'Spring Boot', 'Python'],
    color: 'bg-brutal-blue'
  },
  {
    category: 'Mobile',
    techs: ['Flutter', 'React Native'],
    color: 'bg-brutal-yellow'
  },
  {
    category: 'Banco de Dados',
    techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    color: 'bg-brutal-green'
  },
  {
    category: 'DevOps & Tools',
    techs: ['Docker', 'Linux', 'AWS', 'Git', 'GitHub'],
    color: 'bg-[#B14AED]'
  }
]

export function Technologies() {
  return (
    <section id="technologies" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-brutal-bg">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-brutal-bg brutal-border brutal-shadow flex flex-col"
        >

          <div className="bg-brutal-yellow brutal-border-b px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-black font-black uppercase tracking-widest text-xl">
              <Terminal size={24} strokeWidth={3} />
              <span>STACK.EXE</span>
            </div>
          </div>


          <div className="p-8 md:p-12 relative flex flex-col md:flex-row gap-12">
            
            <div className="md:w-1/3 flex flex-col gap-4">
              <div className="w-20 h-20 bg-brutal-blue brutal-border brutal-shadow flex items-center justify-center text-white mb-4">
                <Cpu size={40} strokeWidth={2} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-brutal-fg tracking-tight uppercase">
                Minhas<br/>Skills
              </h2>
              <p className="text-black font-medium text-lg bg-brutal-yellow p-4 brutal-border">
                Ferramentas de ponta para criar soluções inquebráveis.
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {techCategories.map((group, groupIndex) => (
                <motion.div 
                  key={group.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
                  className={`p-6 brutal-border brutal-shadow ${group.color}`}
                >
                  <h3 className="text-black text-xl font-black uppercase mb-4 brutal-border-b pb-2">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.techs.map((tech) => (
                      <div
                        key={tech}
                        className="px-3 py-1 bg-brutal-bg brutal-border text-brutal-fg font-bold text-sm flex items-center gap-1"
                      >
                        <span className="text-brutal-blue font-black">#</span>
                        {tech}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
