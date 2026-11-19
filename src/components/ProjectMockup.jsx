import React from 'react';
import {
  Atom,
  Cpu,
  Activity,
  CheckCircle2,
  Layers,
  Zap,
  ShieldCheck,
  Workflow,
  Users,
  Radio,
  Database,
  Lock,
  Cloud,
  Server,
  Code2,
} from 'lucide-react';

const bentoData = {
  cellumina: {
    accentColor: '#38BDF8',
    glowBg: 'rgba(56, 189, 248, 0.14)',
    headerBadge: 'Apple Swift Student Challenge Winner',
    headerTitle: 'Spatial & Simulation Architecture',
    headerSub: 'Native Swift 6 · SpriteKit Engine · Apple Foundation Models',
    statHero: {
      value: 'Interactive',
      label: 'Cellular Physics Engine',
      sub: 'Touch-reactive organelle physics, fluid amoeba locomotion simulations, and dynamic biological signaling in SwiftUI.',
      icon: Atom,
      badge: 'SpriteKit + Physics World',
    },
    tileTopRight: {
      value: 'On-Device',
      label: 'Apple Foundation AI',
      sub: 'Zero-latency local machine learning pipeline providing dynamic biological explanations without network roundtrips.',
      icon: Cpu,
      badge: 'Private Neural Engine',
    },
    tileBottomLeft: {
      title: 'Interactive Cell Biology Modules',
      sub: 'Engineered touch-reactive organelles for Plant, Animal, and Bacterial cells with amoeba pseudopod physics & cellular signaling.',
      icon: Activity,
      tags: ['Endocrine Signaling', 'Amoeba Physics', 'Organelle Haptics'],
    },
    tileBottomRight: {
      value: 'App Store Live',
      label: 'Production Build v2.1',
      sub: 'Reviewed and certified by Apple. Live in the hands of learners worldwide with strict memory safety & concurrency.',
      icon: CheckCircle2,
      badge: 'Certified iOS Release',
    },
    footerSpec: 'Built with Swift 6 · SwiftUI 5 · SpriteKit · iOS 17+ SDK',
  },
  loop: {
    accentColor: '#C084FC',
    glowBg: 'rgba(192, 132, 252, 0.14)',
    headerBadge: 'TestFlight Beta · Enterprise Platform',
    headerTitle: 'Multi-Tenant Enterprise Architecture',
    headerSub: 'SwiftUI · PostgreSQL Backend · Role-Based Workflows',
    statHero: {
      value: 'Multi-Tenant',
      label: 'Tenant Schema Isolation',
      sub: 'Segregated organizational database architecture ensuring data isolation, custom branding, and independent administrative domains.',
      icon: Layers,
      badge: 'PostgreSQL + Row-Level Security',
    },
    tileTopRight: {
      value: '<40ms',
      label: 'Real-Time Sync Engine',
      sub: 'High-frequency broadcast notifications, instant campus announcements, and event check-ins with sub-50ms propagation.',
      icon: Zap,
      badge: 'Instant Broadcast',
    },
    tileBottomLeft: {
      title: 'Role-Based Access & Governance',
      sub: 'Dedicated role-specific UX paradigms tailored for Admins, Coordinators, and Members with granular audit logging.',
      icon: ShieldCheck,
      tags: ['Executive Admin', 'Coordinator Portal', 'Member Access'],
    },
    tileBottomRight: {
      value: 'Multi-Step',
      label: 'Approval & Budget Pipeline',
      sub: 'Engineered approval workflows for event proposals, budget allocations, and facility reservations with cryptographic verification.',
      icon: Workflow,
      badge: 'Audit Verified',
    },
    footerSpec: 'SwiftUI Client · PostgreSQL · RESTful Microservices · TestFlight Live',
  },
  fleetos: {
    accentColor: '#34D399',
    glowBg: 'rgba(52, 211, 153, 0.14)',
    headerBadge: 'Infosys MDC · Industry Production Build',
    headerTitle: 'Enterprise Fleet Telematics Engine',
    headerSub: 'Enterprise iOS · Real-Time Telematics · Supabase & Firebase',
    statHero: {
      value: 'Tri-Role',
      label: 'Multi-Persona Ecosystem',
      sub: 'Engineered distinct, cohesive view hierarchies tailored specifically for Fleet Managers, Commercial Drivers, and Technicians.',
      icon: Users,
      badge: '3 Persona Workflows',
    },
    tileTopRight: {
      value: 'Live',
      label: 'Vehicle Telemetry Pipeline',
      sub: 'Real-time telemetry streaming for speed tracking, fuel efficiency, engine error codes, and predictive service dispatch.',
      icon: Radio,
      badge: 'Real-Time Ingestion',
    },
    tileBottomLeft: {
      title: 'Event-Driven Sync & Dispatch Architecture',
      sub: 'Real-time event synchronization and state persistence using Supabase and Firebase Realtime Database across distributed fleets.',
      icon: Database,
      tags: ['Supabase DB', 'Firebase Realtime', 'Live Dispatch'],
    },
    tileBottomRight: {
      value: 'Infosys MDC',
      label: 'Agile Sprint Delivery',
      sub: 'Delivered in a production Agile sprint environment at Infosys Mysore Development Centre with Jira ticket management and CI/CD pipelines.',
      icon: CheckCircle2,
      badge: 'Enterprise Agile Certified',
    },
    footerSpec: 'Enterprise iOS · Swift · Supabase · Firebase · Agile / Jira',
  },
  connexus: {
    accentColor: '#FBBF24',
    glowBg: 'rgba(251, 191, 36, 0.14)',
    headerBadge: 'Full-Stack Platform · Spring Boot 3 & MySQL',
    headerTitle: 'Secure Contact Management Architecture',
    headerSub: 'Java 21 · Spring Security · OAuth 2.0 · Cloudinary CDN',
    statHero: {
      value: 'OAuth 2.0',
      label: 'Dual Social Authentication',
      sub: 'Unified Google and GitHub OAuth 2.0 social login paired with Spring Security 6 session authorization and BCrypt encryption.',
      icon: Lock,
      badge: 'Google & GitHub OAuth',
    },
    tileTopRight: {
      value: 'Cloud CDN',
      label: 'Cloudinary Image Pipeline',
      sub: 'Automated cloud asset uploads, dynamic avatar image transformations, and responsive media delivery via Cloudinary CDN.',
      icon: Cloud,
      badge: 'Cloudinary API',
    },
    tileBottomLeft: {
      title: 'Dynamic Search & JPA Criteria Engine',
      sub: 'Multi-criteria dynamic query specifications across Name, Email, and Phone with server-side pagination, sorting, and favorite bookmarking.',
      icon: Server,
      tags: ['Spring Data JPA', 'MySQL 8.0', 'Thymeleaf', 'Tailwind CSS'],
    },
    tileBottomRight: {
      value: 'Mailtrap',
      label: 'Automated Email Verification',
      sub: 'Transactional email pipeline using Mailtrap and Gmail SMTP for secure user onboarding, email verification tokens, and alerts.',
      icon: CheckCircle2,
      badge: 'SMTP Pipeline Live',
    },
    footerSpec: 'Java 21 · Spring Boot 3.4 · MySQL · Thymeleaf · Tailwind CSS',
  },
};

