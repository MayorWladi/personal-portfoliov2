// app/_components/widgets/LanguageSwitch.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitch({
  currentLabel,
}: {
  currentLabel: string;
}) {
  const pathname = usePathname();

  // Dividimos el pathname para obtener el segmento del idioma (ej: ["", "en", "projects"])
  const segments = pathname.split("/");
  const currentLocale = segments[1]; // 'en' o 'es'

  // Determinamos el idioma contrario
  const targetLocale = currentLocale === "en" ? "es" : "en";

  // Reconstruimos el path reemplazando solo el primer segmento
  const newPath = `/${targetLocale}/${segments.slice(2).join("/")}`;

  return (
    <Link
      href={newPath}
      prefetch={true}
      className="transition-all widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 bg-widget-bg flex flex-col items-center justify-center hover:scale-[1.03] cursor-pointer gap-1"
    >
      <h1 className="text-4xl font-bold">{currentLabel}</h1>
      <p className="flex items-center justify-center gap-3 text-xl font-bold">
        <span className={currentLocale === "en" ? "text-accent-purple" : "opacity-50"}>
          EN
        </span>
        <span className={currentLocale === "es" ? "text-accent-purple" : "opacity-50"}>
          ES
        </span>
      </p>
    </Link>
  );
}