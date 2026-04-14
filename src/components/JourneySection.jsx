import { useLayoutEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "./SectionTitle.jsx";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

gsap.registerPlugin(ScrollTrigger);

function JourneySection({ data }) {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  useSectionReveal(sectionRef, { stagger: 0.14 });

  useLayoutEffect(() => {
    if (!sectionRef.current || !lineRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
            end: "bottom 55%",
            scrub: true
          }
        }
      );

      gsap.fromTo(
        ".timeline-dot",
        { scale: 0.65, boxShadow: "0 0 0 rgba(96,165,250,0)" },
        {
          scale: 1,
          boxShadow: "0 0 28px rgba(96,165,250,0.42)",
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-shell py-24 sm:py-28">
      <SectionTitle
        eyebrow="Experience"
        title="Learning in public, improving in motion"
        description="A timeline built on repetition, product work, and sharpening the judgment behind implementation."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/65 via-violet-400/35 to-transparent sm:block" />
        <div
          ref={lineRef}
          className="absolute left-5 top-0 hidden h-full w-[3px] rounded-full bg-gradient-to-b from-cyan-200 via-blue-400 to-violet-400 sm:block"
        />
        <div className="space-y-6">
          {data.map((item, index) => (
            <article
              key={item.title}
              data-reveal
              className="theme-soft-panel relative rounded-[28px] p-6 backdrop-blur-xl sm:ml-14 sm:p-7"
            >
              <div className="timeline-dot absolute -left-[3.55rem] top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-[#090314] text-cyan-200 shadow-[0_0_25px_rgba(96,165,250,0.25)] sm:flex">
                <Sparkles size={17} />
              </div>
              <p className="theme-kicker text-sm uppercase tracking-[0.28em]">
                0{index + 1} / {item.period}
              </p>
              <h3 className="theme-heading mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="theme-body mt-3 text-base leading-7">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
