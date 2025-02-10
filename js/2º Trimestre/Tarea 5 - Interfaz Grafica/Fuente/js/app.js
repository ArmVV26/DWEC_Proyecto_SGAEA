import { lista, Direccion, Estudiante, Asignatura, Lista } from "./main.js";

const main = document.getElementById("contenido");
const agregar = document.getElementById("agregar");
const eliminar = document.getElementById("eliminar");
const mostrar = document.getElementById("mostrar");
const matricular = document.getElementById("matricular");
const desmatricular = document.getElementById("desmatricular");
const calificacion = document.getElementById("calificacion");
const registro = document.getElementById("registro");
const buscar = document.getElementById("buscar");

// Guardar datos del localStorage
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("estudiantes") || !localStorage.getItem("asignaturas")) {
        guardarDatosIniciales();
    } else {
        cargarDatos();
    }
});

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
});

// Opcion 5: Desmatricular Estudiante.
desmatricular.addEventListener("click", () => {
    desmatricularEstudiante();
});

// Opcion 6: Añadir Calificación.
calificacion.addEventListener("click", () => {
    calificarEstudiante();
});

// Opcion 7: Mostrar Historial de un Estudiante.
registro.addEventListener("click", () => {
    mostrarRegistro();
});

// Opcion 8: Buscar Estudiante / Asignatura.
buscar.addEventListener("click", () => {
    menuSecundario("buscar");
});

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

             case "buscar":
                return buscarEstudiantes();
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

            case "buscar":
                return buscarAsignaturas();
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

            localStorage.setItem("estudiantes", JSON.stringify(lista.obtenerDatosEstudiantes()));
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
            this.setCustomValidity("El nombre es obligatorio.");
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
            const asignatura = lista.asignaturas.find(asig => asig.nombre === nombre);

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
        <h2>Matricular</h2>
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
                    <button class="seleccionar" data-id="${estudiante.id}">Seleccionar</button>
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

        if (evento.target && evento.target.classList.contains("seleccionar")) {
            const id_Estudiante = evento.target.getAttribute("data-id");

            let asigEstudiante = [];

            lista.obtenerDatosEstudiantes().forEach(estudiante => {
                if (estudiante.id === id_Estudiante) {
                    estudiante.asignaturas.forEach(asignatura => {
                        asigEstudiante.push(asignatura.nombre);
                    });
                }
            });

            let tabla = `
                <h2>Matricular</h2>     
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Opcion</th>
                            <th>Elegir</th>
                        </tr>
                    </thead>
                    <tbody id="tabla-body">
            `;
            
            lista.obtenerDatosAsignaturas().forEach(asignatura => {
                tabla += `
                    <tr>
                        <td>${asignatura.nombre}</td>
                `;

                if (asigEstudiante.includes(asignatura.nombre)) {
                    tabla += `
                        <td> Matriculado </td>
                    `;
                } else {
                    tabla += `
                        <td> No Matriculado</td>
                    `;
                }
                
                tabla += `
                        <td>
                            <button class="matricular" data-nombre="${asignatura.nombre}">Matricular</button>
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
        
                if (evento.target && evento.target.classList.contains("matricular")) {

                    const estudiante = lista.estudiantes.find(est => est.id === id_Estudiante);

                    const nom_Asignatura = evento.target.getAttribute("data-nombre");
                    const materia = lista.asignaturas.find(asig => asig.nombre === nom_Asignatura);
                    
                    estudiante.matricular(materia);
        
                    main.innerHTML = `
                        <h2>Estudiante Matriculado</h2>
                    `;
                }
            });
        }
    }); 
}

/**
 * Opcion 5: Desmatricular Estudiante.
 * Permite desmatricular a un Estudiante de una Asignatura.
 */
function desmatricularEstudiante() {
    let tabla = `
        <h2>Desmatricular</h2>
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
                    <button class="seleccionar" data-id="${estudiante.id}">Seleccionar</button>
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

        if (evento.target && evento.target.classList.contains("seleccionar")) {
            const id_Estudiante = evento.target.getAttribute("data-id");

            let asigEstudiante = [];

            lista.obtenerDatosEstudiantes().forEach(estudiante => {
                if (estudiante.id === id_Estudiante) {
                    estudiante.asignaturas.forEach(asignatura => {
                        asigEstudiante.push(asignatura.nombre);
                    });
                }
            });

            let tabla = `
                <h2>Desmatricular</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Elegir</th>
                        </tr>
                    </thead>
                    <tbody id="tabla-body">
            `;
            
            lista.obtenerDatosAsignaturas().forEach(asignatura => {
                if (asigEstudiante.includes(asignatura.nombre)) {
                    tabla += `
                            <td>${asignatura.nombre}</td>
                            <td>
                                <button class="desmatricular" data-nombre="${asignatura.nombre}">Desmatricular</button>
                            </td>
                        </tr>   
                    `;
                }
            });
            
            tabla += `
                    </tbody>
                </table>
            `;

            main.innerHTML = tabla;

            const tbody = document.getElementById("tabla-body");
            tbody.addEventListener("click", (evento) => {
        
                if (evento.target && evento.target.classList.contains("desmatricular")) {

                    const estudiante = lista.estudiantes.find(est => est.id === id_Estudiante);

                    const nom_Asignatura = evento.target.getAttribute("data-nombre");
                    const materia = lista.asignaturas.find(asig => asig.nombre === nom_Asignatura);
                    
                    estudiante.desmatricular(materia);
        
                    main.innerHTML = `
                        <h2>Estudiante Desmatriculado</h2>
                    `;
                }
            });
        }
    }); 
}

