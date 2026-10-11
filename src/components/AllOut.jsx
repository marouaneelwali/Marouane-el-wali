import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { beep } from '../sound'

export default function AllOut() {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const k = (e) => {
      if (on || e.key.toLowerCase() !== 'a' || ['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return
      setOn(true)
      ;[300, 500, 700, 1000].forEach((f, i) => setTimeout(() => beep(f, 0.12, 'sawtooth'), i * 90))
      setTimeout(() => setOn(false), 1500)
    }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [on])
  return (
    <AnimatePresence>
      {on && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] bg-black grid place-items-center overflow-hidden pointer-events-none">
          <motion.img src="/assets/brush.png" alt="" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} className="absolute w-[140vw] max-w-none -rotate-6" />
          <motion.h2 initial={{ scale: 4, rotate: -14, opacity: 0 }} animate={{ scale: 1, rotate: -6, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="relative font-display text-6xl md:text-9xl text-white drop-shadow-[8px_8px_0_#000]">
            ALL-OUT ATTACK!
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
