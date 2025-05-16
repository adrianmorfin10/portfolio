"use client";

import React, { useEffect, useState } from "react";

export default function Section() {
  const words = [
    "ESTRATEGICO",
    "ADAPTATIVO",
    "INDUSTRIAL",
    "INNOVADOR",
    "CREATIVO",
    "DINAMICO",
    "FUNCIONAL",
    "ATOMICO",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetters, setCurrentLetters] = useState<string[]>([]);
  const [nextLetters, setNextLetters] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Configuración de tiempos (en milisegundos)
  const WORD_DISPLAY_TIME = 2000; // Tiempo que la palabra está visible
  const LETTER_FALL_DURATION = 1000; // Duración de la caída de cada letra
  const LETTER_FALL_DELAY = 100; // Delay entre cada letra que cae

  // Efecto para manejar la transición de palabras
  useEffect(() => {
    const transitionWords = async () => {
      const currentWord = words[currentWordIndex];
      const nextWord = words[(currentWordIndex + 1) % words.length];

      // Mostrar la palabra actual
      setCurrentLetters(currentWord.split(""));
      setNextLetters([]);

      // Esperar el tiempo de visualización de la palabra
      await new Promise((resolve) => setTimeout(resolve, WORD_DISPLAY_TIME));

      // Iniciar la transición
      setIsTransitioning(true);

      // Caída de las letras de la palabra actual (del centro hacia abajo)
      for (let i = 0; i < currentWord.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, LETTER_FALL_DELAY));
        setCurrentLetters((prev) => prev.slice(1)); // Eliminar la primera letra
      }

      // Caída de las letras de la siguiente palabra (de arriba hacia el centro)
      for (let i = 0; i < nextWord.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, LETTER_FALL_DELAY));
        setNextLetters((prev) => [...prev, nextWord[i]]); // Añadir la siguiente letra
      }

      // Cambiar a la siguiente palabra
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      setIsTransitioning(false);
    };

    transitionWords();
  }, [currentWordIndex]);

  return (
    <section className="w-full relative bg-black overflow-hidden min-h-screen flex items-center justify-center">
      {/* Contenedor padre */}
      <div className="w-full flex flex-col items-center space-y-8">
        {/* Contenedor 1: "Diseño" */}
        <div className="text-center">
          <h1 className="text-white text-6xl md:text-8xl font-bold">(DISEÑO)</h1>
        </div>

        {/* Contenedor 2: Palabras en cascada */}
        <div className="h-[6.6rem] overflow-hidden relative w-full flex justify-center">
          {/* Letras de la palabra actual (centro hacia abajo) */}
          <div className="flex space-x-2">
            {currentLetters.map((letter, index) => (
              <span
                key={index}
                className="inline-block text-white text-4xl md:text-8xl font-bold"
                style={{
                  transform: `translateY(${isTransitioning ? "100%" : "0"})`,
                  transition: `transform ${LETTER_FALL_DURATION}ms ease-in-out`,
                  transitionDelay: `${index * LETTER_FALL_DELAY}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Letras de la siguiente palabra (arriba hacia el centro) */}
          <div className="flex space-x-2 absolute top-0">
            {nextLetters.map((letter, index) => (
              <span
                key={index}
                className="inline-block text-white text-4xl md:text-8xl font-bold"
                style={{
                  transform: `translateY(${isTransitioning ? "0" : "-100%"})`,
                  transition: `transform ${LETTER_FALL_DURATION}ms ease-in-out`,
                  transitionDelay: `${index * LETTER_FALL_DELAY}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Contenedor 3: 2 palabras con videos */}
        <div className="w-full flex flex-col items-center">
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4 w-full max-w-4xl mx-auto">
    <p className="text-white text-sm font-light text-center md:text-left">Preciso. Innovador.</p>
    <video
      src="/out8.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-[200px] h-[100px] rounded-md object-cover"
    />
    <p className="text-white text-sm font-light text-center md:text-left">Futurista. Expresivo.</p>
  </div>
</div>
      </div>
    </section>
  );
}