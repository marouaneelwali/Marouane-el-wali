import { motion } from 'framer-motion'

export const Section = ({ id, title, children }) => (
  <section id={id} className="relative px-6 md:px-16 py-24 overflow-hidden">
    <motion.h2
      initial={{ x: -300, opacity: 0, skewX: -20 }}
      whileInView={{ x: 0, opacity: 1, skewX: -12 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className="inline-block bg-p5red text-white font-display text-5xl md:text-7xl px-8 py-2 mb-14 shadow-[8px_8px_0_#fff]"
    >
      {title}
    </motion.h2>
    {children}
  </section>
)

export const Pips = ({ level, max = 5 }) => (
  <div className="flex gap-1">
    {Array.from({ length: max }).map((_, i) => (
      <span key={i} className={`h-3 w-5 -skew-x-12 ${i < level ? 'bg-p5red' : 'bg-white/20'}`} />
    ))}
  </div>
)
