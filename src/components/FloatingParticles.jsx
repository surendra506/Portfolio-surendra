import { motion } from "framer-motion";

const particles = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  size: 2 + (index % 4) * 1.6,
  left: `${6 + ((index * 17) % 88)}%`,
  top: `${4 + ((index * 23) % 88)}%`,
  delay: (index % 8) * 0.45,
  duration: 7 + (index % 6) * 1.8,
  driftX: index % 2 === 0 ? 18 + (index % 5) * 8 : -18 - (index % 5) * 8,
  driftY: -24 - (index % 7) * 8
}));

const starField = Array.from({ length: 72 }, (_, index) => ({
  id: index,
  size: 1.2 + (index % 5) * 0.65,
  left: `${3 + ((index * 29) % 94)}%`,
  top: `${3 + ((index * 37) % 92)}%`,
  delay: (index % 10) * 0.28,
  duration: 5.5 + (index % 9) * 0.8,
  driftX: index % 3 === 0 ? 22 : index % 3 === 1 ? -18 : 10,
  driftY: index % 2 === 0 ? -42 : -26
}));

function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[8] overflow-hidden">
      {starField.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.95)] light-mode:bg-sky-500/70 light-mode:shadow-[0_0_14px_rgba(14,165,233,0.55)]"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top
          }}
          animate={{
            y: [0, particle.driftY, 0],
            x: [0, particle.driftX, particle.driftX * -0.35, 0],
            scale: [1, 1.55, 0.9, 1],
            opacity: [0.22, 1, 0.5, 0.22]
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      {particles.map((particle) => (
        <motion.span
          key={`glow-${particle.id}`}
          className="absolute rounded-full bg-cyan-300/30 blur-md light-mode:bg-sky-400/24"
          style={{
            width: particle.size * 5,
            height: particle.size * 5,
            left: particle.left,
            top: particle.top
          }}
          animate={{
            y: [0, particle.driftY, 0],
            x: [0, particle.driftX, 0],
            opacity: [0.08, 0.36, 0.12]
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export default FloatingParticles;
