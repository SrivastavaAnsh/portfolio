# Ansh Srivastava · Personal Portfolio Website

A flagship personal portfolio website designed for **Ansh Srivastava** — Apple Swift Student Challenge 2026 Winner (WWDC26 at Apple Park, Cupertino) and iOS Developer.

Inspired by the design language, bold typography, color grading, stacked project cards, and interactive 3D elements of [5ach1n.vercel.app](https://5ach1n.vercel.app).

---

## ✨ Design & Architectural Highlights

- **Typography & Font Sizes**:
  - Primary Display & Body Font: **Kanit** (`wght@200..900`) for high-impact uppercase headings and clean architectural numbers.
  - Headings: `hero-heading` gradient (`linear-gradient(180deg, #646973 0%, #bbccd7 100%)`) with background text-clipping.
  - Massive responsive viewport titles (`clamp(3rem, 11vw, 150px)`).

- **Color Palette & Visuals**:
  - Background: Deep Obsidian / Jet Black (`#0C0C0C`)
  - Surface Containers: `#101318` (`bg-black-100`) and `#14171B` (`bg-tertiary`)
  - Text: Frost Ice White (`#D7E2EA`) and Slate Muted Blue-Grey (`#8A99A5`)
  - Accent: Electric Magenta / Fuchsia (`#B600A8`) and Neon Cyan (`#4E8CF9`)
  - Subtle frosted translucent borders: `border-frost/10`, `border-frost/15`, `border-frost/20`
  - Rounded section overlaps: `rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-14`

- **Interactive Features**:
  1. **Sticky Stacking Projects Stack**: Flagship project cards (`Cellumina`, `Loop`, `FleetOS`) stick and smoothly scale down on scroll (`md:sticky md:top-28`), creating an interactive physical deck-of-cards stack.
  2. **Interactive Device Mockups**: Custom live simulation viewports for **Cellumina** (interactive SpriteKit biology animation & organelle physics), **Loop** (multi-tenant organization dashboard & approvals feed), and **FleetOS** (live telematics & dispatch routes).
  3. **Scroll-Driven Text Reveal**: The **About** bio features a character-by-character illuminated scroll effect (`ScrollRevealText`), lighting up from 15% opacity to 100% white as the user reads.
  4. **The "Get In Touch" 3D Planet**: An interactive Three.js 3D Earth globe with starfields, atmospheric glow, orbiting satellite beacon, India/Cupertino coordinates, and smooth drag-to-rotate OrbitControls.
  5. **Direct Connect & One-Click Copy**: Instant clipboard copy with feedback for email (`srivastavaansh3456@gmail.com`) and phone (`+91 8545063769`), plus a quick interactive contact form.
  6. **Infinite Marquee Showcase**: Double-ribbon scrolling showcase of shipped products, certifications, and developer toolkit.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS + Custom Design System
- **Animations & Physics**: Framer Motion
- **3D Graphics**: Three.js (WebGL Canvas)
- **Icons**: Lucide React

---

## 🚀 Getting Started

### Development
```bash
npm run dev
```
Runs the local dev server at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Creates an optimized, production-ready build in `dist/`.

### Preview Build
```bash
npm run preview
```
