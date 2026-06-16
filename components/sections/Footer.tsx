"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Mail,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

const FOOTER_LINKS = {
  Platform: [
    { label: "About", href: "#about" },
    { label: "Selection Process", href: "#phases" },
    { label: "Internships", href: "#internships" },
    { label: "Themes", href: "#themes" },
    { label: "Winners", href: "#winners" },
  ],
  Resources: [
    { label: "FAQ", href: "#faq" },
    { label: "Brochure", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Code of Conduct", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

const SOCIAL_LINKS = [
  { Icon: Twitter, href: SITE_CONFIG.socialLinks.twitter, label: "Twitter" },
  { Icon: Linkedin, href: SITE_CONFIG.socialLinks.linkedin, label: "LinkedIn" },
  { Icon: Instagram, href: SITE_CONFIG.socialLinks.instagram, label: "Instagram" },
  { Icon: Youtube, href: SITE_CONFIG.socialLinks.youtube, label: "YouTube" },
  { Icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030306] border-t border-white/5 overflow-hidden" role="contentinfo">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-5 bg-gradient-to-r from-purple-600 to-blue-600 pointer-events-none" />

      {/* Newsletter Banner */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-r from-purple-900/30 via-violet-900/20 to-blue-900/30 border border-purple-500/20"
          >
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-1">Stay in the Loop</h3>
              <p className="text-white/50 text-sm">
                Get updates on registrations, announcements, and results.
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-56 px-4 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all"
              />
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2.5 mb-5 group"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Zap className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <div className="flex flex-col leading-none">
                  <span
                    className="text-white font-bold text-base"
                    style={{ fontFamily: "var(--font-orbitron, sans-serif)" }}
                  >
                    VYNEDAM
                  </span>
                  <span className="text-purple-400 text-[10px] font-medium tracking-widest uppercase">
                    Talent Hunt 2026
                  </span>
                </div>
              </button>

              <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
                India&apos;s largest national-level technical talent discovery platform — bridging brilliant
                students with industry opportunities since 2022.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => handleNavClick(href)}
                      className="text-white/45 hover:text-white/80 text-sm transition-colors text-left flex items-center gap-1 group"
                    >
                      {label}
                      {href === "#" && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Vynedam Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-white/25 text-xs flex items-center gap-1">
                Built with <Heart className="w-3 h-3 text-red-400 fill-red-400 inline" /> in India
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-white/40 hover:text-white/70 text-xs transition-colors"
                aria-label="Scroll to top"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
