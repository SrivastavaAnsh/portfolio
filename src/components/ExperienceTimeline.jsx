import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';
import { Briefcase, Award, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline = () => {
  const getIcon = (type) => {
    if (type.includes('Apple')) return Award;
    if (type.includes('Academics')) return GraduationCap;
    return Briefcase;
  };

  return (
    <section id="experience" className="relative bg-primary px-5 sm:px-8 md:px-12 py-16 sm:py-24 scroll-mt-[90px] border-t border-frost/10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-secondary uppercase tracking-[0.3em] text-[10px] sm:text-xs font-light mb-2">
            Career Journey · Milestones &amp; Education
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 96px)' }}
          >
            Experience.
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-frost/15 ml-3 sm:ml-6 md:ml-8 pl-5 sm:pl-8 space-y-8 sm:space-y-10">
          {experiences.map((exp, idx) => {
            const Icon = getIcon(exp.type);
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div
                  className="absolute -left-[32px] sm:-left-[44px] top-1 w-8 h-8 rounded-full bg-black-100 border-2 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                  style={{ borderColor: exp.accent }}
                >
                  <Icon className="w-3.5 h-3.5 text-frost" />
                </div>

                {/* Card Container */}
                <div className="rounded-2xl sm:rounded-3xl border-2 border-frost/70 bg-black-100 p-5 sm:p-6 hover:border-frost transition-all duration-300 shadow-xl">
                  {/* Top Badge & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className="text-[9px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full border"
                      style={{
                        color: exp.accent,
                        borderColor: `${exp.accent}40`,
                        backgroundColor: `${exp.accent}15`,
                      }}
                    >
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-secondary font-light">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-frost font-bold uppercase tracking-tight text-lg sm:text-xl">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-secondary text-xs sm:text-sm font-light mt-0.5 mb-3">
                    <span className="text-frost/90 font-medium">{exp.company}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-frost/50" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-1.5 pt-3 border-t border-frost/10">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-frost/85 text-xs sm:text-[13px] font-light leading-relaxed">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: exp.accent }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
