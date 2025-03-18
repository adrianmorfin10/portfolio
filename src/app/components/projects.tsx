"use client";

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
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
    description: "Participé como Product Designer y Product Owner...",
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
    description: "Creé desde 0 una aplicación para agendamiento...",
    roles: ["Diseñador UX/UI", "Desarrollador Frontend"],
    media: {
      video: "/out2.mp4",
      images: ["/agenda1.png", "/agenda2.png"],
    },
  },
  {
    id: 3,
    title: "Coinsturn",
    description: "Desarrollé una plataforma de intercambio de criptomonedas...",
    roles: ["Desarrollador Fullstack", "Diseñador UX/UI"],
    cta: "Ver Proyecto",
    media: {
      video: "/out6.mp4",
      images: ["/coins1.png", "/coins2.png"],
    },
  },
];

export default function Projects() {
  // Inicializamos los controles de animación fuera del bucle
  const controlsArray = projects.map(() => useAnimation());

  // Referencias para los proyectos
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const currentRefs = projectRefs.current;

    // Creamos un IntersectionObserver para cada proyecto
    const observers = currentRefs.map((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              controlsArray[index].start("visible"); // Animación para el proyecto visible
            } else {
              controlsArray[index].start("hidden"); // Animación para el proyecto oculto
            }
          });
        },
        { threshold: 0.1 } // Ajusta el threshold según sea necesario
      );

      observer.observe(ref); // Observamos el contenedor del proyecto
      return observer;
    });

    // Función de limpieza
    return () => {
      observers.forEach((observer, index) => {
        if (observer && currentRefs[index]) {
          observer.unobserve(currentRefs[index]!);
        }
      });
    };
  }, [controlsArray]);

  return (
    <section className="py-20 bg-[#ffffff] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Proyectos</h2>

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            ref={(el) => {
              if (el) projectRefs.current[index] = el; // Asignamos la referencia
            }}
            initial="hidden"
            animate={controlsArray[index]} // Usamos el control correspondiente
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
                className="md:col-span-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-black p-6"
              >
                <p className="text-grey">{project.description}</p>
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
                <h4 className="text-lg font-semibold mb-4 text-berry">Roles:</h4>
                <ul className="list-disc list-inside text-grey">
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
                  className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-grey-dark ${
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