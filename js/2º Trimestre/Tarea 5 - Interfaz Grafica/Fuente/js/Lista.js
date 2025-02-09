// Importo las clases Estudiante y Asignatura
import { Estudiante } from "./Estudiante.js";
import { Asignatura } from "./Asignatura.js";

/**
 * @class Lista
 * Clase que gestiona los Estudiantes y Asginaturas, permitiendo agregar, eliminar, listar o buscar los elementos que contienen estas listas.
 * 
 * > ---
 * > ### Atributos:
 * > - `#estudiantes`: Lista que contendrá todos los Estudiantes. [Array<Estudiante>]
 * > - `#asignaturas`: Lista que contendrá todas las Asignaturas. [Array<Asignatura>]
 * >
 * > ### Constructor:
 * > - Lo que hago es inicializar las listas como arrays vacíos.
 * >
 * > ### Getters:
 * > - Declaro dos métodos Getters para las listas estudiantes y asignaturas.
 * >
 * > ### Métodos:
 * > - `agregarEstudiante(alumno)`: Añade un Estudiante a "this.#estudiantes". Funcionalidad:
 * >     + Compruebo si el Estudiante ya se encuentra dentro.
 * >     + Si está dentro, devuelvo un mensaje indicándolo.
 * >     + Si no, lo añado y muestro un mensaje indicando que lo he añadido.
 * > - `agregarAsignatura(materia)`: Añade una Asignatura a "this.#asignaturas". Su funcionalidad es la misma que el anterior método, pero con Asignatura.
 * > - `eliminarEstudiante(alumno)`: Elimina un Estudiante de "this.#estudiantes". Funcionalidad:
 * >     + Busco la posición en "this.#estudiantes" del alumno que paso por parámetros.
 * >     + Si la posición es !== -1, el Estudiante está en la lista. Se elimina el alumno de "this.#estudiantes" y se guarda el número del ID en la variable constante de la clase Estudiante, "id_Disponibles".
 * >     + Si es eliminado, mostrarar un mensaje indicándolo, y si no es eliminado, se indicara con un mensaje también.
 * > - `eliminarAsignatura(materia)`: Elimina una Asignatura de "this.#asignaturas". Su funcionalidad es la misma que el anterior método, pero con Asignatura. No añade nada a "id_Disponibles".
 * > - `buscarEstudiante(patron)`: Busca Estudiantes en "this.#estudiantes" por un patrón de su nombre. Funcionalidad:
 * >     + Con el método ".filter", recorro todos los alumnos que están registrados en "this.#estudiantes" y con su nombre en minúscula, compruebo si contiene el patrón que paso por parámetros en el nombre. Si lo contiene, este alumno se guarda en la variable "resultado".
 * >     + Compruebo que la variable "resultado" no esta vacía:
 * >         - Si no lo está, recorre "resultado" y ejecuta para cada instacia el método de la clase Estudiante, "mostrarEstudiante()".
 * >         - Si lo está, muestra un mensaje indicando que no existen Estudiantes registrados con ese patrón.
 * > - `buscarAsignatura(patron)`: Busca Asignaturas en "this.#asignaturas" por un patrón de su nombre. Su funcionalidad es la misma que la del anterior método, pero con Asignatura.
 * > ---
 */
export class Lista {

    // Atributos privados
    #estudiantes;
    #asignaturas;

    /**
     * Constructor de la clase Lista.
     * 
     * @example
     * // Crear una instancia de Lista.
     * const lista = new Lista();
     */
    constructor() {
        this.#estudiantes = [];
        this.#asignaturas = [];
    }

    /**
     * Obtiene la lista de Estudiantes.
     * 
     * @returns {Estudiante[]} Lista de Estudiantes.
     */
    get estudiantes() {
        return this.#estudiantes;
    }
    /**
     * Obtiene la lista de Asignaturas.
     * 
     * @returns {Asignatura[]} Lista de Asignaturas.
     */
    get asignaturas() {
        return this.#asignaturas;
    }

    // Metodos de la clase Lista
    /**
     * @function
     * @description Agrega un Estudiante a "this.#estudiantes".
     * 
     * @param {Estudiante} alumno - Instancia de la clase Estudiante.
     * @returns {string} Mensaje que indica si el Estudiante a sido añadido o no.
     * 
     * @example
     * // Añadir un Estudiante a la lista.
     * // Por ejemplo: "El estudiante ha sido añadido"
     */
    agregarEstudiante(alumno) {
        if (this.#estudiantes.includes(alumno)) {
            return "El estudiante ya está en la lista";
        }else {
            this.#estudiantes.push(alumno);
            return "El estudiante ha sido añadido";
        }
    }

