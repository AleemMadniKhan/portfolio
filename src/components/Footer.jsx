import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const SOCIALS = [
  { icon: Github, href: "https://github.com/AleemMadniKhan", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/aleemmadnikhan", label: "LinkedIn" },
  { icon: Mail, href: "mailto:aleem90909m@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10 bg-bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-white">
            Muhammad Aleem Madni Khan
            <span className="text-amber-400">.</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-amber-200 hover:border-amber-400/40 transition-colors shadow-md"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} · All rights reserved.
        </p>
      </div>
    </footer>
  );
}