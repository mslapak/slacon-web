// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "#", label: "Domů" },
  { href: "#sluzby", label: "Služby" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#o-nas", label: "O nás" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-wrap gap-4 justify-center md:justify-start p-4 text-sm bg-gray-900 shadow-md z-50">
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          scroll={false}
          className={`px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-white hover:bg-gray-800`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
