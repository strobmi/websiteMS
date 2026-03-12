"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
// import ParticleNetwork from "./ParticleNetwork";

export default function Hero() {
  return (
    <section className="relative h-auto min-h-[800px] md:h-[60dvh] flex items-center overflow-hidden bg-[#FAFAF8]">
      {/* Particle network background */}
      {/* <ParticleNetwork /> */}

      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(196,98,45,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 10% 80%, rgba(15,32,64,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 xl:px-12 pt-16 pb-6 w-full h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center w-full">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 md:order-1"
          >
            <div className="relative mx-auto max-w-sm md:max-w-none xl:max-w-lg">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C4622D]/30 rounded-sm" />
              <div className="relative rounded-sm overflow-hidden bg-[#F0EDE8]"
                style={{ height: "min(80dvh, 680px)", minHeight: "320px" }}>
                <Image
                  src="/profile.jpg"
                  alt="Michael Strobl"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="order-1 md:order-2"
          >
            <div className="inline-flex items-center gap-2 text-xs xl:text-sm font-semibold tracking-widest uppercase text-[#C4622D] mb-5">
              <span className="w-6 h-px bg-[#C4622D]" />
              IT-Berater & Umsetzer
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#1C1C1C] leading-[1.05] mb-5">
              Michael Strobl
            </h1>

            <p className="text-xl lg:text-2xl xl:text-3xl font-medium text-[#0F2040] mb-7 leading-snug">
              Digital denken.<br />Wandel lenken.
            </p>

            <p className="text-base xl:text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-md xl:max-w-lg">
              Als Projekt & Programmmanager mit über 10 Jahren Erfahrung begleite ich Unternehmen
              und Behörden bei der digitalen Transformation – von der strategischen Planung
              bis zur erfolgreichen Betriebsüberführung.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 xl:px-8 py-3 xl:py-4 bg-[#C4622D] text-white font-semibold rounded-sm hover:bg-[#A84E22] transition-colors duration-200 group text-sm xl:text-base"
              >
                Projekt anfragen
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#projekte"
                className="inline-flex items-center justify-center gap-2 px-6 xl:px-8 py-3 xl:py-4 border border-[#E0DBD5] text-[#1C1C1C] font-semibold rounded-sm hover:border-[#C4622D] hover:text-[#C4622D] transition-colors duration-200 text-sm xl:text-base"
              >
                Projektreferenzen
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm xl:text-base text-[#9B9B9B]">
              <MapPin size={14} />
              Wien, Österreich · Freelancer seit 2020
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#C4622D]/40" />
        <span className="text-xs text-[#9B9B9B] tracking-wider">scroll</span>
      </motion.div>
    </section>
  );
}
