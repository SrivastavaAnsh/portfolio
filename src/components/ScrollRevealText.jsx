import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Char = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline">
      <span className="opacity-[0.15]">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 select-none text-frost font-normal"
        aria-hidden="true"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const ScrollRevealText = ({ text, className = "", style = {} }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.25"],
  });

  const words = text.split(" ");
  const totalLength = text.length;
  let runningIndex = 0;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIdx) => {
        const characters = word.split("").map((ch, charIdx) => {
          const start = runningIndex / totalLength;
          runningIndex += 1;
          const end = Math.min((runningIndex + 4) / totalLength, 1);
          return (
            <Char
              key={`c-${wordIdx}-${charIdx}`}
              char={ch}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        });

        runningIndex += 1; // space count
        return (
          <span key={`w-${wordIdx}`} className="inline-block whitespace-pre">
            {characters}
            {wordIdx < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
};

export default ScrollRevealText;
