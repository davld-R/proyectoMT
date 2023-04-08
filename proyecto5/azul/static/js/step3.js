const audio = new Audio("/media/img/mouse.mp3");
const contenedorOpciones = document.getElementById("contenedorOpciones");
const difuminarPC = document.getElementById("difuminarPC");
let semaforo1 = true;
const contenedorDifuminar = document.getElementById("contenedorDifuminar");
const contenedorCPU = document.getElementById("contenedorCPU");

const mostrarCPU = () => {
  audio.play();
  if (semaforo1 == true) {
    contenedorOpciones.style.display = "flex";
    semaforo1 = false;
  } else if (semaforo1 == false) {
    contenedorOpciones.style.display = "none";
    semaforo1 = true;
  }
};

contenedorCPU.onmouseover = function () {
  contenedorCPU.classList.remove("contenedorCPU");
  contenedorCPU.classList.add("contenedorCPUCambio");
};
contenedorCPU.onmouseout = function () {
  contenedorCPU.classList.remove("contenedorCPUCambio");
  contenedorCPU.classList.add("contenedorCPU");
};

const mostrarEYE = () => {
  audio.play();
  contenedorDifuminar.style.display = "block";
};
const cerrarDifuminar = () => {
  audio.play();
  contenedorDifuminar.style.display = "none";
};

document.getElementById("contenedorBotonIR").onclick = function () {
  audio.play();
};
