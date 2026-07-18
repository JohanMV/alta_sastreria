import type { Product, ProductImage } from "@/types";

const productImage = (id: string): string => `/images/products/${id}-main.webp`;
const productGallery = (id: string): ProductImage[] => [
  { src: `/images/products/${id}-main.webp`, alt: `${id}, vista completa`, focalX: "50%", focalY: "50%" },
  { src: `/images/products/${id}-detail.webp`, alt: `${id}, detalle de confección`, focalX: "50%", focalY: "50%" },
];

export const products: Product[] = [
  {
    id: "toscana", name: "Terno Toscana", category: "Ternos", audience: "hombre", services: ["venta", "alquiler"],
    description: "Lana fría italiana, hombro natural y una caída impecable para jornadas decisivas.",
    price: 1890, rentalPrice: 390, image: productImage("toscana"),
    gallery: productGallery("toscana"), badge: "Más elegido", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "monaco", name: "Smoking Mónaco", category: "Novio", audience: "hombre", services: ["venta", "alquiler"],
    description: "Solapa satinada, corte esculpido y presencia nocturna para una celebración inolvidable.",
    price: 2290, rentalPrice: 490, image: productImage("monaco"),
    gallery: productGallery("monaco"), badge: "Ceremonia", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "savile", name: "Terno Savile", category: "Ejecutivo", audience: "hombre", services: ["venta"],
    description: "Dos piezas de estructura ligera, diseñado para proyectar seguridad sin perder comodidad.",
    price: 1690, image: productImage("savile"),
    gallery: productGallery("savile"), badge: "A medida", sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "amalfi", name: "Vestido Amalfi", category: "Novia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Silueta etérea con textura delicada y movimiento sereno para una entrada memorable.",
    price: 3490, rentalPrice: 890, image: productImage("amalfi"),
    gallery: productGallery("amalfi"), badge: "Nueva colección", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "serena", name: "Vestido Serena", category: "Ceremonia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Elegancia limpia y contemporánea, confeccionada para acompañar cada movimiento.",
    price: 1490, rentalPrice: 420, image: productImage("serena"),
    gallery: productGallery("serena"), badge: "Edición limitada", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "luna", name: "Vestido Luna", category: "Quinceañera", audience: "mujer", services: ["venta", "alquiler"],
    description: "Volumen equilibrado, detalles luminosos y un acabado artesanal hecho para celebrar.",
    price: 2190, rentalPrice: 590, image: productImage("luna"),
    gallery: productGallery("luna"), badge: "Personalizable", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "firenze", name: "Terno Firenze", category: "Ternos", audience: "hombre", services: ["venta", "alquiler"],
    description: "Azul profundo, estructura ligera y proporciones modernas para una elegancia versátil.", price: 1790, rentalPrice: 380, image: productImage("firenze"),
    gallery: productGallery("firenze"), badge: "Lana italiana", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "bordeaux", name: "Terno Bordeaux", category: "Ternos", audience: "hombre", services: ["venta", "alquiler"],
    description: "Una interpretación sofisticada del burdeos con acabado mate y calce contemporáneo.", price: 1990, rentalPrice: 420, image: productImage("bordeaux"),
    gallery: productGallery("bordeaux"), badge: "Edición atelier", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "oxford", name: "Terno Oxford", category: "Ternos", audience: "hombre", services: ["venta", "alquiler"],
    description: "Gris carbón de dos piezas, preciso y sobrio para compromisos formales.", price: 1690, rentalPrice: 350, image: productImage("oxford"),
    gallery: productGallery("oxford"), badge: "Clásico NOBILE", sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "imperial", name: "Terno Imperial", category: "Ternos", audience: "hombre", services: ["venta", "alquiler"],
    description: "Negro absoluto, solapa marcada y una presencia impecable de día o de noche.", price: 2090, rentalPrice: 450, image: productImage("imperial"),
    gallery: productGallery("imperial"), badge: "Premium", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "vittoria", name: "Traje Sastre Vittoria", category: "Ternos", audience: "mujer", services: ["venta", "alquiler"],
    description: "Sastrería femenina de líneas limpias, cintura definida y actitud contemporánea.", price: 1790, rentalPrice: 390, image: productImage("vittoria"),
    gallery: productGallery("vittoria"), badge: "Nueva silueta", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "windsor", name: "Smoking Windsor", category: "Novio", audience: "hombre", services: ["venta", "alquiler"],
    description: "Solapa peak satinada y corte inglés para ceremonias de impecable formalidad.", price: 2390, rentalPrice: 520, image: productImage("windsor"),
    gallery: productGallery("windsor"), badge: "Black tie", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "capri", name: "Terno Capri", category: "Novio", audience: "hombre", services: ["venta", "alquiler"],
    description: "Tonalidad arena y construcción fresca para bodas de día o destinos cálidos.", price: 1990, rentalPrice: 430, image: productImage("capri"),
    gallery: productGallery("capri"), badge: "Destination wedding", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "verona", name: "Smoking Verona", category: "Novio", audience: "hombre", services: ["venta", "alquiler"],
    description: "Terciopelo negro y detalles satinados para una celebración con carácter.", price: 2590, rentalPrice: 560, image: productImage("verona"),
    gallery: productGallery("verona"), badge: "Edición nocturna", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "roma", name: "Terno Roma", category: "Novio", audience: "hombre", services: ["venta", "alquiler"],
    description: "Azul medianoche de tres piezas con chaleco y acabados hechos a mano.", price: 2190, rentalPrice: 470, image: productImage("roma"),
    gallery: productGallery("roma"), badge: "Tres piezas", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "black-label", name: "Smoking Black Label", category: "Novio", audience: "hombre", services: ["venta", "alquiler"],
    description: "Una pieza ceremonial de líneas puras, camisa plisada y presencia atemporal.", price: 2790, rentalPrice: 590, image: productImage("black-label"),
    gallery: productGallery("black-label"), badge: "Firma NOBILE", sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "manhattan", name: "Terno Manhattan", category: "Ejecutivo", audience: "hombre", services: ["venta", "alquiler"],
    description: "Sastrería funcional en azul tinta para reuniones, presentaciones y grandes decisiones.", price: 1590, rentalPrice: 340, image: productImage("manhattan"),
    gallery: productGallery("manhattan"), badge: "Business essential", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "kensington", name: "Terno Kensington", category: "Ejecutivo", audience: "hombre", services: ["venta", "alquiler"],
    description: "Microtextura gris, hombro suave y comodidad diseñada para todo el día.", price: 1490, rentalPrice: 320, image: productImage("kensington"),
    gallery: productGallery("kensington"), badge: "Confort premium", sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "bianca", name: "Traje Ejecutivo Bianca", category: "Ejecutivo", audience: "mujer", services: ["venta", "alquiler"],
    description: "Blazer marfil y pantalón de tiro alto para una presencia luminosa y segura.", price: 1590, rentalPrice: 350, image: productImage("bianca"),
    gallery: productGallery("bianca"), badge: "Power tailoring", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "victoria", name: "Traje Ejecutivo Victoria", category: "Ejecutivo", audience: "mujer", services: ["venta", "alquiler"],
    description: "Conjunto carbón de líneas alargadas, preciso para una agenda de alto nivel.", price: 1690, rentalPrice: 370, image: productImage("victoria"),
    gallery: productGallery("victoria"), badge: "A medida", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "siena", name: "Traje Ejecutivo Siena", category: "Ejecutivo", audience: "mujer", services: ["venta", "alquiler"],
    description: "Sastrería cálida en tono camel con cintura sutilmente definida y gran versatilidad.", price: 1540, rentalPrice: 340, image: productImage("siena"),
    gallery: productGallery("siena"), badge: "Versátil", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "celeste", name: "Vestido Celeste", category: "Novia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Escote limpio, falda de seda y una caída serena para ceremonias contemporáneas.", price: 3290, rentalPrice: 820, image: productImage("celeste"),
    gallery: productGallery("celeste"), badge: "Seda natural", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "isadora", name: "Vestido Isadora", category: "Novia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Encaje botánico, mangas delicadas y espalda protagonista trabajada a mano.", price: 3790, rentalPrice: 940, image: productImage("isadora"),
    gallery: productGallery("isadora"), badge: "Couture", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "valentina", name: "Vestido Valentina", category: "Novia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Silueta princesa equilibrada con bordados sutiles y volumen de gran ligereza.", price: 4190, rentalPrice: 1050, image: productImage("valentina"),
    gallery: productGallery("valentina"), badge: "Alta costura", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "riviera", name: "Vestido Riviera", category: "Novia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Minimalismo fluido, espalda abierta y textura satinada para una novia moderna.", price: 2990, rentalPrice: 760, image: productImage("riviera"),
    gallery: productGallery("riviera"), badge: "Minimal bride", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "aurora", name: "Vestido Aurora", category: "Novia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Tul luminoso y aplicaciones florales que crean una presencia suave y memorable.", price: 3890, rentalPrice: 980, image: productImage("aurora"),
    gallery: productGallery("aurora"), badge: "Romantic edit", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "gala-firenze", name: "Terno Gala Firenze", category: "Ceremonia", audience: "hombre", services: ["venta", "alquiler"],
    description: "Terno de gala azul noche con detalles discretos para eventos de gran protocolo.", price: 1890, rentalPrice: 410, image: productImage("gala-firenze"),
    gallery: productGallery("gala-firenze"), badge: "Gala", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "etoile", name: "Vestido Étoile", category: "Ceremonia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Brillo delicado y silueta columna para recepciones y noches especiales.", price: 1690, rentalPrice: 450, image: productImage("etoile"),
    gallery: productGallery("etoile"), badge: "Noche", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "dahlia", name: "Vestido Dahlia", category: "Ceremonia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Color profundo, drapeado preciso y movimiento elegante para invitadas memorables.", price: 1390, rentalPrice: 390, image: productImage("dahlia"),
    gallery: productGallery("dahlia"), badge: "Favorito de invitadas", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "perla", name: "Vestido Perla", category: "Ceremonia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Tono champagne, escote asimétrico y acabado satinado de refinada luminosidad.", price: 1590, rentalPrice: 420, image: productImage("perla"),
    gallery: productGallery("perla"), badge: "Cocktail edit", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "nocturne", name: "Vestido Nocturne", category: "Ceremonia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Negro arquitectónico con abertura lateral y una silueta de impacto contenido.", price: 1790, rentalPrice: 480, image: productImage("nocturne"),
    gallery: productGallery("nocturne"), badge: "Black edition", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "magnolia", name: "Vestido Magnolia", category: "Quinceañera", audience: "mujer", services: ["venta", "alquiler"],
    description: "Capas de tul rosa empolvado y detalles florales para una celebración inolvidable.", price: 2290, rentalPrice: 620, image: productImage("magnolia"),
    gallery: productGallery("magnolia"), badge: "Nueva colección", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "ebano", name: "Vestido Ébano", category: "Quinceañera", audience: "mujer", services: ["venta", "alquiler"],
    description: "Una propuesta negra contemporánea con volumen ligero y destellos sutiles.", price: 2490, rentalPrice: 670, image: productImage("ebano"),
    gallery: productGallery("ebano"), badge: "Edición especial", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "rose", name: "Vestido Rosé", category: "Quinceañera", audience: "mujer", services: ["venta", "alquiler"],
    description: "Rosa luminoso, corsé bordado y falda amplia equilibrada con gran ligereza.", price: 2390, rentalPrice: 640, image: productImage("rose"),
    gallery: productGallery("rose"), badge: "Más elegido", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "imperial-xv", name: "Vestido Imperial XV", category: "Quinceañera", audience: "mujer", services: ["venta", "alquiler"],
    description: "Azul real, aplicaciones artesanales y una falda de presencia majestuosa.", price: 2690, rentalPrice: 720, image: productImage("imperial-xv"),
    gallery: productGallery("imperial-xv"), badge: "Personalizable", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "cielo", name: "Vestido Cielo", category: "Quinceañera", audience: "mujer", services: ["venta", "alquiler"],
    description: "Azul cielo de textura etérea, corsé limpio y detalles brillantes muy delicados.", price: 2190, rentalPrice: 590, image: productImage("cielo"),
    gallery: productGallery("cielo"), badge: "Dream collection", sizes: ["XS", "S", "M", "L"],
  },
];
