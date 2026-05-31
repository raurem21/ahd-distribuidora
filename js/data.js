/**
 * ============================================================
 * AHD DISTRIBUIDORA — Diccionario de Datos (data.js)
 * ============================================================
 * Archivo central de datos de productos.
 * Para agregar, editar o eliminar productos, modifica este array.
 *
 * ESTRUCTURA DE CADA PRODUCTO:
 * {
 *   id          {number}  — Identificador único (no repetir)
 *   slug        {string}  — Identificador URL-amigable (ej: "ahd-001")
 *   modelo      {string}  — Nombre del modelo (ej: "AHD-001")
 *   tipo        {string}  — Tipo de armazón
 *   material    {string}  — Material principal (Acetato | Metal | TR-90 | Mixto)
 *   color       {string}  — Color principal
 *   genero      {string}  — Género: "Hombre" | "Mujer" | "Unisex" | "Niño"
 *   medidas     {string}  — Formato: "ancho_lente - puente - varilla" (ej: "52-18-140")
 *   descripcion {string}  — Descripción comercial del producto
 *   disponible  {boolean} — true = disponible, false = agotado
 *   imagen1     {string}  — Ruta a imagen principal (relativa desde raíz del proyecto)
 *   imagen2     {string}  — Ruta a imagen secundaria (relativa desde raíz del proyecto)
 * }
 *
 * CÓMO REEMPLAZAR IMÁGENES:
 * 1. Sube tus fotos a la carpeta /images/productos/
 * 2. Nombra los archivos como: ahd-001-1.jpg  y  ahd-001-2.jpg
 * 3. Cambia imagen1 e imagen2 en el objeto correspondiente.
 *
 * WHATSAPP:
 * El número está definido en la variable WHATSAPP_NUMBER.
 * Formato: código de país + número (sin espacios ni +)
 * ============================================================
 */

// ─── Configuración Global ────────────────────────────────────
const CONFIG = {
  whatsappNumber: "524792140944",          // Número de WhatsApp con código de país
  whatsappMessage: "Hola, me interesa conocer más sobre sus armazones.",
  siteTitle: "AHD Distribuidora",
  tagline: "Armazones directo para tu óptica",
  instagramUrl: "https://www.instagram.com/ahd_distribuidora",
  facebookUrl: "https://www.facebook.com/AHDdistribuidora",
  websiteUrl: "https://ahddistribuidora.com",
};

// ─── Paths de imágenes placeholder (usar mientras no hay fotos reales) ───
const PLACEHOLDERS = {
  acetato: "images/productos/placeholder_acetato.jpg",
  metal:   "images/productos/placeholder_metal.jpg",
  tr90:    "images/productos/placeholder_tr90.jpg",
  ninos:   "images/productos/placeholder_ninos.jpg",
};

