import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Server,
  Code,
  Layout,
  Database,
  Wrench,
  ShieldCheck,
  GitBranch,
} from 'lucide-react'

const CATEGORIES = [
  {
    key: 'backend',
    label: 'Backend',
    icon: Server,
    skills: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'Node.js',
      'Express.js'
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    icon: Layout,
    skills: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Vite',
      'HTML5',
      'CSS3',
      'Axios',
      'React Router',
    ],
  },
  {
    key: 'database',
    label: 'Database',
    icon: Database,
    skills: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'SQL',
      'Database Design',
      'Normalization',
    ],
  },
  {
    key: 'languages',
    label: 'Languages',
    icon: Code,
    skills: [
      'Java',
      'JavaScript',
      'SQL',
      'C',
    ],
  },
  {
    key: 'security',
    label: 'Security',
    icon: ShieldCheck,
    skills: [
      'Spring Security',
      'JWT',
      'Authentication',
      'Authorization',
      'Role-Based Access Control',
    ],
  },
  {
    key: 'tools',
    label: 'Tools',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Swagger',
      'Docker'
    ],
  },
]

export default function Skills() {
  const [active, setActive] = useState('backend')
  const activeCategory = CATEGORIES.find((c) => c.key === active)

  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-bg-secondary/40 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-200/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Skills</span>

          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Technical Skills
          </h2>

          <p className="mt-3 text-sm text-slate-400 max-w-2xl">
            Technologies and tools I use to build secure backend systems and
            full-stack applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon

            return (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active === cat.key
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {active === cat.key && (
                  <motion.span
                    layoutId="skill-tab"
                    className="absolute inset-0 rounded-xl bg-card border border-accent/60 shadow-lg"
                    transition={{
                      type: 'spring',
                      duration: 0.5,
                    }}
                  />
                )}

                <Icon className="relative z-10 w-4 h-4 text-amber-200/80" />

                <span className="relative z-10">
                  {cat.label}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Skills Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 glass-card rounded-2xl p-6 sm:p-8 min-h-[220px] border border-white/10"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                {activeCategory.label}
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Technologies & tools
              </p>
            </div>

            <GitBranch className="w-5 h-5 text-amber-200/50" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap gap-3"
            >
              {activeCategory.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className="px-4 py-2.5 rounded-xl bg-card/80 border border-white/10 text-sm font-mono text-slate-200 hover:border-accent hover:text-amber-100 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 grid sm:grid-cols-3 gap-4"
        >
          <div className="glass-card rounded-xl px-5 py-4 border border-white/10">
            <p className="text-xs text-slate-500 uppercase tracking-wider">
              Backend
            </p>
            <p className="mt-1 text-sm text-slate-200">
              Java & Node.js
            </p>
          </div>

          <div className="glass-card rounded-xl px-5 py-4 border border-white/10">
            <p className="text-xs text-slate-500 uppercase tracking-wider">
              Frontend
            </p>
            <p className="mt-1 text-sm text-slate-200">
              React.js
            </p>
          </div>

          <div className="glass-card rounded-xl px-5 py-4 border border-white/10">
            <p className="text-xs text-slate-500 uppercase tracking-wider">
              Databases
            </p>
            <p className="mt-1 text-sm text-slate-200">
              PostgreSQL · MongoDB · MySQL
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}