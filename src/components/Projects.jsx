import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Section } from './ui'
import { projects } from '../data'
import { beep } from '../sound'

export default function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <Section id="projects" title="TREASURES">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {projects.map((p, i) => (
          <motion.article key={p.name} layout onClick={() => { setOpen(open === i ? null : i); beep(800, 0.06) }}
            initial={{ y: 80, opacity: 0, rotate: i % 2 ? 2 : -2 }} whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: true }} whileHover={{ y: -8, rotate: -1 }}
            className="group clip-card bg-white text-p5black hover:bg-p5red hover:text-white transition-colors p-7 border-b-8 border-p5black">
            <span className="clip-tag bg-p5black text-white font-display px-4 py-1">{p.rank}</span>
            <h3 className="font-display text-4xl mt-3">{p.name}</h3>
            <p className="font-medium mt-2">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tags.map((t) => <span key={t} className="clip-tag bg-p5red group-hover:bg-p5black text-white px-3 font-bold">{t}</span>)}
            </div>
            <AnimatePresence>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <ul className="list-disc pl-5 mt-4 space-y-1 font-medium">{p.details.map((d) => <li key={d}>{d}</li>)}</ul>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 bg-p5black text-white font-display px-5 py-2 -skew-x-12">LIVE <ExternalLink size={18} /></a>}
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 bg-p5black text-white font-display px-5 py-2 -skew-x-12">CODE <Github size={18} /></a>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
