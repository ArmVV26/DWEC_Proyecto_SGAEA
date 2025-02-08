/**
 * FUNCIONES DEL MENÚ
 * ──────────────────
 * Aqui creo las funciones principales que son la estructura principal del proyecto. Se crean diferentes menús en los que se pueden realizar operaciones relacionadas con Estudiantes y Asignaturas.
 * 
 * > ---
 * > ### Funciones Principales:
 * > - `menuPrincipal()`: Punto de entrada principal que permite seleccionar una acción en relación con los Estudiantes y las Asignaturas. Funcionalidad: 
 * >    + Genero un bucle que finalizara cuando se indique con una opción del menú.
 * >    + Muestro el menú. Ejemplo:
 * >> "Menú Principal:
 * >> 1. Agregar Estudiante / Asignatura
 * >> 2. Eliminar Estudiante / Asignatura
 * >> 3. Mostrar Estudiantes / Asignaturas
 * >> 4. Matricular Estudiante
 * >> 5. Desmatricular Estudiante
 * >> 6. Añadir Calificacion
 * >> 7. Mostrar Historial de un Estudiante
 * >> 8. Buscar Estudiante / Asignatura
 * >> 0. Salir del programa"
 * >    + Pido una opción con "prompt" y está la uso en un "switch". En función de la opción que se seleccione hará una cosa u otra.
 * > - `menúSecundario()`: Menú que permite seleccionar Estudiantes o Asignaturas. Usando en las opciones de "1. Agregar Estudiante / Asignatura" o "2. Eliminar Estudiante / Asignatura", entre otras. Ejemplo:
 * >> "Seleccione una opcion: 
 * >> 1. Estudiantes 
 * >> 2. Asignaturas 
 * >> 0. Salir"
 * >
 * > ### Funciones Auxiliares:
 * > - `seleccionarEstudiante()`: Muestra una lista numerada de los Estudiantes registrados, permitiendo seleccionar uno para realizar operaciones con él. Usado en "2. Eliminar Estudiante / Asignatura", por ejemplo.
 * > - `seleccionarAsignatura()`: Muestra una lista numerada de las Asignaturas registradas, permitiendo seleccionar una para realizar operaciones con ella. Usado en "2. Eliminar Estudiante / Asignatura", por ejemplo.
 * > - `mostrarAsignaturasMatricula(posicion_Est)`: Con el valor que se pasa por parámetros se obtiene el alumno. De esta manera, permite ver todas las Asignaturas que están registradas y al lado en cuales el alumno está matriculado. Usado en "4. Matricular Estudiante".
 * > - `mostrarAsignaturasEstudiante(posicion_Est)`: Con el valor que se pasa por parámetros se obtiene el alumno. De esta manera, permite mostrar solo las asignaturas en las que se encuentra matriculado este. Usado en "5. Desmatricular Estudiante".
 * >
 * > ### Lógica de Iteracción:
 * > El funcionamiento del proyecto es el siguiente:
 * > - Se muestra el menú principal por consola y se piede con un "prompt" que se introduzca una opción. Una vez seleccionada se seleccionara en el "switch" la opción indicada, ejecutando los procesos necesarios para realizar el proceso seleccionado.
 * > - Cuando se halla completado el proceso se volvera al menú principal, de esta manera se podrá seleccionar otra opción o se podrá salir del programa indicando la opción de salida.
 * >
 * > ### Notas:
 * > - Todo el sistema usa "console.log" para mostrar datos, "prompt" para recoger datos de entrada y "console.clear()" para limpiar la consola (para que queda algo mejor).
 * > - Se tiene en cuenta que el usuario, en los menús, seleccione una opción no valida, indicando a través de un "alert()" que ha introducido una opción no válida.
 * > ---
 */

/**
 * @function
 * @description Muestra el menú secundario y recoge la opción indicada.
 * 
 * @returns {string} La opción indicada.
 * 
 * @example
 * // Devolvera lo que el usuario introduzca.
 * // Por ejemplo: 2
 */
export function menuSecundario() {
    console.log("Seleccione una opcion: \n" +
                "1. Estudiantes \n" +
                "2. Asignaturas \n" +
                "0. Salir"
    );

    return prompt("Seleccione una opcion: ");
}

