"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function ProjectsWidget({
  title,
  description,
  lang
}: {
  title: string;
  description: string;
  lang: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/cornifer.mp3");
    }
    audioRef.current.play().catch(() => { });
  };

  const handleMouseLeave = () => {
    audioRef.current?.pause();
  };

  return (
    <div
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      className="widget-card col-span-2 rounded-xl overflow-hidden select-none border-2 border-black hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer relative"
    >
      <Image
        src="/projects-bg.webp"
        alt="Fondo de proyectos"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center z-0"
        loading="eager"
      />

      <Link href={`/${lang}/projects`} className="relative z-10 block h-full w-full">
        <div className="flex flex-col h-full w-full bg-black/50 p-4 rounded-lg border-2 border-black/40">
          <svg
            className="self-end text-white/70 group-hover:translate-x-0.5 transition-transform"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>

          <div className="mt-auto">
            <h1 className="text-xl font-bold text-white">{title}</h1>
            <p className="text-sm text-white/80">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}