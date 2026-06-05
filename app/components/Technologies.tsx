'use client'

import { motion } from 'framer-motion'
import { Terminal, Cpu } from 'lucide-react'

const techCategories = [
  {
    category: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'JavaScript']
  },
  {
    category: 'Backend',
    techs: ['Node.js', 'Laravel', 'PHP', 'Spring Boot', 'Python']
  },
  {
    category: 'Mobile',
    techs: ['Flutter', 'React Native']
  },
  {
    category: 'Banco de Dados',
    techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase']
  },
  {
    category: 'DevOps & Tools',
    techs: ['Docker', 'Linux', 'AWS', 'Git', 'GitHub']
  }
]

export function Technologies() {
  return (
    <section id="technologies" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel rounded-[2rem] overflow-hidden border border-white/[0.08]"
        >
          {/* Editor Header */}
          <div className="bg-white/[0.02] border-b border-white/[0.05] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2 text-white/40 text-xs font-mono uppercase tracking-widest">
              <Terminal size={14} />
              <span>Stack.config</span>
            </div>
            <div className="w-16" /> {/* Spacer for balance */}
          </div>

          {/* Editor Content */}
          <div className="p-8 md:p-12 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED] opacity-5 blur-[100px] pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 glass-panel rounded-xl text-[#A855F7]">
                <Cpu size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Tecnologias & Skills
                </h2>
                <p className="text-muted-foreground text-sm">Ferramentas que utilizo no dia a dia organizadas por área.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techCategories.map((group, groupIndex) => (
                <motion.div 
                  key={group.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
                >
                  <h3 className="text-white/50 text-sm font-semibold tracking-wider uppercase mb-4 border-b border-white/[0.05] pb-2">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.techs.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (groupIndex * 0.1) + (techIndex * 0.05), duration: 0.4 }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.15)' }}
                        className="px-3 py-1.5 bg-[#0F0F23]/50 border border-white/[0.05] rounded-lg text-white/80 font-medium text-sm hover:text-white transition-all cursor-default flex items-center gap-2"
                      >
                        <span className="text-[#8B5CF6] text-[10px] font-mono opacity-70">#</span>
                        {tech}
                      </motion.div>
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
