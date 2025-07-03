"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const DesignWords = [
  { text: "Design", lang: "EN" },
  { text: "Diseño", lang: "ES" },
  { text: "デザイン", lang: "JP" },
  { text: "Conception", lang: "FR" },
  { text: "Design", lang: "DE" },
  { text: "تصميم", lang: "AR" }
];

export default function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const delayBetweenWords = 1000;

  useEffect(() => {
    const currentWord = DesignWords[currentWordIndex].text;
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Efecto de escritura
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
      // Efecto de borrado
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % DesignWords.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting]);

  useEffect(() => {
    // Tiempo total de la animación (8 segundos)
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 8000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Texto principal con efecto de máquina de escribir */}
          <motion.div className="relative z-10 text-center">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayText.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`
                    ${index === 0 ? 'text-7xl md:text-9xl uppercase' : 'text-5xl md:text-7xl lowercase'}
                    ${index % 2 === 0 ? 'text-white' : 'text-gray-300'}
                  `}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Idioma actual */}
            <motion.p 
              className="text-white/70 text-lg mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {DesignWords[currentWordIndex].lang}
            </motion.p>
          </motion.div>

          {/* Barra de progreso sutil */}
          <motion.div 
            className="absolute bottom-20 w-64 h-1 bg-white/20 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 8, ease: "linear" }}
          >
            <div className="h-full bg-white/80 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}