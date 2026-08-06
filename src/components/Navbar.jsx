import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl"
    >
      <nav className="glass rounded-2xl px-5 py-3 flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-md bg-bg-secondary/70">
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 font-display font-bold text-white group">
          <Terminal className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
          <span className="text-sm sm:text-base tracking-tight font-mono">aleem.dev</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.id}>
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo(link.id)}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </motion.button>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollTo('contact')}
          className="hidden md:block rounded-xl bg-accent hover:bg-accent-light px-4 py-2 text-sm font-semibold text-white transition-colors border border-amber-200/20 shadow-md shadow-accent/20"
        >
          Let's talk
        </motion.button>

        <button className="md:hidden text-slate-300 hover:text-white transition-colors" onClick={() => setOpen((o) => !o)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="glass mt-2 rounded-2xl overflow-hidden md:hidden border border-white/10 shadow-2xl bg-bg-secondary/90"
          >
            <ul className="flex flex-col p-3 gap-1">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full text-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white border border-amber-200/20 shadow-md"
                >
                  Let's talk
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}