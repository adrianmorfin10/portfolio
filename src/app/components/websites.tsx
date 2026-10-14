
"use client";

import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface WebsitesProps {
  lang: "es" | "en";
}

const websitesData = {
  es: [
    {
      title: "QC Signs",
      url: "https://www.qcssigns.com",
      preview: "/qcs.png",
      demo: "/qcs.mp4",
      description: "E-commerce para señalética industrial",
      features: ["Sitio Web", "E-commerce", "Animación"],
    },
    {
      title: "Luhn AI",
      url: "https://www.luhn.ai/about",
      preview: "/luhn.png",
      demo: "/luhn.mp4",
      description: "Plataforma de IA financiera",
      features: ["Colaborativo"],
    },
    {
      title: "Vértice",
      url: "https://www.verticemineria.com",
      preview: "/vertice.png",
      demo: "/vertice_full.mp4",
      demoCompressed: "/vertice_comp.mp4",
      description: "Sitio web para empresa de minería",
      features: ["Branding", "Sitio Web", "UI/UX", "Optimización"],
    },
    {
      title: "Duo Talent",
      url: "https://www.duotalent.agency/",
      preview: "/duo.png",
      demo: "/duo.mp4",
      description: "Agencia de talento digital",
      features: ["Branding", "Sitio Web", "UI/UX"],
    },
    {
      title: "KOBA",
      url: "https://www.kobamx.com/",
      preview: "/koba.png",
      demo: "/koba.mp4",
      description: "Marca de ropa Fitness",
      features: ["Branding", "Sitio Web", "UI/UX"],
    },
  ],
  en: [
    {
      title: "QC Signs",
      url: "https://www.qcssigns.com",
      preview: "/qcs.png",
      demo: "/qcs.mp4",
      description: "E-commerce for industrial signage",
      features: ["Website", "E-commerce", "Animation"],
    },
    {
      title: "Luhn AI",
      url: "https://www.luhn.ai/about",
      preview: "/luhn.png",
      demo: "/luhn.mp4",
      description: "Financial AI platform",
      features: ["Collaborative"],
    },
    {
      title: "Vértice",
      url: "https://www.verticemineria.com",
      preview: "/vertice.png",
      demo: "/vertice_full.mp4",
      demoCompressed: "/vertice_comp.mp4",
      description: "Website for mining company",
      features: ["Branding", "Website", "UI/UX", "Optimization"],
    },
    {
      title: "Duo Talent",
      url: "https://www.duotalent.agency/",
      preview: "/duo.png",
      demo: "/duo.mp4",
      description: "Digital talent agency",
      features: ["Branding", "Website", "UI/UX"],
    },
    {
      title: "KOBA",
      url: "https://www.kobamx.com/",
      preview: "/koba.png",
      demo: "/koba.mp4",
      description: "Fitness clothing brand",
      features: ["Branding", "Website", "UI/UX"],
    },
  ],
};

