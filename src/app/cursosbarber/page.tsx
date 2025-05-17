/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

export default function BarberiaPage() {
  const cursosRef = useRef<HTMLDivElement>(null);
  const beneficiosRef = useRef<HTMLDivElement>(null);
  
  const openWhatsApp = () => {
    const phoneNumber = '525569414737';
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  const scrollToCursos = () => {
    cursosRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isExpanded, setIsExpanded] = React.useState({
    1: false,
    2: false,
    3: false
  });

  return (
    <>
      <Head>
        <title>Curso Profesional de Barbería | Axel y Jesús</title>
        <meta name="description" content="Actualiza tus técnicas de barbería con nuestro curso intensivo. Domina cortes clásicos, fades, diseños y afeitados profesionales con instructores campeones nacionales." />
        <meta name="keywords" content="curso barbería, actualización barberos, cortes fade, diseños grecas, afeitado profesional, técnicas barbería" />
        <meta property="og:title" content="Curso Avanzado de Barbería con Axel y Jesús" />
        <meta property="og:description" content="Perfecciona tus técnicas con este curso intensivo impartido por barberos campeones nacionales." />
      </Head>

      <section className="relative bg-gray-100 min-h-screen">
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
              Curso de <span className="text-amber-600">Actualización Profesional</span> en Barbería
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Perfecciona tus técnicas con instructores campeones nacionales
            </p>
          </motion.div>

          {/* Sección de Beneficios */}
          <div ref={beneficiosRef} className="mb-16">
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Beneficios del Curso</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Beneficio 1 */}
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-amber-800">Técnicas Actualizadas</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700">Aprende las últimas tendencias y técnicas de la barbería profesional directamente de campeones nacionales.</p>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-amber-500">•</span>
                        <span>Cortes clásicos y modernos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-amber-500">•</span>
                        <span>Técnicas de fade perfeccionadas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-amber-500">•</span>
                        <span>Diseños freestyle profesionales</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Beneficio 2 */}
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-amber-800">Mayor Rentabilidad</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700">Incrementa tus ingresos ofreciendo servicios premium y atrayendo más clientes.</p>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-amber-500">•</span>
                        <span>Precios más altos por servicios especializados</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-amber-500">•</span>
                        <span>Clientela más exclusiva</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-amber-500">•</span>
                        <span>Diferenciación de la competencia</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Beneficio 3 */}
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-amber-800">Reconocimiento Profesional</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700">Certificación que avala tus habilidades y te permite destacar en el mercado.</p>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-amber-500">•</span>
                        <span>Constancia con valor curricular</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-amber-500">•</span>
                        <span>Reconocimiento de marcas nacionales</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-amber-500">•</span>
                        <span>Posicionamiento como barbero experto</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={scrollToCursos}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl text-xl font-bold transition"
                >
                  Ver detalles del curso
                </button>
              </div>
            </motion.div>
          </div>

          {/* Instructores */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Axel Oropeza */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/axel.jpeg"
                    alt="Axel Oropeza - Instructor de barbería"
                    width={200}
                    height={200}
                    className="rounded-2xl shadow-md object-cover h-48 w-48"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Axel Oropeza</h3>
                  <p className="text-lg mb-4 text-amber-600">Multicampeón Nacional de Barbería</p>
                  
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span>+6 años en competencias de barbería</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span>Campeón en freestyle y corte clásico</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span>Colaborador de marcas nacionales e internacionales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span>Juez en competencias de barbería</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span>Especialista en técnicas de competencia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Jesús Da Barber */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/jesus.jpeg"
                    alt="Jesús Da Barber - Instructor de barbería"
                    width={200}
                    height={200}
                    className="rounded-2xl shadow-md object-cover h-48 w-48"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Jesús Da Barber</h3>
                  <p className="text-lg mb-4 text-amber-600">Experto en Técnicas Urbanas y Clásicas</p>
                  
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span>+10 años de experiencia en barbería</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span>Plataformista en EXPO BEUTY SHOW</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span>Estudiado con educadores internacionales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span>Especialista en Fade, barba y pigmentación</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span>Master en introducción a la barbería</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Curso */}
          <div ref={cursosRef} className="mb-16">
            <motion.div 
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-800 text-white rounded-2xl p-6 mb-6">
                <h2 className="text-3xl font-bold mb-2">Seminario de Actualización en Barbería</h2>
                <p className="text-lg">Perfecciona tus técnicas con los mejores</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Detalles del Curso</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span><strong>Duración:</strong> 3 días intensivos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span><strong>Días recomendados:</strong> Lunes a miércoles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span><strong>Inversión:</strong> $35,000 MXN + viáticos (vuelos y hospedaje)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span><strong>Forma de pago:</strong> 30% anticipo, resto al inicio del curso</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span><strong>Incluye:</strong> Constancia con valor curricular</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Estructura del Curso</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span><strong>Día 1:</strong> Clase visual explicativa (2-3 horas)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span><strong>Día 2:</strong> Clase práctica - Corte neotradicional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      <span><strong>Día 3:</strong> Beardfade & ritual tradicional + pigmentación</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button 
                  onClick={openWhatsApp}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl text-xl font-bold transition"
                >
                  ¡Quiero inscribirme!
                </button>
              </div>
            </motion.div>
          </div>

 {/* Temario */}
 <motion.div 
            className="bg-white border border-gray-200 rounded-3xl p-8 mb-16 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Temario Completo</h2>
        
        <div className="space-y-6">
          {/* Módulo 1 */}
          <motion.div 
            className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl overflow-hidden"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="p-6 cursor-pointer flex justify-between items-center"
              onClick={() => setIsExpanded(prev => ({...prev, 1: !prev[1]}))}
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 mb-2">
                  <span className="bg-amber-600 text-white text-sm sm:text-xs font-bold px-3 py-1 rounded-full sm:mr-3 self-start sm:self-auto">
                    Módulo 1
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Corte Clásico Pompadour a Tijera
                  </h3>
                </div>
                <p className="text-gray-600">Domina el estilo clásico que nunca pasa de moda</p>
              </div>
              <motion.div
                animate={{ rotate: isExpanded[1] ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
            
            <AnimatePresence>
              {isExpanded[1] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-amber-200">
                    <h4 className="font-bold mb-3 text-amber-700">Contenido detallado:</h4>
                    <ul className="space-y-3 text-gray-700 mb-4">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Técnica "Scissor Over Comb": Perfeccionamiento en el manejo de tijera sobre peine</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Integración y Estructura: Creación de transiciones suaves y equilibradas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Estilizado: Técnicas para lograr el volumen y la forma característica</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Uso Correcto de Productos: Selección y aplicación para mayor fijación y brillo</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Módulo 2 */}
          <motion.div 
            className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl overflow-hidden"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="p-6 cursor-pointer flex justify-between items-center"
              onClick={() => setIsExpanded(prev => ({...prev, 2: !prev[2]}))}
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 mb-2">
                  <span className="bg-amber-600 text-white text-sm sm:text-xs font-bold px-3 py-1 rounded-full sm:mr-3 self-start sm:self-auto">
                    Módulo 2
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Blurry Fade
                  </h3>
                </div>
                <p className="text-gray-600">Perfecciona los degradados impecables que marcan tendencia</p>
              </div>
              <motion.div
                animate={{ rotate: isExpanded[2] ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
            
            <AnimatePresence>
              {isExpanded[2] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-amber-200">
                    <h4 className="font-bold mb-3 text-amber-700">Contenido detallado:</h4>
                    <ul className="space-y-3 text-gray-700 mb-4">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Técnica de Desvanecido Extendido: Transiciones suaves y definidas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Pigmentación: Técnicas para mejorar la definición</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Estructura de Corte: Mantenimiento de forma y estilo</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Módulo 3 */}
          <motion.div 
            className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl overflow-hidden"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="p-6 cursor-pointer flex justify-between items-center"
              onClick={() => setIsExpanded(prev => ({...prev, 3: !prev[3]}))}
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 mb-2">
                  <span className="bg-amber-600 text-white text-sm sm:text-xs font-bold px-3 py-1 rounded-full sm:mr-3 self-start sm:self-auto">
                    Módulo 3
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Diseño de Grecas Freestyle
                  </h3>
                </div>
                <p className="text-gray-600">Crea diseños personalizados y únicos</p>
              </div>
              <motion.div
                animate={{ rotate: isExpanded[3] ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
            
            <AnimatePresence>
              {isExpanded[3] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-amber-200">
                    <h4 className="font-bold mb-3 text-amber-700">Contenido detallado:</h4>
                    <ul className="space-y-3 text-gray-700 mb-4">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Tipos de Diseños: Exploración de estilos y formas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Prácticas: Desarrollo de habilidades para diseños simétricos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Pigmentación: Aerógrafo, pincel, lápices y bases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>Integraciones: Combinación con otros estilos</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* Temas complementarios */}
      <motion.div 
        className="bg-white border border-gray-200 rounded-3xl p-8 mb-16 shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Temas Complementarios</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <h3 className="font-bold text-lg mb-2 text-amber-800">Tipos de Cráneos</h3>
            <p className="text-gray-700">Adaptación de técnicas según la morfología del cliente</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <h3 className="font-bold text-lg mb-2 text-amber-800">Enfermedades Capilares</h3>
            <p className="text-gray-700">Identificación y manejo seguro en el proceso de corte</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <h3 className="font-bold text-lg mb-2 text-amber-800">Estructuras de Corte</h3>
            <p className="text-gray-700">Análisis de líneas, volúmenes y simetrías</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <h3 className="font-bold text-lg mb-2 text-amber-800">Técnicas para Sostener la Tijera</h3>
            <p className="text-gray-700">Mejora de ergonomía y precisión</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <h3 className="font-bold text-lg mb-2 text-amber-800">Diagnóstico Previo al Corte</h3>
            <p className="text-gray-700">Evaluación del tipo de cabello y estilo deseado</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <h3 className="font-bold text-lg mb-2 text-amber-800">Técnicas de Competencias</h3>
            <p className="text-gray-700">Secretos para destacar en competencias de barbería</p>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">¿Listo para llevar tu barbería al siguiente nivel?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
          Domina las técnicas más demandadas y destaca en el competitivo mundo de la barbería profesional.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button 
            onClick={openWhatsApp}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl text-xl font-bold transition"
          >
            ¡Inscríbete ahora!
          </button>
          <button 
            onClick={scrollToCursos}
            className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-xl text-xl font-bold hover:bg-gray-50 transition"
          >
            Ver detalles del curso
          </button>
        </div>
      </motion.div>
    </div>
  </section>
</>
);
}

