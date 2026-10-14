
"use client";

import React, { useEffect, useRef, useState } from "react";

import Coinsturn from "./Coinsturn";
import DisbursementPortal from "./DisbursementPortal";

type Language = "es" | "en";

type ProjectProps = {
  number: string;
  category: string;
  title: string;
  description: Record<Language, string>;
  lang: Language;
  children: React.ReactNode;
};

type PortfolioProps = {
  lang: Language;
};

export default function Portfolio({ lang }: PortfolioProps) {
  const copy = {
    es: {
      eyebrow: "Trabajo seleccionado / 02",
      title: "Productos",
      titleAccent: "diseñados y desarrollados.",
      description:
        "Productos digitales, interfaces y experiencias que he creado desde la estrategia visual hasta la ejecución.",
      scroll: "Desplázate para explorar",
      coinsturnCategory: "CRYPTO / REDISEÑO Y PROTOTIPO FUNCIONAL",
      coinsturnDescription:
        "Rediseño completo de un proyecto anterior de inversión en criptoactivos. Prototipo funcional diseñado y programado por mí, integrado en este portafolio.",
      disbursementCategory: "FINTECH / APLICACIÓN WEB",
      disbursementDescription:
        "Plataforma financiera empresarial para gestionar dispersiones, lotes de pagos, transacciones, usuarios y saldos.",
    },
    en: {
      eyebrow: "Selected work / 02",
      title: "Products",
      titleAccent: "I've built.",
      description:
        "Digital products, interfaces, and experiences designed and developed from strategy to execution.",
      scroll: "Scroll to explore",
      coinsturnCategory: "CRYPTO / REDESIGN & FUNCTIONAL PROTOTYPE",
      coinsturnDescription:
        "Complete redesign of a previous crypto investment project. A functional prototype designed and coded by me, embedded directly in this portfolio.",
      disbursementCategory: "FINTECH / WEB APPLICATION",
      disbursementDescription:
        "Enterprise financial platform for managing disbursements, payment batches, transactions, users, and balances.",
    },
  }[lang];

  return (
    <section
      id="portfolio"
      className="relative overflow-x-clip bg-[#050505] text-white"
    >
      
<header className="mx-auto max-w-[1500px] px-5 pb-20 pt-32 sm:px-8 md:px-10 md:pb-28 md:pt-40 lg:pt-44">
  <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
    {copy.eyebrow}
  </div>

  <h2 className="mt-8 max-w-[1250px] text-[clamp(4.2rem,11.5vw,11.5rem)] font-black leading-[0.78] tracking-[-0.085em]">
    {copy.title}
    <br />
    <span className="text-white/30 transition-colors duration-300 hover:text-white/70">
      {copy.titleAccent}
    </span>
  </h2>

  <div className="mt-10 flex flex-col gap-10 md:mt-14 md:flex-row md:items-end md:justify-between">
    <p className="max-w-xl text-sm leading-7 text-white/45 md:text-base md:leading-8">
      {copy.description}
    </p>

    <div className="flex shrink-0 items-center gap-3 pb-1">
      <div className="h-px w-8 bg-white/30" />
      <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/30">
        {copy.scroll}
      </span>
    </div>
  </div>
</header>


      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center gap-20 px-4 pb-28 sm:gap-24 sm:px-6 md:gap-32 md:px-10 md:pb-40">
        <Project
          number="01"
          category={copy.coinsturnCategory}
          title="Coinsturn"
          description={{
            es: copy.coinsturnDescription,
            en: copy.coinsturnDescription,
          }}
          lang={lang}
        >
          {/* No enviamos lang porque el componente no lo requiere */}
          <Coinsturn />
        </Project>

        <Project
          number="02"
          category={copy.disbursementCategory}
          title={
            lang === "es"
              ? "Portal de dispersiones"
              : "Disbursement portal"
          }
          description={{
            es: copy.disbursementDescription,
            en: copy.disbursementDescription,
          }}
          lang={lang}
        >
          {/* No enviamos lang porque el componente no lo requiere */}
          <DisbursementPortal />
        </Project>
      </div>
    </section>
  );
}

function Project({
  number,
  category,
  title,
  description,
  lang,
  children,
}: ProjectProps) {
  const projectRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = projectRef.current;

    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={projectRef}
      className={`w-full max-w-[1380px] transform-gpu transition-[opacity,transform] duration-[800ms] ease-out motion-reduce:transition-none ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mb-5 flex items-center justify-between gap-4 px-1">
        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/30">
          {number}
        </span>

        <span className="text-right font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
          {category}
        </span>
      </div>

      <div className="relative h-[560px] overflow-hidden rounded-[22px] border border-white/10 bg-[#090909] sm:rounded-[28px] md:h-[720px]">
        {children}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 bg-gradient-to-t from-black via-black/90 to-transparent p-5 pt-32 sm:p-7 sm:pt-40 md:p-10 md:pt-48">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="min-w-0">
              <div className="mb-3 font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
                {category}
              </div>

              <h3 className="text-3xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-4xl md:text-6xl lg:text-7xl">
                {title}
              </h3>
            </div>

            <p className="max-w-md text-[11px] leading-5 text-white/50 sm:text-xs sm:leading-6 md:text-sm">
              {description[lang]}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
