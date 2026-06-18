"use client";
import { Project } from "@/app/lib/types";
import DeviceMockup from "./DeviceMockup"; // Ajusta la ruta

interface ProjectCardProps extends Project {
  onClick: () => void;
}

export default function ProjectCard({
  title,
  shortDescription,
  tech,
  gridImage,
  gridSpan = "col-span-1",
  isMobile,
  onClick
}: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`widget-card group relative w-full text-left rounded-xl overflow-hidden ring-2 ring-inset ring-black/40 hover:ring-black/60 hover:scale-[1.02] transform-gpu bg-clip-padding transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-end min-h-[220px] select-none touch-manipulation bg-widget-bg ${gridSpan}`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* CAPA DE FONDO (z-0) */}
      <div className="absolute inset-0 z-0 overflow-hidden p-3">
        {isMobile ? (
          // Vista para móvil: Fondo difuminado + Mockup centrado
          <div className="w-full h-full flex justify-center items-center pt-4 pb-16">
            <div
              className="absolute inset-0 opacity-40 blur-xl scale-110"
              style={{ backgroundImage: `url('${gridImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}
            />
            {/* Limitamos la altura h-[120%] u h-full para que el tlf se vea proporcionado en la tarjeta */}
            <DeviceMockup
              os={tech.includes("Android") ? "android" : "ios"}
              src={gridImage}
              className="h-full sm:h-[110%] shadow-[0_0_15px_rgba(0,0,0,0.8)] -rotate-2 group-hover:rotate-0 transition-transform duration-500"
            />
          </div>
        ) : (
          // Vista para escritorio: Imagen full background
          <div
            className="w-full h-full"
            style={{ backgroundImage: `url('${gridImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        )}
      </div>

      {/* Degradado para asegurar que el texto sea legible */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent z-0 transition-opacity group-hover:opacity-95" />

      {/* CONTENIDO DE TEXTO E ICONOS (z-10) */}
      <div className="relative z-10 p-4 flex flex-col h-full justify-between pointer-events-none">
        <div className="self-end opacity-60 group-hover:opacity-100 transition-opacity">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        </div>

        <div className="mt-auto">
          <h2 className="text-lg font-bold text-white mb-1 leading-tight drop-shadow-md">{title}</h2>
          <p className="text-xs text-white/80 font-normal line-clamp-2 mb-3 drop-shadow-sm">{shortDescription}</p>

          <div className="flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span key={t} className="text-[10px] font-medium bg-black/40 text-white/90 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}