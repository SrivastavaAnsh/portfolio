import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from './ScrollRevealText';
import { Award, Code2, Layers, Cpu, Sparkles } from 'lucide-react';

export const AboutSection = () => {
  const storyText = 
    "I am an iOS Developer and Apple Swift Student Challenge 2026 Winner. Being selected by Apple and attending WWDC26 at Apple Park in Cupertino transformed how I approach software design: obsessive attention to frame-rate performance, fluid haptics, and thoughtful spatial aesthetics. Whether building Cellumina to simulate cell biology and endocrine signaling at 60 frames per second using SpriteKit, or architecting Loop and FleetOS for multi-tenant enterprise scale, I engineer mobile apps that feel like magic in the user's hands.";

  const pillars = [
    {
      icon: Award,
      title: "Apple Park & WWDC26",
      desc: "Distinguished winner of the Swift Student Challenge 2026. Attended WWDC in person at Cupertino, learning directly from Apple platform architects.",
      accent: "text-accent",
    },
    {
      icon: Code2,
      title: "SwiftUI & SpriteKit",
      desc: "Specialized in declarative Swift, reactive state management, custom animation drivers, and high-performance SpriteKit canvas simulations.",
      accent: "text-accent-cyan",
    },
    {
      icon: Layers,
      title: "Enterprise Architecture",
      desc: "Hands-on experience at Infosys Mysore Development Centre designing multi-role workflows, telematics dashboards, and agile sprint collaboration.",
      accent: "text-emerald-400",
    },
    {
      icon: Cpu,
      title: "On-Device Intelligence",
      desc: "Integrating Apple Foundation Models and local ML pipelines for contextual, responsive mobile applications that protect user privacy.",
      accent: "text-purple-400",
    },
  ];

  return (
    <section id="about" className="relative bg-primary px-5 sm:px-8 md:px-12 py-24 sm:py-32 scroll-mt-[90px] overflow-hidden">
      {/* Hardware-accelerated radial glow (no heavy blur filter) */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(182, 0, 168, 0.12) 0%, rgba(78, 140, 249, 0.05) 45%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Headings */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-secondary uppercase tracking-[0.3em] text-[11px] sm:text-xs font-light mb-3">
            Who I am &amp; Engineering Philosophy
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          >
            About
          </h2>
        </div>

        {/* Scroll Reveal Illuminated Bio (Silky smooth 120 FPS RAF) */}
        <div className="max-w-4xl text-center mb-16 sm:mb-24 px-2">
          <ScrollRevealText
            text={storyText}
            className="font-light leading-relaxed sm:leading-loose text-frost"
            style={{ fontSize: 'clamp(1.15rem, 2.3vw, 1.95rem)' }}
          />
        </div>

        {/* Philosophy Pillars Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl border border-frost/15 bg-black-100 p-6 flex flex-col justify-between hover:border-frost/40 transition-colors shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-tertiary border border-frost/10 flex items-center justify-center mb-4">
                    <Icon className={`w-6 h-6 ${pillar.accent}`} />
                  </div>
                  <h3 className="text-frost font-bold uppercase tracking-wide text-base sm:text-lg mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-secondary text-xs sm:text-sm font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-frost/10 flex items-center justify-between text-[10px] text-frost/40 uppercase tracking-widest">
                  <span>Pillar 0{idx + 1}</span>
                  <Sparkles className="w-3 h-3 text-frost/30" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
