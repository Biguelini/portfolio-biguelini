'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Maximize, CheckCircle, MessageSquare } from 'lucide-react'

const items = [
  { text: 'Código limpo', icon: Sparkles, color: 'bg-brutal-pink', className: 'col-span-1 md:col-span-2 md:row-span-1' },
  { text: 'Performance', icon: Zap, color: 'bg-brutal-yellow', className: 'col-span-1 md:col-span-1 md:row-span-2' },
  { text: 'Escalabilidade', icon: Maximize, color: 'bg-brutal-blue', className: 'col-span-1 md:col-span-1 md:row-span-2' },
  { text: 'Boas práticas', icon: CheckCircle, color: 'bg-white', className: 'col-span-1 md:col-span-1 md:row-span-1' },
  { text: 'Comunicação clara', icon: MessageSquare, color: 'bg-brutal-green', className: 'col-span-1 md:col-span-2 md:row-span-1' },
]

export function Differentials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-brutal-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-6"
        >
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 0.98 }}
                className={`group ${item.color} brutal-border brutal-shadow p-8 flex flex-col justify-between relative overflow-hidden transition-transform ${item.className}`}
              >
                <div className="bg-white brutal-border w-16 h-16 flex items-center justify-center text-black brutal-shadow">
                  <Icon size={32} strokeWidth={2} />
                </div>
                <h3 className="text-3xl font-black text-black tracking-tight uppercase">
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