// ─── Catálogo de Productos ───────────────────────────────────
const productos = [
  {
    id: 1,
    slug: "ahd-001",
    modelo: "AHD-001",
    tipo: "Armazón Oftálmico",
    material: "Acetato",
    color: "Negro",
    genero: "Unisex",
    medidas: "52-18-140",
    descripcion: "Armazón clásico de acetato negro con acabado mate. Diseño rectangular atemporal, ideal para ópticas que buscan un modelo versátil y de alta rotación. Compatible con todo tipo de prescripción.",
    disponible: true,
    imagen1: PLACEHOLDERS.acetato,
    imagen2: PLACEHOLDERS.acetato,
  },
  {
    id: 2,
    slug: "ahd-002",
    modelo: "AHD-002",
    tipo: "Armazón Oftálmico",
    material: "Metal",
    color: "Dorado",
    genero: "Mujer",
    medidas: "50-16-135",
    descripcion: "Elegante armazón metálico en tono dorado con detalle de bisagra de resorte. Forma semi-redonda que realza los rasgos femeninos. Acabado premium antioxidante.",
    disponible: true,
    imagen1: PLACEHOLDERS.metal,
    imagen2: PLACEHOLDERS.metal,
  },
  {
    id: 3,
    slug: "ahd-003",
    modelo: "AHD-003",
    tipo: "Armazón Oftálmico",
    material: "TR-90",
    color: "Azul Marino",
    genero: "Hombre",
    medidas: "54-17-145",
    descripcion: "Armazón ultraligero de TR-90 en azul marino. Material flexible y resistente a impactos, ideal para uso prolongado. Excelente para personas activas que buscan comodidad todo el día.",
    disponible: true,
    imagen1: PLACEHOLDERS.tr90,
    imagen2: PLACEHOLDERS.tr90,
  },
  {
    id: 4,
    slug: "ahd-004",
    modelo: "AHD-004",
    tipo: "Armazón Oftálmico",
    material: "Acetato",
    color: "Carey",
    genero: "Unisex",
    medidas: "51-18-138",
    descripcion: "Diseño clásico en acetato carey con venas naturales. El patrón único de cada pieza lo convierte en un accesorio exclusivo. Gran aceptación en todos los mercados.",
    disponible: true,
    imagen1: PLACEHOLDERS.acetato,
    imagen2: PLACEHOLDERS.acetato,
  },
  {
    id: 5,
    slug: "ahd-005",
    modelo: "AHD-005",
    tipo: "Armazón Oftálmico",
    material: "Metal",
    color: "Plateado",
    genero: "Hombre",
    medidas: "53-17-140",
    descripcion: "Armazón metálico plateado de perfil delgado con diseño minimalista. Puente de doble barra para mayor estabilidad. Bisagras de resorte de alta durabilidad.",
    disponible: true,
    imagen1: PLACEHOLDERS.metal,
    imagen2: PLACEHOLDERS.metal,
  },
  {
    id: 6,
    slug: "ahd-006",
    modelo: "AHD-006",
    tipo: "Armazón Oftálmico",
    material: "Acetato",
    color: "Rojo",
    genero: "Mujer",
    medidas: "50-15-135",
    descripcion: "Armazón de acetato en rojo vibrante con forma cat-eye. Diseño atrevido y moderno que combina con looks casuales y formales. Alto poder de atracción visual en exhibición.",
    disponible: true,
    imagen1: PLACEHOLDERS.acetato,
    imagen2: PLACEHOLDERS.acetato,
  },
  {
    id: 7,
    slug: "ahd-007",
    modelo: "AHD-007",
    tipo: "Armazón Oftálmico Infantil",
    material: "TR-90",
    color: "Negro con detalle rojo",
    genero: "Niño",
    medidas: "46-15-125",
    descripcion: "Armazón infantil de TR-90 flexible e irrompible. Diseñado especialmente para niños en edad escolar. Puntas de varilla en goma suave antideslizante para mayor comodidad y seguridad.",
    disponible: true,
    imagen1: PLACEHOLDERS.ninos,
    imagen2: PLACEHOLDERS.ninos,
  },
  {
    id: 8,
    slug: "ahd-008",
    modelo: "AHD-008",
    tipo: "Armazón Oftálmico",
    material: "Metal",
    color: "Bronce",
    genero: "Unisex",
    medidas: "52-18-140",
    descripcion: "Armazón metálico en acabado bronce con forma cuadrada elegante. La combinación de tono cálido con diseño geométrico genera un look contemporáneo y sofisticado.",
    disponible: true,
    imagen1: PLACEHOLDERS.metal,
    imagen2: PLACEHOLDERS.metal,
  },
  {
    id: 9,
    slug: "ahd-009",
    modelo: "AHD-009",
    tipo: "Armazón Oftálmico",
    material: "Acetato",
    color: "Cristal / Transparente",
    genero: "Mujer",
    medidas: "51-16-138",
    descripcion: "Armazón de acetato transparente con efecto cristal. Tendencia de moda actual que combina con cualquier atuendo y tono de piel. Ligereza visual sin sacrificar presencia.",
    disponible: true,
    imagen1: PLACEHOLDERS.acetato,
    imagen2: PLACEHOLDERS.acetato,
  },
  {
    id: 10,
    slug: "ahd-010",
    modelo: "AHD-010",
    tipo: "Armazón Oftálmico",
    material: "Metal",
    color: "Negro mate",
    genero: "Hombre",
    medidas: "54-18-145",
    descripcion: "Armazón metálico en negro mate de gran calibre. Diseño robusto con apariencia moderna y masculina. Varillas de titanio para mayor ligereza y resistencia a la deformación.",
    disponible: true,
    imagen1: PLACEHOLDERS.metal,
    imagen2: PLACEHOLDERS.metal,
  },
  {
    id: 11,
    slug: "ahd-011",
    modelo: "AHD-011",
    tipo: "Armazón Oftálmico",
    material: "TR-90",
    color: "Verde olivo",
    genero: "Unisex",
    medidas: "52-17-140",
    descripcion: "Armazón TR-90 en verde olivo, un color en tendencia en el mercado óptico actual. Ultraligero y de alta resistencia. Perfecto para clientes que buscan algo diferente sin perder elegancia.",
    disponible: true,
    imagen1: PLACEHOLDERS.tr90,
    imagen2: PLACEHOLDERS.tr90,
  },
  {
    id: 12,
    slug: "ahd-012",
    modelo: "AHD-012",
    tipo: "Armazón Oftálmico",
    material: "Acetato",
    color: "Gris humo",
    genero: "Hombre",
    medidas: "53-17-142",
    descripcion: "Armazón de acetato en gris humo con corte angular. Diseño ejecutivo de alta gama, ideal para el entorno profesional. Gran compatibilidad con graduaciones altas.",
    disponible: true,
    imagen1: PLACEHOLDERS.acetato,
    imagen2: PLACEHOLDERS.acetato,
  },
  {
    id: 13,
    slug: "ahd-013",
    modelo: "AHD-013",
    tipo: "Armazón Oftálmico",
    material: "Metal",
    color: "Rosa gold",
    genero: "Mujer",
    medidas: "49-16-130",
    descripcion: "Armazón metálico en rosa gold con forma ovalada. El tono rose gold es uno de los favoritos del mercado femenino. Estructura liviana y fina que aporta elegancia y sutileza.",
    disponible: true,
    imagen1: PLACEHOLDERS.metal,
    imagen2: PLACEHOLDERS.metal,
  },
  {
    id: 14,
    slug: "ahd-014",
    modelo: "AHD-014",
    tipo: "Armazón Oftálmico",
    material: "Acetato",
    color: "Azul cobalto",
    genero: "Unisex",
    medidas: "52-18-140",
    descripcion: "Armazón de acetato en azul cobalto intenso. Color llamativo y elegante a la vez. Especial para clientes jóvenes o con estilo vanguardista que buscan marcar presencia.",
    disponible: true,
    imagen1: PLACEHOLDERS.acetato,
    imagen2: PLACEHOLDERS.acetato,
  },
  {
    id: 15,
    slug: "ahd-015",
    modelo: "AHD-015",
    tipo: "Armazón Oftálmico",
    material: "TR-90",
    color: "Carey caramelo",
    genero: "Mujer",
    medidas: "50-16-135",
    descripcion: "Armazón TR-90 en carey caramelo de tonos cálidos. Combina la durabilidad del TR-90 con la estética del acetato tradicional. Excelente relación precio-calidad para tu exhibidor.",
    disponible: true,
    imagen1: PLACEHOLDERS.tr90,
    imagen2: PLACEHOLDERS.tr90,
  },
  {
    id: 16,
    slug: "ahd-016",
    modelo: "AHD-016",
    tipo: "Armazón Oftálmico",
    material: "Titanio",
    color: "Titanio natural",
    genero: "Hombre",
    medidas: "55-18-145",
    descripcion: "Armazón de titanio puro, el material más ligero y resistente para armazones oftálmicos. Hipoalergénico, ideal para pieles sensibles. Bisagras de tornillo sin goma para máxima durabilidad.",
    disponible: true,
    imagen1: PLACEHOLDERS.metal,
    imagen2: PLACEHOLDERS.metal,
  },
  {
    id: 17,
    slug: "ahd-017",
    modelo: "AHD-017",
    tipo: "Armazón Oftálmico",
    material: "Acetato",
    color: "Beige / Nude",
    genero: "Mujer",
    medidas: "50-16-135",
    descripcion: "Armazón de acetato en tono beige nude de moda actual. El color nude es extremadamente versátil y complementa todos los tonos de piel. Diseño redondo que suaviza los rasgos del rostro.",
    disponible: true,
    imagen1: PLACEHOLDERS.acetato,
    imagen2: PLACEHOLDERS.acetato,
  },
  {
    id: 18,
    slug: "ahd-018",
    modelo: "AHD-018",
    tipo: "Armazón Oftálmico Infantil",
    material: "TR-90",
    color: "Azul / Rojo",
    genero: "Niño",
    medidas: "45-14-120",
    descripcion: "Armazón infantil TR-90 en combinación azul y rojo. Diseño dinámico y divertido para niños de 4 a 10 años. Material flexible que resiste el juego del día a día. Varillas con punta de goma.",
    disponible: true,
    imagen1: PLACEHOLDERS.ninos,
    imagen2: PLACEHOLDERS.ninos,
  },
];