export default function Websites({ lang }: WebsitesProps) {
  const websites = websitesData[lang];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<{
    [key: number]: boolean;
  }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<{
    [key: number]: HTMLVideoElement | null;
  }>({});

  const handleVideoLoad = useCallback((index: number) => {
    setLoadedVideos((prev) => ({ ...prev, [index]: true }));
  }, []);

  const handleCardHover = useCallback(
    (index: number) => {
      if (window.innerWidth <= 768) return;
      setHoveredIndex(index);

      if (index === 2 && !loadedVideos[2]) {
        const fullVideo = videoRefs.current[2];
        if (fullVideo) fullVideo.load();
      }

      if (!containerRef.current || !cardsRef.current[index]) return;

      const container = containerRef.current;
      const card = cardsRef.current[index];
      if (!card) return;

      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const cardLeft = cardRect.left - containerRect.left;
      const cardRight = cardRect.right - containerRect.left;
      const containerWidth = containerRect.width;
      let targetScroll = container.scrollLeft;

      if (cardRight > containerWidth) {
        targetScroll =
          container.scrollLeft + (cardRight - containerWidth) + 24;
      } else if (cardLeft < 0) {
        targetScroll = container.scrollLeft + cardLeft - 24;
      } else if (cardRect.width > containerWidth) {
        targetScroll = cardLeft - (containerWidth - cardRect.width) / 2;
      }

      container.scrollTo({ left: targetScroll, behavior: "smooth" });
    },
    [loadedVideos]
  );

  const handleContainerMouseLeave = useCallback(
    () => setHoveredIndex(null),
    []
  );

  const setCardRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      cardsRef.current[index] = el;
    },
    []
  );

  const setVideoRef = useCallback(
    (index: number) => (el: HTMLVideoElement | null) => {
      videoRefs.current[index] = el;
    },
    []
  );

  return (
    <section
      className="relative overflow-hidden bg-[#050505] py-24 text-white md:py-36"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="container relative z-10 mx-auto px-4">
        {/* Encabezado editorial */}
        <div className="mb-16 text-left md:mb-20">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
            {lang === "es"
              ? "Trabajo seleccionado / 03"
              : "Selected work / 03"}
          </p>

          <h2 className="mt-8 text-[clamp(3.8rem,10vw,10rem)] font-black leading-[0.8] tracking-[-0.085em]">
            {lang === "es" ? "Sitios web" : "Websites"}
            <br />
            <span className="text-white/30 transition-colors duration-300 hover:text-white/75">
              {lang === "es" ? "realizados." : "I've built."}
            </span>
          </h2>

          <p className="mt-10 max-w-xl text-sm leading-7 text-white/45 md:mt-14 md:text-base md:leading-8">
            {lang === "es"
              ? "Experiencias digitales que combinan diseño, identidad visual y funcionalidad."
              : "Digital experiences combining design, visual identity, and functionality."}
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative -mx-4 overflow-x-auto overflow-y-hidden pb-8 scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseLeave={handleContainerMouseLeave}
        >
          <style jsx>{`
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="flex w-max space-x-6 px-4">
            {websites.map((site, index) => (
              <motion.div
                key={index}
                ref={setCardRef(index)}
                className="relative flex-shrink-0"
                initial={{ width: 300 }}
                animate={{
                  width:
                    hoveredIndex === index && window.innerWidth > 768
                      ? 600
                      : 300,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                onHoverStart={() => handleCardHover(index)}
                onHoverEnd={() =>
                  window.innerWidth > 768 && setHoveredIndex(null)
                }
              >
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#090909] transition-colors duration-300 hover:border-white/25">
                  {/* Preview: conserva su altura original */}
                  <div className="relative h-40 overflow-hidden bg-[#111111]">
                    <Image
                      src={site.preview}
                      alt={site.title}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>

                  {/* Información: sin cambios de estructura */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-2xl font-black tracking-[-0.05em] text-white">
                      {site.title}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-white/45 transition-colors duration-300 hover:text-white/80">
                      {site.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {site.features.map((feature, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/55 transition-colors duration-300 hover:border-white/35 hover:text-white"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black md:hidden"
                    >
                      <span>
                        {lang === "es" ? "Visitar sitio" : "Visit site"}
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </div>

                  {/* Demo al pasar el cursor: se conserva el comportamiento */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 hidden md:block"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {"demoCompressed" in site && site.demoCompressed ? (
                        <>
                          <video
                            key={`${index}-compressed`}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover"
                            preload="none"
                            onLoadedData={() => handleVideoLoad(index)}
                          >
                            <source
                              src={site.demoCompressed}
                              type="video/mp4"
                            />
                          </video>

                          {loadedVideos[index] && (
                            <video
                              ref={setVideoRef(index)}
                              key={`${index}-full`}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="absolute inset-0 h-full w-full object-cover"
                              preload="none"
                            >
                              <source src={site.demo} type="video/mp4" />
                            </video>
                          )}
                        </>
                      ) : (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                          preload="none"
                        >
                          <source src={site.demo} type="video/mp4" />
                        </video>
                      )}

                      <div className="absolute bottom-4 right-4">
                        <motion.a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-full bg-[#f5f4ef] px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-white"
                          whileHover={{
                            x: 4,
                            transition: {
                              type: "spring",
                              stiffness: 500,
                            },
                          }}
                        >
                          <span>
                            {lang === "es" ? "Ver demo" : "View demo"}
                          </span>

                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ rotate: 0 }}
                            whileHover={{
                              rotate: -45,
                              transition: {
                                type: "spring",
                                stiffness: 500,
                                damping: 15,
                              },
                            }}
                          >
                            <path d="M7 17 17 7M7 7h10v10" />
                          </motion.svg>
                        </motion.a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA WhatsApp: se conserva sin mostrar */}
        <div className="mt-12 text-center">
          {/* CTA original desactivado */}
        </div>
      </div>
    </section>
  );
}
