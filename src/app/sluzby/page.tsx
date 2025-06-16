import React from "react";
import Navbar from "../../components/Navbar";

export default function SluzbyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">Naše služby</h1>
      <p className="text-gray-700 mb-6">
        Nabízíme komplexní poradenství v oblasti umělé inteligence, automatizace procesů,
        vývoje softwaru a technologií na míru. Pomáháme firmám zefektivnit jejich činnost
        pomocí moderních digitálních nástrojů.
      </p>
      <ul className="space-y-4 list-disc list-inside">
        <li>AI & Automation Consulting</li>
        <li>Vývoj webových a interních systémů</li>
        <li>DevOps, Cloud a CI/CD</li>
        <li>Poradenství pro GDPR a projektové řízení</li>
      </ul>
    </main>
  );
}