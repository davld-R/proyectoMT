const image0 = document.getElementById("imagen0");
const image1 = document.getElementById("imagen1");
const image2 = document.getElementById("imagen2");
const image3 = document.getElementById("imagen3");
const image4 = document.getElementById("imagen4");
const image5 = document.getElementById("imagen5");
let isActive = true;
let isActive2 = true;

const power = () => {
  image0.style.display = "none";
  image1.style.display = "block";
  setTimeout(() => {
    image1.style.display = "none";
    image2.style.display = "block";
  }, 3000);
  // 3000

  setTimeout(() => {
    image2.style.display = "none";
    image3.style.display = "block";
    cambiaClase();
  }, 5000);
  // 5000
};

const showImage = () => {
  image3.style.display = "relative";
  image4.style.position = "absolute";
  image4.style.top = "35%";
  image4.style.left = "37%";
  if (isActive == true) {
    image4.style.display = "block";
    isActive = false;
  } else if (isActive == false) {
    image4.style.display = "none";
    isActive = true;
  }
};

const showImage2 = () => {
  image3.style.display = "relative";
  image5.style.position = "absolute";
  image5.style.top = "35%";
  image5.style.left = "37%";
  if (isActive2 == true) {
    image5.style.display = "block";
    isActive2 = false;
  } else if (isActive2 == false) {
    image5.style.display = "none";
    isActive2 = true;
  }
};

const ejecutar = () => {
  alert("Hola desde ejecutar");
};

const cancelar = () => {
  alert("Hola desde cancelar");
};

const apagar = () => {
  image3.style.display = "none";
  image5.style.display = "none";
  image0.style.display = "block"
};

const reset = () => {
  image3.style.display = "none";
  image5.style.display = "none";
  image0.style.display = "none";
  image1.style.display = "block";
  setTimeout(() => {
    image1.style.display = "none";
    image2.style.display = "block";
  }, 3000);
  // 3000

  setTimeout(() => {
    image2.style.display = "none";
    image3.style.display = "block";
    cambiaClase();
  }, 5000);
  // 5000
};

function desvanecer() {
  setTimeout(() => {
    image4.style.display = "none";
  }, 3000);
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
