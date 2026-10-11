import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { beep } from '../sound'

export default function Intro({ onStart }) {
  useEffect(() => {
    const go = () => { beep(880, 0.15); setTimeout(() => beep(1320, 0.2), 90); onStart() }
    window.addEventListener('keydown', go); window.addEventListener('pointerdown', go)
    return () => { window.removeEventListener('keydown', go); window.removeEventListener('pointerdown', go) }
  }, [onStart])
  return (
    <motion.div
      style={{ clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)' }}
      exit={{ clipPath: 'polygon(100% 0,100% 0,100% 100%,100% 100%)' }}
      transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
      className="fixed inset-0 z-[90] bg-p5black grid place-items-center overflow-hidden">
      <motion.img src="/assets/brush.png" alt="" initial={{ scaleX: 0, rotate: -8 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }} className="absolute w-[130vw] max-w-none -rotate-6 origin-left" />
      <div className="relative text-center">
        <motion.img src="/assets/mask.png" alt="" initial={{ scale: 3, opacity: 0, rotate: 20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 90, delay: 0.3 }}
          className="w-64 md:w-96 mx-auto drop-shadow-[8px_8px_0_#000]" />
        <p className="mt-8 font-display text-3xl md:text-5xl bg-p5black px-6 py-2 -skew-x-12 inline-block animate-flicker">
          PRESS ANY KEY
        </p>
      </div>
    </motion.div>
  )
}
