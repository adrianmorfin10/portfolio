"use client";

import React, { useEffect, useState } from "react";

interface SectionProps {
  lang: 'es' | 'en';
}

export default function Section({ lang }: SectionProps) {
  const words = {
    es: ["ESTRATEGICO", "ADAPTATIVO", "INDUSTRIAL", "INNOVADOR", "CREATIVO", "DINAMICO", "FUNCIONAL", "ATOMICO"],
    en: ["STRATEGIC", "ADAPTIVE", "INDUSTRIAL", "INNOVATIVE", "CREATIVE", "DYNAMIC", "FUNCTIONAL", "ATOMIC"],
  };

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetters, setCurrentLetters] = useState<string[]>([]);
  const [nextLetters, setNextLetters] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const WORD_DISPLAY_TIME = 2000;
  const LETTER_FALL_DURATION = 1000;
  const LETTER_FALL_DELAY = 100;

  useEffect(() => {
    const transitionWords = async () => {
      const currentWord = words[lang][currentWordIndex];
      const nextWord = words[lang][(currentWordIndex + 1) % words[lang].length];

      setCurrentLetters(currentWord.split(""));
      setNextLetters([]);

      await new Promise((resolve) => setTimeout(resolve, WORD_DISPLAY_TIME));

      setIsTransitioning(true);

      for (let i = 0; i < currentWord.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, LETTER_FALL_DELAY));
        setCurrentLetters((prev) => prev.slice(1));
      }

      for (let i = 0; i < nextWord.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, LETTER_FALL_DELAY));
        setNextLetters((prev) => [...prev, nextWord[i]]);
      }

      setCurrentWordIndex((prev) => (prev + 1) % words[lang].length);
      setIsTransitioning(false);
    };

    transitionWords();
  }, [currentWordIndex, lang]);

  return (
    <section className="w-full relative bg-black overflow-hidden min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col items-center space-y-8">
        <div className="text-center">
          <h1 className="text-white text-6xl md:text-8xl font-bold">
            {lang === 'es' ? '(DISEÑO)' : '(DESIGN)'}
          </h1>
        </div>

        <div className="h-[6.6rem] overflow-hidden relative w-full flex justify-center">
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

        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4 w-full max-w-4xl mx-auto">
            <p className="text-white text-sm font-light text-center md:text-left">
              {lang === 'es' ? 'Preciso. Innovador.' : 'Precise. Innovative.'}
            </p>
            <video
              src="/out8.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[200px] h-[100px] rounded-md object-cover"
            />
            <p className="text-white text-sm font-light text-center md:text-left">
              {lang === 'es' ? 'Futurista. Expresivo.' : 'Futuristic. Expressive.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}