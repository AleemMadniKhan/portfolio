import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Code2,
  Rocket,
  MapPin,
  Target,
  Sparkles,
} from "lucide-react";

const TIMELINE = [
  {
    icon: GraduationCap,
    year: "2025",
    title: "Enrolled — BS Software Engineering",
    place: "Sindh Madressatul Islam University (SMIU), Karachi",
    detail:
      "Started degree coursework covering discrete mathematics, Object Oriented Programming, Database Systems, and core logic design.",
  },
  {
    icon: BookOpen,
    year: "Current",
    title: "Academic Progress & Core Practice",
    place: "Karachi, Pakistan",
    detail:
      "Deepening understanding of relational databases, multivariable calculus, and software construction.",
  },
  {
    icon: Code2,
    year: "2026",
    title: "Backend & Full-Stack Specialization",
    place: "Self-directed Architecture",
    detail:
      "Building API layers with Spring Boot, Spring Security, JWT auth mechanisms, and React user interfaces.",
  },
  {
    icon: Rocket,
    year: "Goal",
    title: "Industry Placement",
    place: "Software Engineering Internship",
    detail:
      "Targeting backend engineering roles to contribute clean, maintainable code to real-world applications.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-6 bg-bg-primary overflow-hidden"
    >
      {/* Background Glow Overlay */}
      <div className="absolute top-1/4 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-200/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-200/80" />
            <span>about</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Identity & Academic Journey
          </h2>
        </motion.div>

        {/* Top Cards: Background & Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: GraduationCap,
              title: "Education",
              subtitle: "BS Software Engineering",
              detail: "Sindh Madressatul Islam University (SMIU)",
            },
            {
              icon: MapPin,
              title: "Location",
              subtitle: "Karachi, Pakistan",
              detail: "Open to Remote & Local Opportunities",
            },
            {
              icon: Target,
              title: "Current Focus",
              subtitle: "Spring Boot · React · MySQL",
              detail: "Mastering Scalable Microservices & APIs",
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card rounded-2xl p-6 space-y-3 border border-white/10 hover:border-amber-400/40 transition-colors shadow-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/30 border border-amber-200/30 flex items-center justify-center text-amber-200">
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">
                {card.title}
              </h3>
              <p className="text-sm text-slate-300 font-medium">
                {card.subtitle}
              </p>
              <p className="text-xs text-slate-500">{card.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Journey Timeline */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-display font-bold text-white mb-8 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-amber-200/80" /> Learning Journey
          </motion.h3>

          <div className="relative border-l border-amber-500/20 ml-4 sm:ml-6 space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-8 sm:pl-10 group"
              >
                <motion.div
                  whileHover={{ scale: 1.25, rotate: 12 }}
                  className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-bg-secondary border border-amber-400/60 flex items-center justify-center text-amber-200 shadow-md group-hover:border-amber-300 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass-card rounded-2xl p-6 border border-white/10 group-hover:border-amber-500/30 transition-all shadow-lg"
                >
                  <span className="font-mono text-xs text-amber-200/90 font-semibold uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                    {item.year}
                  </span>
                  <h4 className="font-display font-semibold text-lg text-white mt-3">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 mb-3">
                    {item.place}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
