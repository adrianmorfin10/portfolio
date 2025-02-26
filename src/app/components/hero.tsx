"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const words = useMemo(
    () => ["Diseño", "Producto", "Programación", "Innovación", "Creatividad"],
    []
  );
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 200;
  const delayBetweenWords = 1500;

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting, words]);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Fondo con manchas negras en movimiento */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] animate-moveBackground">
          {/* Manchas negras */}
          <div className="absolute w-60 h-60 bg-black rounded-full top-1/4 left-1/4 animate-float blur-md"></div>
          <div className="absolute w-80 h-80 bg-black rounded-full top-1/2 left-1/2 animate-float blur-md"></div>
          <div className="absolute w-100 h-100 bg-black rounded-full top-3/4 left-3/4 animate-float blur-md"></div>
          <div className="absolute w-70 h-70 bg-black rounded-full top-1/4 left-3/4 animate-float blur-md"></div>
          <div className="absolute w-90 h-90 bg-black rounded-full top-3/4 left-1/4 animate-float blur-md"></div>
          <div className="absolute w-50 h-80 bg-black rounded-full top-1/2 left-1/4 animate-float blur-md"></div>
          <div className="absolute w-60 h-60 bg-black rounded-full top-1/4 left-2/4 animate-float blur-md"></div>
          <div className="absolute w-80 h-80 bg-black rounded-full top-2/4 left-3/4 animate-float blur-md"></div>
        </div>
      </div>

      {/* Contenedor con efecto de glassmorfismo */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-white/20"></div>

      {/* Contenedor principal */}
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-start relative z-10 pt-8 mb-[100px]">
        {/* Contenedor izquierdo */}
        <motion.div
          className="w-full max-w-[550px] flex flex-col items-start space-y-2 p-2 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Menú izquierdo (nombre y roles) */}
          <motion.div
            className="w-full flex flex-row items-start bg-black rounded-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-black rounded-3xl p-2 text-white w-full">
              <h1 className="text-4xl font-bold">Adrian Morfin</h1>
              <p className="text-xl mt-2 font-bold">デジタルデザイン</p>
            </div>
            <div className="bg-black rounded-3xl p-2 text-white w-full">
              <p className="text-md mt-2">Product Designer / Head of Product</p>
            </div>
          </motion.div>

          {/* Imagen hero */}
          <div className="w-full mt-4 relative hidden sm:block">
            <Image
              src="/imghero.png"
              alt="Imagen Hero"
              className="w-full h-auto rounded-3xl"
              width={500}
              height={300}
            />

            {/* Rectángulo azul horizontal con hover y backdrop-blur */}
            <div className="absolute w-[80%] h-[84px] bg-[#000000]/70 hover:translate-x-4 transition-transform duration-500 top-[172px] left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10 backdrop-blur-[10px] hidden sm:block"></div>

            {/* Flecha hacia abajo más grande (oculta en móviles) */}
            <div className="absolute w-[200px] h-[200px] top-[350px] left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden sm:block">
              <Image
                src="/flecha.png"
                alt="Flecha hacia abajo"
                className="w-full h-full"
                width={200}
                height={200}
              />
            </div>
          </div>
        </motion.div>

        {/* Contenedor derecho */}
        <motion.div
          className="w-full flex flex-col items-start space-y-2 p-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Menú derecho (contacto y proyectos) */}
          <motion.div
            className="bg-black flex flex-row items-center justify-center rounded-3xl p-2 text-white w-full hidden sm:block"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ul className="flex flex-row space-x-10">
              <li>
                <a href="#acerca-de" className="hover-effect relative">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover-effect relative">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover-effect relative">
                  Proyectos
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Video */}
          <motion.div
            className="video-container w-full h-64 md:h-auto overflow-hidden rounded-3xl relative z-30"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/out3.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}