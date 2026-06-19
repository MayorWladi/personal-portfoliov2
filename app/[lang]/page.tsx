import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import Link from "next/link";

import AboutMe from "@/app/_components/widgets/AboutMe";
import LanguageSwitch from "@/app/_components/widgets/LanguageSwitch";
import ProfilePhoto from "@/app/_components/widgets/ProfilePhoto";
import AgeWidget from "@/app/_components/widgets/AgeWidget";
import LinkedInWidget from "@/app/_components/widgets/LinkedInWidget";
import ProjectsWidget from "@/app/_components/widgets/ProjectsWidget";
import GithubWidget from "@/app/_components/widgets/GithubWidget";
import SkillsGrid from "@/app/_components/widgets/SkillsGrid";
import ExperienceWidget from "@/app/_components/widgets/ExperienceWidget";
import SpotifyWidget from "@/app/_components/widgets/SpotifyWidget";
import DiscordStatus from "@/app/_components/widgets/DiscordStatus";
import MailtoWidget from "@/app/_components/widgets/MailtoWidget";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-[1200px] p-3 sm:p-4 auto-rows-[192px]">
      {/* Row 1-2: AboutMe (3col 2row) + Language + Photo */}
      <AboutMe dict={dict} />
      <LanguageSwitch currentLabel={dict.language.current} />
      <ProfilePhoto />

      {/* Row 3: Projects (2col) + Age + LinkedIn */}
      {/* <Link href={`/${lang}/projects`} className="widget-card col-span-2 rounded-xl overflow-hidden select-none border-2 border-black hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer block"> */}
      <ProjectsWidget
        title={dict.projects.title}
        description={dict.projects.description}
        lang={lang}
      />
      {/* </Link> */}
      <AgeWidget dict={dict} />
      <LinkedInWidget />

      {/* Row 4: Github (2col) + Experience + Skills */}
      <GithubWidget dict={dict} />
      <ExperienceWidget dict={dict} />
      <SkillsGrid />

      {/* Row 5: Spotify (2col) + Discord + Theme + Mailto */}
      <SpotifyWidget
        listeningLabel={dict.spotify.listening}
        offlineLabel={dict.spotify.offline}
      />
      <DiscordStatus />
      <MailtoWidget />
    </section >
  );
}
