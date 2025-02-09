/**
 * @class Asignatura
 * Clase que crea las asignaturas y contiene las calificaciones de los estudiantes.
 * > ---
 * > ### Atributos:
 * > - `#nombre`: Nombre para las asignaturas. [String]
 * > - `#calificaciones`: Mapa que contendrá el ID el Estudiante y sus calificaciones. [Object]
 * >
 * > ### Constructor:
 * > - Lo primero que hago es verificar si el nombre es válido (solo letras y espacios).
 * >     + Si es válido, le asigno el nombre al atributo "this.#nombre" y el atributo "this.#calificacion" lo inicializo a un mapa vacío.
 * >     + Si no es válido, mostrará un error indicando que el nombre no es válido.
 * >
 * > ### Getter:
 * > - Declaro el getter de nombre, que me devuelve el nombre de la Asignatura.
 * >
 * > ### Métodos:
 * > - `obtenerCalificaciones(id_Estudiante)`: Devuelvo un array con las calificaciones del Estudiante que paso por parámetros, de una asignatura determinada.
 * > - `addCalificacion(id_Estudiante, calificacion)`: Añade una nota al Estudiante en una asignatura determinada. Pide por parámetros el id_Estudiante y la calificación a añadir.
 * >     + 1º - Comprueba que la calificación es correcta (un número y, >0 y <10). Si no es correcta, lanza un error.
 * >     + 2º - Comprueba si "this.#calificaciones" ya tiene registrado el ID del Estudiante.
 * >         - Si tiene dentro ya una Key que es la del Id del Estudiante, le añade otra calificación.
 * >         - Si no, añade de un nuevo id_Estudiante y una calificación a "this.#calificacion".
 * >> ( Compruebo con "mapa.has.(key)", añado calificación con "mapa.get(key).push(valor)" y añado uno nuevo con "mapa.set(key, [valor])").
 * > - `calcularPromedioGeneral()`: Calcula el promedio de las calificaciones que hay en una Asignatura. Para hacerlo hago lo siguiente:
 * >     + 1º - Declaro dos variables:
 * >         - "total_Notas": contendrá la suma total de todas las notas. [Number]
 * >         - "cantidad_Notas":  contendrá el número total de notas. [Number]
 * >     + 2º - Luego recorro "this.#calificaciones" (usando un .forEach).
 * >     + 3º - Dentro de este creo:
 * >         - "suma_Notas": variable que sumará todas las notas (usando .reduce).
 * >         - "total_Notas": sumará todas las suma_Notas con la iteración del bucle.
 * >         - "contidad_Notas": sumará la cantidad de notas que tiene cada Estudiante.
 * >    + 4º - Compruebo si hay alguna calificación (total_Notas > 0):
 * >        - Si no, devuelvo "Sin calificaciones".
 * >       - Si tenia, devuelvo el cálculo del promedio (total_Notas / cantidad_Notas), con dos decimales (usando .toFixed(2) -> [String]).
 * > - `calcularPromedioEstudiante(id_Estudiante)`: Calcula el promedio de las calificaciones de un Estudiante en una Asignatura. Para hacerlo hago lo siguiente:
 * >     + 1º - Declaro:
 * >         - "notas": usa el método "obtenerCalificaciones(id_Estudiante)" para obtener las calificaciones.
 * >         - "total_Notas": sumará todas las notas.
 * >         - "cantidad_Notas": obtendrá la cantidad de notas.
 * >    + 2º - Y por último, devuelvo lo mismo que en el método anterior.
 * > - `mostrarAsignaturas()`: Sirve para mostrar todas las Asignaturas de una forma formateada.
 * > ---
 */
export class Asignatura{

    // Atributos privados
    #nombre;
    #calificaciones;

    /**
     * Constructor de la clase Asignatura que crea una instancia de esta.
     * 
     * @param {string} nombre - Nombre de la Asignatura.
     * @throws {Error} Si el nombre no esta formado solo por letras y espacios.
     * 
     * @example
     * // Crear una instancia de Asignatura.
     * const asignatura = new Asignatura("DAWES");
     */
    constructor(nombre) {

        if ((/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/).test(nombre)) {
            this.#nombre = nombre;
            this.#calificaciones = new Map();
        }else{
            throw new Error("El nombre de la Asignatura es erroneo");
        }
    }

