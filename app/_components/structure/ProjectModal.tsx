"use client";

import { useEffect } from "react";
import { Project } from "@/app/lib/types";
import DeviceMockup from "./DeviceMockup";

export default function ProjectModal({ project, dict, onClose }: { project: Project | null, dict?: any, onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Fondo oscuro interactivo para cerrar */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity cursor-pointer touch-manipulation"
        onClick={onClose}
      />

      {/* Contenedor principal Lo-Fi */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-widget-bg rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)] border-2 border-black animate-in fade-in zoom-in-95 duration-200 max-h-[95vh] overflow-y-auto">

        {/* Banner Superior */}
        <div
          className="h-28 w-full border-b-2 border-black/50 relative bg-neutral-900" // Añade un color de fondo base
          style={{
            backgroundImage: `url(${project.bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%", // Ajusta el eje Y si tu imagen tiene el sujeto muy abajo
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Icono de la App (Avatar) */}
        <div className="absolute top-12 sm:top-16 left-3 sm:left-4">
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl bg-widget-skills-bg border-2 border-black shadow-md overflow-hidden flex items-center justify-center">
            <img
              src={project.iconImage}
              alt={`Logo de ${project.title}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/50 hover:text-white/90 bg-black/30 hover:bg-black/50 rounded-full p-1.5 backdrop-blur-sm transition-colors cursor-pointer touch-manipulation"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenido Textual */}
        <div className="px-3 sm:px-4 pt-10 sm:pt-12 pb-4 sm:pb-5">
          <div className="mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">{project.title}</h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
              {project.tech.map((t: string) => (
                <span key={t} className="bg-widget-skills-bg text-text-secondary text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-text-secondary mb-4 sm:mb-5 leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Bloque Live Demo */}
          <div className="bg-black/40 rounded-xl p-2 sm:p-3 mb-4 sm:mb-5 border-2 border-black/50">
            <div className="flex items-center gap-2 mb-2 px-1">
              <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse"></div>
              <h3 className="text-[10px] sm:text-xs font-bold text-white/60 uppercase tracking-wider">{dict?.liveDemo || "Demo en vivo"}</h3>
            </div>

            <div className={`w-full rounded-lg overflow-hidden relative border border-white/5 shadow-inner flex items-center justify-center ${project.isMobile ? 'py-1 min-h-[180px]' : 'bg-[#0a0a0a] h-48'}`}>

              {/* Ambient Blur para móviles */}
              {project.isMobile && (
                <div
                  className="absolute inset-0 opacity-40 blur-xl scale-110 z-0"
                  style={{
                    backgroundImage: `url(${project.bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}

              {project.isMobile ? (
                <DeviceMockup
                  os={project.tech.includes("Android") ? "android" : "ios"}
                  staticSrc={project.staticImage}
                  mediaSrc={project.demoPreview}
                  className="h-44 sm:h-80 mx-auto" // Le pasamos la altura específica para el modal
                />
              ) : (
                <img
                  src={project.demoPreview}
                  alt="Demo escritorio"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity relative z-10"
                />
              )}
            </div>
          </div>

          <div className="flex gap-2 sm:gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-widget-bg-hover hover:bg-[#32363b] text-text-primary border-2 border-black font-bold py-2.5 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {dict?.viewRepository || "Ver Repositorio"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}