import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      infinite: false
    });

    let frameId;

    const update = (time) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(update);
    };

    lenis.on("scroll", ScrollTrigger.update);
    frameId = window.requestAnimationFrame(update);

    const handleRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", handleRefresh);
    ScrollTrigger.refresh();

    return () => {
      window.cancelAnimationFrame(frameId);
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
      lenis.destroy();
    };
  }, []);
}
