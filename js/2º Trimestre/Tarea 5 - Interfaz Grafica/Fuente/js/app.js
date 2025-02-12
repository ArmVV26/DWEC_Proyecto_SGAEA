// Importar las clases necesarias
import { Estudiante } from "./Estudiante.js";
import { Asignatura } from "./Asignatura.js";
import { Direccion } from "./Direccion.js";
import { lista } from "./main.js";

// Referencia al DOM para mostrar el contenido.
const main = document.getElementById("contenido");

/**
 * @function
 * @description Muestra un menú secundario con las opciones de Estudiante y Asignatura.
 * 
 * @param {string} accion - La acción que se va a realizar (agregar, eliminar, mostrar, buscar).
 */
export function menuSecundario(accion) {
    main.innerHTML = `
        <h2> Selecciona una Opción (${accion})</h2>
        <button id="Estudiante">Estudiante</button>
        <button id="Asignatura">Asignatura</button>
    `;

    // Evento para seleccionar Estudiante.
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
    
    // Evento para seleccionar Asignatura.
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
 * @function
 * @description Opcion 1: Agregar Estudiante. 
 * Muestra un formulario para agregar un Estudiante, validando los campos, durante y antes de mandarlos.
 */
function agregarEstudiante() {
    // Se inyecta el formulario en el main.
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

    /**
     * @event input
     * @description Valida los campos del formulario en tiempo real.
     * 
     * @param {Event} evento - El evento que se produce.
     */
    formulario.addEventListener("input", (evento) => {
        if (evento.target.tagName === "INPUT") {
            validarCampo(evento.target);
        }
    });

    /**
     * @function
     * @description Valida los campos del formulario.
     * 
     * @param {Element} campo - El campo a validar.
     */
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
        // Muestra el mensaje de error.
        campo.reportValidity();
    }

    /**
     * @event submit
     * @description Valida los campos del formulario antes de enviarlo.
     * 
     * @param {Event} evento - El evento que se produce.
     */
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        // Se recogen los campos del formulario y se validan todos.
        const campos = formulario.querySelectorAll("input");
        campos.forEach((campo) => validarCampo(campo));
        
        // Si el formulario es valido, se recogen los datos, se crean los objetos y se añaden a la lista.
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

            main.innerHTML = `
                <h2>${lista.agregarEstudiante(estudiante)}</h2>
            `;

            // Guardar los datos en el LocalStorage.
            guardarDatos();
        } else {
            // Muestra el mensaje de error.
            formulario.reportValidity();
        }
    });

}

/**
 * @function
 * @description Opcion 1: Agregar Asignatura.
 * Muestra un formulario para agregar una Asignatura, validando los campos, durante y antes de mandarlos.
 */
function agregarAsignatura() {
    // Se inyecta el formulario en el main.
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
    /**
     * @event input
     * @description Valida los campos del formulario en tiempo real.
     */
    nombre.addEventListener("input", function() {
        if (this.required && this.value.trim() === "") {
            this.setCustomValidity("El nombre es obligatorio.");
        } else {
            this.setCustomValidity("");
        }
        this.reportValidity();
    });

    /**
     * @event submit
     * @description Valida los campos del formulario antes de enviarlo.
     * 
     * @param {Event} evento - El evento que se produce.
     */
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        // Si el formulario es valido, se recogen los datos, se crean el objeto Asignatura y se añaden a la lista.
        if (formulario.checkValidity()) {
            const name = nombre.value.trim();

            const asignatura = new Asignatura(name);

            main.innerHTML = `
                <h2>${lista.agregarAsignatura(asignatura)}</h2>
            `;

            // Guardar los datos en el LocalStorage.
            guardarDatos();
        } else {
            // Muestra el mensaje de error.
            formulario.reportValidity();
        }
    });
}
/**
 * @function
 * @description Opcion 2: Eliminar Estudiante.
 * Muestra una tabla con los Estudiantes registrados en la Lista, permitiendo eliminar uno de ellos.
 */
