"use client";

import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  roles?: string[];
  cta?: string;
  media: {
    video: string; // Ruta del video (obligatorio)
    images: string[]; // Rutas de las imágenes (de 1 a 10)
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Black Pay',
    description: 'Participé como Product Designer y Product Owner...',
    roles: ['Product Designer', 'Product Owner'],
    cta: 'Ver Proyecto',
    media: {
      video: '/out.mp4', // Video específico para Black Pay
      images: [
        '/img1.png',
        '/img2.png',
        '/img3.png',
        '/img4.png',
        '/img5.png',
      ],
    },
  },
  {
    id: 2,
    title: 'Agenda',
    description: 'Creé desde 0 una aplicación para agendamiento...',
    roles: ['Diseñador UX/UI', 'Desarrollador Frontend'],
    media: {
      video: '/out2.mp4', // Video específico para Agenda
      images: [
        '/agenda1.png',
        '/agenda2.png',
      ],
    },
  },
  {
    id: 3,
    title: 'Coinsturn',
    description: 'En este fui Head of Product y diseñador...',
    roles: ['Head of Product', 'Diseñador'],
    media: {
      video: '/videos/coinsturn.mp4', // Video específico para Coinsturn
      images: [
        '/img1.png',
        '/img2.png',
        '/img3.png',
        '/img4.png',
      ],
    },
  },
  {
    id: 4,
    title: 'Sky',
    description: 'Mejora de ecommerce...',
    roles: ['Diseñador UX/UI'],
    media: {
      video: '/videos/sky.mp4', // Video específico para Sky
      images: [
        '/img1.png',
      ],
    },
  },
  // Agrega más proyectos aquí...
];

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Proyectos</h2>

        {/* Contenedores para cada proyecto */}
        {projects.map((project, index) => {
          const projectRef = useRef(null);
          const projectInView = useInView(projectRef, { margin: "-100px" });
          const projectControls = useAnimation();

          useEffect(() => {
            if (projectInView) {
              projectControls.start("visible");
            } else {
              projectControls.start("hidden");
            }
          }, [projectInView, projectControls]);

          return (
            <motion.div
              key={project.id}
              ref={projectRef}
              initial="hidden"
              animate={projectControls}
              variants={{
                visible: { opacity: 1, y: 0, scale: 1 },
                hidden: { opacity: 0, y: 50, scale: 0.9 },
              }}
              transition={{ duration: 0.6 }}
              className="mb-10 p-6 rounded-3xl bg-grey-dark"
            >
              {/* Título del proyecto */}
              <motion.h3
                className="text-2xl font-bold text-center mb-6 text-berry"
              >
                {project.title}
              </motion.h3>

              {/* Grid Bento para cada proyecto */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Video (rectangular horizontal) */}
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

                {/* Descripción del producto (rectangular vertical) */}
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

                {/* Roles (cuadrado) */}
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
                    {project.roles?.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                </motion.div>

                {/* Imágenes del proyecto */}
                {project.media.images.map((image, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: 0.9 },
                    }}
                    transition={{ duration: 0.6, delay: 0.8 + idx * 0.2 }}
                    className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-grey-dark ${
                      idx % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Imagen ${idx + 1} de ${project.title}`}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}