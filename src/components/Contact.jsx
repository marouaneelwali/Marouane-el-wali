import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { Section } from './ui'
import { profile } from '../data'

const links = [
  { Icon: Mail, label: 'EMAIL', value: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, label: 'PHONE', value: profile.phone, href: `tel:${profile.phone.replace(/-/g, '')}` },
  { Icon: Linkedin, label: 'LINKEDIN', value: 'marouane-el-wali', href: profile.linkedin },
  { Icon: Github, label: 'GITHUB', value: 'marouaneelwali', href: profile.github },
]

export default function Contact() {
  return (
    <Section id="contact" title="CONTACT">
      <img src="/assets/mask.png" alt="" className="pointer-events-none absolute right-6 bottom-10 w-72 opacity-15 hidden md:block" />
      <p className="font-display text-4xl md:text-6xl mb-10 max-w-3xl">
        READY TO <span className="text-p5red">STEAL</span> YOUR NEXT PROJECT?
      </p>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
        {links.map(({ Icon, label, value, href }, i) => (
          <motion.a key={label} href={href} target="_blank" rel="noreferrer"
            initial={{ x: i % 2 ? 100 : -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            whileHover={{ scale: 1.04, rotate: -1 }} whileTap={{ scale: 0.97 }}
            className="clip-btn flex items-center gap-5 bg-white text-p5black hover:bg-p5red hover:text-white transition-colors px-8 py-5 border-b-8 border-p5black">
            <Icon size={38} />
            <div className="min-w-0">
              <div className="font-display text-2xl">{label}</div>
              <div className="font-bold truncate">{value}</div>
            </div>
          </motion.a>
        ))}
      </div>
      <p className="mt-16 text-white/50 font-bold">© {new Date().getFullYear()} {profile.name} — ALL OUT ATTACK.</p>
    </Section>
  )
}
