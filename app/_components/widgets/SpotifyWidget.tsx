"use client";

import { useState, useEffect } from "react";

interface SpotifyData {
  album_art_url: string;
  artist: string;
  song: string;
  album: string;
  track_id: string;
}

export default function SpotifyWidget({
  listeningLabel,
  offlineLabel,
}: {
  listeningLabel: string;
  offlineLabel: string;
}) {
  const [spotify, setSpotify] = useState<SpotifyData | null>(null);

  useEffect(() => {
    async function fetchSpotify() {
      try {
        const res = await fetch(
          "https://api.lanyard.rest/v1/users/201072569342885899"
        );
        const { data } = await res.json();
        setSpotify(data.spotify ?? null);
      } catch {
        setSpotify(null);
      }
    }

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 30_000);
    return () => clearInterval(interval);
  }, []);

  const spotifyUrl = spotify
    ? `https://open.spotify.com/intl-es/track/${spotify.track_id}`
    : "#";

  return (
    <a
      href={spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="widget-card col-span-2 rounded-xl overflow-hidden select-none border-2 border-black hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer"
      style={{
        backgroundImage: spotify
          ? `url(${spotify.album_art_url})`
          : undefined,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {spotify ? (
        <div className="flex flex-col h-full w-full bg-black/50 p-4 pl-5">
          <svg
            className="self-end text-white/67"
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
          <div className="mt-auto">
            <h3 className="text-xs opacity-80">{listeningLabel}</h3>
            <h1 className="text-lg font-bold truncate">{spotify.song}</h1>
            <h2 className="text-sm opacity-80 truncate">{spotify.artist}</h2>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full bg-widget-bg">
          <div className="text-center">
            <h1 className="text-lg font-bold mb-2">{offlineLabel}</h1>
            <svg
              className="mx-auto opacity-20 w-12 h-12"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
            </svg>
          </div>
        </div>
      )}
    </a>
  );
}
