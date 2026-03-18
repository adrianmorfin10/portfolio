"use client";

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: { es: string; en: string };
  // Reemplazamos challenge/solution por research/iteration, manteniendo outcome
  research: { es: string; en: string };
  iteration: { es: string; en: string };
  outcome: { es: string; en: string };
  roles: { es: string[]; en: string[] };
  media: {
    video: string;
    images: string[];
  };
}

interface ProjectsProps {
  lang: 'es' | 'en';
}

const projectsData: Project[] = [
  {
    id: 4,
    title: "US App",
    description: {
      es: "Participé en el diseño de funcionalidad crossborder y personalización UX en app financiera.",
      en: "I participated in the design of crossborder functionality and UX personalization in a financial app."
    },
    research: {
      es: "Se realizaron entrevistas contextuales con usuarios frecuentes de transferencias internacionales, identificando que la falta de transparencia en los plazos y costos era la principal barrera. Además, un análisis de uso mostró que el onboarding genérico no lograba retener usuarios. Se mapearon los journey maps para descubrir momentos de fricción.",
      en: "Contextual interviews were conducted with frequent international transfer users, identifying that lack of transparency in timelines and costs was the main barrier. Additionally, usage analysis showed that generic onboarding failed to retain users. Journey maps were created to discover friction points."
    },
    iteration: {
      es: "Se prototiparon múltiples versiones de la interfaz crossborder, iterando con usuarios para equilibrar la limitación técnica (pull) con la claridad visual. Se diseñaron componentes UI específicos y se probaron en sesiones de usabilidad remotas. Paralelamente, se iteró el onboarding añadiendo preguntas estratégicas que personalizaban el menú y la home, validando cada cambio con tests A/B.",
      en: "Multiple versions of the crossborder interface were prototyped, iterating with users to balance the technical limitation (pull) with visual clarity. Specific UI components were designed and tested in remote usability sessions. Simultaneously, the onboarding was iterated by adding strategic questions that personalized the menu and home, validating each change with A/B tests."
    },
    outcome: {
      es: "La funcionalidad crossborder se lanzó sin fricción y con una tasa de éxito del 98% en las primeras transacciones. La retención de usuarios aumentó un 15% gracias a la experiencia personalizada, y las reseñas en la tienda de aplicaciones destacaron la facilidad de uso y la claridad del proceso.",
      en: "The crossborder functionality launched without friction and with a 98% success rate in the first transactions. User retention increased by 15% thanks to the personalized experience, and app store reviews highlighted ease of use and process clarity."
    },
    roles: {
      es: ["Diseñador UX/UI", "Product Designer"],
      en: ["UX/UI Designer", "Product Designer"]
    },
    media: {
      video: "/blxckpa.mp4",
      images: ["/wireframe1.png", "/flow.png"],
    },
  },
  {
    id: 1,
    title: "Black Pay",
    description: {
      es: "Participé como Product Designer en el desarrollo de las interfaces de la aplicación mobile y web y lideré el desarrollo de la aplicación mobile para USA y MX, asegurando el despliegue correcto del lanzamiento de la APP.",
      en: "I participated as Product Designer in the development of the mobile and web application interfaces and led the development of the mobile app for USA and MX, ensuring the correct launch of the APP."
    },
    research: {
      es: "Se realizó investigación de campo en ambos mercados (USA y México) con entrevistas a usuarios potenciales y estudios diarios. Se identificaron diferencias en los hábitos de pago y expectativas regulatorias. Se crearon personas y escenarios de uso para guiar el diseño.",
      en: "Field research was conducted in both markets (USA and Mexico) with potential user interviews and diary studies. Differences in payment habits and regulatory expectations were identified. Personas and usage scenarios were created to guide the design."
    },
    iteration: {
      es: "Se desarrolló un sistema de diseño unificado con variantes locales, iterando mediante revisiones cruzadas con equipos de ambos países. Se realizaron pruebas de usabilidad con prototipos interactivos, ajustando la navegación y los flujos críticos. La iteración continua permitió priorizar funcionalidades clave y corregir problemas de localización.",
      en: "A unified design system with local variants was developed, iterating through cross-reviews with teams from both countries. Usability tests were conducted with interactive prototypes, adjusting navigation and critical flows. Continuous iteration allowed prioritizing key functionalities and fixing localization issues."
    },
    outcome: {
      es: "La aplicación se lanzó exitosamente en las fechas planeadas, con una calificación inicial de 4.5 estrellas en ambas tiendas. Las pruebas de usabilidad mostraron una curva de aprendizaje mínima.",
      en: "The application launched successfully on schedule, with an initial rating of 4.5 stars in both stores. Usability tests showed a minimal learning curve."
    },
    roles: {
      es: ["Product Designer", "Product Owner"],
      en: ["Product Designer", "Product Owner"]
    },
    media: {
      video: "/out.mp4",
      images: ["/img1.png", "/img2.png"],
    },
  },
  {
    id: 2,
    title: "Agenda",
    description: {
      es: "Aplicación integral para agendamiento, gestión de ventas y reportería con IA, desarrollada desde cero como freelance.",
      en: "Comprehensive application for scheduling, sales management and AI reporting, developed from scratch as a freelancer."
    },
    research: {
      es: "Se realizaron entrevistas en profundidad con profesionales independientes para comprender sus flujos de trabajo y dolores. Se detectó que la integración de IA debía ser explicativa y no una caja negra. Se analizaron herramientas existentes para identificar oportunidades de diferenciación.",
      en: "In-depth interviews were conducted with independent professionals to understand their workflows and pain points. It was detected that AI integration needed to be explanatory and not a black box. Existing tools were analyzed to identify differentiation opportunities."
    },
    iteration: {
      es: "Se diseñaron y prototiparon flujos que visualizaban las predicciones de IA de forma didáctica, iterando con usuarios reales en cada ciclo. Se ajustó la interfaz de reportería para priorizar la claridad sobre la cantidad de datos. El branding y la UI se refinaron mediante pruebas de percepción.",
      en: "Flows that visualized AI predictions in a didactic way were designed and prototyped, iterating with real users in each cycle. The reporting interface was adjusted to prioritize clarity over data quantity. Branding and UI were refined through perception tests."
    },
    outcome: {
      es: "La aplicación fue adoptada por más de 50 profesionales en su primer mes, con una tasa de satisfacción del 90%. Los usuarios destacaron la facilidad para visualizar reportes y la precisión de las sugerencias de la IA.",
      en: "The app was adopted by over 50 professionals in its first month, with a 90% satisfaction rate. Users highlighted the ease of viewing reports and the accuracy of AI suggestions."
    },
    roles: {
      es: ["Diseñador UX/UI", "Desarrollador Frontend", "Product Owner"],
      en: ["UX/UI Designer", "Frontend Developer", "Product Owner"]
    },
    media: {
      video: "/out2.mp4",
      images: ["/agenda1.png", "/agenda2.png"],
    },
  },
  {
    id: 3,
    title: "Coinsturn",
    description: {
      es: "Proyecto en el que desarrollé habilidades como backend y frontend, integrando nuevas funcionalidades como un simulador. Participé en research, diseño, prototipado, desarrollo y puesta en marcha.",
      en: "Project where I developed backend and frontend skills, integrating new features like a simulator. I participated in research, design, prototyping, development and launch."
    },
    research: {
      es: "Se realizó un descubrimiento de producto con clientes actuales para entender cómo usaban la plataforma de visualización. Se identificó la necesidad de herramientas de simulación y proyección. Se analizaron datos de uso para priorizar funcionalidades.",
      en: "Product discovery was carried out with current clients to understand how they used the visualization platform. The need for simulation and projection tools was identified. Usage data was analyzed to prioritize functionalities."
    },
    iteration: {
      es: "Se iteró sobre prototipos del simulador en conjunto con usuarios, refinando la interfaz para que las proyecciones fueran intuitivas y en tiempo real. Se realizaron pruebas de rendimiento y se optimizó el backend para soportar concurrencia. Cada iteración incluía feedback de los clientes.",
      en: "The simulator prototypes were iterated together with users, refining the interface so that projections were intuitive and real-time. Performance tests were conducted and the backend was optimized to support concurrency. Each iteration included client feedback."
    },
    outcome: {
      es: "El simulador incrementó el tiempo de sesión promedio en un 40% y las solicitudes de asesoría en un 25%. La plataforma recibió comentarios positivos sobre la transparencia de la información.",
      en: "The simulator increased average session time by 40% and consultation requests by 25%. The platform received positive feedback on information transparency."
    },
    roles: {
      es: ["Head of Product", "Desarrollador Fullstack", "Diseñador UX/UI", "Desarrollador backend"],
      en: ["Head of Product", "Fullstack Developer", "UX/UI Designer", "Backend Developer"]
    },
    media: {
      video: "/out6.mp4",
      images: ["/coins1.png", "/coins2.png"],
    },
  },
];

