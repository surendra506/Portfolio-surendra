import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Github, Linkedin, Loader2, Mail, Send, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionTitle from "./SectionTitle.jsx";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (e.g., Gmail) → copy the Service ID
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
//    Set "To Email" to your email address in the template settings.
// 4. Go to Account → API Keys → copy your Public Key
// 5. Paste the values below:
const EMAILJS_SERVICE_ID = "service_gk6fwbc";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_uk44iva";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY = "KUDBH7gc2ijHawI-v";   // e.g. "AbCdEf1234567890"
// ─────────────────────────────────────────────────────────────────────────────

function LeetCodeBadge() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-current text-[10px] font-bold">
      LC
    </span>
  );
}

function ContactSection({ data, socialLinks }) {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const submitRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      // Sending all common variable name variations so any default EmailJS template works
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          user_name:  formData.name,
          user_email: formData.email,
          name:       formData.name,
          email:      formData.email,
          reply_to:   formData.email,
          to_name:    "Surendra",
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
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

  const isSending = status === "sending";

  return (
    <section id="contact" ref={sectionRef} className="section-shell py-20 sm:py-28">
      <SectionTitle
        eyebrow="Contact"
        title={data.headline}
        description="Open to ambitious teams, strong product work, and collaborations where craft matters."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: Info card */}
        <div className="glass-card rounded-[26px] p-5 sm:rounded-[30px] sm:p-8" data-reveal>
          <div className="rounded-[20px] border border-cyan-300/16 bg-gradient-to-br from-blue-500/12 via-transparent to-violet-500/12 p-5 sm:rounded-[24px] sm:p-6">
            <p className="theme-kicker text-sm uppercase tracking-[0.3em]">Reach out</p>
            <a
              href={`mailto:${data.email}`}
              className="theme-heading mt-4 inline-flex flex-wrap items-center gap-3 text-base font-semibold sm:text-lg"
            >
              <Mail size={18} className="text-cyan-200" />
              <span className="break-all">{data.email}</span>
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

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="glass-card cinematic-panel rounded-[26px] p-5 sm:rounded-[30px] sm:p-8"
          data-reveal
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="theme-body text-sm font-medium">Name</span>
              <input
                required
                name="from_name"
                value={formData.name}
                onChange={(e) => setFormData((c) => ({ ...c, name: e.target.value }))}
                placeholder="Your name"
                disabled={isSending}
                className="theme-input rounded-2xl px-4 py-3 text-sm outline-none disabled:opacity-60"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="theme-body text-sm font-medium">Email</span>
              <input
                required
                type="email"
                name="from_email"
                value={formData.email}
                onChange={(e) => setFormData((c) => ({ ...c, email: e.target.value }))}
                placeholder="your@email.com"
                disabled={isSending}
                className="theme-input rounded-2xl px-4 py-3 text-sm outline-none disabled:opacity-60"
              />
            </label>
          </div>

          <label className="mt-5 flex flex-col gap-2">
            <span className="theme-body text-sm font-medium">Message</span>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={(e) => setFormData((c) => ({ ...c, message: e.target.value }))}
              rows="6"
              placeholder="Tell me about the role or project"
              disabled={isSending}
              className="theme-input resize-none rounded-2xl px-4 py-3 text-sm outline-none disabled:opacity-60"
            />
          </label>

          <button
            ref={submitRef}
            type="submit"
            disabled={isSending}
            onPointerDown={handleRipple}
            className="ripple-button relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(96,165,250,0.35)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 sm:w-auto sm:justify-start"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              {isSending ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </span>
          </button>

          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8 }}
                className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
              >
                <CheckCircle size={17} className="shrink-0" />
                Message sent! I&apos;ll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8 }}
                className="mt-4 flex items-center gap-3 rounded-2xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-300"
              >
                <XCircle size={17} className="shrink-0" />
                Something went wrong. Please try emailing directly.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
