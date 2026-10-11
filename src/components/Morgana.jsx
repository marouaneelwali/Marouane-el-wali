import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { beep } from '../sound'

const lines = {
  top: "Yo! Welcome to Marouane's Palace. Pick a menu, or use ↑ ↓ + Enter!",
  about: 'This is the Thief profile. Laravel, React, AI... a well-rounded build!',
  experience: 'Two missions cleared, and both were clean jobs. Not bad!',
  skills: 'Check the inventory. PHP and AI workflows are maxed out!',
  projects: 'These are my treasures. Click a card to see the details!',
  contact: "Don't leave without sending a message. Let's work together!",
}

export default function Morgana() {
  const [id, setId] = useState('top')
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setId(e.target.id)),
      { rootMargin: '-45% 0px -45% 0px' }
    )
    Object.keys(lines).forEach((k) => { const el = document.getElementById(k); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  useEffect(() => { beep(1000, 0.05); beep(1400, 0.05) }, [id])
  return (
    <div className="fixed bottom-3 left-3 z-50 flex items-end gap-1 pointer-events-none max-w-[92vw]">
      <div className="h-24 w-16 shrink-0 overflow-hidden drop-shadow-[3px_3px_0_#000]">
        <img src="/assets/morgana.png" alt="Morgana" className="h-24 max-w-none" />
      </div>
      <div className="relative mb-4">
        <span className="absolute -top-3 left-3 bg-white text-p5black font-display text-sm px-2 -skew-x-12 z-10">MORGANA</span>
        <AnimatePresence mode="wait">
          <motion.p key={id} initial={{ x: -30, opacity: 0, scaleX: 0.8 }} animate={{ x: 0, opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.2 }}
            className="clip-card bg-black border-2 border-white text-white px-6 py-3 w-64 md:w-96 text-base md:text-lg font-bold -skew-x-3">
            {lines[id]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}
