// En este script voy a controlar la interaccion del usuario con el DOM
// Importo las funciones del main para poder usarlas y mostrarlas
// import { mostrarEstudiantes } from './main.js';

const main = document.getElementById("contenido");

document.getElementById("mostrar").addEventListener("click", () => {

    menuSecundario();
    
    switch (menuSecundario()) {
        case "Estudiante":
            console.log("hola");
            break;
        
        case "Asignatura":
    
            break;
    }
    
});

function menuSecundario() {
    main.innerHTML = `
        <h2> Selecciona una Opción </h2>
        <button id="Estudiante">Estudiante</button>
        <button id="Asignatura">Asignatura</button>
    `;

    document.getElementById("Estudiante").addEventListener("click", () => {
        return "Estudiante";
    });
    
    document.getElementById("Asignatura").addEventListener("click", () => {
        return "Asignatura";
    });
}