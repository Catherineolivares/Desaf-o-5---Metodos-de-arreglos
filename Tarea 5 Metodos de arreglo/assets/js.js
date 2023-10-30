//0 declaras el array con 3 elementos
let listaTareas = [
  { id: 0, descripcion: "Comprar pan", terminado: false },
  { id: 1, descripcion: "Comprar leche", terminado: false },
  { id: 2, descripcion: "Comprar huevos", terminado: false },
];
let id = listaTareas.length;
let terminados = Array();
const contenedor2 = document.querySelector(".contenedor2");

//1)  CAPTURAR EL ELEMENTO INPUT --
const inputTarea = document.querySelector(".inputTarea");

//2) CAPTURAR EL BOTON AGREGAR
const botonAgregar = document.querySelector(".boton");

//3) CAPTURAR EL DIV CONTENEDOR DE TAREA
const contenedor = document.querySelector(".contenedor");

//4) AGREGAR UN EVENTO CLICK
botonAgregar.addEventListener("click", agregarTarea);

//5) CREAR UNA FUNCION QUE NOS PERMITA AGREGAR LA TAREA

function agregarTarea() {
  //CAPTURAR EL VALOR DE LA TAREA
  const descripcion = inputTarea.value;

  // CREAR EL OBJETO TAREA
  const tarea = { id: id, descripcion: descripcion, terminado: false };

  // AGREGAR LA TAREA A LA LISTA

  //SUMARLE 1 AL ID PAR AEL SIGUIENTE
  id++;

  //LIMPIAR EL INPUT
  inputTarea.value = "";
  // agregamos al array
  listaTareas.push(tarea);

  //LLAMAMOS A NUESTRA FUNCION DE MOSTRAR HTML
  mostrarListaHTML();
}

function mostrarListaHTML() {
  //LIMPIO EL HTML DEL CONTENDOR
  contenedor.innerHTML = "";
  //ITERO LA LISTA
  listaTareas.forEach((tarea) => {
    // CREAR UNA TARJETA CON LA TAREA
    contenedor.innerHTML += `<tr>
    <td>${tarea.id}</td>
    <td>${tarea.descripcion}</td>
    <td><input type="checkbox" id="${tarea.id}" ${
      tarea.terminado ? "checked" : ""
    }></td>
    <td><button name="borrar" id="${tarea.id}">Borrar</button></td>
    </tr>`;
  });
  contenedor2.innerHTML =
    "<h2>Contador de tareas :" +
    listaTareas.length +
    " - Terminadas: " +
    terminados.length +
    "</h2>";
}

// PODER BORRAR UNA TARJETA --> FUNCION PARA BORRAR || EL EVENTO
// PODER MODIFICAR UNA TARJETA --> FUNCION PARA MODIFICAR || EL EVENTO
function borrarTarea(id) {
  const newArray = listaTareas.filter((tarea) => tarea.id !== id);
  listaTareas = newArray;
  id--;
  console.log(id);
  mostrarListaHTML();
}
function chequearTarea(id) {
  //EJEMPLO DE REVERTIR EL BOOLEANO
  // let llueve = true;
  // llueve = !llueve true -> !true -> false
  //ENCONTRAR LA TAREA
  const index = listaTareas.findIndex((tarea) => tarea.id === id);
  //CAMBIAR EL CHECK (BOOLEANO) AL CONTRARIO DE LO QUE ESTO;
  listaTareas[index].terminado = !listaTareas[index].terminado;
  terminados = listaTareas[index].terminado;
  // contar elementros true en listaTareas
  terminados = listaTareas.filter((tarea) => tarea.terminado === true);
  console.log(terminados.length);
}

document.addEventListener("click", (e) => {
  if (e.target.name === "borrar") {
    borrarTarea(parseInt(e.target.id));
    mostrarListaHTML();
  }

  // cuenta terminados son los que estan en true
  if (e.target.type === "checkbox") {
    chequearTarea(parseInt(e.target.id));
    mostrarListaHTML();
  }
});

mostrarListaHTML();