/**
 * Opcion 6: Añadir Calificación.
 * Permite añadir una calificación a un Estudiante en una Asignatura.
 */
function calificarEstudiante() {
    let tabla = `
    <h2>Calificar</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Calificar</th>
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
                    <button class="seleccionar" data-id="${estudiante.id}">Seleccionar</button>
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

        if (evento.target && evento.target.classList.contains("seleccionar")) {
            const id_Estudiante = evento.target.getAttribute("data-id");

            let tabla = `
                <h2>Calificar</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Notas</th>
                            <th>Elegir</th>
                        </tr>
                    </thead>
                    <tbody id="tabla-body">
            `;
            

            lista.obtenerDatosEstudiantes().forEach(estudiante => {
                if (estudiante.id === id_Estudiante) {
                    if (estudiante.asignaturas.length > 0) {
                        
                        estudiante.asignaturas.forEach(asignatura => {
                            tabla += `
                                <tr>
                                    <td>${asignatura.nombre}</td>
                                    <td>${asignatura.notas.join(" - ")}</td>
                                    <td>
                                        <button class="calificar" data-nombre="${asignatura.nombre}">Añadir Nota</button>
                                    </td>
                                </tr>
                            `;
                        });
                    } else {
                        tabla += `
                            <tr>
                                <td colspan="3">No esta matriculado</td>
                            </tr>
                        `;
                    }
                }
            });
            
            tabla += `
                    </tbody>
                </table>
            `;

            main.innerHTML = tabla;

            const tbody = document.getElementById("tabla-body");
            tbody.addEventListener("click", (evento) => {
        
                if (evento.target && evento.target.classList.contains("calificar")) {

                    const estudiante = lista.estudiantes.find(est => est.id === id_Estudiante);

                    const nom_Asignatura = evento.target.getAttribute("data-nombre");
                    const materia = lista.asignaturas.find(asig => asig.nombre === nom_Asignatura);
                    
                     main.innerHTML = `  
                        <form method="post">
                            <h1>Formulario Calificación</h1>
                            <h2>${materia.nombre} - ${estudiante.nombre}</h2>

                            <label for="nota">Nota</label>
                            <input type="number" name="nota" id="nota" 
                                min="0" max="10" placeholder="Escribe una nota" required>

                            <button type="submit">Aceptar</button>
                        </form>
                    `;
                    
                    const formulario = document.getElementsByTagName("form")[0];
                    
                    const nota = document.getElementById("nota");
                    nota.addEventListener("input", function() {
                        if (this.required && this.value.trim() === "") {
                            this.setCustomValidity("Introduce una nota válida.");
                        } else {
                            this.setCustomValidity("");
                        }
                        this.reportValidity();
                    });

                    formulario.addEventListener("submit", function(evento) {
                        evento.preventDefault();

                        // Si el formulario es valido, se recogen los datos
                        if (formulario.checkValidity()) {
                            const calificacion = parseFloat(nota.value.trim());

                            materia.addCalificacion(id_Estudiante, calificacion);

                            main.innerHTML = `
                                <h2>Calificación agregada correctamente</h2>
                            `;
                        } else {
                            formulario.reportValidity();
                        }
                    });

                }
            });
        }
    });     
}

/**
 * Opcion 7: Mostrar Historial de un Estudiante.
 * Permite mostrar el historial de un Estudiante.
 */
function mostrarRegistro() {
    let tabla = `
        <h2>Registro</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Mostrar</th>
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
                    <button class="seleccionar" data-id="${estudiante.id}">Seleccionar</button>
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

        if (evento.target && evento.target.classList.contains("seleccionar")) {
            const id = evento.target.getAttribute("data-id");
            const estudiante = lista.estudiantes.find(est => est.id === id);

            tabla = `
                <h2>Registro - ${estudiante.nombre}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Asignatura</th>
                            <th>Opción</th>
                        </tr>
                    </thead>
                    <tbody id="tabla-body">
            `;
            
            if (estudiante.mostrarHistorial().length > 0) {
                
                estudiante.mostrarHistorial().forEach(regHistorial => {
                    tabla += `
                        <tr>
                            <td>${regHistorial[0]}</td>    
                            <td>${regHistorial[1]}</td>    
                            <td>${regHistorial[2]}</td>    
                        </tr>
                    `;
                });
            } else {
                tabla += `
                    <tr>
                        <td colspan="3">No hay ningun registro</td>
                    </tr>
                `;
            }

            tabla += `
                    </tbody>
                </table>
            `;  

            main.innerHTML = tabla;
        }
    }); 

}

