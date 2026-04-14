import { useEffect, useRef } from "react";
import gsap from "gsap";

function CursorFollower() {
  const followerRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return undefined;

    const follower = followerRef.current;
    const dot = dotRef.current;
    if (!follower || !dot) return undefined;

    const move = (event) => {
      gsap.to(follower, {
        x: event.clientX - 21,
        y: event.clientY - 21,
        duration: 0.35,
        ease: "power3.out"
      });

      gsap.to(dot, {
        x: event.clientX - 4,
        y: event.clientY - 4,
        duration: 0.14,
        ease: "power3.out"
      });
    };

    const grow = () => follower.classList.add("scale-125");
    const shrink = () => follower.classList.remove("scale-125");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, input, textarea").forEach((element) => {
      element.addEventListener("mouseenter", grow);
      element.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, input, textarea").forEach((element) => {
        element.removeEventListener("mouseenter", grow);
        element.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div ref={followerRef} className="cursor-follower transition-transform duration-300" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

export default CursorFollower;
