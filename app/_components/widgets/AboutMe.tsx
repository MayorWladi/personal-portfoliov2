import type { Dictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

export default function AboutMe({ dict }: { dict: Dictionary }) {
  return (
    <div className="widget-card col-span-2 sm:col-span-3 row-span-2 rounded-xl overflow-hidden select-none border-black/40 p-0 relative">
      <Image
        src="/about-me-bg.webp"
        alt="Fondo de Mario"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-bottom z-0"
        loading="eager"
      />

      <div className="relative z-10 flex flex-col justify-end h-full w-full bg-black/50 p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          {dict.aboutMe.greeting} 👋
        </h1>
        <p>
          <b>{dict.aboutMe.descriptionStart}</b>
          {" " + dict.aboutMe.descriptionEnd}
        </p>
      </div>
    </div>
  );
}