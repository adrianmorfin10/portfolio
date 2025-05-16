"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const services = [
    "Diseño UX/UI",
    "Consultoría Tecnológica",
    "Consultoría UX/UI",
    "Diseño de Productos",
    "Branding",
    "Diseño de Logos",
    "Desarrollo Web",
    "Apps Móviles",
    "Automatizaciones IA"
  ];

  const [activeService, setActiveService] = useState<string | null>(null);
  const phoneNumber = "5532059524";

  const whatsappMessage = (service: string) => 
    encodeURIComponent(`Hola, requiero más información sobre: ${service}`);

  return (
    <section className="w-full bg-black min-h-screen flex items-center py-12 md:py-20 px-4 md:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 md:mb-16">
          Servicios
        </h2>

        <div className="flex flex-col space-y-4 md:space-y-6">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              {/* Texto con subrayado lento */}
              <motion.button
                className="text-left w-full"
                onClick={() => setActiveService(activeService === service ? null : service)}
                onMouseEnter={() => setActiveService(service)}
              >
                <motion.h3 
                  className="text-xl md:text-2xl font-medium text-white relative inline-block pb-1"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {service}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: activeService === service ? 1 : 0,
                      transition: { 
                        duration: 3, // 3 segundos para el subrayado
                        ease: "easeOut" 
                      } 
                    }}
                  />
                </motion.h3>
              </motion.button>

              {/* Card con animación lenta */}
              <AnimatePresence>
                {activeService === service && (
                  <motion.div
                    className="mt-2 md:mt-4 bg-gray-900 border border-gray-700 rounded-lg p-4 md:p-6 shadow-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto",
                      transition: { duration: 0.8 } // Más lento que antes
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                      Servicio profesional de {service.toLowerCase()}.
                    </p>
                    <a
                      href={`https://wa.me/${phoneNumber}?text=${whatsappMessage(service)}`}
                      target="_blank"
                      className="inline-block px-4 md:px-6 py-1 md:py-2 bg-[#2b5dcd] hover:bg-[#1e4ec7] text-white rounded-md transition-colors text-sm md:text-base"
                    >
                      Contactar
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}