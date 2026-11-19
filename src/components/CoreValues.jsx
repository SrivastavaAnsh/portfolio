import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { renderWithIOS } from '../utils/text';

const valuesData = [
  {
    quote:
      'Software shouldn’t just function—it should feel alive. Whether engineering 60 FPS physics simulations in SpriteKit, fine-tuning haptic impulses, or crafting fluid SwiftUI gesture transitions, I hold the bar at tactile perfection: zero dropped frames, zero visual compromises, and pure responsiveness. Good enough never is.',
    tag: 'Commitment to Craft',
  },
  {
    quote:
      'Prototypes are cheap; shipping is where real engineering happens. From passing rigorous Apple App Store review with Cellumina and orchestrating TestFlight releases to architecting multi-role enterprise iOS solutions at Infosys, I build software meant to survive the real world in real users’ hands.',
    tag: 'Products Shipped Over Demos',
  },
  {
    quote:
      'From presenting native Swift architecture at Apple Park for WWDC26 to collaborating in high-velocity agile sprints, the fastest way to master a platform is to build fearlessly from first principles. I share what I build, celebrate my peers, and treat cross-functional design and code as one unified craft.',
    tag: 'First-Principles Curiosity',
  },
];

export const CoreValues = () => {
  return (
    <section className="bg-primary px-5 sm:px-8 md:px-12 py-16 sm:py-24 border-b border-frost/10">
      <div className="max-w-6xl mx-auto">
        {/* Outer Container Card matching 5ach1n.vercel.app */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] sm:rounded-[40px] border border-frost/10 bg-black-100/90 backdrop-blur-md p-6 sm:p-10 md:p-12 shadow-2xl"
        >
          {/* Section Header */}
          <div className="mb-8 sm:mb-10">
            <p className="text-secondary uppercase tracking-[0.3em] text-xs sm:text-sm font-light mb-1">
              Things out of resume
            </p>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 56px)' }}
            >
              Core Values
            </h2>
          </div>

          {/* 3 Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {valuesData.map((item, idx) => (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="rounded-2xl sm:rounded-3xl border-2 border-frost/70 bg-primary/95 p-6 sm:p-7 flex flex-col justify-between hover:border-frost transition-all duration-300 shadow-xl group"
              >
                <div>
                  {/* Quote Icon */}
                  <div className="mb-4 text-frost/40 group-hover:text-frost/70 transition-colors">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 fill-frost/20" />
                  </div>

                  {/* Body Paragraph */}
                  <p className="text-frost/85 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {renderWithIOS(item.quote)}
                  </p>
                </div>

                {/* Tag Footer */}
                <div className="flex items-center gap-1.5 pt-4 border-t border-frost/10 text-xs sm:text-sm">
                  <span className="text-[#4E8CF9] font-bold">@</span>
                  <span className="text-frost font-medium tracking-wide">
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
