"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CursosPage() {
  return (
    <section className="relative bg-gray overflow-hidden min-h-screen">
      {/* Fondo con manchas negras en movimiento (igual que en Hero) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] animate-moveBackground">
          <div className="absolute w-60 h-60 bg-black rounded-full top-1/4 left-1/4 animate-float blur-2xl"></div>
          <div className="absolute w-80 h-80 bg-black rounded-full top-1/2 left-1/2 animate-float blur-2xl"></div>
          <div className="absolute w-100 h-100 bg-black rounded-full top-3/4 left-3/4 animate-float blur-2xl"></div>
          <div className="absolute w-70 h-70 bg-black rounded-full top-1/4 left-3/4 animate-float blur-2xl"></div>
        </div>
      </div>

      {/* Contenedor con efecto de glassmorfismo */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-white/20"></div>

      {/* Contenido principal */}
      <div className="container mx-auto relative z-10 py-16 px-4">
        {/* Encabezado */}
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
            Cursos de <span className="text-black">UX/UI</span>
          </motion.h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Domina el diseño de productos digitales con mis programas prácticos basados en +8 años de experiencia trabajando con startups y empresas globales.
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
              Con más de 8 años de experiencia diseñando productos digitales para empresas como iademy, 500 Startups Latam, PayPal y más. 
              He liderado equipos de diseño y desarrollado decenas de aplicaciones web y móviles que impactan a miles de usuarios.
            </p>
            <p>
              Mis cursos están diseñados para brindarte exactamente las habilidades que necesitas para destacar en la industria del diseño digital.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/imghero.png"
              alt="Adrian Morfin"
              width={300}
              height={300}
              className="rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Cursos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Curso Introductorio */}
          <motion.div 
            className="bg-white border-2 border-black rounded-3xl p-6 shadow-xl"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black text-white rounded-2xl p-4 mb-4">
              <h3 className="text-xl font-bold">Introducción al UX/UI</h3>
              <p className="text-sm">Perfecto para comenzar</p>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-bold">$100</span>
              <span className="line-through text-gray-500 ml-2">$300</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>1 video completo de introducción</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Conceptos básicos de UX/UI</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Acceso por 3 meses</span>
              </li>
            </ul>
            <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition">
              Comprar ahora
            </button>
          </motion.div>

          {/* Curso Completo */}
          <motion.div 
            className="bg-white border-2 border-black rounded-3xl p-6 shadow-xl transform scale-105 z-10"
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
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>40 videos con contenido completo</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Materiales descargables</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>5 proyectos para tu portafolio</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Acceso de por vida</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Comunidad de estudiantes</span>
              </li>
            </ul>
            <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition">
              Comprar ahora
            </button>
          </motion.div>

          {/* Curso Premium */}
          <motion.div 
            className="bg-white border-2 border-black rounded-3xl p-6 shadow-xl"
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
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Todos los materiales del curso completo</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Sesiones 1:1 conmigo</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Revisión de proyectos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Feedback personalizado</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Soporte prioritario</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>6 meses de mentoría</span>
              </li>
            </ul>
            <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition">
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
                <li>• Introducción al diseño de productos digitales</li>
                <li>• Principios de experiencia de usuario</li>
                <li>• Psicología del diseño</li>
                <li>• Investigación de usuarios</li>
                <li>• Arquitectura de información</li>
                <li>• Wireframing y prototipado</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Diseño Avanzado</h3>
              <ul className="space-y-3">
                <li>• Sistemas de diseño</li>
                <li>• Diseño responsivo</li>
                <li>• Accesibilidad</li>
                <li>• Microinteracciones</li>
                <li>• Pruebas de usabilidad</li>
                <li>• Métricas y análisis</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Herramientas Profesionales</h3>
              <ul className="space-y-3">
                <li>• Figma desde cero a avanzado</li>
                <li>• Adobe XD</li>
                <li>• Prototipado interactivo</li>
                <li>• Plugins esenciales</li>
                <li>• Automatización de flujos</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Portafolio y Carrera</h3>
              <ul className="space-y-3">
                <li>• Construcción de portafolio</li>
                <li>• Casos de estudio efectivos</li>
                <li>• Cómo conseguir clientes</li>
                <li>• Freelance vs. Agencia vs. Producto</li>
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
              <p className="text-2xl font-bold mb-2">$300,000 - $500,000 MXN/año</p>
              <p>0-2 años de experiencia</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Mid-Level</h3>
              <p className="text-2xl font-bold mb-2">$600,000 - $900,000 MXN/año</p>
              <p>3-5 años de experiencia</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Senior</h3>
              <p className="text-2xl font-bold mb-2">$1,000,000 - $1,800,000+ MXN/año</p>
              <p>5+ años de experiencia</p>
            </div>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            * Salarios basados en datos de mercado México 2023. Pueden variar según empresa, ubicación y habilidades específicas.
          </p>
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
              <h3 className="text-xl font-bold mb-2">¿Necesito experiencia previa en diseño?</h3>
              <p>No es necesario. El curso introductorio está diseñado para principiantes, y el curso completo te lleva desde cero hasta nivel profesional.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">¿Qué herramientas necesito?</h3>
              <p>Solo necesitas una computadora. Trabajaremos principalmente con Figma (gratis) y otras herramientas de diseño accesibles.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">¿Cuánto tiempo debo dedicarle?</h3>
              <p>Recomendamos 8-10 horas por semana para completar el curso completo en 3 meses. Pero puedes avanzar a tu propio ritmo.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">¿Hay certificado?</h3>
              <p>Sí, al completar cualquiera de los cursos recibirás un certificado digital que puedes añadir a tu LinkedIn y portafolio.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">¿Qué pasa si no estoy satisfecho?</h3>
              <p>Ofrecemos garantía de devolución de 15 días para todos los cursos si no cumple con tus expectativas.</p>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Lo que dicen mis estudiantes</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-3xl p-6">
              <p className="mb-4 italic">"El curso completo transformó mi carrera. En 4 meses pasé de no saber nada de UX a conseguir mi primer trabajo como diseñador junior."</p>
              <p className="font-bold">- Ana G., Diseñadora UX en Fintech</p>
            </div>
            
            <div className="bg-white border-2 border-black rounded-3xl p-6">
              <p className="mb-4 italic">"La mentoría con Adrian fue invaluable. Sus consejos me ayudaron a mejorar mi portafolio y negociar un aumento de 40% en mi salario."</p>
              <p className="font-bold">- Carlos M., Product Designer</p>
            </div>
            
            <div className="bg-white border-2 border-black rounded-3xl p-6">
              <p className="mb-4 italic">"Como freelancer, el curso me dio las herramientas para ofrecer servicios de UX y aumentar mis ingresos significativamente."</p>
              <p className="font-bold">- Luisa R., Diseñadora Freelance</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu carrera en diseño?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Elige el curso que mejor se adapte a tus objetivos y comienza tu viaje en el mundo del diseño de productos digitales.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-gray-800 transition">
            Ver cursos disponibles
          </button>
        </motion.div>
      </div>
    </section>
  );
}