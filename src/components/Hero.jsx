import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      const p = video.play();
      if (p && p.catch) p.catch(() => {});
    };

    playVideo();
    video.addEventListener('loadeddata', playVideo);
    return () => video.removeEventListener('loadeddata', playVideo);
  }, []);

  return (
    <section
      className="relative w-full h-[70vh] min-h-[560px] md:h-screen md:min-h-0 flex flex-col bg-primary"
      style={{ overflowX: 'clip' }}
    >
      {/* Cinematic Video Background & Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
        <video
          ref={videoRef}
          src="/assets/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-x-0 top-0 w-full h-[155%] md:h-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlays matching 5ach1n.vercel.app */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent pointer-events-none" />

        <div
          className="absolute inset-0 md:hidden pointer-events-none"
          style={{
            background:
              'linear-gradient(100deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.34) 55%, rgba(0,0,0,0.14) 100%)',
          }}
        />

        <div
          className="absolute inset-0 hidden md:block pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.34) 40%, rgba(0,0,0,0.04) 72%, rgba(0,0,0,0) 100%)',
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0 h-[26%] md:h-[22%] pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, #0C0C0C 0%, rgba(12,12,12,0.72) 38%, rgba(12,12,12,0) 100%)',
          }}
        />
      </div>

      {/* Main Text Content: Middle-Left Placement */}
      <div className="relative z-10 flex-none md:flex-1 flex flex-col justify-center px-6 md:px-10 pt-20 md:pt-24 pb-0 md:pb-[20vh]">
        {/* Top Tagline with Horizontal Line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-4 sm:mb-6"
        >
          <span className="h-[1px] w-8 sm:w-14 bg-frost/60" />
          <span className="on-video-text text-frost/90 uppercase tracking-[0.4em] text-[9px] sm:text-[11px] font-light">
            iOS Developer &amp; Swift Innovator
          </span>
        </motion.div>

        {/* Massive Hero Heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hero-heading-video font-black uppercase tracking-tight leading-[0.85] w-full text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw]"
          >
            Hi, i'm ansh
          </motion.h1>
        </div>

        {/* Subtitle Paragraph & Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-5 sm:mt-7 max-w-[640px]"
        >
          <p
            className="on-video-text text-white font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.35rem)' }}
          >
            Apple Swift Student Challenge 2026 Winner (attended WWDC26 at Apple Park, Cupertino) crafting spatial, biological &amp; unified iOS experiences with SwiftUI and SpriteKit.
          </p>

          <p className="on-video-text text-frost/95 font-light uppercase tracking-[0.2em] text-[10px] sm:text-xs mt-4">
            WWDC26 Winner @ Apple Park · Infosys iOS Intern · B.Tech CSE @ Galgotias
          </p>
        </motion.div>
      </div>

      {/* Bottom Bar: Status on Left, Gradient CONTACT ME on Right */}
      <div className="relative z-10 flex flex-wrap items-end justify-between gap-5 sm:gap-6 px-6 md:px-10 mt-8 md:mt-0 pb-8 sm:pb-10">
        {/* Pulsing Status Dot */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center gap-2.5"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="on-video-text text-frost/85 uppercase tracking-[0.28em] text-[9px] sm:text-[11px] font-light">
            Open to iOS Roles · Swift &amp; Mobile Engineering
          </span>
        </motion.div>

        {/* Glowing CONTACT ME Gradient Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <a
            href="#contact"
            className="contact-gradient inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator center line */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden lg:block pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-10 bg-gradient-to-b from-transparent via-frost/70 to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
