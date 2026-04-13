import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Send,
  Server,
  Sparkles,
  Sun,
  X
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const profileImage = "/Assests/emp_img-1772023754905.jpeg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" }
];

const routePaths = navItems.map((item) => item.path);
const normalizePath = (path) => path.replace(/\/$/, "") || "/";

const roles = ["Full Stack Developer", "MERN Stack Engineer", "AI-assisted Builder", "Visual UI Thinker"];

const skills = [
  { name: "React.js", level: 88, icon: Code2, detail: "Component architecture, responsive UI, state flows" },
  { name: "Node.js", level: 84, icon: Server, detail: "APIs, auth flows, business logic" },
  { name: "MongoDB", level: 78, icon: Database, detail: "Schemas, collections, data modeling" },
  { name: "JavaScript", level: 86, icon: Code2, detail: "Interactive interfaces and browser logic" },
  { name: "Java", level: 72, icon: Code2, detail: "OOP, DSA, fundamentals" },
  { name: "Prompt Engineering", level: 82, icon: Sparkles, detail: "LLM workflows, evaluation, AI tooling" }
];

const techStack = [
  "React",
  "Node",
  "Express",
  "MongoDB",
  "JavaScript",
  "Java",
  "Python",
  "Tailwind",
  "Three.js",
  "OpenCV",
  "AWS S3",
  "Figma"
];

const projects = [
  {
    title: "WeekMate HRMS",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "MongoDB", "Tailwind"],
    desc: "Role-based HRMS platform for project creation, task assignment, status tracking, and deadline management.",
    live: "https://task.elsnerdev.com/demo/project-users",
    github: "https://github.com/surendra506"
  },
  {
    title: "Tile Visualizer",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "OpenCV", "Tailwind"],
    desc: "AI-based tile placement workflow with segmentation, edge detection, and surface mapping for room visuals.",
    live: "https://tilesitsolutions.com/3d-ar-tile-viewer/",
    github: "https://github.com/surendra506/TILES-IT-SOLUTION"
  },
  {
    title: "3D House Designer",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    tags: ["JavaScript", "Three.js", "3D"],
    desc: "360 degree room visualization with interactive objects, texture mapping, and dynamic lighting.",
    live: "https://tilesitsolutions.com/3d-ar-tile-viewer/living_room/living_room.html",
    github: "https://github.com/surendra506/TILES-IT-SOLUTION"
  },
  {
    title: "Trend-shop",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    tags: ["JavaScript", "Ecommerce", "UI"],
    desc: "Modern retail interface concept with product browsing, clean cards, and ecommerce-ready page structure.",
    live: "https://github.com/surendra506/Trend-shop",
    github: "https://github.com/surendra506/Trend-shop"
  },
  {
    title: "Stone Paper Scissor",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1200&q=80",
    tags: ["JavaScript", "Game", "Frontend"],
    desc: "Interactive browser game with player choices, instant results, and responsive gameplay screens.",
    live: "https://github.com/surendra506/Stone-Paper-Scissor-Game",
    github: "https://github.com/surendra506/Stone-Paper-Scissor-Game"
  },
  {
    title: "Docify",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    tags: ["Docs", "Productivity", "Frontend"],
    desc: "Documentation-style project focused on organized content, readable layouts, and productivity screens.",
    live: "https://github.com/surendra506/Docify",
    github: "https://github.com/surendra506/Docify"
  }
];

const timeline = [
  {
    period: "Jan 2026 - Present",
    role: "Software Developer Intern",
    company: "Elsner Technologies Pvt. Ltd.",
    text: "Building MERN applications, REST APIs, and prompt strategies across production features."
  },
  {
    period: "June 2025 - Dec 2025",
    role: "Full Stack Developer Intern",
    company: "Filmyfund Technologies Pvt. Ltd.",
    text: "Worked on LLM workflows, SFT, RLHF, evaluation, AWS S3 media storage, and platform delivery."
  },
  {
    period: "2022 - 2026",
    role: "B.Tech Computer Science Engineering",
    company: "Madhav Institute Of Technology And Science",
    text: "Strengthened DSA, OOP, web engineering, visual data design, and product-focused development."
  }
];

