
"use client";

import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: { es: string; en: string };
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
  lang: "es" | "en";
}

const projectsData: Project[] = [
  {
    id: 4,
    title: "US App",
    description: {
      es: "Participé en el diseño de funcionalidad crossborder y personalización UX en app financiera.",
      en: "I participated in the design of crossborder functionality and UX personalization in a financial app.",
    },
    research: {
      es: "Se realizaron entrevistas contextuales con usuarios frecuentes de transferencias internacionales, identificando que la falta de transparencia en los plazos y costos era la principal barrera. Además, un análisis de uso mostró que el onboarding genérico no lograba retener usuarios. Se mapearon los journey maps para descubrir momentos de fricción.",
      en: "Contextual interviews were conducted with frequent international transfer users, identifying that lack of transparency in timelines and costs was the main barrier. Additionally, usage analysis showed that generic onboarding failed to retain users. Journey maps were created to discover friction points.",
    },
    iteration: {
      es: "Se prototiparon múltiples versiones de la interfaz crossborder, iterando con usuarios para equilibrar la limitación técnica (pull) con la claridad visual. Se diseñaron componentes UI específicos y se probaron en sesiones de usabilidad remotas. Paralelamente, se iteró el onboarding añadiendo preguntas estratégicas que personalizaban el menú y la home, validando cada cambio con tests A/B.",
      en: "Multiple versions of the crossborder interface were prototyped, iterating with users to balance the technical limitation (pull) with visual clarity. Specific UI components were designed and tested in remote usability sessions. Simultaneously, the onboarding was iterated by adding strategic questions that personalized the menu and home, validating each change with A/B tests.",
    },
    outcome: {
      es: "La funcionalidad crossborder se lanzó sin fricción y con una tasa de éxito del 98% en las primeras transacciones. La retención de usuarios aumentó un 15% gracias a la experiencia personalizada, y las reseñas en la tienda de aplicaciones destacaron la facilidad de uso y la claridad del proceso.",
      en: "The crossborder functionality launched without friction and with a 98% success rate in the first transactions. User retention increased by 15% thanks to the personalized experience, and app store reviews highlighted ease of use and process clarity.",
    },
    roles: {
      es: ["Diseñador UX/UI", "Product Designer"],
      en: ["UX/UI Designer", "Product Designer"],
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
      en: "I participated as Product Designer in the development of the mobile and web application interfaces and led the development of the mobile app for USA and MX, ensuring the correct launch of the APP.",
    },
    research: {
      es: "Se realizó investigación de campo en ambos mercados (USA y México) con entrevistas a usuarios potenciales y estudios diarios. Se identificaron diferencias en los hábitos de pago y expectativas regulatorias. Se crearon personas y escenarios de uso para guiar el diseño.",
      en: "Field research was conducted in both markets (USA and Mexico) with potential user interviews and diary studies. Differences in payment habits and regulatory expectations were identified. Personas and usage scenarios were created to guide the design.",
    },
    iteration: {
      es: "Se desarrolló un sistema de diseño unificado con variantes locales, iterando mediante revisiones cruzadas con equipos de ambos países. Se realizaron pruebas de usabilidad con prototipos interactivos, ajustando la navegación y los flujos críticos. La iteración continua permitió priorizar funcionalidades clave y corregir problemas de localización.",
      en: "A unified design system with local variants was developed, iterating through cross-reviews with teams from both countries. Usability tests were conducted with interactive prototypes, adjusting navigation and critical flows. Continuous iteration allowed prioritizing key functionalities and fixing localization issues.",
    },
    outcome: {
      es: "La aplicación se lanzó exitosamente en las fechas planeadas, con una calificación inicial de 4.5 estrellas en ambas tiendas. Las pruebas de usabilidad mostraron una curva de aprendizaje mínima.",
      en: "The application launched successfully on schedule, with an initial rating of 4.5 stars in both stores. Usability tests showed a minimal learning curve.",
    },
    roles: {
      es: ["Product Designer", "Product Owner"],
      en: ["Product Designer", "Product Owner"],
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
      en: "Comprehensive application for scheduling, sales management and AI reporting, developed from scratch as a freelancer.",
    },
    research: {
      es: "Se realizaron entrevistas en profundidad con profesionales independientes para comprender sus flujos de trabajo y dolores. Se detectó que la integración de IA debía ser explicativa y no una caja negra. Se analizaron herramientas existentes para identificar oportunidades de diferenciación.",
      en: "In-depth interviews were conducted with independent professionals to understand their workflows and pain points. It was detected that AI integration needed to be explanatory and not a black box. Existing tools were analyzed to identify differentiation opportunities.",
    },
    iteration: {
      es: "Se diseñaron y prototiparon flujos que visualizaban las predicciones de IA de forma didáctica, iterando con usuarios reales en cada ciclo. Se ajustó la interfaz de reportería para priorizar la claridad sobre la cantidad de datos. El branding y la UI se refinaron mediante pruebas de percepción.",
      en: "Flows that visualized AI predictions in a didactic way were designed and prototyped, iterating with real users in each cycle. The reporting interface was adjusted to prioritize clarity over data quantity. Branding and UI were refined through perception tests.",
    },
    outcome: {
      es: "La aplicación fue adoptada por más de 50 profesionales en su primer mes, con una tasa de satisfacción del 90%. Los usuarios destacaron la facilidad para visualizar reportes y la precisión de las sugerencias de la IA.",
      en: "The app was adopted by over 50 professionals in its first month, with a 90% satisfaction rate. Users highlighted the ease of viewing reports and the accuracy of AI suggestions.",
    },
    roles: {
      es: ["Diseñador UX/UI", "Desarrollador Frontend", "Product Owner"],
      en: ["UX/UI Designer", "Frontend Developer", "Product Owner"],
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
      en: "Project where I developed backend and frontend skills, integrating new features like a simulator. I participated in research, design, prototyping, development and launch.",
    },
    research: {
      es: "Se realizó un descubrimiento de producto con clientes actuales para entender cómo usaban la plataforma de visualización. Se identificó la necesidad de herramientas de simulación y proyección. Se analizaron datos de uso para priorizar funcionalidades.",
      en: "Product discovery was carried out with current clients to understand how they used the visualization platform. The need for simulation and projection tools was identified. Usage data was analyzed to prioritize functionalities.",
    },
    iteration: {
      es: "Se iteró sobre prototipos del simulador en conjunto con usuarios, refinando la interfaz para que las proyecciones fueran intuitivas y en tiempo real. Se realizaron pruebas de rendimiento y se optimizó el backend para soportar concurrencia. Cada iteración incluía feedback de los clientes.",
      en: "The simulator prototypes were iterated together with users, refining the interface so that projections were intuitive and real-time. Performance tests were conducted and the backend was optimized to support concurrency. Each iteration included client feedback.",
    },
    outcome: {
      es: "El simulador incrementó el tiempo de sesión promedio en un 40% y las solicitudes de asesoría en un 25%. La plataforma recibió comentarios positivos sobre la transparencia de la información.",
      en: "The simulator increased average session time by 40% and consultation requests by 25%. The platform received positive feedback on information transparency.",
    },
    roles: {
      es: [
        "Head of Product",
        "Desarrollador Fullstack",
        "Diseñador UX/UI",
        "Desarrollador backend",
      ],
      en: [
        "Head of Product",
        "Fullstack Developer",
        "UX/UI Designer",
        "Backend Developer",
      ],
    },
    media: {
      video: "/out6.mp4",
      images: ["/coins1.png", "/coins2.png"],
    },
  },
];

