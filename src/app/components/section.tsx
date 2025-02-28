"use client";

import React from "react";

export default function Section() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Fondo negro con borde redondeado */}
      <div className="absolute inset-x-0 bottom-0 h-[100%] bg-black rounded-b-[30px]"></div>

      {/* Contenedor principal */}
      <div className="container mx-auto relative z-10 pt-200">
        {/* Título "Proyectos" */}
        <h2 className="text-6xl font-bold text-center p-4">
          <span className="text-white">Proyectos</span>
        </h2>
      </div>
    </section>
  );
}