/**
 * @function
 * @description Muestra el menú de Estudiantes y recoge la opción indicada.
 * 
 * @returns {string|number} La opción indicada.
 * 
 * @example
 * // Devolvera lo que el usuario introduzca.
 * // Por ejemplo: 2
 */
export function seleccionarEstudiante() {
    let lista_Estudiantes = "";
    let contador = 1;

    lista.estudiantes.forEach(alumno => { 
        lista_Estudiantes += `${contador} - [${alumno.id}] ${alumno.nombre}\n`;
        contador++; 
    });

    console.log("Seleccione un Estudiante:\n" +
                `${lista_Estudiantes}`+
                "0 - Salir");
    
    return prompt("Seleccione una opcion: ") || 0;
}

/**
 * @function
 * @description Muestra el menú de Asignaturas y recoge la opción indicada.
 * 
 * @returns {string|number} La opción indicada.
 * 
 * @example
 * // Devolvera lo que el usuario introduzca.
 * // Por ejemplo: 2
 */
export function seleccionarAsignatura() {
    let lista_Asignaturas = "";
    let contador = 1;

    lista.asignaturas.forEach(materia => { 
        lista_Asignaturas += `${contador} - ${materia.nombre}\n`;
        contador++; 
    });

    console.log("Seleccione una Asignatura:\n" +
                `${lista_Asignaturas}`+
                "0 - Salir");
    
    return prompt("Seleccione una opcion: ") || 0;
}

/**
 * @function
 * @description Muestra todas las Asignaturas registradas e indica en cuales está matriculado el Estudiante.
 * 
 * @param {number} posicion_Est - Índice del Estudiante en "lista.estudiantes". 
 * 
 * @returns {string|number} La opción indicada.
 * 
 * @example
 * // Devolvera lo que el usuario introduzca.
 * // Por ejemplo: 2
 */
export function mostrarAsignaturasMatricula(posicion_Est) {
    
    // Compruebo que la posición sea positiva y no sea mayor a la cantidad de Estudiantes que hay en Lista.
    if (posicion_Est > -1 && posicion_Est < lista.estudiantes.length) {
        const alumno = lista.estudiantes.at(posicion_Est);

        let lista_Asignaturas = `Asignaturas para el Estudiante ${alumno.nombre}: \n`;
        let contador = 1;

        lista.asignaturas.forEach(materia => { 
            const matriculacion = alumno.asignaturas.includes(materia) ? "[Matriculado]" : "";
            lista_Asignaturas += `${contador} - ${materia.nombre} ${matriculacion}\n`;
            contador++;
        });

        console.log(` ${lista_Asignaturas}` +
                    "0 - Salir");
        
        return prompt("Seleccione una opcion: ") || 0;
    }else {
        return lista.asignaturas.length + 2; // Devuelvo la cantidad de Estudiantes + 2.
    }
}

/**
 * @function
 * @description Muestra todas las Asignaturas en las que está matriculado el Estudiante.
 * 
 * @param {number} posicion_Est - Índice del Estudiante en "lista.estudiantes".
 * 
 * @returns {string|number} La opción indicada.
 * 
 * @example
 * // Devolvera lo que el usuario introduzca.
 * // Por ejemplo: 2
 */
export function mostrarAsignaturasEstudiante(posicion_Est) {

    if (posicion_Est > -1 && posicion_Est < lista.estudiantes.length) {
        const alumno = lista.estudiantes.at(posicion_Est);

        let lista_Asignaturas = `Asignaturas para el Estudiante ${alumno.nombre}: \n`;
        let contador = 1;

        lista.asignaturas.forEach(materia => { 
            if (alumno.asignaturas.includes(materia)) {

                const notas = materia.obtenerCalificaciones(alumno.id);
                lista_Asignaturas += `${contador} - ${materia.nombre} [${notas.join(" - ")}] \n`;
                contador++;
            }
        });

        console.log(` ${lista_Asignaturas}` +
                    "0 - Salir");
        
        const opcion = prompt("Seleccione una opcion: "); 
        return opcion < contador ? opcion : lista.asignaturas.length + 2;
    }else {
        return lista.asignaturas.length + 2;
    }
}