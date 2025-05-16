"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

export default function CursosPage() {
  const cursosRef = useRef<HTMLDivElement>(null);
  const salariosRef = useRef<HTMLDivElement>(null);
  
  const openWhatsApp = () => {
    const phoneNumber = '525532059514';
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  const scrollToCursos = () => {
    cursosRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

 

  return (
    <>
      <Head>
        <title>Cursos Profesionales de UX/UI | Adrian Morfin</title>
        <meta name="description" content="Programas completos de diseño UX/UI con metodología práctica. Aprende investigación de usuarios, prototipado en Figma y diseño de interfaces con un profesional con 8+ años de experiencia." />
        <meta name="keywords" content="curso ux ui, aprender diseño digital, figma profesional, portafolio ux ui, diseño de interfaces, carrera diseño digital" />
        <meta property="og:title" content="Cursos Certificados de UX/UI con Adrian Morfin" />
        <meta property="og:description" content="Domina el diseño de productos digitales con nuestra metodología práctica basada en casos reales de la industria." />
      </Head>

      <section className="relative bg-gray-50 min-h-screen">
        {/* Contenido principal */}
        <div className="container mx-auto relative z-10 py-16 px-4 text-gray-800">
          {/* Hero section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Cursos de <span className="text-blue-500">UX/UI</span> Profesionales
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Domina el diseño de productos digitales con nuestra metodología práctica
            </p>
          </motion.div>

          {/* Sección de Salarios */}
          <div ref={salariosRef} className="mb-16">
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Salarios en la Industria UX/UI</h2>
              <p className="text-xl text-center mb-8 max-w-3xl mx-auto text-gray-600">
                Según datos de 2023 en México para diseñadores de producto digital
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Junior */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-800">Junior</h3>
                  <p className="mb-4 text-gray-700">0-2 años de experiencia</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Promedio mensual</p>
                      <p className="text-2xl font-bold text-gray-900">$18,000 - $30,000 MXN</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Promedio anual</p>
                      <p className="text-xl font-bold text-gray-900">$250,000 - $400,000 MXN</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-blue-100">
                    <h4 className="font-bold mb-2 text-blue-700">Habilidades requeridas:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-blue-500">•</span>
                        <span>Figma/Sketch básico</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-blue-500">•</span>
                        <span>Conocimiento de UX básico</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-blue-500">•</span>
                        <span>Portafolio con 2-3 proyectos</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Mid-Level */}
                <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-800">Mid-Level</h3>
                  <p className="mb-4 text-gray-700">2-5 años de experiencia</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Promedio mensual</p>
                      <p className="text-2xl font-bold text-gray-900">$35,000 - $60,000 MXN</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Promedio anual</p>
                      <p className="text-xl font-bold text-gray-900">$500,000 - $800,000 MXN</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-purple-100">
                    <h4 className="font-bold mb-2 text-purple-700">Habilidades requeridas:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-purple-500">•</span>
                        <span>Figma avanzado + prototipado</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-purple-500">•</span>
                        <span>Investigación de usuarios</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-purple-500">•</span>
                        <span>Experiencia en proyectos reales</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-purple-500">•</span>
                        <span>Trabajo con desarrolladores</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Senior */}
                <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-green-800">Senior</h3>
                  <p className="mb-4 text-gray-700">5+ años de experiencia</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Promedio mensual</p>
                      <p className="text-2xl font-bold text-gray-900">$70,000 - $120,000+ MXN</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Promedio anual</p>
                      <p className="text-xl font-bold text-gray-900">$900,000 - $1,800,000+ MXN</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-green-100">
                    <h4 className="font-bold mb-2 text-green-700">Habilidades requeridas:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">•</span>
                        <span>Liderazgo de equipos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">•</span>
                        <span>Estrategia de producto</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">•</span>
                        <span>Métricas y resultados</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">•</span>
                        <span>Mentoría a juniors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">•</span>
                        <span>Inglés avanzado</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-800">Notas importantes:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    <span>Los salarios pueden variar significativamente dependiendo de la empresa (startup vs corporativo), industria y ubicación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    <span>Diseñadores que trabajan para empresas internacionales (remoto) pueden ganar en dólares, incrementando estos rangos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    <span>El 80% de nuestros estudiantes consiguen empleo en los primeros 3 meses después de completar el curso avanzado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    <span>Los diseñadores con habilidades complementarias (front-end básico, investigación, etc.) suelen obtener mejores salarios</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={scrollToCursos}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl text-xl font-bold transition"
                >
                  Ver cursos para alcanzar estos niveles
                </button>
              </div>
            </motion.div>
            </div>

          {/* Sobre mí */}
          <motion.div 
            className="bg-gray-100 border border-gray-200 rounded-3xl p-8 mb-16 grid md:grid-cols-3 gap-8 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Adrian Morfin</h2>
              <p className="text-xl mb-4 text-gray-700">Product Designer / Head of Product</p>
              <p className="mb-4 text-gray-600">
                Con más de 8 años diseñando productos digitales para empresas internacionales. He formado a más de 200 diseñadores que ahora trabajan en empresas líderes.
              </p>
              <p className="text-gray-600">
                Mis cursos combinan teoría aplicada con proyectos reales para que desarrolles habilidades demandadas en la industria.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/imghero.png"
                alt="Adrian Morfin - Instructor especializado en UX/UI"
                width={300}
                height={300}
                className="rounded-2xl shadow-md"
                priority
              />
            </div>
          </motion.div>

          {/* Cursos */}
          <div ref={cursosRef} className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Curso Introductorio */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-800 text-white rounded-2xl p-4 mb-4">
                <h3 className="text-xl font-bold">Introducción al UX/UI</h3>
                <p className="text-sm text-gray-300">Fundamentos esenciales</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">$100</span>
                <span className="line-through text-gray-500 ml-2">$300</span>
              </div>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">✔</span>
                  <span>4 horas de video contenido</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">✔</span>
                  <span>Guía de recursos descargables</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">✔</span>
                  <span>Acceso por 3 meses</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-2">✖</span>
                  <span>Proyectos prácticos</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-2">✖</span>
                  <span>Certificado de finalización</span>
                </li>
              </ul>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-bold transition mt-auto">
                Comenzar ahora
              </button>
            </motion.div>

            {/* Curso Completo */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-gray-800 text-white rounded-2xl p-4 mb-4">
                <h3 className="text-xl font-bold">Curso Completo UX/UI</h3>
                <p className="text-sm text-gray-300">Formación profesional</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">$1,200</span>
                <span className="line-through text-gray-500 ml-2">$3,000</span>
              </div>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">✔</span>
                  <span>11 módulos completos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">✔</span>
                  <span>5 proyectos reales para portafolio</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">✔</span>
                  <span>Certificado verificado</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">✔</span>
                  <span>Acceso de por vida</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-2">✖</span>
                  <span>Sesiones personalizadas</span>
                </li>
              </ul>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-bold transition mt-auto">
                Quiero este curso
              </button>
            </motion.div>

            {/* Mentoría Premium */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-800 text-white rounded-2xl p-4 mb-4">
                <h3 className="text-xl font-bold">Mentoría Premium</h3>
                <p className="text-sm text-gray-300">Acompañamiento experto</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">$6,000</span>
                <span className="line-through text-gray-500 ml-2">$12,000</span>
              </div>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">✔</span>
                  <span>Todos los materiales del curso</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">✔</span>
                  <span>4 sesiones 1:1 mensuales</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">✔</span>
                  <span>Revisión de portafolio personalizada</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">✔</span>
                  <span>Feedback detallado en proyectos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">✔</span>
                  <span>6 meses de acompañamiento</span>
                </li>
              </ul>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-bold transition mt-auto">
                Quiero mentoría
              </button>
            </motion.div>
          </div>

          {/* Plan de estudios completo */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-3xl p-8 mb-16 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Plan de Estudios Completo</h2>
            
            <div className="space-y-12">
              {/* Módulo 1 */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Módulo 1: Introducción al Diseño de Productos Digitales</h3>
                <p className="mb-4 text-gray-600">Visión general del diseño de productos digitales, incluyendo UX y UI. Aprenderás los conceptos básicos y su papel crítico en la creación de productos.</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Diferencias entre UX y UI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Herramientas esenciales (Figma, Sketch, Adobe XD)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Metodologías de innovación (Design Thinking, Lean Startup)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Business Model Canvas</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-600">Actividades:</h4>
                  <p className="text-gray-700">Proyecto: Desarrollar un proyecto usando metodología Lean UX</p>
                  <p className="text-gray-700">Evaluación: Test de conceptos básicos</p>
                </div>
              </div>

              {/* Módulo 2 */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Módulo 2: Investigación y Empatía</h3>
                <p className="mb-4 text-gray-600">Aprenderás a realizar investigaciones exhaustivas para identificar las verdaderas necesidades de los usuarios.</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Diseño Centrado en el Usuario</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Personas y Mapas de Empatía</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Métodos de Investigación (entrevistas, encuestas)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Accesibilidad e Inclusión</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-600">Actividades:</h4>
                  <p className="text-gray-700">Proyecto: Análisis de stakeholders y creación de persona</p>
                  <p className="text-gray-700">Evaluación: Cuestionario sobre métodos de investigación</p>
                </div>
              </div>

              {/* Módulo 3 */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Módulo 3: Ideación y Estrategia</h3>
                <p className="mb-4 text-gray-600">Explorarás métodos creativos para generación de ideas y desarrollo de estrategias alineadas con objetivos de negocio.</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Técnicas de brainstorming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Método MOSCOW para priorización</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Creación de diagramas de flujo</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-600">Actividades:</h4>
                  <p className="text-gray-700">Proyecto: Flujo de usuario en FigJam</p>
                  <p className="text-gray-700">Evaluación: Test de técnicas de ideación</p>
                </div>
              </div>

              {/* Módulo 4 */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Módulo 4: Prototipado y Pruebas</h3>
                <p className="mb-4 text-gray-600">Aprenderás a crear prototipos desde baja hasta alta fidelidad y realizar pruebas de usabilidad.</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Arquitectura de información</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Prototipado en Figma/Adobe XD</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Pruebas de usabilidad</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-600">Actividades:</h4>
                  <p className="text-gray-700">Proyecto: Prototipo funcional con pruebas</p>
                  <p className="text-gray-700">Evaluación: Test de arquitectura de información</p>
                </div>
              </div>

              {/* Módulo 5 */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Módulo 5: UX Writing</h3>
                <p className="mb-4 text-gray-600">Dominarás la creación de contenido efectivo para interfaces digitales.</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Diferencias UX Writing vs Copywriting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Definición de voz y tono</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Patrones de escritura efectiva</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-600">Actividades:</h4>
                  <p className="text-gray-700">Proyecto: Refinamiento de contenido en wireframes</p>
                  <p className="text-gray-700">Evaluación: Cuestionario teórico-práctico</p>
                </div>
              </div>

               {/* Módulo 6 */}
               <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Modulo 6. Diseño Gráfico y UI</h3>
                <p className="mb-4 text-gray-600">Aborda los principios del diseño visual, desde los fundamentos del diseño gráfico hasta la creación de interfaces de usuario atractivas y funcionales.</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Principios de Diseño de Interfaz</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Psicología del Color y Diseño Gráfico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Herramientas Gráficas</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-600">Actividades:</h4>
                  <p className="text-gray-700">Proyecto:Crear un moodboard, wireframes de alta fidelidad y una guía de estilos.</p>
                  <p className="text-gray-700">Evaluación: Diseño gráfico y psicología del color.</p>
                </div>
              </div>
              {/* Módulo 7 */}
<div className="bg-gray-50 p-6 rounded-2xl">
  <h3 className="text-xl font-bold mb-4 text-gray-800">Módulo 7: Diseño Web y Responsivo</h3>
  <p className="mb-4 text-gray-600">Este módulo explora la creación de sitios web responsivos y la importancia de un diseño adaptable para diferentes dispositivos y plataformas.</p>
  <ul className="space-y-3 text-gray-600">
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Diseño Web: Fundamentos del diseño web y su adaptación a diferentes dispositivos</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Diseño Responsivo: Técnicas para crear interfaces adaptables a todas las resoluciones</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Fundamentos de HTML y CSS: Introducción a la programación básica para diseñadores</span>
    </li>
  </ul>
  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
    <h4 className="font-bold mb-2 text-blue-600">Actividades:</h4>
    <p className="text-gray-700">Proyecto: Diseñar un sitio web responsivo usando Figma y crear un prototipo funcional</p>
    <p className="text-gray-700">Evaluación: Formulario sobre principios de diseño web y responsive design</p>
  </div>
</div>

{/* Módulo 8 */}
<div className="bg-gray-50 p-6 rounded-2xl">
  <h3 className="text-xl font-bold mb-4 text-gray-800">Módulo 8: Sistemas de Diseño y Componentes</h3>
  <p className="mb-4 text-gray-600">Este módulo profundiza en la creación de sistemas de diseño y componentes reutilizables, esenciales para mantener la coherencia en proyectos grandes y complejos.</p>
  <ul className="space-y-3 text-gray-600">
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Atomic Design: Creación de componentes básicos y complejos en Figma</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Sistemas de Diseño: Desarrollo de sistemas que permitan escalabilidad y consistencia</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Bibliotecas de Componentes: Cómo crear y gestionar bibliotecas reutilizables</span>
    </li>
  </ul>
  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
    <h4 className="font-bold mb-2 text-blue-600">Actividades:</h4>
    <p className="text-gray-700">Proyecto: Crear un kit de UI utilizando principios de Atomic Design</p>
    <p className="text-gray-700">Evaluación: Formulario sobre creación y gestión de sistemas de diseño</p>
  </div>
</div>

{/* Módulo 9 */}
<div className="bg-gray-50 p-6 rounded-2xl">
  <h3 className="text-xl font-bold mb-4 text-gray-800">Módulo 9: AI y Herramientas Avanzadas</h3>
  <p className="mb-4 text-gray-600">Exploración de herramientas avanzadas y el uso de inteligencia artificial para potenciar el trabajo de un diseñador UX/UI.</p>
  <ul className="space-y-3 text-gray-600">
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Herramientas de AI: Uso de IA para optimizar procesos de diseño</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Integración de AI en UX/UI: Cómo la IA está transformando el campo del diseño</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Herramientas Avanzadas: ChatGPT y otras herramientas para mejorar eficiencia</span>
    </li>
  </ul>
  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
    <h4 className="font-bold mb-2 text-blue-600">Actividades:</h4>
    <p className="text-gray-700">Proyecto: Implementar AI en el proceso de diseño de un proyecto real</p>
    <p className="text-gray-700">Evaluación: Test sobre herramientas de AI y su aplicación en UX/UI</p>
  </div>
</div>

{/* Módulo 10 */}
<div className="bg-gray-50 p-6 rounded-2xl">
  <h3 className="text-xl font-bold mb-4 text-gray-800">Módulo 10: UX Green y Sostenibilidad</h3>
  <p className="mb-4 text-gray-600">Introducción al concepto de UX Green, centrándose en prácticas sostenibles dentro del diseño UX/UI.</p>
  <ul className="space-y-3 text-gray-600">
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Principios de UX Green: Diseñar con mentalidad sostenible</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Sostenibilidad en UX/UI: Prácticas para productos digitales ecológicos</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Casos de Estudio: Ejemplos de productos digitales sostenibles</span>
    </li>
  </ul>
  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
    <h4 className="font-bold mb-2 text-blue-600">Actividades:</h4>
    <p className="text-gray-700">Proyecto: Diseñar una plataforma digital con principios de sostenibilidad</p>
    <p className="text-gray-700">Evaluación: Formulario sobre conceptos de UX Green</p>
  </div>
</div>

{/* Módulo 11 */}
<div className="bg-gray-50 p-6 rounded-2xl">
  <h3 className="text-xl font-bold mb-4 text-gray-800">Módulo 11: Preparación Profesional</h3>
  <p className="mb-4 text-gray-600">Preparación para el mercado laboral, desde creación de portafolio hasta estrategias para entrevistas.</p>
  <ul className="space-y-3 text-gray-600">
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Preparación para Entrevistas: Estrategias para entrevistas exitosas</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Desarrollo de Portafolio: Creación de un portafolio impactante</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2 text-blue-500">•</span>
      <span>Gestión de Carrera: Herramientas para avanzar profesionalmente</span>
    </li>
  </ul>
  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
    <h4 className="font-bold mb-2 text-blue-600">Actividades:</h4>
    <p className="text-gray-700">Proyecto: Creación de portafolio en Behance con 4-8 proyectos</p>
    <p className="text-gray-700">Evaluación: Simulación de entrevistas y test sobre desarrollo de carrera</p>
  </div>
</div>

              {/* Módulos 6-11 seguirían el mismo patrón */}
             
            </div>
          </motion.div>

          {/* Preguntas frecuentes */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-3xl p-8 mb-16 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Preguntas Frecuentes</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">¿Puedo seguir el curso sin experiencia previa en diseño?</h3>
                <p className="text-gray-600">¡Claro que sí! Nuestro curso está diseñado para comenzar desde cero. El módulo introductorio te guiará por los conceptos básicos antes de avanzar a temas más complejos.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">¿Qué programas necesito instalar?</h3>
                <p className="text-gray-600">Trabajaremos principalmente con Figma (gratis) y Miro. También usaremos Notion para organización. No necesitas software costoso para comenzar.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">¿Hay trabajo en equipo o es individual?</h3>
                <p className="text-gray-600">El curso está diseñado para aprendizaje individual con soporte personalizado. Sin embargo, tendrás acceso a una comunidad de estudiantes para networking y colaboración opcional.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">¿Puedo saltarme algunos módulos?</h3>
                <p className="text-gray-600">Recomendamos completar todos los módulos en orden, pero si tienes experiencia previa podemos evaluar tu caso particular para permitirte avanzar más rápido.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">¿Cuántas horas debo dedicar semanalmente?</h3>
                <p className="text-gray-600">El curso completo está diseñado para 3 meses dedicando 10-12 horas por semana. Pero puedes avanzar a tu propio ritmo ya que tendrás acceso ilimitado a los materiales.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">¿Cómo obtengo ayuda si tengo dudas?</h3>
                <p className="text-gray-600">Contarás con: tutorías semanales en vivo, foros de discusión, corrección personalizada de proyectos y acceso a un canal de Slack exclusivo para estudiantes.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">¿Qué pasa si no puedo completar el curso en el tiempo estimado?</h3>
                <p className="text-gray-600">No hay problema. Tendrás acceso permanente a los materiales del curso, por lo que podrás completarlo a tu ritmo incluso después del período inicial.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">¿El certificado tiene validez oficial?</h3>
                <p className="text-gray-600">Nuestro certificado es reconocido en la industria y acreditado por nuestra experiencia trabajando con empresas líderes. Muchos de nuestros estudiantes lo han usado para conseguir empleo.</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonios */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Lo que dicen nuestros estudiantes</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="mb-4 italic text-gray-600">"El curso transformó mi carrera. En 4 meses conseguí mi primer trabajo como diseñador UX con un salario competitivo."</p>
                <p className="font-bold">- Ana G.</p>
                <p className="text-sm text-gray-500">Diseñadora UX en Fintech</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="mb-4 italic text-gray-600">"Las mentorías me ayudaron a mejorar mi portafolio y conseguir un aumento del 40% en mi salario actual."</p>
                <p className="font-bold">- Carlos M.</p>
                <p className="text-sm text-gray-500">Product Designer</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="mb-4 italic text-gray-600">"Como freelancer, el curso me dio las herramientas para triplicar mis tarifas y trabajar con clientes internacionales."</p>
                <p className="font-bold">- Luisa R.</p>
                <p className="text-sm text-gray-500">Diseñadora Freelance</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="mb-4 italic text-gray-600">"Los proyectos prácticos fueron clave para mi portafolio. Conseguí trabajo antes de terminar el curso."</p>
                <p className="font-bold">- Javier L.</p>
                <p className="text-sm text-gray-500">UI Designer</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="mb-4 italic text-gray-600">"El feedback de los instructores hizo toda la diferencia. Aprendí más en 3 meses que en años de estudio por mi cuenta."</p>
                <p className="font-bold">- Sofía P.</p>
                <p className="text-sm text-gray-500">UX Researcher</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="mb-4 italic text-gray-600">"Me encantó el enfoque práctico. Cada módulo tiene proyectos reales que puedes incluir en tu portafolio."</p>
                <p className="font-bold">- Diego C.</p>
                <p className="text-sm text-gray-500">Product Designer Jr.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="mb-4 italic text-gray-600">"La combinación de teoría y práctica es perfecta. Lo recomiendo a cualquier persona que quiera entrar en UX/UI."</p>
                <p className="font-bold">- Mariana V.</p>
                <p className="text-sm text-gray-500">Diseñadora de Interacción</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="mb-4 italic text-gray-600">"El módulo de preparación profesional fue clave para conseguir mi primer empleo en diseño. ¡Gracias!"</p>
                <p className="font-bold">- Omar T.</p>
                <p className="text-sm text-gray-500">UX Designer</p>
              </div>
            </div>
          </motion.div>

          {/* CTA final */}
          <motion.div 
            className="text-center bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">¿Listo para transformar tu carrera?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Elige el programa que mejor se adapte a tus objetivos y comienza tu viaje en el mundo del diseño digital.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button 
                onClick={scrollToCursos}
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl text-xl font-bold transition"
              >
                Ver todos los cursos
              </button>
              <button 
                onClick={openWhatsApp}
                className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-xl text-xl font-bold hover:bg-gray-50 transition"
              >
                Contactar para consultoría
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}