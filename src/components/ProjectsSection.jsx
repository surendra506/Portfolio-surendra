import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

function ProjectsSection({ data }) {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, { stagger: 0.16 });

  const handleTilt = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const resetTilt = (event) => {
    event.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section id="projects" ref={sectionRef} className="section-shell py-24 sm:py-28">
      <SectionTitle
        eyebrow="Projects"
        title="Polished builds, organized clearly"
        description="Featured projects shown in a clean responsive grid: three per row on large screens, two on tablet, and one on mobile."
      />

      <div className="project-grid grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.map((project, index) => (
          <article
            key={project.title}
            data-reveal
            data-parallax={(index % 2) + 1}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            className="project-card theme-project-card tilt-card group relative min-h-[360px] overflow-hidden rounded-[34px] p-7 backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.11),transparent_38%),radial-gradient(circle_at_18%_82%,rgba(34,211,238,0.16),transparent_34%)] opacity-80" />

            <div className="relative">
              <div>
                <p className="theme-kicker text-sm uppercase tracking-[0.3em]">{project.kicker}</p>
                <h3 className="theme-heading mt-5 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-2">
              {project.techStack.map((tag) => (
                <span
                  key={tag}
                  className="theme-chip rounded-full px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="theme-body relative mt-8 text-base leading-8">{project.description}</p>

            <div className="relative mt-12 flex flex-wrap gap-3">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(96,165,250,0.35)] transition hover:scale-[1.02]"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noreferrer"
                className="theme-secondary-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:border-cyan-300/35 hover:text-cyan-100"
              >
                GitHub Repo
                <Github size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
