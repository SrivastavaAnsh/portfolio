import React from 'react';
import { motion } from 'framer-motion';
import { skillsList } from '../data/portfolio';
import { Code2, Smartphone, Database, Wrench, Layers, Sparkles } from 'lucide-react';

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
    skills: ['Swift', 'Java', 'Python', 'JavaScript', 'SQL', 'Data Structures & Algorithms'],
  },
  {
    name: 'Web & Backend Frameworks',
    icon: Layers,
    color: '#10A37F',
    skills: ['Spring Boot', 'React.js', 'Tailwind CSS', 'REST APIs', 'OAuth 2.0', 'HTML5 & CSS3'],
  },
  {
    name: 'Databases, Cloud & Tooling',
    icon: Database,
    color: '#E85D75',
    skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Firebase', 'Git & GitHub', 'Jira / Agile', 'VS Code'],
  },
];

export const TechToolkit = () => {
  return (
    <section id="skills" className="relative bg-primary py-24 sm:py-32 scroll-mt-[90px] border-t border-frost/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center px-6 mb-12 sm:mb-16">
        <p className="text-secondary uppercase tracking-[0.3em] text-[11px] sm:text-xs font-light mb-3">
          The toolkit · Technologies &amp; Frameworks
        </p>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 110px)' }}
        >
          Skills.
        </h2>
      </div>

      {/* Infinite Ribbon Marquee of Key Skills */}
      <div className="relative overflow-hidden mb-16 sm:mb-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-primary to-transparent" />

        <div className="flex gap-4 sm:gap-6 w-max animate-marquee">
          {[...skillsList, ...skillsList, ...skillsList].map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className={`flex items-center gap-3 rounded-full border px-5 py-2.5 sm:px-6 sm:py-3 shrink-0 shadow-md transition-all ${
                skill.highlight
                  ? 'border-accent/40 bg-black-100 hover:border-accent hover:bg-accent/10'
                  : 'border-frost/15 bg-black-100 hover:border-frost/40'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-frost font-medium text-xs sm:text-sm tracking-wide">
                {skill.name}
              </span>
              <span className="text-frost/40 text-[10px] uppercase font-light">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl border border-frost/15 bg-black-100 p-6 sm:p-8 flex flex-col justify-between hover:border-frost/40 transition-colors shadow-xl"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center border"
                    style={{
                      borderColor: `${cat.color}40`,
                      backgroundColor: `${cat.color}15`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <div>
                    <h3 className="text-frost font-bold uppercase tracking-wide text-lg sm:text-xl">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full border border-frost/15 bg-tertiary text-frost/90 hover:text-frost hover:border-frost/40 text-xs sm:text-sm font-light transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-frost/10 flex items-center justify-between text-[11px] text-secondary">
                <span>Production &amp; Academic Proficiency</span>
                <Sparkles className="w-3.5 h-3.5 text-accent" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechToolkit;
