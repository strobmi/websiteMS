"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  GitMerge,
  BarChart2,
  Users,
  Shield,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Projekt- & Programm-Management",
    description:
      "Vollständige Projektverantwortung – von der strategischen Planung über internationale Lieferantensteuerung bis zum Rollout. (PRINCE2 Practitioner)",
  },
  {
    icon: GitMerge,
    title: "IT Transformation & Digitalisierung",
    description:
      "Modernisierung von Legacy-Systemen, Einführung von COTS-Lösungen und Cloud-nativen Architekturen. End-to-End Verantwortung inklusive Integration.",
  },
  {
    icon: BarChart2,
    title: "Business/IT Alignment & Strategy",
    description:
      "Übersetzung von Geschäftsanforderungen in tragfähige IT-Lösungen. Make-or-Buy-Analysen, Ausschreibungsbegleitung und Enterprise Architektur.",
  },
  {
    icon: Users,
    title: "Change Management & Stakeholder",
    description:
      "Proaktive Einbindung aller Stakeholder-Ebenen: Management, Fachbereiche, externe Lieferanten. Workshops, Kommunikationsplanung und Change-Begleitung.",
  },
  {
    icon: Shield,
    title: "Governance, Risk & Compliance",
    description:
      "GRC-Beratung auf Basis von CoBIT, ITIL und TOGAF. Aufbau von Retained Organizations, Outsourcing-Assessments und regulatorische Compliance (PCI DSS, GDPR).",
  },
  {
    icon: Cpu,
    title: "Business Analyse & Prozessoptimierung",
    description:
      "Anforderungserhebung, Fit/Gap-Analysen, User Story Backlogs. Prozessmodellierung und -optimierung entlang der gesamten Wertschöpfungskette.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leistungen" className="py-24 bg-[#F0EDE8]" ref={ref}>
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
            Leistungen
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1C1C1C]">
            Was ich einbringe
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group bg-white rounded-sm p-6 border border-[#E0DBD5] hover:border-[#C4622D]/40 hover:shadow-md transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 bg-[#C4622D]/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-[#C4622D]/20 transition-colors duration-300">
                <s.icon size={20} className="text-[#C4622D]" />
              </div>
              <h3 className="font-bold text-[#1C1C1C] text-base mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
