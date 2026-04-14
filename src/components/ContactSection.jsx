import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

function LeetCodeBadge() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-current text-[10px] font-bold">
      LC
    </span>
  );
}

function ContactSection({ data, socialLinks }) {
  const sectionRef = useRef(null);
  const submitRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  useSectionReveal(sectionRef);

  const icons = {
    GitHub: <Github size={18} />,
    LinkedIn: <Linkedin size={18} />,
    LeetCode: <LeetCodeBadge />
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleRipple = (event) => {
    const button = submitRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    button.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
    button.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
    button.classList.remove("is-rippling");
    window.requestAnimationFrame(() => button.classList.add("is-rippling"));
  };

  return (
    <section id="contact" ref={sectionRef} className="section-shell py-24 sm:py-28">
      <SectionTitle
        eyebrow="Contact"
        title={data.headline}
        description="Open to ambitious teams, strong product work, and collaborations where craft matters."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card rounded-[30px] p-8" data-reveal>
          <div className="rounded-[24px] border border-cyan-300/16 bg-gradient-to-br from-blue-500/12 via-transparent to-violet-500/12 p-6">
            <p className="theme-kicker text-sm uppercase tracking-[0.3em]">Reach out</p>
            <a href={`mailto:${data.email}`} className="theme-heading mt-4 inline-flex items-center gap-3 text-lg font-semibold">
              <Mail size={18} className="text-cyan-200" />
              {data.email}
            </a>
            <p className="theme-body mt-5 text-base leading-8">{data.message}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="theme-soft-panel theme-body inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition hover:border-cyan-300/35 hover:text-cyan-100 light-mode:hover:text-sky-700"
              >
                {icons[link.label]}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card cinematic-panel rounded-[30px] p-8" data-reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="theme-body text-sm font-medium">Name</span>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="theme-input rounded-2xl px-4 py-3 text-sm outline-none"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="theme-body text-sm font-medium">Email</span>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="theme-input rounded-2xl px-4 py-3 text-sm outline-none"
              />
            </label>
          </div>

          <label className="mt-5 flex flex-col gap-2">
            <span className="theme-body text-sm font-medium">Message</span>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Tell me about the role or project"
              className="theme-input resize-none rounded-2xl px-4 py-3 text-sm outline-none"
            />
          </label>

          <button
            ref={submitRef}
            type="submit"
            onPointerDown={handleRipple}
            className="ripple-button relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(96,165,250,0.35)] transition hover:scale-[1.02]"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Send Message
              <Send size={16} />
            </span>
          </button>

          <AnimatePresence>
            {submitted ? (
              <motion.p
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8 }}
                className="theme-chip mt-4 rounded-2xl px-4 py-3 text-sm"
              >
                Your email client should open with the message prefilled.
              </motion.p>
            ) : null}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
