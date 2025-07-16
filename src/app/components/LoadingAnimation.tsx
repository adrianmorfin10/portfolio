"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const DesignWords = [
  { text: "Design", lang: "EN" },
  { text: "Diseño", lang: "ES" },
  { text: "デザイン", lang: "JP" },
  { text: "تصميم", lang: "AR" },
  { text: "Conception", lang: "FR" }
];

// Tipografías radicales y expresivas
const radicalFonts = [
  "font-['Bungee']", // Tipografía pesada y cuadrada
  "font-['Rubik_Mono_One']", // Ultra geométrica
  "font-['Tilt_Prism']", // Efecto 3D extremo
  "font-['Syne_Tactile']", // Como escrita a mano
  "font-['Amita']", // Caligrafía cursiva radical
  "font-['Major_Mono_Display']" // Monospace radical
];

// Estilos adicionales para cada tipografía
const fontStyles = [
  "text-white", // Bungee
  "text-white", // Rubik Mono One
  "text-white", // Tilt Prism
  "text-white", // Syne Tactile
  "text-white", // Amita
  "text-white" // Major Mono Display
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
        setCurrentWordIndex((prev) => (prev + 1) % DesignWords.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting]);

  useEffect(() => {
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
          <motion.div className="relative z-10 text-center">
            <motion.h1 
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayText.split('').map((letter, index) => {
                const fontIndex = index % radicalFonts.length;
                const fontClass = radicalFonts[fontIndex];
                const textColor = fontStyles[fontIndex];
                
                return (
                  <motion.span
                    key={index}
                    initial={{ 
                      opacity: 0,
                      y: 20,
                      rotate: fontIndex % 2 === 0 ? -10 : 10
                    }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                      rotate: 0
                    }}
                    transition={{ 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 10
                    }}
                    className={`inline-block ${fontClass} ${textColor} mx-1`}
                    style={{
                      fontSize: 'clamp(2rem, 8vw, 5rem)',
                      display: 'inline-block',
                      transformOrigin: 'center bottom'
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.2,
                      rotate: fontIndex % 2 === 0 ? -5 : 5
                    }}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.h1>
            
            <motion.p 
              className="text-white/70 text-lg mt-4 font-['Syne_Tactile']"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {DesignWords[currentWordIndex].lang}
            </motion.p>
          </motion.div>

          <motion.div 
            className="absolute bottom-20 w-64 h-1 bg-white/20 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 8, ease: "linear" }}
          >
            <div className="h-full bg-white rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}