function eliminarEstudiante() {
    // Si hay Estudiantes en la Lista, se muestra una tabla con los Estudiantes y un botón para eliminar.
    if (lista.estudiantes.length > 0) {
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
        
        // Se recorren los Estudiantes y se añaden a la tabla.
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
        /**
         * @event click
         * @description Elimina un Estudiante al hacer click en el botón "Eliminar".
         * 
         * @param {Event} evento - El evento que se produce.
         */
        tbody.addEventListener("click", (evento) => {

            // Si se hace click en el botón "Eliminar", se recoge el ID del Estudiante y se elimina de la Lista.
            if (evento.target && evento.target.classList.contains("eliminar")) {
                const id = evento.target.getAttribute("data-id");
                const estudiante = lista.estudiantes.find(est => est.id === id);

                main.innerHTML = `
                    <h2>${lista.eliminarEstudiante(estudiante)}</h2>
                `;

                // Guardar los datos en el LocalStorage.
                guardarDatos();
            }
        }); 
    } else {
        main.innerHTML = `
            <h2>No hay ningún Estudiante</h2>
        `;
    }
}

/**
 * @function
 * @description Opcion 2: Eliminar Asignatura.
 * Muestra una tabla con las Asignaturas registradas en la Lista, permitiendo eliminar una de ellas.
 */
function eliminarAsignatura() {
    // Si hay Asignaturas en la Lista, se muestra una tabla con las Asignaturas y un botón para eliminar.
    if (lista.asignaturas.length > 0) {
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
        
        // Se recorren las Asignaturas y se añaden a la tabla.
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
        /**
         * @event click
         * @description Elimina una Asignatura al hacer click en el botón "Eliminar".
         */
        tbody.addEventListener("click", (evento) => {

            // Si se hace click en el botón "Eliminar", se recoge el nombre de la Asignatura y se elimina de la Lista.
            if (evento.target && evento.target.classList.contains("eliminar")) {
                const nombre = evento.target.getAttribute("data-nombre");
                const asignatura = lista.asignaturas.find(asig => asig.nombre === nombre);

                main.innerHTML = `
                    <h2>${lista.eliminarAsignatura(asignatura)}</h2>
                `;

                // Guardar los datos en el LocalStorage.
                guardarDatos();
            }
        }); 
    } else {
        main.innerHTML = `
            <h2>No hay ninguna Asignatura</h2>
        `;
    }
}

/**
 * @function
 * @description Opcion 3: Mostrar Estudiantes.
 * Muestra una tabla con los Estudiantes registrados en la Lista, con sus datos y asignaturas matriculadas.
 */
function mostrarEstudiantes() {
    // Si hay Estudiantes en la Lista, se muestra una tabla con los Estudiantes y sus asignaturas.
    if (lista.estudiantes.length > 0) {
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
        
        // Se recorren los Estudiantes y se añaden a la tabla.
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

            // Si el Estudiante tiene asignaturas matriculadas, se muestran.
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
    } else {
        main.innerHTML = `
            <h2>No hay ningún Estudiante</h2>
        `;
    }
}

/**
 * @function
 * @description Opcion 3: Mostrar Asignaturas.
 * Muestra una tabla con las Asignaturas registradas en la Lista, con sus datos y promedios.
 */
function mostrarAsignaturas() {
    // Si hay Asignaturas en la Lista, se muestra una tabla con las Asignaturas y sus promedios.
    if (lista.asignaturas.length > 0) {
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
        
        // Se recorren las Asignaturas y se añaden a la tabla.
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
    } else {
        main.innerHTML = `
            <h2>No hay ninguna Asignatura</h2>
        `;
    }
}

/**
 * @function
 * @description Opcion 4: Matricular Estudiante.
 * Muestra una tabla con los Estudiantes registrados en la Lista, permitiendo matricular a uno de ellos en una Asignatura.
 */
