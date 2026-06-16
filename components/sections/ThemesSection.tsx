"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Building2,
  TrendingUp,
  Leaf,
  GraduationCap,
  Hash,
} from "lucide-react";
import { THEMES } from "@/lib/constants";

const THEME_ICONS = { Brain, Heart, Building2, TrendingUp, Leaf, GraduationCap };

const COLOR_MAP: Record<string, {
  border: string; badge: string; iconBg: string; icon: string;
  glow: string; tag: string;
}> = {
  purple: {
    border: "hover:border-purple-500/40",
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    icon: "text-purple-400",
    glow: "group-hover:shadow-purple-500/15",
    tag: "bg-purple-500/10 text-purple-300",
  },
  red: {
    border: "hover:border-red-500/40",
    badge: "bg-red-500/15 text-red-300 border-red-500/30",
    iconBg: "bg-red-500/10 border-red-500/20",
    icon: "text-red-400",
    glow: "group-hover:shadow-red-500/15",
    tag: "bg-red-500/10 text-red-300",
  },
  blue: {
    border: "hover:border-blue-500/40",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    icon: "text-blue-400",
    glow: "group-hover:shadow-blue-500/15",
    tag: "bg-blue-500/10 text-blue-300",
  },
  green: {
    border: "hover:border-green-500/40",
    badge: "bg-green-500/15 text-green-300 border-green-500/30",
    iconBg: "bg-green-500/10 border-green-500/20",
    icon: "text-green-400",
    glow: "group-hover:shadow-green-500/15",
    tag: "bg-green-500/10 text-green-300",
  },
  emerald: {
    border: "hover:border-emerald-500/40",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    icon: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/15",
    tag: "bg-emerald-500/10 text-emerald-300",
  },
  orange: {
    border: "hover:border-orange-500/40",
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    icon: "text-orange-400",
    glow: "group-hover:shadow-orange-500/15",
    tag: "bg-orange-500/10 text-orange-300",
  },
};

export function ThemesSection() {
  return (
    <section
      id="themes"
      className="relative py-24 lg:py-32 bg-[#050508] overflow-hidden"
      aria-label="Hackathon Themes"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 hero-grid opacity-30" />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8 bg-purple-600 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-8 bg-blue-600 pointer-events-none" />

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
            Challenge Domains
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
            Hackathon{" "}
            <span className="text-gradient">Themes</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            Six critical domains shaping the future — pick your arena and build solutions that matter.
          </p>
        </motion.div>

        {/* Theme Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {THEMES.map((theme, i) => {
            const Icon = THEME_ICONS[theme.icon as keyof typeof THEME_ICONS] || Brain;
            const colors = COLOR_MAP[theme.color] ?? COLOR_MAP.purple;

            return (
              <motion.article
                key={theme.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative flex flex-col p-7 rounded-2xl bg-[#0a0a14] border border-white/6 ${colors.border} card-hover shadow-xl ${colors.glow} overflow-hidden`}
              >
                {/* Corner shimmer */}
                <div className="absolute inset-0 rounded-2xl shimmer-border" />

                {/* Number watermark */}
                <span
                  className="absolute -top-2 -right-2 text-8xl font-black pointer-events-none select-none leading-none"
                  style={{
                    fontFamily: "var(--font-orbitron, sans-serif)",
                    color: "rgba(255,255,255,0.025)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl border ${colors.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{theme.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed flex-1 mb-5">
                  {theme.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${colors.badge} text-xs font-semibold`}>
                    <Hash className="w-3 h-3" />
                    {theme.challenges} Challenges
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.tag}`}>
                    Open Domain
                  </span>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${
                  theme.color === "purple" ? "via-purple-500/50" :
                  theme.color === "red" ? "via-red-500/50" :
                  theme.color === "blue" ? "via-blue-500/50" :
                  theme.color === "green" ? "via-green-500/50" :
                  theme.color === "emerald" ? "via-emerald-500/50" :
                  "via-orange-500/50"
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.article>
            );
          })}
        </div>

        {/* Theme note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-5 rounded-2xl bg-glass border border-white/6 text-center"
        >
          <p className="text-white/50 text-sm">
            <span className="text-white/80 font-semibold">Problem statements</span> for each theme
            will be released 48 hours before Phase 3 begins. Teams choose one theme at registration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
