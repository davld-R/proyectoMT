const contenedorOpciones = document.getElementById("contenedorOpciones");
const difuminarPC = document.getElementById("difuminarPC");
let semaforo = true;
let semaforo1 = true;

const contenedorCPU = document.getElementById("contenedorCPU");

const mostrarCPU = () => {
  if (semaforo1 == true) {
    contenedorOpciones.style.display = "flex";
    semaforo1 = false;  
  } else if(semaforo1 == false) {
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

const contenedorDifuminar = document.getElementById("contenedorDifuminar");

const mostrarEYE = () => {
  if (semaforo == true) {
    contenedorDifuminar.style.display = "block";
    semaforo = false;
  } else if (semaforo == false) {
    contenedorDifuminar.style.display = "none";
    semaforo = true;
  }
};
const cerrarDifuminar = () => {
  contenedorDifuminar.style.display = "none";
  semaforo = true;
};
