import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 30 }), sy = useSpring(y, { stiffness: 500, damping: 30 })
  useEffect(() => {
    const m = (e) => { x.set(e.clientX - 14); y.set(e.clientY - 14) }
    window.addEventListener('mousemove', m)
    return () => window.removeEventListener('mousemove', m)
  }, [x, y])
  return (
    <motion.div style={{ x: sx, y: sy }} className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block">
      <div className="h-7 w-7 bg-white clip-star mix-blend-difference" />
    </motion.div>
  )
}
