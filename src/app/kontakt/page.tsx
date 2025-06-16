import React from "react";
import Navbar from "../../components/Navbar";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">Kontaktujte nás</h1>
      <p className="text-gray-700 mb-6">
        Máte zájem o spolupráci, konzultaci nebo prezentaci na míru? Ozvěte se nám.
      </p>
      <div className="space-y-2">
        <p><strong>Email:</strong> <a href="mailto:info@slacon.cz" className="text-blue-600 underline">info@slacon.cz</a></p>
        <p><strong>Telefon:</strong> +420 123 456 789</p>
        <p><strong>Sídlo:</strong> Praha, Česká republika</p>
      </div>
    </main>
  );
}