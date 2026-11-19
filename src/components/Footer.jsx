import React from 'react';
import { personalInfo, navLinks } from '../data/portfolio';
import { FileText } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-primary border-t border-frost/10 px-6 md:px-12 py-12 sm:py-16 text-frost overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Row */}
        <div>
          <span className="text-frost text-2xl sm:text-3xl font-black uppercase tracking-widest block">
            {personalInfo.firstName} {personalInfo.name.split(' ')[1]}
          </span>
          <p className="text-secondary text-xs sm:text-sm font-light mt-1 max-w-md">
            Apple Swift Student Challenge 2026 Winner · Mobile Developer &amp; Product Designer.
          </p>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-frost/10 text-xs sm:text-sm text-secondary">
          <ul className="flex flex-wrap items-center gap-6 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="uppercase tracking-wider hover:text-frost transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-wider hover:text-frost transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-wider hover:text-frost transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={personalInfo.resumeUrl}
                download="Ansh_Srivastava.pdf"
                className="uppercase tracking-wider hover:text-frost transition-colors text-frost font-medium flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                Resume (PDF)
              </a>
            </li>
          </ul>

          <p className="text-[11px] sm:text-xs text-secondary/80 font-light">
            Designed &amp; Engineered by Ansh Srivastava · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
