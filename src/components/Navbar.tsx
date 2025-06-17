// src/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [lang, setLang] = useState<"cz" | "en">("cz");
  const [mobileOpen, setMobileOpen] = useState(false);

  const t = {
    cz: {
      nav: ["Domů", "Služby", "O nás", "Novinky", "Kariéra", "Aplikovaná AI", "Kontakt"],
    },
    en: {
      nav: ["Home", "Services", "About", "News", "Career", "Use Cases", "Contact"],
    },
  };

  const hrefs = [
    "/",
    "/#sluzby",
    "/#o-nas",
    "/novinky",
    "/kariera",
    "/usecases",
    "/#kontakt",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/SLACON-logo-transparent-clean.png"
            alt="SLACON logo"
            width={90}
            height={30}
            priority
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {t[lang].nav.map((label, i) => (
            <Link key={hrefs[i]} href={hrefs[i]} className="hover:underline">
              {label}
            </Link>
          ))}

          <span className="mx-2">|</span>

          <button
            onClick={() => setLang("cz")}
            className={lang === "cz" ? "font-bold" : ""}
          >
            CZ
          </button>
          <button
            onClick={() => setLang("en")}
            className={lang === "en" ? "font-bold" : ""}
          >
            EN
          </button>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col items-center gap-4 py-6">
            {t[lang].nav.map((label, i) => (
              <Link
                key={hrefs[i]}
                href={hrefs[i]}
                className="text-lg hover:underline"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}

            <div className="flex items-center gap-6 pt-4 border-t border-gray-700 w-full justify-center">
              <button
                onClick={() => {
                  setLang("cz");
                  setMobileOpen(false);
                }}
                className={lang === "cz" ? "font-bold" : ""}
              >
                CZ
              </button>
              <button
                onClick={() => {
                  setLang("en");
                  setMobileOpen(false);
                }}
                className={lang === "en" ? "font-bold" : ""}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
