"use client";

import { motion } from "framer-motion";
import { Users, Users2, Briefcase, Award } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const STATS = [
  {
    value: 10000,
    suffix: "+",
    label: "Participants",
    icon: "Users",
  },
  {
    value: 4,
    suffix: "",
    label: "Selection Phases",
    icon: "Users2",
  },
  {
    value: 40,
    suffix: "+",
    label: "Paid Internships",
    icon: "Briefcase",
  },
  {
    value: 24,
    suffix: "-Hour",
    label: "Hackathon",
    icon: "Award",
  },
];

const ICONS = { Users, Users2, Briefcase, Award };

function StatCard({
  stat,
  index,
}: {
  stat: (typeof STATS)[0];
  index: number;
}) {
  const { count, ref } = useCounterAnimation({
    target: stat.value,
    duration: 2200,
  });

  const Icon = ICONS[stat.icon as keyof typeof ICONS];

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-glass border border-white/6 hover:border-purple-500/30 transition-all duration-500 hover-lift shimmer-border overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/8 group-hover:to-blue-600/8 transition-all duration-500 rounded-2xl" />

      {/* Icon */}
      <div className="relative mb-5">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
        </div>

        <div className="absolute inset-0 rounded-2xl bg-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
      </div>

      {/* Counter */}
      <div
        className="text-4xl lg:text-5xl font-black text-gradient counter-number mb-2 leading-none"
        aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
      >
        {count.toLocaleString()}
        <span className="text-purple-400">{stat.suffix}</span>
      </div>

      {/* Label */}
      <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mt-1">
        {stat.label}
      </p>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section
      id="stats"
      className="relative py-24 lg:py-32 bg-[#050508] overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl bg-gradient-to-r from-purple-600 to-blue-600 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-widest uppercase mb-4">
            By the Numbers
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            The Scale of{" "}
            <span className="text-gradient">Vynedam 2026</span>
          </h2>

          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Thousands of the brightest technical minds competing for
            life-changing opportunities.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl bg-glass border border-white/6"
        >
          <p className="text-white/70 text-center sm:text-left font-medium">
            Join{" "}
            <span className="text-white font-bold">
              10,000+ participants
            </span>{" "}
            from{" "}
            <span className="text-white font-bold">
              colleges across India
            </span>
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
          >
            Secure Your Spot →
          </button>
        </motion.div>
      </div>
    </section>
  );
}