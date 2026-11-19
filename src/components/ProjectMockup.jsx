import React, { useState } from 'react';
import {
  Sparkles,
  Activity,
  Users,
  Calendar,
  CheckCircle2,
  Truck,
  Navigation,
  AlertCircle,
  ArrowUpRight,
  UserCheck,
  Search,
  Star,
  ShieldCheck,
  Cloud,
} from 'lucide-react';

export const ProjectMockup = ({ project }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (project.id === 'cellumina') {
    return (
      <div className="w-full h-full min-h-[280px] sm:min-h-[340px] md:h-full bg-gradient-to-br from-[#060B14] via-[#0D1826] to-[#08101E] p-4 sm:p-5 rounded-[24px] sm:rounded-[32px] flex flex-col justify-between relative overflow-hidden border border-frost/15 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/15 rounded-full blur-2xl pointer-events-none" />

        {/* Top iOS App Header */}
        <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-frost/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent to-accent-cyan flex items-center justify-center shadow-lg shadow-accent/20">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-frost font-bold tracking-tight text-xs sm:text-sm">Cellumina Simulator</span>
                <span className="text-[9px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">v2.1 Live</span>
              </div>
              <p className="text-secondary text-[10px]">SpriteKit Engine · Apple Foundation Models</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-frost/70 bg-black-100/60 px-2.5 py-0.5 rounded-full border border-frost/10">
            <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>60 FPS</span>
          </div>
        </div>

        {/* Interactive Simulation Stage */}
        <div className="relative z-10 my-2.5 flex-1 flex flex-col items-center justify-center bg-black-200/60 rounded-xl border border-frost/10 p-3 min-h-[160px]">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
            {/* Outer Membrane */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-cyan/60 animate-spin" style={{ animationDuration: '40s' }} />
            <div className="absolute inset-2 rounded-full border border-accent/40 animate-pulse" />
            {/* Cytoplasm */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-accent/20 via-accent-cyan/15 to-transparent blur-sm" />
            {/* Nucleus */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 via-purple-700 to-accent flex flex-col items-center justify-center shadow-lg shadow-purple-500/30 z-10">
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Nucleus</span>
              <span className="text-[8px] text-white/70">DNA / RNA</span>
            </div>

            {/* Orbiting Organelles */}
            <div className="absolute top-2 left-6 bg-emerald-500/80 px-2 py-0.5 rounded-full text-[8px] font-semibold text-black shadow-md">
              Mitochondria
            </div>
            <div className="absolute bottom-4 right-6 bg-sky-400/80 px-2 py-0.5 rounded-full text-[8px] font-semibold text-black shadow-md">
              Ribosome
            </div>
          </div>

          <div className="mt-1 text-center">
            <p className="text-frost text-[11px] font-medium">Interactive Cellular Signaling &amp; Amoeba Physics</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="relative z-10 flex items-center justify-between gap-1.5 pt-1">
          {['Eukaryotic Cell', 'Amoeba Physics', 'Cell Signaling'].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 py-1 px-1.5 rounded-lg text-[9px] sm:text-[10px] font-medium transition-all text-center ${
                activeTab === idx
                  ? 'bg-accent/20 border border-accent/60 text-frost'
                  : 'bg-black-100/50 text-secondary hover:text-frost border border-frost/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (project.id === 'loop') {
    return (
      <div className="w-full h-full min-h-[280px] sm:min-h-[340px] md:h-full bg-gradient-to-br from-[#120B1A] via-[#1A1024] to-[#0D0914] p-4 sm:p-5 rounded-[24px] sm:rounded-[32px] flex flex-col justify-between relative overflow-hidden border border-frost/15 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top iOS App Header */}
        <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-frost/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#9B1FD9] to-[#E85D75] flex items-center justify-center shadow-lg shadow-purple-600/30">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-frost font-bold tracking-tight text-xs sm:text-sm">Loop Workspace</span>
                <span className="text-[9px] font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded-full">TestFlight</span>
              </div>
              <p className="text-secondary text-[10px]">Multi-Tenant · SwiftUI &amp; PostgreSQL</p>
            </div>
          </div>
          <span className="text-[11px] text-frost/70 bg-black-100/60 px-2.5 py-0.5 rounded-full border border-frost/10">
            Galgotias Hub
          </span>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="relative z-10 my-2 grid grid-cols-2 gap-2">
          <div className="bg-black-200/70 p-2.5 rounded-xl border border-frost/10">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[9px] text-secondary uppercase font-medium">Active Members</span>
              <Users className="w-3 h-3 text-accent" />
            </div>
            <p className="text-frost text-base sm:text-lg font-bold">1,248</p>
            <p className="text-[9px] text-emerald-400">+14% this month</p>
          </div>

          <div className="bg-black-200/70 p-2.5 rounded-xl border border-frost/10">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[9px] text-secondary uppercase font-medium">Pending Approvals</span>
              <CheckCircle2 className="w-3 h-3 text-amber-400" />
            </div>
            <p className="text-frost text-base sm:text-lg font-bold">7 Requests</p>
            <p className="text-[9px] text-secondary">3 Events · 4 Budgets</p>
          </div>
        </div>

        {/* Live Feed */}
        <div className="relative z-10 bg-black-200/80 rounded-xl border border-frost/10 p-2.5 flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[11px] pb-1 border-b border-frost/5">
            <span className="text-frost font-semibold text-[10px] uppercase tracking-wider">Upcoming Announcements</span>
            <span className="text-[9px] text-accent font-medium">View All</span>
          </div>
          <div className="flex items-center justify-between text-[10px] p-1.5 rounded-lg bg-tertiary/70 border border-frost/5">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-accent-cyan" />
              <span className="text-frost truncate">Annual Hackathon Registration Open</span>
            </div>
            <span className="text-[8px] bg-accent/20 text-frost px-1.5 py-0.5 rounded-full shrink-0">Pinned</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative z-10 pt-1.5 flex items-center justify-between text-[11px] text-secondary">
          <span>Multi-tenant organization architecture</span>
          <span className="text-accent font-medium flex items-center gap-1">
            TestFlight Beta <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    );
  }

  if (project.id === 'connexus') {
    return (
      <div className="w-full h-full min-h-[280px] sm:min-h-[340px] md:h-full bg-gradient-to-br from-[#1A1207] via-[#24170A] to-[#120B04] p-4 sm:p-5 rounded-[24px] sm:rounded-[32px] flex flex-col justify-between relative overflow-hidden border border-amber-500/25 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Top App Header */}
        <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-frost/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
              <UserCheck className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-frost font-bold tracking-tight text-xs sm:text-sm">ConneXus Contact Hub</span>
                <span className="text-[9px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">Spring Boot 3</span>
              </div>
              <p className="text-secondary text-[10px]">OAuth 2.0 · MySQL &amp; Cloudinary</p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab(activeTab === 0 ? 1 : 0)}
            className="text-[10px] text-amber-300 bg-amber-950/70 border border-amber-500/30 px-2.5 py-1 rounded-full flex items-center gap-1 hover:bg-amber-900/60 transition-colors cursor-pointer"
          >
            {activeTab === 0 ? 'View Screenshot' : 'Live UI'}
          </button>
        </div>

        {/* Body: Toggle between Live Interactive Mockup and Production Screenshot */}
        {activeTab === 1 ? (
          <div className="relative z-10 my-2.5 flex-1 rounded-xl overflow-hidden border border-frost/15 bg-black-200/80 min-h-[160px] flex items-center justify-center">
            <img
              src="/assets/connexus-contacts.png"
              alt="Connexus Contacts Dashboard"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
        ) : (
          <div className="relative z-10 my-2 flex-1 flex flex-col justify-between gap-1.5">
            {/* Search Bar */}
            <div className="flex items-center gap-2 bg-black-200/80 rounded-xl border border-frost/10 px-3 py-1.5">
              <Search className="w-3.5 h-3.5 text-secondary" />
              <span className="text-secondary text-[11px] font-light truncate">Search contacts by name, phone or email...</span>
              <span className="ml-auto text-[9px] bg-primary/60 border border-frost/10 px-2 py-0.5 rounded text-frost/70 shrink-0">All (24)</span>
            </div>

            {/* Contact Rows */}
            <div className="flex flex-col gap-1.5">
              {[
                { name: 'Sarah Jenkins', role: 'Product Lead', email: 'sarah.j@techcorp.io', phone: '+1 (555) 382-9012', favorite: true },
                { name: 'Alex Rivera', role: 'Design Systems', email: 'alex.r@designhub.com', phone: '+1 (555) 724-1189', favorite: true },
                { name: 'Devon Vance', role: 'Backend Engineer', email: 'devon@cloudsystems.dev', phone: '+1 (555) 901-4432', favorite: false },
              ].map((c) => (
                <div
                  key={c.name}
                  className="bg-black-200/70 hover:bg-black-200 border border-frost/10 hover:border-amber-500/40 rounded-xl p-2 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                      {c.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-frost text-xs font-semibold truncate leading-none">{c.name}</p>
                        {c.favorite && <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />}
                      </div>
                      <p className="text-secondary text-[10px] truncate mt-0.5">{c.email} · {c.phone}</p>
                    </div>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 shrink-0">
                    {c.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Details */}
        <div className="relative z-10 pt-1.5 border-t border-frost/10 flex items-center justify-between text-[10px] text-secondary">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3 h-3" />
              OAuth 2.0 (Google &amp; GitHub)
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-sky-400">
              <Cloud className="w-3 h-3" />
              Cloudinary CDN
            </span>
          </div>
          <span className="text-amber-400 font-mono text-[9px]">MySQL 8.0</span>
        </div>
      </div>
    );
  }

  // FleetOS
  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[340px] md:h-full bg-gradient-to-br from-[#061511] via-[#0A1F19] to-[#07130F] p-4 sm:p-5 rounded-[24px] sm:rounded-[32px] flex flex-col justify-between relative overflow-hidden border border-frost/15 shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Top iOS App Header */}
      <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-frost/10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-600/30">
            <Truck className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-frost font-bold tracking-tight text-xs sm:text-sm">FleetOS Enterprise</span>
              <span className="text-[9px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">Infosys MDC</span>
            </div>
            <p className="text-secondary text-[10px]">Role-Based · Managers, Drivers &amp; Maintenance</p>
          </div>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Live Telematics
        </span>
      </div>

      {/* Telematics Metrics */}
      <div className="relative z-10 my-2 grid grid-cols-3 gap-1.5">
        <div className="bg-black-200/70 p-2 rounded-xl border border-frost/10 text-center">
          <p className="text-[9px] text-secondary uppercase font-medium">Active</p>
          <p className="text-frost text-sm sm:text-base font-bold">48/52</p>
        </div>
        <div className="bg-black-200/70 p-2 rounded-xl border border-frost/10 text-center">
          <p className="text-[9px] text-secondary uppercase font-medium">On-Road</p>
          <p className="text-frost text-sm sm:text-base font-bold">34 Trips</p>
        </div>
        <div className="bg-black-200/70 p-2 rounded-xl border border-frost/10 text-center">
          <p className="text-[9px] text-secondary uppercase font-medium">Service Due</p>
          <p className="text-amber-400 text-sm sm:text-base font-bold">4 Units</p>
        </div>
      </div>

      {/* Dispatch item */}
      <div className="relative z-10 bg-black-200/80 rounded-xl border border-frost/10 p-2.5 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-2">
          <Navigation className="w-3.5 h-3.5 text-emerald-400" />
          <div>
            <p className="text-frost font-medium leading-none">Vehicle #FL-802 · Bangalore → Mysore</p>
            <p className="text-secondary text-[9px] mt-0.5">Driver: R. Kumar · ETA: 42 mins</p>
          </div>
        </div>
        <span className="text-[8px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full">On Time</span>
      </div>

      {/* Footer Details */}
      <div className="relative z-10 pt-1.5 flex items-center justify-between text-[11px] text-secondary">
        <span>Infosys Mysore Development Centre</span>
        <span className="text-emerald-400 font-medium">Agile / Jira Sprint</span>
      </div>
    </div>
  );
};

export default ProjectMockup;
