// src/app/kariera/page.tsx
"use client";
import React, { useState } from "react";

type Job = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  description: string;
};

export default function CareerPage() {
  const jobs: Job[] = [
    {
      slug: "project-manager",
      title: "Project Manager",
      date: "2025-06-20",
      summary:
        "Vedení a koordinace AI & automatizačních projektů od analýzy přes nasazení až po finální předání.",
      description: `
- Plánování a řízení celého projektu (Gantt, Milníky, KPI)
- Koordinace mezi interními týmy (dev, data science, IT, obchod)
- Řízení rozpočtu, rizik a dodržování termínů
- Reporting pro vedení a klíčové stakeholdery
- Znalost agilních metodik (Scrum/Kanban)
`.trim(),
    },
    {
      slug: "product-owner",
      title: "Product Owner",
      date: "2025-06-18",
      summary:
        "Definice produktové vize, roadmapy a prioritizace backlogu pro AI produkty a řešení.",
      description: `
- Vytváření a udržování produktového backlogu
- Spolupráce s UX/UI, vývojovým a marketingovým týmem
- Shromažďování a vyhodnocování zpětné vazby od uživatelů
- Psaní user stories a akceptačních kritérií
- Zodpovědnost za produktové KPI a jejich dosažení
`.trim(),
    },
    {
      slug: "backoffice-hr-admin",
      title: "Backoffice / Asistentka / HR Admin",
      date: "2025-06-15",
      summary:
        "Podpora chodu kanceláře, HR administrace a asistence vedení v každodenním provozu.",
      description: `
- Správa agendy: fakturace, objednávky, cestovní náhrady
- Organizační podpora: kalendáře, rezervace zasedacích místností
- Administrativa HR: nábory, evidence dovolených, onboarding
- Komunikace s externími partnery a dodavateli
- Příprava interních materiálů a prezentací
`.trim(),
    },
    {
      slug: "rpa-implementator-uipath",
      title: "RPA implementátor (UiPath)",
      date: "2025-06-12",
      summary:
        "Návrh, vývoj a údržba robotických procesů v UiPath pro automatizaci back-office úloh.",
      description: `
- Analýza procesů a výběr vhodných kandidátů na robotizaci
- Vývoj botů v UiPath Studio / Orchestrator
- Testování a ladění robotů v testovacím i produkčním prostředí
- Dokumentace řešení a školení uživatelů
- Řešení chyb a zajištění podpory pro běžící RPA řešení
`.trim(),
    },
    {
      slug: "internal-marketing-specialist-pt",
      title: "Interní marketing specialista (part-time)",
      date: "2025-06-10",
      summary:
        "Správa interní komunikace, tvorba newsletterů a podpora employer brandingu na poloviční úvazek.",
      description: `
- Příprava a distribuce interních newsletterů a oznámení
- Správa intranetu a sociálních kanálů pro zaměstnance
- Organizace interních akcí a workshopů
- Spolupráce na employer branding kampaních
- Grafická úprava materiálů v Canva / Adobe
`.trim(),
    },
  ];

  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section className="px-6 md:px-12 py-24 bg-gray-800 text-white space-y-12">
      <h1 className="text-4xl font-bold text-center">Kariéra / Career</h1>

      {/* Job listings */}
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((job) => {
          const isOpen = openSlug === job.slug;
          return (
            <div
              key={job.slug}
              className="border border-gray-600 rounded-xl bg-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenSlug(isOpen ? null : job.slug)}
                className="w-full text-left p-5 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-2xl font-semibold">{job.title}</h2>
                  <p className="text-sm text-gray-400">{job.date}</p>
                  <p className="mt-2 text-gray-300">{job.summary}</p>
                </div>
                <span className="text-3xl select-none">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 bg-gray-800 text-gray-200 space-y-4">
                  <div className="whitespace-pre-line leading-relaxed">
                    {job.description}
                  </div>
                  <a
                    href="mailto:michal.slapak@slacon.cz"
                    className="inline-block bg-[#10b981] hover:bg-[#0e9e6e] text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Mám zájem
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Spontaneous application CTA */}
      <div className="border border-gray-600 rounded-xl bg-gray-700 p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Nenašel(a) jsi roli, která by ti vyhovovala?
        </h2>
        <p className="text-gray-300 mb-6">
          Pošli nám o sobě pár informací a společně najdeme pozici, která bude sedět tobě i nám.
        </p>
        <a
          href="mailto:michal.slapak@slacon.cz"
          className="inline-block bg-[#10b981] hover:bg-[#0e9e6e] text-white px-8 py-3 rounded-lg font-semibold"
        >
          Pošlete mi své CV
        </a>
      </div>
    </section>
  );
}
