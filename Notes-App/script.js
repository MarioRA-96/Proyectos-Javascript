// Seleccionamos los elementos del DOM
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// Cargamos los datos al cargar la página
function loadData() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
loadData();

// Guardamos los datos en el localStorage
function saveData() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Agregamos un nuevo elemento de entrada de notas al hacer clic en el botón
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

// Eliminamos el elemento de entrada de notas correspondiente al hacer clic en la imagen de borrar
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    }
    // Guardamos los datos al hacer clic en el elemento de entrada de notas
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function() {
                saveData();
            }
        })
    }
});

// Insertamos una nueva línea al presionar la tecla Enter
document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        
    }
});