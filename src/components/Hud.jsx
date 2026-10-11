import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import { setMuted, beep } from '../sound'

export default function Hud() {
  const [m, setM] = useState(false)
  const { scrollYProgress } = useScroll()
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })
  return (
    <>
      <motion.div style={{ scaleX: w }} className="fixed top-0 left-0 right-0 h-2 bg-p5red origin-left z-[60] shadow-[0_2px_0_#fff]" />
      <button onClick={() => { setMuted(!m); setM(!m); beep(700) }} aria-label="Toggle sound"
        className="fixed top-5 right-4 z-[60] bg-white text-p5black p-3 -skew-x-12 hover:bg-p5red hover:text-white transition">
        {m ? <VolumeX size={22} /> : <Volume2 size={22} />}
      </button>
    </>
  )
}
