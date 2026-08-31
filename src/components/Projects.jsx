import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "University Student Management System",
    description:
      "Full-stack university management platform with dedicated portals for Students, Teachers, and Admins. Includes authentication, role-based authorization, GPA calculation, assessment management, and normalized database design.",
    highlights: [
      "React + Vite Frontend",
      "JWT & Refresh Tokens",
      "Role-Based Authorization",
      "Spring Boot REST API",
    ],
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "React",
      "MySQL",
      "Hibernate",
      "Swagger",
    ],
    github: "https://github.com/AleemMadniKhan/StudentManagmentSystem",
    demo: "https://student-managment-system-frontend-eight.vercel.app",
    badge: "Full Stack",
  },

  {
    title: "Spring Security JWT Product API",
    description:
      "Backend REST API focused on secure authentication and authorization with refresh tokens, password recovery, file uploads, role-based access control, and clean API architecture.",
    highlights: [
      "JWT & Refresh Token Flow",
      "Role-Based Authorization",
      "Password Recovery",
      "Image Upload & UUIDs",
    ],
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "Hibernate",
      "Swagger",
    ],
    github:
      "https://github.com/AleemMadniKhan/SpringSecurityJwtProductManagement",
    demo: null,
    badge: "Backend",
  },

  {
    title: "Finovo Global — Time Tracking Module",
    description:
      "Full-stack internship project developed at Finovo Global, contributing to a time and activity tracking module with authentication, request logging, work sessions, and database integration.",
    highlights: [
      "Full Stack Internship Work",
      "REST API Development",
      "Request Logging",
      "Authentication & Sessions",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "React",
      "JWT",
    ],
    github:
      "https://github.com/shafisani36/WatsappChatFinovo/tree/feat/request-logging-database",
    demo: null,
    badge: "Internship",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-4 sm:px-6 bg-bg-primary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">projects</span>

          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Engineered Solutions
          </h2>

          <p className="mt-3 text-sm text-slate-400 max-w-2xl">
            A selection of projects showcasing my experience across Java,
            Spring Boot, Node.js, React, and modern database technologies.
          </p>
        </motion.div>

        {/* All Projects in One Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative glass-card rounded-2xl p-6 flex flex-col justify-between min-h-[430px] transition-all duration-300 border border-white/10 hover:border-amber-400/30"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-2.5 py-1 rounded-md bg-accent/30 border border-accent/50 text-[11px] font-mono text-amber-200">
                    {project.badge}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg bg-card flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-400/40 border border-transparent transition-all"
                      aria-label="GitHub Repository"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-card flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-400/40 border border-transparent transition-all"
                        aria-label="Live Demo"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-lg text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-light shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="px-2.5 py-1 rounded-md bg-bg-secondary border border-white/5 text-[11px] font-mono text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}