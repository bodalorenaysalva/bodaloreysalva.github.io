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
  { id: "casa-b2-wc",       categoria: "casa", nombre: "Mueble TV",           desc: "Innegociable que contenga espacio para colocar la Play donde jugar online al FIFA con Xemi.", precio: 260, img: "img/muebletv.webp" },
  { id: "casa-b2-mueb",     categoria: "casa", nombre: "Mueble y lavabo doble",                desc: "Sí, doble. Porque por las mañanas hay prisa y paciencia en cantidades distintas.", precio: 340, img: "img/mueblelavabo.webp" },
  { id: "casa-b2-grif",     categoria: "casa", nombre: "Grifería y termostática",              desc: "La ducha con termostato, para que la temperatura no cambie cuando alguien abre un grifo en la cocina.", precio: 220, img: "img/termostato.jpg" },
  { id: "casa-b2-azul1",    categoria: "casa", nombre: "Macetero",          desc: "Nos encanta las plantas y sobre todo cuando no gotean cuando se riegan.", precio: 320, img: "img/macetero.avif" },
  { id: "casa-b2-azul2",    categoria: "casa", nombre: "Azulejos del baño",         desc: "La pared de la ducha. Esa que hay que limpiar con ganas una vez al mes.", precio: 320, img: "img/azulejoplato.webp" },
  { id: "casa-b2-suelo",    categoria: "casa", nombre: "Suelo del baño",                       desc: "Antideslizante, porque nadie quiere que una ducha termine en urgencias.", precio: 240, img: "img/suelobano.jpg" },
  { id: "casa-b2-esp",      categoria: "casa", nombre: "Vajilla",                desc: "Vajilla mediterránea, cerámica mallorquina.", precio: 220, img: "img/vajilla.jpg" },
  { id: "casa-b2-mano",     categoria: "casa", nombre: "Recibidor",        desc: "Todo en uno, banco-recibidor y zapatero.", precio: 340, img: "img/recibidor.jpg" },

  // ——— Pintar las paredes (1000 €) ———
  { id: "casa-pint-1",      categoria: "casa", nombre: "Pintura · salón y pasillo",            desc: "Para evitar que Heiko, Demian y Lara se pongan el mono de trabajo.", precio: 280, img: "img/pinturasalon.jpg" },
  { id: "casa-pint-2",      categoria: "casa", nombre: "Pintura · dormitorio",                 desc: "Un tono tierra muy suave, de esos que relajan sin que te des cuenta. Test de almohada aprobado.", precio: 260, img: "img/pinturadormitorio.jpg" },
  { id: "casa-pint-3",      categoria: "casa", nombre: "Pintura · cocina y baños",             desc: "Pintura plástica, lavable, preparada para salpicaduras y vaporcillos.", precio: 220, img: "img/pinturacocina.webp" },
  { id: "casa-pint-4",      categoria: "casa", nombre: "Mano de obra del pintor",              desc: "El hombre del rodillo. Llega, tapa muebles, pinta, se va y todo huele a nuevo durante tres días.", precio: 240, img: "img/pintor.jpg" },

  // ——— Tarima flotante (1000 €) ———
  { id: "casa-tar-1",       categoria: "casa", nombre: "Tarima · salón",                       desc: "Suelo nuevo que suena a hogar nuevo. Nos acostumbraremos en tres días a no llevar zapatos.", precio: 340, img: "img/tarimasalon.png" },
  { id: "casa-tar-2",       categoria: "casa", nombre: "Tarima · dormitorio",                  desc: "Caliente al pie, silencioso en las sobremesas. Y con un dibujo que imita una madera bonita.", precio: 320, img: "img/tarimadormitorio.jpg" },
  { id: "casa-tar-3",       categoria: "casa", nombre: "Rodapié y colocación",                 desc: "Ese detallito que separa un suelo de un suelo bien puesto. Lo notarás o no, pero está ahí.", precio: 340, img: "img/rodapie.jpg" },

  // ——— Muebles pendientes ———
  { id: "casa-cama-1",      categoria: "casa", nombre: "La cama · estructura",                 desc: "Literalmente el mueble más usado de nuestra vida. Lo justo es pagar por él a plazos generacionales.", precio: 260, img: "img/estructura.webp" },
  { id: "casa-cama-2",      categoria: "casa", nombre: "La cama · cabecero",                   desc: "Tapizado, para leer sin clavarse la pared. Obligatorio en toda casa que se precie.", precio: 220, img: "img/cabecero.jpeg" },
  { id: "casa-colchon",     categoria: "casa", nombre: "Colchón en condiciones",               desc: "De los que no se hunden. El buen dormir empieza aquí.", precio: 340, img: "img/casa-colchon.png" },
  { id: "casa-mesillas",    categoria: "casa", nombre: "Mesillas de noche (pareja)",           desc: "Dos iguales, para evitar conflictos territoriales. Cada una con su lámpara y su libro empezado.", precio: 240, img: "img/mesanoche.jpg" },
  { id: "casa-sofa-1",      categoria: "casa", nombre: "Sofá · armazón",                       desc: "La estructura del protagonista del salón. De él dependen siestas, series y visitas.", precio: 320, img: "img/sofa.jpg" },
  { id: "casa-sofa-2",      categoria: "casa", nombre: "Reposapie",                 desc: "El rincón para estirar las piernas. Y de paso para guardar la manta del sofá.", precio: 280, img: "img/reposapie.avif" },
  { id: "casa-mesasalon",   categoria: "casa", nombre: "Mesa de centro del salón",             desc: "Donde aterrizarán tés, mandos, llaves, revistas, cacahuetes y, algún domingo, los pies.", precio: 200, img: "img/mesacentro.webp" },
  { id: "casa-mesacom-1",   categoria: "casa", nombre: "Mesa de comedor",                      desc: "De madera noble, de esa que envejece bien con manchas de vino y sobremesas largas.", precio: 340, img: "img/mesacomedor.webp" },
  { id: "casa-sillas-1",    categoria: "casa", nombre: "Sillas de comedor",          desc: "La que dará luz a nuestras cenas, a los partidos importantes y a las discusiones sobre qué peli ver", precio: 200, img: "img/sillacomedor.jpg" },
  { id: "casa-sillas-2",    categoria: "casa", nombre: "Mueble Tocadisco",         desc: "Los vinilos de Lorena ya tienen sitio donde colocarse.", precio: 200, img: "img/muebletocadisco.jpg" },
  { id: "casa-lampsalon",   categoria: "casa", nombre: "Mesa Terraza",           desc: "Donde colocar una taza de café mientras entran los primeros rayos de sol.", precio: 220, img: "img/mesabalcon.webp" },
  { id: "casa-lampcom",     categoria: "casa", nombre: "Librería",         desc: "Lo suficientemente amplio para que entre los años de estudio de Lorena y los papers de Salva", precio: 200, img: "img/estanteria.jpg" },
  { id: "casa-ventilador1", categoria: "casa", nombre: "Ventilador de techo · salón",          desc: "Porque un agosto en el Mediterráneo sin aspas girando es un castigo innecesario.", precio: 180, img: "img/lamparasalon.webp" },
  { id: "casa-ventilador2", categoria: "casa", nombre: "Escritorio",     desc: "Para no dejar de trabajar los findes", precio: 180, img: "img/escritorio.avif" },

  // ================================================================
  //  EL VIAJE — 15 días · Destino Sorpresa
  // ================================================================
  //  Vuelos ~ 6000 € · Hoteles ~ 1000 € · Extras

  // ——— Vuelos y traslados (6000 €) ———
  { id: "viaje-vuelo-1",    categoria: "viaje", nombre: "Vuelo con escala · tramo ida",             desc: "Los dos con ojeras en la puerta de embarque, mirando las maletas, preguntándonos si lo hemos cogido todo. Empieza la aventura.", precio: 340, img: "img/vueloescala.jpg" },
  { id: "viaje-vuelo-2",    categoria: "viaje", nombre: "Noche ciudad con escala · tramo ida",            desc: "Demasiados kilòmetros para hacerlo del tirón, mejor con parada .", precio: 340, img: "img/hotelescala.jpg" },
  { id: "viaje-vuelo-3",    categoria: "viaje", nombre: "Vuelo al paraíso · tramo ida",           desc: "Segunda vez que embarcamos pero ahora sí al destino final.", precio: 340, img: "img/vueloparaiso.jpg" },
  { id: "viaje-vuelo-4",    categoria: "viaje", nombre: "Alquiler coche",            desc: "Para no perdernos nada mejor en coche.", precio: 340, img: "img/alquilercoche.webp" },
  { id: "viaje-tren-ky",    categoria: "viaje", nombre: "Hotel para 3 primeras noches",                   desc: "Para recomponernos del jetlag.", precio: 220, img: "img/hotel.avif" },
  { id: "viaje-vuelo-5",    categoria: "viaje", nombre: "Primeras excursiones",        desc: "Aunque nos gusta ir por libre las excursiones mejor contratadas.", precio: 320, img: "img/excursion.jpg" },
  { id: "viaje-vuelo-6",    categoria: "viaje", nombre: "Visita cuevas ",       desc: "Sin desvelar el destino, os damos una pista: visita a cueva con luciérnagas.", precio: 320, img: "img/visitacuevas.jpg" },
  { id: "viaje-vuelo-7",    categoria: "viaje", nombre: "Paseo en tranvía",               desc: "No todo va a ser patear la ciudad.", precio: 260, img: "img/tranvia.jpg" },
  { id: "viaje-vuelo-8",    categoria: "viaje", nombre: "Fuentes Termales",              desc: "Ticket para ver las fuentes termales", precio: 340, img: "img/fuentetermal.jpg" },
  { id: "viaje-vuelo-9",    categoria: "viaje", nombre: "Baño de lodo",             desc: "No es indispensable, si no lo reservais casi mejor.", precio: 340, img: "img/lodo.jpg" },
  { id: "viaje-vuelo-10",   categoria: "viaje", nombre: "Tasas, maletas y equipaje",           desc: "Eso que siempre aparece al final y cuesta más de lo que esperas. Pagarlo sin maldecir es un arte.", precio: 200, img: "img/factura.jpg" },
  { id: "viaje-traslados",  categoria: "viaje", nombre: "Taxis y traslados entre destinos",    desc: "Del aeropuerto al hotel, del hotel a otro hotel. Siempre con la maleta que no cierra.", precio: 180, img: "img/taxi.avif" },

  // ——— Hoteles (1000 €) ———
  { id: "viaje-hotel-tk1",  categoria: "viaje", nombre: "Hotel para la 4, 5 y 6 noche",            desc: "El destino al que vamos tiene muy buena pinta", precio: 180, img: "img/hotel.avif" },
  { id: "viaje-hotel-tk2",  categoria: "viaje", nombre: "Hotel en noche 7, 8 y 9",           desc: "Otra noche. Porque una ciudad así no se ve en veinticuatro horas ni de broma.", precio: 180, img: "img/hotel.avif" },
  { id: "viaje-ryokan",     categoria: "viaje", nombre: "Cena con vistas",                     desc: "Los lugares no se pueden conocer sin probar su gastronomia", precio: 220, img: "img/cenavistas.jpeg" },
  { id: "viaje-villa-bl1",  categoria: "viaje", nombre: "Cocotero",             desc: "Para desconectar del ruido de la ciudad y echar una vuena siestas.", precio: 220, img: "img/cocotero.jpg" },
  { id: "viaje-villa-bl2",  categoria: "viaje", nombre: "Vuelo entre escalas",            desc: "De nuevo pasaporte en mano.", precio: 200, img: "img/vueloparaiso.jpg" },

  // ——— Cenas y experiencias por destino ———
  { id: "viaje-tk-sushi",   categoria: "viaje", nombre: "Cena de sushi",              desc: "Barra de madera, maestro serio, sake tibio. A Lorena le pediremos otra cosa que le guste. Cena esas que recuerdas años después y salivas un poco.", precio: 260, img: "img/sushi.jpg" },
  { id: "viaje-tk-ramen",   categoria: "viaje", nombre: "Buffet libre",          desc: "Para recuperar esos kilos que hemos perdido por el camino.", precio: 150, img: "img/bufethotel.jpg" },
  { id: "viaje-tk-karaoke", categoria: "viaje", nombre: "Paseo en barco",          desc: "Para pasearnos como Tanya en White Lotus pero con un mejor destino", precio: 150, img: "img/barco.webp" },
  { id: "viaje-tk-teamlab", categoria: "viaje", nombre: "Snorkel",                  desc: "Excursión acuática", precio: 160, img: "img/barco.webp" },

  { id: "viaje-ky-kaiseki", categoria: "viaje", nombre: "Imanes de regalo",               desc: "Directo a tu nevera", precio: 320, img: "img/imanes.jpg" },
  { id: "viaje-ky-geisha",  categoria: "viaje", nombre: "Tarde tranquila",         desc: "con un buen Cocktail en mano.", precio: 180, img: "img/coctelcoco.jpg" },
  { id: "viaje-ky-bambu",   categoria: "viaje", nombre: "Piragua",       desc: "Al amanecer, antes de que llegue nadie. El silencio ahí dentro se oye. Raro y bonito.", precio: 150, img: "img/piraguay.avif" },
  { id: "viaje-ky-te",      categoria: "viaje", nombre: "Alquiler de bicicleta",                    desc: "Una forma original de recorrer nuestro destino.", precio: 150, img: "img/bici.jpg" },
  { id: "viaje-ky-kimono",  categoria: "viaje", nombre: "Tour 4x4",       desc: "Para que todo vaya sobreruedas.", precio: 150, img: "mg/safari.avif" },

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
