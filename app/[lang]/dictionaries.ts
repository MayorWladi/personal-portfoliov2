// app/[lang]/dictionaries.ts
import "server-only";
import { unstable_cache } from "next/cache";

const dictionaries = {
  en: () =>
    import("./dictionaries/en.json").then((module) => module.default),
  es: () =>
    import("./dictionaries/es.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)[Locale]>>;

export const locales = Object.keys(dictionaries) as Locale[];

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

// Función interna que obtiene el diccionario sin cachear
async function fetchDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

// Exportamos la versión cacheada (revalida cada hora)
export const getDictionary = unstable_cache(
  fetchDictionary,
  ["dictionary-cache"], // identificador de caché
  { revalidate: 3600 }  // 1 hora
);