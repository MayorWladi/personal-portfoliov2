"use client";

import { useEffect } from "react";

export default function ProjectModal({ project, onClose }: any) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* bg-widget-bg en lugar de */}
      <div className="relative w-full max-w-md bg-widget-bg rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)] border-2 border-black/80 animate-in fade-in zoom-in-95 duration-200">

        <div
          className="h-28 w-full border-b-2 border-black/50 relative"
          style={{
            backgroundImage: `url(${project.gridImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="absolute top-16 left-4">
          {/* bg-widget-skills-bg aplicado directamente */}
          <div className="w-20 h-20 rounded-xl bg-widget-skills-bg border-2 border-black shadow-md overflow-hidden flex items-center justify-center backdrop-blur-md">
            {/* text-text-primary aplicado directamente */}
            <span className="text-3xl font-extrabold text-text-primary">{project.title.charAt(0)}</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white/90 bg-black/30 hover:bg-black/50 rounded-full p-1.5 backdrop-blur-sm transition-colors"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-4 pt-12 pb-5">
          <div className="mb-4">
            <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t: string) => (
                <span key={t} className="bg-widget-skills-bg text-text-secondary text-xs font-bold px-2.5 py-1 rounded-md border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-text-secondary mb-5 leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Bloque tipo "Streaming" para el GIF - Estilo Lo-Fi Terminal */}
          <div className="bg-black/40 rounded-xl p-3 mb-5 border-2 border-black/50">
            <div className="flex items-center gap-2 mb-2 px-1">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent-red)] animate-pulse"></div>
              <h3 className="text-xs font-bold text-white/60 uppercase tracking-wider">Demo en vivo</h3>
            </div>

            {/* Contenedor dinámico */}
            <div className={`w-full rounded-lg overflow-hidden relative border border-white/5 shadow-inner flex items-center justify-center ${project.isMobile ? 'py-6 min-h-[340px]' : 'bg-[#0a0a0a] h-48'}`}>

              {/* Fondo difuminado (Ambient Mode) solo para móviles */}
              {project.isMobile && (
                <div
                  className="absolute inset-0 opacity-40 blur-xl scale-110 z-0"
                  style={{
                    backgroundImage: `url(${project.gridImage || project.gifPreview})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}

              {project.isMobile ? (
                <div className="relative z-10 h-80 aspect-[9/19] bg-black border-[4px] border-[#1e1e1e] rounded-[1.5rem] shadow-2xl overflow-hidden">

                  {/* Lógica de Notch basada en tecnología */}
                  {project.tech.includes("Android") ? (
                    // Notch tipo gota de agua (Android)
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-black rounded-b-xl z-20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
                    </div>
                  ) : (
                    // Notch tipo isla/iPhone
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20"></div>
                  )}

                  <img
                    src={project.gifPreview}
                    alt={`Demostración de ${project.title}`}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              ) : (
                // Vista panorámica para escritorio
                <img
                  src={project.gifPreview}
                  alt={`Demostración de ${project.title}`}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity relative z-10"
                />
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-widget-bg-hover hover:bg-[#32363b] text-text-primary border-2 border-black font-bold py-2.5 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Ver Repositorio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}