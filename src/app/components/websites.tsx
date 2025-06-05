"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

const websites = [
  {
    title: "QC Signs",
    url: "https://www.qcssigns.com",
    preview: "/qcs.png",
    demo: "/qcs.mp4",
    description: "E-commerce para señalética industrial",
    features: ["Sitio Web", "E-commerce", "Animación"]
  },
  {
    title: "Luhn AI",
    url: "https://www.luhn.ai/about",
    preview: "/luhn.png",
    demo: "/luhn.mp4",
    description: "Plataforma de IA financiera",
    features: ["Colaborativo" ]
  },
  {
    title: "Duo Talent",
    url: "https://www.duotalent.agency/",
    preview: "/duo.png",
    demo: "/duo.mp4",
    description: "Agencia de talento digital",
    features: ["Branding", "Sitio Web", "UI/UX"]
  }
];

export default function Websites() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-[#000000] py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Sitios Web Realizados</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experiencias digitales que combinan diseño y funcionalidad
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative pb-8 -mx-4 overflow-x-auto overflow-y-hidden"
        >
          <div className="flex px-4 space-x-6 w-max">
            {websites.map((site, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 relative"
                initial={{ width: 300 }}
                animate={{
                  width: hoveredIndex === index && window.innerWidth > 768 ? 600 : 300
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onHoverStart={() => window.innerWidth > 768 && setHoveredIndex(index)}
                onHoverEnd={() => window.innerWidth > 768 && setHoveredIndex(null)}
              >
                <div className="h-full bg-[#000000] rounded-2xl overflow-hidden border border-gray-800 flex flex-col">
                  {/* Contenido estático */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={site.preview}
                      alt={site.title}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2">{site.title}</h3>
                    <p className="text-gray-300 mb-4">{site.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {site.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-500/20 text-white-400 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA para móvil (siempre visible) */}
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:hidden mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
                    >
                      <span>Visitar sitio</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>

                  {/* Overlay de video (solo desktop) */}
                  {hoveredIndex === index && (
                    <motion.div 
                      className="absolute inset-0 hidden md:block"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        preload="none"
                      >
                        <source src={site.demo} type="video/mp4" />
                      </video>
                      
                      {/* CTA para desktop */}
                      <div className="absolute bottom-4 right-4">
                        <motion.a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                          whileHover={{
                            x: 4,
                            transition: { type: "spring", stiffness: 500 }
                          }}
                        >
                          <span>Ver demo</span>
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ rotate: 0 }}
                            whileHover={{
                              rotate: -45, // Cambiado a -45 para que apunte arriba
                              transition: { 
                                type: "spring",
                                stiffness: 500,
                                damping: 15
                              }
                            }}
                          >
                            <path d="M5 12h14M12 19l7-7-7-7"/>
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
      </div>
    </section>
  );
}