"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/app/_components/structure/ProjectCard";

// Modal interno (Puedes extraerlo a su propio archivo luego)
function ProjectModal({ project, onClose }: any) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" onClick={onClose} />

      <div className="relative w-full max-w-md bg-[#2B2D31] rounded-xl overflow-hidden shadow-2xl border-2 border-black/50 animate-in fade-in zoom-in-95 duration-200">
        <div className="h-24 bg-[#1E1F22] w-full" />

        <div className="absolute top-12 left-4">
          <div className="w-20 h-20 rounded-2xl bg-[#2B2D31] border-[6px] border-[#2B2D31] overflow-hidden flex items-center justify-center">
            {/* Renderizado temporal de la inicial si no hay logo */}
            <span className="text-3xl font-extrabold text-white">{project.title.charAt(0)}</span>
          </div>
        </div>

        <div className="px-4 pt-12 pb-4">
          <div className="mb-4">
            <h2 className="text-2xl font-extrabold text-white">{project.title}</h2>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.tech.map((t: string) => (
                <span key={t} className="bg-[#1E1F22] text-[#DBDEE1] text-xs font-semibold px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-[#DBDEE1] mb-4">{project.fullDescription}</p>

          <div className="bg-[#1E1F22] rounded-lg p-3 mb-4 border border-black/20">
            <h3 className="text-[10px] font-bold text-[#B5BAC1] uppercase mb-2">Vista Previa</h3>
            <div className="w-full h-48 bg-black rounded-md overflow-hidden relative">
              <img src={project.gifPreview} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium py-2 rounded transition-colors"
          >
            Ver Repositorio
          </a>
        </div>
      </div>
    </div>
  );
}

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

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}