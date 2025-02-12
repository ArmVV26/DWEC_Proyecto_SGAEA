import { Persona } from "./Persona.js";

/**
 * @class Estudiante
 * Clase que hereda de Persona y gestiona la información de los Estudiantes.
 * 
 * > ---
 * > ### Atributos:
 * > - `static id_contador = 1`: Contador global para generar IDs. [Number]
 * > - `static id_Disponibles = []`: Array que contendrá los IDs libres. [Array]
 * > - `#id`: ID del Estudiante. [String]
 * > - `#asignatura`: Lista de Asignaturas matriculadas del Estudiante. [Array<Asignatura>]
 * > - `#historial`: Historial de las matrículas y desmatrículas (con fecha) del Estudiante. [Array]
 * >
 * > ### Constructor:
 * > - Captura posibles errores al generar la instancia Persona. Por el nombre o la edad.
 * > - Llama al constructor de la clase Persona usando "super(nombre, edad, direccion)".
 * > - Genera el ID del Estudiante. Para generar el ID:
 * >     + En la variable "id_gen_letras" obtiene las 3 primeras letras del nombre.
 * >     + Dos posibilidades:
 * >         - Si "Estudiante.id_Disponibles" tiene valores (un Estudiante ha sido eliminado de la lista), se le asigna el menor número y se elimina de "id_Disponibles".
 * >         - Si no tiene valores, se le asigna el siguiente número disponible que está indicado en la variable "id_contador". Y esta variable aumenta.
 * >     + Formatea el número con ".padStart(3, "0")".
 * >     + Este proceso generará un ID parecido a este: "ARM001".
 * > - Por último, inicializo los atributos que he declarado antes, a arrays vacíos.
 * >
 * > ### Getters:
 * > - Declaro los getters de id y asignaturas. El primero me devuelve el id y el segundo me devuelve un array con las Asignaturas matriculadas del Estudiante.
 * >
 * > ### Métodos:
 * > - `matricular(...asignaturas)`: Asigno una o varias Asignaturas al Estudiante. Funcionamiento:
 * >     + Recorre todas las asignaturas que se pasan por parámetros (con un .forEach).
 * >     + Para cada asignatura, se verifica que no este incluida en "this.#asignaturas".
 * >     + Si no lo está, se añade la asignatura a "this.#asignaturas" y a "this.#historial" un registro de esta matriculación.
 * > - `desmatricular(..asignaturas)`: Desasigno una o varias Asignaturas del Estudiante. El funcionamiento es parecido al método anterior pero usando el método ".splice" y en "this.#historial" se guarda como desmatriculación.
 * > - `agregarCalificacion(materia, nota)`: Añade una calificación al Estudiante en la Asignatura indicada. Para hacerlo hago lo siguiente:
 * >     + Compruebo que el Estudiante está matriculado en la Asignatura indicada en los parámetros.
 * >     + Si está matriculado, llamo al método de la clase Asignatura "addCalificacion(id_Estudiante, nota)" y le añado la nota. Se recogeriá el error si la nota no fuese válida.
 * > - `promedioTotalEstudiante()`: Calcula el promedio de notas del Estudiante en todas las Asignaturas matriculadas. El funcionamiento es semejante al método "calcularPromedioGeneral()" de la clase Asignatura, pero modifico:
 * >     + Para obtener las notas del Estudiante en un array, lo que hago es llamar al método de la clase Asignatura "obtenerCalificaciones(id_Estudiante)".
 * > - `mostrarHistorial()`: Mostrará el historial del Estudiante formateado. En "matricular" y "desmatricular" se guardaba un array compuesto de:
 * >     + En la posición [0], la fecha actual en Español (método privado #generarFechaActual()).
 * >     + En la posición [1], el nombre de la materia.
 * >     + En la posición [2], el nombre del proceso (matricula o desmatricula).
 * >> Recorro "this.#historial" y muestro los registros formateados. Por ejemplo: `06/12/2024 - DAWES - Matrícula/Desmatricula`.  
 * > - `mostrarPersona()`: Sirve para mostar los datos del Estudiante formateados.
 * > - `#generarFechaActual()`: Método privado que devuelve la fecha actual. Para hacerlo hago lo siguiente:
 * >     + Genero una instancia Date() (contiene toda la información del día actual).
 * >     + Luego formateo la fecha usando ".toLocaleDateString()" para convertirla en una cadena legible.
 * >         - Le indico que el idioma es Español ("es-ES").
 * >         - Le indico que el día lo muestre con dos dígitos (day: "2-digit").
 * >         - Le indico que el mes lo muestre con dos dígitos (month: "2-digit").
 * >         - Le indico que el año lo muestre con cuatro dígitos (day: "numeric").
 * > ---
 */
