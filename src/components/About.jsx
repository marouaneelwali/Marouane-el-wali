import { motion } from 'framer-motion'
import { Section, Pips } from './ui'
import { profile, stats, education } from '../data'

export default function About() {
  return (
    <Section id="about" title="ABOUT ME">
      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
          className="clip-card bg-white text-p5black p-8 border-l-[12px] border-p5red">
          <h3 className="font-display text-3xl text-p5red mb-3">PROFILE</h3>
          <p className="text-xl leading-snug font-medium">{profile.summary}</p>
          <h3 className="font-display text-3xl text-p5red mt-8 mb-3">ACADEMY LOG</h3>
          <ul className="space-y-2">
            {education.map(([d, s, y]) => (
              <li key={d} className="flex justify-between gap-4 border-b border-black/20 pb-1">
                <span><b>{d}</b> — {s}</span><span className="text-p5red font-bold whitespace-nowrap">{y}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
          className="clip-card bg-p5black border-4 border-p5red p-8 shadow-[10px_10px_0_#e60012]">
          <h3 className="font-display text-3xl text-p5red mb-6">CHARACTER STATS</h3>
          <div className="space-y-5">
            {stats.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4">
                <span className="font-display text-2xl tracking-wide">{k}</span>
                <Pips level={v} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
