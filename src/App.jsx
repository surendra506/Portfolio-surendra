import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import JourneySection from "./components/JourneySection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import CursorFollower from "./components/CursorFollower.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";
import FloatingParticles from "./components/FloatingParticles.jsx";
import { portfolio } from "./data/portfolioData.js";
import { useLenis } from "./hooks/useLenis.js";

gsap.registerPlugin(ScrollTrigger);

const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
  });

  useLenis();

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const isLight = theme === "light";

    root.classList.toggle("dark", !isLight);
    root.classList.toggle("light", isLight);
    body.classList.toggle("light-mode", isLight);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -40% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7]
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#04010c] text-white transition-colors duration-700 light-mode:bg-[#f8fbff] light-mode:text-slate-950">
      <ScrollProgressBar />
      <CursorFollower />
      <FloatingParticles />

      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_28%),radial-gradient(circle_at_20%_20%,_rgba(139,92,246,0.18),_transparent_25%),radial-gradient(circle_at_80%_30%,_rgba(34,211,238,0.12),_transparent_24%),linear-gradient(180deg,_#070211_0%,_#04010c_48%,_#050714_100%)] transition duration-700 light-mode:bg-[radial-gradient(circle_at_12%_8%,rgba(56,189,248,0.24),transparent_30%),radial-gradient(circle_at_88%_14%,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(251,191,36,0.16),transparent_30%),linear-gradient(180deg,#ffffff_0%,#eef7ff_46%,#f8f2ff_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:140px_140px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] transition duration-700 light-mode:bg-[linear-gradient(rgba(15,23,42,0.045)_1px,_transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,_transparent_1px)]" />

      <AnimatePresence>
        {showIntro ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#04010c] light-mode:bg-[#f8fbff]"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-sm uppercase tracking-[0.45em] text-cyan-300/80 light-mode:text-slate-600">Surendra Portfolio</p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 220 }}
                transition={{ duration: 1.1, ease: "easeInOut", delay: 0.25 }}
                className="mx-auto mt-5 h-px rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 shadow-[0_0_30px_rgba(96,165,250,0.9)]"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="relative z-10">
        <HeroSection data={portfolio.hero} />
        <AboutSection data={portfolio.about} />
        <SkillsSection data={portfolio.skills} />
        <ProjectsSection data={portfolio.projects} />
        <JourneySection data={portfolio.experience} />
        <ContactSection data={portfolio.contact} socialLinks={portfolio.socialLinks} />
      </main>

      <Footer socialLinks={portfolio.socialLinks} />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
