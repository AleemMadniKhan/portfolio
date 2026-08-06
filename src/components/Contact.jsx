import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

const INITIAL = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (field) => (e) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (touched[field]) setErrors(validate(next));
  };

  const handleBlur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  };

  const showToast = useCallback((type, text) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 3500);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validationErrors).length > 0) {
      showToast("error", "Please fix the highlighted fields.");
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "97469095-bf54-4fd6-9fef-4eb7061126b3");
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setValues(INITIAL);
        setTouched({});
        setErrors({});
        showToast("success", "Message sent — I'll reply soon.");
      } else {
        showToast("error", "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      showToast("error", "Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass = (field) =>
    `w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 ${
      touched[field] && errors[field]
        ? "border-red-400/60 focus:border-red-400 focus:ring-1 focus:ring-red-400"
        : "border-white/10 focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60"
    }`;

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 bg-bg-primary overflow-hidden">
      <div className="absolute top-1/3 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-200/80" />
            <span>contact</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's build something
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed text-sm sm:text-base">
            Have an opportunity, project, or question? Send a message and I'll get back to you.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-6 border border-white/10 shadow-xl"
          >
            <ContactRow
              icon={Mail}
              label="Email"
              value="aleem90909m@gmail.com"
              href="mailto:aleem90909m@gmail.com"
            />
            <ContactRow
              icon={Phone}
              label="Phone"
              value="+92 319 8289183"
              href="tel:+923198289183"
            />
            <ContactRow
              icon={MapPin}
              label="Location"
              value="Karachi, Pakistan"
            />

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-slate-500 mb-3 font-mono uppercase tracking-wider">
                Elsewhere
              </p>
              <div className="flex gap-3">
                {[
                  { label: "GitHub", href: "https://github.com/AleemMadniKhan" },
                  { label: "LinkedIn", href: "https://linkedin.com/in/aleemmadnikhan" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:text-amber-200 hover:border-amber-400/40 transition-colors shadow-md"
                  >
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
            className="glass rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10 shadow-2xl"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono text-slate-400 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={values.name}
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
                className={fieldClass("name")}
              />
              {touched.name && errors.name && <FieldError text={errors.name} />}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono text-slate-400 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                className={fieldClass("email")}
              />
              {touched.email && errors.email && (
                <FieldError text={errors.email} />
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono text-slate-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={values.message}
                onChange={handleChange("message")}
                onBlur={handleBlur("message")}
                className={`${fieldClass("message")} resize-none`}
              />
              {touched.message && errors.message && (
                <FieldError text={errors.message} />
              )}
            </div>

            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: submitting ? 1 : 1.02 }}
              whileTap={{ scale: submitting ? 1 : 0.98 }}
              className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-accent hover:bg-accent-light px-6 py-3.5 text-sm font-semibold text-white border border-amber-200/20 shadow-lg shadow-accent/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-amber-200 border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <>
                  Send message <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-[60]">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`glass rounded-xl px-4 py-3.5 flex items-center gap-3 shadow-2xl border-l-4 ${
                toast.type === "success"
                  ? "border-l-amber-400 border-white/10"
                  : "border-l-red-400 border-white/10"
              }`}
            >
              {toast.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              )}
              <span className="text-sm text-slate-200 font-medium">{toast.text}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <motion.div 
      whileHover={{ x: 4 }}
      className="flex items-center gap-4"
    >
      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-200 shrink-0 shadow-md">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
          {label}
        </p>
        <p className="text-sm text-slate-200 font-medium">{value}</p>
      </div>
    </motion.div>
  );
  return href ? (
    <a href={href} className="block transition-opacity">
      {content}
    </a>
  ) : (
    content
  );
}

function FieldError({ text }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1.5 text-xs text-red-400 font-mono"
    >
      {text}
    </motion.p>
  );
}