/*
    ┌───────────────────────────────────────────────────────────────────┐
    │ SISTEMA DE GESTIÓN ACADÉMICA DE ESTUDIANTES Y ASIGNATURAS (SGAEA) │
    └───────────────────────────────────────────────────────────────────┘
    
    * Autor: Armando Vaquero Vargas
    * Curso: 2º DAW
    * Fecha: 10/12/2024
    
    * Descripción:
        En este proyecto se gestiona los datos académicos de estudiantes y asignaturas, proporcionando
        funcionalidades como matriculación, desmatriculación, cálculo de promedios y búsquedas.  
*/
/*
    ┌─────────────┐
    │ C L A S E S │
    └─────────────┘
    * En esta sección se definen las clases usadas en el proyecto. Cada clase contiene sus atributos,
        constructores y métodos.
*/
/*
    CLASE DIRECCION
    ───────────────
    * Clase que define los aspectos de la dirección de una persona.

    * Declaro los atributos:
        - #calle: Nombre de la calle. [String]
        - #numero: Numero de la casa o el bloque. [Number]
        - #piso: Piso del bloque, si es el caso. [Number]
        - #cod_postal: Codigo postal de la localidad donde viva. [Number]
        - #provincia: Nombre de la provincia. [String]
        - #localidad: Nombre de la localidad. [String]
    
    * En el constructor:
        - Asigno los valores que se pasan en el constructor con sus respectivos atributos.
        - En el caso de el numero y del piso, compruebo que sea un número positivo y sin 
            decimales. Si no, le asigno el valor predeterminado, 0.
        - Tambien compruebo que el código postal sea de 5 dígitos. Si no, le asigno el 
            valor predeterminado 0.

    * Como métodos, creo:
        - `mostrarDireccion()`: Sirve para mostrar todos los valores de la dirección.
*/
class Direccion{

    // Atributos privados
    #calle;
    #numero;
    #piso;
    #cod_postal;
    #provincia;
    #localidad;

    /**
     * Constructor de la clase Dirección. 
     * 
     * @param {string} calle - Nombre de la calle.
     * @param {number} numero - Número de la casa o bloque.
     * @param {number} piso - Número del piso (0 si no aplica).
     * @param {number} cod_postal - Código postal (5 dígitos).
     * @param {string} provincia - Nombre de la provincia.
     * @param {string} localidad - Nombre de la localidad.
     */
    constructor(calle, numero, piso, cod_postal, provincia, localidad) {

        this.#calle = calle;
        this.#numero = (/^\d+$/).test(numero) ? numero : 0;
        this.#piso = (/^\d+$/).test(piso) ? piso : 0;
        this.#cod_postal = (/^\d{5}$/).test(cod_postal) ? cod_postal : 0;
        this.#provincia = provincia;
        this.#localidad = localidad; 
    }

    // Metodos de la clase Direccion
    /**
     * Muestra una representación de los datos formateados de la Direccion.
     * 
     * @returns {string} - Cadena con los detalles completos de la dirección.
     */
    mostrarDireccion() {
        return `   - Calle      : ${this.#calle}        \n` +
               `   - Numero     : ${this.#numero}       \n` +
               `   - Piso       : ${this.#piso}         \n` +
               `   - Cod. Postal: ${this.#cod_postal}   \n` +
               `   - Provincia  : ${this.#provincia}    \n` +
               `   - Localidad  : ${this.#localidad}    \n`;
    }
}

/*
    CLASE PERSONA
    ───────────────
    * Clase que sirve para poder implementar la herencia con la clase Estudiante.

    * Declaro los atributos:
        - #nombre: Nombre de la person. [String]
        - #edad: Edad de la persona. [Number]
        - #direccion: Dirección de la persona. [Object]
    
    * En el constructor:
        - Lo primero que hago es verificar:
            + Que el nombre sea válido (solo letras y espacios).
            + Y que la edad sea  válida (entre 6 y 80 años).
        - Si son correctos los valores, le asigno los valores que paso por parámetros a los
            atributos.
        - Si no son correctos, lanzo un error indicando que el nombre o la edad no son válidos.

    * Los Getters:
        - Declaro los getters de los atributos nombre, edad y dirección. Este último, llamando al 
            método de la clase Direccion, mostrarDireccion().
*/
class Persona {

    // Atributos privados
    #nombre;
    #edad;
    #direccion;

    /**
     * Constructor de la clase Persona.
     * 
     * @param {string} nombre - Nombre de la Persona.
     * @param {number} edad - Edad de la Persona.
     * @param {object} direccion - Dirección de la Persona.
     * @throws {Error} - Si el nombre contiene números o si la edad no es válida (entre 6 y 80).
     */
    constructor(nombre, edad, direccion) {
        
        if ((/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/).test(nombre) && (edad >= 6 && edad <= 80)) {
            
            this.#nombre = nombre;
            this.#edad = edad;
            this.#direccion = direccion;    
        }else{
            throw new Error("El nombre debe de tener solo letras y espacios. | La edad tiene que estar entre los 6 y 80 años");
        }
    }

    /**
     * Getter de la clase Persona.
     * 
     * @returns {string} - Nombre de la Persona.
     * @returns {number} - Edad de la Persona.
     * @returns {string} - Direccón de la Persona (método mostrarDireccion()).
     */
    get nombre() {
        return this.#nombre;
    }
    get edad() {
        return this.#edad;
    }
    get direccion() {
        return this.#direccion.mostrarDireccion();
    }

}