export const ProjectMockup = ({ project }) => {
  const data = bentoData[project.id] || bentoData.cellumina;
  const HeroIcon = data.statHero.icon;
  const TopRightIcon = data.tileTopRight.icon;
  const BottomLeftIcon = data.tileBottomLeft.icon;
  const BottomRightIcon = data.tileBottomRight.icon;

  return (
    <div className="w-full h-full min-h-[360px] md:min-h-[420px] bg-black-200/90 rounded-[24px] sm:rounded-[32px] p-4 sm:p-5 flex flex-col justify-between border border-frost/15 shadow-2xl relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: data.glowBg }}
      />

      {/* Bento Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-frost/10">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-md"
            style={{ background: `${data.accentColor}25`, border: `1px solid ${data.accentColor}50` }}
          >
            <Code2 className="w-4 h-4" style={{ color: data.accentColor }} />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-frost font-bold tracking-tight text-xs sm:text-sm">
                {data.headerTitle}
              </h4>
              <span
                className="text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
                style={{
                  background: `${data.accentColor}20`,
                  color: data.accentColor,
                  border: `1px solid ${data.accentColor}40`,
                }}
              >
                {data.headerBadge}
              </span>
            </div>
            <p className="text-secondary text-[10px] font-light mt-0.5 truncate">
              {data.headerSub}
            </p>
          </div>
        </div>
      </div>

      {/* Bento 4-Tile Grid */}
      <div className="relative z-10 my-3 grid grid-cols-1 sm:grid-cols-12 gap-2.5 flex-1">
        {/* Tile 1: Hero Metric (7 cols) */}
        <div className="sm:col-span-7 bg-primary/70 backdrop-blur-md rounded-2xl border border-frost/10 p-3 sm:p-3.5 flex flex-col justify-between hover:border-frost/25 transition-colors">
          <div className="flex items-center justify-between">
            <span
              className="font-black tracking-tight leading-none text-xl sm:text-2xl"
              style={{ color: data.accentColor }}
            >
              {data.statHero.value}
            </span>
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${data.accentColor}18` }}
            >
              <HeroIcon className="w-3.5 h-3.5" style={{ color: data.accentColor }} />
            </div>
          </div>
          <div className="mt-2">
            <h5 className="text-frost font-bold text-xs uppercase tracking-wide">
              {data.statHero.label}
            </h5>
            <p className="text-secondary text-[11px] font-light leading-snug mt-1">
              {data.statHero.sub}
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-frost/10 flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-wider text-secondary font-mono">
              Architecture Pillar
            </span>
            <span
              className="text-[9px] font-medium px-2 py-0.5 rounded-full"
              style={{ background: `${data.accentColor}15`, color: data.accentColor }}
            >
              {data.statHero.badge}
            </span>
          </div>
        </div>

        {/* Tile 2: Secondary Metric / Performance (5 cols) */}
        <div className="sm:col-span-5 bg-primary/70 backdrop-blur-md rounded-2xl border border-frost/10 p-3 sm:p-3.5 flex flex-col justify-between hover:border-frost/25 transition-colors">
          <div className="flex items-center justify-between">
            <span className="font-bold tracking-tight text-frost text-base sm:text-lg">
              {data.tileTopRight.value}
            </span>
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${data.accentColor}18` }}
            >
              <TopRightIcon className="w-3.5 h-3.5" style={{ color: data.accentColor }} />
            </div>
          </div>
          <div className="mt-2">
            <h5 className="text-frost font-bold text-xs uppercase tracking-wide">
              {data.tileTopRight.label}
            </h5>
            <p className="text-secondary text-[11px] font-light leading-snug mt-1">
              {data.tileTopRight.sub}
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-frost/10 flex items-center justify-end">
            <span
              className="text-[9px] font-medium px-2 py-0.5 rounded-full"
              style={{ background: `${data.accentColor}15`, color: data.accentColor }}
            >
              {data.tileTopRight.badge}
            </span>
          </div>
        </div>

        {/* Tile 3: Core Pipeline & Tags (7 cols) */}
        <div className="sm:col-span-7 bg-primary/70 backdrop-blur-md rounded-2xl border border-frost/10 p-3 sm:p-3.5 flex flex-col justify-between hover:border-frost/25 transition-colors">
          <div className="flex items-center gap-2">
            <BottomLeftIcon className="w-3.5 h-3.5 shrink-0" style={{ color: data.accentColor }} />
            <h5 className="text-frost font-bold text-xs uppercase tracking-wide">
              {data.tileBottomLeft.title}
            </h5>
          </div>
          <p className="text-secondary text-[11px] font-light leading-snug my-2">
            {data.tileBottomLeft.sub}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-frost/10">
            {data.tileBottomLeft.tags.map((t) => (
              <span
                key={t}
                className="text-[9px] rounded-md px-2 py-0.5 bg-black-100 text-frost/80 border border-frost/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tile 4: Verification & Live Status (5 cols) */}
        <div className="sm:col-span-5 bg-primary/70 backdrop-blur-md rounded-2xl border border-frost/10 p-3 sm:p-3.5 flex flex-col justify-between hover:border-frost/25 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: data.accentColor }} />
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: data.accentColor }}>
                {data.tileBottomRight.value}
              </span>
            </div>
            <BottomRightIcon className="w-3.5 h-3.5 shrink-0" style={{ color: data.accentColor }} />
          </div>
          <div className="my-1.5">
            <h5 className="text-frost font-bold text-xs uppercase tracking-wide">
              {data.tileBottomRight.label}
            </h5>
            <p className="text-secondary text-[10px] font-light leading-snug mt-1">
              {data.tileBottomRight.sub}
            </p>
          </div>
          <div className="pt-2 border-t border-frost/10 flex items-center justify-end">
            <span className="text-[9px] text-frost/70 font-mono">
              {data.tileBottomRight.badge}
            </span>
          </div>
        </div>
      </div>

      {/* Bento Bottom Spec Strip */}
      <div className="relative z-10 pt-2.5 border-t border-frost/10 flex items-center justify-between text-[10px] text-secondary">
        <span className="font-mono text-frost/60 truncate">
          {data.footerSpec}
        </span>
        <span className="text-frost/80 font-medium shrink-0 ml-2">
          Verified Architecture
        </span>
      </div>
    </div>
  );
};

export default ProjectMockup;
