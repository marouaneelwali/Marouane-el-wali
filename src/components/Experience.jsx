import { motion } from 'framer-motion'
import { Section } from './ui'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" title="EXPERIENCE LOG">
      <img src="/assets/city.png" alt="" className="pointer-events-none absolute right-0 top-10 w-[420px] opacity-25 hidden md:block" />
      <div className="relative max-w-4xl space-y-12 border-l-8 border-p5red pl-8 md:pl-14">
        {experience.map((e, i) => (
          <motion.article key={e.rank}
            initial={{ x: -120, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }} whileHover={{ x: 12 }}
            className="relative clip-card bg-white text-p5black p-7 hover:bg-p5red hover:text-white transition-colors group">
            <span className="absolute -left-[3.2rem] md:-left-[4.2rem] top-6 h-6 w-6 bg-p5black border-4 border-p5red rotate-45" />
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="clip-tag bg-p5black text-white font-display px-4 py-1">{e.rank}</span>
              <span className="font-bold text-p5red group-hover:text-white">{e.date}</span>
            </div>
            <h3 className="font-display text-3xl">{e.role}</h3>
            <p className="font-bold text-xl mb-3">@ {e.org}</p>
            <ul className="list-disc pl-5 space-y-1 font-medium">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
