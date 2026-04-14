import { useRef } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

function AboutSection({ data }) {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="section-shell py-24 sm:py-28">
      <SectionTitle
        eyebrow="About"
        title="Design sensitivity with engineering discipline"
        description="I like building products that feel intentional in motion, structure, and usability."
      />

      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          data-reveal
          data-parallax="1.4"
          whileHover={{ rotateX: -3, rotateY: 4, scale: 1.01 }}
          transition={{ duration: 0.35 }}
          className="tilt-card premium-ring relative min-h-[520px] overflow-hidden rounded-[34px] p-4"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.24),transparent_36%)] light-mode:bg-[radial-gradient(circle_at_28%_20%,rgba(14,165,233,0.14),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(251,191,36,0.14),transparent_36%)]" />
          <div className="theme-project-preview relative h-full min-h-[488px] overflow-hidden rounded-[28px]">
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_90deg,rgba(34,211,238,0.04),rgba(34,211,238,0.42),rgba(168,85,247,0.4),rgba(59,130,246,0.24),rgba(34,211,238,0.04))] blur-sm"
            />
            <div className="absolute inset-8 rounded-[32px] border border-cyan-200/12 bg-white/[0.035] shadow-[inset_0_0_70px_rgba(34,211,238,0.1)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -24, 0], x: [0, 18, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-16 top-20 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl"
            />
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, 28, 0], x: [0, -14, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-14 h-36 w-36 rounded-full bg-violet-400/24 blur-2xl"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-b-[28px] bg-gradient-to-t from-[#05020d] via-[#05020d]/62 to-transparent p-6 pt-28 light-mode:from-white/95 light-mode:via-white/65">
            <p className="theme-kicker text-sm uppercase tracking-[0.3em]">MERN Developer</p>
            <p className="theme-heading mt-3 max-w-sm text-2xl font-semibold leading-tight">
              Building polished systems with a designer&apos;s eye and an engineer&apos;s discipline.
            </p>
          </div>
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -18, 0], rotate: [0, 7, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-8 top-8 h-24 w-24 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-[1px]"
          />
        </motion.div>

        <div className="glass-card neon-border cinematic-panel rounded-[30px] p-8 sm:p-10" data-reveal>
          <div className="space-y-5">
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph} className="theme-body text-base leading-8">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Clean APIs", "Motion UI", "Fast UX"].map((label) => (
              <div key={label} className="theme-soft-panel rounded-3xl p-4 text-center">
                <p className="theme-kicker text-sm uppercase tracking-[0.22em]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:col-span-2 lg:grid-cols-3">
          {data.cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                data-reveal
                data-parallax={index + 1}
                whileHover={{ rotateX: -4, rotateY: 6, scale: 1.01 }}
                transition={{ duration: 0.35 }}
                className="tilt-card glass-card rounded-[28px] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/90 to-violet-500/90 text-white shadow-[0_0_24px_rgba(96,165,250,0.4)]">
                  <Icon size={20} />
                </div>
                <h3 className="theme-heading mt-5 text-xl font-semibold">{card.title}</h3>
                <p className="theme-body mt-3 text-sm leading-7">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
