"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface DeviceMockupProps {
  os: "android" | "ios";
  staticSrc: string;
  gallery?: string[]; // Array de imágenes para la pasarela
  mediaSrc?: string;  // El video/GIF para el Modal
  isHovered?: boolean; // El control maestro que viene desde la tarjeta
  alt?: string;
  className?: string;
}

export default function DeviceMockup({
  os,
  staticSrc,
  gallery = [],
  mediaSrc,
  isHovered = false,
  alt = "App preview",
  className = "",
}: DeviceMockupProps) {
  const [staticLoaded, setStaticLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica de la Pasarela (Slideshow)
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isHovered && gallery.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % gallery.length);
      }, 850); // Aumenté un poco el tiempo para que el crossfade se aprecie mejor
    } else {
      setCurrentIndex(0);
    }

    return () => clearInterval(interval);
  }, [isHovered, gallery.length]);

  return (
    <div className={`relative z-10 aspect-9/19 bg-black border-4 border-[#1e1e1e] rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.8)] overflow-hidden ${className}`}>

      {/* --- NOTCH --- */}
      {os === "android" ? (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-black rounded-b-xl z-30 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
        </div>
      ) : (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-30"></div>
      )}

      {/* --- SKELETON DE CARGA --- */}
      {!staticLoaded && (
        <div className="absolute inset-0 bg-widget-skills-bg animate-pulse z-0" />
      )}

      {/* === CAPA 1: IMAGEN ESTÁTICA BASE (REPOSO) === */}
      <Image
        src={staticSrc}
        alt={alt}
        fill
        loading="eager"
        sizes="(max-width: 768px) 100vw, 33vw"
        className={`object-cover transition-opacity duration-500 ease-in-out ${isHovered && gallery.length > 0 ? "opacity-0" : "opacity-100 z-10"
          }`}
        onLoad={() => setStaticLoaded(true)}
      />

      {/* === CAPA 2: GALERÍA CROSSFADE (TARJETA EN HOVER) === */}
      {gallery.length > 0 && gallery.map((imgSrc, index) => (
        <Image
          key={imgSrc} // Usamos el src como key estable para evitar que React lo destruya
          src={imgSrc}
          alt={`${alt} frame ${index}`}
          fill
          // loading="eager"
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover absolute inset-0 transition-opacity duration-500 ease-in-out z-20 ${isHovered && index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        />
      ))}

      {/* === CAPA 3: VIDEO O GIF (MODAL) === */}
      {mediaSrc && (
        mediaSrc.endsWith('.webm') || mediaSrc.endsWith('.mp4') ? (
          <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-20"
          />
        ) : (
          <img
            src={mediaSrc}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover z-20"
          />
        )
      )}
    </div>
  );
}