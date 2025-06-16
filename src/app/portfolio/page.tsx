import React from "react";
import Navbar from "../../components/Navbar";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <p className="text-gray-700 mb-6">
        Ukázky realizovaných projektů, na kterých jsme spolupracovali se startupy, korporacemi i veřejným sektorem.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-xl shadow-sm">
          <h2 className="font-semibold text-xl">Chytrý CRM systém</h2>
          <p className="text-sm text-gray-600">Plně customizované řešení pro správu vztahů se zákazníky s AI predikcí.</p>
        </div>
        <div className="border p-4 rounded-xl shadow-sm">
          <h2 className="font-semibold text-xl">Automatizace logistiky</h2>
          <p className="text-sm text-gray-600">Optimalizace skladových procesů a plánování dopravy.</p>
        </div>
      </div>
    </main>
  );
}