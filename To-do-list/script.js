// Seleccionamos los elementos del DOM
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Función para agregar una tarea
function addTask() {
    // Verificamos si el inputBox está vacío
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Creamos los elementos HTML para la tarea
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // Reiniciamos el inputBox
    inputBox.value = "";
    // Guardamos los datos en el localStorage
    saveData();
}

// Evento para manejar los clics en listContainer
listContainer.addEventListener("click", function (e) {
    // Verificamos si se hizo clic en una tarea o en un botón de eliminación
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Función para guardar los datos en el localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Función para mostrar los datos al cargar la página
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Mostramos los datos al cargar la página
showData();
