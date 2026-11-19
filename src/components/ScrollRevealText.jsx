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

      // Container starts revealing when top enters 85% of viewport
      // Finishes when top reaches 20% of viewport
      const startTrigger = windowHeight * 0.85;
      const endTrigger = windowHeight * 0.20;
      const totalScrollableDistance = startTrigger - endTrigger;
      const currentScroll = startTrigger - rect.top;

      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableDistance));

      // Direct DOM update for zero React re-renders and 120 FPS smoothness
      for (let i = 0; i < totalWords; i++) {
        const el = wordsRef.current[i];
        if (!el) continue;

        // Spread the reveal across the paragraph
        const wordStart = i / totalWords;
        const wordEnd = Math.min((i + 2.5) / totalWords, 1);

        let opacity = 0.15;
        if (progress >= wordEnd) {
          opacity = 1.0;
        } else if (progress <= wordStart) {
          opacity = 0.15;
        } else {
          const ratio = (progress - wordStart) / (wordEnd - wordStart);
          opacity = 0.15 + (0.85 * ratio);
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
          className="relative inline-block mr-[0.28em] select-none"
        >
          {/* Base muted text */}
          <span className="opacity-[0.15] text-frost">{word}</span>

          {/* Illuminated overlay with direct DOM opacity update */}
          <span
            ref={(node) => (wordsRef.current[idx] = node)}
            className="absolute left-0 top-0 text-frost font-normal"
            style={{
              opacity: 0.15,
              willChange: "opacity",
              transform: "translateZ(0)", // GPU compositor layer
            }}
            aria-hidden="true"
          >
            {word}
          </span>
        </span>
      ))}
    </p>
  );
};

export default ScrollRevealText;
