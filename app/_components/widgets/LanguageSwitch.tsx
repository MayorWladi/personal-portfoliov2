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

  const currentLocale = pathname.startsWith("/es") ? "es" : "en";
  const targetLocale = currentLocale === "en" ? "es" : "en";
  const newPath = pathname.replace(`/${currentLocale}`, `/${targetLocale}`);

  return (
    <Link
      href={newPath}
      prefetch
      className="widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 bg-widget-bg flex flex-col items-center justify-center hover:scale-[1.03] cursor-pointer gap-1"
    >
      <h1 className="text-4xl font-bold">{currentLabel}</h1>
      <p className="flex items-center justify-center gap-3 text-xl font-bold">
        <span className={currentLocale === "en" ? "text-accent-purple" : ""}>
          EN
        </span>
        <span className={currentLocale === "es" ? "text-accent-purple" : ""}>
          ES
        </span>
      </p>
    </Link>
  );
}