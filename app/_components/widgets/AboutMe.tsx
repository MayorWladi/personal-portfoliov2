import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function AboutMe({ dict }: { dict: Dictionary }) {
  return (
    <div
      className="widget-card col-span-2 sm:col-span-3 row-span-2 rounded-xl overflow-hidden select-none border-black/40 p-0"
      style={{
        backgroundImage:
          "url('https://cdna.artstation.com/p/assets/images/images/021/720/920/original/pixel-jeff-mario.gif?1572709433')",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-end h-full w-full bg-black/50 p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          {dict.aboutMe.greeting} 👋
        </h1>
        <p className="text-sm sm:text-base md:text-lg opacity-90">
          <b>{dict.aboutMe.description.split(" with ")[0]}</b>
          {" with " + dict.aboutMe.description.split(" with ").slice(1).join(" with ")}
        </p>
      </div>
    </div>
  );
}
