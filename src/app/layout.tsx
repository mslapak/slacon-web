// src/app/layout.tsx
import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SLACON | AI & Technologie",
  description: "Konzultace, vývoj a automatizace poháněná AI."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen px-6 md:px-12 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
