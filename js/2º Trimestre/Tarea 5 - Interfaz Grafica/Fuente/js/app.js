import { lista, Direccion, Estudiante, Asignatura, Lista } from "./main.js";

const main = document.getElementById("contenido");
const agregar = document.getElementById("agregar");
const eliminar = document.getElementById("eliminar");
const mostrar = document.getElementById("mostrar");
const matricular = document.getElementById("matricular");
const desmatricular = document.getElementById("desmatricular");
const calificacion = document.getElementById("calificacion");
const buscar = document.getElementById("buscar");

// Opcion 1: Agregar Estudiante / Asignatura.
agregar.addEventListener("click", () => {
    menuSecundario("agregar");
});

// Opcion 2: Eliminar Estudiante / Asignatura.
eliminar.addEventListener("click", () => {
    menuSecundario("eliminar");
});

// Opcion 3: Mostrar Estudiantes / Asignaturas.
mostrar.addEventListener("click", () => {
    menuSecundario("mostrar");
});

// Opcion 4: Matricular Estudiante.
matricular.addEventListener("click", () => {
    matricularEstudiante();
})

function menuSecundario(accion) {
    main.innerHTML = `
        <h2> Selecciona una Opción (${accion})</h2>
        <button id="Estudiante">Estudiante</button>
        <button id="Asignatura">Asignatura</button>
    `;

    document.getElementById("Estudiante").addEventListener("click", () => {

        switch (accion) {
            case "agregar":
                return agregarEstudiante();
                break;

            case "eliminar":
                return eliminarEstudiante();
                break;

            case "mostrar":
                return mostrarEstudiantes();
                break;
        }
    });
    
    document.getElementById("Asignatura").addEventListener("click", () => {
        switch (accion) {
            case "agregar":
                return agregarAsignatura();
                break;

            case "eliminar":
                return eliminarAsignatura();
                break;

            case "mostrar":
                return mostrarAsignaturas();
                break;
        }
    });
}


/**
 * Opcion 1: Agregar Estudiante / Asignatura.
 * Permite crear un Estudiante o Asignatura nuevos. Depdende de lo que se seleccione en el menú secundario.
 */
function agregarEstudiante() {
    main.innerHTML = `  
        <form method="post">
            <h1>Formulario Estudiante</h1>

            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" 
                pattern="^[A-Za-zÀ-ÿ\\s]+$" placeholder="Nombre y Apellidos" required>

            <label for="edad">Edad</label>
            <input type="number" name="edad" id="edad" 
                min="6" max="80" placeholder="Escribe la Edad" required>

            <h2>Direccion</h2>

            <label for="calle">Calle</label>
            <input type="text" name="calle" id="calle" 
                pattern="^[A-Za-zÀ-ÿ\\s]+$" pattern="" placeholder="Escribe la Calle" required>

            <label for="numero">Número</label>
            <input type="number" name="numero" id="numero"
                placeholder="Escribe el Nº" required>

            <label for="piso">Piso</label>
            <input type="number" name="piso" id="piso"
                placeholder="Escribe el Piso (Por Defecto = 0)">
            
            <label for="codPostal">Codigo Postal</label>
            <input type="number" name="codPostal" id="codPostal" 
                min="10000" max="99999" placeholder="Escribe el Codigo Postal" required>

            <label for="localidad">Localidad</label>
            <input type="text" name="localidad" id="localidad" 
                pattern="^[A-Za-zÀ-ÿ\\s]+$" placeholder="Escribe la Localidad" required>

            <label for="provincia">Provincia</label>
            <input type="text" name="provincia" id="provincia"
                pattern="^[A-Za-zÀ-ÿ\\s]+$" placeholder="Escribe la Provincia" required>

            <button type="submit">Aceptar</button>
        </form>
    `;

    const formulario = document.getElementsByTagName("form")[0];

    // Escucha los eventos 'input' en los elementos del formulario
    formulario.addEventListener("input", (evento) => {
        if (evento.target.tagName === "INPUT") {
            validarCampo(evento.target);
        }
    });

    // Valido el campo que venga por parametros
    const validarCampo = (campo) => {

        switch (campo.name) {
            case "nombre":
                if (campo.required && campo.value.trim() === "") {
                    campo.setCustomValidity("El nombre es obligatorio.");
                } else {
                    campo.setCustomValidity("");
                }
                break;
            
            case "edad":
                if (campo.required && campo.value.trim() === "") {
                    campo.setCustomValidity("Introduce una edad válida.");
                } else {
                    campo.setCustomValidity("");
                }
                break;
            
            case "calle":
                if (campo.required && campo.value.trim() === "") {
                    campo.setCustomValidity("La calle es obligatorio.");
                } else {
                    campo.setCustomValidity("");
                }
                break;

            case "numero":
                if (campo.required && campo.value.trim() === "") {
                    campo.setCustomValidity("Introduce un número válido.");
                } else {
                    campo.setCustomValidity("");
                }
                break;

            case "piso":
                if (campo.value.trim() === "") {
                    campo.setCustomValidity("Introduce un piso válido.");
                } else {
                    campo.setCustomValidity("");
                }
                break;
            
            case "codPostal":
                if (campo.required && campo.value.trim() === "") {
                    campo.setCustomValidity("Introduce un código postal válido.");
                } else {
                    campo.setCustomValidity("");
                }
                break;
            
            case "localidad":
                if (campo.required && campo.value.trim() === "") {
                    campo.setCustomValidity("La localidad es obligatorio.");
                } else {
                    campo.setCustomValidity("");
                }
                break;

            case "provincia":
                if (campo.required && campo.value.trim() === "") {
                    campo.setCustomValidity("La provincia es obligatorio.");
                } else {
                    campo.setCustomValidity("");
                }
                break;
        }
        campo.reportValidity();
    }

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const campos = formulario.querySelectorAll("input");
        campos.forEach((campo) => validarCampo(campo));
        
        // Si el formulario es valido, se recogen los datos
        if (formulario.checkValidity()) {
            const name = nombre.value.trim();
            const age = edad.value.trim();
            const street  = calle.value.trim();
            const number = numero.value.trim();
            const floor = piso.value.trim();
            const code = codPostal.value.trim();
            const locality = localidad.value.trim();
            const province = provincia.value.trim();

            const direccion = new Direccion(street, number, floor, code, province, locality);
            const estudiante = new Estudiante(name, age, direccion);

            // console.log(lista.agregarEstudiante(estudiante));
            lista.agregarEstudiante(estudiante);

            main.innerHTML = `
                <h2>Estudiante agregado correctamente</h2>
            `;
        } else {
            formulario.reportValidity();
        }
    });

}

