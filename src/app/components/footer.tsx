'use client';

import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

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
  const controls = useAnimation(); // Mueve el hook al nivel superior

  useEffect(() => {
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
      { threshold: 0.5 }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

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
            ref={(el) => {
              if (el) projectRefs.current[index] = el;
            }}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 50, scale: 0.9 },
            }}
            transition={{ duration: 0.6 }}
            className="mb-10 p-6 rounded-3xl bg-grey-dark"
          >
            {/* Resto del código */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}