    /**
     * @function
     * @description Agrega una Asignatura a "this.#asignaturas".
     * 
     * @param {Asignatura} materia - Instancia de la clase Asignatura. 
     * @returns {string} Mensaje que indica si la Asignatura a sido añadido o no.
     * 
     * @example
     * // Añadir una Asignatura a la lista.
     * // Por ejemplo: "La asignatura ha sido añadida"
     */
    agregarAsignatura(materia) {
        if (this.#asignaturas.includes(materia)) {
            return "La asignatura ya está en la lista";
        }else {
            this.#asignaturas.push(materia);
            return "La asignatura ha sido añadida";
        }
    }

    /**
     * @function
     * @description Elimina un Estudiante a "this.#estudiantes".
     * 
     * @param {Estudiante} alumno - Instancia de la clase Estudiante. 
     * @returns {string} Mensaje que indica si el Estudiante a sido eliminado o no.
     * 
     * @example
     * // Eliminar un Estudiante de la lista.
     * // Por ejemplo: "Estudiante eliminado
     */
    eliminarEstudiante(alumno) {
        const posicion = this.#estudiantes.indexOf(alumno);
        if (posicion !== -1) {
            this.#estudiantes.splice(posicion, 1);

            Estudiante.id_Disponibles.push(parseInt(alumno.id.substring(3))); // Guardo el ID en id_Disponibles

            return "Estudiante eliminado";
        }else {
            return "El estudiante no esta en la lista";
        }
    }

    /**
     * @function
     * @description Elimina una Asignatura a "this.#asignaturas".
     * 
     * @param {Asignatura} materia - Instancia de la clase Asignatura. 
     * @returns {string} Mensaje que indica si la Asignatura a sido eliminado o no.
     * 
     * @example
     * // Eliminar una Asignatura de la lista.
     * // Por ejemplo: "Asignatura eliminada"
     */
    eliminarAsignatura(materia) {
        const posicion = this.#asignaturas.indexOf(materia);
        if (posicion !== -1) {
            this.#asignaturas.splice(posicion, 1);
            return "Asignatura eliminada";
        }else {
            return "La asignatura no esta en la lista";
        }
    }

    /**
     * @function
     * @description Busca Estudiantes en "this.#estudiantes" por un patrón de su nombre.
     * 
     * @param {string} patron - Cadena a buscar en los nombres de los Estudiantes. 
     * @returns {string} Cadena formateada de los Estudiantes o mensaje indicando que no sean encotrado.
     * 
     * @example
     * // Buscar un Estudiante en la lista.
     * // Por ejemplo:
     * // ────────────────────────────────────
     * //     ARM001 - Armando Vaquero
     * // ===================================
     * // Edad: 23
     * // Direccion:
     * //    - Calle      : Avenida Andalucia
     * //    - Numero     : 45
     * //    - Piso       : 3
     * //    - Cod. Postal: 18010
     * //    - Provincia  : Granada
     * //    - Localidad  : Granada
     * // ===================================
     * //    Asignaturas y Calificaciones
     * // ===================================
     * // DAWES: 5 - 10 - 7 - 8 | Promedio: 7.50
     * // -----------------------------------
     * // Promedio Total: 7.50 
     */
    buscarEstudiante(patron) {
        const resultado = this.#estudiantes.filter(alumno => 
            alumno.nombre.toLowerCase().includes(patron.toLowerCase())
        );

        if (resultado.length > 0) {
            return resultado.map(alumno => alumno.mostrarEstudiante()).join("\n");
        }else {
            return "No se ha encontrado estudiantes con ese patron";
        }
    }

    /**
     * @function
     * @description Busca Asignaturas en "this.#asignaturas" por un patrón de su nombre.
     * 
     * @param {string} patron - Cadena a buscar en los nombres de las Asignaturas. 
     * @returns {string} Cadena formateada de las Asignaturas o mensaje indicando que no sean encotrado.
     * 
     * @example
     * // Buscar una Asignatura en la lista.
     * // Por ejemplo:
     * // ───────────────────────────────
     * //            DAWES
     * // ===============================
     * // - DAWES: 5 - 10 - 7 - 8
     * // ------------------------------
     * //   - Promedio = 7.50
     */
    buscarAsignatura(patron) {
        const resultado = this.#asignaturas.filter(materia => 
            materia.nombre.toLowerCase().includes(patron.toLowerCase())
        );

        if (resultado.length > 0) {
            return resultado.map(materia => materia.mostrarAsignaturas()).join("\n");
        }else {
            return "No se ha encontrado materias con ese patron";
        }
    }

    /**
     * @function
     * @description Devuelve un array de objetos con los datos de todos los Estudiantes.
     * 
     * @returns {Object[]} Array de objetos.
     */
    obtenerDatosEstudiantes() {
        return this.estudiantes.map(alumno => alumno.mostrarEstudiante());
    }

    /**
     * @function
     * @description Devuelve un array de objetos con los datos de todos las Asignaturas.
     * 
     * @returns {Object[]} Array de objetos.
     */
    obtenerDatosAsignaturas() {
        return this.asignaturas.map(asignatura => asignatura. mostrarAsignaturas());
    }
}