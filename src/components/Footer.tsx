"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full text-center text-sm text-gray-500 py-10 border-t mt-10 bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/SLACON-logo-transparent-clean.png"
          alt="SLACON logo"
          width={120}
          height={40}
        />
        <p>© {new Date().getFullYear()} SLACON s.r.o. Všechna práva vyhrazena.</p>
        <p className="text-gray-400">IČO: 22066497</p>
        <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href="#" className="text-blue-600 hover:underline">GDPR & Privacy Policy</a>
        <p className="text-gray-400">Vyrobeno s 💡 a AI.</p>
      </div>
    </footer>
  );
}