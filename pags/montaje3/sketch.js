let A = new Aventura("es", {typewriterSpeed:0, defaultCSS: false});

let escenas = {
  inicio: { 
  texto: "<h3>Montaje del carguero de la colonia tardía e Ilustración criolla</h3><p>Durante el período de la colonia tardía los cargueros siguieron ejercieron su oficio. Para la época del viaje de Humboldt en 1801 se dice que también los blancos y mestizos se dedicaban a esta actividad1. Al igual que otro tipo de prácticos o baqueanos que servían como guías tales como los rastreadores, mediadores y traductores, los cargueros fueron útiles a misioneros, exploradores y autoridades civiles en el contexto de las actividades expansión del dominio de la Monarquía hispánica borbona hacia los territorios de frontera. Debido a esto, se pueden encontrar diversos cargueros en ilustraciones de Historia Natural en el Nuevo Mundo de finales del siglo XVIII. Estas imágenes son elaboradas en el contexto de una alta valoración de los materiales visuales como un modo de hacer visible el imperio para posibilitar su dominio. Se trata de imágenes producidas por ilustrados y pintores criollos, exploradores científicos de las expediciones hispánicas y burócratas virreinales, tales como: ilustraciones botánicas que flotan descontextualizadas en un fondo blanco, pinturas de casta y de mestizaje, cuadros de historia natural, ilustraciones en documentos de funcionarios virreinales como es el caso de las relaciones de gobierno, álbumes y colecciones de láminas de tipos y especímenes de fauna y flora hechos con sensibilidad ilustrada y las cartografías verticales que pretendían graficar la nivelación de alturas y la geografía de las plantas; en general, obras que de modos diversos se plantearon el problema de hacer visible la naturaleza americana en un contexto de discusiones internacionales acerca de su supuesta inferioridad en relación con la del Viejo Mundo, en un contexto de competencias por la hegemonía imperial, de disputas al interior de la monarquía hispana por lograr prerrogativas locales y de grupo en medio de la reorganización borbona, y, finalmente, en un contexto de profundas transformaciones sociales, políticas, científicas y tecnológicas que darán forma al mundo moderno. Mostraremos que el carguero aparece en esta circulación de imágenes de diferentes formas, como un modo de clasificar y jerarquizar la población, pero también como un modo de transporte propio de difícil tránsito entre la espacialidad vertical y selvática y como un tropo retórico que permite imaginar la intervención del espacio para hacer posible la expansión imperial.</p>", 
  imagen: "./../../imgs/montaje3.png", 
  sinSalida: true,


 areas: [
    {
         x: 636,
         y: 1350,
         w: 552,
         h: 848,
         texto:"",
         escena: "expediciónBotánica1" 
    },
    {
        x: 1592,
        y: 1064,
        w: 816,
        h: 874,
        texto: "",
        escena: "expediciónBotánica2"
    },
    {
        x: 2808,
        y: 840,
        w: 988,
        h: 736,
        texto: "",
        escena: "malaspina1"
    },
    {
        x: 3992,
        y: 680,
        w: 784,
        h: 1024,
        texto: "",
        escena: "malaspina2"
    },
    {
        x: 5256,
        y: 832,
        w: 1192,
        h: 728,
        texto: "",
        escena: "detalleCuadrodelPerú1"
    },
    {
        x: 4672,
        y: 2010,
        w: 1040,
        h: 990,
        texto: "",
        escena: "detalleRelaciónGobierno"
    },
    {
        x: 1460, 
        y: 2720,
        w: 1320,
        h: 1456,
        texto: "",
        escena: "detalleCuadrodelPerú2" 
    },
    {
        x: 3060,
        y: 2560,
        w: 1550,
        h: 2024,
        texto: ",",
        escena: "malaspina3"
    },
    {
        x: 1208,
        y: 4008,
        w: 1096,
        h: 736,
        texto: "",
        escena: "cargueroArchivo"
    },
    {
        x: 2416,
        y: 4380,
        w: 780,
        h: 1150,
        texto: "",
        escena: "villaneroMira"
    },
    {
        x: 3496,
        y: 4184,
        w: 968,
        h: 720,
        texto: "",
        escena: "cargueroPutumayo"
    },
    {
        x: 5080,
        y: 3304,
        w: 1600,
        h: 1140,
        texto: "",
        escena: "cargueroMestizaje"
    },
    {
        x: 4504,
        y: 4500,
        w: 672,
        h: 900,
        texto: "",
        escena: "cargueroCaqueta"
    }
 ]
}, 
 expediciónBotánica1: {
    texto: "<h3>Manuel Antonio Cortés Alcocer (New Granada Expedition), “Gustavia augusta,” undated, tempera on paper, 21.5 × 15 in (54 × 37.5 cm). Archivo del Real Jardín Botánico (CSIC), Madrid, III, 2673.<h3> <a href='http://www.rjb.csic.es/icones/mutis/paginas/laminadibujo.php?lamina=5172' target='blank'><i class='fas fa-archive'></i></a><p>Una pintura de una <i>Gustavia augusta</i> muestra lo mejor del trabajo de los artistas de la expedición. El cuidadoso tratamiento de la flor, la profundidad proporcionada a las hojas y la hábil interpretación de los pétalos blancos sobre la página en blanco contribuyen a su impacto visual. Esta imagen demuestra el dominio seguro del artista de las técnicas y convenciones de la ilustración botánica europea, de las que se ha apropiado para articular una declaración artística y botánica. Capturado por el poder de la imagen, es fácil pasar por alto un detalle revelador. En el ángulo inferior izquierdo, el pintor anotó: “Cortes M. Americ pinx”. (Esto lo pintó Cortés el Americano). Otras imágenes firmadas de la expedición también llevan esta declaración. No sólo firmando su nombre sino señalando su origen, y por extensión el de la imagen y la planta, el pintor muestra cómo los artistas americanos que participaron en la expedición de Mutis se apropiaron y reinterpretaron la ilustración botánica europea</p><a href='https://libgen.is/book/index.php?md5=DCD3E7271F0869E58151FC2F12CDF16E' target='blank'><i class='fa-solid fa-file-pdf'></a>",
    imagen: "./../../imgs/img_b.png",
    escena: "mutis" 
},
expediciónBotánica2: {
    texto: "<h3>Especimen de Herbario de Gustavia augusta, enviado por Carl Gustaf Dahlberg a Carl Linnaeus desde Surinam. Linnean Society, LINN 863.1 (HerbLinn).<h3><p>Por ejemplo, la <i>Gustavia augusta</i> prensada que Linnaeus recibió de Surinam es un espécimen de herbario perfectamente bueno; sin embargo, como encarnación de una planta viva, palidece en comparación con la pintura de la misma especie del artista Manuel Antonio Cortés Alcocer, de la expedición de Nueva Granada</p><a href='https://libgen.is/book/index.php?md5=DCD3E7271F0869E58151FC2F12CDF16E' target='blank'><i class='fa-solid fa-file-pdf'></a>",
    imagen: "./../../imgs/img_c.png",
    escena: "mutis"
},
mutis: {
    texto: "<h3>José Celestino Mutis. Por: R. Cristobal, 1930.  Oleo sobre lienzo: 122 x 92.6cm</h3><h3>Epistemología visual</h3><p>Daniela Bleichmar ha acuñado el término <a href='https://www.worldcat.org/title/visible-empire-botanical-expeditions-and-visual-culture-in-the-hispanic-enlightenment/oclc/776618119' target= 'blank'>“epistemología visual”</a> para dar cuenta de la centralidad que el entrenamiento de la mirada y un cierto modo de producción de imágenes jugaron en el contexto de las expediciones científicas borbonas y de las discusiones y debates de la ilustración criolla y de la administración pública virreinal del período. En todos estos casos los actores querían, a su modo, hacer visible el imperio. En las expediciones botánicas, por ejemplo, las imágenes permitían a los historiadores naturales tener a su disposición para la clasificación taxonómica las características de los especímenes de modo más rápido y eficaz que si tuvieran el espécimen mismo, que siempre era difícil de transportar, era frágil, y podía degenerarse con el paso del tiempo. El estilo de las ilustraciones consistía en la presentación de una naturaleza idealizada que muestra las posibilidades espacio temporales de su desarrollo y que está geográficamente descontextualizada y superpuesta en una página blanca. Esto permitía la operación de acopio, apropiación, traslado, clasificación y resguardo de los ejemplares naturales del nuevo mundo. Así, la borradura de la especificidad geográfica está vinculada a una visión extractiva de la naturaleza y de la relación entre Europa y el resto del mundo, lo que implica aprovecharse de la biodiversidad andina para transportarla a los lugares de acopio en la Metrópoli.</p>",
    imagen: "./../../imgs/img11.png",
    escena: "inicio"
},
malaspina1: {
    texto: "<h3>Indio yuri e indio iquito. Anónimo, 1789-1794. Papel verjurado, Tinta, Pigmento. Aguada, Pluma. 180 mm, 245 mm. Expedición Malaspina. Museo de América, Madrid.</h3> <a href='http://ceres.mcu.es/pages/Main' target='blank'><i class='fas fa-archive'></i></a><p>Hay una serie de láminas realizadas en el contexto de la expedición Malaspina que se catalogaron como “colección Bauza” y que están ubicadas en el Museo de América en Madrid. Entre esta serie de láminas algunas se encuentran sin atribución y por los grupos indígenas y lugares geográficos que se mencionan se ha establecido que fueron elaboradas durante el paso de la expedición por el Perú. Una de las actividades que los expedicionarios hicieron en el Perú fue la de realizar una exploración de las regiones pertenecientes a las provincias de Lima, Tarma y Huánuco. En esta empresa participaron los botánicos miembros de la expedición Luis Née, Tadeo Haenke y los comisionados del virrey Gil de Taboada y Lemus Juan Tafalla y Francisco del Pulgar. Una de las mayores proezas de la exploración fue la de entrar en contacto directo con poblaciones nativas de la amazonia. La serie de láminas que venimos comentando son el testimonio iconográfico de este contacto entre las cuales se pueden encontrar representaciones de los moradores de las riberas de los ríos Napo, Pebas, Pachitea y Putumayo, entre ellos, al indio capuchino, indio llagra, indio casibo, indio chispeo, indio yuri, indio iquito, indio guagua e indio sipibo. Algunas de estas imágenes ponen juntos dos tipos de indios de una determinada región, y están acompañadas por textos explicativos. En algunos casos estos textos se refieren a la posibilidad de llevar a cabo proyectos útiles a los intereses del reino. Por otro lado, se hacen comentarios de tipo etnográfico en los que se explican modos de vestir, costumbres y señales fisiognómicas. Así mismo ocurre en otro grupo de láminas en las que se muestran los tipos humanos individuales y que tiene una inscripción en su parte inferior en la que se describe la comunidad del indio, así como el lugar que habitan. </p>",
    imagen: "./../../imgs/img_d.png",
    escena: "inicio"
},
malaspina2: {
    texto: "<h3>Indio iquito. Anónimo, 1789-1794. Papel verjurado, Tinta, Pigmento. Aguada, Pluma. 170 mm, 110 mm. Expedición Malaspina. Museo de América, Madrid.</h3><p>La atribución de estas imágenes está bajo discusión. En general se les asigna a un pintor anónimo1 y a veces se especula sobre la posibilidad de que el autor haya sido Tadeo Haenke2. Aunque todas las imágenes están en la misma colección, y tradicionalmente se ha supuesto que fueron elaboradas en el contexto de la Expedición Malaspina3, también hay quienes han establecido una diferencia de autor entre las imágenes que presentan los indios por parejas y aquellas que los presentan de modo individual. Esta diferencia de atribución se ha interpretado de modo diverso, de manera que se invierte el orden de la elaboración del modelo original: por un lado, basado en un estudio formal del estilo, la tinta y el papel utilizado, Fernando Villegas4 ha afirmado que la primera serie de imágenes no fueron elaboradas por los expedicionarios de la Expedición Malaspina sino que fueron hechas durante la exploración del gobernador Francisco Requena y el sacerdote Gribal5, y aquellos las habrían copiado6. De este modo, el segundo grupo de imágenes en el que los tipos humanos que aparecen individuales y más elaborados se habrían basado parcialmente en las primeras al tomarlas como modelos. Por su parte, Peralta Ruiz afirma lo contrario, que el parecido entre las dos series de imágenes probaría que los expedicionarios a cargo de Malaspina (Nee y Haneke) se habrían topado con Gribal y Requena y les habrían permitido a estos segundos copiar sus dibujos.</p><a href='https://pdfs.semanticscholar.org/e004/cdcc7156030dc70c428749f355ad2ba7423f.pdf' target='blank'><i class='fa-solid fa-file-pdf'></a>",
    imagen: "./../../imgs/img_e.png",
    escena: "inicio"
},
malaspina3: {
    texto: "<h3>Modo de cargar los indios a los que caminan por tierra de Quito a Napo. Anónimo, 1789-1794. Papel verjurado, Tinta, Pigmento. Aguada, Pluma. 170 mm, 115 mm. Expedición Malaspina. Museo de América, Madrid.</h3> <a href='http://ceres.mcu.es/pages/Main' target='blank'><i class='fas fa-archive'></i></a><p> La lámina del carguero que integra la colección Bauza, es la única en la que se puede encontrar a una persona 'civilizada' en la composición, además de que es la única en la que se describe más que un tipo humano, la actividad que se lleva a cabo en ese lugar. La inscripción reza 'Modo de cargar los indios a los que caminan por tierra de Quito a Napo'. Esta imagen muestra al indio cargando de un modo diferente al que se puede observar en las imágenes más conocidas de los cargueros. Como hemos mencionado, este parece ser un modo característico de cargar que tuvo lugar en lugares de frontera amazónica como Putumayo, Caquetá o la región del Napo en la frontera de Perú, Ecuador y Nueva Granada. En el caso de esta imagen, el cargado no está montando en una silla acondicionada en la espalda del carguero, sino que se encuentra montado sobre su espalda mirando hacia adelante y sujetado a unos cables que se sostienen de la cabeza y hombros del carguero y del talón del cargado, quien además se sostiene de la cabeza del carguero. </p>",
    imagen: "./../../imgs/img1.png",
    escena: "inicio"

},
cuadrodelPerú1: {
    texto: "<h3>Quadro de Historia Natural, Civil y Geográfica del Reyno del Perú. José Ignacio de Lequanda y Louis Thiébaut, 1799.  331 x 118,5 cm. Museo Nacional de Ciencias Naturales (MNCN-CSIC).</h3><a href='https://artsandculture.google.com/asset/quadro-de-historia-natural-civil-y-geogr%C3%A1fica-del-reyno-del-per%C3%BA-jos%C3%A9-ignacio-de-lequanda/igE86USP5Q1cYg?hl=es'http://ceres.mcu.es/pages/Main' target='blank'><i class='fas fa-archive'></i></a>",
    imagen: "./../../imgs/img_f.png",
    escena: "inicio"
},
cuadrodelPerú2: {
    texto: "<h3>Quadro de Historia Natural, Civil y Geográfica del Reyno del Perú. José Ignacio de Lequanda y Louis Thiébaut, 1799.  331 x 118,5 cm. Museo Nacional de Ciencias Naturales (MNCN-CSIC).</h3><a href='https://artsandculture.google.com/asset/quadro-de-historia-natural-civil-y-geogr%C3%A1fica-del-reyno-del-per%C3%BA-jos%C3%A9-ignacio-de-lequanda/igE86USP5Q1cYg?hl=es'http://ceres.mcu.es/pages/Main' target='blank'><i class='fas fa-archive'></i></a>",
    imagen: "./../../imgs/img_f.png",
    escena: "inicio" 
},
detalleCuadrodelPerú1: {
    texto: "<h3>Quadro de Historia Natural, Civil y Geográfica del Reyno del Perú. José Ignacio de Lequanda y Louis Thiébaut, 1799.  331 x 118,5 cm. Museo Nacional de Ciencias Naturales (MNCN-CSIC) (Detalle).</h3><a href='https://artsandculture.google.com/asset/quadro-de-historia-natural-civil-y-geogr%C3%A1fica-del-reyno-del-per%C3%BA-jos%C3%A9-ignacio-de-lequanda/igE86USP5Q1cYg?hl=es'http://ceres.mcu.es/pages/Main' target='blank'><i class='fas fa-archive'></i></a><p>Las imágenes también se usarán más adelante como modelos para algunas de las ilustraciones de tipos humanos que pueden encontrarse en el Quadro de Historia Natural, Civil y Geográfica del Reyno del Perú (1799) 1 pintado en Madrid por el pintor francés Luis Thiebaut y comisionado por el mismo Lecuanda quien también le proporcionó otras acuarelas que se pueden encontrar en el Trujillo del Perú, una copiosa recopilación de imágenes e información realizada por el padre Martinez Companion2, obispo de Trujillo y posteriormente de Bogotá, y, además, tío de Lecuanda3. Todos estos proyectos, documentos y actores, hacen parte de una red de interpretación de carácter ilustrado que ha estado en el centro de los estudios sobre la ilustración peruana y que han permitido a algunos historiadores de la ciencia revalorar el papel de la ciencia hispana y colonial en el contexto de ilustración europea.</p>",
    imagen: "./../../imgs/img_g.png",
    escena: "cuadrodelPerú1"
},
detalleCuadrodelPerú2: {
    texto: "<h3>Quadro de Historia Natural, Civil y Geográfica del Reyno del Perú. José Ignacio de Lequanda y Louis Thiébaut, 1799.  331 x 118,5 cm. Museo Nacional de Ciencias Naturales (MNCN-CSIC) (Detalle).</h3><a href='https://artsandculture.google.com/asset/quadro-de-historia-natural-civil-y-geogr%C3%A1fica-del-reyno-del-per%C3%BA-jos%C3%A9-ignacio-de-lequanda/igE86USP5Q1cYg?hl=es'http://ceres.mcu.es/pages/Main' target='blank'><i class='fas fa-archive'></i></a>",
    imagen: "./../../imgs/img12.png",
    escena: "cuadrodelPerú2"
},
relaciónGobierno: {
    texto: "<h3>Gil de Lemos y Taboada, Francisco, and Vallenari. “Relación de gobierno que el Exmo. Sr. frey Don Francisco Gil de Lemos y Taboada, Virrey del Perú, entrega a su succesor el Exmo. Señor de Vallenari. Año de 1796”, 1796: folio 78.</h3> <a href='https://granatensis.ugr.es/discovery/fulldisplay?docid=alma991009365349704990&context=L&vid=34CBUA_UGR:VU1&search_scope=MyInstitution&tab=Granada&lang=es' target='blank'><i class='fas fa-archive'></i></a>",
    imagen: "./../../imgs/img_h.png",
    escena: "inicio"
},
detalleRelaciónGobierno: {
    texto: "<h3>Gil de Lemos y Taboada, Francisco, and Vallenari. “Relación de gobierno que el Exmo. Sr. frey Don Francisco Gil de Lemos y Taboada, Virrey del Perú, entrega a su succesor el Exmo. Señor de Vallenari. Año de 1796”, 1796: folio 78 (Detalle).</h3><p>Estos ejemplares visuales y comentarios etnográficos sobre las tribus del amazonas peruano habrían sido relatadas por parte de Hipolito Unuane1 en el Mercurio Peruano, un periódico a cargo de la Sociedad de amigos del país, órgano de difusión de las ideas ilustradas y de la administración del virrey Gil de Taboada y Lemus. Así mismo, las imágenes en cuestión habrían sido utilizadas como modelos para ser copiadas en la relación de gobierno que el virrey  Gil de Taboada dirigió a su sucesor el Marques Osorno.2 Esta relación, concluida en 1796, fue elaborada por dos de los asesores de este gobernante, Hipólito Unanue y el contable José Ignacio de Lecuanda.</p>",
    imagen: "./../../imgs/img_h.1.png",
    escena: "relaciónGobierno" 
},
cargueroArchivo: {
    texto: "<h3>Camino por las montañas de la Provincia de Antioquia, desde su entrada que es del puerto de Juntas hasta salir a donde llaman la Sexa, y de ahí se puede andar en bestia”. Ca. 1800. Archivo General de Indias (agi), Sevilla, mp-Estampas, 257</h3>",
    imagen: "./../../imgs/img2.png",
    escena: "inicio"
},
villaneroMira: {
    texto: "<h3>Passage du Quindiu dans le Cordillère des Andes. Alexander von Humboldt y Aimé Bonpland, Vues des Cordillères et Monuments des Peuples Indigènes de l’Amérique (París: F. Schoell, 1810). Lámina V. (Detalle)</h3><p>Humboldt conocía todo este material visual. Así mismo se relacionó con muchos de los actores de esta red, y estaba al tanto de la sensibilidad de los americanos con respecto a su espacialidad vertical. Cuando se detuvo en Madrid en 1799 para tramitar su permiso para ir a América, Humboldt pudo conocer de primera mano el ambiente científico del lugar. Esto le permitió tener acceso al conocimiento que se había producido sobre el Nuevo Mundo. Vale la pena resaltar que esto incluye de modo especial los resultados de las diferentes expediciones científicas borbónicas de las que ya hemos tenido la oportunidad de hablar.</p>",
    imagen: "./../../imgs/img4.1.png",
    escena: "pasoQuindio"
},
pasoQuindio: {
    texto: "<h3>Passage du Quindiu dans le Cordillère des Andes. Alexander von Humboldt y Aimé Bonpland, Vues des Cordillères et Monuments des Peuples Indigènes de l’Amérique (París: F. Schoell, 1810). Lámina V</h3><p>Todas estas imágenes de cargueros que aparecen en las ilustraciones de Historia Natural del imperio hispánico a finales del siglo XVIII permiten delinear un contexto en el que la escena del encuentro de Humboldt con el carguero se hace legible. En primer lugar, porque nos muestra que es necesario matizar la idea de que la imagen V de Vues de Humboldt es el origen de la iconografía del carguero. La de Humboldt fue una más de las representaciones de cargueros hechas por los exploradores científicos de la metrópoli y criollos, administradores virreinales y artistas criollos que estuvieron por aquel entonces en el territorio americano. Por extensión, también nos muestra que existía un animado ambiente de controversias, préstamos, uso de copias y elaboraciones de propuestas acerca de cómo representar la naturaleza americana. Esto se deriva a su vez de un animado ambiente de discusiones sobre de la posición de la Naturaleza americana en el contexto internacional en el que los diferentes actores de ciencia imperial hispana tenían claro que uno de sus potenciales se derivaba de la biodiversidad posibilitada por la verticalidad andina. Sin negar la importancia de la figura histórica de Humboldt, notamos que tiene sentido la postura que afirma que este se tuvo que haber visto afectado por estas redes intelectuales americanas que le sirvieron de influjo para la formulación de sus teorías acerca de la fitogeografía y para formular sus concepciones acerca del microcosmos vertical andino. Además, permite formular la hipótesis de que este debate también tiene manifestaciones estéticas y visuales. Algunas de las propuestas para la representación visual de la naturaleza hechas por Humboldt descansan en principios que se estaban discutiendo y tomando en cuenta por los diferentes actores de la ilustración científica de la historia natural hispana, tales como la especificidad geográfica, la contextualización de la biodiversidad y en especial, la cartografía vertical como la de Francisco José de Caldas. El reconocimiento de estos puntos no quiere decir en modo alguno que las posturas de Humboldt sobre todos estos temas no fueran innovadoras.</p>",
    imagen: "./../../imgs/img4.png",
    escena: "inicio"
},
cargueroPutumayo: {
    texto: "<h3>El Tabillo: Maniére dont les voyageurs sont portés á dos d’homme dans les envirous de Pasto. Magasin Pittoresque 16 (1848)</h3>",
    imagen: "./../../imgs/img13.png",
    escena: "inicio"
},
cargueroMestizaje: {
    texto: "<h3>Vicente Albán, Yndio Yumbo de Maynas con su Carga, 1783, óleo sobre lienzo, 31.5 × 43 in (80 × 109 cm). Museo de América, Madrid.</h3>",
    imagen: "./../../imgs/img_j.png",
    escena: "inicio"
},
cargueroCaqueta: {
    texto: "<h3>Mi escribiente pasando una quebrada a espaldas de su peón carguero, 1873. Acuarela sobre papel gris. 18 x 15 cm. José María Gutiérrez de Alba. Impresiones de un viaje a América. Tomo IX. Excursión al Caquetá. Del 28 de enero al 26 de mayo de 1873.</h3>",
    imagen: "./../../imgs/img14.png",
    escena: "inicio"
} 
}

A.fijarEscenas(escenas).probarEscenas().iniciarAventura("inicio");