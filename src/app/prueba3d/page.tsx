'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar plugin de GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ---------- Componente de fondo 3D (sin cambios) ----------
function ParticleField({ scrollY, mouseX, mouseY }: { scrollY: number; mouseX: number; mouseY: number }) {
  const points = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 2500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      const rand = Math.random();
      if (rand < 0.5) {
        colors[i * 3] = 0.2 + Math.random() * 0.3;
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.3 + Math.random() * 0.3;
      } else if (rand < 0.8) {
        colors[i * 3] = 0.1 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.6 + Math.random() * 0.4;
        colors[i * 3 + 2] = 0.9 + Math.random() * 0.1;
      } else {
        colors[i * 3] = 0.9;
        colors[i * 3 + 1] = 1.0;
        colors[i * 3 + 2] = 0.8;
      }
    }
    
    return { positions, colors };
  }, []);

  useFrame(({ camera }) => {
    if (points.current) {
      points.current.rotation.y = scrollY * 0.002;
      points.current.rotation.x = scrollY * 0.001;
      
      const rotY = (mouseX - 0.5) * 2 * Math.PI * 0.2;
      const rotX = (mouseY - 0.5) * 2 * Math.PI * 0.1;
      
      points.current.rotation.y += rotY;
      points.current.rotation.x += rotX;
      
      camera.position.z = 15 + scrollY * 0.01 + (mouseY - 0.5) * 3;
      camera.position.x = (mouseX - 0.5) * 5;
      camera.position.y = (mouseY - 0.5) * 2;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <Points ref={points} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.15}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function Background3D() {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0.5);
  const [mouseY, setMouseY] = useState(0.5);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX / window.innerWidth);
      setMouseY(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ParticleField scrollY={scrollY} mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </div>
  );
}

// ---------- Datos estáticos (igual) ----------
const features = [
  {
    icon: '⚡',
    title: 'Rendimiento',
    description:
      'Código optimizado que carga en menos de 2 segundos, mejorando tu SEO y experiencia de usuario.',
  },
  {
    icon: '🎨',
    title: 'Diseño a medida',
    description:
      'Interfaces únicas en blanco y negro con detalles en verde que reflejan la identidad de tu marca.',
  },
  {
    icon: '📈',
    title: 'Enfoque en conversión',
    description:
      'Diseñamos cada elemento pensando en guiar al usuario hacia la acción que deseas.',
  },
];

const steps = [
  {
    title: 'Estrategia',
    description: 'Definimos objetivos, público y estructura de la página.',
  },
  {
    title: 'Diseño',
    description:
      'Creamos mockups en blanco y negro con toques verdes para tu aprobación.',
  },
  {
    title: 'Desarrollo',
    description:
      'Programamos en Next.js y entregamos una landing rápida y lista para publicar.',
  },
];

const testimonials = [
  {
    name: 'María González',
    role: 'Fundadora de EcoStyle',
    text: 'Superaron mis expectativas. La landing quedó preciosa y ha aumentado nuestras conversiones un 30%.',
  },
  {
    name: 'Carlos Ruiz',
    role: 'Director de Marketing en Innova',
    text: 'Profesionales, rápidos y con un diseño impecable. Totalmente recomendados.',
  },
];

const pricing = [
  {
    name: 'Básico',
    price: 499,
    features: [
      'Diseño personalizado',
      'Hasta 3 secciones',
      'Formulario de contacto',
      'Entrega en 5 días',
    ],
    featured: false,
  },
  {
    name: 'Profesional',
    price: 999,
    features: [
      'Todo lo del plan Básico',
      'Hasta 7 secciones',
      'Optimización SEO',
      'Animaciones suaves',
      'Entrega en 7 días',
    ],
    featured: true,
  },
  {
    name: 'Empresarial',
    price: 1499,
    features: [
      'Todo lo del plan Profesional',
      'Secciones ilimitadas',
      'Blog integrado',
      'Soporte 3 meses',
      'Entrega en 10 días',
    ],
    featured: false,
  },
];