/* 
    CLASE ASIGNATURA
    ────────────────
    * Clase que crea las asignaturas y contiene las calificaciones de los estudiantes.

    * Declaro los atributos:
        - #nombre: Nombre para las asignaturas. [String]
        - #calificaciones: Mapa que contendrá el ID el Estudiante y sus calificaciones. [Object]
            Ejemplo: [ {idEstudiante: [calificaciones]} ].

    * En el constructor:
        - Lo primero que hago es verificar si el nombre es válido (solo letras y espacios).
            + Si es válido, le asigno el nombre al atributo "this.#nombre" y el atributo 
                "this.#calificacion" lo inicializo a un mapa vacío.
            + Si no es válido, mostrará un error indicando que el nombre no es válido.
    
    * Getter:
        - Declaro el getter de nombre, que me devuelve el nombre de la Asignatura.
    
    * Como métodos, creo:
        - `obtenerCalificaciones(id_Estudiante)`: Devuelvo un array con las calificaciones del 
            Estudiante que paso por parámetros, de una asignatura determinada.

        - `addCalificacion(id_Estudiante, calificacion)`: Añade una nota al Estudiante en una 
            asignatura determinada. Pide por parámetros el id_Estudiante y la calificación a añadir.
            1º - Comprueba que la calificación es correcta (un número y, >0 y <10).
                + Si no es correcta, lanza un error.
            2º - Comprueba si "this.#calificaciones" ya tiene registrado el ID del Estudiante.
                + Si tiene dentro ya una Key que es la del Id del Estudiante, le añade otra calificación.
                + Si no, añade de un nuevo id_Estudiante y una calificación a "this.#calificacion".
            ---------------------------------------------------------------------------------------------
            ( Compruebo con "mapa.has.(key)", añado calificación con "mapa.get(key).push(valor)" y añado
              uno nuevo con "mapa.set(key, [valor])").
            ---------------------------------------------------------------------------------------------

        - `calcularPromedioGeneral()`: Calcula el promedio de las calificaciones que hay en una Asignatura.
            Para hacerlo hago lo siguiente:
            1º - Declaro dos variables:
                + "total_Notas": contendrá la suma total de todas las notas. [Number]
                + "cantidad_Notas":  contendrá el número total de notas. [Number]
            2º - Luego recorro "this.#calificaciones" (usando un .forEach).
            3º - Dentro de este creo:
                + "suma_Notas": variable que sumará todas las notas (usando .reduce).
                + "total_Notas": sumará todas las suma_Notas con la iteración del bucle.
                + "contidad_Notas": sumará la cantidad de notas que tiene cada Estudiante.  
            ---------------------------------------------------------------------------------------------
            (Para suma_Notas uso el método "array.reduce((vAntiguo, vNuevo) => vAntiguo + vNuevo, 0)")
            ---------------------------------------------------------------------------------------------
            4º - Compruebo si hay alguna calificación (total_Notas > 0):
                + Si no, devuelvo "Sin calificaciones".
                + Si tenia, devuelvo el cálculo del promedio (total_Notas / cantidad_Notas), con dos 
                    decimales (usando .toFixed(2) -> [String]).
        
        - `calcularPromedioEstudiante(id_Estudiante)`: Calcula el promedio de las calificaciones de un
            Estudiante en una Asignatura. Para hacerlo hago lo siguiente:
            1º - Declaro:
                + "notas": usa el método "obtenerCalificaciones(id_Estudiante)" para obtener las calificaciones.
                + "total_Notas": sumará todas las notas.
                + "cantidad_Notas": obtendrá la cantidad de notas.
            2º - Y por último, devuelvo lo mismo que en el método anterior.
        
        - `mostrarAsignaturas()`: Sirve para mostrar todas las Asignaturas de una forma formateada.
*/
class Asignatura{

    // Atributos privados
    #nombre;
    #calificaciones;

    /**
     * Constructor de la clase Asignatura.
     * 
     * @param {string} nombre - Nombre de la Asignatura.
     * @throws {Error} - Si el nombre no esta formado solo por letras y espacios.
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
     * Getter de la clase Asignatura.
     * 
     * @returns {string} - Nombre de la Asignatura.
     */
    get nombre() {
        return this.#nombre;
    }
    
    // Metodos de la clase Asignatura.
    /**
     * Obtener calificaciones de un Estudiante en una Asignatura.
     * 
     * @param {string} id_Estudiante - ID del Estudiante.
     * @returns {number[]} - Array con las calificaciones del Estudiante en una Asignatura.
     */
    obtenerCalificaciones(id_Estudiante) {
        return this.#calificaciones.get(id_Estudiante) || [];
    }
    
    /**
     * Añadir calificación para un Estudiante en una Asignatura.
     * 
     * @param {string} id_Estudiante - ID del Estudiante.
     * @param {number} calificacion - Calificación a añadir.
     * @throws {Error} - Si la calificación no es válida.
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
     * Calcula el promedio general de las calificaciones totales, de una Asignatura.
     * 
     * @returns {string | number} - Promedio General.
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
     * Calcula el promedio de las calificaciones de un Estudiante en una Asignatura.
     * 
     * @param {string} id_Estudiante - ID del Estudiante. 
     * @returns {string | number} - Promedio del Estudiante en una Asignatura.
     */
    calcularPromedioEstudiante(id_Estudiante) {

        const notas = this.obtenerCalificaciones(id_Estudiante);
        const total_Notas = notas.reduce((total, valorAct) => total + valorAct, 0);
        const cantidad_Notas = notas.length; 

        return total_Notas > 0 ? (total_Notas / cantidad_Notas).toFixed(2) : "Sin evaluar";
    }

