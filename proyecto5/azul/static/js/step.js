const image1 = document.getElementById("imagen1");
const image2 = document.getElementById("imagen2");
const image3 = document.getElementById("imagen3");
const image4 = document.getElementById("imagen4");

setTimeout(() => {
  image1.style.height = "";
  image1.style.display = "none";
  image2.style.display = "block";
}, 3000);

setTimeout(() => {
  image2.style.display = "none";
  image3.style.display = "block";
}, 5000);

let mostrarImagenClic = () => {
  image4.style.display = "block";
  image3.style.display = "none";
  return image4, image3;
};
 
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