/**
 * Opcion 8: Buscar Estudiante / Asignatura.
 * Permite buscar a un Estudiante o una Asignatura por un patrón de su nombre.
 */
function buscarEstudiantes() {
    main.innerHTML = `  
        <form method="post">
            <h1>Buscar Estudiante</h1>

            <label for="patron">Nombre</label>
            <input type="text" name="patron" id="patron" 
                pattern="^[A-Za-zÀ-ÿ]+$" placeholder="Escribe un patrón" required>

            <button type="submit">Aceptar</button>
        </form>
    `;

    const formulario = document.getElementsByTagName("form")[0];

    const patron = document.getElementById("patron");
    patron.addEventListener("input", function() {
        if (this.required && this.value.trim() === "") {
            this.setCustomValidity("El patrón es obligatorio.");
        } else {
            this.setCustomValidity("");
        }
        this.reportValidity();
    });

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        // Si el formulario es valido, se recogen los datos
        if (formulario.checkValidity()) {
            const pattern = patron.value.trim();

            if (lista.buscarEstudiante(pattern).length > 0) {
                let tabla = `
                    <h2>Busqueda con: "${pattern}"</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody id="tabla-body">
                `;

                lista.buscarEstudiante(pattern).forEach(estudiante => {
                    tabla += `
                        <tr>
                            <td>${estudiante.id}</td>
                            <td>${estudiante.nombre}</td>
                        </tr>
                    `;
                });

                tabla += `
                        </tbody>
                    </table>
                `;

                main.innerHTML = tabla;
            } else {
                main.innerHTML = `
                    <h2>No hay ningún Estudiante con ese patrón</h2>
                `;   
            }
        } else {
            formulario.reportValidity();
        }
    });
}

function buscarAsignaturas() {
    main.innerHTML = `  
        <form method="post">
            <h1>Buscar Asignatura</h1>

            <label for="patron">Nombre</label>
            <input type="text" name="patron" id="patron" 
                pattern="^[A-Za-zÀ-ÿ]+$" placeholder="Escribe un patrón" required>

            <button type="submit">Aceptar</button>
        </form>
    `;

    const formulario = document.getElementsByTagName("form")[0];

    const patron = document.getElementById("patron");
    patron.addEventListener("input", function() {
        if (this.required && this.value.trim() === "") {
            this.setCustomValidity("El patrón es obligatorio.");
        } else {
            this.setCustomValidity("");
        }
        this.reportValidity();
    });

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        // Si el formulario es valido, se recogen los datos
        if (formulario.checkValidity()) {
            const pattern = patron.value.trim();

            if (lista.buscarAsignatura(pattern).length > 0) {
                let tabla = `
                    <h2>Busqueda con: "${pattern}"</h2>
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
                
                lista.buscarAsignatura(pattern).forEach(asignatura => {
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
            } else {
                main.innerHTML = `
                    <h2>No hay ninguna Asignatura con ese patrón</h2>
                `;   
            }
        } else {
            formulario.reportValidity();
        }
    });
}

// Guardar BOM
function guardarDatosIniciales() {
    localStorage.setItem("estudiantes", JSON.stringify(lista.obtenerDatosEstudiantes()));
    localStorage.setItem("asignaturas", JSON.stringify(lista.obtenerDatosAsignaturas()));
}

function cargarDatos() {
    lista.obtenerDatosEstudiantes().forEach(alumno => lista.eliminarEstudiantePorId(alumno.id));
    lista.obtenerDatosAsignaturas().forEach(materia => lista.eliminarAsignaturaPorNombre(materia.nombre));

    const estudiantesGuardados = JSON.parse(localStorage.getItem("estudiantes")) || [];
    const asignaturasGuardadas = JSON.parse(localStorage.getItem("asignaturas")) || [];

    asignaturasGuardadas.forEach(materia => {
        const nuevaAsignatura = new Asignatura(materia.nombre);
        lista.agregarAsignatura(nuevaAsignatura);
    });

    estudiantesGuardados.forEach(alumno => {
        const nuevaDireccion = new Direccion(alumno.calle, alumno.numero, alumno.piso, alumno.codpostal, alumno.provincia, alumno.localidad);
        const nuevoEstudiante = new Estudiante(alumno.nombre, alumno.edad, nuevaDireccion);

        nuevoEstudiante.historial = alumno.historial;
        
        alumno.asignaturas.forEach(materia => {
        
            lista.obtenerDatosAsignaturas().forEach(materia => {
                console.log(materia);
            });
        });
        //     const materiaReal = lista.obtenerDatosAsignaturas().find(asignatura => asignatura.nombre === materia.nombre);
            
        //     if (materiaReal) {
        //         nuevoEstudiante.matricular(materiaReal);
            
        //         materia.notas.forEach(nota => {
        //             nuevoEstudiante.agregarCalificacion(materiaReal, nota);
        //         });
        //     }
        // });
        
        // lista.agregarEstudiante(nuevoEstudiante);
    });

    console.log(lista);
}
