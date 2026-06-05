'use client'

import { motion } from 'framer-motion'

export function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
        >
          {/* Subtle glow inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6] opacity-10 blur-[80px] rounded-full pointer-events-none" />
          
          <motion.h2 
            variants={textVariants}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-white"
          >
            Sobre mim
          </motion.h2>
          
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
            <motion.p variants={textVariants} transition={{ duration: 0.8 }}>
              Olá! Sou <strong className="text-white font-medium">João Pedro Biguelini</strong>, Desenvolvedor Full Stack apaixonado por tecnologia desde os 13 anos, quando escrevi minhas primeiras linhas de código. Desde então, transformei a programação em uma carreira construída através de estudos, projetos práticos e experiência profissional.
            </motion.p>
            
            <motion.p variants={textVariants} transition={{ duration: 0.8 }}>
              Minha trajetória começou com a formação técnica em Informática durante o ensino médio e continua atualmente na graduação em <strong className="text-white font-medium">Análise e Desenvolvimento de Sistemas pela UTFPR</strong>. Além disso, atuo como Técnico na Sanepar, onde desenvolvo minha capacidade de resolver problemas, trabalhar em equipe e lidar com desafios em ambientes de alta responsabilidade.
            </motion.p>
            
            <motion.p variants={textVariants} transition={{ duration: 0.8 }}>
              Tenho experiência no desenvolvimento de aplicações web, mobile e APIs, atuando em todas as etapas do processo, desde a modelagem de banco de dados até a implementação de interfaces modernas e escaláveis. Trabalho principalmente com <strong className="text-[#A855F7] font-medium">React, Next.js, Node.js e Laravel</strong>, além de desenvolver aplicações mobile utilizando <strong className="text-[#A855F7] font-medium">Flutter e React Native</strong>.
            </motion.p>
            
            <motion.p variants={textVariants} transition={{ duration: 0.8 }}>
              Ao longo da minha jornada, adquiri experiência com tecnologias como TypeScript, JavaScript, PHP, Spring Boot, Python, MySQL, PostgreSQL, MongoDB e Firebase. Também possuo conhecimentos em Docker, Linux, Git, AWS e boas práticas de arquitetura e desenvolvimento, incluindo Clean Code, componentização, integração de APIs e versionamento de código.
            </motion.p>

            <motion.p variants={textVariants} transition={{ duration: 0.8 }}>
              Acredito que a tecnologia é uma ferramenta para <strong className="text-white font-medium">transformar ideias em soluções reais</strong>. Por isso, busco constantemente evoluir minhas habilidades, aprender novas tecnologias e desenvolver projetos que unam performance, experiência do usuário e qualidade de código.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
