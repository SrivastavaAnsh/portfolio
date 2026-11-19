import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { flagshipProjects } from '../data/portfolio';
import ProjectMockup from './ProjectMockup';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { renderWithIOS } from '../utils/text';

const StackCard = ({ project, index, total, progress }) => {
  const targetScale = 1 - (total - 1 - index) * 0.035;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="snap-card md:h-[80vh] md:max-h-[720px] flex items-start justify-center md:sticky md:top-24 mb-8 md:mb-0">
      <motion.div
        style={{
          scale,
          top: `calc(${index * 22}px + 0px)`,
        }}
        className="relative w-full max-w-6xl rounded-[32px] sm:rounded-[40px] md:rounded-[48px] border-2 border-frost/70 bg-primary p-4 sm:p-5 md:p-6 origin-top shadow-2xl transition-all duration-300 hover:border-frost"
      >
        {/* Card Header */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-2 sm:px-3 pt-1 pb-3 sm:pb-4 border-b border-frost/10">
          <div className="flex items-center gap-3 sm:gap-5">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 68px)' }}
            >
              {project.number}
            </span>
            <div className="flex-1 min-w-[160px]">
              <p className="text-secondary uppercase tracking-[0.25em] text-[9px] sm:text-[11px] font-light">
                {renderWithIOS(project.category)}
              </p>
              <h3
                className="text-frost font-bold uppercase tracking-tight leading-tight"
                style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2.5">
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-accent/20 border border-accent hover:bg-accent hover:text-white text-frost px-3.5 sm:px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                <span>App Store</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {project.testFlightUrl && (
              <a
                href={project.testFlightUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-accent/20 border border-accent hover:bg-accent hover:text-white text-frost px-3.5 sm:px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                <span>TestFlight</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-frost/25 hover:border-frost text-frost/80 hover:text-frost px-3 sm:px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Source</span>
              </a>
            )}
          </div>
        </div>

        {/* Card Body: Split Left (Details) & Right (Interactive Mockup) */}
        <div className="mt-4 flex flex-col lg:flex-row gap-4">
          {/* Left Details Column */}
          <div className="lg:w-[40%] relative rounded-[22px] sm:rounded-[28px] border border-frost/15 bg-black-100 p-4 sm:p-5 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <p className="text-frost/90 font-light leading-relaxed text-xs sm:text-sm">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="flex flex-col gap-y-2 mt-1">
                {project.highlights.slice(0, 3).map((item) => (
                  <li
                    key={item.label}
                    className="border-l-2 border-accent pl-2.5 text-[11px] sm:text-xs leading-snug"
                  >
                    <span className="text-frost font-semibold uppercase tracking-wider text-[10px] block">
                      {item.label}
                    </span>
                    <span className="text-secondary font-light text-[11px]">
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Stat & Tags */}
            <div className="pt-3 border-t border-frost/10">
              <p className="text-frost font-medium uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-accent" />
                {project.stat}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="rounded-full border border-frost/20 bg-primary/40 text-frost/80 px-2.5 py-0.5 text-[10px] uppercase tracking-wider"
                  >
                    {renderWithIOS(tag.name)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Column (Interactive Mockup) */}
          <div className="lg:w-[60%] relative z-10 flex flex-col justify-center">
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
      className="relative bg-primary rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-8 sm:-mt-10 z-10 px-4 sm:px-6 md:px-10 pt-16 sm:pt-20 pb-20 scroll-mt-[90px]"
    >
      {/* Section Headings */}
      <div className="text-center mb-10 sm:mb-14">
        <p className="text-secondary uppercase tracking-[0.3em] text-[10px] sm:text-xs font-light mb-2">
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
    </section>
  );
};

export default ProjectsSection;
