import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const links = [
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'experience', title: 'Work' },
    { id: 'skills', title: 'Skills' },
    { id: 'contact', title: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const scrollPos = window.scrollY + 200;
      for (let i = links.length - 1; i >= 0; i--) {
        const sec = document.getElementById(links[i].id);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(links[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center fixed top-0 z-30 px-6 md:px-10 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-primary/80 backdrop-blur-md border-b border-frost/10'
          : 'py-5 sm:py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col leading-tight cursor-pointer"
        >
          <span className="text-frost text-lg md:text-xl font-semibold uppercase tracking-widest">
            {personalInfo.firstName}
          </span>
          <span className="text-frost/50 text-[10px] md:text-xs font-light uppercase tracking-[0.28em] hidden sm:block">
            iOS Developer &amp; Swift Innovator
          </span>
        </a>

        {/* Desktop Nav Items */}
        <ul className="list-none hidden sm:flex flex-row items-center gap-8 md:gap-12">
          {links.map((link) => (
            <li
              key={link.id}
              className={`${
                activeSection === link.id ? 'text-frost' : 'text-frost/70'
              } hover:opacity-70 hover:text-frost transition-all duration-200 text-sm md:text-base font-medium uppercase tracking-wider cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          {/* Clean Outline Pill Resume Button */}
          <li>
            <a
              href="#contact"
              className="rounded-full border border-frost/50 text-frost text-xs md:text-sm font-medium uppercase tracking-widest px-5 py-2 hover:bg-frost/10 transition-colors duration-300 inline-block"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-frost p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Dropdown */}
          <div
            className={`${
              mobileMenuOpen ? 'flex' : 'hidden'
            } p-6 bg-black-100 border border-frost/10 absolute top-16 right-0 mx-4 my-2 min-w-[180px] z-20 rounded-2xl shadow-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {links.map((link) => (
                <li
                  key={link.id}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium uppercase tracking-wider cursor-pointer text-sm ${
                    activeSection === link.id ? 'text-frost' : 'text-frost/60'
                  }`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className="pt-2 border-t border-frost/10 w-full">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-frost/60 text-sm font-medium uppercase tracking-wider block"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
