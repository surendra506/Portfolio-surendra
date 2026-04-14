import { ArrowUpRight } from "lucide-react";
import { useMagnetic } from "../hooks/useMagnetic.js";

function MagneticButton({ href, children, className = "", external = false, icon = true }) {
  const ref = useMagnetic();

  return (
    <a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${className}`}
    >
      <span>{children}</span>
      {icon ? <ArrowUpRight size={16} /> : null}
    </a>
  );
}

export default MagneticButton;