export function matricularEstudiante() {
    // Si hay Estudiantes en la Lista, se muestra una tabla con los Estudiantes y un botón para matricular.
    if (lista.estudiantes.length > 0) {
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
        
        // Se recorren los Estudiantes y se añaden a la tabla.
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
        /**
         * @event click
         * @description Selecciona a un Estudiante para matricularlo en una Asignatura.
         * 
         * @param {Event} evento - El evento que se produce.
         */
        tbody.addEventListener("click", (evento) => {

            // Si se hace click en el botón "Seleccionar", se recoge el ID del Estudiante y se muestra una tabla con las Asignaturas.
            if (evento.target && evento.target.classList.contains("seleccionar")) {
                const id_Estudiante = evento.target.getAttribute("data-id");

                // Se recogen las asignaturas matriculadas del Estudiante.
                let asigEstudiante = [];

                lista.obtenerDatosEstudiantes().forEach(estudiante => {
                    if (estudiante.id === id_Estudiante) {
                        estudiante.asignaturas.forEach(asignatura => {
                            asigEstudiante.push(asignatura.nombre);
                        });
                    }
                });

                // Si hay Asignaturas en la Lista, se muestra una tabla con las Asignaturas y un botón para matricular.
                if (lista.asignaturas.length > 0) {
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
                    
                    // Se recorren las Asignaturas y se añaden a la tabla.
                    lista.obtenerDatosAsignaturas().forEach(asignatura => {
                        tabla += `
                            <tr>
                                <td>${asignatura.nombre}</td>
                        `;

                        // Si el Estudiante esta matriculado en la Asignatura, se muestra "Matriculado", sino "No Matriculado".
                        if (asigEstudiante.includes(asignatura.nombre)) {
                            tabla += `
                                    <td> Matriculado </td>
                                    <td> - </td>
                                </tr>
                            `;
                        } else {
                            tabla += `
                                    <td> No Matriculado</td>
                                    <td>
                                        <button class="matricular" data-nombre="${asignatura.nombre}">Matricular</button>
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
                    /**
                     * @event click
                     * @description Matricula a un Estudiante en una Asignatura al hacer click en el botón "Matricular".
                     * 
                     * @param {Event} evento - El evento que se produce.
                     */
                    tbody.addEventListener("click", (evento) => {
                
                        // Si se hace click en el botón "Matricular", se recoge el nombre de la Asignatura y se matricula al Estudiante.
                        if (evento.target && evento.target.classList.contains("matricular")) {

                            const estudiante = lista.estudiantes.find(est => est.id === id_Estudiante);

                            const nom_Asignatura = evento.target.getAttribute("data-nombre");
                            const materia = lista.asignaturas.find(asig => asig.nombre === nom_Asignatura);
                            
                            estudiante.matricular(materia);
                
                            main.innerHTML = `
                                <h2>Estudiante Matriculado</h2>
                            `;

                            // Guardar los datos en el LocalStorage.
                            guardarDatos();
                        }
                    });
                } else {
                    main.innerHTML = `
                        <h2>No hay ninguna Asignatura</h2>
                    `;
                }
            }
        }); 
    } else {
        main.innerHTML = `
            <h2>No hay ningún Estudiante</h2>
        `;
    }
}

/**
 * @function
 * @description Opcion 5: Desmatricular Estudiante.
 * Muestra una tabla con los Estudiantes registrados en la Lista, permitiendo desmatricular a uno de ellos de una Asignatura.
 */
export function desmatricularEstudiante() {
    // Si hay Estudiantes en la Lista, se muestra una tabla con los Estudiantes y un botón para desmatricular.
    if (lista.estudiantes.length > 0) {
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
        
        // Se recorren los Estudiantes y se añaden a la tabla.
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
        /**
         * @event click
         * @description Selecciono a un Estudiante para desmatricularlo de una Asignatura.
         * 
         * @param {Event} evento - El evento que se produce.
         */
        tbody.addEventListener("click", (evento) => {

            // Si se hace click en el botón "Seleccionar", se recoge el ID del Estudiante y se muestra una tabla con las Asignaturas.
            if (evento.target && evento.target.classList.contains("seleccionar")) {
                const id_Estudiante = evento.target.getAttribute("data-id");

                // Se recogen las asignaturas matriculadas del Estudiante.
                let asigEstudiante = [];

                lista.obtenerDatosEstudiantes().forEach(estudiante => {
                    if (estudiante.id === id_Estudiante) {
                        estudiante.asignaturas.forEach(asignatura => {
                            asigEstudiante.push(asignatura.nombre);
                        });
                    }
                });

                // Si hay Asignaturas en la Lista, se muestra una tabla con las Asignaturas y un botón para desmatricular.
                if (lista.asignaturas.length > 0) {
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
                    
                    // Se recorren las Asignaturas y se añaden a la tabla.
                    if (asigEstudiante.length > 0) {
                        lista.obtenerDatosAsignaturas().forEach(asignatura => {
                            // Si el Estudiante esta matriculado en la Asignatura, se muestra y se añade un botón para desmatricular.
                            if (asigEstudiante.includes(asignatura.nombre)) {
                                tabla += `
                                    <tr>
                                        <td>${asignatura.nombre}</td>
                                        <td>
                                            <button class="desmatricular" data-nombre="${asignatura.nombre}">Desmatricular</button>
                                        </td>
                                    </tr>   
                                `;
                            }
                        });
                    } else {
                        tabla += `
                                <tr>
                                    <td colspan="2">No esta matriculado</td>
                                </tr>
                        `;
                    }
                    
                    tabla += `
                            </tbody>
                        </table>
                    `;

                    main.innerHTML = tabla;

                    const tbody = document.getElementById("tabla-body");
                    /**
                     * @event click
                     * @description Desmatricula a un Estudiante de una Asignatura al hacer click en el botón "Desmatricular".
                     * 
                     * @param {Event} evento - El evento que se produce.
                     */
                    tbody.addEventListener("click", (evento) => {
                
                        // Si se hace click en el botón "Desmatricular", se recoge el nombre de la Asignatura y se desmatricula al Estudiante.
                        if (evento.target && evento.target.classList.contains("desmatricular")) {

                            const estudiante = lista.estudiantes.find(est => est.id === id_Estudiante);

                            const nom_Asignatura = evento.target.getAttribute("data-nombre");
                            const materia = lista.asignaturas.find(asig => asig.nombre === nom_Asignatura);
                            
                            estudiante.desmatricular(materia);
                
                            main.innerHTML = `
                                <h2>Estudiante Desmatriculado</h2>
                            `;
                
                            // Guardar los datos en el LocalStorage.
                            guardarDatos();
                        }
                    });
                } else {
                    main.innerHTML = `
                        <h2>No hay ninguna Asignatura</h2>
                    `;
                }
            }
        }); 
    } else {
        main.innerHTML = `
            <h2>No hay ningún Estudiante</h2>
        `;
    }
}

/**
 * @function
 * @description Opcion 6: Añadir Calificación.
 * Muestra una tabla con los Estudiantes registrados en la Lista, permitiendo añadir una calificación a uno de ellos en una Asignatura.
 */
export function calificarEstudiante() {
    // Si hay Estudiantes en la Lista, se muestra una tabla con los Estudiantes y un botón para calificar.
    if (lista.estudiantes.length > 0) {
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

        // Se recorren los Estudiantes y se añaden a la tabla.
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
        /**
         * @event click
         * @description Selecciona a un Estudiante para mostrar sus Asignaturas matriculadas.
         */
        tbody.addEventListener("click", (evento) => {

            // Si se hace click en el botón "Seleccionar", se recoge el ID del Estudiante y se muestra una tabla con las Asignaturas.
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
                
                // Se recorren las Asignaturas matriculadas del Estudiante y se añaden a la tabla.
                lista.obtenerDatosEstudiantes().forEach(estudiante => {
                    // Si el Estudiante tiene asignaturas matriculadas, se muestran.
                    if (estudiante.id === id_Estudiante) {
                        if (estudiante.asignaturas.length > 0) {
                            
                            estudiante.asignaturas.forEach(asignatura => {
                                tabla += `
                                    <tr>
                                        <td>${asignatura.nombre}</td>
                                        <td>${asignatura.notas.join(" - ") || ["Sin notas"]}</td>
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
                /**
                 * @event click
                 * @description Selecciona una Asignatura para mostrar un formulario indicando la calificación a añadir.
                 */
                tbody.addEventListener("click", (evento) => {
            
                    // Si se hace click en el botón "Calificar", se recoge el nombre de la Asignatura y se muestra un formulario para añadir la calificación.
                    if (evento.target && evento.target.classList.contains("calificar")) {

                        const estudiante = lista.estudiantes.find(est => est.id === id_Estudiante);

                        const nom_Asignatura = evento.target.getAttribute("data-nombre");
                        const materia = lista.asignaturas.find(asig => asig.nombre === nom_Asignatura);
                        
                        // Se inyecta el formulario en el main.
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
                        /**
                         * @event input
                         * @description Valida los campos del formulario en tiempo real.
                         */
                        nota.addEventListener("input", function() {
                            if (this.required && this.value.trim() === "") {
                                this.setCustomValidity("Introduce una nota válida.");
                            } else {
                                this.setCustomValidity("");
                            }
                            this.reportValidity();
                        });

                        /**
                         * @event submit
                         * @description Valida los campos del formulario antes de enviarlo.
                         * 
                         * @param {Event} evento - El evento que se produce.
                         */
                        formulario.addEventListener("submit", function(evento) {
                            evento.preventDefault();

                            // Si el formulario es valido, se recogen los datos, se añade la calificación y se muestra un mensaje.
                            if (formulario.checkValidity()) {
                                const calificacion = parseFloat(nota.value.trim());

                                materia.addCalificacion(id_Estudiante, calificacion);

                                main.innerHTML = `
                                    <h2>Calificación agregada correctamente</h2>
                                `;
                    
                                // Guardar los datos en el LocalStorage.
                                guardarDatos();
                            } else {
                                // Muestra el mensaje de error.
                                formulario.reportValidity();
                            }
                        });

                    }
                });
            }
        });     
    } else {
        main.innerHTML = `
            <h2>No hay ningún Estudiante</h2>
        `;
    }
}

/**
 * @function
 * @description Opcion 7: Mostrar Historial de un Estudiante.
 * Muestra una tabla con los Estudiantes registrados en la Lista, permitiendo mostrar el historial de uno de ellos.
 */
export function mostrarRegistro() {
    // Si hay Estudiantes en la Lista, se muestra una tabla con los Estudiantes y un botón para mostrar el historial.
    if (lista.estudiantes.length > 0) {
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

        // Se recorren los Estudiantes y se añaden a la tabla.
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
        /**
         * @event click
         * @description Muestra el historial de un Estudiante al hacer click en el botón "Mostrar".
         * 
         * @param {Event} evento - El evento que se produce.
         */
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
                
                // Se recorren los registros del Estudiante y se añaden a la tabla.
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
    } else {
        main.innerHTML = `
            <h2>No hay ningún Estudiante</h2>
        `;
    }
}

/**
 * @function
 * @description Opcion 8: Buscar Estudiante.
 * Muestra un formulario para buscar un Estudiante por un patrón de su nombre. Mostrando el resultado.
 */
function buscarEstudiantes() {
    // Se inyecta el formulario en el main.
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
    /**
     * @event input
     * @description Valida los campos del formulario en tiempo real.
     */
    patron.addEventListener("input", function() {
        if (this.required && this.value.trim() === "") {
            this.setCustomValidity("El patrón es obligatorio.");
        } else {
            this.setCustomValidity("");
        }
        this.reportValidity();
    });

    /**
     * @event submit
     * @description Valida los campos del formulario antes de enviarlo.
     * 
     * @param {Event} evento - El evento que se produce.
     */
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        // Si el formulario es valido, se recogen los datos y se muestra el resultado.
        if (formulario.checkValidity()) {
            const pattern = patron.value.trim();

            // Si hay Estudiantes con el patrón, se muestra una tabla con los resultados.
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

                // Se recorren los Estudiantes y se añaden a la tabla.
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
            // Muestra el mensaje de error.
            formulario.reportValidity();
        }
    });
}

/**
 * @function
 * @description Opcion 9: Buscar Asignatura.
 * Muestra un formulario para buscar una Asignatura por un patrón de su nombre. Mostrando el resultado.
 */
function buscarAsignaturas() {
    // Se inyecta el formulario en el main.
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
    /**
     * @event input
     * @description Valida los campos del formulario en tiempo real.
     */
    patron.addEventListener("input", function() {
        if (this.required && this.value.trim() === "") {
            this.setCustomValidity("El patrón es obligatorio.");
        } else {
            this.setCustomValidity("");
        }
        this.reportValidity();
    });

    /**
     * @event submit
     * @description Valida los campos del formulario antes de enviarlo.
     * 
     * @param {Event} evento - El evento que se produce.
     */
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        // Si el formulario es valido, se recogen los datos y se muestra el resultado.
        if (formulario.checkValidity()) {
            const pattern = patron.value.trim();

            // Si hay Asignaturas con el patrón, se muestra una tabla con los resultados.
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
                
                // Se recorren las Asignaturas y se añaden a la tabla.
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
            // Muestra el mensaje de error.
            formulario.reportValidity();
        }
    });
}


