import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section } from './ui'
import { skills } from '../data'
import { beep } from '../sound'

export default function Skills() {
  const cats = Object.keys(skills)
  const [cat, setCat] = useState(cats[0])
  return (
    <Section id="skills" title="SKILLS MATRIX">
      <div className="grid lg:grid-cols-[320px_1fr] gap-8">
        <div className="flex lg:flex-col flex-wrap gap-3">
          {cats.map((c) => (
            <motion.button key={c} onClick={() => { setCat(c); beep(760, 0.06) }} whileHover={{ x: 10 }}
              className={`clip-btn text-left px-6 py-3 font-display text-xl md:text-2xl border-l-8 border-p5red transition-colors
                ${cat === c ? 'bg-p5red text-white' : 'bg-white text-p5black'}`}>
              {c}
            </motion.button>
          ))}
        </div>
        <div className="clip-card bg-p5black border-4 border-white p-6 md:p-10 min-h-[340px] shadow-[10px_10px_0_#e60012]">
          <AnimatePresence mode="wait">
            <motion.ul key={cat} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} className="space-y-6">
              {skills[cat].map(([name, lvl], i) => (
                <li key={name}>
                  <div className="flex justify-between font-display text-2xl mb-1">
                    <span>{name}</span><span className="text-p5red">LV.{lvl}</span>
                  </div>
                  <div className="h-5 bg-white/15 -skew-x-12 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${lvl * 20}%` }} transition={{ delay: i * 0.08, duration: 0.6 }}
                      className="h-full bg-p5red" />
                  </div>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
