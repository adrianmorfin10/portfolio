"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  roles?: string[];
  cta?: string;
  media: {
    video: string;
    images: string[];
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Black Pay",
    description:
      "Participé como Product Designer en el desarrollo de las interfaces de la aplicación mobile y web, y lideré el desarrollo de la aplicación mobile para USA y MX, asegurando el despliegue correcto del lanzamiento de la APP.",
    roles: ["Product Designer", "Product Owner"],
    cta: "Ver Proyecto",
    media: {
      video: "/out.mp4",
      images: ["/img1.png", "/img2.png"],
    },
  },
  {
    id: 2,
    title: "Agenda",
    description:
      "Aplicación integral para agendamiento, gestión de ventas y reportería con IA, desarrollada desde cero como freelance. Incluye diseño UX/UI (branding, tipografías), levantamiento de requerimientos, planificación, desarrollo frontend y estructuración de base de datos. Gestioné el producto como Product Owner y resolví bugs hasta la entrega final.",
    roles: ["Diseñador UX/UI", "Desarrollador Frontend", "Product Owner"],
    media: {
      video: "/out2.mp4",
      images: ["/agenda1.png", "/agenda2.png"],
    },
  },
  {
    id: 3,
    title: "Coinsturn",
    description:
      "Proyecto en el que desarrollé habilidades como backend y frontend. Tras realizar el desarrollo de la aplicación para que los clientes visualizaran sus inversiones, integré nuevas funcionalidades como un simulador. Participé en todas las etapas: research, diseño, prototipado, desarrollo y puesta en marcha de funcionalidades del producto.",
    roles: [
      "Head of Product",
      "Desarrollador Fullstack",
      "Diseñador UX/UI",
      "Desarrollador backend",
    ],
    cta: "Ver Proyecto",
    media: {
      video: "/out6.mp4",
      images: ["/coins1.png", "/coins2.png"],
    },
  },
  {
    id: 4,
    title: "US App",
    description:
      "Diseñé una funcionalidad crossborder junto con el project owner para enviar fondos desde Estados Unidos a México, simulando una transacción tipo push pero en realidad realizando una transacción tipo pull (jalando fondos desde México). Esto se resolvió mediante comunicación entre aplicativos y diseño de componentes UI para la transacción crossborder entre tarjetas. También enfrenté retos en la aplicación de US mejorando la experiencia de usuario: agregué preguntas en el onboarding para personalizar la experiencia, construí un home de la aplicación mobile basado en preferencias de usuario, y diseñé un menú de navegación dinámico dependiendo del comportamiento del usuario.",
    roles: ["Diseñador UX/UI", "Product Designer", "Frontend Developer"],
    media: {
      video: "/us-app.mp4",
      images: ["/us1.png", "/us2.png", "/us3.png"], // Ejemplos de imágenes del proceso
    },
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(
    new Array(projects.length).fill(false)
  );

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = projectRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            setVisibleProjects((prev) => {
              const updated = [...prev];
              updated[index] = entry.isIntersecting;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 } // Ajusta según necesites
    );

    const currentRefs = projectRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Proyectos</h2>

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            ref={(el) => {
              if (el) projectRefs.current[index] = el;
            }}
            initial="hidden"
            animate={visibleProjects[index] ? "visible" : "hidden"}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 50, scale: 0.9 },
            }}
            transition={{ duration: 0.6 }}
            className="mb-10 p-6 rounded-3xl bg-gray-900"
          >
            <motion.h3 className="text-2xl font-bold text-center mb-6 text-blue-400">
              {project.title}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Video (oculto en móviles) */}
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
                className="md:col-span-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-gray-800 p-6"
              >
                <p className="text-gray-300">{project.description}</p>
              </motion.div>

              {/* Roles */}
              <motion.div
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-gray-800 p-6"
              >
                <h4 className="text-lg font-semibold mb-4 text-blue-400">
                  Roles:
                </h4>
                <ul className="list-disc list-inside text-gray-300">
                  {project.roles?.map((role, idx) => (
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
                  className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-gray-800 ${
                    idx % 3 === 0 ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Imagen ${idx + 1} de ${project.title}`}
                    className="w-full h-64 object-cover"
                    width={500}
                    height={300}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}