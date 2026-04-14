import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, MousePointer2 } from "lucide-react";
import MagneticButton from "./MagneticButton.jsx";
import SplitRevealText from "./SplitRevealText.jsx";

function LeetCodeBadge() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-current text-[10px] font-bold">
      LC
    </span>
  );
}

function HeroSection({ data }) {
  const socials = [
    { label: "GitHub", href: "https://github.com/surendra506", icon: <Github size={18} /> },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/surendra-pratap-ahirwar/",
      icon: <Linkedin size={18} />
    },
    { label: "LeetCode", href: "https://leetcode.com/u/surendra506/", icon: <LeetCodeBadge /> }
  ];

  return (
    <section id="home" className="relative mx-auto min-h-screen w-full max-w-[92rem] px-5 pt-24 sm:px-8 sm:pt-28 lg:px-10">
      <div className="hero-noise premium-ring relative min-h-[calc(100vh-7rem)] w-full overflow-hidden rounded-[32px] px-6 pb-12 pt-10 shadow-[0_40px_140px_rgba(8,47,73,0.34)] backdrop-blur-2xl sm:px-10 lg:px-14 lg:pb-16 lg:pt-14">
        <div className="glow-blob left-[8%] top-[18%] h-44 w-44 bg-blue-500/55" data-parallax="2" />
        <div className="glow-blob bottom-[14%] right-[6%] h-52 w-52 bg-violet-500/45" data-parallax="3" />
        <div className="glow-blob right-[22%] top-[10%] h-36 w-36 bg-cyan-400/40" data-parallax="1" />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-cyan-300/10 bg-[conic-gradient(from_180deg,rgba(34,211,238,0.18),rgba(168,85,247,0.18),transparent,rgba(96,165,250,0.2))] blur-sm"
        />

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="theme-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-[0_0_32px_rgba(34,211,238,0.16)]"
            >
              <MousePointer2 size={15} />
              Cinematic full stack portfolio
            </motion.div>

            <SplitRevealText
              text={data.name}
              as="h1"
              className="theme-heading mt-7 max-w-4xl font-display text-4xl font-bold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl"
              wordClassName="theme-heading"
            />

            <SplitRevealText
              text={data.title}
              as="p"
              delay={0.3}
              className="mt-5 text-xl font-semibold sm:text-2xl"
              wordClassName="text-gradient"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              className="theme-body mt-6 min-h-8 max-w-2xl text-lg leading-8"
            >
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.35, delay: 0.82, ease: "easeInOut" }}
                className="inline-block max-w-full overflow-hidden whitespace-nowrap align-bottom"
              >
                {data.tagline}
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                className="ml-1 inline-block h-5 w-px bg-cyan-200 align-middle"
              />
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
              className="theme-muted text-balance mt-4 max-w-2xl text-base leading-7"
            >
              {data.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <MagneticButton
                href="#projects"
                className="bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 text-slate-950 shadow-[0_0_35px_rgba(96,165,250,0.45)]"
              >
                Start the Experience
              </MagneticButton>
              <MagneticButton
                href={data.resumeHref}
                className="theme-secondary-button"
              >
                Let&apos;s Connect
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.15, ease: "easeOut" }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-soft-panel theme-muted flex h-12 w-12 items-center justify-center rounded-full transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(96,165,250,0.32)] light-mode:hover:text-sky-700 light-mode:hover:shadow-[0_18px_38px_rgba(15,23,42,0.1)]"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
              className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3"
            >
              {data.stats.map((stat) => (
                <div key={stat.label} className="theme-soft-panel rounded-3xl px-5 py-4">
                  <p className="theme-heading text-2xl font-semibold">{stat.value}</p>
                  <p className="theme-muted mt-1 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="theme-hero-visual relative h-[560px] overflow-hidden rounded-[34px] sm:h-[640px] lg:h-[680px]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_22%_28%,rgba(59,130,246,0.12),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_32%),linear-gradient(145deg,#070211_0%,#090314_52%,#04010c_100%)] light-mode:bg-[radial-gradient(circle_at_50%_35%,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.12),transparent_34%),linear-gradient(145deg,#ffffff_0%,#eef7ff_55%,#f8f2ff_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:54px_54px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_76%)] light-mode:bg-[linear-gradient(rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.055)_1px,transparent_1px)] light-mode:opacity-25" />
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -18, 0], rotate: [0, 1.8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-x-0 top-[17%] z-10 flex justify-center sm:top-[19%]"
            >
              <div className="portrait-orbit flex h-56 w-56 items-center justify-center rounded-full bg-[#070211] p-3 shadow-[0_0_90px_rgba(34,211,238,0.38)] light-mode:bg-white light-mode:shadow-[0_28px_70px_rgba(15,23,42,0.16)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <img
                  src={data.image}
                  alt={data.name}
                  className="h-full w-full rounded-full border border-white/15 object-cover object-center saturate-125 shadow-[inset_0_0_30px_rgba(255,255,255,0.18)]"
                />
              </div>
            </motion.div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#090314] to-transparent light-mode:from-white/80" />
            <div className="theme-chip pointer-events-none absolute left-5 top-5 rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em]">
              Interactive 3D
            </div>
            <div className="absolute bottom-5 left-5 right-5 z-20">
              <div className="theme-soft-panel mx-auto max-w-3xl rounded-[26px] p-4 backdrop-blur-xl sm:p-5">
                <p className="theme-muted text-sm uppercase tracking-[0.25em]">Creative Engineering</p>
                <p className="theme-body mt-2 max-w-2xl text-base">
                  Scalable MERN builds with high-end motion systems and polished interaction detail.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
          className="theme-soft-panel theme-muted absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] backdrop-blur-xl transition hover:text-cyan-100 light-mode:hover:text-sky-700 lg:flex"
        >
          Scroll
          <ChevronDown size={14} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}

export default HeroSection;
