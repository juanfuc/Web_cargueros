let A = new Aventura("es", {typewriterSpeed:0, defaultCSS: false});

let escenas = {
  inicio: { 
  texto:"Montaje de Cargueros",
  imagen:"./imgs/montaje1.png",

  // opciones: [
  //   {
  //     btn:"Malaspina",
  //     texto:"A finales del siglo XVIII la expedición Malaspina estuvo en Perú. Sus exploradores se adentraron en la frontera amazónica e hicieron unos dibujos que hoy son conocidos como la colección Bauza. Se pueden encontrar en el Museo de América en Madrid",
  //     escena:"coleccionBauza"
  //   },
  //   {
  //     btn:"Humboldt",
  //     texto:"El carguero del paso del Quindío. Humboldt",
  //     escena:"cargueroHumboldt"  
  //   }
  // ],
  areas: [
   { 
    x: 260,
    y: 211,
    w: 194,
    h: 120,
    texto: "",
    escena: "cargueroPrehispánico"
  },
  {
    x: 480,
    y: 152,
    w: 166,
    h: 250,
    texto:"",
    escena: "expediciónBotánica"
  },
  {
    x:820,
    y:186,
    w:360,
    h:238,
    texto: "",
    escena: "cargueroVirreinalNG"
  },
  {
    x:1180,
    y:172,
    w:284,
    h:200,
    texto:"",
    escena: "geografíadelasPlantas"
  },
  {
    x: 1494,
    y: 216,
    w: 254,
    h: 334,
    texto: "",
    escena: "ciegoyParalítico"
  },
  {
    x: 256,
    y: 580,
    w: 280,
    h: 370,
    texto: "",
    escena: "coleccionBauza"
  },
  {
    x: 860,
    y: 596,
    w: 750,
    h: 520,
    texto: "",
    escena: "cargueroHumboldt"
  },
  {
    x: 1354,
    y: 494,
    w: 190,
    h: 194,
    texto: "",
    escena: "cargueroChino"
  },
  {
    x: 1345,
    y: 730,
    w: 114,
    h: 235,
    texto: "",
    escena: "cargueroQuadrodelPeru"
  },
  {
    x: 1550,
    y: 530,
    w: 132,
    h: 210,
    texto: "",
    escena: "carguerodelaMetropoli"
  },
  {
    x: 275,
    y: 1062,
    w: 390,
    h: 288,
    texto: "",
    escena: "cargueroPinturasdeMestizaje"
  },
  {
    x: 690,
    y: 1052,
    w: 198,
    h: 288,
    texto: "",
    escena: "VillaneroMira"
  },
  {
    x: 930,
    y: 1052,
    w: 130,
    h: 288,
    texto: "",
    escena: "fique"
  },
  {
    x: 1245,
    y: 1062,
    w: 332,
    h: 286,
    texto: "",
    escena: "saturdayMagazine"
  },
  {
    x: 1532,
    y: 916,
    w: 168,
    h: 224,
    texto: "",
    escena: "cargueroSátira"
  }
  ]
  },
  coleccionBauza: {
    texto:"El carguero de la expedición Malaspina",
    imagen: "./imgs/img1.png",
    escena: "inicio"
   },
   cargueroHumboldt:{
     texto: "El carguero Villanero",
     imagen: "./imgs/img4.png",
     escena: "inicio"
  },
  cargueroPrehispánico: {
    texto: "Carguero Prehispánico",
    imagen: "./imgs/img_a.png",
    escena: "inicio" 
  },
  expediciónBotánica: {
    texto: "Expedición Botánica",
    imagen: "./imgs/img_b.png",
    escena: "inicio"
  },
  cargueroVirreinalNG: {
    texto: "Carguero en archivo virreinal",
    imagen: "./imgs/img2.png",
    escena: "inicio"
  },
  geografíadelasPlantas: {
    texto: "Tabla física. Geografía de las Plantas",
    imagen: "./imgs/img_m.png",
    escena: "inicio"
  },
  ciegoyParalítico: {
    texto: "Fábula del ciego y el paralítico",
    imagen: "./imgs/img_r.png",
    escena: "inicio"
  },
  cargueroChino: {
    texto: "Carguero Chino",
    imagen: "./imgs/img9.png",
    escena: "inicio" 
  },
  cargueroQuadrodelPeru: {
    texto: "Carguero del Quadro del Perú",
    imagen: "./imgs/img_f.png",
    escena: "detalleCargueroQuadrodelPeru"
  },
  detalleCargueroQuadrodelPeru: {
    texto: "Detalle Carguero del Quadro del Perú",
    imagen: "./imgs/img_i.png",
    escena: "inicio"
  },
  carguerodelaMetropoli: {
    texto: "Carguero de la Metropoli (Paris)",
    imagen: "./imgs/img8.png",
    escena: "inicio"
  },
  cargueroPinturasdeMestizaje: {
    texto: "Carguero Pinturas de Mestizaje",
    imagen: "./imgs/img_j.png",
    escena: "inicio"
  },
  VillaneroMira: {
    texto: "El carguero Villanero mira al observador",
    imagen: "./imgs/img4.1.png",
    escena: "inicio"
  },
  fique: {
    texto: "Fique",
    imagen: "./imgs/img4.2.png",
    escena: "inicio"
  },
  saturdayMagazine: {
    texto: "Carguero de Humboldt en el Saturday Magazine 1838",
    imagen: "./imgs/img5.png",
    escena: "inicio"
  },
  cargueroSátira: {
    texto: "Caricatura de un miembro de la élite estadounidense cargando a diferentes personas racializadas de clases subalternas. 1868",
    imagen: "./imgs/img_t.png",
    escena: "inicio"
  } 
}

A.fijarEscenas(escenas).probarEscenas().iniciarAventura("inicio");