import React, { useState } from 'react';
import { Play, Sparkles, Activity, ShieldCheck, Users, Calendar, CheckCircle2, Truck, Navigation, AlertCircle, ArrowUpRight, Cpu } from 'lucide-react';

export const ProjectMockup = ({ project }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (project.id === 'cellumina') {
    return (
      <div className="w-full h-full min-h-[320px] sm:min-h-[420px] bg-gradient-to-br from-[#060B14] via-[#0D1826] to-[#08101E] p-4 sm:p-6 rounded-[28px] sm:rounded-[36px] flex flex-col justify-between relative overflow-hidden border border-frost/15 shadow-2xl">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top iOS App Header */}
        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-frost/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-accent to-accent-cyan flex items-center justify-center shadow-lg shadow-accent/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-frost font-bold tracking-tight text-sm sm:text-base">Cellumina Simulator</span>
                <span className="text-[10px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">v2.1 Live</span>
              </div>
              <p className="text-secondary text-[11px]">SpriteKit Engine · Apple Foundation Models</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-frost/70 bg-black-100/60 backdrop-blur-md px-3 py-1 rounded-full border border-frost/10">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>60 FPS Simulation</span>
          </div>
        </div>

        {/* Interactive Simulation Stage */}
        <div className="relative z-10 my-4 flex-1 flex flex-col items-center justify-center bg-black-200/60 rounded-2xl border border-frost/10 p-4 min-h-[200px]">
          {/* Animated Cell Biology Canvas Graphic */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
            {/* Outer Membrane */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-cyan/60 animate-spin" style={{ animationDuration: '40s' }} />
            <div className="absolute inset-3 rounded-full border border-accent/40 animate-pulse" />
            {/* Cytoplasm */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-accent/20 via-accent-cyan/15 to-transparent blur-sm" />
            {/* Nucleus */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 via-purple-700 to-accent flex flex-col items-center justify-center shadow-lg shadow-purple-500/30 z-10 cursor-pointer hover:scale-105 transition-transform">
              <span className="text-[11px] font-bold text-white uppercase tracking-wider">Nucleus</span>
              <span className="text-[9px] text-white/70">DNA / RNA</span>
            </div>

            {/* Orbiting Organelles */}
            <div className="absolute top-4 left-10 bg-emerald-500/80 px-2 py-0.5 rounded-full text-[9px] font-semibold text-black shadow-md shadow-emerald-500/20 animate-bounce" style={{ animationDuration: '4s' }}>
              Mitochondria
            </div>
            <div className="absolute bottom-6 right-8 bg-sky-400/80 px-2 py-0.5 rounded-full text-[9px] font-semibold text-black shadow-md shadow-sky-400/20">
              Ribosome Cluster
            </div>
            <div className="absolute bottom-5 left-8 bg-purple-400/80 px-2 py-0.5 rounded-full text-[9px] font-semibold text-black">
              Endoplasmic Reticulum
            </div>
          </div>

          <div className="mt-2 text-center">
            <p className="text-frost text-xs font-medium">Interactive Cellular Signaling &amp; Amoeba Locomotion</p>
            <p className="text-secondary text-[10px]">Real-time SpriteKit physics engine with fluid particle dynamics</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="relative z-10 flex items-center justify-between gap-2 pt-2">
          {['Eukaryotic Cell', 'Amoeba Simulation', 'Cellular Signaling'].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 py-1.5 px-2 rounded-xl text-[10px] sm:text-xs font-medium transition-all duration-200 text-center ${
                activeTab === idx
                  ? 'bg-accent/20 border border-accent/60 text-frost shadow-md shadow-accent/10'
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
      <div className="w-full h-full min-h-[320px] sm:min-h-[420px] bg-gradient-to-br from-[#120B1A] via-[#1A1024] to-[#0D0914] p-4 sm:p-6 rounded-[28px] sm:rounded-[36px] flex flex-col justify-between relative overflow-hidden border border-frost/15 shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top iOS App Header */}
        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-frost/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#9B1FD9] to-[#E85D75] flex items-center justify-center shadow-lg shadow-purple-600/30">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-frost font-bold tracking-tight text-sm sm:text-base">Loop Workspace</span>
                <span className="text-[10px] font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded-full">TestFlight</span>
              </div>
              <p className="text-secondary text-[11px]">Multi-Tenant · SwiftUI &amp; PostgreSQL</p>
            </div>
          </div>
          <span className="text-xs text-frost/70 bg-black-100/60 px-3 py-1 rounded-full border border-frost/10">
            Galgotias Hub
          </span>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="relative z-10 my-3 grid grid-cols-2 gap-2.5">
          <div className="bg-black-200/70 p-3 rounded-2xl border border-frost/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-secondary uppercase font-medium">Active Members</span>
              <Users className="w-3.5 h-3.5 text-accent" />
            </div>
            <p className="text-frost text-xl font-bold">1,248</p>
            <p className="text-[10px] text-emerald-400 mt-0.5">+14% this month</p>
          </div>

          <div className="bg-black-200/70 p-3 rounded-2xl border border-frost/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-secondary uppercase font-medium">Pending Approvals</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <p className="text-frost text-xl font-bold">7 Requests</p>
            <p className="text-[10px] text-secondary mt-0.5">3 Events · 4 Budgets</p>
          </div>
        </div>

        {/* Live Feed / Approvals List */}
        <div className="relative z-10 bg-black-200/80 rounded-2xl border border-frost/10 p-3 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs pb-1 border-b border-frost/5">
            <span className="text-frost font-semibold text-[11px] uppercase tracking-wider">Upcoming Announcements</span>
            <span className="text-[10px] text-accent font-medium cursor-pointer">View All</span>
          </div>
          <div className="flex items-center justify-between text-[11px] p-2 rounded-xl bg-tertiary/70 border border-frost/5">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
              <span className="text-frost">Annual Hackathon Registration Open</span>
            </div>
            <span className="text-[9px] bg-accent/20 text-frost px-2 py-0.5 rounded-full">Pinned</span>
          </div>
          <div className="flex items-center justify-between text-[11px] p-2 rounded-xl bg-tertiary/70 border border-frost/5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-frost">Executive Board Meeting Approvals</span>
            </div>
            <span className="text-[9px] text-secondary">Today, 4:00 PM</span>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="relative z-10 pt-2 flex items-center justify-between text-xs text-secondary">
          <span>Unified platform for multi-tier organizations</span>
          <span className="text-accent font-medium flex items-center gap-1">
            TestFlight Beta <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    );
  }

  // FleetOS (Fleet Management Application)
  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[420px] bg-gradient-to-br from-[#061511] via-[#0A1F19] to-[#07130F] p-4 sm:p-6 rounded-[28px] sm:rounded-[36px] flex flex-col justify-between relative overflow-hidden border border-frost/15 shadow-2xl">
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top iOS App Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-frost/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-600/30">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-frost font-bold tracking-tight text-sm sm:text-base">FleetOS Enterprise</span>
              <span className="text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">Infosys MDC</span>
            </div>
            <p className="text-secondary text-[11px]">Role-Based · Managers, Drivers &amp; Maintenance</p>
          </div>
        </div>
        <span className="text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Live Telematics
        </span>
      </div>

      {/* Telematics Metrics */}
      <div className="relative z-10 my-3 grid grid-cols-3 gap-2">
        <div className="bg-black-200/70 p-2.5 rounded-2xl border border-frost/10 text-center">
          <p className="text-[10px] text-secondary uppercase font-medium">Active Fleet</p>
          <p className="text-frost text-lg font-bold mt-0.5">48 / 52</p>
          <p className="text-[9px] text-emerald-400">92% Operational</p>
        </div>
        <div className="bg-black-200/70 p-2.5 rounded-2xl border border-frost/10 text-center">
          <p className="text-[10px] text-secondary uppercase font-medium">On-Road Trips</p>
          <p className="text-frost text-lg font-bold mt-0.5">34</p>
          <p className="text-[9px] text-secondary">Real-time GPS</p>
        </div>
        <div className="bg-black-200/70 p-2.5 rounded-2xl border border-frost/10 text-center">
          <p className="text-[10px] text-secondary uppercase font-medium">Maintenance</p>
          <p className="text-frost text-lg font-bold mt-0.5 text-amber-400">4</p>
          <p className="text-[9px] text-secondary">Scheduled</p>
        </div>
      </div>

      {/* Simulated Dispatch Queue */}
      <div className="relative z-10 bg-black-200/80 rounded-2xl border border-frost/10 p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs pb-1 border-b border-frost/5">
          <span className="text-frost font-semibold text-[11px] uppercase tracking-wider">Live Route &amp; Driver Status</span>
          <span className="text-[10px] text-emerald-400">Supabase Sync</span>
        </div>
        <div className="flex items-center justify-between text-[11px] p-2 rounded-xl bg-tertiary/70 border border-frost/5">
          <div className="flex items-center gap-2">
            <Navigation className="w-3.5 h-3.5 text-emerald-400" />
            <div>
              <p className="text-frost font-medium leading-none">Vehicle #FL-802 · Bangalore → Mysore</p>
              <p className="text-secondary text-[9px] mt-0.5">Driver: R. Kumar · ETA: 42 mins</p>
            </div>
          </div>
          <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">On Time</span>
        </div>
        <div className="flex items-center justify-between text-[11px] p-2 rounded-xl bg-tertiary/70 border border-frost/5">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <div>
              <p className="text-frost font-medium leading-none">Vehicle #FL-410 · Preventive Inspection</p>
              <p className="text-secondary text-[9px] mt-0.5">Brake Pad Telemetry · Mysore Depot</p>
            </div>
          </div>
          <span className="text-[9px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">Service Due</span>
        </div>
      </div>

      {/* Footer Details */}
      <div className="relative z-10 pt-2 flex items-center justify-between text-xs text-secondary">
        <span>Infosys Mysore Development Centre</span>
        <span className="text-emerald-400 font-medium">Agile / Jira Sprint</span>
      </div>
    </div>
  );
};

export default ProjectMockup;
