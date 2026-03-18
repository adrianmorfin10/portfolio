"use client";

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: { es: string; en: string };
  challenge: { es: string; en: string };
  solution: { es: string; en: string };
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
    challenge: {
      es: "Diseñar una funcionalidad crossborder que permitiera enviar fondos desde Estados Unidos a México de manera fluida, pero con una limitación técnica: la transacción debía ser tipo 'pull' (jalar fondos desde México) en lugar de 'push' (enviar desde USA), lo que generaba fricción y falta de transparencia para el usuario. Además, la aplicación carecía de personalización: el onboarding era genérico y el menú de navegación no se adaptaba al comportamiento del usuario.",
      en: "Design a crossborder functionality to send funds from the United States to Mexico smoothly, but with a technical limitation: the transaction had to be a 'pull' type (pull funds from Mexico) instead of 'push' (send from USA), which caused friction and lack of transparency for the user. Additionally, the app lacked personalization: onboarding was generic and the navigation menu did not adapt to user behavior."
    },
    solution: {
      es: "Trabajé junto al project owner para diseñar una solución híbrida: mediante comunicación entre aplicativos, logramos que la interfaz mostrara el proceso como una transferencia push tradicional, mientras que en segundo plano se ejecutaba la lógica pull. Diseñé componentes UI específicos para la transacción crossborder que comunicaban claramente los pasos y tiempos. Para la personalización, agregué preguntas estratégicas durante el onboarding (intereses financieros, frecuencia de uso) que alimentaban un motor de preferencias. Con base en ello, diseñé un home dinámico que mostraba secciones relevantes para cada usuario y un menú de navegación que se reordenaba según las funcionalidades más utilizadas.",
      en: "I worked with the project owner to design a hybrid solution: through inter-application communication, we made the interface show the process as a traditional push transfer, while in the background the pull logic was executed. I designed specific UI components for the crossborder transaction that clearly communicated the steps and timing. For personalization, I added strategic questions during onboarding (financial interests, frequency of use) that fed a preference engine. Based on this, I designed a dynamic home screen showing relevant sections for each user and a navigation menu that reordered according to the most used functionalities."
    },
    outcome: {
      es: "La funcionalidad crossborder se lanzó sin fricción y con una tasa de éxito del 98% en las primeras transacciones. La retención de usuarios aumentó un 15% gracias a la experiencia personalizada, y las reseñas en la tienda de aplicaciones destacaron la facilidad de uso y la claridad del proceso.",
      en: "The crossborder functionality launched without friction and with a 98% success rate in the first transactions. User retention increased by 15% thanks to the personalized experience, and app store reviews highlighted ease of use and process clarity."
    },
    roles: {
      es: ["Diseñador UX/UI", "Product Designer"],
      en: ["UX/UI Designer", "Product Designer" ]
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
    challenge: {
      es: "El reto era lanzar una aplicación mobile y web para un servicio de pagos en USA y México, con equipos distribuidos y plazos ajustados. La interfaz debía ser intuitiva para usuarios de ambos países, considerando diferencias culturales y regulatorias.",
      en: "The challenge was to launch a mobile and web application for a payment service in the USA and Mexico, with distributed teams and tight deadlines. The interface had to be intuitive for users in both countries, considering cultural and regulatory differences."
    },
    solution: {
      es: "Como Product Designer y Product Owner, lideré el diseño de las interfaces mobile y web, realizando investigación de usuarios en ambos mercados. Implementé un sistema de diseño unificado que permitía adaptaciones locales sin perder coherencia. Coordiné con desarrollo para priorizar funcionalidades críticas y asegurar el despliegue correcto en ambas regiones.",
      en: "As Product Designer and Product Owner, I led the design of the mobile and web interfaces, conducting user research in both markets. I implemented a unified design system that allowed local adaptations without losing coherence. I coordinated with development to prioritize critical functionalities and ensure correct deployment in both regions."
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
    challenge: {
      es: "Desarrollar una aplicación integral para agendamiento, gestión de ventas y reportería con IA, partiendo desde cero sin un equipo establecido. El principal desafío era integrar funcionalidades complejas (IA, reportería) en una interfaz sencilla para profesionales sin experiencia técnica.",
      en: "Develop a comprehensive application for scheduling, sales management and AI reporting, starting from scratch without an established team. The main challenge was to integrate complex functionalities (AI, reporting) into a simple interface for professionals without technical experience."
    },
    solution: {
      es: "Como freelance, realicé el levantamiento de requerimientos con usuarios potenciales, diseñé el branding y la UI/UX, y desarrollé el frontend. Para la IA, diseñé flujos que explicaban visualmente las predicciones y recomendaciones. Organicé la base de datos y gestioné el backlog como Product Owner, realizando pruebas continuas y corrigiendo bugs hasta la entrega final.",
      en: "As a freelancer, I gathered requirements with potential users, designed the branding and UI/UX, and developed the frontend. For AI, I designed flows that visually explained predictions and recommendations. I organized the database and managed the backlog as Product Owner, performing continuous testing and fixing bugs until final delivery."
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
    challenge: {
      es: "Se necesitaba transformar una plataforma de visualización de inversiones en un producto más completo, con nuevas funcionalidades como un simulador de inversiones, y mejorar la experiencia de usuario para retener a los clientes existentes.",
      en: "We needed to transform an investment visualization platform into a more complete product, with new features like an investment simulator, and improve the user experience to retain existing customers."
    },
    solution: {
      es: "Participé en todas las etapas: desde el research con usuarios para identificar necesidades no cubiertas, hasta el diseño de prototipos y desarrollo fullstack. Implementé el simulador de inversiones con una interfaz clara que mostraba proyecciones en tiempo real. También optimicé el rendimiento del backend para soportar mayor concurrencia.",
      en: "I participated in all stages: from user research to identify unmet needs, to prototype design and fullstack development. I implemented the investment simulator with a clear interface showing real-time projections. I also optimized backend performance to support higher concurrency."
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

              {/* Bloque de proceso */}
              <motion.div
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="md:col-span-4 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-black p-6"
              >
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-berry">
                      {lang === 'es' ? 'Desafío' : 'Challenge'}
                    </h4>
                    <p className="text-grey">{project.challenge[lang]}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-berry">
                      {lang === 'es' ? 'Solución' : 'Solution'}
                    </h4>
                    <p className="text-grey">{project.solution[lang]}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-berry">
                      {lang === 'es' ? 'Resultado' : 'Outcome'}
                    </h4>
                    <p className="text-grey">{project.outcome[lang]}</p>
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