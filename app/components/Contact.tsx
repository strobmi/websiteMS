"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, ArrowRight, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* CTA Section */}
      <section id="kontakt" className="py-24 bg-[#0F2040]" ref={ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C4622D] mb-4">
                <span className="w-6 h-px bg-[#C4622D]" />
                Kontakt
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Bereit für Ihr nächstes{" "}
                <span className="text-[#C4622D]">Transformationsprojekt?</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">
                Ich stehe für neue Mandate und Projekte im Bereich IT-Transformation, Projektmanagement
                und digitale Beratung zur Verfügung. Nehmen Sie unverbindlich Kontakt auf.
              </p>

              <a
                href="mailto:office@ms-consulting.at"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4622D] text-white font-semibold rounded-sm hover:bg-[#A84E22] transition-colors duration-200 group"
              >
                E-Mail schreiben
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>

            {/* Right – Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-sm p-8 flex flex-col gap-6"
            >
              <div className="text-sm font-bold text-white/40 tracking-widest uppercase mb-2">
                Michael Strobl Consulting GmbH
              </div>

              <a
                href="mailto:office@ms-consulting.at"
                className="flex items-start gap-4 group"
              >
                <div className="w-9 h-9 bg-[#C4622D]/20 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-[#C4622D]/30 transition-colors duration-200">
                  <Mail size={16} className="text-[#C4622D]" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5">E-Mail</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#C4622D] transition-colors duration-200">
                    office@ms-consulting.at
                  </div>
                </div>
              </a>

              <a
                href="tel:+436641606791"
                className="flex items-start gap-4 group"
              >
                <div className="w-9 h-9 bg-[#C4622D]/20 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-[#C4622D]/30 transition-colors duration-200">
                  <Phone size={16} className="text-[#C4622D]" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5">Telefon</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#C4622D] transition-colors duration-200">
                    +43 664 160 67 91
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-[#C4622D]/20 rounded-sm flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#C4622D]" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5">Adresse</div>
                  <div className="text-sm font-semibold text-white">
                    1020 Wien, Österreich
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-white/5 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#C4622D] text-white flex items-center justify-center font-bold text-xs rounded-sm">
              MS
            </div>
            <span className="text-xs text-white/30">
              © {new Date().getFullYear()} Michael Strobl Consulting GmbH
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>Digital denken. Wandel lenken.</span>
            <Link href="/impressum" className="hover:text-white/60 transition-colors duration-200">
              Impressum
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
