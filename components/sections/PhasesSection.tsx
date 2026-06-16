"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardList,
  Code2,
  Zap,
  Presentation,
  Clock,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { PHASES } from "@/lib/constants";

const PHASE_ICONS = { ClipboardList, Code2, Zap, Presentation };

const PHASE_COLORS = [
  {
    dot: "bg-purple-500",
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    icon: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    glow: "group-hover:shadow-purple-500/20",
    line: "from-purple-500",
    border: "group-hover:border-purple-500/40",
  },
  {
    dot: "bg-blue-500",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    icon: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    glow: "group-hover:shadow-blue-500/20",
    line: "from-blue-500",
    border: "group-hover:border-blue-500/40",
  },
  {
    dot: "bg-violet-500",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    icon: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    glow: "group-hover:shadow-violet-500/20",
    line: "from-violet-500",
    border: "group-hover:border-violet-500/40",
  },
  {
    dot: "bg-cyan-500",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    icon: "text-cyan-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    glow: "group-hover:shadow-cyan-500/20",
    line: "from-cyan-500",
    border: "group-hover:border-cyan-500/40",
  },
];

function PhaseCard({ phase, index }: { phase: (typeof PHASES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = PHASE_ICONS[phase.icon as keyof typeof PHASE_ICONS] || Zap;
  const colors = PHASE_COLORS[index];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="relative"
    >
      {/* Desktop: alternating sides */}
      <div
        className={`group relative flex flex-col p-5 rounded-2xl bg-[#0a0a14] border border-white/6 ${colors.border} transition-all duration-500 card-hover overflow-hidden shadow-xl ${colors.glow}`}
      >
        {/* Top gradient line */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.line} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`} />

        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl border ${colors.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className={`w-5 h-5 ${colors.icon}`} />
            </div>
            <div>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${colors.badge} mb-1`}>
                Phase {phase.number}
              </span>
              <h3 className="text-base font-bold text-white leading-tight">{phase.title}</h3>
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-1.5 mb-4">
          <Clock className={`w-3.5 h-3.5 ${colors.icon}`} />
          <span className="text-white/50 text-xs font-semibold tracking-wide uppercase">
            Duration: {phase.duration}
          </span>
        </div>

        {/* Description */}
        <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">{phase.description}</p>

        {/* Details */}
        <ul className="space-y-2.5">
          {phase.details.map((detail, di) => (
            <motion.li
              key={di}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + di * 0.08 + 0.3 }}
              className="flex items-start gap-2.5"
            >
              <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${colors.icon}`} />
              <span className="text-white/65 text-xs sm:text-sm">{detail}</span>
            </motion.li>
          ))}
        </ul>

        {/* Phase number watermark */}
        <div
          className="absolute -bottom-4 -right-4 text-[90px] font-black leading-none opacity-3 pointer-events-none select-none"
          style={{
            fontFamily: "var(--font-orbitron, sans-serif)",
            color: "rgba(255,255,255,0.03)",
          }}
        >
          {phase.number}
        </div>
      </div>
    </motion.div>
  );
}

export function PhasesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="phases"
      className="relative py-20 lg:py-24 bg-[#050508] overflow-hidden"
      aria-label="Selection Process Phases"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-8 bg-gradient-to-r from-purple-600 to-blue-600 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-widest uppercase mb-4">
            Selection Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Four Phases to{" "}
            <span className="text-gradient">Glory</span>
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-2xl mx-auto">
            A rigorous multi-phase process designed to identify exceptional talent at every level.
          </p>
        </motion.div>

        {/* Timeline — vertical connector */}
        <div className="relative">
          {/* Central connecting line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full w-full origin-top bg-gradient-to-b from-purple-500 via-blue-500 via-violet-500 to-cyan-500 opacity-30"
            />
          </div>

          {/* Phase cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {PHASES.map((phase, i) => (
              <div
                key={phase.number}
                className={`relative ${i % 2 === 0 ? "lg:pr-8" : "lg:pl-8 lg:mt-0"}`}
              >
                {/* Connector dot (desktop) */}
                <div
                  className={`hidden lg:block absolute ${
                    i % 2 === 0 ? "-right-3" : "-left-3"
                  } top-8 w-6 h-6 rounded-full border-4 border-[#050508] z-20 ${PHASE_COLORS[i].dot} shadow-lg`}
                />

                {/* Arrow connecting to center */}
                <div
                  className={`hidden lg:flex absolute ${
                    i % 2 === 0 ? "right-0 justify-end" : "left-0"
                  } top-[42px] w-8 items-center`}
                >
                  <ChevronRight
                    className={`w-4 h-4 ${PHASE_COLORS[i].icon} ${i % 2 === 0 ? "rotate-0" : "rotate-180"}`}
                  />
                </div>

                <PhaseCard phase={phase} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-white/40 text-sm">
            Phases run from{" "}
            <span className="text-white/70 font-semibold">February 2026</span> through{" "}
            <span className="text-white/70 font-semibold">May 2026</span> · All rounds conducted online except Phase 3 & 4
          </p>
        </motion.div>
      </div>
    </section>
  );
}
