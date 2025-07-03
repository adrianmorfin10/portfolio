"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brandings = [
  {
    title: "KOBA",
    description: "Marca de ropa fitness premium",
    features: ["Branding", "Packaging", "Identidad Visual"],
    image: "/kobadesk.jpg" // Usamos solo la versión vertical
  },
  {
    title: "Camaron con Limon",
    description: "Restaurante de mariscos gourmet",
    features: ["Branding", "Señalética", "Menú Digital"],
    image: "/camarondesk.jpg" // Usamos solo la versión vertical
  }
];

export default function Brandings() {
  return (
    <section className="relative bg-[#000000] py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Proyectos de Marca</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Identidad visual que transforma percepciones
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12 px-4">
          {brandings.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full max-w-[80rem] bg-[#000000] rounded-2xl overflow-hidden"
            >
              {/* Imagen vertical */}
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src={brand.image}
                  alt={`Proyecto de branding para ${brand.title} - ${brand.description}`}
                  fill
                  className="object-cover"
                  quality={90}
                  priority={index < 2}
                />
              </div>
              
              {/* Contenido con CTA */}
              <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {brand.title}
                  </motion.h3>
                  <p className="text-gray-300 mb-4">{brand.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {brand.features.map((feature, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA "Quiero Branding" */}
                <motion.a
                  href={`https://wa.me/525532059514?text=Quiero%20un%20branding%20como%20${encodeURIComponent(brand.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Quiero branding como este
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA adicional al final de la sección */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6">¿Listo para transformar tu marca?</h3>
          <motion.a
            href="https://wa.me/525532059514?text=Quiero%20un%20branding%20profesional"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comenzar
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}