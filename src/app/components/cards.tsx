"use client";

import { motion } from "framer-motion";
import Head from "next/head";

const services = [
  {
    title: "Páginas Web Profesionales",
    description: "Sitios web rápidos, modernos y optimizados para SEO",
    price: "Desde $5,000 MXN",
    features: ["Diseño 100% responsive", "Optimización SEO básica", "Formulario de contacto", "Hosting + Dominio (1 año)", "Soporte técnico 30 días"],
    duration: "2-3 semanas",
    position: "left-top"
  },
  {
    title: "Tiendas Online (E-commerce)",
    description: "Plataforma completa para vender tus productos",
    price: "Desde $15,000 MXN",
    features: ["Hasta 50 productos", "Pasarela de pagos integrada", "Carrito de compras", "Panel administrativo", "Soporte técnico 60 días"],
    duration: "4-5 semanas",
    position: "right-top"
  },
  {
    title: "Aplicaciones Web Personalizadas",
    description: "Software a medida para tu negocio",
    price: "Desde $25,000 MXN",
    features: ["Desarrollo customizado", "Autenticación de usuarios", "Base de datos segura", "Panel de administración", "Soporte técnico 90 días"],
    duration: "6-8 semanas",
    position: "left-bottom"
  },
  {
    title: "Branding & Identidad Visual",
    description: "Diseño profesional de marca",
    price: "Desde $8,000 MXN",
    features: ["Diseño de logo profesional", "Paleta de colores corporativa", "Sistema tipográfico", "Manual de identidad", "Archivos editables"],
    duration: "3-4 semanas",
    position: "right-bottom"
  },
  {
    title: "Curso Profesional UX/UI",
    description: "Domina el diseño de experiencias digitales",
    price: "Próximamente",
    features: ["Duración: 6 meses", "Proyectos reales", "Mentorías 1:1", "Portafolio profesional", "Certificación internacional"],
    duration: "Inicio: Enero 2026",
    comingSoon: true,
    position: "left-top"
  },
  {
    title: "Consultoría Especializada",
    description: "Asesoría personalizada para tu proyecto",
    price: "$2,500 MXN/hora",
    features: ["Análisis detallado", "Optimización de performance", "Prototipado interactivo", "Estrategia digital", "Sesiones prácticas"],
    duration: "Flexible",
    position: "right-top"
  }
];

export default function ServiciosCards() {
  return (
    <>
      <Head>
        <title>Servicios Profesionales | Desarrollo Web y Diseño</title>
        <meta name="description" content="Ofrecemos servicios profesionales de desarrollo web, e-commerce, aplicaciones personalizadas y diseño de marca. Soluciones a medida para tu negocio." />
        <meta name="keywords" content="desarrollo web, tiendas online, aplicaciones web, diseño ux ui, branding, consultoría digital" />
      </Head>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones digitales completas diseñadas para impulsar tu negocio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group h-full"
              >
                <div className="relative h-full border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  <article className="relative z-20 p-6 h-full flex flex-col bg-white group-hover:bg-transparent transition-colors duration-300">
                    <header className="mb-4">
                      <h2 className={`text-xl font-bold ${service.comingSoon ? 'text-gray-400' : 'text-gray-900'} group-hover:text-white`}>
                        {service.title}
                        {service.comingSoon && (
                          <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full group-hover:bg-gray-100 group-hover:text-gray-800">
                            Próximamente
                          </span>
                        )}
                      </h2>
                      <p className={`text-sm mt-2 ${service.comingSoon ? 'text-gray-400' : 'text-gray-600'} group-hover:text-blue-100`}>
                        {service.description}
                      </p>
                      <p className={`mt-2 font-semibold ${service.comingSoon ? 'text-gray-500' : 'text-blue-600'} group-hover:text-white`}>
                        {service.price}
                      </p>
                    </header>
                    
                    <div className="mb-5 flex-grow">
                      <ul className="space-y-2.5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg 
                              className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${service.comingSoon ? 'text-gray-400' : 'text-blue-500'} group-hover:text-blue-200`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className={`${service.comingSoon ? 'text-gray-500' : 'text-gray-700'} group-hover:text-white`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <footer className="mt-auto">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2.5 py-1 rounded-full ${service.comingSoon ? 'bg-gray-100 text-gray-500' : 'bg-blue-100 text-blue-800'} group-hover:bg-blue-500 group-hover:text-white`}>
                            {service.duration}
                          </span>
                          {service.comingSoon && (
                            <span className="text-xs text-gray-500 group-hover:text-white hidden sm:inline">
                              Tiempo estimado
                            </span>
                          )}
                        </div>
                        
                        {service.comingSoon ? (
                          <button 
                            className="w-full sm:w-auto text-sm font-medium px-4 py-2 bg-gray-200 text-gray-600 rounded-lg cursor-not-allowed group-hover:bg-gray-300 group-hover:text-gray-700"
                            disabled
                          >
                            Próximo lanzamiento
                          </button>
                        ) : (
                          <a
                            href={`https://wa.me/525532059514?text=Estoy%20interesado%20en%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full sm:w-auto text-center text-sm font-medium px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group-hover:bg-white group-hover:text-blue-600"
                          >
                            ¡Quiero este servicio!
                          </a>
                        )}
                      </div>
                    </footer>
                  </article>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">¿No encuentras lo que necesitas?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Desarrollamos soluciones personalizadas adaptadas a tus requerimientos específicos.
            </p>
            <a
              href="https://wa.me/525532059514?text=Quiero%20una%20solución%20personalizada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Hablar con un especialista
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}