function useTypewriter(words) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    const next = isDeleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
    const timeout = window.setTimeout(
      () => {
        setText(next);
        if (!isDeleting && next === word) window.setTimeout(() => setIsDeleting(true), 900);
        if (isDeleting && next === "") {
          setIsDeleting(false);
          setWordIndex((current) => current + 1);
        }
      },
      isDeleting ? 42 : 74
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, text, wordIndex, words]);

  return text;
}

function App() {
  const prefersReducedMotion = useReducedMotion();
  const typedRole = useTypewriter(roles);
  const [currentPath, setCurrentPath] = useState(() =>
    typeof window === "undefined" ? "/" : normalizePath(window.location.pathname)
  );
  const [showLoader, setShowLoader] = useState(() =>
    typeof window === "undefined" ? false : window.sessionStorage.getItem("portfolio-loader-seen") !== "true"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [cursorActive, setCursorActive] = useState(false);
  const cursorRef = useRef(null);
  const formInitial = useMemo(() => ({ name: "", email: "", message: "" }), []);
  const [form, setForm] = useState(formInitial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const goTo = useCallback(
    (path, shouldReplace = false) => {
      const nextPath = routePaths.includes(normalizePath(path)) ? normalizePath(path) : "/";
      if (nextPath !== currentPath) {
        if (shouldReplace) {
          window.history.replaceState({}, "", nextPath);
        } else {
          window.history.pushState({}, "", nextPath);
        }
        setCurrentPath(nextPath);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setMenuOpen(false);
    },
    [currentPath]
  );

  useEffect(() => {
    const handlePopState = () => setCurrentPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (routePaths.includes(currentPath)) return;
    goTo("/", true);
  }, [currentPath, goTo]);

  useEffect(() => {
    const handleInternalLink = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const url = new URL(link.href);
      if (url.origin !== window.location.origin) return;

      const nextPath = normalizePath(url.pathname);
      if (!routePaths.includes(nextPath)) return;

      event.preventDefault();
      event.stopPropagation();
      goTo(nextPath);
    };

    document.addEventListener("click", handleInternalLink, true);
    return () => document.removeEventListener("click", handleInternalLink, true);
  }, [goTo]);

  useEffect(() => {
    if (!showLoader) return undefined;
    window.sessionStorage.setItem("portfolio-loader-seen", "true");
    const timer = window.setTimeout(() => setShowLoader(false), 1200);
    return () => window.clearTimeout(timer);
  }, [showLoader]);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.body.classList.toggle("light-mode", theme === "light");
  }, [theme]);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-reveal",
        { y: 64, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".gsap-zone",
            start: "top 80%"
          }
        }
      );

      gsap.to(".wave-line", {
        xPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.utils.toArray(".parallax-card").forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 ? -34 : 34,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const move = (event) => {
      gsap.to(cursorRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.18,
        ease: "power2.out"
      });
    };
    const activate = (event) => setCursorActive(Boolean(event.target.closest("a, button, input, textarea")));

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", activate);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", activate);
    };
  }, [prefersReducedMotion]);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email";
    if (form.message.trim().length < 12) nextErrors.message = "Message should be at least 12 characters";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm(formInitial);
    window.setTimeout(() => setSent(false), 3200);
  };

  const handleTilt = (event) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    card.style.setProperty("--rx", `${((y / bounds.height) - 0.5) * -8}deg`);
    card.style.setProperty("--ry", `${((x / bounds.width) - 0.5) * 8}deg`);
  };

  const isPage = (path) => currentPath === path || (!routePaths.includes(currentPath) && path === "/");

  const navigate = (path) => (event) => {
    event.preventDefault();
    goTo(path);
  };

  return (
    <div className="noise min-h-screen bg-ink text-white transition-colors duration-500 light-mode:bg-[#f7fafc] light-mode:text-slate-950">
      {!prefersReducedMotion && <div ref={cursorRef} className={`custom-cursor ${cursorActive ? "cursor-active" : ""}`} />}

      {showLoader && <div className="loader-screen fixed inset-0 z-[100] grid place-items-center bg-ink">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="mx-auto mb-5 h-16 w-16 rounded-full border-2 border-white/10 border-t-electric"
          />
          <p className="text-sm font-semibold uppercase text-electric">Loading Surendra.dev</p>
        </div>
      </div>}

      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-white/10 bg-ink/55 px-4 py-3 shadow-card backdrop-blur-2xl light-mode:border-slate-200 light-mode:bg-white/75">
          <a href="/" className="flex items-center gap-3" onClick={navigate("/")}>
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-sm font-black text-ink light-mode:bg-slate-950 light-mode:text-white">SP</span>
            <span className="hidden text-sm font-bold sm:block">Surendra Pratap</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={navigate(item.path)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition hover:bg-white/10 hover:text-white light-mode:text-slate-600 light-mode:hover:bg-slate-950/5 light-mode:hover:text-slate-950 ${
                  isPage(item.path) ? "bg-white/10 text-white light-mode:bg-slate-950/5 light-mode:text-slate-950" : "text-white/68"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:scale-105 hover:border-electric/60 hover:shadow-glow light-mode:border-slate-200 light-mode:bg-white light-mode:text-slate-950"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden light-mode:border-slate-200 light-mode:bg-white light-mode:text-slate-950"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-lg border border-white/10 bg-ink/90 p-3 backdrop-blur-2xl lg:hidden light-mode:border-slate-200 light-mode:bg-white/95"
          >
            {navItems.map((item) => (
              <a key={item.path} href={item.path} onClick={navigate(item.path)} className="rounded-lg px-4 py-3 font-semibold text-white/75 hover:bg-white/10 light-mode:text-slate-700 light-mode:hover:bg-slate-950/5">
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main>
        {isPage("/") && <section id="home" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10">
          <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:44px_44px] opacity-40" />
          <div className="wave-line absolute left-0 top-28 -z-10 h-52 w-[140%] bg-gradient-to-r from-transparent via-electric/20 to-coral/20 blur-3xl" />
          {Array.from({ length: 26 }).map((_, index) => (
            <span
              key={index}
              className="particle"
              style={{
                left: `${(index * 37) % 100}%`,
                top: `${18 + ((index * 19) % 70)}%`,
                animationDelay: `${index * 0.18}s`
              }}
            />
          ))}

          <div className="section-shell grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-electric backdrop-blur-xl light-mode:border-slate-200 light-mode:bg-white light-mode:text-teal-700">
                <Sparkles size={16} /> Available for MERN and AI product work
              </div>
              <p className="type-caret mb-5 min-h-8 text-lg font-bold text-coral">{typedRole}</p>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl xl:text-8xl light-mode:text-slate-950">
                I build <span className="gradient-text">premium web experiences</span> that feel fast, sharp, and recruiter-ready.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 light-mode:text-slate-600">
                Full Stack MERN Developer from Gwalior with hands-on work in React, Node, MongoDB, REST APIs, Three.js visualizers, and LLM-assisted product workflows.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="/projects" onClick={navigate("/projects")} className="group rounded-lg bg-white px-6 py-4 font-black text-ink transition hover:scale-105 hover:shadow-glow light-mode:bg-slate-950 light-mode:text-white">
                  View Projects <ArrowUpRight className="ml-2 inline transition group-hover:translate-x-1" size={18} />
                </a>
                <a href="/contact" onClick={navigate("/contact")} className="rounded-lg border border-white/15 bg-white/10 px-6 py-4 font-black text-white backdrop-blur-xl transition hover:scale-105 hover:border-electric hover:bg-electric/15 light-mode:border-slate-200 light-mode:bg-white light-mode:text-slate-950">
                  Contact Me
                </a>
              </div>
            </motion.div>

            <motion.div initial={false} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -inset-5 -z-10 rounded-[36px] bg-gradient-to-br from-electric/30 via-white/5 to-coral/30 blur-2xl" />
              <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="glass-panel overflow-hidden rounded-lg p-3">
                <img src={profileImage} alt="Surendra Pratap Ahirwar" className="h-[430px] w-full rounded-lg object-cover sm:h-[560px]" loading="eager" />
              </motion.div>
              <motion.div animate={{ y: [0, 14, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }} className="glass-panel absolute -bottom-5 left-2 rounded-lg px-5 py-4">
                <p className="text-sm text-white/55 light-mode:text-slate-500">Current focus</p>
                <p className="font-black text-electric light-mode:text-teal-700">MERN + AI Workflows</p>
              </motion.div>
            </motion.div>
          </div>
        </section>}

        {isPage("/about") && <section id="about" className="section-pad gsap-zone pt-32">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="gsap-reveal">
              <p className="mb-3 text-sm font-black uppercase text-electric light-mode:text-teal-700">About Me</p>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">I turn product ideas into functional, polished web systems.</h2>
              <p className="mt-6 text-lg leading-8 text-white/65 light-mode:text-slate-600">
                I am a detail-oriented Full Stack MERN Developer with experience in React, Node, Express, MongoDB, REST APIs, prompt engineering, and visual data design. I like interfaces that feel intentional, readable, and useful from the first click.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.slice(0, 4).map((skill) => (
                <div key={skill.name} className="gsap-reveal glass-panel rounded-lg p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <skill.icon className="text-electric light-mode:text-teal-700" />
                    <span className="text-sm font-bold text-white/50 light-mode:text-slate-500">{skill.level}%</span>
                  </div>
                  <h3 className="text-xl font-black">{skill.name}</h3>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10 light-mode:bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-electric to-coral"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>}

        {isPage("/skills") && <section id="skills" className="section-pad pt-32">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase text-coral">Skills</p>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">Technology cards with motion, depth, and glow.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <motion.article
                  key={skill.name}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-panel rounded-lg p-6 transition hover:border-electric/60 hover:shadow-glow"
                >
                  <skill.icon className="mb-6 text-electric light-mode:text-teal-700" size={34} />
                  <h3 className="text-2xl font-black">{skill.name}</h3>
                  <p className="mt-3 leading-7 text-white/62 light-mode:text-slate-600">{skill.detail}</p>
                </motion.article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <motion.span key={tech} whileHover={{ y: -4, scale: 1.04 }} className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white/76 backdrop-blur-xl light-mode:border-slate-200 light-mode:bg-white light-mode:text-slate-700">
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>}

        {isPage("/projects") && <section id="projects" className="section-pad pt-32">
          <div className="section-shell">
            <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <p className="mb-3 text-sm font-black uppercase text-electric light-mode:text-teal-700">Projects</p>
                <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Featured builds with live demos, code, and product-grade presentation.</h2>
              </div>
              <a href="https://github.com/surendra506" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-5 py-4 font-black transition hover:scale-105 hover:border-coral/70 light-mode:border-slate-200 light-mode:bg-white">
                More on GitHub <Github size={18} />
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} onMouseMove={handleTilt} className="tilt-card parallax-card glass-panel group overflow-hidden rounded-lg transition duration-300 hover:border-electric/50">
                  <div className="overflow-hidden">
                    <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="h-64 w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-lg bg-white/10 px-3 py-2 text-xs font-black text-electric light-mode:bg-slate-100 light-mode:text-teal-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-black">{project.title}</h3>
                    <p className="mt-4 min-h-28 leading-7 text-white/62 light-mode:text-slate-600">{project.desc}</p>
                    <div className="mt-6 flex gap-3">
                      <a href={project.live} target="_blank" rel="noreferrer" className="rounded-lg bg-white px-4 py-3 text-sm font-black text-ink transition hover:scale-105 light-mode:bg-slate-950 light-mode:text-white">
                        Live <ExternalLink className="ml-1 inline" size={15} />
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 px-4 py-3 text-sm font-black transition hover:scale-105 hover:border-electric light-mode:border-slate-200">
                        GitHub <Github className="ml-1 inline" size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>}

        {isPage("/experience") && <section id="experience" className="section-pad pt-32">
          <div className="section-shell">
            <p className="mb-3 text-sm font-black uppercase text-coral">Experience</p>
            <h2 className="mb-12 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">A focused timeline of internships, delivery, and engineering growth.</h2>
            <div className="relative border-l border-white/15 pl-6 light-mode:border-slate-200 md:pl-10">
              {timeline.map((item, index) => (
                <motion.article
                  key={item.role}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  className="relative mb-8 rounded-lg border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl light-mode:border-slate-200 light-mode:bg-white/80"
                >
                  <span className="absolute -left-[33px] top-8 h-4 w-4 rounded-full bg-electric shadow-glow md:-left-[49px]" />
                  <p className="text-sm font-black text-electric light-mode:text-teal-700">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-black">{item.role}</h3>
                  <p className="mt-1 font-bold text-coral">{item.company}</p>
                  <p className="mt-4 leading-7 text-white/62 light-mode:text-slate-600">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>}

        {isPage("/contact") && <section id="contact" className="section-pad pt-32">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-3 text-sm font-black uppercase text-electric light-mode:text-teal-700">Contact</p>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">Let's build a useful product with a sharp interface.</h2>
              <p className="mt-6 text-lg leading-8 text-white/65 light-mode:text-slate-600">
                Available for internships, full-stack roles, MERN projects, AI-assisted development, and visual UI work.
              </p>
              <div className="mt-8 grid gap-3">
                <a href="mailto:surendraahirwar506@gmail.com" className="flex items-center gap-3 text-white/75 transition hover:text-electric light-mode:text-slate-700"><Mail size={18} /> surendraahirwar506@gmail.com</a>
                <a href="tel:+919340203771" className="flex items-center gap-3 text-white/75 transition hover:text-electric light-mode:text-slate-700"><Phone size={18} /> +91 9340203771</a>
                <div className="flex gap-3 pt-4">
                  <a aria-label="LinkedIn" href="https://www.linkedin.com/in/surendra-pratap-ahirwar-538426294" target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/10 transition hover:scale-110 hover:border-electric light-mode:border-slate-200 light-mode:bg-white"><Linkedin /></a>
                  <a aria-label="GitHub" href="https://github.com/surendra506" target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/10 transition hover:scale-110 hover:border-electric light-mode:border-slate-200 light-mode:bg-white"><Github /></a>
                  <a aria-label="LeetCode" href="https://leetcode.com/u/SURENDRA506/" target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/10 text-sm font-black transition hover:scale-110 hover:border-electric light-mode:border-slate-200 light-mode:bg-white">LC</a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass-panel rounded-lg p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-white/70 light-mode:text-slate-600">Name</span>
                  <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-4 outline-none transition focus:border-electric light-mode:border-slate-200 light-mode:bg-white" placeholder="Your name" />
                  {errors.name && <span className="mt-2 block text-sm text-coral">{errors.name}</span>}
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-white/70 light-mode:text-slate-600">Email</span>
                  <input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-4 outline-none transition focus:border-electric light-mode:border-slate-200 light-mode:bg-white" placeholder="you@example.com" />
                  {errors.email && <span className="mt-2 block text-sm text-coral">{errors.email}</span>}
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-bold text-white/70 light-mode:text-slate-600">Message</span>
                <textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} rows="6" className="w-full resize-none rounded-lg border border-white/10 bg-white/10 px-4 py-4 outline-none transition focus:border-electric light-mode:border-slate-200 light-mode:bg-white" placeholder="Tell me about the role or project" />
                {errors.message && <span className="mt-2 block text-sm text-coral">{errors.message}</span>}
              </label>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-electric to-coral px-6 py-4 font-black text-ink transition hover:scale-105 hover:shadow-glow">
                Send Message <Send size={18} />
              </button>
              {sent && <p className="mt-4 font-bold text-electric light-mode:text-teal-700">Message validated. Email me directly for the fastest reply.</p>}
            </form>
          </div>
        </section>}
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/50 light-mode:border-slate-200 light-mode:text-slate-500">
        <p>© 2026 Surendra Pratap Ahirwar. Built with React, Tailwind, Framer Motion, and GSAP.</p>
      </footer>
    </div>
  );
}

export default App;
