"use client";

import { useState } from "react";
import ProjectCard from "@/app/_components/structure/ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project } from "@/app/lib/types";
import ComingSoonCard from "./ComingSoonCard";

export default function ProjectsClient({ projects, dict }: { projects: Project[], dict: any }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[220px] grid-flow-row-dense">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            gridSpan={`col-span-1 sm:${project.gridSpan || 'col-span-1'}`}
            onClick={() => setSelectedProject(project)}
          />
        ))}
        {/* Aquí entra la nueva card */}
        <ComingSoonCard
          type="desktop"
          previewImage="/projects/lite-project-manager/app-banner.webp"
        />

      </section>

      <ProjectModal
        project={selectedProject}
        dict={dict}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}