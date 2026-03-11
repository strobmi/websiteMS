"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const career = [
  {
    period: "04/2020 – heute",
    role: "Berater & Umsetzer",
    company: "Selbstständig (Freelancer)",
    focus: "IT Strategy & Delivery · Transformation & Digitalisierung · Projekt/Programm-Management · Business/IT Alignment · Agile Coach · GRC",
    highlight: true,
  },
  {
    period: "03/2018 – 03/2020",
    role: "Managing Consultant",
    company: "IBM Services",
    focus: "Projekt & Change Management · Business Analyse · Transformation zu Versicherungsplattform · Guidewire PolicyCenter & ClaimCenter",
  },
  {
    period: "03/2015 – 03/2018",
    role: "Senior Consultant / Manager",
    company: "EY Advisory",
    focus: "IT Strategy · Governance, Risk & Compliance · Project Management · IT Delivery · Process Mining",
  },
  {
    period: "06/2012 – 03/2015",
    role: "Solution Consultant",
    company: "Raiffeisen Vorsorge Mgmt",
    focus: "Product Owner · Business Analyst · Process Manager · Testmanager",
  },
];

const education = [
  {
    degree: "Wirtschaftsinformatik (MSc)",
    school: "FH Technikum Wien",
    year: "2012 – 2014",
  },
  {
    degree: "Informations- und Kommunikationssysteme (BSc)",
    school: "FH Technikum Wien + Linköping University (SE)",
    year: "2009 – 2012",
  },
  {
    degree: "Elektrotechnik & Automatisierungstechnik (Ing.)",
    school: "HTL Saalfelden",
    year: "2003 – 2008",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ueber-mich" className="py-24 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C4622D] mb-3">
            <span className="w-6 h-px bg-[#C4622D]" />
            Über mich
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1C1C1C] mb-6 max-w-xl">
            Strategie trifft Umsetzungsstärke
          </h2>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-2xl">
            Als Senior Projektmanager mit über 10 Jahren Erfahrung in der Leitung komplexer IKT-Projekte
            begleite ich Unternehmen und Behörden bei der Ablöse und Einführung von Softwarelösungen
            sowie IT-Infrastrukturen. Meine Stärke: technisches Verständnis für Architektur und Entwicklung
            mit der Fähigkeit, Fachbereichs-, Governance- und Risikothemen nahtlos einzubinden.
          </p>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-2xl mt-4">
            Mein Anspruch: Projekte so zu führen, dass sie termingerecht, budgetkonform und mit
            messbarem Mehrwert für Organisation und Nutzer umgesetzt werden – transparent, nachhaltig
            und zukunftssicher.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <Briefcase size={18} className="text-[#C4622D]" />
              <h3 className="text-lg font-bold text-[#1C1C1C]">Berufserfahrung</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#E0DBD5]" />

              <div className="flex flex-col gap-8">
                {career.map((c, i) => (
                  <motion.div
                    key={c.company}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="pl-7 relative"
                  >
                    {/* Dot */}
                    <div
                      className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                        c.highlight
                          ? "bg-[#C4622D] border-[#C4622D]"
                          : "bg-white border-[#C4622D]/40"
                      }`}
                    />
                    <div className="text-xs font-mono text-[#C4622D] mb-0.5">{c.period}</div>
                    <div className="font-semibold text-[#1C1C1C] text-sm">{c.role}</div>
                    <div className="text-sm text-[#6B6B6B] mb-1.5 font-medium">{c.company}</div>
                    <div className="text-xs text-[#9B9B9B] leading-relaxed">{c.focus}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap size={18} className="text-[#C4622D]" />
              <h3 className="text-lg font-bold text-[#1C1C1C]">Ausbildung</h3>
            </div>

            <div className="flex flex-col gap-6 mb-12">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="border-l-2 border-[#F0EDE8] hover:border-[#C4622D] pl-4 py-1 transition-colors duration-300"
                >
                  <div className="text-xs font-mono text-[#C4622D] mb-0.5">{e.year}</div>
                  <div className="font-semibold text-[#1C1C1C] text-sm">{e.degree}</div>
                  <div className="text-sm text-[#6B6B6B]">{e.school}</div>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="bg-[#F0EDE8] rounded-sm p-6">
              <h4 className="font-bold text-[#1C1C1C] text-sm mb-4">Branchenschwerpunkte</h4>
              <div className="flex flex-wrap gap-2">
                {["Versicherungen (P&C, Life)", "Öffentliche Verwaltung", "Banking & Finance", "IT-Dienstleister", "Telekommunikation", "Automotive"].map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1 bg-white border border-[#E0DBD5] text-xs font-medium text-[#1C1C1C] rounded-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