    /**
     * Muestra una representación de los datos formateados de las Asignaturas y sus calificaciones.
     * 
     * @returns {string} - Cadena con los datos de las Asignaturas formateados.
     */
    mostrarAsignaturas() {
        let mostrar_Asig = "─────────────────────────────── \n" +
                           `            ${this.#nombre} \n` +
                           "=============================== \n";
        if (this.#calificaciones.size === 0) {
            mostrar_Asig += "Sin calificaciones \n" +
                            "============================== \n";  
        }else {
            this.#calificaciones.forEach((notas, id) => {
                mostrar_Asig += `${id}: ${notas.join(" - ")} \n`;
            });
            mostrar_Asig += "------------------------------ \n" +
                            `  - Promedio = ${this.calcularPromedioGeneral()} \n` +
                            "────────────────────────────── \n";   
        }

        return mostrar_Asig;
    }
}

/*
    CLASE ESTUDIANTE
    ────────────────
    * Clase que hereda de Persona y gestiona la información de los Estudiantes.
        Cada Estudiante tiene un ID único, Asignaturas en las que esta matriculado y un historial.

    * Declaro los atributos:
        - static id_contador = 1: Contador global para generar IDs. [Number]
        - static id_Disponibles = []: Array que contendrá los IDs libres. [Array]
        - #id: ID del Estudiante. [String]
        - #asignatura: Lista de Asignaturas matriculadas del Estudiante. [Array<Asignatura>]
        - #historial: Historial de las matrículas y desmatrículas (con fecha) del Estudiante. [Array]
    
    * En el constructor, lo que hago es: 
        1º - Capturar posibles errores al generar la instancia Persona. Por el nombre o la edad.
        2º - LLamo al constructor de la clase Persona usando "super(nombre, edad, direccion)".
        3º - Genero el ID del Estudiante.
        ------------------------------------------------------------------------------------------------
        Para generar el ID:
            1º - En la variable "id_gen_letras" obtengo las 3 primeras letras del nombre.
            2º - Ahora dos opciones:
                2.1º - Si "Estudiante.id_Disponibles" tiene valores (un Estudiante ha sido eliminado de
                    la lista), se le asigna el menor número, y este número se elimina de "id_Disponibles".
                2.2º - Si no tiene valores, se le asigna el siguiente número disponible que está indicado
                    en la variable "id_contador". Y esta variable aumenta.
            3º - Este número (independientemente de la opción) se formateará usando ".padStart(3, "0")".
            4º - Este proceso generará un ID parecido a este: "ARM001".
        ------------------------------------------------------------------------------------------------
        4º - Por último, inicializo los atributos que he declarado antes, a arrays vacios.
        
    * Los Getters:
        - Declaro los getters de id y asignaturas. El primero me devuelve el id y el segundo me devuelve
            un array con las Asignaturas matriculadas del Estudiante.

    * Como métodos, creo:
        - `matricular(...asignaturas)`: Asigno una o varias Asignaturas al Estudiante. Funcionamiento:
            1º - Recorre todas las asignaturas que se pasan por parámetros (con un .forEach).
            2º - Para cada asignatura, se verifica que no este incluida en "this.#asignaturas".
            3º - Si no lo está, se añade la asignatura a "this.#asignaturas" y a "this.#historial"
                un registro de esta matriculación.

        - `desmatricular(..asignaturas)`: Desasigno una o varias Asignaturas del Estudiante. El funcionamiento
            es parecido al método anterior pero usando el método ".splice" y en "this.#historial" se 
            guarda como desmatriculación.

        - `agregarCalificacion(materia, nota)`: Añade una calificación al Estudiante en la Asignatura indicada.
            Para hacerlo hago lo siguiente:
            1º - Compruebo que el Estudiante está matriculado en la Asignatura indicada en los parámetros.
            2º - Si está matriculado, llamo al método de la clase Asignatura "addCalificacion(id_Estudiante, nota)".
                y le añado la nota. Se recogeriá el error si la nota no fuese válida.

        - `promedioTotalEstudiante()`: Calcula el promedio de notas del Estudiante en todas las Asignaturas
            matriculadas. El funcionamiento es semejante al método "calcularPromedioGeneral()" de la clase 
            Asignatura, pero modifico:
            1º - Para obtener las notas del Estudiante en un array, lo que hago es llamar al método de la clase 
                Asignatura "obtenerCalificaciones(id_Estudiante)".
        
        - `mostrarHistorial()`: Mostrará el historial del Estudiante formateado. En "matricular" y "desmatricular" 
            se guardaba un array compuesto de:
                1º - En la posición [0], la fecha actual en Español (método privado #generarFechaActual()).
                2º - En la posición [1], el nombre de la materia.
                3º - En la posición [2], el nombre del proceso (matricula o desmatricula).
            Recorro "this.#historial" y muestro los registros formateados. Por ejemplo:
                `06/12/2024 - DAWES - Matrícula/Desmatricula`.
        
        - `mostrarPersona()`: Sirve para mostar los datos del Estudiante formateados.
        
        - `#generarFechaActual()`: Método privado que devuelve la fecha actual. Para hacerlo hago lo siguiente:
            1º - Genero una instancia Date() (contiene toda la información del día actual).
            2º - Luego formateo la fecha usando ".toLocaleDateString()" para convertirla en una cadena legible.
                + Le indico que el idioma es Español ("es-ES").
                + Le indico que el día lo muestre con dos dígitos (day: "2-digit")
                + Le indico que el mes lo muestre con dos dígitos (month: "2-digit")
                + Le indico que el año lo muestre con cuatro dígitos (day: "numeric")
*/
class Estudiante extends Persona{