function agregarAsignatura() {
    main.innerHTML = `  
        <form method="post">
            <h1>Formulario Asignatura</h1>

            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" 
                pattern="^[A-Za-zÀ-ÿ\\s]+$" placeholder="Escribe el nombre de la Asignatura" required>

            <button type="submit">Aceptar</button>
        </form>
    `;

    const formulario = document.getElementsByTagName("form")[0];

    const nombre = document.getElementById("nombre");
    nombre.addEventListener("input", function() {
        if (this.required && this.value.trim() === "") {
            this.setCustomValidity("El nombre es obligatorio");
        } else {
            this.setCustomValidity("");
        }
        this.reportValidity();
    });

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        // Si el formulario es valido, se recogen los datos
        if (formulario.checkValidity()) {
            const name = nombre.value.trim();

            const asignatura = new Asignatura(name);

            // console.log(lista.agregarAsignatura(asignatura));
            lista.agregarAsignatura(asignatura);

            main.innerHTML = `
                <h2>Asignatura agregada correctamente</h2>
            `;
        } else {
            formulario.reportValidity();
        }
    });
}

/**
 * Opcion 2: Eliminar Estudiante / Asignatura.
 * Permite eliminar un Estudiante o Asignatura. Depdende de lo que se seleccione en el menú secundario.
 */
