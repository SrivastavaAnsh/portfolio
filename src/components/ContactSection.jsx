import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import EarthCanvas from './EarthCanvas';
import StarsCanvas from './StarsCanvas';
import { Github, Phone, FileText, ArrowUpRight, Copy, Check, Download } from 'lucide-react';

export const ContactSection = () => {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (e, text, key) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactChannels = [
    {
      name: 'LinkedIn',
      display: 'in/ansh-srivastava-68004b2a6',
      link: personalInfo.linkedin,
      iconType: 'linkedin',
      actionType: 'external',
    },
    {
      name: 'GitHub',
      display: 'github.com/SrivastavaAnsh',
      link: personalInfo.github,
      iconType: 'github',
      actionType: 'external',
    },
    {
      name: 'Email',
      display: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      copyValue: personalInfo.email,
      iconType: 'email',
      actionType: 'copy',
    },
    {
      name: 'Phone / WhatsApp',
      display: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      copyValue: personalInfo.phone,
      iconType: 'phone',
      actionType: 'copy',
    },
    {
      name: 'Resume',
      display: 'Ansh_Srivastava.pdf',
      link: personalInfo.resumeUrl,
      download: true,
      iconType: 'resume',
      actionType: 'download',
    },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case 'linkedin':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center shrink-0 shadow-md">
            <span className="text-white font-bold text-sm tracking-tighter">in</span>
          </div>
        );
      case 'github':
        return (
          <div className="w-8 h-8 rounded-lg bg-black-100 border border-frost/20 flex items-center justify-center shrink-0">
            <Github className="w-4 h-4 text-frost" />
          </div>
        );
      case 'email':
        return (
          <div className="w-8 h-8 rounded-lg bg-black-100 border border-frost/20 flex items-center justify-center shrink-0 text-frost text-sm font-bold">
            @
          </div>
        );
      case 'phone':
        return (
          <div className="w-8 h-8 rounded-lg bg-black-100 border border-frost/20 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-emerald-400" />
          </div>
        );
      case 'resume':
        return (
          <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4 text-accent" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="contact"
      className="relative z-0 bg-primary px-5 sm:px-8 md:px-12 py-12 sm:py-16 lg:py-20 scroll-mt-[80px] overflow-hidden flex flex-col justify-center min-h-[calc(100vh-80px)]"
    >
      {/* Stars Particle Canvas across entire Contact section background */}
      <StarsCanvas />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* 2-Column Layout: Left (Header + Card) & Right (3D Planet centered to entire left column) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-14">
          {/* Left Column: Heading + Contact Card */}
          <div className="w-full lg:w-[420px] xl:w-[450px] shrink-0 flex flex-col">
            {/* Section Header outside the box as requested */}
            <div className="text-left mb-5 sm:mb-6">
              <p className="text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-light">
                Get in touch
              </p>
              <h2
                className="hero-heading font-black uppercase tracking-tight leading-none mt-1"
                style={{ fontSize: 'clamp(2.4rem, 6vw, 76px)' }}
              >
                Contact.
              </h2>
            </div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full bg-black-100/90 backdrop-blur-md border border-frost/10 p-6 sm:p-7 rounded-3xl shadow-2xl"
            >
              <p className="text-frost/80 font-light text-sm sm:text-base leading-relaxed mb-5">
                Feel free to connect!!
              </p>

              <div className="flex flex-col gap-2.5 sm:gap-3">
                {contactChannels.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    download={item.download ? 'Ansh_Srivastava.pdf' : undefined}
                    target={item.link.startsWith('http') || item.download ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 bg-tertiary border border-frost/10 rounded-2xl p-3.5 sm:p-4 cursor-pointer hover:border-accent/60 hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {renderIcon(item.iconType)}
                      <div className="min-w-0">
                        <h4 className="text-frost text-sm sm:text-base font-semibold leading-tight group-hover:text-white transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-secondary text-xs sm:text-[13px] font-light truncate mt-0.5">
                          {item.display}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {item.actionType === 'copy' && (
                        <button
                          type="button"
                          onClick={(e) => handleCopy(e, item.copyValue, item.name)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bg-black-100 border border-frost/10 hover:border-accent/50 hover:bg-frost/10 transition-colors text-frost/80"
                          title={`Copy ${item.name}`}
                        >
                          {copiedKey === item.name ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400 font-medium text-[11px]">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-frost/60" />
                              <span className="text-[11px]">Copy</span>
                            </>
                          )}
                        </button>
                      )}

                      {item.actionType === 'download' && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bg-accent/20 border border-accent/40 text-accent font-medium">
                          <Download className="w-3.5 h-3.5 text-accent" />
                          <span className="text-[11px]">Download</span>
                        </div>
                      )}

                      {item.actionType === 'external' && (
                        <ArrowUpRight className="w-4 h-4 text-frost/40 group-hover:text-frost group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Earth, vertically centered from Top of Get in Touch to Bottom of Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:flex-1 h-[400px] sm:h-[460px] md:h-[500px] lg:h-[540px] xl:h-[580px] max-w-[580px] xl:max-w-[640px] flex items-center justify-center relative mx-auto"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
