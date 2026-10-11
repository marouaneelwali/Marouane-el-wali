import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { profile, menu } from '../data'
import { beep } from '../sound'

const go = (id) => { beep(900, 0.1); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

export default function Hero() {
  const [sel, setSel] = useState(0)
  useEffect(() => {
    const k = (e) => {
      if (window.scrollY > window.innerHeight / 2) return
      if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => (s + 1) % menu.length); beep(600) }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => (s - 1 + menu.length) % menu.length); beep(600) }
      if (e.key === 'Enter') go(menu[sel].id)
    }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [sel])

  return (
    <section id="top" className="relative min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-p5red clip-hero" />
      <div className="absolute inset-0 halftone opacity-30" />
      <img src="/assets/city.png" alt="" className="absolute -bottom-10 -left-10 w-[480px] opacity-30 pointer-events-none" />
      <motion.img src="/assets/shard.png" alt="" initial={{ x: 400, opacity: 0 }} animate={{ x: 0, opacity: 0.9 }}
        transition={{ delay: 0.5, duration: 0.8 }} className="absolute right-0 bottom-0 w-[55%] max-w-3xl pointer-events-none hidden md:block" />
      <motion.img src="/assets/joker.png" alt="" initial={{ y: 200, opacity: 0 }} animate={{ y: [0, -14, 0], opacity: 1 }}
        transition={{ y: { repeat: Infinity, duration: 4, ease: 'easeInOut' }, opacity: { delay: 0.6 } }}
        className="absolute bottom-0 left-[32%] h-[62vh] hidden lg:block drop-shadow-[10px_10px_0_#000] z-10 pointer-events-none" />

      <div className="relative z-20 grid md:grid-cols-2 gap-12 w-full px-6 md:px-16 pt-20 pb-48">
        <motion.div initial={{ x: -250, opacity: 0, rotate: -10 }} animate={{ x: 0, opacity: 1, rotate: -4 }} transition={{ type: 'spring', stiffness: 80 }}>
          <h1 className="font-display text-7xl md:text-9xl leading-[.9] text-white drop-shadow-[6px_6px_0_#000]">
            <span data-text="TAKE" className="glitch block">TAKE</span>
            <span data-text="YOUR" className="glitch block">YOUR</span>
            <span className="inline-block bg-p5black px-4 -skew-x-12 text-p5red">CODE</span>
          </h1>
          <div className="relative mt-8 inline-block">
            <img src="/assets/brush.png" alt="" className="absolute -inset-x-8 -inset-y-4 w-[calc(100%+4rem)] h-[calc(100%+2rem)] max-w-none object-fill" />
            <p className="relative font-display text-2xl md:text-3xl text-white px-2 animate-flicker">{profile.name}</p>
          </div>
          <p className="mt-5 max-w-md text-xl font-bold">{profile.title}</p>
          <p className="text-white/70">{profile.stack}</p>
        </motion.div>

        <nav className="flex flex-col gap-4 justify-center md:items-end">
          {menu.map((m, i) => (
            <motion.a key={m.id} href={`#${m.id}`} onMouseEnter={() => setSel(i)}
              onClick={(e) => { e.preventDefault(); go(m.id) }}
              initial={{ x: 300, opacity: 0 }} animate={{ x: sel === i ? -24 : 0, opacity: 1, scale: sel === i ? 1.06 : 1 }}
              transition={{ delay: 0.4 + i * 0.12, type: 'spring', stiffness: 100 }}
              className={`clip-btn flex items-center justify-between gap-6 w-full md:w-96 px-8 py-4 font-display text-3xl md:text-4xl border-l-8 border-p5red transition-colors
                ${sel === i ? 'bg-p5black text-p5red' : 'bg-white text-p5black'} ${i % 2 ? 'md:-rotate-1' : 'md:rotate-1'}`}>
              {m.label}
              <ChevronRight className={sel === i ? 'opacity-100' : 'opacity-0'} size={36} />
            </motion.a>
          ))}
          <p className="hidden md:block font-bold text-white/60 mt-2">↑ ↓ SELECT · ENTER CONFIRM</p>
        </nav>
      </div>
    </section>
  )
}
