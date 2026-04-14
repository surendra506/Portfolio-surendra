import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

function Navbar({ activeSection, isMenuOpen, setIsMenuOpen, theme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="section-shell pt-5">
        <div
          className={`glass-card neon-border flex items-center justify-between rounded-full px-4 py-3 transition-all duration-500 sm:px-6 ${
            isScrolled ? "shadow-[0_18px_70px_rgba(2,6,23,0.34)] backdrop-blur-3xl" : "shadow-[0_8px_30px_rgba(2,6,23,0.16)]"
          }`}
        >
          <a href="#home" className="theme-heading text-sm font-semibold uppercase tracking-[0.35em] sm:text-base">
            Surendra
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-white/12 text-cyan-200 shadow-[0_0_24px_rgba(96,165,250,0.35)] light-mode:bg-slate-950 light-mode:text-white light-mode:shadow-[0_10px_26px_rgba(15,23,42,0.14)]"
                      : "theme-muted hover:bg-white/8 hover:text-white light-mode:hover:bg-slate-950/5 light-mode:hover:text-slate-950"
                  }`}
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300 to-violet-300 transition duration-300 group-hover:scale-x-100 light-mode:from-sky-500 light-mode:to-violet-500" />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
              className="theme-soft-panel group relative flex h-11 w-[5.6rem] items-center rounded-full p-1 text-white transition hover:border-cyan-300/30 light-mode:text-slate-950"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              <motion.span
                layout
                animate={{ x: theme === "dark" ? 0 : 44, rotate: theme === "dark" ? 0 : 180 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="absolute left-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.45)] light-mode:from-amber-200 light-mode:to-white light-mode:shadow-[0_8px_22px_rgba(251,191,36,0.28)]"
              >
                {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
              </motion.span>
              <span className="ml-auto mr-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 light-mode:text-slate-500">
                {theme}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="theme-soft-panel theme-heading flex h-11 w-11 items-center justify-center rounded-full transition md:hidden"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="glass-card mt-3 rounded-3xl p-4 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/8 hover:text-white light-mode:text-slate-600 light-mode:hover:bg-slate-950/5 light-mode:hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </nav>
    </header>
  );
}

export default Navbar;
