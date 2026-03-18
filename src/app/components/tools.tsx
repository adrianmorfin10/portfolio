"use client";

import React, { useState } from "react";

interface ToolsProps {
  lang: 'es' | 'en';
}

const toolsData = [
  {
    title: { es: "Brain", en: "Brain" },
    image: "brain.png",
    gradient: "braingrad.png",
    description: {
      es: "Herramienta de gestión de ideas y proyectos.",
      en: "Idea and project management tool.",
    },
  },
  {
    title: { es: "Figma", en: "Figma" },
    image: "figma.png",
    gradient: "figmagrad.png",
    description: {
      es: "Diseño de interfaces y prototipado colaborativo.",
      en: "Interface design and collaborative prototyping.",
    },
  },
  {
    title: { es: "Spline", en: "Spline" },
    image: "spline.png",
    gradient: "splinegrad.png",
    description: {
      es: "Diseño 3D y animaciones interactivas.",
      en: "3D design and interactive animations.",
    },
  },
  {
    title: { es: "Lottie", en: "Lottie" },
    image: "lottie.png",
    gradient: "lottiegrad.png",
    description: {
      es: "Animaciones JSON para aplicaciones y web.",
      en: "JSON animations for apps and web.",
    },
  },
  {
    title: { es: "Jira", en: "Jira" },
    image: "jira.png",
    gradient: "jiragrad.png",
    description: {
      es: "Gestión de proyectos y seguimiento de tareas.",
      en: "Project management and task tracking.",
    },
  },
  {
    title: { es: "CRM", en: "CRM" },
    image: "crm.png",
    gradient: "crmgrad.png",
    description: {
      es: "Gestión de relaciones con clientes.",
      en: "Customer relationship management.",
    },
  },
];

export default function Tools({ lang }: ToolsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-black pb-48 pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-12">
          {lang === 'es' ? 'Herramientas' : 'Tools'}
        </h2>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="relative max-w-[200px] mx-auto bg-[#000000] rounded-lg p-6 transition-all duration-300 ease-in-out group"
              style={{ height: hoveredIndex === index ? "14em" : "10em" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"
                style={{ backgroundImage: `url(${tool.gradient})`, filter: "blur(32px)" }}
              ></div>
              <div
                className={`absolute inset-0 bg-gray-900/50 backdrop-blur-lg rounded-lg transition-opacity duration-300 ease-in-out ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
              <div className="relative z-10 text-left">
                <div className="flex justify-start mb-4">
                  <img
                    src={tool.image}
                    alt={tool.title[lang]}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-white text-xl font-bold">{tool.title[lang]}</h3>
              </div>
              <div
                className={`relative z-10 overflow-hidden transition-all duration-300 ease-in-out ${
                  hoveredIndex === index ? "opacity-100 mt-4" : "opacity-0"
                }`}
              >
                <p className="text-white text-sm font-light">{tool.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-wrap justify-center gap-4">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="relative w-full sm:w-[48%] md:w-[32%] bg-gray-900 rounded-lg p-6"
              style={{ height: "14em" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg opacity-50"
                style={{ backgroundImage: `url(${tool.gradient})`, filter: "blur(32px)" }}
              ></div>
              <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-lg rounded-lg"></div>
              <div className="relative z-10 text-left">
                <div className="flex justify-start mb-4">
                  <img
                    src={tool.image}
                    alt={tool.title[lang]}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-white text-xl font-bold">{tool.title[lang]}</h3>
              </div>
              <div className="relative z-10 mt-4">
                <p className="text-white text-sm font-light">{tool.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}