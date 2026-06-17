import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  bgImage: string;
  link: string;
}

export default function ProjectCard({ title, description, tech, bgImage, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        widget-card group relative rounded-xl 
        overflow-hidden border-black/40 
        hover:border-black/60 hover:scale-[1.02] transition-all
        duration-300 ease-in-out cursor-pointer 
        flex flex-col justify-end min-h-[220px] select-none
      "
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa de contraste oscuro para legibilidad del texto */}
      <div
        className="
        absolute inset-0 from-black/90 via-black/50 
        to-black/20 z-0 transition-opacity group-hover:opacity-95
        bg-black/35
        "
      />

      {/* Contenido de la tarjeta */}
      <div className="relative z-10 p-4 flex flex-col h-full justify-between">
        {/* Indicador de enlace externo superior derecho */}
        <div className="self-end opacity-60 group-hover:opacity-100 transition-opacity">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-white">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
          </svg>
        </div>

        {/* Textos y tags inferiores */}
        <div className="mt-auto">
          <h2 className="text-lg font-bold text-white mb-1 leading-tight">{title}</h2>
          <p className="text-xs text-white/80 font-normal line-clamp-2 mb-3">{description}</p>

          {/* Etiquetas técnicas básicas */}
          <div className="flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span key={t} className="text-[10px] font-medium bg-white/15 text-white/90 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}