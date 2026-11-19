import React, { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../data/portfolio';
import { Menu, X, ArrowUpRight, Download, FileText } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Detect current section
      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-primary/85 backdrop-blur-md border-b border-frost/10 shadow-lg'
          : 'py-5 sm:py-7 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col leading-tight group"
        >
          <span className="text-frost text-lg md:text-xl font-bold uppercase tracking-widest group-hover:text-accent-cyan transition-colors">
            {personalInfo.firstName}
          </span>
          <span className="text-frost/50 text-[10px] md:text-xs font-light uppercase tracking-[0.28em] hidden sm:block">
            iOS Developer · WWDC26 Winner
          </span>
        </a>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-frost font-bold'
                    : 'text-frost/70 hover:text-frost hover:opacity-80'
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}

          {/* Resume CTA */}
          <li>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-frost/50 text-frost text-xs font-medium uppercase tracking-widest px-5 py-2 hover:bg-frost/10 hover:border-frost transition-all duration-300 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Get In Touch</span>
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-frost focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black-100/95 backdrop-blur-xl border-b border-frost/15 px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base uppercase tracking-wider block py-1.5 font-medium ${
                    activeSection === link.id ? 'text-frost font-bold' : 'text-frost/70'
                  }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-frost/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-accent text-white py-3 text-sm font-semibold uppercase tracking-wider"
              >
                <FileText className="w-4 h-4" />
                <span>Contact &amp; Resume</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
