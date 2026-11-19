import React, { useRef, useEffect } from 'react';

export const ScrollRevealText = ({ text, className = "", style = {} }) => {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);

  const words = text.split(" ");
  const totalWords = words.length;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const updateWordOpacities = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Starts illuminating when top of text enters 85% of viewport
      // Fully illuminated when center of text reaches 40% of viewport
      const startTrigger = windowHeight * 0.85;
      const endTrigger = windowHeight * 0.35;
      const scrollableDistance = startTrigger - endTrigger;
      const currentScroll = startTrigger - rect.top;

      const progress = Math.max(0, Math.min(1, currentScroll / scrollableDistance));

      // Direct single-layer GPU opacity update: ZERO layout shift, ZERO character overlapping
      for (let i = 0; i < totalWords; i++) {
        const el = wordsRef.current[i];
        if (!el) continue;

        const wordStart = i / totalWords;
        const wordEnd = Math.min((i + 3) / totalWords, 1);

        let opacity = 0.18;
        if (progress >= wordEnd) {
          opacity = 1.0;
        } else if (progress <= wordStart) {
          opacity = 0.18;
        } else {
          const ratio = (progress - wordStart) / (wordEnd - wordStart);
          opacity = 0.18 + (0.82 * ratio);
        }

        el.style.opacity = opacity.toFixed(3);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateWordOpacities);
        ticking = true;
      }
    };

    // Initial run
    updateWordOpacities();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [totalWords]);

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, idx) => (
        <span
          key={`w-${idx}`}
          ref={(node) => (wordsRef.current[idx] = node)}
          className="inline-block mr-[0.28em] text-frost transition-opacity duration-75 select-none"
          style={{
            opacity: 0.18,
            willChange: "opacity",
            transform: "translateZ(0)",
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
};

export default ScrollRevealText;
