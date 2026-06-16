"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-purple-500/40 bg-purple-500/5"
          : "border-white/6 bg-[#0a0a14] hover:border-white/12"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <span
            className="shrink-0 mt-0.5 text-xs font-bold text-purple-400/60 w-5"
            style={{ fontFamily: "var(--font-orbitron, sans-serif)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${
              isOpen ? "text-white" : "text-white/80 group-hover:text-white"
            }`}
          >
            {item.question}
          </span>
        </div>
        <span
          className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
            isOpen
              ? "border-purple-500/40 bg-purple-500/20 text-purple-400"
              : "border-white/10 bg-white/4 text-white/40 group-hover:border-white/20 group-hover:text-white/70"
          }`}
        >
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pl-14">
              <p className="text-white/60 text-sm leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 bg-[#070710] overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* Ambient */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl opacity-6 bg-purple-600 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
            Got{" "}
            <span className="text-gradient">Questions?</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Everything you need to know about Vynedam Talent Hunt 2026.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-glass border border-white/6 text-center sm:text-left"
        >
          <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center shrink-0">
            <MessageCircle className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold mb-0.5">Still have questions?</p>
            <p className="text-white/50 text-sm">
              Reach out to our support team — we typically respond within 2 hours.
            </p>
          </div>
          <a
            href="mailto:talenthunt@vynedam.com"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white font-semibold text-sm transition-colors"
          >
            Contact Us →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