    // Atributos estáticos
    static id_contador = 1;
    static id_Disponibles = [];
    // Atributos privados
    #id;
    #asignatura;
    #historial;

    /**
     * Constructor de la clase Estudiante.
     * 
     * @param {string} nombre - Nombre del Estudiante.
     * @param {number} edad - Edad del Estudiante.
     * @param {Direccion} direccion - Instancia de la clase Direccion.
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
     * Getter de la clase Estudiante.
     * 
     * @returns {string} - ID del Estudiante.
     * @returns {Asignatura[]} - Lista de Asignaturas matriculadas del Estudiante.
     */
    get id() {
        return this.#id;
    }
    get asignaturas() {
        return this.#asignatura;
    }

    // Metodos de la clase Estudiante.
    /**
     * Matricular al Estudiante en una o varias Asignaturas.
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
     * Desmatricular al Estudiante en una o varias Asignaturas.
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
     * Añade una calificación a una Asignatura.
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
     * Calcula el promedio total de todas las calificaciones del Estudiante.
     * 
     * @returns {string | number} - Promedio total del Estudiante.
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
     * Muestra una representación de los datos formateados del historial.
     * 
     * @returns {string} - Cadena con los datos del historial formateados.
     */
    mostrarHistorial() {
        const registros = `El historial del Estudiante ${this.nombre} es: \n` + 
            this.#historial.map(registro =>
                `${registro[0]} - ${registro[1]} - ${registro[2]}`
            ).join("\n");

        return registros;
    }

    /**
     * Muestra una representación de los datos formateados del Estudiante.
     * 
     * @returns {string} - Cadena con los datos el Estudiante formateados.
     */
    mostrarEstudiante() {
        let datos_asignaturas = "";

        this.#asignatura.forEach(materia => {
            const notas = materia.obtenerCalificaciones(this.#id);
            const promedio = materia.calcularPromedioEstudiante(this.#id);
            
            datos_asignaturas += `${materia.nombre}: ${notas.join(" - ")} | Promedio: ${promedio} \n`;
        });

        return "──────────────────────────────────── \n" +
               `     ${this.#id} - ${this.nombre}   \n` +
               "==================================== \n" +
               ` Edad: ${this.edad}    \n` +
               ` Direccion:             \n` +
               this.direccion +
               "==================================== \n" +
               "    Asignaturas y Calificaciones \n" +
               "==================================== \n" +
               `${datos_asignaturas}` +
               "──────────────────────────────────── \n" ;
    }

    /**
     * Método privado que genera la fecha actual en formato "dd/mm/yyyy".
     * 
     * @returns {string} - Fecha actual formateada en Español.
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

/*
    CLASE LISTA
    ───────────
    * Clase que gestiona los Estudiantes y Asginaturas, permitiendo agregar, eliminar, listar o buscar 
        los elementos que contienen estas listas.  

    * Declaro los atributos:
        - #estudiantes: Lista que contendrá todos los Estudiantes. [Array<Estudiante>]
        - #asignaturas: Lista que contendrá todas las Asignaturas. [Array<Asignatura>]
    
    * En el constructor:
        - Lo que hago es inicializar las listas como arrays vacíos.
    
    * Los Getters:
        - Declaro dos métodos Getters para las listas estudiantes y asignaturas.

    * Como métodos, creo:
        - "agregarEstudiante(alumno)": Añade un Estudiante a "this.#estudiantes". Funcionalidad:
            1º - Compruebo si el Estudiante ya se encuentra dentro.
            2º - Si está dentro, devuelvo un mensaje indicándolo.
            3º - Si no, lo añado y muestro un mensaje indicando que lo he añadido.

        - "agregarAsignatura(materia)": Añade una Asignatura a "this.#asignaturas". Su funcionalidad es la
            misma que la del anterior método, pero con Asignatura.

        - "eliminarEstudiante(alumno)": Elimina un Estudiante de "this.#estudiantes". Funcionalidad:
            1º - Busco la posición en "this.#estudiantes" del alumno que paso por parámetros.
            2º - Si la posición es !== -1, el Estudiante está en la lista. Se elimina el alumno de "this.#estudiantes"
                y se guarda el número del ID en la variable constante de la clase Estudiante, "id_Disponibles". 
            3º - Si es eliminado, mostrarar un mensaje indicándolo, y si no es eliminado, se indicara con un 
                mensaje también.

        - "eliminarAsignatura(materia)": Elimina una Asignatura de "this.#asignaturas". Su funcionalidad es la
            misma que la del anterior método, pero con Asignatura. No añade nada a "id_Disponibles".

        - "buscarEstudiante(patron)": Busca Estudiantes en "this.#estudiantes" por un patrón de su nombre.
            Funcionalidad:
            1º - Con el método ".filter", recorro todos los alumnos que están registrados en "this.#estudiantes" y
                con su nombre en minúscula, compruebo si contiene el patrón que paso por parámetros en el nombre.
                Si lo contiene, este alumno se guarda en la variable "resultado".
            2º - Compruebo que la variable "resultado" no esta vacía:
                + Si no lo está, recorre "resultado" y ejecuta para cada instacia el método de la clase Estudiante,
                    "mostrarEstudiante()".
                + Si lo está, muestra un mensaje indicando que no existen Estudiantes registrados con ese patrón.
            
        - "buscarAsignatura(patron)": Busca Asignaturas en "this.#asignaturas" por un patrón de su nombre.
            Su funcionalidad es la misma que la del anterior método, pero con Asignatura.
*/
class Lista {

    // Atributos privados
    #estudiantes;
    #asignaturas;

