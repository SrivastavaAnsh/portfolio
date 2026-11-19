import React, { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../data/portfolio';
import { ArrowUp, FileText } from 'lucide-react';

export const Footer = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setLocalTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary border-t border-frost/10 px-6 md:px-12 py-12 sm:py-16 text-frost overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-frost text-2xl sm:text-3xl font-black uppercase tracking-widest block">
              {personalInfo.firstName} {personalInfo.name.split(' ')[1]}
            </span>
            <p className="text-secondary text-xs sm:text-sm font-light mt-1 max-w-md">
              Apple Swift Student Challenge 2026 Winner (WWDC26 at Apple Park, Cupertino) &amp; iOS Developer.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-black-100 border border-frost/10 px-4 py-2 rounded-full text-xs text-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Greater Noida, India: <strong className="text-frost font-mono">{localTime || 'IST'}</strong></span>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-frost/20 bg-black-100 hover:bg-frost/10 flex items-center justify-center text-frost/80 hover:text-frost transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
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
                download="Ansh_Srivastava_Resume.pdf"
                className="uppercase tracking-wider hover:text-frost transition-colors text-frost font-medium flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                Resume (PDF)
              </a>
            </li>
          </ul>

          <p className="text-[11px] sm:text-xs text-secondary/80 font-light">
            Designed &amp; Crafted for Ansh Srivastava · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
