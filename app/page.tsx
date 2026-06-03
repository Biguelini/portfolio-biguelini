'use client'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Technologies } from './components/Technologies'
import { Differentials } from './components/Differentials'
import { Projects } from './components/Projects'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Differentials />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
