"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Sparkles, Trophy } from "lucide-react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
const particles = [
  { left: "10%", top: "20%", duration: 4, delay: 0.5 },
  { left: "25%", top: "60%", duration: 5, delay: 1 },
  { left: "40%", top: "15%", duration: 6, delay: 1.5 },
  { left: "55%", top: "75%", duration: 4.5, delay: 2 },
  { left: "70%", top: "35%", duration: 5.5, delay: 0.8 },
  { left: "85%", top: "55%", duration: 6.2, delay: 1.2 },
  { left: "15%", top: "85%", duration: 4.8, delay: 2.5 },
  { left: "35%", top: "45%", duration: 5.8, delay: 1.7 },
  { left: "50%", top: "90%", duration: 6, delay: 0.3 },
  { left: "65%", top: "10%", duration: 5, delay: 2.1 },
  { left: "80%", top: "80%", duration: 4.7, delay: 1.1 },
  { left: "92%", top: "25%", duration: 5.9, delay: 2.3 },
];
  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050508]"
      aria-label="Hero Section"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 hero-grid opacity-60" />

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(transparent 0%, rgba(139,92,246,0.025) 50%, transparent 100%)",
            backgroundSize: "100% 120px",
            animation: "scanLine 10s linear infinite",
          }}
        />
      </motion.div>

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="orb w-[600px] h-[600px] top-[-200px] left-[-200px]"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="orb w-[500px] h-[500px] bottom-[-150px] right-[-100px]"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="orb w-[400px] h-[400px] top-[30%] right-[15%]"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)" }}
      />

{/* Floating particles */}
{particles.map((particle, i) => (
  <motion.div
    key={i}
    className="absolute w-1 h-1 rounded-full bg-purple-400/60"
    style={{
      left: particle.left,
      top: particle.top,
    }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration: particle.duration,
      repeat: Infinity,
      delay: particle.delay,
      ease: "easeInOut",
    }}
  />
))}

      {/* Content */}
      <motion.div
        style={{ opacity }}
       className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-32 min-h-[85vh] flex flex-col justify-center"
      >
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          
        </motion.div> */}

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         <h1
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1] tracking-tight mb-4"
>
            <span className="block">VYNEDAM</span>
            <span className="block text-gradient glow-text">TALENT</span>
            <span className="block">HUNT 2026</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-lg sm:text-xl lg:text-2xl text-white/60 font-medium max-w-3xl mx-auto leading-relaxed"
        >
          India&apos;s Largest Technical Talent Discovery Platform
          <span className="block mt-2 text-base sm:text-lg text-white/40">
            Compete. Build. Get Hired. Change the World.
          </span>
        </motion.p>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-3 mt-8 mb-10"
        >
          {["National Level", "₹5L+ in Prizes", "40+ Internships", "24hr Hackathon"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm font-medium text-white/70 border border-white/10 rounded-full bg-white/5"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139,92,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("contact")}
            className="group relative flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 text-white font-bold text-base shadow-2xl shadow-purple-500/30 overflow-hidden transition-all"
          >
            <span className="relative z-10">Register Now</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("phases")}
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white/8 border border-white/15 text-white font-semibold text-base hover:bg-white/12 hover:border-white/25 transition-all backdrop-blur-sm"
          >
            <Trophy className="w-4 h-4 text-purple-400" />
            Explore Challenges
          </motion.button>
        </motion.div>

        {/* Stats preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: "10K+", label: "Participants" },
            { value: "500+", label: "Teams" },
            { value: "40+", label: "Internships" },
            { value: "100+", label: "Mentors" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center p-3 rounded-xl bg-glass border border-white/6"
            >
              <span
                className="text-2xl font-black text-gradient"
                style={{ fontFamily: "var(--font-orbitron, sans-serif)" }}
              >
                {value}
              </span>
              <span className="text-xs text-white/50 mt-1 font-medium">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => handleScroll("stats")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll to next section"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
