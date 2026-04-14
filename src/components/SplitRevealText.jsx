import { motion } from "framer-motion";

function SplitRevealText({ text, as: Tag = "h2", className = "", delay = 0, wordClassName = "" }) {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[0.28em] inline-block overflow-hidden align-top">
          <motion.span
            initial={{ y: "108%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: delay + index * 0.08,
              ease: [0.22, 1, 0.36, 1]
            }}
            className={`inline-block will-change-transform ${wordClassName}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export default SplitRevealText;
