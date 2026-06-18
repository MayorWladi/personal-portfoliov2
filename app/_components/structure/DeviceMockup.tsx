"use client";

interface DeviceMockupProps {
  os: "android" | "ios";
  src: string;
  alt?: string;
  className?: string;
}

export default function DeviceMockup({ os, src, alt = "App preview", className = "" }: DeviceMockupProps) {
  return (
    <div className={`relative z-10 aspect-9/19 bg-black border-4 border-[#1e1e1e] rounded-3xl shadow-2xl overflow-hidden ${className}`}>
      {/* Lógica del Notch */}
      {os === "android" ? (
        // Notch tipo gota (Android)
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-black rounded-b-xl z-20 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
        </div>
      ) : (
        // Notch tipo Isla (iOS)
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20"></div>
      )}

      {/* Pantalla */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}