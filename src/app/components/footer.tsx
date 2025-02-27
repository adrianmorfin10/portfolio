'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        // Obtener la posición del footer en relación con la ventana
        const footerRect = footerRef.current.getBoundingClientRect();
        // Calcular la posición del mouse dentro del footer
        const x = e.clientX - footerRect.left;
        const y = e.clientY - footerRect.top;
        setMousePos({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative  rounded-[100px]  bg-[#000000] flex justify-center items-center min-h-[600px]">
      <footer
        ref={footerRef}
        className="bg-black rounded-2xl p-12 text-center mt-10 relative overflow-hidden w-full max-w-5xl flex flex-col justify-between min-h-[500px]"
      >
        {/* Imagen de letras enmascaradas */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <img src="/layer.png" alt="Letras" className="w-full h-full object-cover" />
        </div>

        {/* Efecto de iluminación con la imagen luna */}
        <div className="absolute w-[5000px] h-[5000px] top-0 left-0 pointer-events-none z-0">
          <img
            src="/luna.png"
            alt="Luz"
            className="absolute w-[500px] h-[500px] opacity-50 blur-2xl"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              transform: 'translate(-50%, -50%)',
              zIndex: 5,
            }}
          />
        </div>

        {/* Contenedor inferior con CTA, redes sociales y copyright */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between mt-auto space-y-6 md:space-y-0 pb-0">
          {/* CTA */}
          <button className="bg-black text-[white] px-6 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-white hover:text-black">
            Diseña tu futuro
          </button>

          {/* Botones de redes sociales */}
          <div className="flex space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-black rounded-full hover:bg-blue-500 transition duration-300">
              <FaFacebook className="text-white text-2xl" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-black rounded-full hover:bg-blue-500 transition duration-300">
              <FaTwitter className="text-white text-2xl" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-black rounded-full hover:bg-blue-500 transition duration-300">
              <FaInstagram className="text-white text-2xl" />
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2023 Adrian Morfin. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}