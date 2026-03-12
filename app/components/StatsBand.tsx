"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "15+", label: "Jahre Erfahrung", sub: "in IT & Digitalisierungsprojekten" },
  { value: "~15 Mio €", label: "Budgetverantwortung", sub: "in einem Einzelprojekt" },
  { value: "40+", label: "Personen geführt", sub: "in internationalen Teams" },
  { value: "6", label: "Länder", sub: "AT, DE, PL, IN, UK, NL" },
];

export default function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0F2040] py-14" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="text-center px-4"
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#C4622D] mb-1">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-white mb-0.5">{s.label}</div>
              <div className="text-xs text-white/50">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