function eliminarEstudiante() {
    let tabla = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody id="tabla-body">
    `;
    
    lista.obtenerDatosEstudiantes().forEach(estudiante => {
        tabla += `
            <tr>
                <td>${estudiante.id}</td>
                <td>${estudiante.nombre}</td>
                <td>
                    <button class="eliminar" data-id="${estudiante.id}"> Eliminar</button>
                </td>
            </tr>
        `;
    });
    
    tabla += `
            </tbody>
        </table>
    `;

    main.innerHTML = tabla;

    const tbody = document.getElementById("tabla-body");
    tbody.addEventListener("click", (evento) => {

        if (evento.target && evento.target.classList.contains("eliminar")) {
            const id = evento.target.getAttribute("data-id");
            const estudiante = lista.estudiantes.find(est => est.id === id);

            lista.eliminarEstudiante(estudiante);

            main.innerHTML = `
                <h2>Estudiante eliminado</h2>
            `;
        }
    }); 
}

function eliminarAsignatura() {
    let tabla = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody id="tabla-body">
    `;
    
    lista.obtenerDatosAsignaturas().forEach(asignatura => {
        tabla += `
            <tr>
                <td>${asignatura.nombre}</td>
                <td>
                    <button class="eliminar" data-nombre="${asignatura.nombre}"> Eliminar</button>
                </td>
            </tr>
        `;
    });
    
    tabla += `
            </tbody>
        </table>
    `;

    main.innerHTML = tabla;

    const tbody = document.getElementById("tabla-body");
    tbody.addEventListener("click", (evento) => {

        if (evento.target && evento.target.classList.contains("eliminar")) {
            const nombre = evento.target.getAttribute("data-nombre");
            const asignatura = lista.asignaturas.find(est => est.nombre === nombre);

            lista.eliminarAsignatura(asignatura);

            main.innerHTML = `
                <h2>Asignatura eliminada</h2>
            `;
        }
    }); 
}


/**
 * Opcion 3: Mostrar Estudiantes / Asignaturas.
 * Permite mostrar todos los Estudiante o las Asignaturas registradas en la Lista. Depdende de lo que se seleccione en el menú secundario.
 */

function mostrarEstudiantes() {
    let tabla = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Direccion</th>
                    <th>Asig.-Notas-Promedio</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    lista.obtenerDatosEstudiantes().forEach(estudiante => {
        tabla += `
            <tr>
                <td>${estudiante.id}</td>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.edad}</td>
                <td>${estudiante.calle},
                    ${estudiante.numero},
                    ${estudiante.piso},
                    ${estudiante.codpostal},
                    ${estudiante.localidad},
                    ${estudiante.provincia}
                </td>
        `;

        if (estudiante.asignaturas.length > 0) {
            tabla += `<td>`;
            estudiante.asignaturas.forEach(asignatura => {
                tabla += `
                    <p>${asignatura.nombre} [ ${asignatura.notas.join(" - ")} ] -> ${asignatura.promedio}</p>
                `
            });

            tabla += `
                    </td>
                </tr>        
            `; 
        } else {
            tabla += `
                    <td colspan="3">No esta matriculado</td>
                </tr>
            `;
        }

    });
    
    tabla += `
            </tbody>
        </table>
    `;

    main.innerHTML = tabla;
}

function mostrarAsignaturas() {
    let tabla = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>ID - Notas</th>
                    <th>Promedio</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    lista.obtenerDatosAsignaturas().forEach(asignatura => {
        tabla += `
            <tr>
                <td>${asignatura.nombre}</td>
        `;

        if (asignatura.notas.length > 0) {
            tabla += `<td>`;

            asignatura.notas.forEach(nota => {
                tabla += `
                    <p> ${nota[0]} [ ${nota[1].join(" - ")} ] </p>
                `;
            });

            tabla += `
                    </td>
                    <td>${asignatura.promedio}</td>
                </tr>
            `;
        } else {
            tabla += `
                    <td>Sin calificaciones</td>
                    <td> - </td>
                </tr>
            `;
        }
    });

    tabla += `
            </tbody>
        </table>
    `;

    main.innerHTML = tabla;
}

/**
 * Opcion 4: Matricular Estudiante.
 * Permite matricular a un Estudiante a una Asignatura.
 */
function matricularEstudiante() {
    let tabla = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Seleccionar</th>
                </tr>
            </thead>
            <tbody id="tabla-body">
    `;
    
    lista.obtenerDatosEstudiantes().forEach(estudiante => {
        tabla += `
            <tr>
                <td>${estudiante.id}</td>
                <td>${estudiante.nombre}</td>
                <td>
                    <button class="eliminar" data-id="${estudiante.id}">Seleccionar</button>
                </td>
            </tr>
        `;
    });
    
    tabla += `
            </tbody>
        </table>
    `;

    main.innerHTML = tabla;

    const tbody = document.getElementById("tabla-body");
    tbody.addEventListener("click", (evento) => {

        if (evento.target && evento.target.classList.contains("eliminar")) {
            const id = evento.target.getAttribute("data-id");
            const estudiante = lista.estudiantes.find(est => est.id === id);

            lista.eliminarEstudiante(estudiante);

            main.innerHTML = `
                <h2>Estudiante eliminado</h2>
            `;
        }
    }); 
}