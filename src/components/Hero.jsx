import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import HeroBackground from './HeroBackground';
import { ArrowDown, ArrowUpRight, Sparkles, Award } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:h-screen md:min-h-[640px] flex flex-col justify-between bg-primary pt-24 sm:pt-28 pb-12 overflow-hidden">
      {/* Dynamic Animated Canvas & Ambient Lighting */}
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center">
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-4 sm:mb-6"
        >
          <span className="h-[1px] w-8 sm:w-14 bg-frost/60" />
          <span className="text-frost/90 uppercase tracking-[0.4em] text-[10px] sm:text-[12px] font-light">
            iOS Developer &amp; Swift Innovator
          </span>
        </motion.div>

        {/* Massive Hero Heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-heading-video font-black uppercase tracking-tight leading-[0.88] text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw]"
          >
            Hi, i'm ansh
          </motion.h1>
        </div>

        {/* Bio & Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-5 sm:mt-8 max-w-3xl"
        >
          <p
            className="text-frost/95 font-light leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.35rem)' }}
          >
            Apple Swift Student Challenge 2026 Winner (attended WWDC26 at Apple Park, Cupertino) crafting spatial, biological &amp; unified iOS experiences with SwiftUI and SpriteKit.
          </p>

          {/* Credentials Pills */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mt-6">
            <div className="flex items-center gap-2 rounded-full border border-accent/60 bg-accent/15 px-3.5 py-1.5 text-xs text-frost font-medium uppercase tracking-wider shadow-sm">
              <Award className="w-4 h-4 text-accent" />
              <span>WWDC26 Winner @ Apple Park</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-frost/20 bg-black-100/60 px-3.5 py-1.5 text-xs text-frost/90 font-light uppercase tracking-wider">
              <span>Infosys iOS Intern</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-frost/20 bg-black-100/60 px-3.5 py-1.5 text-xs text-frost/90 font-light uppercase tracking-wider">
              <span>B.Tech CSE @ Galgotias (CGPA 8.82)</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-frost text-primary hover:bg-white px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-frost/10 hover:scale-105"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="https://apps.apple.com/in/app/cellumina/id6780639569"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-frost/30 hover:border-frost bg-primary/40 text-frost px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:bg-frost/10"
            >
              <span>Cellumina App Store</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-frost/15 text-secondary hover:text-frost px-5 py-3.5 text-xs sm:text-sm uppercase tracking-wider transition-colors"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between text-secondary text-[11px] uppercase tracking-[0.25em]"
      >
        <span>Greater Noida, India · WWDC26 Apple Park</span>
        <a
          href="#about"
          className="flex items-center gap-2 text-frost/70 hover:text-frost transition-colors cursor-pointer"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
