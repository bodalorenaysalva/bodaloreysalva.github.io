// =============================================================
//  LISTA DE REGALOS — Lorena & Salva · 11 julio 2026
//  -------------------------------------------------------------
//  Cada regalo:
//    id        → identificador único (sin espacios)
//    nombre    → título visible
//    desc      → descripción breve con su toque
//    precio    → € interno (solo visible en admin)
//    categoria → "casa" o "viaje"
//    img       → ruta a una imagen en img/. Déjala vacía ("") y
//                aparecerá un hueco para subirla después. Si
//                prefieres, pon aquí una URL pública también vale.
// =============================================================

window.REGALOS = [
  // ================================================================
  //  LA CASA — la reforma + muebles pendientes
  // ================================================================

  // ——— El baño nuevo (4000 €) — sacarlo de la nada, con su muro ———
  { id: "casa-bn-muro",     categoria: "casa", nombre: "Levantar el muro del baño nuevo",      desc: "Empezamos por lo invisible: el muro que separa lo que es baño de lo que deja de ser pasillo. Sin él no hay baño, ergo: protagonista.", precio: 340, img: "img/murobano.jpg" },
  { id: "casa-bn-wc",       categoria: "casa", nombre: "El inodoro del baño nuevo",            desc: "El trono. Con tapa amortiguada, que ya somos mayores para escuchar portazos a las tres de la mañana.", precio: 280, img: "img/inodorotapa.jpg" },
  { id: "casa-bn-lavabo",   categoria: "casa", nombre: "El lavabo del baño nuevo",             desc: "Donde Salva se mojará la cara a primera hora y Lorena esperará su turno.", precio: 260, img: "img/lavabo.jpg" },
  { id: "casa-bn-grif",     categoria: "casa", nombre: "Grifería del baño nuevo",              desc: "Ese detalle que no ves hasta que lo tocas y dices 'ah, sí, esto es un grifo bueno'.", precio: 180, img: "img/griferia.jpg" },
  { id: "casa-bn-azul",     categoria: "casa", nombre: "Azulejos del baño nuevo",              desc: "Elegidos tras cuatro visitas a la tienda y una pelea amistosa entre mate y brillo. Ganó el mate.", precio: 340, img: "img/azulejobano.jpg" },
  { id: "casa-bn-puerta",   categoria: "casa", nombre: "La puerta del baño nuevo",             desc: "Pequeña, discreta y capaz de cerrarse cuando toca. Tres virtudes.", precio: 220, img: "img/puertabano.jpg" },
  { id: "casa-bn-esp",      categoria: "casa", nombre: "Espejo y luz del baño nuevo",          desc: "Para que hasta el peor lunes tenga buena cara. O al menos iluminada.", precio: 200, img: "img/espejoluz.jpg" },
  { id: "casa-bn-mano",     categoria: "casa", nombre: "Mano de obra · baño nuevo",            desc: "Las horas del albañil que convierten un rincón raro en un cuarto de baño de verdad.", precio: 320, img: "img/albanizbano.jpg" },
  { id: "casa-bn-acc",      categoria: "casa", nombre: "Accesorios del baño nuevo",            desc: "Toallero, portarrollos, ese gancho donde nunca sabes qué colgar. Pequeños pero necesarios.", precio: 150, img: "img/accesoriobano.jpg" },

  // ——— Cocina nueva (5000 €) ———
  { id: "casa-coc-muebl1",  categoria: "casa", nombre: "Muebles de cocina",          desc: "Los armarios altos y bajos. Los de arriba. Los que nunca llegas sin ponerte de puntillas, y los de abajo, uno exclusivo para tuppers.", precio: 320, img: "img/mueblecocina.jpeg" },
  { id: "casa-coc-muebl2",  categoria: "casa", nombre: "Placa de inducción",         desc: "La moderna, la que se limpia con un trapo y pita cuando el cazo no está centrado", precio: 320, img: "img/induccion.jpg" },
  { id: "casa-coc-muebl3",  categoria: "casa", nombre: "Fregadero",        desc: "Donde caerán las sartenes y los sábados por la mañana. Que sea hondo, por favor", precio: 260, img: "img/fregadero.webp" },
  { id: "casa-coc-enc",     categoria: "casa", nombre: "Encimera de la cocina",                desc: "De piedra resistente. Para que aguante cuchillazos, café derramado y alguna lágrima de cebolla.", precio: 340, img: "img/encimera.jpg" },
  { id: "casa-coc-freg",    categoria: "casa", nombre: "Papelera reciclaje",                    desc: "Contribuimos con los objetivos de desarrollo sostenible 2030.", precio: 220, img: "img/reciclaje.jpg" },
  { id: "casa-coc-placa",   categoria: "casa", nombre: "Especiero",                   desc: "Para que nuestro amigo Antonio lo tenga a la mano cuando quiera cocinar", precio: 300, img: "img/especiero.jpg" },
  { id: "casa-coc-campana", categoria: "casa", nombre: "Campana extractora",                   desc: "Imprescindible si queremos que la casa no huela a ajo durante tres días seguidos.", precio: 240, img: "img/campana.jpg" },
  { id: "casa-coc-horno",   categoria: "casa", nombre: "Horno",                                desc: "El reto de la temporada: conseguir que Salva aprenda a usarlo más allá del modo pizza.", precio: 320, img: "img/horno.jpg" },
  { id: "casa-coc-nev",     categoria: "casa", nombre: "Nevera",                               desc: "La gran protagonista de las dos de la madrugada. Que sea silenciosa y tenga sitio para el queso.", precio: 340, img: "img/nevera.webp" },
  { id: "casa-coc-lav",     categoria: "casa", nombre: "Lavavajillas",                         desc: "El mejor regalo que podemos hacernos en pareja. Un árbitro silencioso en la cocina.", precio: 320, img: "img/lavavajillas.avif" },
  { id: "casa-coc-azul",    categoria: "casa", nombre: "Azulejos y frontal",                   desc: "El trozo de pared entre la encimera y los armarios. Pequeño, visible, decisivo.", precio: 280, img: "img/salpicadero.jpg" },
  { id: "casa-coc-ilum",    categoria: "casa", nombre: "Iluminación de la cocina",             desc: "Focos bajo los muebles. Luz directa donde se corta cebolla. Civilización pura.", precio: 180, img: "img/iluminacioncocina.jpg" },
  { id: "casa-coc-mano1",   categoria: "casa", nombre: "Mano de obra · cocina I",              desc: "Las horas del fontanero. Pocas palabras, muchas soluciones.", precio: 260, img: "img/fontanerococina.jpg" },
  { id: "casa-coc-mano2",   categoria: "casa", nombre: "Mano de obra · cocina II",             desc: "Las horas del electricista. Con los cables que nunca están donde deberían.", precio: 260, img: "img/electricistacocina.webp" },

  // ——— Baño entero reformado (4500 €) ———
  { id: "casa-b2-plato",    categoria: "casa", nombre: "Plato de ducha",                       desc: "Adiós a la bañera imposible de limpiar. Hola a la ducha a ras de suelo y a las piernas sin calambres.", precio: 320, img: "img/platodeducha.jpg" },
  { id: "casa-b2-mampara",  categoria: "casa", nombre: "Mampara de la ducha",                  desc: "La que decide si el suelo acaba mojado o no. Una responsabilidad enorme para un cristal.", precio: 280, img: "img/mampara.webp" },
  { id: "casa-b2-wc",       categoria: "casa", nombre: "Inodoro del baño principal",           desc: "Suspendido. Parece que flota. En realidad está mejor anclado que nuestras vidas.", precio: 260, img: "img/inodorotapa.jpg" },
  { id: "casa-b2-mueb",     categoria: "casa", nombre: "Mueble y lavabo doble",                desc: "Sí, doble. Porque por las mañanas hay prisa y paciencia en cantidades distintas.", precio: 340, img: "img/mueblelavabo.webp" },
  { id: "casa-b2-grif",     categoria: "casa", nombre: "Grifería y termostática",              desc: "La ducha con termostato, para que la temperatura no cambie cuando alguien abre un grifo en la cocina.", precio: 220, img: "img/termostato.jpg" },
  { id: "casa-b2-azul1",    categoria: "casa", nombre: "Azulejos del baño · parte I",          desc: "La pared de detrás del lavabo. La que se ve en todas las fotos de espejo del móvil.", precio: 320, img: "img/azulejobano.jpg" },
  { id: "casa-b2-azul2",    categoria: "casa", nombre: "Azulejos del baño · parte II",         desc: "La pared de la ducha. Esa que hay que limpiar con ganas una vez al mes.", precio: 320, img: "img/azulejoplato.webp" },
  { id: "casa-b2-suelo",    categoria: "casa", nombre: "Suelo del baño",                       desc: "Antideslizante, porque nadie quiere que una ducha termine en urgencias.", precio: 240, img: "img/suelobano.jpg" },
  { id: "casa-b2-esp",      categoria: "casa", nombre: "Espejo retroiluminado",                desc: "Con lucecita detrás. Queda de revista. Es el tipo de capricho que no te arrepientes de tener.", precio: 220, img: "img/espejoiluminado.jpg" },
  { id: "casa-b2-mano",     categoria: "casa", nombre: "Mano de obra · baño principal",        desc: "Dos semanas de obras, de escombros en el pasillo y de 'mañana ya termino'. Pagar por ello es justicia.", precio: 340, img: "img/obrabano.jpg" },

  // ——— Pintar las paredes (1000 €) ———
  { id: "casa-pint-1",      categoria: "casa", nombre: "Pintura · salón y pasillo",            desc: "Un blanco con algo de ropa tendida. Nada dramático. Solo que respire la luz.", precio: 280, img: "img/platodeducha.jpg" },
  { id: "casa-pint-2",      categoria: "casa", nombre: "Pintura · dormitorio",                 desc: "Un tono tierra muy suave, de esos que relajan sin que te des cuenta. Test de almohada aprobado.", precio: 260, img: "img/platodeducha.jpg" },
  { id: "casa-pint-3",      categoria: "casa", nombre: "Pintura · cocina y baños",             desc: "Pintura plástica, lavable, preparada para salpicaduras y vaporcillos.", precio: 220, img: "img/platodeducha.jpg" },
  { id: "casa-pint-4",      categoria: "casa", nombre: "Mano de obra del pintor",              desc: "El hombre del rodillo. Llega, tapa muebles, pinta, se va y todo huele a nuevo durante tres días.", precio: 240, img: "img/platodeducha.jpg" },

  // ——— Tarima flotante (1000 €) ———
  { id: "casa-tar-1",       categoria: "casa", nombre: "Tarima · salón",                       desc: "Suelo nuevo que suena a hogar nuevo. Nos acostumbraremos en tres días a no llevar zapatos.", precio: 340, img: "img/platodeducha.jpg" },
  { id: "casa-tar-2",       categoria: "casa", nombre: "Tarima · dormitorio",                  desc: "Caliente al pie, silencioso en las sobremesas. Y con un dibujo que imita una madera bonita.", precio: 320, img: "img/platodeducha.jpg" },
  { id: "casa-tar-3",       categoria: "casa", nombre: "Rodapié y colocación",                 desc: "Ese detallito que separa un suelo de un suelo bien puesto. Lo notarás o no, pero está ahí.", precio: 340, img: "img/platodeducha.jpg" },

  // ——— Muebles pendientes ———
  { id: "casa-cama-1",      categoria: "casa", nombre: "La cama · estructura",                 desc: "Literalmente el mueble más usado de nuestra vida. Lo justo es pagar por él a plazos generacionales.", precio: 260, img: "img/platodeducha.jpg" },
  { id: "casa-cama-2",      categoria: "casa", nombre: "La cama · cabecero",                   desc: "Tapizado, para leer sin clavarse la pared. Obligatorio en toda casa que se precie.", precio: 220, img: "img/platodeducha.jpg" },
  { id: "casa-colchon",     categoria: "casa", nombre: "Colchón en condiciones",               desc: "De los que no se hunden. El buen dormir empieza aquí.", precio: 340, img: "img/casa-colchon.png" },
  { id: "casa-mesillas",    categoria: "casa", nombre: "Mesillas de noche (pareja)",           desc: "Dos iguales, para evitar conflictos territoriales. Cada una con su lámpara y su libro empezado.", precio: 240, img: "img/platodeducha.jpg" },
  { id: "casa-sofa-1",      categoria: "casa", nombre: "Sofá · armazón",                       desc: "La estructura del protagonista del salón. De él dependen siestas, series y visitas.", precio: 320, img: "img/platodeducha.jpg" },
  { id: "casa-sofa-2",      categoria: "casa", nombre: "Sofá · chaise longue",                 desc: "El rincón para estirar las piernas. Negociable. Lo negociaremos contigo si lo reservas.", precio: 280, img: "img/platodeducha.jpg" },
  { id: "casa-mesasalon",   categoria: "casa", nombre: "Mesa de centro del salón",             desc: "Donde aterrizarán tés, mandos, llaves, revistas, cacahuetes y, algún domingo, los pies.", precio: 200, img: "img/platodeducha.jpg" },
  { id: "casa-mesacom-1",   categoria: "casa", nombre: "Mesa de comedor",                      desc: "De madera noble, de esa que envejece bien con manchas de vino y sobremesas largas.", precio: 340, img: "img/platodeducha.jpg" },
  { id: "casa-sillas-1",    categoria: "casa", nombre: "Sillas de comedor · parte I",          desc: "Tres sillas. Las del lado de Lorena, donde se habla más y se come más despacio.", precio: 200, img: "img/platodeducha.jpg" },
  { id: "casa-sillas-2",    categoria: "casa", nombre: "Sillas de comedor · parte II",         desc: "Otras tres. Las del lado de Salva, donde la copa se vacía antes.", precio: 200, img: "img/platodeducha.jpg" },
  { id: "casa-lampsalon",   categoria: "casa", nombre: "Lámpara de techo del salón",           desc: "La que dará luz a nuestras cenas, a los partidos importantes y a las discusiones sobre qué peli ver.", precio: 220, img: "img/platodeducha.jpg" },
  { id: "casa-lampcom",     categoria: "casa", nombre: "Lámpara de techo del comedor",         desc: "Baja, sobre la mesa. De esas que dibujan sombras bonitas y hacen que la cena parezca otra cosa.", precio: 200, img: "img/platodeducha.jpg" },
  { id: "casa-ventilador1", categoria: "casa", nombre: "Ventilador de techo · salón",          desc: "Porque un agosto en el Mediterráneo sin aspas girando es un castigo innecesario.", precio: 180, img: "img/platodeducha.jpg" },
  { id: "casa-ventilador2", categoria: "casa", nombre: "Ventilador de techo · dormitorio",     desc: "Con mando. Para no tener que levantarse. Es esa clase de regalo que se usa todas las noches de julio a septiembre.", precio: 180, img: "img/platodeducha.jpg" },

  // ================================================================
  //  EL VIAJE — 15 días · Tokio, Kioto, Bali y Singapur
  // ================================================================
  //  Vuelos ~ 6000 € · Hoteles ~ 1000 € · Extras

  // ——— Vuelos y traslados (6000 €) ———
  { id: "viaje-vuelo-1",    categoria: "viaje", nombre: "Vuelo a Tokio · tramo I",             desc: "Los dos con ojeras en la puerta de embarque, mirando las maletas, preguntándonos si lo hemos cogido todo. Empieza la aventura.", precio: 340, img: "" },
  { id: "viaje-vuelo-2",    categoria: "viaje", nombre: "Vuelo a Tokio · tramo II",            desc: "La hora turbia del vuelo. Ya no sabes si es día o noche, ni si esa cena en bandeja era desayuno.", precio: 340, img: "" },
  { id: "viaje-vuelo-3",    categoria: "viaje", nombre: "Vuelo a Tokio · tramo III",           desc: "Aterrizamos en Haneda con cara de recién levantados y un emoción que no cabe en el avión.", precio: 340, img: "" },
  { id: "viaje-vuelo-4",    categoria: "viaje", nombre: "Vuelo a Tokio · tramo IV",            desc: "Los últimos kilómetros del billete a Tokio. Para que no falte ni un litro de queroseno.", precio: 340, img: "" },
  { id: "viaje-tren-ky",    categoria: "viaje", nombre: "Tren bala a Kioto",                   desc: "Shinkansen. Con bento box en el regazo. Vistas a Fuji si hay suerte. Fotos movidas aseguradas.", precio: 220, img: "" },
  { id: "viaje-vuelo-5",    categoria: "viaje", nombre: "Vuelo Kioto → Bali · tramo I",        desc: "Cambio de continente y, con él, cambio de ropa en el aeropuerto. Del kimono al bañador.", precio: 320, img: "" },
  { id: "viaje-vuelo-6",    categoria: "viaje", nombre: "Vuelo Kioto → Bali · tramo II",       desc: "La escala, el bocadillo raro, ese rato en la sala de tránsito que parece durar días.", precio: 320, img: "" },
  { id: "viaje-vuelo-7",    categoria: "viaje", nombre: "Vuelo Bali → Singapur",               desc: "Trayecto corto. Perfecto para echarse un sueño con la frente contra la ventanilla.", precio: 260, img: "" },
  { id: "viaje-vuelo-8",    categoria: "viaje", nombre: "Vuelo vuelta · tramo I",              desc: "La vuelta. La parte del viaje que duele un poquito. Se compensa con el menú del avión.", precio: 340, img: "" },
  { id: "viaje-vuelo-9",    categoria: "viaje", nombre: "Vuelo vuelta · tramo II",             desc: "El último tramo. Llegamos con jet lag, 2.000 fotos y los pies hinchados.", precio: 340, img: "" },
  { id: "viaje-vuelo-10",   categoria: "viaje", nombre: "Tasas, maletas y equipaje",           desc: "Eso que siempre aparece al final y cuesta más de lo que esperas. Pagarlo sin maldecir es un arte.", precio: 200, img: "" },
  { id: "viaje-traslados",  categoria: "viaje", nombre: "Taxis y traslados entre destinos",    desc: "Del aeropuerto al hotel, del hotel a otro hotel. Siempre con la maleta que no cierra.", precio: 180, img: "" },

  // ——— Hoteles (1000 €) ———
  { id: "viaje-hotel-tk1",  categoria: "viaje", nombre: "Hotel en Tokio · noche I",            desc: "Shibuya. Ventana a luces de neón, vending machines y gente caminando muy deprisa.", precio: 180, img: "" },
  { id: "viaje-hotel-tk2",  categoria: "viaje", nombre: "Hotel en Tokio · noche II",           desc: "Otra noche. Porque una ciudad así no se ve en veinticuatro horas ni de broma.", precio: 180, img: "" },
  { id: "viaje-ryokan",     categoria: "viaje", nombre: "Ryokan en Kioto",                     desc: "Tatami, futón, bata, ritual del onsen. La experiencia japonesa de catálogo. Y merece la pena.", precio: 220, img: "" },
  { id: "viaje-villa-bl1",  categoria: "viaje", nombre: "Villa en Bali · noche I",             desc: "Piscina privada, mosquitera de película y, muy probablemente, una rana en el jardín.", precio: 220, img: "" },
  { id: "viaje-villa-bl2",  categoria: "viaje", nombre: "Villa en Bali · noche II",            desc: "Repite. Porque irse de Bali al día siguiente es directamente una grosería con la isla.", precio: 200, img: "" },

  // ——— Cenas y experiencias por destino ———
  { id: "viaje-tk-sushi",   categoria: "viaje", nombre: "Cena de sushi en Tokio",              desc: "Barra de madera, maestro serio, sake tibio. De esas que recuerdas años después y salivas un poco.", precio: 260, img: "" },
  { id: "viaje-tk-ramen",   categoria: "viaje", nombre: "Ronda de ramen en Shinjuku",          desc: "De esos callejones que huelen a caldo tres esquinas antes. Mesa compartida con gente que no volveremos a ver.", precio: 150, img: "" },
  { id: "viaje-tk-karaoke", categoria: "viaje", nombre: "Karaoke privado en Shibuya",          desc: "Cantaremos fatal. Tú pagas la sala; las risas las ponemos nosotros. Habrá vídeos. Peligrosos.", precio: 150, img: "" },
  { id: "viaje-tk-teamlab", categoria: "viaje", nombre: "Entradas a teamLab",                  desc: "El museo de luces infinitas. Salen mil fotos y ninguna le hace justicia. Hay que estar allí.", precio: 160, img: "" },

  { id: "viaje-ky-kaiseki", categoria: "viaje", nombre: "Cena kaiseki en Kioto",               desc: "Doce pases, porcelana delicada, gestos estudiados. La cena que cuentas en las cenas durante años.", precio: 320, img: "" },
  { id: "viaje-ky-geisha",  categoria: "viaje", nombre: "Paseo por Gion al atardecer",         desc: "Con guía local, entre farolillos, esperando ver una geisha cruzar rápido una calle de madera.", precio: 180, img: "" },
  { id: "viaje-ky-bambu",   categoria: "viaje", nombre: "Bosque de bambú de Arashiyama",       desc: "Al amanecer, antes de que llegue nadie. El silencio ahí dentro se oye. Raro y bonito.", precio: 150, img: "" },
  { id: "viaje-ky-te",      categoria: "viaje", nombre: "Ceremonia del té",                    desc: "Matcha batido a mano, gestos lentos, media hora de vida en cámara lenta. Necesario.", precio: 150, img: "" },
  { id: "viaje-ky-kimono",  categoria: "viaje", nombre: "Alquiler de kimono por un día",       desc: "Sí, los dos. Sí, haremos fotos ridículas. Sí, las colgaremos. Y las vais a ver.", precio: 150, img: "" },

  { id: "viaje-bl-cena",    categoria: "viaje", nombre: "Cena en acantilado en Uluwatu",       desc: "Con vistas, con atardecer, con esa cuenta que llega y pagas feliz porque el sol hizo cosas mágicas.", precio: 260, img: "" },
  { id: "viaje-bl-masaje",  categoria: "viaje", nombre: "Masaje balinés en pareja",             desc: "Una hora de masaje. Veinte minutos de 'qué bien estoy'. Cinco de dormirse sin querer.", precio: 220, img: "" },
  { id: "viaje-bl-arroz",   categoria: "viaje", nombre: "Excursión a los arrozales de Ubud",    desc: "Ese verde que parece retocado y en realidad es así de indecente. Fotos para nietos.", precio: 170, img: "" },
  { id: "viaje-bl-templo",  categoria: "viaje", nombre: "Día de templos y ofrendas",            desc: "Con sarong incluido, guía local e historias que repetiremos mal durante años.", precio: 180, img: "" },
  { id: "viaje-bl-surf",    categoria: "viaje", nombre: "Clase de surf en Canggu",              desc: "Nos caeremos mucho. Nos reiremos más. Al final, saldrá una ola. Foto cutre incluida.", precio: 160, img: "" },
  { id: "viaje-bl-snorkel", categoria: "viaje", nombre: "Snorkel en Nusa Penida",               desc: "Manta rayas si hay suerte. Peces imposibles si no. Lorena saldrá con la nariz roja: seguro.", precio: 190, img: "" },

  { id: "viaje-sg-cena",    categoria: "viaje", nombre: "Cena en Marina Bay",                   desc: "Rascacielos, skyline iluminado, esa sensación de estar dentro de una peli futurista.", precio: 280, img: "" },
  { id: "viaje-sg-coc",     categoria: "viaje", nombre: "Cócteles en azotea de Singapur",       desc: "De esos con copa bonita y precio raro. Pero con toda la ciudad abajo. Merece cada céntimo.", precio: 180, img: "" },
  { id: "viaje-sg-hawker",  categoria: "viaje", nombre: "Ruta de hawker centers",               desc: "Chili crab, laksa, satay. Puestos callejeros que esconden estrellas Michelin entre los manteles de plástico.", precio: 150, img: "" },
  { id: "viaje-sg-gardens", categoria: "viaje", nombre: "Gardens by the Bay",                   desc: "Los árboles gigantes con luces. Parece ciencia ficción. Es jueves por la noche en Singapur.", precio: 150, img: "" },

  // ——— Extras del viaje ———
  { id: "viaje-fotos",      categoria: "viaje", nombre: "Sesión de fotos profesional",          desc: "Para tener al menos una foto del viaje donde los dos salgamos decentes y no a contraluz.", precio: 280, img: "" },
  { id: "viaje-seguro",     categoria: "viaje", nombre: "Seguro de viaje",                      desc: "El regalo menos sexy de la lista. El que más agradeceremos si algo sale ligeramente mal.", precio: 150, img: "" },
  { id: "viaje-ultima",     categoria: "viaje", nombre: "La última cena del viaje",             desc: "La que siempre duele un poco. Merece un sitio especial, un brindis y una promesa de volver.", precio: 260, img: "" }
];