    /**
     * Constructor de la clase Lista.
     */
    constructor() {
        this.#estudiantes = [];
        this.#asignaturas = [];
    }

    /**
     * Getter de la clase Lista.
     * 
     * @returns {Array<Estudiante>} - Lista de Estudiantes registrados. 
     * @returns {Array<Asignatura>} - Lista de Asignaturas registradas.
     */
    get estudiantes() {
        return this.#estudiantes;
    }
    get asignaturas() {
        return this.#asignaturas;
    }

    // Metodos de la clase Lista
    /**
     * Agrega un Estudiante a "this.#estudiantes".
     * 
     * @param {Estudiante} alumno - Instancia de la clase Estudiante.
     * @returns {string} - Mensaje que indica si el Estudiante a sido añadido o no.
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
     * Agrega una Asignatura a "this.#asignaturas".
     * 
     * @param {Asignatura} materia - Instancia de la clase Asignatura. 
     * @returns {string} - Mensaje que indica si la Asignatura a sido añadido o no.
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
     * Elimina un Estudiante a "this.#estudiantes".
     * 
     * @param {Estudiante} alumno - Instancia de la clase Estudiante. 
     * @returns {string} - Mensaje que indica si el Estudiante a sido eliminado o no.
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
     * Elimina una Asignatura a "this.#asignaturas".
     * 
     * @param {Asignatura} materia - Instancia de la clase Asignatura. 
     * @returns {string} - Mensaje que indica si la Asignatura a sido eliminado o no.
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
     * Busca Estudiantes en "this.#estudiantes" por un patrón de su nombre.
     * 
     * @param {string} patron - Cadena a buscar en los nombres de los Estudiantes. 
     * @returns {string} - Cadena formateada de los Estudiantes o mensaje indicando que no sean encotrado.
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
     * Busca Asignaturas en "this.#asignaturas" por un patrón de su nombre.
     * 
     * @param {string} patron - Cadena a buscar en los nombres de las Asignaturas. 
     * @returns {string} - Cadena formateada de las Asignaturas o mensaje indicando que no sean encotrado.
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
}

/*
    ┌─────────────────────────────────┐
    │ C Ó D I G O   P R I N C I P A L │
    └─────────────────────────────────┘
    * En esta sección se encuentra el código principal que se ejecuta al cargar el srcipt.
*/
/*
    AÑADIR DATOS
    ────────────
    * Aqui añado datos para probar la funcionalidades de las clases, sin la necesidad de crear todo el
        rato Estudiantes, Asignaturas, etc.
*/
// Creacion de Direcciones
const dir1 = new Direccion("Calle Una", 1, 0, 10000, "Granada", "Pulianas");
const dir2 = new Direccion("Calle Dos", 2, 1, 20000, "Granada", "Pulianas");
const dir3 = new Direccion("Calle Tres", 3, 2, 30000, "Granada", "Pulianas");
const dir4 = new Direccion("Calle Cuatro", 4, 3, 40000, "Granada", "Pulianas");
const dir5 = new Direccion("Calle Cinco", 5, 4, 50000, "Granada", "Pulianas");
const dir6 = new Direccion("Calle Seis", 6, 5, 60000, "Granada", "Pulianas");

// Creacion de Asignaturas
const DAWEB = new Asignatura("DAWEB");
const DWESE = new Asignatura("DWESE");
const DWECL = new Asignatura("DWECL");
const DIWEB = new Asignatura("DIWEB");
const IAB = new Asignatura("IAB");

// Creacion de Estudiantes
const armando = new Estudiante("Armando Vaquero",23,dir1);
const antonio = new Estudiante("Antonio Fernandez",31,dir2);
const marcos = new Estudiante("Marcos Pineda",22,dir3);
const andrea = new Estudiante("Andrea Lopez",21,dir4);
const claudia = new Estudiante("Claudia Perez",26,dir5);
const jose = new Estudiante("Jose Campos",28,dir6);

// Creacion de Listas
const lista = new Lista();
lista.agregarEstudiante(armando);
lista.agregarEstudiante(antonio);
lista.agregarEstudiante(marcos);
lista.agregarEstudiante(andrea);
lista.agregarEstudiante(claudia);
lista.agregarEstudiante(jose);

lista.agregarAsignatura(DAWEB);
lista.agregarAsignatura(DWESE);
lista.agregarAsignatura(DWECL);
lista.agregarAsignatura(DIWEB);
lista.agregarAsignatura(IAB);

// Matriculaciones
armando.matricular(DAWEB, DWESE, IAB);
antonio.matricular(DAWEB, DWESE, IAB);
marcos.matricular(DWECL, DIWEB, IAB);
andrea.matricular(DWECL, DIWEB, IAB);
claudia.matricular(DWESE, DAWEB, IAB);
jose.matricular(DWESE, DWECL, IAB);

// Desmatriculaciones
armando.desmatricular(IAB);
antonio.desmatricular(DWESE);
marcos.desmatricular(DWECL);
andrea.desmatricular(DIWEB);
claudia.desmatricular(DAWEB);
jose.desmatricular(IAB);

// Añadir Calificaciones
armando.agregarCalificacion(DAWEB, 7.5);
armando.agregarCalificacion(DAWEB, 9);
armando.agregarCalificacion(DWESE, 10);

antonio.agregarCalificacion(DAWEB, 8);
antonio.agregarCalificacion(IAB, 6);
antonio.agregarCalificacion(IAB, 9);

marcos.agregarCalificacion(DIWEB, 10);
marcos.agregarCalificacion(DIWEB, 9);

andrea.agregarCalificacion(DWECL, 6);
andrea.agregarCalificacion(DWECL, 8);

claudia.agregarCalificacion(DWESE, 10);
claudia.agregarCalificacion(IAB, 7);
claudia.agregarCalificacion(IAB, 9);

jose.agregarCalificacion(DWECL, 4);
jose.agregarCalificacion(DWECL, 8);

/*
    FUNCIONES DEL MENÚ
    ──────────────────
    * Aqui creo las funciones principales que son la estructura principal del proyecto. Se crean diferentes
        menús en los que se pueden realizar operaciones relacionadas con Estudiantes y Asignaturas.
    
    * Funciones Principales:
        - `menuPrincipal()`: Punto de entrada principal que permite seleccionar una acción en relación con
            los Estudiantes y las Asignaturas. Funcionalidad: 
            1º - Genero un bucle que finalizara cuando se indique con una opción del menú.
            2º - Muestro el menú. Ejemplo:
                "Menú Principal:
                 1. Agregar Estudiante / Asignatura
                 2. Eliminar Estudiante / Asignatura
                 3. Mostrar Estudiantes / Asignaturas
                 4. Matricular Estudiante
                 5. Desmatricular Estudiante
                 6. Añadir Calificacion
                 7. Mostrar Historial de un Estudiante
                 8. Buscar Estudiante / Asignatura
                 0. Salir del programa"
            3º - Pido una opción con "prompt" y está la uso en un "switch". En función de la opción que se 
                seleccione hará una cosa u otra.
            
        - `menúSecundario()`: Menú que permite seleccionar Estudiantes o Asignaturas. Usando en las opciones de
            "1. Agregar Estudiante / Asignatura" o "2. Eliminar Estudiante / Asignatura", entre otras. Ejemplo:
                "Seleccione una opcion: 
                 1. Estudiantes 
                 2. Asignaturas 
                 0. Salir"

    * Funciones Auxiliares:
        - `seleccionarEstudiante()`: Muestra una lista numerada de los Estudiantes registrados, permitiendo
            seleccionar uno para realizar operaciones con él. Usado en "2. Eliminar Estudiante / Asignatura",
            por ejemplo.

        - `seleccionarAsignatura()`: Muestra una lista numerada de las Asignaturas registradas, permitiendo
            seleccionar una para realizar operaciones con ella. Usado en "2. Eliminar Estudiante / Asignatura",
            por ejemplo.
        
        - `mostrarAsignaturasMatricula(posicion_Est)`: Con el valor que se pasa por parámetros se obtiene el
            alumno. De esta manera, permite ver todas las Asignaturas que están registradas y al lado en cuales
            el alumno está matriculado. Usado en "4. Matricular Estudiante".
        
        - `mostrarAsignaturasEstudiante(posicion_Est)`: Con el valor que se pasa por parámetros se obtiene el
            alumno. De esta manera, permite mostrar solo las asignaturas en las que se encuentra matriculado este.
            Usado en "5. Desmatricular Estudiante".
        
    * Lógica de Iteracción:
        El funcionamiento del proyecto es el siguiente:
                Se muestra el menú principal por consola y se piede con un "prompt" que se introduzca una 
            opción. Una vez seleccionada se seleccionara en el "switch" la opción indicada, ejecutando los procesos
            necesarios para realizar el proceso seleccionado.
                Cuando se halla completado el proceso se volvera al menú principal, de esta manera se podrá
            seleccionar otra opción o se podrá salir del programa indicando la opción de salida.
    
    * Notas:
        - Todo el sistema usa "console.log" para mostrar datos, "prompt" para recoger datos de entrada y
            "console.clear()" para limpiar la consola (para que queda algo mejor).
        - Se tiene en cuenta que el usuario, en los menús, seleccione una opción no valida, indicando a
            través de un "alert()" que ha introducido una opción no válida.
*/
/**
 * Muestra el menú secundario y recoge la opción indicada.
 * 
 * @returns {string} - La opción indicada.
 */
function menuSecundario() {
    console.log("Seleccione una opcion: \n" +
                "1. Estudiantes \n" +
                "2. Asignaturas \n" +
                "0. Salir"
    );

    return prompt("Seleccione una opcion: ");
}

/**
 * Muestra el menú de Estudiantes y recoge la opción indicada.
 * 
 * @returns {string | number} - La opción indicada.
 */
function seleccionarEstudiante() {
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
 * Muestra el menú de Asignaturas y recoge la opción indicada.
 * 
 * @returns {string | number} - La opción indicada.
 */
function seleccionarAsignatura() {
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
 * Muestra todas las Asignaturas registradas e indica en cuales está matriculado el Estudiante.
 * 
 * @param {number} posicion_Est - Índice del Estudiante en "lista.estudiantes". 
 * @returns {string | number} - La opción indicada.
 */
function mostrarAsignaturasMatricula(posicion_Est) {
    
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
 * Muestra todas las Asignaturas en las que está matriculado el Estudiante.
 * 
 * @param {number} posicion_Est - Índice del Estudiante en "lista.estudiantes".
 * @returns {string | number} - La opción indicada.
 */
function mostrarAsignaturasEstudiante(posicion_Est) {

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

/**
 * Menú Principal del Sistema.
 */
function menuPrincipal() {
    let salir = false;

    while(!salir){
        console.log( "Menú Principal: \n" +
                     "1. Agregar Estudiante / Asignatura \n" +
                     "2. Eliminar Estudiante / Asignatura \n" +
                     "3. Mostrar Estudiantes / Asignaturas \n" +
                     "4. Matricular Estudiante \n" +
                     "5. Desmatricular Estudiante \n" +
                     "6. Añadir Calificación \n" +
                     "7. Mostrar Historial de un Estudiante \n" +
                     "8. Buscar Estudiante / Asignatura \n" +
                     "0. Salir del programa" 
        );

        let opcion = prompt("Seleccione una opción: ");

        switch(opcion) {
            /*  
                Opcion 1: Agregar Estudiante / Asignatura.
                * Permite crear un Estudiante o Asignatura nuevos. Depdende de lo que se seleccione
                    en el menú secundario.
            */
            case "1":
                console.clear();

                switch(menuSecundario()) {
                    case "1":
                        console.clear();
                        console.log("Comience con la creacion del Estudiante: ")

                        const nombre_Est = prompt("Introduce el nombre del estudiante:");
                        console.log(`Nombre: ${nombre_Est}`);

                        const edad = parseInt(prompt("Introduce la edad del estudiante:"));
                        console.log(`Edad: ${edad}`);

                        const calle = prompt("Introduce la calle del estudiante:");
                        console.log(`Direccion: \n` +
                                    `  - Calle: ${calle}`);
                        
                        const numero = parseInt(prompt("Introduce el número de la dirección:"));
                        console.log(`  - Numero: ${numero}`);
                        
                        const piso = parseInt(prompt("Introduce el piso (0 si no aplica):"));
                        console.log(`  - Piso: ${piso}`);
                        
                        const cod_postal = parseInt(prompt("Introduce el código postal:"));
                        console.log(`  - Cod. Postal: ${cod_postal}`);
                        
                        const provincia = prompt("Introduce la provincia:");
                        console.log(`  - Provincia: ${provincia}`);
                        
                        const localidad = prompt("Introduce la localidad:");
                        console.log(`  - Localidad: ${localidad}`);
                         
                        try{
                            // Creo una instancia de Dirección y de Estudiante.
                            const dir_Nueva = new Direccion(calle, numero, piso, cod_postal, provincia, localidad);
                            const est_Nuevo = new Estudiante(nombre_Est, edad, dir_Nueva);

                            // Guardo al Estudiante en la Lista.
                            console.log(lista.agregarEstudiante(est_Nuevo));
                        }catch(error) {
                            console.error("Error - No se pudo crear el Estudiante: "+ error.message);
                        }
                        break;

                    case "2":
                        const nombre_Asig = prompt("Introduce el nombre de la asignatura:");
                        
                        try{
                            // Creo una instancia de Asignatura
                            const asig_Nueva = new Asignatura(nombre_Asig);

                            console.log(lista.agregarAsignatura(asig_Nueva));
                        }catch(error) {
                            console.error("Error - No se pudo crear la Asignatura: "+ error.message);
                        }
                        break;

                    case "0":
                        console.clear();
                        console.log("Vovliendo al Menú Principal ...");
                        break;

                    default:
                        console.clear();
                        alert("Error al introducir una opcion");
                        break;
                }
                break;
            /*  
                Opcion 2: Eliminar Estudiante / Asignatura.
                * Permite eliminar un Estudiante o Asignatura. Depdende de lo que se seleccione en el
                    menú secundario.
            */
            case "2":
                console.clear();

                switch(menuSecundario()) {
                    case "1":
                        const posicion_Est = seleccionarEstudiante() - 1; // Obtengo la posición.
                        if (posicion_Est > -1) {
                            const alumno = lista.estudiantes.at(posicion_Est); // Obtengo el alumno de la Lista.

                            console.clear();
                            console.log(lista.eliminarEstudiante(alumno)); // Lo elimino.

                        }else if(posicion_Est === -1) {
                            console.clear();
                            console.log("Vovliendo al Menú Principal ...");

                        }else {
                            console.log(posicion_Est);
                            alert("Error al introducir una opcion");
                        }
                        break;

                    case "2":
                        const posicion_Asig = seleccionarAsignatura() - 1;
                        if (posicion_Asig > -1) {
                            const materia = lista.asignaturas.at(posicion_Asig); // Obtengo la materia.

                            console.clear();
                            lista.eliminarAsignatura(materia);

                        }else if(posicion_Est === -1) {
                            console.clear();
                            console.log("Vovliendo al Menú Principal ...");

                        }else {
                            alert("Error al introducir una opcion");
                        }
                        break;

                    case "0":
                        console.clear();
                        console.log("Vovliendo al Menú Principal ...");
                        break;

                    default:
                        console.clear();
                        alert("Error al introducir una opcion");
                        break;
                }
                break;
            /*  
                Opcion 3: Mostrar Estudiantes / Asignaturas.
                * Permite mostrar todos los Estudiante o las Asignaturas registradas en la Lista.
                    Depdende de lo que se seleccione en el menú secundario.
            */
            case "3":
                console.clear();

                switch(menuSecundario()) {
                    case "1":
                        // Recorro "lista.estudiantes" y ejecuto para cada alumno el método "mostrarEstudiante()".
                        console.log(lista.estudiantes.map(alumno => alumno.mostrarEstudiante()).join("\n"));
                        break;

                    case "2":
                        // Recorro "lista.asignaturas" y ejecuto para cada materia el método "mostrarAsignaturas()".
                        console.log(lista.asignaturas.map(materia => materia.mostrarAsignaturas()).join("\n"));
                        break;

                    case "0":
                        console.clear();
                        console.log("Vovliendo al Menú Principal ...");
                        break;

                    default:
                        console.clear();
                        alert("Error al introducir una opcion");
                        break;
                }
                break;
             /*  
                Opcion 4: Matricular Estudiante.
                * Permite matricular a un Estudiante a una Asignatura.
            */
            case "4":
                console.clear();

                const posicion_Est = seleccionarEstudiante() - 1; // Obtengo la posición del Estudiante.
                const posicion_Asig = mostrarAsignaturasMatricula(posicion_Est) - 1; // Obtengo la posición de la Asignatura.

                if (posicion_Asig > -1 && posicion_Asig < lista.asignaturas.length) {
                    const alumno = lista.estudiantes.at(posicion_Est); // Obtengo el Estudiante.
                    const materia = lista.asignaturas.at(posicion_Asig); // Obtengo la Asignatura.

                    alumno.matricular(materia); // Hago la matriculación.  
                    console.clear();
                    console.log(`Estudiante ${alumno.nombre} Matriculado en ${materia.nombre}`);

                }else if(posicion_Asig === -1) {
                    console.clear();
                    console.log("Vovliendo al Menú Principal ...");
                }else {
                    console.clear();
                    alert("Error al introducir una opcion");
                }
                break;
            /*  
                Opcion 5: Desmatricular Estudiante.
                * Permite desmatricular a un Estudiante de una Asignatura.
            */
            case "5":
                console.clear();

                const posicion_Alumno = seleccionarEstudiante() - 1;
                const posicion_Materia = mostrarAsignaturasMatricula(posicion_Alumno) - 1;

                if (posicion_Materia > -1 && posicion_Materia < lista.asignaturas.length) {
                    const alumno = lista.estudiantes.at(posicion_Alumno);
                    const materia = lista.asignaturas.at(posicion_Materia);

                    alumno.desmatricular(materia); // Hago la desmatriculación.
                    console.clear();
                    console.log(`Estudiante ${alumno.nombre} Desmatriculado de ${materia.nombre}`);

                }else if(posicion_Materia === -1) {
                    console.clear();
                    console.log("Vovliendo al Menú Principal ...");
                }else {
                    console.clear();
                    alert("Error al introducir una opcion");
                }
                break;
            /*  
                Opcion 6: Añadir Calificación.
                * Permite añadir una calificación a un Estudiante en una Asignatura.
            */
            case "6":
                console.clear();

                const pos_Estudiante = seleccionarEstudiante() - 1;
                const pos_Materia = mostrarAsignaturasEstudiante(pos_Estudiante) - 1;

                if (pos_Materia > -1 && pos_Materia < lista.asignaturas.length) {
                    const alumno = lista.estudiantes.at(pos_Estudiante);
                    const materia = lista.asignaturas.at(pos_Materia);

                    console.log("Indica la calificacion");
                    const calificacion = parseFloat(prompt("Indica la calificación a añadir: "));

                    try{
                        materia.addCalificacion(alumno.id, calificacion); // Añado la calificación.

                        console.clear();
                        console.log(`Al Estudiante ${alumno.nombre} se le ha añadido la nota ${calificacion} en la Asignatura ${materia.nombre}`);
                    }catch(error) {
                        console.clear();
                        console.error("Error - No se pudo añadir la calificación: "+ error.message);
                    }
                    
                }else if(pos_Materia === -1) {
                    console.clear();
                    console.log("Vovliendo al Menú Principal ...");
                }else {
                    console.clear();
                    alert("Error al introducir una opcion");
                }
                break;
            /*  
                Opcion 7: Mostrar Historial de un Estudiante.
                * Permite mostrar el historial de un Estudiante.
            */
            case "7":
                console.clear();

                const pos_Est = seleccionarEstudiante() - 1;

                if (pos_Est > -1 && pos_Est < lista.estudiantes.length) {

                    console.clear();
                    const alumno = lista.estudiantes.at(pos_Est);
                    console.log(alumno.mostrarHistorial()); // Muestro el historial del Estudiante.

                }else if(pos_Est === -1) {
                    console.clear();
                    console.log("Vovliendo al Menú Principal ...");

                }else {
                    console.clear();
                    alert("Error al introducir una opcion");
                }
                break;
            /*  
                Opcion 8: Buscar Estudiante / Asignatura.
                * Permite buscar a un Estudiante o una Asignatura por un patrón de su nombre.
            */
            case "8":
                console.clear();

                switch(menuSecundario()) {
                    case "1":
                        console.clear();
                        console.log("Indica el patron de busqueda para el Estudiante");
                        const patron_Est = prompt("Introduce el patron"); // Obtengo el patrón.

                        console.clear();
                        console.log(`Los Estudiantes que coinciden con "${patron_Est}" son: \n` + 
                                    lista.buscarEstudiante(patron_Est)); // Muestro los resultados.
                        break;

                    case "2":
                        console.clear();
                        console.log("Indica el patron de busqueda para la Asignatura");
                        const patron_Asig = prompt("Introduce el patron");
                        
                        console.clear();
                        console.log(`Las Asignaturas que coninciden con "${patron_Asig}" son: \n` +
                                    lista.buscarAsignatura(patron_Asig));
                        break;

                    case "0":
                        console.clear();
                        console.log("Vovliendo al Menú Principal ...");
                        break;

                    default:
                        console.clear();
                        alert("Error al introducir una opcion");
                        break;
                }
                break;
            /*  
                Opcion 0: Salir del programa.
                * Permite salir del programa.
            */
            case "0":
                alert("Saliendo de SGAEA .......");
                salir = true;
                break;
            
            default:
                console.clear();
                alert("Error al introducir una opcion");
                break;
        }
    }
}

// Con esto comienzo el programa a ejecutarse (llamando a la funcion principal)
menuPrincipal();
console.clear();