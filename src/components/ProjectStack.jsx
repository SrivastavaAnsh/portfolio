import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { flagshipProjects, secondaryProjects } from '../data/portfolio';
import ProjectMockup from './ProjectMockup';
import { ArrowUpRight, Github, ExternalLink, Award, Sparkles } from 'lucide-react';

const StackCard = ({ project, index, total, progress }) => {
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="snap-card md:h-[85vh] flex items-start justify-center md:sticky md:top-28 mb-10 md:mb-0">
      <motion.div
        style={{
          scale,
          top: `calc(${index * 24}px + 0px)`,
        }}
        className="relative w-full max-w-7xl rounded-[36px] sm:rounded-[48px] md:rounded-[60px] border-2 border-frost/80 bg-primary p-4 sm:p-6 md:p-8 origin-top shadow-2xl transition-all duration-300 hover:border-frost"
      >
        {/* Card Header */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 px-2 sm:px-4 pt-2 pb-4 sm:pb-6 border-b border-frost/10">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.4rem, 6.5vw, 88px)' }}
            >
              {project.number}
            </span>
            <div className="flex-1 min-w-[180px]">
              <p className="text-secondary uppercase tracking-[0.28em] text-[10px] sm:text-xs font-light">
                {project.category}
              </p>
              <h3
                className="text-frost font-bold uppercase tracking-tight leading-tight mt-0.5"
                style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.75rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-accent hover:bg-accent-glow text-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 shadow-lg shadow-accent/25 hover:scale-105"
              >
                <span>App Store</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.testFlightUrl && (
              <a
                href={project.testFlightUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-accent/20 border border-accent hover:bg-accent hover:text-white text-frost px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                <span>TestFlight</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-frost/25 hover:border-frost text-frost/80 hover:text-frost px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">Source</span>
              </a>
            )}
          </div>
        </div>

        {/* Card Body: Split Left (Details) & Right (Interactive Mockup) */}
        <div className="mt-5 flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Left Details Column */}
          <div className="lg:w-[38%] relative rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border border-frost/15 bg-black-100 p-6 sm:p-7 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <p
                className="text-frost/90 font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.95rem, 1.25vw, 1.125rem)' }}
              >
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="flex flex-col gap-y-2.5 mt-2">
                {project.highlights.map((item) => (
                  <li
                    key={item.label}
                    className="border-l-2 border-accent pl-3.5 text-[13px] leading-snug"
                  >
                    <span className="text-frost font-semibold uppercase tracking-wider text-[11px] block">
                      {item.label}
                    </span>
                    <span className="text-secondary font-light text-xs sm:text-[13px]">
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Stat & Tags */}
            <div className="pt-4 border-t border-frost/10">
              <p className="text-frost font-medium uppercase tracking-wider text-xs sm:text-[13px] mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                {project.stat}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="rounded-full border border-frost/20 bg-primary/40 text-frost/80 px-3 py-1 text-[11px] uppercase tracking-wider"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Column (Interactive Mockup) */}
          <div className="lg:w-[62%] relative z-10 flex flex-col justify-center">
            <ProjectMockup project={project} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative bg-primary rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 scroll-mt-[90px]"
    >
      {/* Section Headings */}
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-secondary uppercase tracking-[0.3em] text-[11px] sm:text-xs font-light mb-3">
          Flagship work · scroll through the stack
        </p>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
        >
          Projects
        </h2>
      </div>

      {/* Stacking Cards Container */}
      <div ref={containerRef} className="relative">
        {flagshipProjects.map((project, index) => (
          <StackCard
            key={project.id}
            project={project}
            index={index}
            total={flagshipProjects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      {/* More Builds Grid */}
      <div className="max-w-7xl mx-auto mt-24 sm:mt-32">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-frost/10">
          <div>
            <p className="text-secondary uppercase tracking-[0.25em] text-xs font-light">Additional Engineering</p>
            <h3 className="text-frost font-bold uppercase tracking-wide text-2xl sm:text-3xl mt-1">
              More Builds &amp; Recognitions
            </h3>
          </div>
          <p className="text-secondary text-xs sm:text-sm font-light mt-2 sm:mt-0">
            Open-source platforms &amp; international recognitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-3xl border border-frost/15 bg-black-100 p-6 sm:p-8 hover:border-frost/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-semibold px-3 py-1 rounded-full bg-accent/15 border border-accent/30">
                    {project.badge}
                  </span>
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-frost/60 hover:text-frost transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
                <h4 className="text-frost font-bold uppercase tracking-wide text-xl sm:text-2xl">
                  {project.name}
                </h4>
                <p className="text-secondary text-sm font-light leading-relaxed mt-3">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-frost/10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider text-frost/70 border border-frost/15 rounded-full px-2.5 py-1 bg-primary/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
