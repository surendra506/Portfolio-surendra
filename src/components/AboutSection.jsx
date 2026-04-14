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
          whileHover={{ rotateX: -3.5, rotateY: 4.5, scale: 1.015 }}
          transition={{ duration: 0.45 }}
          className="tilt-card premium-ring relative min-h-[540px] overflow-hidden rounded-[38px] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
        >
          {/* Advanced Mesh Gradient Background */}
          <div className="absolute inset-0 bg-[#080312] light-mode:bg-[#f8fbff]" />
          <div className="absolute inset-0 overflow-hidden opacity-40">
            <motion.div
              animate={{ 
                x: [0, 40, -20, 0],
                y: [0, -30, 20, 0],
                scale: [1, 1.15, 0.9, 1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -left-1/4 -top-1/4 h-full w-full rounded-full bg-cyan-500/30 blur-[100px]"
            />
            <motion.div
              animate={{ 
                x: [0, -50, 30, 0],
                y: [0, 40, -20, 0],
                scale: [1, 0.9, 1.2, 1]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -right-1/4 -bottom-1/4 h-full w-full rounded-full bg-violet-600/30 blur-[100px]"
            />
            <motion.div
              animate={{ 
                opacity: [0.15, 0.3, 0.15]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)]"
            />
          </div>

          <div className="theme-project-preview relative h-full min-h-[508px] overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.015]">
            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_88%)] light-mode:bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)]" />
            
            {/* Ambient Inner Glow */}
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 border border-cyan-400/10 shadow-[inset_0_0_80px_rgba(34,211,238,0.08)]"
            />

            {/* Tech Accents / Corner Brackets */}
            <div className="absolute left-6 top-6 h-4 w-4 border-l-2 border-t-2 border-cyan-400/30" />
            <div className="absolute right-6 top-6 h-4 w-4 border-r-2 border-t-2 border-cyan-400/30" />
            <div className="absolute bottom-6 left-6 h-4 w-4 border-b-2 border-l-2 border-cyan-400/30" />
            <div className="absolute bottom-6 right-6 h-4 w-4 border-b-2 border-r-2 border-cyan-400/30" />

            {/* Inner Floating Area */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-full flex-col justify-end p-8 pb-10"
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#080312] via-[#080312]/85 to-transparent light-mode:from-white/95" />
              
              <div className="relative z-10">
                <span className="inline-block rounded-full bg-cyan-400/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-300/90 shadow-[0_0_20px_rgba(34,211,238,0.15)] light-mode:bg-sky-100 light-mode:text-sky-700">
                  MERN Developer
                </span>
                <h3 className="theme-heading text-gradient mt-5 text-[1.65rem] font-bold leading-[1.2] tracking-tight sm:text-3xl">
                  Building polished systems with a designer&apos;s eye and an engineer&apos;s discipline.
                </h3>
              </div>
            </motion.div>
          </div>

          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-10 top-10 h-28 w-28 rounded-full border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 to-transparent blur-[1px] shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]"
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
