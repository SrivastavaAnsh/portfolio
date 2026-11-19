import React from 'react';
import { ArrowUpRight, Sparkles, Smartphone, Terminal, Globe, Award } from 'lucide-react';

const marqueeItemsRow1 = [
  {
    title: 'Cellumina',
    type: 'Interactive Biology iOS App',
    badge: 'App Store Live',
    icon: Sparkles,
    gradient: 'from-blue-600/30 to-purple-600/30',
    tags: ['SwiftUI', 'SpriteKit', 'Foundation Models'],
    link: 'https://apps.apple.com/in/app/cellumina/id6780639569',
  },
  {
    title: 'WWDC26 Apple Park',
    type: 'Swift Student Challenge Winner',
    badge: 'Cupertino Selection',
    icon: Award,
    gradient: 'from-accent/30 to-rose-600/30',
    tags: ['Swift', 'WWDC26', 'Cupertino'],
    link: '#',
  },
  {
    title: 'Loop',
    type: 'Unified Organization Platform',
    badge: 'TestFlight Beta',
    icon: Smartphone,
    gradient: 'from-indigo-600/30 to-cyan-600/30',
    tags: ['SwiftUI', 'PostgreSQL', 'Multi-Tenant'],
    link: 'https://testflight.apple.com/join/t92bCxWT',
  },
  {
    title: 'FleetOS',
    type: 'Role-Based Fleet Telematics',
    badge: 'Infosys Internship',
    icon: Terminal,
    gradient: 'from-emerald-600/30 to-teal-600/30',
    tags: ['SwiftUI', 'Supabase', 'Agile/Jira'],
    link: '#projects',
  },
];

const marqueeItemsRow2 = [
  {
    title: 'SpriteKit Simulation Engine',
    type: '60 FPS Cell Physics',
    badge: 'Cellumina Core',
    icon: Sparkles,
    gradient: 'from-cyan-600/30 to-blue-600/30',
    tags: ['Physics', 'Amoeba', 'Signaling'],
    link: 'https://apps.apple.com/in/app/cellumina/id6780639569',
  },
  {
    title: 'Connexus',
    type: 'Smart Contact Manager',
    badge: 'Full-Stack Web',
    icon: Globe,
    gradient: 'from-amber-600/30 to-orange-600/30',
    tags: ['Java', 'Spring Boot', 'Tailwind CSS'],
    link: '#projects',
  },
  {
    title: 'Galgotias University',
    type: 'B.Tech CSE (CGPA 8.82)',
    badge: 'Academics & Research',
    icon: Award,
    gradient: 'from-teal-600/30 to-emerald-600/30',
    tags: ['Algorithms', 'Systems', 'Mobile Computing'],
    link: '#experience',
  },
  {
    title: 'Apple Foundation Models',
    type: 'On-Device AI Integration',
    badge: 'Next-Gen iOS',
    icon: Sparkles,
    gradient: 'from-fuchsia-600/30 to-pink-600/30',
    tags: ['Apple AI', 'Contextual UI', 'Swift'],
    link: '#projects',
  },
];

export const MarqueeShowcase = () => {
  return (
    <section className="bg-primary py-10 sm:py-14 overflow-hidden border-b border-frost/10">
      <div className="text-center px-6 mb-6 sm:mb-8">
        <p className="text-secondary uppercase tracking-[0.35em] text-[10px] sm:text-xs font-light">
          Shipped products &amp; milestones · 0 → 1 → scale
        </p>
      </div>

      <div className="marquee-container flex flex-col gap-3 sm:gap-4 relative group cursor-pointer">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 z-20 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 z-20 bg-gradient-to-l from-primary to-transparent" />

        {/* Row 1 */}
        <div className="flex gap-4 sm:gap-5 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...marqueeItemsRow1, ...marqueeItemsRow1, ...marqueeItemsRow1].map((item, idx) => (
            <a
              key={`r1-${idx}`}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="w-[260px] sm:w-[320px] rounded-2xl sm:rounded-3xl border-2 border-frost/70 bg-black-100 p-4 sm:p-5 flex flex-col justify-between hover:border-frost hover:scale-[1.02] transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-frost/10 text-frost/90 border border-frost/15">
                    {item.badge}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-frost/40 group-hover:text-frost group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h4 className="text-frost font-bold uppercase tracking-wide text-base sm:text-lg">
                  {item.title}
                </h4>
                <p className="text-secondary text-xs font-light mt-0.5">
                  {item.type}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-frost/10">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] uppercase tracking-wider text-frost/60 px-2 py-0.5 rounded-full border border-frost/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Row 2 (Reverse) */}
        <div className="flex gap-4 sm:gap-5 w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {[...marqueeItemsRow2, ...marqueeItemsRow2, ...marqueeItemsRow2].map((item, idx) => (
            <a
              key={`r2-${idx}`}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="w-[260px] sm:w-[320px] rounded-2xl sm:rounded-3xl border-2 border-frost/70 bg-black-100 p-4 sm:p-5 flex flex-col justify-between hover:border-frost hover:scale-[1.02] transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
                    {item.badge}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-frost/40 group-hover:text-frost group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h4 className="text-frost font-bold uppercase tracking-wide text-base sm:text-lg">
                  {item.title}
                </h4>
                <p className="text-secondary text-xs font-light mt-0.5">
                  {item.type}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-frost/10">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] uppercase tracking-wider text-frost/60 px-2 py-0.5 rounded-full border border-frost/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeShowcase;
