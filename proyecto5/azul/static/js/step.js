// const image0 = document.getElementById("imagen0");
// const image1 = document.getElementById("imagen1");
// const image2 = document.getElementById("imagen2");
// const image3 = document.getElementById("imagen3");
// const image4 = document.getElementById("imagen4");
// const image5 = document.getElementById("imagen5");
// const image6 = document.getElementById("imagen6");
// const image7 = document.getElementById("imagen7");
// const image8 = document.getElementById("imagen8");
// let isActive = true;
// let isActive2 = true;
// console.log("hola");
// const power = () => {
//   image0.style.display = "none";
//   image1.style.display = "block";
//   setTimeout(() => {
//     image1.style.display = "none";
//     image2.style.display = "block";
//   }, 3000);

//   setTimeout(() => {
//     image2.style.display = "none";
//     image3.style.display = "block";
//     cambiaClase();
//   }, 5000);
// };

// const showImagez = () => {
//   if (isActive == true) {
//     image4.style.display = "block";
//     isActive = false;
//   } else if (isActive == false) {
//     image4.style.display = "none";
//     isActive = true;
//   }
// };

// const showImage2z = () => {
//   if (isActive2 == true) {
//     image5.style.display = "block";
//     isActive2 = false;
//   } else if (isActive2 == false) {
//     image5.style.display = "none";
//     isActive2 = true;
//   }
// };

// const ejecutar = () => {
//   image4.style.display = "none";
//   image6.src = "/media/img/6.gif";
//   image6.style.display = "block";

//   function desvanecer() {
//     setTimeout(() => {
//       image6.style.display = "none";
//       image3.style.display = "none";
//       image7.style.display = "block";
//     }, 6000);
//   }

//   function desvanecer2() {
//     setTimeout(() => {
//       image8.style.display = "block";
//     }, 7000);
//   }

//   desvanecer();
//   desvanecer2();
// };

// const cancelar = () => {
//   image4.style.display = "none";
// };

// const apagar = () => {
//   image3.style.display = "none";
//   image5.style.display = "none";
//   image0.style.display = "block";
// };

// const reset = () => {
//   image3.style.display = "none";
//   image5.style.display = "none";
//   image0.style.display = "none";
//   power();
// };

const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
const main3 = document.getElementById("main3");
const main4 = document.getElementById("main4");
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
let bandera = true;
let bandera2 = true;
let bandera3 = true;
let bandera4 = true;

const showImage1 = () => {
  main1.style.display = "none";
  main2.style.display = "block";
};
const showImage2 = () => {
  main2.style.display = "none";
  main3.style.display = "block";
};
const showImage3 = () => {
  main3.style.display = "none";
  main4.style.display = "block";
};
const showImage4 = () => {
  if (bandera == true) {
    img10.style.display = "block";
    bandera = false;
  } else if (bandera == false) {
    img10.style.display = "none";
    bandera = true;
  }
};

function actualizarHora() {
  const fechaActual = new Date();
  document.getElementById("fecha").innerHTML = fechaActual.toLocaleString();
}

actualizarHora();
setInterval(actualizarHora, 1000);

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
// Apaga Máquina
const showImage6 = () => {
  alert("Apagar")
}
// Reinicia Máquina
const showImage7 = () => {
  alert("Reiniciar")
}
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
  } else if (bandera3 == false) {
    contenedorEscudo2.style.display = "none";
    bandera3 = true;
  }
}
// oculta el escudo
const showImage9 = () => {
  contenedorEscudo2.style.display = "none";
  bandera3 = true;
}
// Mostra el text del escritorio
const showImage10 = () => {
  if (bandera4 == true) {
    contenedortexto.style.display = "block";
    bandera4 = false;
  } else if (bandera4 == false) {
    contenedortexto.style.display = "none";
    bandera4 = true;
  }
}
const showImage11 = () => {
  contenedortexto.style.display = "none";
    bandera4 = true;
}


// let mostrarImagenClic = () => {
//   image3.style.display = "relative";
//   image4.style.position = "absolute";
//   image4.style.top = "50px";
//   image4.style.left = "50%";
//   image4.style.display = "block";
//   desvanecer();
//   return image4, image3;
// };

// Esta funcion sirve para cambiar una etiqueta
// function cambiaClase() {
//   image3.classList.add("text-center");
// }

// function mostrarImagenClic() {
//   image4.style.display = "block";
//   image3.style.display = "none";

// }

// function cambiarImagen() {
//   let imagen = event.target; //obtiene la imagen que se hizo clic
//   let imagenActual = imagen.src; //obtiene la fuente de la imagen actual
//   let imagenSiguiente = ""; //inicializa la variable para la fuente de la siguiente imagen

//   if (imagenActual.includes("imagen1")) {
//     imagenSiguiente = "imagen2.jpg";
//   } else if (imagenActual.includes("imagen2")) {
//     imagenSiguiente = "imagen3.jpg";
//   } else if (imagenActual.includes("imagen3")) {
//     imagenSiguiente = "imagen1.jpg";
//   }

//   imagen.src = imagenSiguiente; //cambia la fuente de la imagen por la de la siguiente imagen
// }

// img1.addEventListener("click", function () {
//   img1.style.height = "";
//   img2.style.display = "block";
// });
// img2.addEventListener("click", function () {
//   img2.style.display = "none";
//   img3.style.display = "block";
// });

// let config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     scene: {
//         preload: preload,
//         create: create,
//         update: update
//     }
// };

// let game = new Phaser.Game(config);

// function preload ()
// {
//     this.load.image('sky', '/media/img/1.png');
// }
// // assets/skies/space3.png

// function create ()
// {
//     this.add.image(400, 300, 'sky');
// }
// function update ()
// {

// }
