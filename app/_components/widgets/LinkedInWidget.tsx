export default function LinkedInWidget() {
  return (
    <a
      href="https://www.linkedin.com/in/wladimir-sanvicente-359096218/"
      target="_blank"
      rel="noopener noreferrer"
      className="widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 bg-accent-linkedin/75 flex items-center justify-center hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer"
    >
      <div className="grid place-items-center h-full w-full p-4">
        <svg
          className="self-end justify-self-end text-white/67"
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
        <svg
          className="h-1/2 opacity-80 text-[#f0f8ff]"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
      </div>
    </a>
  );
}
