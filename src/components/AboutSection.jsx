import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from './ScrollRevealText';

const models = [
  {
    name: 'Claude',
    vendor: 'Anthropic',
    color: '#D97757',
    rot: -6,
    floatDelay: 0,
    className: 'top-[6%] left-[2%] md:left-[5%]',
    delay: 0.1,
    x: -80,
  },
  {
    name: 'Fable 5',
    vendor: 'Anthropic',
    color: '#B600A8',
    rot: 5,
    floatDelay: 1.2,
    className: 'top-[8%] right-[2%] md:right-[5%]',
    delay: 0.15,
    x: 80,
  },
  {
    name: 'GPT-5.4',
    vendor: 'OpenAI',
    color: '#10A37F',
    rot: 4,
    floatDelay: 2.1,
    className: 'bottom-[10%] left-[4%] md:left-[9%]',
    delay: 0.25,
    x: -80,
  },
  {
    name: 'Gemini',
    vendor: 'Google',
    color: '#4E8CF9',
    rot: -5,
    floatDelay: 0.7,
    className: 'bottom-[8%] right-[4%] md:right-[9%]',
    delay: 0.3,
    x: 80,
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
        className="chip-float rounded-2xl border border-frost/15 bg-black-100/80 backdrop-blur-sm px-5 py-3 md:px-6 md:py-4"
        style={{
          '--chip-rot': `${item.rot}deg`,
          animationDelay: `${item.floatDelay}s`,
          boxShadow: `0 0 42px ${item.color}2E`,
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: item.color }}
          />
          <span className="text-frost/50 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-light">
            {item.vendor}
          </span>
        </div>
        <p className="text-frost font-semibold uppercase tracking-wide text-sm md:text-lg mt-0.5">
          {item.name}
        </p>
      </div>
    </motion.div>
  );
};

export const AboutSection = () => {
  const storyText = 
    "I am an iOS Developer and Apple Swift Student Challenge 2026 Winner. I build high-craft mobile apps merging interactive SpriteKit simulations with fluid SwiftUI interfaces. From winning WWDC26 at Apple Park to engineering enterprise platforms at Infosys, I design software that feels like magic in the user's hands.";

  return (
    <section
      id="about"
      className="relative bg-primary min-h-screen h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-0 scroll-mt-[90px] overflow-hidden"
      style={{ overflowX: 'clip' }}
    >
      {/* 4 Coding Agent Chips (Claude, Fable 5, GPT-5.4, Gemini) */}
      {models.map((m) => (
        <FloatingChip key={m.name} item={m} />
      ))}

      {/* Main Centered Content */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 max-w-5xl z-10 text-center px-4 w-full">
        {/* Title: ABOUT ME */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
        >
          About me
        </motion.h2>

        {/* Crisp illuminated paragraph constrained to 4 lines, perfectly fitting in screen */}
        <div className="max-w-[620px] mx-auto text-center">
          <ScrollRevealText
            text={storyText}
            className="text-frost font-medium text-center leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.32rem)' }}
          />
        </div>

        {/* Centered CONTACT ME gradient pill button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2"
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
