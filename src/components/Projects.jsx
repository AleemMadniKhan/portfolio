import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "University Student Management System",
    description:
      "Full-stack university management platform with dedicated portals for Students, Teachers, and Admins. Features automated JWT refresh via Axios interceptors, dynamic GPA calculation, assessment uploads, and BCNF-normalized database design.",
    highlights: [
      "React 18 + Vite Frontend",
      "Axios JWT Interceptors",
      "Role-Based Portals & Routes",
      "Spring Boot REST API",
    ],
    tech: [
      "Java 21",
      "React",
      "Vite",
      "Axios",
      "Framer Motion",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "Swagger",
    ],
    github: "https://github.com/AleemMadniKhan/StudentManagmentSystem",
    demo: "https://student-managment-system-frontend-eight.vercel.app",
    badge: "Full Stack",
  },
  {
    title: "Spring Security JWT Product API",
    description:
      "Production-ready backend REST API supporting role-based access control, password recovery via email, file image uploads with UUID naming, and refresh token rotation.",
    highlights: [
      "JWT & Refresh Token Flow",
      "Email Password Reset",
      "Image Upload & UUIDs",
    ],
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "Lombok",
      "Swagger",
      "Hibernate",
    ],
    github:
      "https://github.com/AleemMadniKhan/SpringSecurityJwtProductManagement",
    demo: "#",
    badge: "Backend Core",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
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
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 border border-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-accent/30 border border-accent/50 text-[11px] font-mono text-amber-200">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    {/* GitHub Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg bg-card flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {/* Live Demo Link (Renders only if demo URL is provided) */}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-card flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                        aria-label="Live Demo"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-6">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-bg-secondary border border-white/5 text-[11px] font-mono text-slate-400"
                  >
                    {t}
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
