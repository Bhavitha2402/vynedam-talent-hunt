"use client";

import { motion } from "framer-motion";
import {
Globe,
Code2,
Briefcase,
Lightbulb,
CheckCircle2,
ArrowRight,
} from "lucide-react";

const ABOUT_FEATURES = [
{
icon: Globe,
title: "National Level Hackathon",
description:
"A prestigious technical talent discovery platform bringing together students from engineering colleges and universities across India. Compete, innovate, and showcase your skills on a national stage through a structured selection process.",
highlights: [
"National-Level Participation",
"24-Hour Innovation Challenge",
"Technical Talent Discovery",
],
color: "purple",
gradient: "from-purple-600/15 to-purple-900/5",
border: "border-purple-500/20",
accent: "text-purple-400",
},
{
icon: Code2,
title: "Technical Assessments",
description:
"Participants progress through multiple evaluation phases designed to assess aptitude, technical knowledge, analytical thinking, and practical problem-solving abilities.",
highlights: [
"Logical Reasoning Assessment",
"Technical Evaluation Round",
"Problem Solving Challenges",
],
color: "blue",
gradient: "from-blue-600/15 to-blue-900/5",
border: "border-blue-500/20",
accent: "text-blue-400",
},
{
icon: Briefcase,
title: "Internship Opportunities",
description:
"Outstanding performers gain access to valuable career opportunities through partner organizations and recruiters seeking top technical talent from across the country.",
highlights: [
"40+ Paid Internships",
"Direct Recruitment Pipeline",
"Skill-Based Evaluation",
],
color: "violet",
gradient: "from-violet-600/15 to-violet-900/5",
border: "border-violet-500/20",
accent: "text-violet-400",
},
{
icon: Lightbulb,
title: "Innovation Ecosystem",
description:
"An ecosystem built to connect students, recruiters, sponsors, and industry leaders while creating pathways for learning, networking, and long-term career growth.",
highlights: [
"Sponsor Portal Access",
"Talent Discovery Platform",
"Career Growth Opportunities",
],
color: "cyan",
gradient: "from-cyan-600/15 to-cyan-900/5",
border: "border-cyan-500/20",
accent: "text-cyan-400",
},
];

export function AboutSection() {
return (
  <>
   <section
   id="about"
   className="relative py-24 lg:py-32 bg-[#070710] overflow-hidden"
   aria-label="About Vynedam Talent Hunt"
 >
{/* Background decoration */} <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" /> <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" /> <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 bg-purple-600 pointer-events-none" /> <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 bg-blue-600 pointer-events-none" />

```
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <span className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-widest uppercase mb-4">
        About the Event
      </span>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
        What is{" "}
        <span className="text-gradient">Vynedam</span>
        <br />
        Talent Hunt?
      </h2>

      <p className="mt-6 text-white/55 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
        India&apos;s largest technical talent discovery platform connecting
        students, industry partners, recruiters, and innovation
        opportunities through a structured multi-phase selection process.
      </p>
    </motion.div>

    {/* Feature Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {ABOUT_FEATURES.map((feature, i) => {
        const Icon = feature.icon;

        return (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group relative p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.border} card-hover shimmer-border overflow-hidden`}
          >
            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-purple-500" />

            <div className="flex items-start gap-5">
              <div
                className={`shrink-0 w-14 h-14 rounded-xl bg-white/6 border ${feature.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className={`w-7 h-7 ${feature.accent}`} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {feature.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {feature.description}
                </p>

                <ul className="space-y-2.5">
                  {feature.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${feature.accent}`}
                      />
                      <span className="text-white/70 text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>

    {/* Bottom Banner */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-16 relative overflow-hidden rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-purple-900/40 via-violet-900/40 to-blue-900/40 border border-purple-500/20"
    >
      <div className="absolute inset-0 hero-grid opacity-30" />

      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Ready to showcase your talent?
          </h3>

          <p className="text-white/55 text-base max-w-lg">
            Compete, learn, and unlock internship and recruitment
            opportunities through India&apos;s largest technical talent
            hunt.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
        >
          Start Your Journey
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>
```
</>
);
}
