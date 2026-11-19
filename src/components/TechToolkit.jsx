import React from 'react';
import { motion } from 'framer-motion';
import { skillsList } from '../data/portfolio';
import { Code2, Smartphone, Database, Layers, Sparkles } from 'lucide-react';

const categories = [
  {
    name: 'iOS & Apple Ecosystem',
    icon: Smartphone,
    color: '#4E8CF9',
    skills: ['Swift', 'SwiftUI', 'SpriteKit', 'Apple Foundation Models', 'Xcode', 'TestFlight', 'Instruments'],
  },
  {
    name: 'Languages & Core Systems',
    icon: Code2,
    color: '#B600A8',
    skills: ['Swift', 'Java', 'Python', 'JavaScript', 'SQL', 'Algorithms & Systems'],
  },
  {
    name: 'Web & Backend Frameworks',
    icon: Layers,
    color: '#10A37F',
    skills: ['Spring Boot', 'React.js', 'Tailwind CSS', 'REST APIs', 'OAuth 2.0', 'HTML & CSS'],
  },
  {
    name: 'Databases, Cloud & Tooling',
    icon: Database,
    color: '#E85D75',
    skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Firebase', 'Git & GitHub', 'Jira / Agile'],
  },
];

export const TechToolkit = () => {
  return (
    <section id="skills" className="relative bg-primary py-16 sm:py-24 scroll-mt-[90px] border-t border-frost/10 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center px-6 mb-10 sm:mb-14">
        <p className="text-secondary uppercase tracking-[0.3em] text-[10px] sm:text-xs font-light mb-2">
          The toolkit · Technologies &amp; Frameworks
        </p>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 96px)' }}
        >
          Skills.
        </h2>
      </div>

      {/* Skills Ribbon */}
      <div className="relative overflow-hidden mb-12 sm:mb-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-primary to-transparent" />

        <div className="flex gap-3 sm:gap-4 w-max animate-marquee">
          {[...skillsList, ...skillsList, ...skillsList].map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className={`flex items-center gap-2.5 rounded-full border px-4 py-2 sm:px-5 sm:py-2.5 shrink-0 shadow-md ${
                skill.highlight
                  ? 'border-accent/40 bg-black-100 hover:border-accent hover:bg-accent/10'
                  : 'border-frost/15 bg-black-100 hover:border-frost/40'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-frost font-medium text-xs sm:text-sm tracking-wide">
                {skill.name}
              </span>
              <span className="text-frost/40 text-[9px] uppercase font-light">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border border-frost/15 bg-black-100 p-5 sm:p-6 flex flex-col justify-between hover:border-frost/40 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center border"
                    style={{
                      borderColor: `${cat.color}40`,
                      backgroundColor: `${cat.color}15`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-frost font-bold uppercase tracking-wide text-base sm:text-lg">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full border border-frost/15 bg-tertiary text-frost/90 text-xs font-light"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-frost/10 flex items-center justify-between text-[10px] text-secondary">
                <span>Production &amp; Academic Proficiency</span>
                <Sparkles className="w-3 h-3 text-accent" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechToolkit;