    /**
     * Obtiene el nombre de la Asignatura.
     * 
     * @returns {string} Nombre de la Asignatura.
     */
    get nombre() {
        return this.#nombre;
    }
    
    // Metodos de la clase Asignatura.
    /**
     * @function
     * @description Obtener calificaciones de un Estudiante en una Asignatura.
     * 
     * @param {string} id_Estudiante - ID del Estudiante.
     * @returns {number[]} Array con las calificaciones del Estudiante en una Asignatura.
     * 
     * @example
     * // Devuelve un array con las calificaciones del Estudiante.
     * // Por ejemplo: [5, 10, 7, 8]
     */
    obtenerCalificaciones(id_Estudiante) {
        return this.#calificaciones.get(id_Estudiante) || [];
    }
    
    /**
     * @function
     * @description Añade una calificación para un Estudiante en una Asignatura.
     * 
     * @param {string} id_Estudiante - ID del Estudiante.
     * @param {number} calificacion - Calificación a añadir.
     * 
     * @throws {Error} Si la calificación no es un número o es NaN.
     * @throws {Error} Si la calificación no es válida (0 a 10).
     */
    addCalificacion(id_Estudiante, calificacion) {

        if (typeof calificacion !== "number" || isNaN(calificacion)) {
            throw new Error(`La calificación asignada a la asignatura ${this.nombre} no es un numero`);
        }

        if (calificacion < 0 || calificacion > 10) {
            throw new Error(`La calificacón asignada a la asignatura ${this.#nombre} no es valida (0 a 10)`);
        }
         
        if (this.#calificaciones.has(id_Estudiante)) {

            this.#calificaciones.get(id_Estudiante).push(calificacion);
        }else{

            this.#calificaciones.set(id_Estudiante, [calificacion]);
        }
    }

    /**
     * @function
     * @description Calcula el promedio general de las calificaciones totales, de una Asignatura.
     * 
     * @returns {string | number} Promedio General o sin calificaciones.
     * 
     * @example
     * // Devuelve el promedio general de las calificaciones o, en su defecto, "sin calificaciones" .
     * // Por ejemplo: 7.50
     */
    calcularPromedioGeneral() {

        let total_Notas = 0;
        let cantidad_Notas = 0;
    
        this.#calificaciones.forEach((notas, id) => {

            let suma_Notas = 0;
            suma_Notas = notas.reduce((total, valorAct) => total + valorAct, 0);
            total_Notas += suma_Notas;

            cantidad_Notas += notas.length;
        });

        return total_Notas > 0 ? (total_Notas / cantidad_Notas).toFixed(2) : "Sin calificaciones"; 
    }

    /**
     * @function
     * @description Calcula el promedio de las calificaciones de un Estudiante en una Asignatura.
     * 
     * @param {string} id_Estudiante - ID del Estudiante. 
     * 
     * @returns {string|number} Promedio del Estudiante en una Asignatura.
     * 
     * @example
     * // Devuelve el promedio de las calificaciones de un Estudiante en una Asignatura o, en su defecto, "sin evaluar".
     * // Por ejemplo: 7.50
     */
    calcularPromedioEstudiante(id_Estudiante) {

        const notas = this.obtenerCalificaciones(id_Estudiante);
        const total_Notas = notas.reduce((total, valorAct) => total + valorAct, 0);
        const cantidad_Notas = notas.length; 

        return total_Notas > 0 ? (total_Notas / cantidad_Notas).toFixed(2) : "Sin evaluar";
    }

    /**
     * @function
     * @description Envio los datos de la Asignatura en forma de matriz.
     * 
     * @returns {Object} Un objeto con los datos de la Asignatura.
     */
    mostrarAsignaturas() {
        return {
            nombre: this.#nombre,
            notas: Array.from(this.#calificaciones),
            promedio: this.calcularPromedioGeneral(),
        };
        
        
    }
}