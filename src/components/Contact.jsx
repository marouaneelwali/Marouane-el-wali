import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'
import { Section } from './ui'
import { profile } from '../data'
import { beep } from '../sound'

const links = [
  { Icon: Mail, label: 'EMAIL', value: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, label: 'PHONE', value: profile.phone, href: `tel:${profile.phone.replace(/-/g, '')}` },
  { Icon: Linkedin, label: 'LINKEDIN', value: 'marouane-el-wali', href: profile.linkedin },
  { Icon: Github, label: 'GITHUB', value: 'marouaneelwali', href: profile.github },
]
const field = 'w-full bg-white text-p5black p-3 font-bold outline-none border-l-8 border-p5red focus:bg-p5red focus:text-white placeholder:text-black/40 focus:placeholder:text-white/60 transition-colors'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', msg: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const send = (e) => {
    e.preventDefault(); beep(1000, 0.15)
    const body = `${f.msg}\n\n— ${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Calling Card from ' + f.name)}&body=${encodeURIComponent(body)}`
  }
  return (
    <Section id="contact" title="CALLING CARD">
      <img src="/assets/mask.png" alt="" className="pointer-events-none absolute right-6 bottom-10 w-72 opacity-15 hidden md:block" />
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl">
        <form onSubmit={send} className="space-y-4">
          <input required className={field} placeholder="YOUR NAME" value={f.name} onChange={set('name')} />
          <input required type="email" className={field} placeholder="YOUR EMAIL" value={f.email} onChange={set('email')} />
          <textarea required rows={5} className={field} placeholder="YOUR MESSAGE" value={f.msg} onChange={set('msg')} />
          <motion.button whileHover={{ scale: 1.04, rotate: -1 }} whileTap={{ scale: 0.96 }} type="submit"
            className="clip-btn flex items-center gap-3 bg-p5red text-white font-display text-3xl px-10 py-4 border-b-8 border-white hover:bg-white hover:text-p5red transition-colors">
            <Send /> SEND CARD
          </motion.button>
        </form>

        <motion.div initial={{ rotate: 8, opacity: 0, y: 60 }} whileInView={{ rotate: -4, opacity: 1, y: 0 }} viewport={{ once: true }}
          className="self-start bg-black border-4 border-white p-8 shadow-[12px_12px_0_#e60012] relative">
          <p className="font-display text-p5red text-2xl">{f.name ? `TO: ${profile.name.toUpperCase()}` : 'TO: MAROUANE'}</p>
          <p className="font-display text-4xl md:text-5xl mt-4 break-words leading-tight">
            {f.msg ? `"${f.msg.slice(0, 120)}"` : "WE'LL BE TAKING YOUR PROJECT."}
          </p>
          <p className="font-display text-xl text-white/60 mt-6 text-right">{f.name ? `— ${f.name}` : '— THE PHANTOM CLIENTS'}</p>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mt-16">
        {links.map(({ Icon, label, value, href }, i) => (
          <motion.a key={label} href={href} target="_blank" rel="noreferrer"
            initial={{ x: i % 2 ? 100 : -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            whileHover={{ scale: 1.04, rotate: -1 }} whileTap={{ scale: 0.97 }}
            className="clip-btn flex items-center gap-5 bg-white text-p5black hover:bg-p5red hover:text-white transition-colors px-8 py-5 border-b-8 border-p5black">
            <Icon size={38} />
            <div className="min-w-0"><div className="font-display text-2xl">{label}</div><div className="font-bold truncate">{value}</div></div>
          </motion.a>
        ))}
      </div>
      <p className="mt-16 text-white/50 font-bold">© {new Date().getFullYear()} {profile.name} — PRESS “A” FOR ALL-OUT ATTACK.</p>
    </Section>
  )
}
