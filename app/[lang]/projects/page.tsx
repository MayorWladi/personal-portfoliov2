import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import Link from "next/link";
import ProjectsClient from "@/app/_components/structure/ProjectsClient";
import { projects as projectsData } from "@/app/lib/types";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  const projectsList = dict.projectsList as Record<string, any>;
  const localizedProjects = projectsData.map(p => ({
    ...p,
    title: projectsList?.[p.id]?.title || p.title,
    shortDescription: projectsList?.[p.id]?.shortDescription || p.shortDescription,
    fullDescription: projectsList?.[p.id]?.fullDescription || p.fullDescription
  }));

  return (
    <main className="w-full max-w-[1200px] p-4 sm:p-6 flex flex-col gap-4">
      <div className="flex justify-between items-center mb-2">
        <Link
          href={`/${lang}`}
          className="widget-card px-4 py-2 border-2 border-black/40 rounded-xl bg-widget-bg text-sm font-bold hover:scale-[1.03] transition-transform flex items-center gap-2 select-none"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {dict.navigation?.back || "Volver"}
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">{dict.projects?.title || "Proyectos"}</h1>
      </div>

      {/* Renderizamos el componente cliente pasándole los datos */}
      <ProjectsClient projects={localizedProjects} dict={dict.projectsPage} />
    </main>
  );
}