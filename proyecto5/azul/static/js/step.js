// window.addEventListener("resize", function (event) {
//   if (window.innerWidth <= 1366 && window.innerHeight <= 768) {
//     document.body.style.zoom = "100%";
//   } else if (window.innerWidth <= 1920 && window.innerHeight <= 1080) {
//     document.body.style.zoom = "150%";
//   }
// });
// window.onload = function () {
//   // Comprobamos si la resolución es de 1920 x 1080
//   if (screen.width === 1920 && screen.height === 1080) {
//     document.body.style.zoom = "150%"; // Establecemos el zoom al 150%
//   }
// };

const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
const main3 = document.getElementById("main3");
const main4 = document.getElementById("main4");
const main5 = document.getElementById("main5");
const img9 = document.getElementById("img-9");
const papelera = document.getElementById("papelera");
const img10 = document.getElementById("img-10");
const img11 = document.getElementById("img-11");
const c1Img11 = document.getElementById("cont2-img-11");
const c2Img11 = document.getElementById("cont3-img-11");
const escudo = document.getElementById("escudo");
const texto = document.getElementById("texto");
const contenedorEscudo2 = document.getElementById("contenedor-escudo2");
const contenedortexto = document.getElementById("contenedor-texto");
const barraEscudo = document.getElementById("barra-escudo");
const barraTexto = document.getElementById("barra-texto");
const contenedorImg6 = document.getElementById("contenedor-img-6");
const notificaciones = document.getElementById("notificaciones");
const notificaciones2 = document.getElementById("notificaciones2");
const contenedor2Img10 = document.getElementById("contenedor2-img-10");
const contenedor3Img10 = document.getElementById("contenedor3-img-10");
const salirImg10 = document.getElementById("salir-img-10");
const containerEncriptados = document.getElementById("containerEncriptados");
let bandera = true;
let bandera2 = true;
let bandera3 = true;
let bandera4 = true;
let bandera5 = false;
let bandera6 = false;
let bandera7 = true;
let bandera8 = true;
let bandera9 = true;
let bandera10 = true;

const showImage1 = () => {
  main1.style.display = "none";
  main2.style.display = "block";
  setTimeout(() => {
    main2.style.display = "none";
    main3.style.display = "block";
  }, 1000);
  // 4000

  setTimeout(() => {
    main3.style.display = "none";
    main4.style.display = "block";
  }, 1000);
  // 7000
};
const showImage2 = () => {
  main2.style.display = "none";
  main3.style.display = "block";
};
const showImage3 = () => {
  main3.style.display = "none";
  main4.style.display = "block";
};
function actualizarHora() {
  const fechaActual = new Date();
  document.getElementById("fecha").innerHTML = fechaActual.toLocaleString();
}

actualizarHora();
setInterval(actualizarHora, 1000);

function actualizarHora2() {
  const fechaActual2 = new Date();
  document.getElementById("fecha2").innerHTML = fechaActual2.toLocaleString();
}

actualizarHora2();
setInterval(actualizarHora2, 1000);

img9.onmouseover = function () {
  img9.classList.remove("img-9");
  img9.classList.add("img-9-cambiado");
};

img9.onmouseout = function () {
  img9.classList.remove("img-9-cambiado");
  img9.classList.add("img-9");
};

papelera.onmouseover = function () {
  papelera.classList.remove("papelera");
  papelera.classList.add("papelera-cambiado");
};

