import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSectionReveal(sectionRef, options = {}) {
  useLayoutEffect(() => {
    if (!sectionRef.current) return undefined;

    const ctx = gsap.context(() => {
      const elements = sectionRef.current.querySelectorAll("[data-reveal]");
      const parallaxElements = sectionRef.current.querySelectorAll("[data-parallax]");

      if (elements.length) {
        gsap.fromTo(
          elements,
          {
            autoAlpha: 0,
            y: options.offsetY ?? 42
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: options.duration ?? 1.05,
            stagger: options.stagger ?? 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: options.start ?? "top 72%",
              once: true
            }
          }
        );
      }

      parallaxElements.forEach((element, index) => {
        const depth = Number(element.dataset.parallax || index + 1);

        gsap.to(element, {
          yPercent: depth * -10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [options.duration, options.offsetY, options.stagger, options.start, sectionRef]);
}
