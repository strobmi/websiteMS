"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Projekt- & Programm-Management",
    skills: ["PRINCE2 Practitioner", "Hybride Modelle", "Agile / Waterfall", "SAFe", "SCRUM", "Kanban",],
  },
  {
    category: "IT Transformation & Strategy",
    skills: ["IT Strategy & Delivery", "Business/IT Alignment", "Enterprise Architektur", "Make or Buy", "COTS Integration", "Cloud Native (Kubernetes)", "Legacy Modernisierung"],
  },
  {
    category: "Change & Stakeholder Management",
    skills: ["Change Management", "Stakeholder-Kommunikation", "Organisationsentwicklung", "Design Thinking", "Coaching / Sparring", "Workshop-Moderation"],
  },
  {
    category: "Business Analyse & Prozesse",
    skills: ["Business Analyse", "Requirements Engineering", "User Story Backlog", "Fit/Gap Analyse", "Prozessoptimierung", "E2E Prozesse"],
  },
  {
    category: "Governance, Risk & Compliance",
    skills: ["GRC", "ITIL v3", "CoBIT 5", "TOGAF", "PCI DSS", "GDPR", "Outsourcing Assessment", "IT Audit (SOX)"],
  },
  {
    category: "Technologie & Tools",
    skills: ["Guidewire (PolicyCenter, ClaimCenter)", "msg.InsuranceSuite", "INSIS Fadata", "Hyperion Financial Management", "Cloud (IBM, Azure, AWS)", "AI (Anthropic, OpenAI)", ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 bg-[#F0EDE8]" ref={ref}>
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
            Skills & Kenntnisse
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1C1C1C]">
            Expertise auf einen Blick
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#C4622D] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.03 }}
                    className="px-3 py-1.5 bg-white border border-[#E0DBD5] text-xs font-medium text-[#1C1C1C] rounded-sm hover:border-[#C4622D]/50 hover:bg-[#C4622D]/5 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
