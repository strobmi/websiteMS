"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  { name: "PRINCE2 v7 Practitioner", org: "AXELOS", color: "#C4622D" },
  { name: "Certified Interim Manager", org: "DDIM", color: "#0F2040" },
  { name: "Certified Scrum Product Owner", org: "Scrum Alliance", color: "#C4622D" },
  { name: "Certified Scrum Master", org: "Scrum Alliance", color: "#C4622D" },
  { name: "Enterprise Design Thinking", org: "IBM", color: "#0F2040" },
  { name: "IBM Cloud Essentials", org: "IBM", color: "#0F2040" },
  { name: "IBM Blockchain Essentials", org: "IBM", color: "#0F2040" },
  { name: "IBM AI Essentials", org: "IBM", color: "#0F2040" },
  { name: "Guidewire Business Analyst", org: "Guidewire (PolicyCenter)", color: "#C4622D" },
  { name: "Guidewire Business Analyst", org: "Guidewire (ClaimCenter)", color: "#C4622D" },
  { name: "ITIL v3 Foundation", org: "EXIN", color: "#6B6B6B" },
  { name: "CoBIT 5 Foundation", org: "ISACA", color: "#6B6B6B" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C4622D] mb-3">
            <span className="w-6 h-px bg-[#C4622D]" />
            Zertifizierungen
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1C1C1C]">
            Nachgewiesene Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={`${c.name}-${c.org}`}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white border border-[#E0DBD5] rounded-sm p-4 flex flex-col gap-2 hover:border-[#C4622D]/30 hover:shadow-sm transition-all duration-300"
            >
              <Award size={16} style={{ color: c.color }} />
              <div className="text-sm font-semibold text-[#1C1C1C] leading-snug">
                {c.name}
              </div>
              <div className="text-xs text-[#9B9B9B]">{c.org}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