const faq = [
  {
    q: '¿Incluye hosting?',
    a: 'No, el hosting es aparte. Podemos recomendarte opciones económicas o ayudarte a configurarlo.',
  },
  {
    q: '¿Puedo pedir cambios después de entregada?',
    a: 'Sí, ofrecemos 2 rondas de ajustes gratuitos. Luego aplica una tarifa por hora.',
  },
  {
    q: '¿Usan plantillas predefinidas?',
    a: 'No, cada diseño es 100% personalizado desde cero, basado en tus necesidades.',
  },
];

const portfolioItems = [
  {
    title: 'Proyecto 1',
    description: 'Landing page para marca de moda',
    image: '/proyecto1.png',
  },
  {
    title: 'Proyecto 2',
    description: 'Landing page para startup tecnológica',
    image: null,
  },
  {
    title: 'Proyecto 3',
    description: 'Landing page para estudio creativo',
    image: null,
  },
];

// ---------- Página principal con animaciones ----------
export default function Home() {
  // Efecto GSAP para el navbar (cambia opacidad al hacer scroll)
  useEffect(() => {
    const navbar = document.querySelector('header');
    if (navbar) {
      gsap.to(navbar, {
        scrollTrigger: {
          start: 'top top',
          end: '+=100',
          scrub: true,
        },
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(8px)',
      });
    }
  }, []);

  // Variantes de animación para elementos
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <>
      <Head>
        <title>Creamos Landing Pages que Convierten | Studio Verde</title>
        <meta
          name="description"
          content="Diseño y desarrollo de landing pages profesionales, rápidas y optimizadas para conversión. En blanco y negro con un toque sutil de verde."
        />
      </Head>

      {/* Fondo 3D */}
      <Background3D />

      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white/30 backdrop-blur-md border-b border-gray-200/30 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-light tracking-tight text-gray-900"
          >
            Studio<span className="font-bold text-green-600">Verde</span>
          </motion.div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
            {['servicios', 'proceso', 'portafolio', 'precios', 'contacto'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="hover:text-green-600 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>
          <motion.a
            href="#contacto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-green-600 transition"
          >
            Cotizar
          </motion.a>
        </nav>
      </header>

      <main className="pt-20 relative">
        {/* Hero */}
        <motion.section
          className="container mx-auto px-6 py-20 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.div
            className="bg-white/30 backdrop-blur-sm p-12 rounded-3xl inline-block max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 leading-tight"
            >
              Creamos Landing Pages que{' '}
              <span className="font-bold text-green-600">Convierten</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-xl text-gray-800 max-w-2xl mx-auto"
            >
              Diseño profesional, código limpio y enfoque en resultados. Tu
              próxima landing page, lista en 7 días.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#contacto"
                className="px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-green-600 transition shadow-lg"
              >
                Solicita una demo
              </a>
              <a
                href="#portafolio"
                className="px-8 py-4 text-lg font-medium text-gray-900 border border-gray-300 rounded-full hover:border-green-600 hover:text-green-600 transition bg-white/30 backdrop-blur-sm"
              >
                Ver trabajos
              </a>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Servicios */}
        <motion.section
          id="servicios"
          className="py-24 scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="bg-white/30 backdrop-blur-sm rounded-3xl p-12"
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-light text-center text-gray-900">
                ¿Por qué confiar en nosotros?
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-center text-gray-700 max-w-2xl mx-auto">
                Combinamos estética minimalista con tecnología de punta para
                maximizar tus conversiones.
              </motion.p>
              <motion.div
                variants={staggerContainer}
                className="mt-16 grid md:grid-cols-3 gap-8"
              >
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition"
                  >
                    <div className="w-12 h-12 bg-green-100/80 rounded-xl flex items-center justify-center mb-6">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Proceso */}
        <motion.section
          id="proceso"
          className="py-24 scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="bg-white/30 backdrop-blur-sm rounded-3xl p-12"
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-light text-center text-gray-900">
                Proceso simple en{' '}
                <span className="font-bold text-green-600">3 pasos</span>
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                className="mt-16 flex flex-col md:flex-row justify-between items-start gap-8 relative"
              >
                {steps.map((step, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex-1 text-center relative">
                    <div className="w-16 h-16 bg-gray-900/80 text-white rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-6">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-gray-700">{step.description}</p>
                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gray-400/30 -z-10" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Portafolio */}
        <motion.section
          id="portafolio"
          className="py-24 scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="bg-white/30 backdrop-blur-sm rounded-3xl p-12"
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-light text-center text-gray-900">
                Proyectos recientes
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-center text-gray-700 max-w-2xl mx-auto">
                Algunas de las landing pages que hemos creado para nuestros clientes.
              </motion.p>
              <motion.div
                variants={staggerContainer}
                className="mt-16 grid md:grid-cols-3 gap-6"
              >
                {portfolioItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="group relative bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 shadow-sm hover:shadow-xl transition"
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-200/50 to-gray-300/50 flex items-center justify-center text-gray-500 relative">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-6xl opacity-30">🖼️</span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-700 mt-1">
                        {item.description}
                      </p>
                      <span className="inline-block mt-4 text-green-600 font-medium text-sm group-hover:underline">
                        Ver caso →
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonios */}
        <motion.section
          className="py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="bg-white/30 backdrop-blur-sm rounded-3xl p-12"
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-light text-center text-gray-900">
                Lo que dicen nuestros clientes
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                className="mt-16 grid md:grid-cols-2 gap-8"
              >
                {testimonials.map((testimonial, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-sm"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-300/50 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-700">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-800 italic">"{testimonial.text}"</p>
                    <div className="mt-4 flex text-green-500">★★★★★</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Precios */}
        <motion.section
          id="precios"
          className="py-24 scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="bg-white/30 backdrop-blur-sm rounded-3xl p-12"
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-light text-center text-gray-900">
                Precios claros, sin sorpresas
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-center text-gray-700 max-w-2xl mx-auto">
                Elige el plan que mejor se adapte a tu proyecto.
              </motion.p>
              <motion.div
                variants={staggerContainer}
                className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              >
                {pricing.map((plan, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className={`bg-white/60 backdrop-blur-sm rounded-2xl border ${
                      plan.featured
                        ? 'border-green-500 shadow-xl scale-105'
                        : 'border-gray-200/50 shadow-sm'
                    } p-8`}
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="mt-4 text-4xl font-light text-gray-900">
                      ${plan.price}
                      <span className="text-base font-normal text-gray-600">
                        /único
                      </span>
                    </p>
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-700">
                          <span className="text-green-500 text-lg">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contacto"
                      className={`mt-8 block w-full text-center py-3 rounded-full font-medium transition ${
                        plan.featured
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-200/70 text-gray-900 hover:bg-gray-300'
                      }`}
                    >
                      Seleccionar
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              className="bg-white/30 backdrop-blur-sm rounded-3xl p-12"
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-light text-center text-gray-900">
                Preguntas frecuentes
              </motion.h2>
              <motion.div variants={staggerContainer} className="mt-12 space-y-6">
                {faq.map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="border-b border-gray-300/30 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.q}
                    </h3>
                    <p className="mt-3 text-gray-700">{item.a}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contacto */}
        <motion.section
          id="contacto"
          className="py-24 scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="bg-white/30 backdrop-blur-sm rounded-3xl p-12 text-center"
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-light text-gray-900">
                ¿Listo para empezar tu proyecto?
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-xl text-gray-800 max-w-2xl mx-auto">
                Contáctanos hoy y recibe una propuesta personalizada en 24 horas.
              </motion.p>
              <motion.form variants={fadeUp} className="mt-10 max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-5 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/70 backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition"
                  >
                    Enviar
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Te contactaremos sin compromiso.
                </p>
              </motion.form>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-white/30 backdrop-blur-md border-t border-gray-200/30 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-light tracking-tight text-gray-900">
            Studio<span className="font-bold text-green-600">Verde</span>
          </div>
          <div className="flex space-x-6 text-sm text-gray-800 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-600">
              Instagram
            </a>
            <a href="#" className="hover:text-green-600">
              LinkedIn
            </a>
            <a href="#" className="hover:text-green-600">
              Twitter
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-4 md:mt-0">
            © 2025 StudioVerde. Todos los derechos reservados.
          </p>
        </div>
      </motion.footer>
    </>
  );
}