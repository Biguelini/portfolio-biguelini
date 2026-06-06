'use client'

import { motion } from 'framer-motion'

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center group">
      

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[80%] h-[80%] rounded-full bg-brutal-yellow brutal-border brutal-shadow top-10 left-0"
      />


      <motion.div
        animate={{ y: [0, -20, 0], rotate: [-10, -5, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[40%] h-[40%] bg-brutal-pink brutal-border brutal-shadow top-20 right-10"
      />


      <motion.div
        animate={{ y: [0, 20, 0], rotate: [15, 20, 15] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute w-[50%] h-[50%] bg-brutal-blue brutal-border brutal-shadow bottom-10 left-20"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />


      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        className="relative z-10 w-[50%] h-[60%] bg-brutal-bg brutal-border brutal-shadow flex items-center justify-center overflow-hidden"
      >

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#000_2px,_transparent_2.5px)] bg-[length:16px_16px]" />
        
        <div className="relative z-20 text-4xl font-black text-black rotate-[-15deg] bg-brutal-green px-4 py-2 brutal-border">
          DEV
        </div>
      </motion.div>

    </div>
  )
}
