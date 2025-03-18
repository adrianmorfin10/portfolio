"use client";

import React, { useState } from "react";

const tools = [
  {
    title: "Brain",
    image: "brain.png",
    gradient: "braingrad.png",
    description: "Herramienta de gestión de ideas y proyectos.",
  },
  {
    title: "Figma",
    image: "figma.png",
    gradient: "figmagrad.png",
    description: "Diseño de interfaces y prototipado colaborativo.",
  },
  {
    title: "Spline",
    image: "spline.png",
    gradient: "splinegrad.png",
    description: "Diseño 3D y animaciones interactivas.",
  },
  {
    title: "Lottie",
    image: "lottie.png",
    gradient: "lottiegrad.png",
    description: "Animaciones JSON para aplicaciones y web.",
  },
  {
    title: "Jira",
    image: "jira.png",
    gradient: "jiragrad.png",
    description: "Gestión de proyectos y seguimiento de tareas.",
  },
  {
    title: "CRM",
    image: "crm.png",
    gradient: "crmgrad.png",
    description: "Gestión de relaciones con clientes.",
  },
];

export default function Tools() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-black py-48">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-12">
          Herramientas
        </h2>

        {/* Versión para desktop (con hover) */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="relative max-w-[200px] mx-auto bg-[#000000] rounded-lg p-6 transition-all duration-300 ease-in-out group"
              style={{ height: hoveredIndex === index ? "14em" : "10em" }} // Cambio de altura en hover
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Fondo del gradiente con blur */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"
                style={{ backgroundImage: `url(${tool.gradient})`, filter: "blur(32px)" }}
              ></div>

              {/* Capa de glassmorfismo (fondo gris con blur) */}
              <div
                className={`absolute inset-0 bg-gray-900/50 backdrop-blur-lg rounded-lg transition-opacity duration-300 ease-in-out ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              {/* Contenido principal (imagen y título) */}
              <div className="relative z-10 text-left">
                <div className="flex justify-start mb-4">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-white text-xl font-bold">{tool.title}</h3>
              </div>

              {/* Descripción (solo en hover) */}
              <div
                className={`relative z-10 overflow-hidden transition-all duration-300 ease-in-out ${
                  hoveredIndex === index ? "opacity-100 mt-4" : "opacity-0"
                }`}
              >
                <p className="text-white text-sm font-light">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Versión para móvil (sin hover, siempre expandida) */}
        <div className="lg:hidden flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="relative w-full sm:w-[48%] md:w-[32%] bg-gray-900 rounded-lg p-6"
              style={{ height: "14em" }} // Altura fija para móvil
            >
              {/* Fondo del gradiente con blur */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg opacity-50"
                style={{ backgroundImage: `url(${tool.gradient})`, filter: "blur(32px)" }}
              ></div>

              {/* Capa de glassmorfismo (fondo gris con blur) */}
              <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-lg rounded-lg"></div>

              {/* Contenido principal (imagen y título) */}
              <div className="relative z-10 text-left">
                <div className="flex justify-start mb-4">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-white text-xl font-bold">{tool.title}</h3>
              </div>

              {/* Descripción (siempre visible en móvil) */}
              <div className="relative z-10 mt-4">
                <p className="text-white text-sm font-light">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}