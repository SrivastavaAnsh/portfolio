import React, { useEffect, useRef } from 'react';

const HeroBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Ambient floating glow orbs
    const orbs = [
      { x: width * 0.75, y: height * 0.35, r: 280, color: 'rgba(182, 0, 168, 0.15)', vx: 0.3, vy: 0.2 },
      { x: width * 0.25, y: height * 0.45, r: 340, color: 'rgba(78, 140, 249, 0.12)', vx: -0.2, vy: 0.25 },
      { x: width * 0.55, y: height * 0.75, r: 240, color: 'rgba(16, 163, 127, 0.08)', vx: 0.25, vy: -0.2 },
    ];

    // Subtle star dust particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.3 + 0.1,
    }));

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Deep base
      ctx.fillStyle = '#0C0C0C';
      ctx.fillRect(0, 0, width, height);

      // Draw floating glow gradients
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
        if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'rgba(12, 12, 12, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw subtle particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(215, 226, 234, ${p.alpha * (0.6 + 0.4 * Math.sin(time + p.x))})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 opacity-[0.25] mix-blend-overlay" />
      {/* Cinematic vignette & bottom fade into primary background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 70% 30%, transparent 40%, rgba(12,12,12,0.85) 90%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            'linear-gradient(to top, #0C0C0C 0%, rgba(12,12,12,0.7) 40%, transparent 100%)',
        }}
      />
    </div>
  );
};

export default HeroBackground;
