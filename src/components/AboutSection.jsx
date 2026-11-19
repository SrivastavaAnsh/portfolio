import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from './ScrollRevealText';

const floatingChips = [
  {
    name: 'SwiftUI',
    vendor: 'Apple Developer',
    color: '#4E8CF9',
    rot: -6,
    floatDelay: 0,
    className: 'top-[8%] left-[2%] md:left-[6%]',
    delay: 0.1,
    x: -60,
  },
  {
    name: 'WWDC26 Winner',
    vendor: 'Apple Park, Cupertino',
    color: '#B600A8',
    rot: 5,
    floatDelay: 1.2,
    className: 'top-[10%] right-[2%] md:right-[6%]',
    delay: 0.15,
    x: 60,
  },
  {
    name: 'SpriteKit',
    vendor: 'Simulation Engine',
    color: '#10A37F',
    rot: 4,
    floatDelay: 2.1,
    className: 'bottom-[12%] left-[3%] md:left-[8%]',
    delay: 0.25,
    x: -60,
  },
  {
    name: 'Foundation Models',
    vendor: 'Apple Intelligence',
    color: '#E85D75',
    rot: -5,
    floatDelay: 0.7,
    className: 'bottom-[10%] right-[3%] md:right-[8%]',
    delay: 0.3,
    x: 60,
  },
];

const FloatingChip = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: item.x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: item.delay }}
      className={`absolute hidden sm:block pointer-events-none select-none z-10 ${item.className}`}
    >
      <div
        className="chip-float rounded-2xl border border-frost/15 bg-black-100/85 backdrop-blur-md px-5 py-3 md:px-6 md:py-4 transition-transform"
        style={{
          '--chip-rot': `${item.rot}deg`,
          animationDelay: `${item.floatDelay}s`,
          boxShadow: `0 0 38px ${item.color}2E`,
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full shadow-sm"
            style={{ background: item.color }}
          />
          <span className="text-frost/50 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-light">
            {item.vendor}
          </span>
        </div>
        <p className="text-frost font-semibold uppercase tracking-wide text-sm md:text-base mt-1">
          {item.name}
        </p>
      </div>
    </motion.div>
  );
};

export const AboutSection = () => {
  const storyText = 
    "I am an iOS Developer and Apple Swift Student Challenge 2026 Winner. Being selected by Apple and attending WWDC26 at Apple Park in Cupertino transformed how I approach software design: obsessive attention to frame-rate performance, fluid haptics, and thoughtful spatial aesthetics. Whether building Cellumina to simulate cell biology and endocrine signaling at 60 frames per second using SpriteKit, or architecting Loop and FleetOS for multi-tenant enterprise scale, I engineer mobile apps that feel like magic in the user's hands.";

  return (
    <section
      id="about"
      className="relative bg-primary min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 scroll-mt-[90px] overflow-hidden"
      style={{ overflowX: 'clip' }}
    >
      {/* 4 Floating Glassmorphic Chips (SwiftUI, WWDC26, SpriteKit, Foundation Models) */}
      {floatingChips.map((chip) => (
        <FloatingChip key={chip.name} item={chip} />
      ))}

      {/* Main Centered Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 max-w-5xl z-10 text-center">
        {/* Section Heading matching 5ach1n */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}
        >
          About me
        </motion.h2>

        {/* Illuminated Scroll Text (No ghosting, no overlap, silky 120 FPS) */}
        <div className="max-w-[660px] mx-auto px-4">
          <ScrollRevealText
            text={storyText}
            className="text-frost font-medium text-center leading-relaxed"
            style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)' }}
          />
        </div>

        {/* Contact Me Button matching 5ach1n */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 sm:mt-4"
        >
          <a
            href="#contact"
            className="contact-gradient inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
