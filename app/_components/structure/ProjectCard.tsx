"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  bgImage: string;
  gridSpan?: string;
  onClick: () => void;
}

export default function ProjectCard({ title, description, tech, bgImage, gridSpan = "col-span-1", onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className={`widget-card group relative rounded-xl overflow-hidden border-2 border-black hover:border-b-neutral-700 hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-end min-h-[220px] select-none ${gridSpan}`}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-0 transition-opacity group-hover:opacity-95" />

      <div className="relative z-10 p-4 flex flex-col h-full justify-between">
        {/* Icono de expansión (reemplazando el de enlace externo) */}
        <div className="self-end opacity-60 group-hover:opacity-100 transition-opacity">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        </div>

        <div className="mt-auto">
          <h2 className="text-lg font-bold text-white mb-1 leading-tight">{title}</h2>
          <p className="text-xs text-white/80 font-normal line-clamp-2 mb-3">{description}</p>

          <div className="flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span key={t} className="text-[10px] font-medium bg-white/15 text-white/90 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}