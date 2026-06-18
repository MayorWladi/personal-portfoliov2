// Estructura de datos sugerida

const horizontalCardClass = "col-span-1 md:col-span-2";
const verticalCardClass = "col-span-1 row-span-2";

export const projects = [
  {
    id: "incoming",
    title: "Incoming",
    shortDescription: "Tracker minimalista de finanzas personales.",
    fullDescription: "Enfocado en reducir la carga cognitiva del usuario mediante una interfaz limpia y utilidad directa. Actualmente en fase Alfa Cerrada.",
    // tech: ["Flutter", "Dart", "Android"],
    tech: ["Flutter", "Dart", "Android"],
    gridImage: "https://media.tenor.com/YZPnGuPeZv8AAAAd/coding.gif", // Reemplazar con captura vertical
    gifPreview: "https://media.tenor.com/YZPnGuPeZv8AAAAd/coding.gif",
    link: "https://github.com/MayorWladi/incoming",
    isMobile: true, // Agrega esta propiedad
    gridSpan: verticalCardClass // Esto vuelve la tarjeta vertical (2 filas de alto)
  },
  {
    id: "inventory-dashboard",
    title: "Inventory Dashboard",
    shortDescription: "Panel de control interactivo para almacenes.",
    fullDescription: "Panel de control interactivo diseñado para la gestión de almacenes, seguimiento de stock y flujos de movimiento de inventario.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    gridImage: "https://media.tenor.com/DmC5jNLSQ0IAAAAC/cornifer.gif",
    gifPreview: "https://media.tenor.com/DmC5jNLSQ0IAAAAC/cornifer.gif",
    link: "https://github.com/MayorWladi/inventory-dashboard",
    gridSpan: horizontalCardClass // Tarjeta horizontal
  },
  {
    id: "beatemup-game",
    title: "Juego Beat 'em up 2.5D",
    shortDescription: "Mecánicas de combate y arquitectura Pub/Sub.",
    fullDescription: "Desarrollo de mecánicas de combate y arquitectura de sistemas acoplados bajo patrones Pub/Sub en un entorno tridimensional estilizado.",
    tech: ["Unity", "C#"],
    gridImage: "https://cdna.artstation.com/p/assets/images/images/021/720/920/original/pixel-jeff-mario.gif",
    gifPreview: "https://cdna.artstation.com/p/assets/images/images/021/720/920/original/pixel-jeff-mario.gif",
    link: "https://github.com/MayorWladi/beatemup",
    gridSpan: horizontalCardClass // Tarjeta horizontal
  }
];