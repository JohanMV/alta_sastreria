import type { Product } from "@/types";

const img = (id: string, width = 1200): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

export const products: Product[] = [
  {
    id: "toscana", name: "Terno Toscana", category: "Ternos", audience: "hombre", services: ["venta", "alquiler"],
    description: "Lana fría italiana, hombro natural y una caída impecable para jornadas decisivas.",
    price: 1890, rentalPrice: 390, image: img("photo-1507679799987-c73779587ccf"),
    gallery: [img("photo-1507679799987-c73779587ccf"), img("photo-1539109136881-3be0616acf4b")], badge: "Más elegido", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "monaco", name: "Smoking Mónaco", category: "Novio", audience: "hombre", services: ["venta", "alquiler"],
    description: "Solapa satinada, corte esculpido y presencia nocturna para una celebración inolvidable.",
    price: 2290, rentalPrice: 490, image: img("photo-1617127365659-c47fa864d8bc"),
    gallery: [img("photo-1617127365659-c47fa864d8bc"), img("photo-1598808503746-f34c53b9323e")], badge: "Ceremonia", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "savile", name: "Terno Savile", category: "Ejecutivo", audience: "hombre", services: ["venta"],
    description: "Dos piezas de estructura ligera, diseñado para proyectar seguridad sin perder comodidad.",
    price: 1690, image: img("photo-1555069519-127aadedf1ee"),
    gallery: [img("photo-1555069519-127aadedf1ee"), img("photo-1507003211169-0a1dd7228f2d")], badge: "A medida", sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "amalfi", name: "Vestido Amalfi", category: "Novia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Silueta etérea con textura delicada y movimiento sereno para una entrada memorable.",
    price: 3490, rentalPrice: 890, image: img("photo-1594552072238-b8a33785b261"),
    gallery: [img("photo-1594552072238-b8a33785b261"), img("photo-1519741497674-611481863552")], badge: "Nueva colección", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "serena", name: "Vestido Serena", category: "Ceremonia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Elegancia limpia y contemporánea, confeccionada para acompañar cada movimiento.",
    price: 1490, rentalPrice: 420, image: img("photo-1515886657613-9f3515b0c78f"),
    gallery: [img("photo-1515886657613-9f3515b0c78f"), img("photo-1490481651871-ab68de25d43d")], badge: "Edición limitada", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "luna", name: "Vestido Luna", category: "Quinceañera", audience: "mujer", services: ["venta", "alquiler"],
    description: "Volumen equilibrado, detalles luminosos y un acabado artesanal hecho para celebrar.",
    price: 2190, rentalPrice: 590, image: img("photo-1534528741775-53994a69daeb"),
    gallery: [img("photo-1534528741775-53994a69daeb"), img("photo-1524504388940-b1c1722653e1")], badge: "Personalizable", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "firenze", name: "Terno Firenze", category: "Ternos", audience: "hombre", services: ["venta", "alquiler"],
    description: "Azul profundo, estructura ligera y proporciones modernas para una elegancia versátil.", price: 1790, rentalPrice: 380, image: img("photo-1594938298603-c8148c4dae35"),
    gallery: [img("photo-1594938298603-c8148c4dae35"), img("photo-1551836022-d5d88e9218df")], badge: "Lana italiana", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "bordeaux", name: "Terno Bordeaux", category: "Ternos", audience: "hombre", services: ["venta", "alquiler"],
    description: "Una interpretación sofisticada del burdeos con acabado mate y calce contemporáneo.", price: 1990, rentalPrice: 420, image: img("photo-1551836022-d5d88e9218df"),
    gallery: [img("photo-1551836022-d5d88e9218df"), img("photo-1560250097-0b93528c311a")], badge: "Edición atelier", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "oxford", name: "Terno Oxford", category: "Ternos", audience: "hombre", services: ["venta", "alquiler"],
    description: "Gris carbón de dos piezas, preciso y sobrio para compromisos formales.", price: 1690, rentalPrice: 350, image: img("photo-1560250097-0b93528c311a"),
    gallery: [img("photo-1560250097-0b93528c311a"), img("photo-1507679799987-c73779587ccf")], badge: "Clásico NOBILE", sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "imperial", name: "Terno Imperial", category: "Ternos", audience: "hombre", services: ["venta", "alquiler"],
    description: "Negro absoluto, solapa marcada y una presencia impecable de día o de noche.", price: 2090, rentalPrice: 450, image: img("photo-1600096194534-95cf5ece04cf"),
    gallery: [img("photo-1600096194534-95cf5ece04cf"), img("photo-1617127365659-c47fa864d8bc")], badge: "Premium", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "vittoria", name: "Traje Sastre Vittoria", category: "Ternos", audience: "mujer", services: ["venta", "alquiler"],
    description: "Sastrería femenina de líneas limpias, cintura definida y actitud contemporánea.", price: 1790, rentalPrice: 390, image: img("photo-1496217590455-aa63a8350eea"),
    gallery: [img("photo-1496217590455-aa63a8350eea"), img("photo-1487412720507-e7ab37603c6f")], badge: "Nueva silueta", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "windsor", name: "Smoking Windsor", category: "Novio", audience: "hombre", services: ["venta", "alquiler"],
    description: "Solapa peak satinada y corte inglés para ceremonias de impecable formalidad.", price: 2390, rentalPrice: 520, image: img("photo-1507504031003-b417219a0fde"),
    gallery: [img("photo-1507504031003-b417219a0fde"), img("photo-1617127365659-c47fa864d8bc")], badge: "Black tie", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "capri", name: "Terno Capri", category: "Novio", audience: "hombre", services: ["venta", "alquiler"],
    description: "Tonalidad arena y construcción fresca para bodas de día o destinos cálidos.", price: 1990, rentalPrice: 430, image: img("photo-1603252110481-7ba873bf42ab"),
    gallery: [img("photo-1603252110481-7ba873bf42ab"), img("photo-1548454782-15b189d129ab")], badge: "Destination wedding", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "verona", name: "Smoking Verona", category: "Novio", audience: "hombre", services: ["venta", "alquiler"],
    description: "Terciopelo negro y detalles satinados para una celebración con carácter.", price: 2590, rentalPrice: 560, image: img("photo-1548454782-15b189d129ab"),
    gallery: [img("photo-1548454782-15b189d129ab"), img("photo-1521119989659-a83eee488004")], badge: "Edición nocturna", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "roma", name: "Terno Roma", category: "Novio", audience: "hombre", services: ["venta", "alquiler"],
    description: "Azul medianoche de tres piezas con chaleco y acabados hechos a mano.", price: 2190, rentalPrice: 470, image: img("photo-1521119989659-a83eee488004"),
    gallery: [img("photo-1521119989659-a83eee488004"), img("photo-1593032465175-481ac7f401a0")], badge: "Tres piezas", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "black-label", name: "Smoking Black Label", category: "Novio", audience: "hombre", services: ["venta", "alquiler"],
    description: "Una pieza ceremonial de líneas puras, camisa plisada y presencia atemporal.", price: 2790, rentalPrice: 590, image: img("photo-1593032465175-481ac7f401a0"),
    gallery: [img("photo-1593032465175-481ac7f401a0"), img("photo-1507504031003-b417219a0fde")], badge: "Firma NOBILE", sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "manhattan", name: "Terno Manhattan", category: "Ejecutivo", audience: "hombre", services: ["venta", "alquiler"],
    description: "Sastrería funcional en azul tinta para reuniones, presentaciones y grandes decisiones.", price: 1590, rentalPrice: 340, image: img("photo-1573496359142-b8d87734a5a2"),
    gallery: [img("photo-1573496359142-b8d87734a5a2"), img("photo-1556761175-b413da4baf72")], badge: "Business essential", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "kensington", name: "Terno Kensington", category: "Ejecutivo", audience: "hombre", services: ["venta", "alquiler"],
    description: "Microtextura gris, hombro suave y comodidad diseñada para todo el día.", price: 1490, rentalPrice: 320, image: img("photo-1556761175-b413da4baf72"),
    gallery: [img("photo-1556761175-b413da4baf72"), img("photo-1555069519-127aadedf1ee")], badge: "Confort premium", sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "bianca", name: "Traje Ejecutivo Bianca", category: "Ejecutivo", audience: "mujer", services: ["venta", "alquiler"],
    description: "Blazer marfil y pantalón de tiro alto para una presencia luminosa y segura.", price: 1590, rentalPrice: 350, image: img("photo-1487412720507-e7ab37603c6f"),
    gallery: [img("photo-1487412720507-e7ab37603c6f"), img("photo-1508214751196-bcfd4ca60f91")], badge: "Power tailoring", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "victoria", name: "Traje Ejecutivo Victoria", category: "Ejecutivo", audience: "mujer", services: ["venta", "alquiler"],
    description: "Conjunto carbón de líneas alargadas, preciso para una agenda de alto nivel.", price: 1690, rentalPrice: 370, image: img("photo-1508214751196-bcfd4ca60f91"),
    gallery: [img("photo-1508214751196-bcfd4ca60f91"), img("photo-1531123897727-8f129e1688ce")], badge: "A medida", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "siena", name: "Traje Ejecutivo Siena", category: "Ejecutivo", audience: "mujer", services: ["venta", "alquiler"],
    description: "Sastrería cálida en tono camel con cintura sutilmente definida y gran versatilidad.", price: 1540, rentalPrice: 340, image: img("photo-1531123897727-8f129e1688ce"),
    gallery: [img("photo-1531123897727-8f129e1688ce"), img("photo-1573496359142-b8d87734a5a2")], badge: "Versátil", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "celeste", name: "Vestido Celeste", category: "Novia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Escote limpio, falda de seda y una caída serena para ceremonias contemporáneas.", price: 3290, rentalPrice: 820, image: img("photo-1523438885200-e635ba2c371e"),
    gallery: [img("photo-1523438885200-e635ba2c371e"), img("photo-1544078751-58fee2d8a03b")], badge: "Seda natural", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "isadora", name: "Vestido Isadora", category: "Novia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Encaje botánico, mangas delicadas y espalda protagonista trabajada a mano.", price: 3790, rentalPrice: 940, image: img("photo-1544078751-58fee2d8a03b"),
    gallery: [img("photo-1544078751-58fee2d8a03b"), img("photo-1519225421980-715cb0215aed")], badge: "Couture", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "valentina", name: "Vestido Valentina", category: "Novia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Silueta princesa equilibrada con bordados sutiles y volumen de gran ligereza.", price: 4190, rentalPrice: 1050, image: img("photo-1519225421980-715cb0215aed"),
    gallery: [img("photo-1519225421980-715cb0215aed"), img("photo-1522673607200-164d1b6ce486")], badge: "Alta costura", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "riviera", name: "Vestido Riviera", category: "Novia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Minimalismo fluido, espalda abierta y textura satinada para una novia moderna.", price: 2990, rentalPrice: 760, image: img("photo-1522673607200-164d1b6ce486"),
    gallery: [img("photo-1522673607200-164d1b6ce486"), img("photo-1511285560929-80b456fea0bc")], badge: "Minimal bride", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "aurora", name: "Vestido Aurora", category: "Novia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Tul luminoso y aplicaciones florales que crean una presencia suave y memorable.", price: 3890, rentalPrice: 980, image: img("photo-1511285560929-80b456fea0bc"),
    gallery: [img("photo-1511285560929-80b456fea0bc"), img("photo-1594552072238-b8a33785b261")], badge: "Romantic edit", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "gala-firenze", name: "Terno Gala Firenze", category: "Ceremonia", audience: "hombre", services: ["venta", "alquiler"],
    description: "Terno de gala azul noche con detalles discretos para eventos de gran protocolo.", price: 1890, rentalPrice: 410, image: img("photo-1525507119028-ed4c629a60a3"),
    gallery: [img("photo-1525507119028-ed4c629a60a3"), img("photo-1509631179647-0177331693ae")], badge: "Gala", sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "etoile", name: "Vestido Étoile", category: "Ceremonia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Brillo delicado y silueta columna para recepciones y noches especiales.", price: 1690, rentalPrice: 450, image: img("photo-1509631179647-0177331693ae"),
    gallery: [img("photo-1509631179647-0177331693ae"), img("photo-1529139574466-a303027c1d8b")], badge: "Noche", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "dahlia", name: "Vestido Dahlia", category: "Ceremonia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Color profundo, drapeado preciso y movimiento elegante para invitadas memorables.", price: 1390, rentalPrice: 390, image: img("photo-1529139574466-a303027c1d8b"),
    gallery: [img("photo-1529139574466-a303027c1d8b"), img("photo-1566206091558-7f218b696731")], badge: "Favorito de invitadas", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "perla", name: "Vestido Perla", category: "Ceremonia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Tono champagne, escote asimétrico y acabado satinado de refinada luminosidad.", price: 1590, rentalPrice: 420, image: img("photo-1566206091558-7f218b696731"),
    gallery: [img("photo-1566206091558-7f218b696731"), img("photo-1566174053879-31528523f8ae")], badge: "Cocktail edit", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "nocturne", name: "Vestido Nocturne", category: "Ceremonia", audience: "mujer", services: ["venta", "alquiler"],
    description: "Negro arquitectónico con abertura lateral y una silueta de impacto contenido.", price: 1790, rentalPrice: 480, image: img("photo-1566174053879-31528523f8ae"),
    gallery: [img("photo-1566174053879-31528523f8ae"), img("photo-1515886657613-9f3515b0c78f")], badge: "Black edition", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "magnolia", name: "Vestido Magnolia", category: "Quinceañera", audience: "mujer", services: ["venta", "alquiler"],
    description: "Capas de tul rosa empolvado y detalles florales para una celebración inolvidable.", price: 2290, rentalPrice: 620, image: img("photo-1485968579580-b6d095142e6e"),
    gallery: [img("photo-1485968579580-b6d095142e6e"), img("photo-1506629082955-511b1aa562c8")], badge: "Nueva colección", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "ebano", name: "Vestido Ébano", category: "Quinceañera", audience: "mujer", services: ["venta", "alquiler"],
    description: "Una propuesta negra contemporánea con volumen ligero y destellos sutiles.", price: 2490, rentalPrice: 670, image: img("photo-1506629082955-511b1aa562c8"),
    gallery: [img("photo-1506629082955-511b1aa562c8"), img("photo-1515372039744-b8f02a3ae446")], badge: "Edición especial", sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "rose", name: "Vestido Rosé", category: "Quinceañera", audience: "mujer", services: ["venta", "alquiler"],
    description: "Rosa luminoso, corsé bordado y falda amplia equilibrada con gran ligereza.", price: 2390, rentalPrice: 640, image: img("photo-1515372039744-b8f02a3ae446"),
    gallery: [img("photo-1515372039744-b8f02a3ae446"), img("photo-1518622358385-8ea7d0794bf6")], badge: "Más elegido", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "imperial-xv", name: "Vestido Imperial XV", category: "Quinceañera", audience: "mujer", services: ["venta", "alquiler"],
    description: "Azul real, aplicaciones artesanales y una falda de presencia majestuosa.", price: 2690, rentalPrice: 720, image: img("photo-1518622358385-8ea7d0794bf6"),
    gallery: [img("photo-1518622358385-8ea7d0794bf6"), img("photo-1492707892479-7bc8d5a4ee93")], badge: "Personalizable", sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "cielo", name: "Vestido Cielo", category: "Quinceañera", audience: "mujer", services: ["venta", "alquiler"],
    description: "Azul cielo de textura etérea, corsé limpio y detalles brillantes muy delicados.", price: 2190, rentalPrice: 590, image: img("photo-1492707892479-7bc8d5a4ee93"),
    gallery: [img("photo-1492707892479-7bc8d5a4ee93"), img("photo-1534528741775-53994a69daeb")], badge: "Dream collection", sizes: ["XS", "S", "M", "L"],
  },
];
