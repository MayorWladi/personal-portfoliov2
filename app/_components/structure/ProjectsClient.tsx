"use client";

import { useState } from "react";
import ProjectCard from "@/app/_components/structure/ProjectCard";
// Asegúrate de que la ruta de importación coincida con donde guardaste el archivo
import ProjectModal from "./ProjectModal";

export default function ProjectsClient({ projects }: { projects: any[] }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[220px] grid-flow-row-dense">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.shortDescription}
            tech={project.tech}
            bgImage={project.gridImage}
            gridSpan={project.gridSpan}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </section>

      {/* Ahora llamará al archivo externo con el nuevo estilo */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}