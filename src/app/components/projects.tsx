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
      images: ["/img1.png", "/img2.png", "/img3.png", "/img4.png", "/img5.png"],
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
];

export default function Projects() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    // Copiamos projectRefs.current a una variable local
    const currentRefs = projectRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.5 } // Ajusta el threshold según sea necesario
    );

    // Observamos cada referencia
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Función de limpieza
    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [controls]);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Proyectos</h2>

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            initial="hidden"
            animate={controls}
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
              <motion.div
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -50 },
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-black"
              >
                <video
                  src={project.media.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-64 object-cover"
                />
              </motion.div>

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