tareaInput = document.querySelector("#ingresartarea");
btntarea = document.querySelector("#btnagregar");
ultarea = document.querySelector("#listarea");
tareaInput = document.querySelector("#ingresartarea");
btntarea = document.querySelector("#btnagregar");
ultarea = document.querySelector("#listarea");
subtitulo = document.querySelector("#subtittle")
subtitulo.style.marginTop = "1rem";
subtitulo.style.marginLeft = "2rem";
tareaInput.style.width = "25rem";
tareaInput.style.marginLeft = "2rem";
tareaInput.style.marginTop = "1.5rem"
tareaInput.style.width = "25rem";
tareaInput.style.height = "2rem";
btntarea.style.width = "5rem";
btntarea.style.height = "2.3rem";
btntarea.style.backgroundColor = "green";
btntarea.style.color = "white";
btntarea.style.fontSize = "1.1rem";
btntarea.style.borderRadius = "5%";
resultado = document.querySelector("#resulTotal");
resultado.style.marginTop = "5.5rem";
totaltareasRealizadas = document.querySelector("#tareasRealizada");
const tareas = [
    { id: 1, descripcion: "Compras de Super Mercado", completada: false },
    { id: 2, descripcion: "Llevar a sami al Pediatra", completada: false },
    { id: 3, descripcion: "Comprar Plantas para el living", completada: false },
    { id: 4, descripcion: "Llevar las cobija a la Lavanderia", completada: false },
    { id: 5, descripcion: "Ir al salon de Belleza", completada: false },

];
let contador = 6;
let sumarTareaRaalizadas = 0;
contarTareas()
pintar();

btntarea.addEventListener("click", () => {
    const tareaDescripcion = tareaInput.value.trim();

    if (tareaDescripcion === "") {
        alert("Por favor, ingresa una tarea válida.");

    } else {

        const nuevoTarea = { id: contador++, descripcion: tareaInput.value, completada: false }
        tareas.push(nuevoTarea)
        tareaInput.value = ""
        contarTareas();
        pintar();
    }
});

function pintar() {
    let html = ""
    for (listarea of tareas) {
        html += `<li> <button onclick="borrar(${listarea.id})"> X </button> <input type="checkbox" onclick='handleClick(this,${listarea.id})' id="${listarea.id}" ${listarea.completada ? 'checked' : ''}> ${listarea.id} ${listarea.descripcion}</li>`;
    }
    ultarea.innerHTML = html;
}

function handleClick(cb, id) {
    const totaltareasRealizadas = document.querySelector("#tareasRealizada");
    const index = tareas.findIndex((ele) => ele.id == id)
    if (cb.checked) {

        tareas[index].completada = true;
        sumarTareaRaalizadas++;
    }
    else {

        tareas[index].completada = false;
        sumarTareaRaalizadas--;
    }
    totaltareasRealizadas.innerHTML = `Tareas Realizadas: ${sumarTareaRaalizadas}`;
}

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1);
    pintar();
    contarTareas();
}

function contarTareas() {
    const resultado = document.querySelector("#resulTotal");
    resultado.innerHTML = `Total Tareas: ${tareas.length}`;
}


