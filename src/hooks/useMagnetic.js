import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useMagnetic(strength = 0.32) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(max-width: 768px)").matches) return undefined;

    const handleMove = (event) => {
      const bounds = element.getBoundingClientRect();
      const x = event.clientX - bounds.left - bounds.width / 2;
      const y = event.clientY - bounds.top - bounds.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.35,
        ease: "power3.out"
      });
    };

    const handleLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.45,
        ease: "elastic.out(1, 0.5)"
      });
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}
