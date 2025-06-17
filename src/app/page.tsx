// src/app/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function HomePage() {
  const [lang, setLang] = useState<"cz" | "en">("cz");
  const [mobileOpen, setMobileOpen] = useState(false);

  const t = {
    cz: {
      nav: ["Domů", "Služby", "O nás", "Novinky", "Kariéra", "Aplikovaná AI", "Kontakt"],
      headline: "Pomáháme firmám růst díky AI, automatizaci a chytrému vývoji softwaru.",
      subtext:
        "Jsme technologický partner pro firmy, které chtějí digitalizovat a inovovat. Od konzultace přes vývoj po nasazení.",
      button: "Zažádejte si o konzultaci",
      whatWeDo: "Co děláme",
      whyUs: "Proč právě SLACON",
      contact: "Kontaktujte nás",
      services: [
        {
          title: "AI & Automatizace",
          desc: "Navrhujeme a nasazujeme řešení s využitím umělé inteligence, která automatizují rutinní procesy a zvyšují efektivitu týmů.",
        },
        {
          title: "Vývoj softwaru",
          desc: "Tvoříme robustní a bezpečné aplikace šité na míru. Od MVP po komplexní firemní systémy s důrazem na udržitelnost a škálovatelnost.",
        },
        {
          title: "DevOps & Cloud",
          desc: "Zajišťujeme správu cloud infrastruktury, CI/CD pipelines a monitorování. Umožňujeme rychlé a spolehlivé nasazení vašich produktů.",
        },
        {
          title: "Projektové řízení",
          desc: "Pomáháme organizovat a řídit vaše digitální projekty. Od strategie po realizaci – s důrazem na agilitu, kontrolu a výsledky.",
        },
        {
          title: "YourGuru.tech Platforma",
          desc: "Unikátní platforma postavená na technologii GPT, běžící na vlastních datech klienta. YOUR_GURU umožňuje vytvářet firemní znalostní asistenty, kteří odpovídají na základě vašich dokumentů a dat.",
        },
        {
          title: "AI Portfolio",
          desc: "Chatboty, Voiceboty, Speech-to-Text, Text-to-Speech, RPA, AI agenti, NLP, prediktivní analýzy, generativní modely, vizuální rozpoznávání, AI ve workflow a další špičkové technologie.",
        },
      ],
      about: [
        "Jsme parta technologických nadšenců, kteří vyměnili korporátní kanceláře za vlastní cestu. Roky jsme dodávali projekty pro ty největší hráče – teď tu expertízu nabízíme v balení, které je rychlé, efektivní a osobní.",
        "Rozumíme technologiím stejně dobře jako procesům – víme, jak funguje vaše firma, co vás brzdí a kde je prostor pro inovace. Neslibujeme vzdušné zámky. Dodáváme řešení, která fungují.",
        "SLACON je o datech, automatizaci, AI – ale hlavně o zkušenosti, spolehlivosti a lidském přístupu.",
      ],
      contactLabels: {
        email: "Email",
        phone: "Telefon",
        address: "Adresa",
        ico: "IČO",
      },
      contactInfo: {
        email: "michal.slapak@slacon.cz",
        phone: "+420702248278",
        address: "K Běchovicům 503/28, Praha",
        ico: "22066497",
      },
    },
    en: {
      nav: ["Home", "Services", "About", "News","Carrer","Usecases","Contact",],
      headline: "We help companies grow with AI, automation, and smart software development.",
      subtext:
        "We are a technology partner for companies looking to digitize and innovate. From consulting to development and deployment.",
      button: "Request a consultation",
      whatWeDo: "What we do",
      whyUs: "Why SLACON",
      contact: "Contact us",
      services: [
        {
          title: "AI & Automation",
          desc: "We design and deploy AI-powered solutions that automate routine tasks and boost team efficiency.",
        },
        {
          title: "Software Development",
          desc: "We build robust, secure custom applications – from MVPs to enterprise-grade systems with scalability and sustainability in mind.",
        },
        {
          title: "DevOps & Cloud",
          desc: "We manage cloud infrastructure, CI/CD pipelines, and monitoring – enabling fast and reliable product delivery.",
        },
        {
          title: "Project Management",
          desc: "We organize and drive your digital projects from strategy to execution with a focus on agility, transparency, and results.",
        },
        {
          title: "YourGuru.tech Platform",
          desc: "A GPT-powered platform running on your own data. YOUR_GURU enables enterprise knowledge assistants that answer based on your documents and datasets.",
        },
        {
          title: "AI Portfolio",
          desc: "Chatbots, Voicebots, Speech-to-Text, Text-to-Speech, RPA, AI agents, NLP, predictive analytics, generative models, visual recognition, AI-powered workflows and more.",
        },
      ],
      about: [
        "We're a team of tech enthusiasts who left the corporate world to forge our own path. We've delivered projects for the biggest players – now we offer that expertise with agility, efficiency and heart.",
        "We understand tech and business equally well – we know how your organization works, what's holding you back, and where innovation fits. We don't promise castles in the air. We deliver solutions that work.",
        "SLACON is about data, automation, AI – but most importantly about experience, reliability, and a human touch.",
      ],
      contactLabels: {
        email: "Email",
        phone: "Phone",
        address: "Address",
        ico: "Company ID",
      },
      contactInfo: {
        email: "michal.slapak@slacon.cz",
        phone: "+420702248278",
        address: "K Běchovicům 503/28, Prague",
        ico: "22066497",
      },
    },
  };

  return (
    <div className="min-h-screen px-6 md:px-12 py-24 bg-gray-800 text-white">


      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 pt-28">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{t[lang].headline}</h1>
          <p className="text-lg text-gray-200">{t[lang].subtext}</p>
          <a href={`mailto:${t[lang].contactInfo.email}`}>
            <span className="inline-block bg-[#10b981] hover:bg-[#0e9e6e] text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-200">
              {t[lang].button}
            </span>
          </a>
        </div>
        <div className="md:w-1/2">
          <Image src="/ai-graphic.svg" alt="AI a technologie" width={440} height={280} className="mx-auto" />
        </div>
      </div>

      {/* Services */}
      <div id="sluzby" className="scroll-mt-36 mt-24">
        <h2 className="text-3xl font-bold text-center mb-8">{t[lang].whatWeDo}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t[lang].services.map((s, i) => (
            <div key={i} className="bg-gray-700 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-white">{s.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div id="o-nas" className="scroll-mt-36 mt-24">
        <h2 className="text-3xl font-bold text-center mb-8">{t[lang].whyUs}</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-lg text-gray-300">
            {t[lang].about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Image src="/team-people.png" alt="SLACON tým" width={500} height={300} className="rounded-xl shadow-lg mx-auto" />
        </div>
      </div>

      {/* Contact */}
      <div id="kontakt" className="scroll-mt-36 mt-24">
        <h2 className="text-3xl font-bold text-center mb-8">{t[lang].contact}</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3 text-gray-300">
            <p><strong>{t[lang].contactLabels.email}:</strong> <a href={`mailto:${t[lang].contactInfo.email}`} className="underline">{t[lang].contactInfo.email}</a></p>
            <p><strong>{t[lang].contactLabels.phone}:</strong> <a href={`tel:${t[lang].contactInfo.phone}`} className="underline">{t[lang].contactInfo.phone}</a></p>
            <p><strong>{t[lang].contactLabels.address}:</strong> {t[lang].contactInfo.address}</p>
            <p><strong>{t[lang].contactLabels.ico}:</strong> {t[lang].contactInfo.ico}</p>
          </div>
          <iframe
            src="https://maps.google.com/maps?q=K%20B%C4%9Bchovic%C5%AFm%20503/28&t=&z=16&ie=UTF8&iwloc=near&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