papelera.onmouseout = function () {
  papelera.classList.remove("papelera-cambiado");
  papelera.classList.add("papelera");
};
// Mostrar el menu de inicio de main4
const showImage5 = () => {
  if (bandera2 == true) {
    img11.style.display = "block";
    c1Img11.classList.add("cont2-img-11");
    c2Img11.classList.add("cont3-img-11");
    bandera2 = false;
  } else if (bandera2 == false) {
    img11.style.display = "none";
    c1Img11.classList.remove("cont2-img-11");
    c2Img11.classList.remove("cont3-img-11");
    bandera2 = true;
  }
};
// Apaga Máquina main 4
const showImage6 = () => {
  main1.style.display = "flex";
  main4.style.display = "none";
  img11.style.display = "none";
  bandera2 = true;
};
const showImage17 = () => {
  alert("No apague la máquina");
};
// Reinicia Máquina main 5
const showImage7 = () => {
  main4.style.display = "none";
  main2.style.display = "flex";
  setTimeout(() => {
    main2.style.display = "none";
    main3.style.display = "block";
  }, 4000);
  setTimeout(() => {
    main3.style.display = "none";
    main4.style.display = "block";
  }, 7000);
  img11.style.display = "none";
  bandera2 = true;
};
escudo.onmouseover = function () {
  escudo.classList.remove("escudo");
  escudo.classList.add("escudo-cambiado");
};
escudo.onmouseout = function () {
  escudo.classList.remove("escudo-cambiado");
  escudo.classList.add("escudo");
};
texto.onmouseover = function () {
  texto.classList.remove("texto");
  texto.classList.add("texto-cambiado");
};
texto.onmouseout = function () {
  texto.classList.remove("texto-cambiado");
  texto.classList.add("texto");
};
// Mostra el escudo del cesmag
const showImage8 = () => {
  if (bandera3 == true) {
    contenedorEscudo2.style.display = "block";
    bandera3 = false;
    if (bandera5 == false) {
      bandera5 = true;
      barraCambioE();
    }
  } else if (bandera3 == false) {
    contenedorEscudo2.style.display = "none";
    bandera3 = true;
  }
};
// oculta el escudo
const showImage9 = () => {
  contenedorEscudo2.style.display = "none";
  barraEscudo.style.display = "none";
  bandera3 = true;
  bandera5 = false;
};
// quita el estudo barra
const barraCambioE = () => {
  if (bandera6 == true) {
    barraEscudo.style.marginLeft = "120px";
    barraEscudo.style.display = "block";
    if (parseInt(barraTexto.style.marginLeft) === 120) {
      barraEscudo.style.marginLeft = "60px";
      barraEscudo.style.display = "block";
    }
  } else if (bandera6 == false) {
    barraEscudo.style.marginLeft = "60px";
    barraEscudo.style.display = "block";
  }
};
// Mostra el text del escritorio
const showImage10 = () => {
  if (bandera4 == true) {
    contenedortexto.style.display = "block";
    bandera4 = false;
    if (bandera6 == false) {
      bandera6 = true;
      barraCambioT();
    }
  } else if (bandera4 == false) {
    contenedortexto.style.display = "none";
    bandera4 = true;
  }
};
// ocultar el text
const showImage11 = () => {
  contenedortexto.style.display = "none";
  barraTexto.style.display = "none";
  bandera4 = true;
  bandera6 = false;
};
// quita texto de la barra
const barraCambioT = () => {
  if (bandera5 == true) {
    barraTexto.style.marginLeft = "120px";
    barraTexto.style.display = "block";
    if (parseInt(barraEscudo.style.marginLeft) === 120) {
      barraTexto.style.marginLeft = "60px";
      barraTexto.style.display = "block";
    }
  } else if (bandera5 == false) {
    barraTexto.style.marginLeft = "60px";
    barraTexto.style.display = "block";
  }
};
barraEscudo.onmouseover = function () {
  barraEscudo.classList.remove("barra-escudo");
  barraEscudo.classList.add("barra-escudo-cambiado");
};
barraEscudo.onmouseout = function () {
  barraEscudo.classList.remove("barra-escudo-cambiado");
  barraEscudo.classList.add("barra-escudo");
};
barraTexto.onmouseover = function () {
  barraTexto.classList.remove("barra-texto");
  barraTexto.classList.add("barra-texto-cambiado");
};
barraTexto.onmouseout = function () {
  barraTexto.classList.remove("barra-texto-cambiado");
  barraTexto.classList.add("barra-texto");
};
contenedorImg6.onmouseover = function () {
  contenedorImg6.classList.remove("contenedor-img-6");
  contenedorImg6.classList.add("contenedor-img-6C");
};
contenedorImg6.onmouseout = function () {
  contenedorImg6.classList.remove("contenedor-img-6C");
  contenedorImg6.classList.add("contenedor-img-6");
};
// Mostrar notificaciones
const showImage12 = () => {
  if (bandera7 == true) {
    notificaciones.style.display = "block";
    bandera7 = false;
  } else if (bandera7 == false) {
    notificaciones.style.display = "none";
    bandera7 = true;
  }
};
const showImage16 = () => {
  if (bandera8 == true) {
    notificaciones2.style.display = "block";
    bandera8 = false;
  } else if (bandera8 == false) {
    notificaciones2.style.display = "none";
    bandera8 = true;
  }
};
// Mostar el ejecutable
const showImage4 = () => {
  if (bandera == true) {
    img10.style.display = "block";
    contenedor2Img10.classList.add("contenedor2-img-10");
    contenedor3Img10.classList.add("contenedor3-img-10");
    salirImg10.classList.add("salir-img-10");
    bandera = false;
  } else if (bandera == false) {
    img10.style.display = "none";
    contenedor2Img10.classList.remove("contenedor2-img-10");
    contenedor3Img10.classList.remove("contenedor3-img-10");
    salirImg10.classList.remove("salir-img-10");
    bandera = true;
  }
};
// Letra que escribe en el jigsaw
let myString =
  "Los archivos de tu ordenador han sido encriptados. Tus fotos, vídeos, documentos, etc.... Pero, ¡no te preocupes! No los he borrado, todavía.Usted tiene 24 horas para pagar 150 USD en Bitcoins para obtener la clave de descifrado. Cada hora los archivos serán borrados. Aumentando en cantidad cada vez. Después de 72 horas todos los que queden serán borrados. Si no tienes bitcoins busca en Google la web localbitcoins.Compra 150 dólares americanos en Bitcoins o 4 BTC. El sistema aceptará el envío a la dirección de Bitcoins especificada.A los dos minutos de recibir el pago su ordenador recibirá el descifrado. Intente algo raro y el ordenador tiene varias medidas de seguridad para borrar su información.Tan pronto como se reciba el pago los archivos cifrados volverán a la normalidad.Gracias";
let myArray = myString.split("");
let loopTimer;

function frameLooper() {
  if (myArray.length > 0) {
    document.getElementById("letraSaw").innerHTML += myArray.shift();
  } else {
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout("frameLooper()", 80);
}
// Este es el ejecutable del jigsaw
const showImage13 = () => {
  let countdown = 60 * 60 * 1000; // 60 minutes
  let timerId = setInterval(function () {
    countdown -= 1000;
    let min = Math.floor(countdown / (60 * 1000));
    let sec = Math.floor((countdown - min * 60 * 1000) / 1000);
    document.getElementById("timer").innerHTML = min + ":" + sec + "";
    if (countdown <= 0) {
      clearInterval(timerId);
      alert("Time is up!");
    }
  }, 1000);

  frameLooper();
  //mostra el main4
  main4.style.display = "none";
  main5.style.display = "block";
};
const showImage14 = () => {
  img10.style.display = "none";
  bandera = true;
};
const showImage15 = () => {
  img10.style.display = "none";
  bandera = true;
};
const showImage18 = () => {
  containerEncriptados.style.display = "flex";
};
const showImage19 = () => {
  containerEncriptados.style.display = "none";
};
