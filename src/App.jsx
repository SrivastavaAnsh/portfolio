import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsRow from './components/StatsRow';
import MarqueeShowcase from './components/MarqueeShowcase';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectStack';
import ExperienceTimeline from './components/ExperienceTimeline';
import TechToolkit from './components/TechToolkit';
import CoreValues from './components/CoreValues';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-primary text-frost font-kanit selection:bg-accent/30 selection:text-frost overflow-x-clip">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Key Numbers / Stats Row */}
      <StatsRow />

      {/* Shipped Apps & Milestones Marquee */}
      <MarqueeShowcase />

      {/* About & Philosophy with Scroll Reveal illuminated text */}
      <AboutSection />

      {/* Flagship Stacking Projects Stack */}
      <ProjectsSection />

      {/* Experience & Education Timeline */}
      <ExperienceTimeline />

      {/* Skills & Technologies Toolkit */}
      <TechToolkit />

      {/* Things out of Resume / Core Values */}
      <CoreValues />

      {/* Get in touch & 3D Interactive Planet */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