export default function Projects({ lang }: ProjectsProps) {
  const copy = {
    es: {
      eyebrow: "Trabajo seleccionado / 01",
      title: "Proyectos",
      accent: "en detalle.",
      description:
        "Productos digitales diseñados, prototipados y desarrollados desde la investigación hasta su ejecución.",
      caseStudy: "Caso de estudio",
      roles: "Roles",
      process: "Proceso",
      processDescription: "De la idea al producto",
      research: "Investigación",
      iteration: "Iteración",
      outcome: "Resultado",
    },
    en: {
      eyebrow: "Selected work / 01",
      title: "Projects",
      accent: "in detail.",
      description:
        "Digital products designed, prototyped, and developed from research through execution.",
      caseStudy: "Case study",
      roles: "Roles",
      process: "Process",
      processDescription: "From idea to product",
      research: "Research",
      iteration: "Iteration",
      outcome: "Outcome",
    },
  }[lang];

  return (
    <section
      className="relative overflow-hidden bg-[#050505] py-24 text-white md:py-36"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10">
        {/* Encabezado editorial */}
        <header className="mb-20 md:mb-28">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
            {copy.eyebrow}
          </p>

          <h2 className="mt-8 max-w-[1250px] text-[clamp(4rem,11vw,11rem)] font-black leading-[0.8] tracking-[-0.085em]">
            {copy.title}
            <br />
            <span className="text-white/30 transition-colors duration-300 hover:text-white/75">
              {copy.accent}
            </span>
          </h2>

          <p className="mt-10 max-w-xl text-sm leading-7 text-white/45 md:mt-14 md:text-base md:leading-8">
            {copy.description}
          </p>
        </header>

        {projectsData.map((project, index) => (
          <article
            key={project.id}
            className="mb-24 border-t border-white/15 pt-6 md:mb-32"
          >
            {/* Número y categoría */}
            <div className="mb-8 flex items-start justify-between gap-4">
              <span className="font-mono text-[9px] tracking-[0.25em] text-white/35">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-right font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
                {copy.caseStudy}
              </span>
            </div>

            {/* Título del proyecto */}
            <h3 className="mb-8 text-4xl font-black leading-[0.9] tracking-[-0.065em] sm:text-6xl md:mb-10 md:text-8xl">
              {project.title}
            </h3>

            {/* Grid original de cuatro columnas */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {/* Video: contenedor redondeado y dimensiones originales */}
              <div className="hidden cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#090909] transition-colors duration-300 hover:border-white/25 md:col-span-2 md:block">
                <video
                  src={project.media.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  className="h-64 w-full object-cover"
                />
              </div>

              {/* Descripción: texto libre, sin tarjeta */}
              <div className="p-6 md:col-span-2">
                <p className="text-base font-medium leading-relaxed text-white/75 transition-colors duration-300 hover:text-white">
                  {project.description[lang]}
                </p>
              </div>

              {/* Roles: sin tarjeta */}
              <div className="border-t border-white/15 px-1 py-6 md:border-t-0 md:py-6">
                <h4 className="mb-5 text-lg font-bold tracking-tight">
                  {copy.roles}
                  <span className="ml-2 text-white/30">/</span>
                </h4>

                <ul className="space-y-2 text-sm">
                  {project.roles[lang].map((role, idx) => (
                    <li
                      key={idx}
                      className="text-white/45 transition-colors duration-300 hover:text-white"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Imágenes: se mantienen width, height, h-64 y spans */}
              {project.media.images.map((image, idx) => (
                <div
                  key={idx}
                  className={`cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#090909] transition-colors duration-300 hover:border-white/25 ${
                    idx % 3 === 0 ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - image ${idx + 1}`}
                    className="h-64 w-full object-cover"
                    width={500}
                    height={300}
                  />
                </div>
              ))}

              {/* Proceso: texto libre separado con líneas */}
              <div className="border-t border-white/15 pt-8 md:col-span-4 md:pt-10">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <h4 className="text-2xl font-black tracking-[-0.05em] md:text-3xl">
                    {copy.process}
                  </h4>

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
                    {copy.processDescription}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
                  {/* Investigación */}
                  <div className="border-t border-white/15 py-6 md:border-r md:pr-7">
                    <h5 className="mb-4 text-lg font-bold tracking-tight">
                      <span className="mr-3 font-mono text-xs text-white/30">
                        01
                      </span>
                      {copy.research}
                    </h5>

                    <p className="text-sm leading-relaxed text-white/45 transition-colors duration-300 hover:text-white/80">
                      {project.research[lang]}
                    </p>
                  </div>

                  {/* Iteración */}
                  <div className="border-t border-white/15 py-6 md:px-7">
                    <h5 className="mb-4 text-lg font-bold tracking-tight">
                      <span className="mr-3 font-mono text-xs text-white/30">
                        02
                      </span>
                      {copy.iteration}
                    </h5>

                    <p className="text-sm leading-relaxed text-white/45 transition-colors duration-300 hover:text-white/80">
                      {project.iteration[lang]}
                    </p>
                  </div>

                  {/* Resultado */}
                  <div className="border-t border-white/15 py-6 md:border-l md:pl-7">
                    <h5 className="mb-4 text-lg font-bold tracking-tight">
                      <span className="mr-3 font-mono text-xs text-white/30">
                        03
                      </span>
                      {copy.outcome}
                    </h5>

                    <p className="text-sm leading-relaxed text-white/45 transition-colors duration-300 hover:text-white/80">
                      {project.outcome[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