export class Estudiante extends Persona{

    // Atributos estáticos
    static id_contador = 1;
    static id_Disponibles = [];
    // Atributos privados
    #id;
    #asignatura;
    #historial;

    /**
     * Constructor de la clase Estudiante que crea una instancia de esta.
     * 
     * @param {string} nombre - Nombre del Estudiante.
     * @param {number} edad - Edad del Estudiante.
     * @param {Direccion} direccion - Instancia de la clase Direccion.
     * 
     * @example
     * // Crear una instancia de Estudiante.
     * const direccion = new Direccion("Avenida Andalucia", 45, 3, 18010, "Granada", "Granada");
     * const estudiante = new Estudiante("Armando Vaquero", 23, direccion);
     */
    constructor(nombre, edad, direccion) {
        
        super(nombre, edad, direccion); // Llamar al constructor de la clase Persona.
        
        const id_gen_letras = nombre.substring(0,3).toUpperCase(); // Genero las letras del ID del Estudiante.
            
        if (Estudiante.id_Disponibles.length !== 0) {

            const id_Minimo = Math.min(...Estudiante.id_Disponibles); // Consigo el valor del minimo ID.
            const id_gen_numeros = id_Minimo.toString().padStart(3,"0"); // Genero el codigo de numeros del Id.
            this.#id = `${id_gen_letras}${id_gen_numeros}`; // Añado el ID.

            const posicion = Estudiante.id_Disponibles.indexOf(id_Minimo); // Posición del ID usado.
            Estudiante.id_Disponibles.splice(posicion,1); // Eliminar posición de id_Disponibles.
        }else{
            const id_gen_numeros = Estudiante.id_contador.toString().padStart(3,"0"); 

            this.#id = `${id_gen_letras}${id_gen_numeros}`; // Añado el ID.

            Estudiante.id_contador++; // Aumenta el id_contador.
        }
        
        this.#asignatura = [];
        this.#historial = [];
        
    }
    
    /**
     * Obtiene el ID del Estudiante.
     * 
     * @returns {string} ID del Estudiante.
     */
    get id() {
        return this.#id;
    }
    /**
     * Obtiene las Asignaturas matriculadas del Estudiante.
     * 
     * @returns {Asignatura[]} Lista de Asignaturas matriculadas del Estudiante.
     */
    get asignaturas() {
        return this.#asignatura;
    }

    /**
     * Añade una Asignatura al Estudiante.
     * 
     * @param {Asignatura} materia - Asignatura a añadir.
     */
    set asignatura(materia) {
        this.#asignatura.push(materia);
    }
    /**
     * Añade un registro al historial del Estudiante.
     * 
     * @param {Array} registro - Registros a añadir.
     */
    set historial(registros) {
        this.#historial = registros;
    }

