"use client";

import { useEffect } from "react";

export default function ProjectModal({ project, onClose }: any) {
  // Cerrar con la tecla Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Overlay oscuro */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Contenedor principal del modal (El "Perfil" de Discord) */}
      <div className="relative w-full max-w-md bg-[#2B2D31] rounded-xl overflow-hidden shadow-2xl border-2 border-black/50 animate-in fade-in zoom-in-95 duration-200">

        {/* Banner */}
        <div className="h-24 bg-[#1E1F22] w-full" />

        {/* Icono de la App (Avatar) */}
        <div className="absolute top-12 left-4">
          <div className="w-20 h-20 rounded-2xl bg-widget-bg border-[6px] border-[#2B2D31] overflow-hidden flex items-center justify-center">
            {/* Si tienes imagen, ponla aquí. Si no, un texto provisional */}
            <span className="text-2xl font-bold">{project.title.charAt(0)}</span>
          </div>
        </div>

        {/* Cuerpo del Modal */}
        <div className="px-4 pt-12 pb-4">
          {/* Título y Tags */}
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

          <p className="text-sm text-[#DBDEE1] mb-4">
            {project.fullDescription}
          </p>

          {/* Bloque tipo "Streaming" para el GIF */}
          <div className="bg-[#1E1F22] rounded-lg p-3 mb-4 border border-black/20">
            <h3 className="text-xs font-bold text-[#B5BAC1] uppercase mb-2">Vista Previa / Live</h3>
            <div className="w-full h-48 bg-black rounded-md overflow-hidden relative">
              <img
                src={project.gifPreview}
                alt={`Demostración de ${project.title}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Botón de Acción (Tipo "Edit Profile") */}
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