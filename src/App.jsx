import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Cursor from './components/Cursor'
import Intro from './components/Intro'
import Hud from './components/Hud'
import Morgana from './components/Morgana'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import AllOut from './components/AllOut'
import { beep } from './sound'

export default function App() {
  const [started, setStarted] = useState(false)
  useEffect(() => { document.body.style.overflow = started ? '' : 'hidden' }, [started])
  return (
    <div onMouseOver={(e) => e.target.closest?.('a,button') && beep(740, 0.03)}>
      <AnimatePresence>{!started && <Intro key="intro" onStart={() => setStarted(true)} />}</AnimatePresence>
      <Cursor /><Hud /><AllOut />
      {started && <Morgana />}
      <Hero /><About /><Experience /><Skills /><Projects /><Contact />
    </div>
  )
}