    // Metodos de la clase Estudiante.
    /**
     * @function
     * @description Matricula al Estudiante en una o varias Asignaturas. Añade un registro al historial.
     * 
     * @param  {...Asignaturas} asignaturas - Lista de Asignaturas a matricular. 
     */
    matricular(...asignaturas) {

        asignaturas.forEach(materia => {
            
            if (!this.#asignatura.includes(materia)) {
                this.#asignatura.push(materia); // Añado la Asignatura.

                this.#historial.push([ // Añado el registro en el historial.
                    this.#generarFechaActual(), // Genero la fecha actual en formato "dd/mm/yyyy".
                    materia.nombre,
                    "Matricula"
                ]);
            }
        });
    }

    /**
     * @function
     * @description Desmatricula al Estudiante en una o varias Asignaturas. Añade un registro al historial.
     * 
     * @param  {...Asignaturas} asignaturas - Lista de Asignaturas a desmatricular. 
     */
    desmatricular(...asignaturas) {

        asignaturas.forEach(materia => {

            if (this.#asignatura.includes(materia)) {
                const posicion = this.#asignatura.indexOf(materia); // Obtengo la posición.

                this.#asignatura.splice(posicion, 1); // Borro la Asignatura que me indica la posición.
                
                this.#historial.push([
                    this.#generarFechaActual(),
                    materia.nombre,
                    "Desmatricula"
                ]);
            }
        });
    }

    /**
     * @function
     * @description Añade una calificación a una Asignatura.
     * 
     * @param {Asignatura} materia - Asignatura en la que añadir la calificación. 
     * @param {number} nota - Calificación a añadir.
     */
    agregarCalificacion(materia, nota) {
        if (this.#asignatura.includes(materia)) {
            try{
                materia.addCalificacion(this.#id, nota);
            }catch (error) {
                console.error("Error - No se pudo añadir la nota: "+ error.message);
            }
        }
    }

    /**
     * @function
     * @description Calcula el promedio total de todas las calificaciones del Estudiante.
     * 
     * @returns {string | number} Promedio total del Estudiante.
     * 
     * @example
     * // Devuelve el promedio total de las calificaciones del Estudiante o, en su defecto, "sin evaluar".
     * // Por ejemplo: 7.50
     */
    promedioTotalEstudiante() {

        let total_Notas = 0;
        let cantidad_Notas = 0;

        this.#asignatura.forEach(materia => {

            const notas = materia.obtenerCalificaciones(this.#id);
            let suma_Notas = notas.reduce((total, valorAct) => total + valorAct, 0);
            total_Notas += suma_Notas;

            cantidad_Notas += notas.length;
        });

        return total_Notas > 0 ? (total_Notas / cantidad_Notas).toFixed(2) : "Sin evaluar";
    }

    /**
     * @function
     * @description Retorna el historial del Estudiante formateado.
     * 
     * @returns {Object} Historial del Estudiante.
     * 
     * @example
     * // Devuelve el historial del Estudiante formateado.
     * // Por ejemplo: [["06/12/2024", "DAWES", "Matricula"]]
     */
    mostrarHistorial() {
        return this.#historial;
    }

    /**
     * @function
     * @description Retorna los datos del Estudiante en un objeto formateado.
     * 
     * @returns {Object} Un objeto con los datos del Estudiante.
     * 
     * @example
     * // Devuelve un objeto con los datos del Estudiante formateados:
     * // Por ejemplo:
     * // {
     * //   id: "ARM001",
     * //   nombre: "Armando Vaquero",
     * //   edad: 23,
     * //   calle: "Una calle",
     * //   numero: 30,
     * //   piso: 1,
     * //   codpostal: 18010,
     * //   provincia: "Granada",
     * //   localidad: "Granada",
     * //   asignaturas: [
     * //     {
     * //       nombre: "DAWES",
     * //       notas: [["ARM001", [5, 7]]],
     * //       promedio: 6.00
     * //     }
     * //   ],
     * //   historial: [["11/02/2025", "DAWES", "Matricula"]]
     * // }
     */
    mostrarEstudiante() {
        // Mapeo las asignaturas matriculadas para obtener sus datos formateados.
        let datos_asignaturas = this.#asignatura.map(materia => {
            return {
                nombre: materia.nombre,
                notas: materia.obtenerCalificaciones(this.#id),
                promedio: materia.calcularPromedioEstudiante(this.#id),
            }
        });

        return {
            id: this.#id,
            nombre: this.nombre,
            edad: this.edad,
            ...this.direccion,
            asignaturas: datos_asignaturas,
            historial: this.#historial,
        };
    }

    /**
     * @function
     * @description Método privado que genera la fecha actual en formato "dd/mm/yyyy".
     * 
     * @returns {string} Fecha actual formateada en Español.
     * 
     * @example
     * // Devuelve la fecha actual en formato "dd/mm/yyyy".
     * // Por ejemplo: 06/12/2024
     */
    #generarFechaActual() {
        const fecha_Actual = new Date(); // Instancia de Date().
        return fecha_Actual.toLocaleDateString("es-ES", {
               day: "2-digit",
               month: "2-digit",
               year: "numeric" 
        });
    }
}