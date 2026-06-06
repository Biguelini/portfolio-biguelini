'use client'

import { motion } from 'framer-motion'

export function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-brutal-bg">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="bg-brutal-green p-8 md:p-12 brutal-border brutal-shadow relative"
        >
          
          <motion.h2 
            variants={textVariants}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black mb-10 tracking-tight text-brutal-fg uppercase"
          >
            <span className="bg-brutal-bg px-2">Sobre</span><br />
            <span className="bg-brutal-bg px-2">mim</span>
          </motion.h2>
          
          <div className="space-y-6 text-lg md:text-xl text-brutal-fg font-medium leading-relaxed bg-brutal-bg p-6 brutal-border">
            <motion.p variants={textVariants}>
              Olá! Sou <strong className="font-black uppercase">João Pedro Biguelini</strong>, Desenvolvedor Full Stack apaixonado por tecnologia desde os 13 anos. Transformei a programação em uma carreira construída através de estudos, projetos práticos e experiência sólida.
            </motion.p>
            
            <motion.p variants={textVariants}>
              Iniciei com formação técnica em Informática e continuo na graduação em <strong className="font-black uppercase">Análise e Desenvolvimento de Sistemas pela UTFPR</strong>. Atuo também na Sanepar, resolvendo problemas reais de alta responsabilidade.
            </motion.p>
            
            <motion.p variants={textVariants}>
              Trabalho com aplicações web, mobile e APIs, desde o banco de dados até interfaces de ponta. Foco principalmente em <strong className="bg-brutal-pink text-white px-1 font-black">React, Next.js, Node.js e Laravel</strong>, além de apps com <strong className="bg-brutal-blue text-white px-1 font-black">Flutter e React Native</strong>.
            </motion.p>
            
            <motion.p variants={textVariants}>
              Acredito que a tecnologia é a melhor ferramenta para <strong className="bg-brutal-yellow font-black px-1 uppercase">transformar ideias em soluções</strong> rápidas, escaláveis e esteticamente impossíveis de ignorar.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
