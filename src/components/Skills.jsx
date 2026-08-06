import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Server, Code, Layout, Database, Wrench } from 'lucide-react'

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
      'REST APIs',
      'JWT Authentication',
      'Refresh Token',
      'Role-Based Authorization',
      'Permission-Based Authorization',
      'DTO Mapping',
      'Validation',
      'Global Exception Handling'
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    icon: Layout,
    skills: [
      'React.js',
      'React Router',
      'Axios',
      'Context API',
      'JWT Authentication',
      'Protected Routes',
      'Tailwind CSS',
      'Responsive UI'
    ],
  },
  {
    key: 'database',
    label: 'Database',
    icon: Database,
    skills: [
      'MySQL',
      'Spring Data JPA',
      'Relational Database Design',
      'ER Diagrams',
      'Normalization (1NF–BCNF)',
      'SQL'
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
      'HTML5',
      'CSS3',
      'C'
    ],
  },
  {
    key: 'tools',
    label: 'Tools',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'Swagger',
      'Postman',
      'Maven',
      'IntelliJ IDEA',
      'VS Code',
      'MySQL Workbench'
    ],
  },
]

export default function Skills() {
  const [active, setActive] = useState('backend')
  const activeCategory = CATEGORIES.find((c) => c.key === active)

  return (
    <section id="skills" className="relative py-28 px-6 bg-bg-secondary/40">
      <div className="max-w-5xl mx-auto">
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
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
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
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}

              <cat.icon className="relative w-4 h-4 text-amber-200/80" />

              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-8 glass-card rounded-2xl p-6 sm:p-8 min-h-[220px]">
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
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="px-4 py-2.5 rounded-xl bg-card/80 border border-white/10 text-sm font-mono text-slate-200 hover:border-accent hover:text-amber-100 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}