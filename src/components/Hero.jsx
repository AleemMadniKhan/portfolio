import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Terminal as TermIcon,
  Sparkles,
  Server,
} from "lucide-react";
import profileImg from "../public/profile.png";

const MovingDotsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      if (!canvas.parentElement) return;

      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const DOT_COUNT = Math.min(
      Math.floor((canvas.width * canvas.height) / 11000),
      75
    );

    const dots = Array.from({ length: DOT_COUNT }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 1,
      baseAlpha: Math.random() * 0.1 + 0.05,
      pulseSpeed: Math.random() * 0.015 + 0.01,
      pulseAngle: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        dot.pulseAngle += dot.pulseSpeed;

        const currentAlpha =
          dot.baseAlpha + Math.sin(dot.pulseAngle) * 0.05;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(252, 211, 77, ${currentAlpha})`;
        ctx.shadowColor = "rgba(251, 191, 36, 0.1)";
        ctx.shadowBlur = 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

const COMMANDS = {
  help: "Available commands: whoami, skills, focus, contact, clear",

  whoami:
    "Muhammad Aleem Madni Khan — Full Stack Developer Intern @ Finovo Global & Software Engineering Student @ SMIU.",

  skills:
    "Backend: Java, Spring Boot, Node.js, Express.js, REST APIs | Frontend: React.js | DB: PostgreSQL, MongoDB, MySQL",

  focus:
    "Building practical full-stack applications with a strong focus on backend engineering and scalable APIs.",

  contact:
    "Email: aleem90909m@gmail.com | GitHub: github.com/AleemMadniKhan",
};

function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { cmd: "whoami", output: COMMANDS.whoami },
    { cmd: "focus", output: COMMANDS.focus },
  ]);

  const [input, setInput] = useState("");

  const handleCommand = (e) => {
    e.preventDefault();

    const trimmed = input.trim().toLowerCase();

    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
    } else if (COMMANDS[trimmed]) {
      setHistory((prev) => [
        ...prev,
        {
          cmd: trimmed,
          output: COMMANDS[trimmed],
        },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          cmd: trimmed,
          output: `Command not found: '${trimmed}'. Type 'help' for options.`,
        },
      ]);
    }

    setInput("");
  };

  return (
    <div className="glass rounded-2xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm border border-white/10 w-full max-w-full">
      <div className="flex items-center justify-between px-3 sm:px-4 py-3 border-b border-white/10 bg-bg-secondary/80">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-amber-500/60" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/60" />

          <span className="ml-1 sm:ml-2 text-slate-400 flex items-center gap-1.5 text-xs truncate">
            <TermIcon className="w-3.5 h-3.5 text-amber-200/70 shrink-0" />
            aleem@dev:~
          </span>
        </div>

        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-sans shrink-0">
          Terminal
        </span>
      </div>

      <div className="p-4 sm:p-5 h-[260px] sm:h-[280px] overflow-y-auto space-y-3 scrollbar-thin">
        <p className="text-slate-500 italic">
          Type{" "}
          <span className="text-amber-200/80 font-bold">'help'</span>{" "}
          to see available commands.
        </p>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-amber-200/90">
              <span>&gt;</span>
              <span className="break-all">{item.cmd}</span>
            </div>

            <div className="text-slate-300 pl-4 border-l border-amber-500/30 break-words">
              {item.output}
            </div>
          </div>
        ))}

        <form
          onSubmit={handleCommand}
          className="flex items-center gap-2 pt-1"
        >
          <span className="text-amber-400 font-bold">&gt;</span>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type command..."
            className="bg-transparent text-slate-100 outline-none w-full font-mono placeholder:text-slate-600"
          />
        </form>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-bg-primary"
    >
      <MovingDotsBackground />

      <div className="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute top-1/2 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-200/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          <div className="section-eyebrow mb-6 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-200/80" />

            <span>Full Stack Developer · Karachi, PK</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-6">
            <motion.div
              className="relative group cursor-pointer shrink-0"
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/40 via-amber-500/30 to-amber-200/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-70 group-hover:opacity-100" />

              <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full p-1 bg-bg-secondary border border-amber-200/30 shadow-2xl overflow-hidden">
                <img
                  src={profileImg}
                  alt="Muhammad Aleem Madni Khan"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute bottom-1 right-1 bg-bg-primary p-1 rounded-full border border-white/10 shadow-lg">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
                </span>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -top-1 -right-2 glass px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/15 text-[11px] sm:text-xs font-mono text-amber-200 flex items-center gap-1 shadow-lg"
              >
                <Server className="w-3 h-3 text-amber-300" />

                <span>Java · Node</span>
              </motion.div>
            </motion.div>

            <div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white">
                Muhammad Aleem <br />

                <span className="bg-gradient-to-r from-amber-100 via-amber-200/90 to-amber-500/60 bg-clip-text text-transparent">
                  Madni Khan
                </span>
              </h1>
            </div>
          </div>

          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            Building secure and scalable full-stack applications with{" "}
            <span className="text-slate-100 font-medium">
              Java & Spring Boot
            </span>
            ,{" "}
            <span className="text-slate-100 font-medium">
              Node.js & Express
            </span>
            ,{" "}
            <span className="text-slate-100 font-medium">
              React.js
            </span>
            , and{" "}
            <span className="text-slate-100 font-medium">
              modern database systems
            </span>
            .
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto rounded-xl bg-accent hover:bg-accent-light px-6 py-3 text-sm font-semibold text-white transition-all shadow-lg shadow-accent/20 border border-amber-200/20 text-center"
            >
              View Projects
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();

                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto rounded-xl border border-white/10 bg-card/30 hover:bg-card/60 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors text-center"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            {[
              {
                icon: Github,
                href: "https://github.com/AleemMadniKhan",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/aleemmadnikhan",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:aleem90909m@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -2 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-400/50 transition-colors"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          <InteractiveTerminal />
        </motion.div>
      </div>
    </section>
  );
}