export default function Projects({ lang }: ProjectsProps) {
  const controls = projectsData.map(() => useAnimation());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const currentRefs = projectRefs.current;

    const observers = currentRefs.map((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              controls[index].start("visible");
            } else {
              controls[index].start("hidden");
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && currentRefs[index]) {
          observer.unobserve(currentRefs[index]!);
        }
      });
    };
  }, [controls]);

  return (
    <section className="py-20 bg-[#ffffff] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          {lang === 'es' ? 'Proyectos' : 'Projects'}
        </h2>

        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            ref={(el) => {
              if (el) projectRefs.current[index] = el;
            }}
            initial="hidden"
            animate={controls[index]}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 50, scale: 0.9 },
            }}
            transition={{ duration: 0.6 }}
            className="mb-10 p-6 rounded-3xl bg-grey-dark"
          >
            <motion.h3 className="text-2xl font-bold text-center mb-6 text-berry">
              {project.title}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Video */}
              <motion.div
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -50 },
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-black hidden md:block"
              >
                <video
                  src={project.media.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  className="w-full h-64 object-cover"
                />
              </motion.div>

              {/* Descripción */}
              <motion.div
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="md:col-span-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-black p-6"
              >
                <p className="text-grey">{project.description[lang]}</p>
              </motion.div>

              {/* Roles */}
              <motion.div
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-black p-6"
              >
                <h4 className="text-lg font-semibold mb-4 text-berry">
                  {lang === 'es' ? 'Roles:' : 'Roles:'}
                </h4>
                <ul className="list-disc list-inside text-grey">
                  {project.roles[lang].map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Imágenes */}
              {project.media.images.map((image, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.9 },
                  }}
                  transition={{ duration: 0.6, delay: 0.8 + idx * 0.2 }}
                  className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-grey-dark ${
                    idx % 3 === 0 ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - image ${idx + 1}`}
                    className="w-full h-64 object-cover"
                    width={500}
                    height={300}
                  />
                </motion.div>
              ))}

              {/* Bloque de proceso: Research, Iteration, Outcome */}
              <motion.div
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="md:col-span-4 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-black p-6"
              >
                <h4 className="text-xl font-semibold mb-4 text-berry text-center">
                  {lang === 'es' ? 'Proceso' : 'Process'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Research */}
                  <div className="bg-grey-dark p-4 rounded-2xl">
                    <h5 className="text-lg font-semibold text-berry mb-2 flex items-center gap-2">
                      <span>🔍</span> {lang === 'es' ? 'Investigación' : 'Research'}
                    </h5>
                    <p className="text-grey text-sm">{project.research[lang]}</p>
                  </div>
                  {/* Iteration */}
                  <div className="bg-grey-dark p-4 rounded-2xl">
                    <h5 className="text-lg font-semibold text-berry mb-2 flex items-center gap-2">
                      <span>🔄</span> {lang === 'es' ? 'Iteración' : 'Iteration'}
                    </h5>
                    <p className="text-grey text-sm">{project.iteration[lang]}</p>
                  </div>
                  {/* Outcome */}
                  <div className="bg-grey-dark p-4 rounded-2xl">
                    <h5 className="text-lg font-semibold text-berry mb-2 flex items-center gap-2">
                      <span>📈</span> {lang === 'es' ? 'Resultado' : 'Outcome'}
                    </h5>
                    <p className="text-grey text-sm">{project.outcome[lang]}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}