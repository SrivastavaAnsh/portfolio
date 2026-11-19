import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Layers, Sparkles } from 'lucide-react';
import { renderWithIOS } from '../utils/text';
import {
  SwiftIcon,
  SwiftUIIcon,
  SpriteKitIcon,
  XcodeIcon,
  AppleFoundationIcon,
  AndroidIcon,
  JavaIcon,
  PythonIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  TailwindIcon,
  SpringIcon,
  SQLIcon,
  PostgresIcon,
  MySQLIcon,
  SupabaseIcon,
  FirebaseIcon,
  GitIcon,
  JiraIcon,
  FigmaIcon,
  CSSIcon,
  HTMLIcon,
} from './TechIcons';

const marqueeSkills = [
  { name: 'Swift', icon: SwiftIcon },
  { name: 'SwiftUI', icon: SwiftUIIcon },
  { name: 'SpriteKit', icon: SpriteKitIcon },
  { name: 'Xcode', icon: XcodeIcon },
  { name: 'Apple Foundation Models', icon: AppleFoundationIcon },
  { name: 'Android', icon: AndroidIcon },
  { name: 'Java', icon: JavaIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'React JS', icon: ReactIcon },
  { name: 'Tailwind CSS', icon: TailwindIcon },
  { name: 'Spring Boot', icon: SpringIcon },
  { name: 'SQL', icon: SQLIcon },
  { name: 'PostgreSQL', icon: PostgresIcon },
  { name: 'MySQL', icon: MySQLIcon },
  { name: 'Supabase', icon: SupabaseIcon },
  { name: 'Firebase', icon: FirebaseIcon },
  { name: 'Git & GitHub', icon: GitIcon },
  { name: 'Jira / Agile', icon: JiraIcon },
  { name: 'Figma', icon: FigmaIcon },
  { name: 'CSS 3', icon: CSSIcon },
  { name: 'HTML 5', icon: HTMLIcon },
];

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
      <div className="tech-marquee-wrapper group relative overflow-hidden mb-12 sm:mb-16 cursor-pointer">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-primary to-transparent" />

        <div className="tech-marquee flex w-max gap-4 sm:gap-6 px-3 group-hover:[animation-play-state:paused]">
          {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.name}-${idx}`}
                className="flex items-center gap-3.5 rounded-full border-2 border-frost/70 bg-black-100 px-5 py-3 sm:px-6 sm:py-3.5 shrink-0 hover:border-frost hover:bg-frost/5 transition-all duration-300 shadow-md"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center">
                  <Icon className="w-full h-full object-contain" />
                </div>
                <span className="text-frost font-medium uppercase tracking-wider text-xs sm:text-sm whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            );
          })}
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
              className="rounded-2xl sm:rounded-3xl border-2 border-frost/70 bg-black-100 p-5 sm:p-6 flex flex-col justify-between hover:border-frost transition-all duration-300 shadow-xl"
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
                    {renderWithIOS(cat.name)}
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
