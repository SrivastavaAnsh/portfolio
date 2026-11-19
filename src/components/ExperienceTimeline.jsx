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
    <section id="experience" className="relative bg-primary px-5 sm:px-8 md:px-12 py-24 sm:py-32 scroll-mt-[90px] border-t border-frost/10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-secondary uppercase tracking-[0.3em] text-[11px] sm:text-xs font-light mb-3">
            Career Journey · Milestones &amp; Education
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 110px)' }}
          >
            Experience.
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-frost/15 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {experiences.map((exp, idx) => {
            const Icon = getIcon(exp.type);
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div
                  className="absolute -left-[38px] sm:-left-[54px] top-1.5 w-10 h-10 rounded-full bg-black-100 border-2 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                  style={{ borderColor: exp.accent }}
                >
                  <Icon className="w-4 h-4 text-frost" />
                </div>

                {/* Card Container */}
                <div className="rounded-3xl border border-frost/15 bg-black-100 p-6 sm:p-8 hover:border-frost/40 transition-all duration-300 shadow-xl">
                  {/* Top Badge & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border"
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
                  <h3 className="text-frost font-bold uppercase tracking-tight text-xl sm:text-2xl mt-1">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-secondary text-sm font-light mt-1 mb-5">
                    <span className="text-frost/90 font-medium">{exp.company}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-frost/50" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 pt-4 border-t border-frost/10">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-frost/85 text-xs sm:text-sm font-light leading-relaxed">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
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
