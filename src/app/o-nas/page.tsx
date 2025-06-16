import React from "react";
import Navbar from "../../components/Navbar";

export default function ONasPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">O nás</h1>
      <p className="text-gray-700 mb-6">
        Jsme tým seniorních odborníků na technologie, AI a digitální transformaci.
        Naším cílem je přinášet klientům reálnou hodnotu skrze inovace.
      </p>
      <ul className="space-y-2">
        <li>💡 Více než 10 let zkušeností v oboru</li>
        <li>🤝 Partnerství s univerzitami a technologickými huby</li>
        <li>🚀 Startupová agilita, enterprise přístup</li>
      </ul>
    </main>
  );
}