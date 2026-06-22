import type { Dictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

export default function GithubWidget({ dict }: { dict: Dictionary }) {
  return (
    <a
      href="https://github.com/MayorWladi"
      target="_blank"
      rel="noopener noreferrer"
      className="widget-card col-span-2 rounded-xl overflow-hidden select-none border-2 border-black hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer relative"
    >
      <Image
        src="/github-bg.webp"
        alt="Fondo de código"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center z-0"
        loading="eager"
      />

      <div className="relative z-10 flex flex-col h-full w-full bg-black/50">
        <svg
          className="self-end mt-4 mr-4 text-white/67"
          width="16"
          height="16"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
        </svg>
        <div className="mt-auto p-4">
          <h1 className="text-xl font-bold">{dict.github.title}</h1>
          <p className="text-sm opacity-80">{dict.github.description}</p>
        </div>
      </div>
    </a>
  );
}