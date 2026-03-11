"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    client: "Bundesministerium für Finanzen",
    short: "BMF · Öffentlicher Sektor",
    volume: "mehrere 100 Mio. EUR",
    duration: "ca. 4,5 Jahre (2020–2025)",
    budget: "~15 Mio. EUR Budgetverantwortung",
    team: "bis zu 40 Personen",
    title: "Modernisierung des österreichischen Zollsystems (ezoll)",
    summary:
      "EU-weites Transformationsprogramm zur Digitalisierung und Vereinheitlichung der Zollverfahren. Integration der COTS-Lösung ERMIS (Netcompany) in eine komplexe Legacy-Systemlandschaft mit über 20 integrierten Systemen.",
    tags: ["IT Integration", "Make or Buy", "Cloud Native (OpenShift)", "EU-Ausschreibung", "Legacy Modernisierung"],
    quote: {
      text: "Michael hat mit strategischem Weitblick, technischer Tiefe und außergewöhnlicher Führungsstärke maßgeblich zur erfolgreichen Neuausrichtung der österreichischen Zollsysteme beigetragen.",
      name: "Phillipp Panzenböck",
      role: "Abteilungsleiter Sektion I/II, Bundesministerium für Finanzen",
    },
    featured: true,
  },
  {
    client: "UNIQA Group",
    short: "UNIQA · Versicherung",
    volume: "Prämienvolumen >6 Mrd. EUR",
    duration: "2 Jahre (2018–2020)",
    title: "Einführung Insurance Core Platform",
    summary:
      "Kernsystemfusionierung und Ablöse mehrerer Legacy-Systeme. Workstream Leader über Pre-Inception, Pilot, Angebots- und Implementierungsphase (Guidewire PolicyCenter & ClaimCenter → msg.InsuranceSuite). 50+ Workshops mit diversen Stakeholdern.",
    tags: ["Guidewire", "msg.InsuranceSuite", "P&C", "KFZ", "Scrum"],
    quote: {
      text: "Mit seiner Expertise und Fähigkeit, komplexe Anforderungen in innovative Lösungen zu übersetzen, trug er entscheidend zur erfolgreichen Neuausrichtung der UNIQA Insurance Platform bei.",
      name: "Alois Dragovits",
      role: "Bereichsleiter Versicherungstechnik Sach & KFZ, UNIQA",
    },
    featured: true,
  },
  {
    client: "AXA Deutschland",
    short: "AXA · Versicherung",
    volume: "Prämienvolumen >100 Mrd. EUR",
    duration: "ca. 10 Monate (2016/17)",
    budget: "3 Mio. EUR",
    title: "Guidewire ClaimCenter Upgrade v7 → v9",
    summary:
      "Projektmanager für ein virtuelles Delivery-Team (10–15 FTE, 3 Länder). AXA zählte zu den weltweit ersten Kunden mit ClaimCenter v9. Defect Management, UAT und Performance Testing.",
    tags: ["Guidewire ClaimCenter", "Virtuelles Team", "DE/PL/IN/UK", "PM"],
    quote: {
      text: "Michael hat sich rasch als kompetenter und verlässlicher Ansprechpartner für uns etabliert – sowohl in technischer Hinsicht als auch im Projektmanagement. Durch seine klare Kommunikation trug er maßgeblich zum positiven Projektabschluss bei.",
      name: "Eric Eisenbach",
      role: "Projektleiter (Kunde), AXA Deutschland",
    },
    featured: true,
  },
  {
    client: "Zurich Versicherung AT",
    short: "Zurich · Versicherung",
    volume: "Prämienvolumen >600 Mio. EUR",
    duration: "ca. 5 Jahre (2014–2018)",
    budget: "15 Mio. EUR",
    title: "Kernsystemablöse – INSIS Fadata",
    summary:
      "Business Analyst und Workstream Leader für die Vertragsmanagement-Lösung. 50+ Interviews/Workshops zur Prozessaufnahme (P&C), Dokumentation User Story Backlogs, Steuerung der Delivery Teams.",
    tags: ["INSIS Fadata", "Business Analyse", "P&C", "Sachversicherung", "SCRUM"],
    featured: false,
  },
  {
    client: "Erste Digital (s IT / EGIT)",
    short: "Erste Digital · Banking IT",
    duration: "ca. 6 Monate (2015/16)",
    title: "Entwicklung einer Retained Organization",
    summary:
      "Governance-Optimierung auf Basis von CoBIT und ITIL. Outsourcing Assessment inkl. Risikoanalyse, Entwicklung klarer Steuerungsprozesse und Verantwortlichkeiten zwischen internen und externen Partnern.",
    tags: ["GRC", "CoBIT", "ITIL", "Governance", "Outsourcing"],
    featured: false,
  },
  {
    client: "Valida Vorsorge Management (Raiffeisen)",
    short: "Raiffeisen · Finance",
    duration: "ca. 2 Jahre (2012–2014)",
    title: "IT Turnaround & Prozessoptimierungen",
    summary:
      "Testmanager und sukzessive Übernahme von Prozessoptimierung und Governance. Einführung agiler Entwicklungsmethoden inkl. CI/CD-Pipeline, Etablierung von IT-Prozessen nach ITIL.",
    tags: ["ITIL", "CI/CD", "Agile", "Asset Management", "SEPA"],
    featured: false,
  },
];

function ProjectCard({ p, i, inView }: { p: typeof projects[0]; i: number; inView: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
      className={`bg-white border rounded-sm overflow-hidden transition-all duration-300 ${
        p.featured
          ? "border-[#C4622D]/30 shadow-sm"
          : "border-[#E0DBD5]"
      }`}
    >
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C4622D] mb-1">
              {p.short}
            </div>
            <h3 className="font-bold text-[#1C1C1C] text-base leading-snug">{p.title}</h3>
          </div>
          {p.featured && (
            <span className="shrink-0 text-xs font-semibold bg-[#C4622D]/10 text-[#C4622D] px-2 py-0.5 rounded-sm">
              Featured
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#9B9B9B] mb-4">
          <span>{p.duration}</span>
          {p.budget && <span>Budget {p.budget}</span>}
          {p.team && <span>{p.team}</span>}
        </div>

        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">{p.summary}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 bg-[#F0EDE8] text-[#6B6B6B] text-xs rounded-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Quote toggle */}
        {p.quote && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#C4622D] hover:text-[#A84E22] transition-colors duration-200"
          >
            <Quote size={13} />
            Kundenreferenz
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>
        )}
      </div>

      {/* Quote Expansion */}
      {p.quote && expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-[#F0EDE8] bg-[#FAFAF8] px-6 py-5"
        >
          <blockquote className="text-sm text-[#1C1C1C] leading-relaxed italic mb-3 border-l-2 border-[#C4622D] pl-4">
            „{p.quote.text}"
          </blockquote>
          <div className="text-xs font-semibold text-[#1C1C1C]">{p.quote.name}</div>
          <div className="text-xs text-[#9B9B9B]">{p.quote.role}</div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projekte" className="py-24 bg-[#FAFAF8]" ref={ref}>
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
            Projekterfahrungen
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1C1C1C] mb-4">
            Ausgewählte Referenzprojekte
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-xl leading-relaxed">
            Komplexe Transformationsvorhaben bei namhaften Kunden in Österreich, Deutschland und darüber hinaus.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.client} p={p} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
