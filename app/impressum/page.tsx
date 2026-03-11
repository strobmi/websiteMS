import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Michael Strobl Consulting GmbH",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#6B6B6B] hover:text-[#C4622D] transition-colors duration-200 mb-12"
        >
          <ArrowLeft size={16} />
          Zurück zur Startseite
        </Link>

        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C4622D] mb-4">
          <span className="w-6 h-px bg-[#C4622D]" />
          Rechtliches
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-[#1C1C1C] mb-12">
          Impressum
        </h1>

        <div className="space-y-10 text-[#1C1C1C]">
          <section>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-[#9B9B9B] mb-3">
              Angaben gemäß § 5 ECG
            </h2>
            <div className="space-y-1 text-base leading-relaxed">
              <p className="font-semibold">Michael Strobl Consulting GmbH</p>
              <p>1020 Wien, Österreich</p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-[#9B9B9B] mb-3">
              Kontakt
            </h2>
            <div className="space-y-1 text-base leading-relaxed">
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:office@ms-consulting.at"
                  className="text-[#C4622D] hover:underline"
                >
                  office@ms-consulting.at
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a
                  href="tel:+436641606791"
                  className="text-[#C4622D] hover:underline"
                >
                  +43 664 160 67 91
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-[#9B9B9B] mb-3">
              Unternehmensregistrierung
            </h2>
            <div className="space-y-1 text-base leading-relaxed">
              <p>Firmenbuchnummer: FN 615226w</p>
              <p>Firmenbuchgericht: Handelsgericht Wien</p>
              <p>UID-Nummer: ATU80084659</p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-[#9B9B9B] mb-3">
              Unternehmensgegenstand
            </h2>
            <p className="text-base leading-relaxed">
              IT-Beratung, Projektmanagement und digitale Transformation
            </p>
          </section>

          <section>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-[#9B9B9B] mb-3">
              Kammermitgliedschaft
            </h2>
            <div className="space-y-1 text-base leading-relaxed">
              <p>Mitglied der Wirtschaftskammer Wien</p>
              <p>Fachgruppe Wien Unternehmensberatung, Buchhaltung und Informationstechnologie</p>
              <p className="mt-2">
                <a
                  href="https://firmen.wko.at/michael-strobl-consulting-gmbh-digitalisierungs-und-consulting-services/wien/?firmaid=31b5a57d-3913-4909-bb91-b8aec83ab328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4622D] hover:underline"
                >
                  WKO Firmenprofil →
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-[#9B9B9B] mb-3">
              Haftungsausschluss
            </h2>
            <p className="text-base leading-relaxed text-[#6B6B6B]">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch
              keine Gewähr übernommen werden. Als Diensteanbieter sind wir gemäß § 7 Abs. 1
              TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
