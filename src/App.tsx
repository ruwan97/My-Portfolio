import { MotionConfig } from 'motion/react'
import { Background, CursorGlow } from './components/Background'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { About, Contact, Experience, Footer, Projects, Showcase, Skills } from './components/Sections'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Showcase />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
