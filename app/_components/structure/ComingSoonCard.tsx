"use client";

interface ComingSoonCardProps {
	type: "desktop" | "mobile";
	previewImage?: string; // Para rutas de imágenes tradicionales (.webp, .jpg)
	previewSvg?: React.ReactNode; // Para pasar el código <svg> ... </svg> directamente
}

export default function ComingSoonCard({ type, previewImage, previewSvg }: ComingSoonCardProps) {
	// Ajuste automático en la grilla: Desktop usa 2 columnas, Mobile usa 2 filas
	const gridSpan = type === "desktop"
		? "col-span-1 sm:col-span-2 row-span-1"
		: "col-span-1 row-span-2";

	const hasPreview = !!previewImage || !!previewSvg;

	return (
		<div
			className={`widget-card group relative w-full text-center rounded-xl overflow-hidden ring-1 ring-black bg-widget-bg min-h-[220px] select-none flex flex-col items-center justify-center transition-all duration-300 ${gridSpan}`}
		>
			{/* Capa 0A: Imagen de fondo tradicional (Opcional) */}
			{previewImage && (
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 blur-md group-hover:opacity-40 group-hover:blur-[2px] transition-all duration-700 ease-in-out z-0"
					style={{ backgroundImage: `url('${previewImage}')` }}
				/>
			)}

			{/* Capa 0B: SVG Inline directo (Opcional - Súper rápido) */}
			{previewSvg && (
				<div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 blur-md group-hover:opacity-30 group-hover:blur-none transition-all duration-700 ease-in-out z-0 [&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain [&>svg]:text-white">
					{previewSvg}
				</div>
			)}

			{/* Capa 1: El ruido animado de la TV (se atenúa si hay un preview en hover) */}
			<div
				className={`absolute inset-0 animate-noise mix-blend-overlay z-10 transition-opacity duration-500 ${hasPreview ? "opacity-40 group-hover:opacity-15" : "opacity-40"
					}`}
				style={{
					backgroundImage: "url('/noise.gif')",
					backgroundSize: "200px 200px",
				}}
			/>

			{/* Capa 2: Scanlines CRT */}
			<div className="absolute inset-0 scanlines pointer-events-none opacity-60 z-20" />

			{/* Capa 3: Viñeta oscura en los bordes */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-30" />

			{/* Contenido principal (Texto NO SIGNAL) */}
			<div className="relative z-40 flex flex-col items-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
				<div className="px-3 py-1 bg-black/60 border-2 border-black rounded shadow-[0_0_10px_rgba(255,255,255,0.1)]">
					<span className="text-white font-mono font-bold tracking-widest text-sm animate-pulse">
						NO SIGNAL
					</span>
				</div>
				<span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">
					Coming Soon...
				</span>
			</div>
		</div>
	);
}