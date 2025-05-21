"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";
import Head from "next/head";

const cards = [
  {
    title: "Curso Profesional UX/UI",
    description: "Programa completo de 6 meses para convertirte en diseñador de producto digital. Metodología práctica con proyectos reales y mentoría personalizada.",
    cta: "Ver programa completo",
    link: "cursos",
    features: [
      " Introducción al diseño digital",
      " UX Research & entrevistas",
      " UI y diseño de interfaces",
      " Product Design y Design Thinking",
      " Evaluación por módulos",
      " Herramientas con IA para diseñadores",
      " Proyecto final profesional",
      " Preparación para entrevistas y portafolio",
      " Creación de CV y guía para empleabilidad",
      " Incluye UX Green"
    ],
    price: "Desde $100MXN",
    duration: "6 meses",
    format: "Online en vivo + sesiones grabadas"
  },
  {
    title: "Consultoría en Producto Digital",
    description: "Asesoría especializada para empresas y emprendedores que necesitan mejorar sus productos digitales o validar ideas antes del desarrollo.",
    cta: "Agendar consulta",
    link: "#consultoria",
    features: [
      " Análisis de experiencia de usuario",
      " Auditoría de usabilidad e interfaz",
      " Validación de ideas y prototipado",
      " Optimización de flujos de conversión",
      " Diseño de sistemas y componentes",
      " Implementación de herramientas con IA",
      " Estrategia para productos móviles",
      " Principios de UX Green aplicados",
      " Documentación de procesos",
      " Capacitación para equipos"
    ],
    price: "Disponible",
    duration: "Flexible",
    format: "Presencial o remoto"
  }
];

export default function ServiciosCards() {
  // Initialize animations safely
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controlsArray = useMemo(() => [controls1, controls2], [controls1, controls2]);
  
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            controlsArray[index].start("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [controlsArray]);

  return (
    <>
      <Head>
        <title>Servicios Profesionales de UX/UI | Adrian Morfin</title>
        <meta name="description" content="Ofrezco cursos profesionales de UX/UI y consultoría especializada en diseño de producto digital. Transforma tu carrera o mejora tus productos digitales." />
        <meta name="keywords" content="curso ux ui, consultoría diseño digital, mentoría diseño producto, formación ux, diseño interfaces" />
      </Head>

      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Servicios Profesionales
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                initial="hidden"
                animate={controlsArray[index]}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {card.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{card.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                      <p className="text-sm text-gray-500">Duración</p>
                      <p className="font-medium text-gray-900">{card.duration}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                      <p className="text-sm text-gray-500">Formato</p>
                      <p className="font-medium text-gray-900">{card.format}</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">Incluye:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                      {card.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-0.5">{feature.split(' ')[0]}</span>
                          <span>{feature.split(' ').slice(1).join(' ')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={card.link}
                    className="w-full inline-flex justify-center items-center px-6 py-3 border border-gray-900 text-gray-900 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-colors"
                    aria-label={`Más información sobre ${card.title}`}
                  >
                    {card.cta}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}