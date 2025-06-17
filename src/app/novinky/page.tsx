// src/app/novinky/page.tsx
"use client";
import React, { useState } from "react";

type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
};

export default function NovinkyPage() {
  const posts: Post[] = [
    {
      slug: "gpt-4-turbo-api",
      title: "OpenAI zpřístupňuje GPT-4 Turbo API",
      date: "2025-06-21",
      summary: "Nové API přináší rychlejší odezvu a nižší náklady pro vývojáře i podniky.",
      content: `
OpenAI dnes oznámila veřejnou dostupnost GPT-4 Turbo API. Klíčové vlastnosti:
- ✅ Rychlejší latence: průměrná odezva o 25 % rychlejší než u standardního GPT-4  
- 💰 Nižší cena: až o 30 % levnější na token  
- 🔌 Snadná integrace: využijete stávající endpointy s minimálními změnami

Díky tomu mohou firmy rychleji nasazovat AI asistenty, chatboty či generovat obsah ve velkém měřítku bez dramatického navýšení nákladů.
      `.trim(),
    },
    {
      slug: "eu-ai-act",
      title: "EU schvaluje přísnější regulaci AI podle AI Act",
      date: "2025-06-18",
      summary: "Evropská unie oficiálně přijala AI Act – nejrozsáhlejší právní rámec pro umělou inteligenci.",
      content: `
AI Act stanovuje nová pravidla pro zpracování osobních dat a posuzování rizik AI systémů:
1. 🔒 Vysoce rizikové AI (např. zdravotnictví, doprava) spadá pod přísné audity.  
2. 📊 Povinné testování a transparentnost modelů.  
3. 🚫 Zákaz AI pro profily prediktivního chování či sociálního hodnocení.

Firmy působící v EU mají 24 měsíců na plné přijetí a compliance. Očekává se vznik nových pozic AI Compliance Officer.
      `.trim(),
    },
    {
      slug: "mlops-pipelines",
      title: "MLOps: Automatizované pipelines dobývají továrny",
      date: "2025-06-15",
      summary: "Špičkové firmy nasazují end-to-end MLOps automatizaci pro rychlejší modely v produkci.",
      content: `
Trendy v MLOps pro letošní rok:
- ⚙️ **CI/CD pro ML**: plná automatizace tréninku, testování a nasazení modelů.  
- 📦 **Containerization**: každá verze modelu běží ve vlastním Docker kontejneru.  
- 📈 **Monitoring driftu**: sledování změn v datech a predikcích v reálném čase.

Díky tomu klesá time-to-market s novými AI funkcionalitami z týdnů na dny.
      `.trim(),
    },
    {
      slug: "multimodal-ai",
      title: "Multimodální AI: Text, obraz i zvuk v jednom modelu",
      date: "2025-06-10",
      summary: "Nová generace modelů kombinuje text, obraz a zvuk pro komplexnější interakce.",
      content: `
Vývoj multimodálních modelů pokračuje rychlým tempem:
- 🖼️ **Vizuální dotazy**: ptáte se na obsah obrázků v reálném čase.  
- 🔊 **Text-to-speech + speech-to-text**: plně plynulá konverzace v řeči i textu.  
- 📹 **Video understanding**: analyzování videí a generování shrnutí automaticky.

Tento přístup otevírá nové možnosti v péči o zákazníky, vzdělávání či digitálním umění.
      `.trim(),
    },
    {
      slug: "rpa-2-0",
      title: "RPA 2.0: AI-řízené robotické procesy",
      date: "2025-06-05",
      summary: "Roboti se učí novým úkonům sami, bez explicitního skriptování každého kroku.",
      content: `
Druhá generace RPA systémů přináší:
- 🤖 **Učení pozorováním**: AI sleduje, jak uživatel pracuje, a pak replikuje akce.  
- 🔄 **Adaptivní workflow**: schopnost přizpůsobit se změnám v UI aplikací.  
- 💡 **Výkonné chybové zotavení**: automaticky se zotavují z neočekávaných stavů.

Firmy reportují až 50 % snížení nákladů na údržbu RPA botů.
      `.trim(),
    },
    {
      slug: "edge-ai",
      title: "Edge AI: Inteligence přímo v zařízení",
      date: "2025-05-30",
      summary: "Posouváme AI z cloudu do edge zařízení pro okamžité reakce a lepší soukromí.",
      content: `
Základní výhody Edge AI:
- ⚡ **Nízká latence**: inferencing probíhá lokálně bez čekání na cloud.  
- 🔒 **Ochrana dat**: citlivé informace zůstávají na zařízení.  
- 🔋 **Efektivní spotřeba energie**: nové low-power čipy pro AI akceleraci.

Typické aplikace: autonomní drony, nositelná zdravotní zařízení a inteligentní kamery.
      `.trim(),
    },
  ];

  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section className="px-6 md:px-12 py-24 bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">Novinky / News</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => {
          const isOpen = openSlug === post.slug;
          return (
            <div
              key={post.slug}
              className="border border-gray-600 rounded-xl bg-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenSlug(isOpen ? null : post.slug)}
                className="w-full text-left p-5 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-2xl font-semibold">{post.title}</h2>
                  <p className="text-sm text-gray-400">{post.date}</p>
                  <p className="mt-2 text-gray-300">{post.summary}</p>
                </div>
                <span className="text-3xl select-none">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 bg-gray-800 text-gray-200">
                  <p className="whitespace-pre-line leading-relaxed">
                    {post.content}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
