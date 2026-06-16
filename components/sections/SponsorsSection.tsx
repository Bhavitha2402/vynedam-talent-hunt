"use client";

import { motion } from "framer-motion";

const PARTNER_CATEGORIES = [
{
title: "Industry Partners",
description:
"Organizations supporting talent discovery, technical assessments, and internship opportunities.",
},
{
title: "Sponsor Organizations",
description:
"Companies contributing to event execution, participant engagement, and ecosystem growth.",
},
{
title: "Technology Partners",
description:
"Platforms and tools powering evaluations, hackathons, and technical experiences.",
},
{
title: "Recruitment Partners",
description:
"Organizations seeking top-performing participants for internships and future opportunities.",
},
];

export function SponsorsSection() {
return ( <section
   id="sponsors"
   className="relative py-24 lg:py-32 bg-[#050508] overflow-hidden"
   aria-label="Partners and Sponsors"
 > <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/15 to-transparent" />

 
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-flex items-center px-3 py-1 rounded-full border border-yellow-500/25 bg-yellow-500/8 text-yellow-300/80 text-xs font-semibold tracking-widest uppercase mb-4">
        Partners & Sponsors
      </span>

      <h2 className="text-4xl sm:text-5xl font-black text-white">
        Supported by{" "}
        <span className="text-gradient">Leading Organizations</span>
      </h2>

      <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
        Bringing together industry, technology, and recruitment partners to
        create opportunities for the next generation of talent.
      </p>
    </motion.div>

    {/* Partner Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {PARTNER_CATEGORIES.map((partner, index) => (
        <motion.div
          key={partner.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group p-8 rounded-2xl bg-glass border border-white/10 hover:border-purple-500/30 transition-all duration-300"
        >
          <h3 className="text-xl font-bold text-white mb-3">
            {partner.title}
          </h3>

          <p className="text-white/55 leading-relaxed text-sm">
            {partner.description}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Become a Sponsor */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-7 rounded-2xl bg-glass border border-dashed border-white/15"
    >
      <div>
        <h3 className="text-xl font-bold text-white mb-1">
          Become a Partner
        </h3>

        <p className="text-white/50 text-sm max-w-md">
          Collaborate with Vynedam Talent Hunt to connect with skilled
          students, support innovation, and strengthen your talent outreach.
        </p>
      </div>

      <a
        href="mailto:sponsors@vynedam.com"
        className="shrink-0 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/6 transition-colors"
      >
        Contact Partnership Team →
      </a>
    </motion.div>
  </div>
</section>


);
}
