"use client";

import { motion } from "framer-motion";
import {
Code2,
Brain,
BarChart3,
Shield,
Cloud,
Briefcase,
Users,
ArrowUpRight,
} from "lucide-react";
import { INTERNSHIP_CARDS } from "@/lib/constants";

const CARD_ICONS = { Code2, Brain, BarChart3, Shield, Cloud };

export function InternshipSection() {
return ( <section
   id="internships"
   className="relative py-24 lg:py-32 bg-[#070710] overflow-hidden"
   aria-label="Internship Opportunities"
 > <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" /> <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
  {/* Ambient */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-8 bg-blue-600 pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-8 bg-purple-600 pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-6"
    >
      <span className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-widest uppercase mb-4">
        Career Opportunities
      </span>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
        Paid <span className="text-gradient">Internships</span>
      </h2>

      <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
        Top-performing participants gain access to paid internship
        opportunities through our industry partners across multiple
        technology domains.
      </p>
    </motion.div>

    {/* Opportunities Bar */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center justify-center gap-8 flex-wrap py-5 px-8 mb-14 rounded-2xl bg-glass border border-white/6 max-w-3xl mx-auto"
    >
      {[
        { icon: Users, label: "Paid Internship Opportunity", value: "40+" },
        {
          icon: Briefcase,
          label: "Placement",
          value: "Industry Partner Placement",
        },
        {
          icon: Cloud,
          label: "Selection",
          value: "Performance-Based Selection",
        },
      ].map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <Icon className="w-4 h-4 text-purple-400" />
          </div>

          <div>
            <p className="text-xs text-white/40 font-medium">{label}</p>
            <p className="text-sm font-bold text-white">{value}</p>
          </div>
        </div>
      ))}
    </motion.div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {INTERNSHIP_CARDS.map((card, i) => {
        const Icon =
          CARD_ICONS[card.icon as keyof typeof CARD_ICONS] || Code2;

        return (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group relative flex flex-col p-7 rounded-2xl bg-gradient-to-br ${card.gradient} bg-[#0a0a14] border border-white/6 hover:border-purple-500/30 card-hover overflow-hidden`}
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/8 group-hover:to-blue-600/5 transition-all duration-500 rounded-2xl" />

            {/* Top row */}
            <div className="relative flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-white/6 border border-white/8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-purple-400" />
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className="text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-1 rounded-full">
                  {card.openings} Openings
                </span>

                <span className="text-xs text-white/50 font-medium">
                  Paid Internship
                </span>
              </div>
            </div>

            <h3 className="relative text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all">
              {card.title}
            </h3>

            <p className="relative text-white/55 text-sm leading-relaxed mb-5 flex-1">
              {card.description}
            </p>

            {/* Skills */}
            <div className="relative flex flex-wrap gap-2">
              {card.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-medium text-white/70 border border-white/8 rounded-full bg-white/4 hover:border-purple-500/40 hover:text-purple-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Arrow indicator */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="w-4 h-4 text-purple-400" />
            </div>
          </motion.article>
        );
      })}

      {/* More Opportunities */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col items-center justify-center p-7 rounded-2xl border border-dashed border-white/15 hover:border-purple-500/40 transition-colors text-center group cursor-default"
      >
        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <span className="text-2xl font-black text-purple-400">+</span>
        </div>

        <h3 className="text-base font-bold text-white/70 mb-2">
          More Opportunities
        </h3>

        <p className="text-white/40 text-sm">
          Additional internship opportunities will be announced through
          participating industry partners.
        </p>
      </motion.div>
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="mt-14 text-center"
    >
      <p className="text-white/50 text-sm mb-4">
        Internship opportunities are awarded through performance-based
        evaluations during the selection process.
      </p>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg shadow-purple-500/20"
      >
        Explore Opportunities
        <ArrowUpRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  </div>
</section>


);
}
