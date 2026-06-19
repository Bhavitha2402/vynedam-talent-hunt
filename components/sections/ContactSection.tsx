"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  User,
  GraduationCap,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";
import type { ContactForm } from "@/types";

const CATEGORIES = [
  "General Enquiry",
  "Registration Help",
  "Technical Issues",
  "Internship Query",
  "Sponsorship",
  "Media & Press",
];

const INITIAL_FORM: ContactForm = {
  name: "",
  email: "",
  college: "",
  phone: "",
  category: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (): boolean => {
    const newErrors: Partial<ContactForm> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email required";
    if (!form.college.trim()) newErrors.college = "College name is required";
    if (!form.message.trim() || form.message.length < 20)
      newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    setStatus("loading");

    await addDoc(collection(db, "participants"), {
      name: form.name,
      email: form.email,
      college: form.college,
      phone: form.phone,
      category: form.category,
      message: form.message,
      createdAt: new Date(),
    });

    setStatus("success");
  } catch (error) {
    console.error("Firebase Error:", error);
    alert("Something went wrong.");
    setStatus("idle");
  }
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-[#050508] overflow-hidden"
      aria-label="Contact Section"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-8 bg-purple-600 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-8 bg-blue-600 pointer-events-none" />

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
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
            Register &{" "}
            <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Register your interest or get in touch with our team — we respond within 2 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="p-7 rounded-2xl bg-glass border border-white/6 flex-1">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                  { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                  { icon: MapPin, label: "Address", value: SITE_CONFIG.address, href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="text-white/80 text-sm hover:text-white transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-white/80 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key dates */}
            <div className="p-7 rounded-2xl bg-glass border border-white/6">
              <h3 className="text-base font-bold text-white mb-5">Key Dates</h3>
              <div className="space-y-3.5">
                {[
                  { phase: "Registration Opens", date: "Jan 15, 2026", color: "bg-purple-500" },
                  { phase: "Phase 1 Assessment", date: "Feb 20, 2026", color: "bg-blue-500" },
                  { phase: "Phase 2 Technical", date: "Mar 15, 2026", color: "bg-violet-500" },
                  { phase: "24-Hour Hackathon", date: "Apr 18–19, 2026", color: "bg-cyan-500" },
                  { phase: "Grand Finale", date: "May 10–11, 2026", color: "bg-yellow-500" },
                ].map(({ phase, date, color }) => (
                  <div key={phase} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full ${color} shrink-0`} />
                      <span className="text-white/65 text-sm">{phase}</span>
                    </div>
                    <span className="text-white/40 text-xs font-mono shrink-0">{date}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-glass-strong border border-purple-500/15">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-5"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Submission Received!</h3>
                    <p className="text-white/55 max-w-sm text-sm leading-relaxed">
                      Thank you for your interest in Vynedam Talent Hunt 2026. Our team will reach out within 2 hours.
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setForm(INITIAL_FORM); }}
                      className="mt-2 px-6 py-2.5 rounded-xl border border-white/15 text-white/70 hover:text-white hover:border-white/30 text-sm transition-colors"
                    >
                      Submit Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <h3 className="text-xl font-bold text-white mb-6">Register Your Interest</h3>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-1.5">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Aryan Mehta"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all ${
                              errors.name ? "border-red-500/50" : "border-white/8 focus:border-purple-500/40"
                            }`}
                          />
                        </div>
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-1.5">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="aryan@college.edu"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all ${
                              errors.email ? "border-red-500/50" : "border-white/8 focus:border-purple-500/40"
                            }`}
                          />
                        </div>
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* College + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-1.5">
                          College / University *
                        </label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                          <input
                            type="text"
                            name="college"
                            value={form.college}
                            onChange={handleChange}
                            placeholder="IIT Bombay"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all ${
                              errors.college ? "border-red-500/50" : "border-white/8 focus:border-purple-500/40"
                            }`}
                          />
                        </div>
                        {errors.college && <p className="text-red-400 text-xs mt-1">{errors.college}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-1.5">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white text-sm placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-1.5">
                        Category
                      </label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all appearance-none"
                      >
                        <option value="" className="bg-[#0a0a14]">Select a category</option>
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat} className="bg-[#0a0a14]">{cat}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-1.5">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-white/30" />
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us about yourself, your team, or any questions you have..."
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all resize-none ${
                            errors.message ? "border-red-500/50" : "border-white/8 focus:border-purple-500/40"
                          }`}
                        />
                      </div>
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      <p className="text-white/25 text-xs mt-1 text-right">
                        {form.message.length} / 500
                      </p>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 text-white font-bold text-base shadow-xl shadow-purple-500/25 hover:shadow-purple-500/35 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Registration
                        </>
                      )}
                    </motion.button>

                    <p className="text-white/30 text-xs text-center">
                      By submitting, you agree to our{" "}
                      <a href="#" className="underline hover:text-white/50">Privacy Policy</a>{" "}
                      and{" "}
                      <a href="#" className="underline hover:text-white/50">Terms of Service</a>.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
