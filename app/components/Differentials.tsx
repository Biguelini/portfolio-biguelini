'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Maximize, CheckCircle, MessageSquare } from 'lucide-react'

const items = [
  { text: 'Código limpo', icon: Sparkles, className: 'col-span-1 md:col-span-2 md:row-span-1' },
  { text: 'Performance', icon: Zap, className: 'col-span-1 md:col-span-1 md:row-span-2' },
  { text: 'Escalabilidade', icon: Maximize, className: 'col-span-1 md:col-span-1 md:row-span-2' },
  { text: 'Boas práticas', icon: CheckCircle, className: 'col-span-1 md:col-span-1 md:row-span-1' },
  { text: 'Comunicação clara', icon: MessageSquare, className: 'col-span-1 md:col-span-2 md:row-span-1' },
]

export function Differentials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[160px] gap-4"
        >
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 0.98 }}
                className={`group glass-panel rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden ${item.className}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A855F7] opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity duration-500 rounded-full" />
                <div className="absolute top-6 left-6 text-[#8B5CF6]/50 group-hover:text-[#8B5CF6] transition-colors duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight z-10">
                  {item.text}
                </h3>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
