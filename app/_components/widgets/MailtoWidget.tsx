export default function MailtoWidget() {
  return (
    <a
      href="mailto:wladimirss142@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email"
      className="transition-all widget-card col-span-1 rounded-xl overflow-hidden select-none border-2 border-black/40 bg-accent-red/75 flex items-center justify-center hover:scale-[1.03] cursor-pointer"
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
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </div>
    </a>
  );
}
