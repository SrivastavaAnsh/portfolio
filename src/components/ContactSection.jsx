import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import EarthCanvas from './EarthCanvas';
import { Mail, Phone, MapPin, Github, Send, Copy, Check, Sparkles, FileText, Download } from 'lucide-react';

export const ContactSection = () => {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 800);
  };

  const contactLinks = [
    {
      name: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      copyable: true,
      icon: Mail,
      accent: 'border-accent/40 hover:border-accent hover:bg-accent/10',
    },
    {
      name: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      copyable: true,
      icon: Phone,
      accent: 'border-accent-cyan/40 hover:border-accent-cyan hover:bg-accent-cyan/10',
    },
    {
      name: 'GitHub',
      value: 'github.com/SrivastavaAnsh',
      href: personalInfo.github,
      copyable: false,
      icon: Github,
      accent: 'border-frost/20 hover:border-frost/60 hover:bg-frost/5',
    },
    {
      name: 'Resume (PDF)',
      value: 'Ansh_Srivastava_Resume.pdf',
      href: personalInfo.resumeUrl,
      download: true,
      copyable: false,
      icon: FileText,
      accent: 'border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10',
    },
    {
      name: 'Location',
      value: personalInfo.location,
      href: null,
      copyable: false,
      icon: MapPin,
      accent: 'border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/5',
    },
  ];

  return (
    <section id="contact" className="relative bg-primary px-4 sm:px-8 md:px-12 py-16 sm:py-24 scroll-mt-[90px] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <p className="text-secondary uppercase tracking-[0.25em] text-xs font-light">
            Get in touch
          </p>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none mt-1.5"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 84px)' }}
          >
            Contact.
          </h2>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="flex flex-col-reverse xl:flex-row items-stretch gap-8 lg:gap-10">
          {/* Left Column: Form & Channels */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-black-100 border border-frost/15 p-5 sm:p-7 rounded-[28px] flex flex-col justify-between shadow-2xl relative"
          >
            <div>
              <p className="text-frost/90 font-light text-sm sm:text-base leading-relaxed mb-6">
                Whether you have an iOS opportunity, want to collaborate on Swift &amp; spatial computing, or discuss WWDC innovations, feel free to reach out.
              </p>

              {/* Contact Channels Grid */}
              <div className="flex flex-col gap-2.5 mb-8">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className={`flex items-center justify-between gap-3 bg-tertiary border rounded-xl p-3 transition-all duration-300 ${item.accent}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-black-100 border border-frost/10 flex items-center justify-center shrink-0 text-frost">
                          <Icon className="w-4 h-4 text-frost" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-frost text-xs sm:text-sm font-semibold leading-tight">
                            {item.name}
                          </h4>
                          {item.href ? (
                            <a
                              href={item.href}
                              download={item.download ? 'Ansh_Srivastava_Resume.pdf' : undefined}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-secondary hover:text-frost text-xs font-light truncate block mt-0.5 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-secondary text-xs font-light truncate mt-0.5">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>

                      {item.copyable && (
                        <button
                          onClick={() => handleCopy(item.value, item.name)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-frost/15 bg-black-100 hover:bg-frost/10 text-frost/70 hover:text-frost text-[11px] transition-colors shrink-0"
                          title={`Copy ${item.name}`}
                        >
                          {copiedType === item.name ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400 font-medium">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span className="hidden sm:inline">Copy</span>
                            </>
                          )}
                        </button>
                      )}

                      {item.download && (
                        <a
                          href={item.href}
                          download="Ansh_Srivastava_Resume.pdf"
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 text-[11px] transition-colors shrink-0 font-medium"
                          title="Download Resume PDF"
                        >
                          <Download className="w-3 h-3" />
                          <span className="hidden sm:inline">Download</span>
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Form */}
            <form onSubmit={handleSubmit} className="border-t border-frost/10 pt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-0.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-frost font-semibold text-xs uppercase tracking-wider">
                  Send a Quick Message
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-tertiary border border-frost/15 rounded-lg px-3.5 py-2.5 text-frost text-xs placeholder:text-secondary/60 focus:outline-none focus:border-accent transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-tertiary border border-frost/15 rounded-lg px-3.5 py-2.5 text-frost text-xs placeholder:text-secondary/60 focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>

              <textarea
                rows="2"
                placeholder="What would you like to discuss?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-tertiary border border-frost/15 rounded-lg px-3.5 py-2.5 text-frost text-xs placeholder:text-secondary/60 focus:outline-none focus:border-accent transition-colors resize-none"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent hover:bg-accent-glow text-white py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md shadow-accent/25 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : isSent ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: 3D Earth Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 xl:h-[580px] md:h-[480px] h-[340px] bg-black-100 border border-frost/15 rounded-[28px] overflow-hidden flex flex-col relative"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