/**
 * @function
 * @description Guarda los datos de los Estudiantes y Asignaturas en el LocalStorage.
 */
export function guardarDatos() {
    localStorage.setItem("estudiantes", JSON.stringify(lista.obtenerDatosEstudiantes()));
    localStorage.setItem("asignaturas", JSON.stringify(lista.obtenerDatosAsignaturas()));
}

/**
 * @function
 * @description Carga los datos de los Estudiantes y Asignaturas del LocalStorage.
 */
export function cargarDatos() {
    // Se eliminan los Estudiantes y Asignaturas de la Lista.
    lista.obtenerDatosEstudiantes().forEach(alumno => lista.eliminarEstudiantePorId(alumno.id));
    lista.obtenerDatosAsignaturas().forEach(materia => lista.eliminarAsignaturaPorNombre(materia.nombre));

    // Se cargan los Estudiantes y Asignaturas del LocalStorage.
    const estudiantesGuardados = JSON.parse(localStorage.getItem("estudiantes")) || [];
    const asignaturasGuardadas = JSON.parse(localStorage.getItem("asignaturas")) || [];

    // Se crean las Asignaturas.
    asignaturasGuardadas.forEach(materia => {
        const nuevaAsignatura = new Asignatura(materia.nombre);
        lista.agregarAsignatura(nuevaAsignatura);
    });

    // Se crean los Estudiantes.
    estudiantesGuardados.forEach(alumno => {
        const nuevaDireccion = new Direccion(alumno.calle, alumno.numero, alumno.piso, alumno.codpostal, alumno.provincia, alumno.localidad);
        const nuevoEstudiante = new Estudiante(alumno.nombre, alumno.edad, nuevaDireccion);

        // Se añade el historial al Estudiante.
        nuevoEstudiante.historial = alumno.historial;
        
        // Se añaden las asignaturas matriculadas al Estudiante, ademas de sus notas.
        alumno.asignaturas.forEach(materia => {            
            const materiaReal = lista.asignaturas.find(asignatura => asignatura.nombre === materia.nombre);
            
            // Si la Asignatura existe, se añade al Estudiante.
            if (materiaReal) {
                nuevoEstudiante.asignatura = materiaReal;
                
                // Se añaden las notas de la Asignatura al Estudiante.
                materia.notas.forEach(nota => {
                    nuevoEstudiante.agregarCalificacion(materiaReal, nota);
                });
            }
        })

        // Se añade el Estudiante a la Lista.
        lista.agregarEstudiante(nuevoEstudiante);
    });
}