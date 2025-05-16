"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

export default function CursosPage() {
  const cursosRef = useRef<HTMLDivElement>(null);
  
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
        <meta name="description" content="Aprende diseño de productos digitales con cursos prácticos basados en 8+ años de experiencia trabajando con empresas internacionales" />
        <meta name="keywords" content="curso ux ui, diseño digital, aprender diseño, figma, portafolio ux" />
      </Head>

      <section className="relative bg-white overflow-hidden min-h-screen">
        {/* Fondo animado */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[200%] h-[200%] animate-moveBackground">
            <div className="absolute w-60 h-60 bg-black rounded-full top-1/4 left-1/4 animate-float blur-2xl"></div>
            <div className="absolute w-80 h-80 bg-black rounded-full top-1/2 left-1/2 animate-float blur-2xl"></div>
          </div>
        </div>

        <div className="absolute inset-0 backdrop-blur-2xl bg-white/30"></div>

        <div className="container mx-auto relative z-10 py-16 px-4 text-black">
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
              Cursos de <span className="text-blue-600">UX/UI</span> Profesionales
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Aprende diseño de productos digitales con metodología práctica.
            </p>
          </motion.div>

          {/* Sobre mí */}
          <motion.div 
            className="bg-black text-white rounded-3xl p-8 mb-16 grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Adrian Morfin</h2>
              <p className="text-xl mb-4">Product Designer / Head of Product</p>
              <p className="mb-4">
                Con más de 8 años diseñando productos digitales para empresas como iademy, 500 Startups Latam y PayPal.
              </p>
              <p>
                Mis cursos te enseñarán las habilidades necesarias para destacar en la industria del diseño digital.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/imghero.png"
                alt="Adrian Morfin - Instructor de cursos UX/UI"
                width={300}
                height={300}
                className="rounded-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Cursos */}
          <div ref={cursosRef} className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Curso Introductorio */}
            <motion.div 
              className="bg-white border-2 border-black rounded-3xl p-6 shadow-xl flex flex-col h-full"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-black text-white rounded-2xl p-4 mb-4">
                <h3 className="text-xl font-bold">Introducción al UX/UI</h3>
                <p className="text-sm">Perfecto para principiantes</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">$100</span>
                <span className="line-through text-gray-500 ml-2">$300</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-start">
                  <span className="mr-2">✔️</span>
                  <span>Video completo de introducción</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✔️</span>
                  <span>Conceptos básicos de UX/UI</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✔️</span>
                  <span>Acceso por 3 meses</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-2">✖</span>
                  <span>No incluye proyectos prácticos</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-2">✖</span>
                  <span>No incluye certificado</span>
                </li>
              </ul>
              <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition mt-auto">
                Comprar ahora
              </button>
            </motion.div>

            {/* Curso Completo */}
            <motion.div 
              className="bg-white border-2 border-black rounded-3xl p-6 shadow-xl flex flex-col h-full"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-black text-white rounded-2xl p-4 mb-4">
                <h3 className="text-xl font-bold">Curso Completo UX/UI</h3>
                <p className="text-sm">El más popular</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">$1,200</span>
                <span className="line-through text-gray-500 ml-2">$3,000</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-start">
                  <span className="mr-2">✔️</span>
                  <span>40+ videos con contenido</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✔️</span>
                  <span>5 proyectos para portafolio</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✔️</span>
                  <span>Certificado de finalización</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✔️</span>
                  <span>Acceso de por vida</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-2">✖</span>
                  <span>No incluye mentoría 1:1</span>
                </li>
              </ul>
              <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition mt-auto">
                Comprar ahora
              </button>
            </motion.div>

            {/* Mentoría Premium */}
            <motion.div 
              className="bg-white border-2 border-black rounded-3xl p-6 shadow-xl flex flex-col h-full"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-black text-white rounded-2xl p-4 mb-4">
                <h3 className="text-xl font-bold">Mentoría Premium</h3>
                <p className="text-sm">Experiencia personalizada</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">$6,000</span>
                <span className="line-through text-gray-500 ml-2">$12,000</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-start">
                  <span className="mr-2">✔️</span>
                  <span>Todos los materiales del curso</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✔️</span>
                  <span>4 sesiones 1:1 mensuales</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✔️</span>
                  <span>Revisión de portafolio</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✔️</span>
                  <span>6 meses de acompañamiento</span>
                </li>
              </ul>
              <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition mt-auto">
                Comprar ahora
              </button>
            </motion.div>
          </div>

          {/* Plan de estudios */}
          <motion.div 
            className="bg-white border-2 border-black rounded-3xl p-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">Plan de Estudios</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Fundamentos de UX/UI</h3>
                <ul className="space-y-3">
                  <li>• Principios de diseño centrado en el usuario</li>
                  <li>• Investigación de usuarios</li>
                  <li>• Arquitectura de información</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Diseño Avanzado</h3>
                <ul className="space-y-3">
                  <li>• Sistemas de diseño escalables</li>
                  <li>• Diseño responsive</li>
                  <li>• Accesibilidad (WCAG)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Herramientas</h3>
                <ul className="space-y-3">
                  <li>• Figma desde básico a avanzado</li>
                  <li>• Prototipado interactivo</li>
                  <li>• Automatización con plugins</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Carrera en UX/UI</h3>
                <ul className="space-y-3">
                  <li>• Portafolio competitivo</li>
                  <li>• Casos de estudio efectivos</li>
                  <li>• Negociación de salarios</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Salarios en la industria */}
          <motion.div 
            className="bg-black text-white rounded-3xl p-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Salarios en la Industria UX/UI</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">Junior</h3>
                <p className="text-2xl font-bold mb-2">$300k - $500k MXN/año</p>
                <p>0-2 años de experiencia</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">Mid-Level</h3>
                <p className="text-2xl font-bold mb-2">$600k - $900k MXN/año</p>
                <p>3-5 años de experiencia</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">Senior</h3>
                <p className="text-2xl font-bold mb-2">$1M - $1.8M+ MXN/año</p>
                <p>5+ años de experiencia</p>
              </div>
            </div>
          </motion.div>

          {/* Preguntas frecuentes */}
          <motion.div 
            className="bg-white border-2 border-black rounded-3xl p-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">¿Necesito experiencia previa?</h3>
                <p>No, el curso introductorio está diseñado para principiantes. El curso completo comienza desde cero.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">¿Qué software necesito?</h3>
                <p>Trabajaremos principalmente con Figma (gratis). No necesitas licencias costosas.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">¿Hay certificado?</h3>
                <p>Sí, al completar el curso completo o la mentoría recibirás un certificado.</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonios */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Testimonios</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-black rounded-3xl p-6">
                <p className="mb-4 italic">"El curso completo transformó mi carrera. En 4 meses conseguí mi primer trabajo como diseñador junior."</p>
                <p className="font-bold">- Ana G.</p>
                <p className="text-sm">Diseñadora UX</p>
              </div>
              
              <div className="bg-white border-2 border-black rounded-3xl p-6">
                <p className="mb-4 italic">"La mentoría me ayudó a mejorar mi portafolio y negociar un aumento del 40%."</p>
                <p className="font-bold">- Carlos M.</p>
                <p className="text-sm">Product Designer</p>
              </div>
              
              <div className="bg-white border-2 border-black rounded-3xl p-6">
                <p className="mb-4 italic">"Como freelancer, el curso me dio las herramientas para triplicar mis ingresos."</p>
                <p className="font-bold">- Luisa R.</p>
                <p className="text-sm">Diseñadora Freelance</p>
              </div>
            </div>
          </motion.div>

          {/* CTA final */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button 
                onClick={scrollToCursos}
                className="bg-black text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-gray-800 transition"
              >
                Ver todos los cursos
              </button>
              <button 
                onClick={openWhatsApp}
                className="border-2 border-black px-8 py-4 rounded-xl text-xl font-bold hover:bg-gray-100 transition"
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