/**
 * @file ## SISTEMA DE GESTIÓN ACADÉMICA DE ESTUDIANTES Y ASIGNATURAS (SGAEA)
 * 
 * En este proyecto se gestiona los datos académicos de estudiantes y asignaturas, proporcionando:
 * 
 * - Matriculación y desmatriculación.
 * - Cálculo de promedios de calificaciones.
 * - Búsquedas avanzadas de Estudiantes y Asignaturas. 
 * 
 * ### Autor
 * **Armando Vaquero Vargas**
 * 
 * - **Curso:** 2º DAW
 * - **Fecha:** 10/12/2024
 * - **Github:** {@link https://github.com/ArmVV26/DWEC_Proyecto_SGAEA}
 */

/*
    ┌─────────────┐
    │ C L A S E S │
    └─────────────┘
    * En esta sección se definen las clases usadas en el proyecto. Cada clase contiene sus atributos,
        constructores y métodos.
*/

import { Direccion }  from "./Direccion.js";
import { Persona } from "./Persona.js";
import { Asignatura } from "./Asignatura.js";
import { Estudiante } from "./Estudiante.js";
import { Lista } from "./Lista.js";

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

//Creacion de las Direcciones.
const dir1 = new Direccion("Calle Una", 1, 0, 10000, "Granada", "Pulianas");
const dir2 = new Direccion("Calle Dos", 2, 1, 20000, "Granada", "Pulianas");
const dir3 = new Direccion("Calle Tres", 3, 2, 30000, "Granada", "Pulianas");
const dir4 = new Direccion("Calle Cuatro", 4, 3, 40000, "Granada", "Pulianas");
const dir5 = new Direccion("Calle Cinco", 5, 4, 50000, "Granada", "Pulianas");
const dir6 = new Direccion("Calle Seis", 6, 5, 60000, "Granada", "Pulianas");

// Creación de las Asignaturas.
const DAWEB = new Asignatura("DAWEB");
const DWESE = new Asignatura("DWESE");
const DWECL = new Asignatura("DWECL");
const DIWEB = new Asignatura("DIWEB");
const IAB = new Asignatura("IAB");

// Creación de los Estudiantes.
const armando = new Estudiante("Armando Vaquero",23,dir1);
const antonio = new Estudiante("Antonio Fernandez",31,dir2);
const marcos = new Estudiante("Marcos Pineda",22,dir3);
const andrea = new Estudiante("Andrea Lopez",21,dir4);
const claudia = new Estudiante("Claudia Perez",26,dir5);
const jose = new Estudiante("Jose Campos",28,dir6);

// Creación de la Lista.
const lista = new Lista();

// Agregar Estudiantes
lista.agregarEstudiante(armando);
lista.agregarEstudiante(antonio);
lista.agregarEstudiante(marcos);
lista.agregarEstudiante(andrea);
lista.agregarEstudiante(claudia);
lista.agregarEstudiante(jose);

// Agregar Asignaturas
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
    FUNCIONES MENÚ
    ──────────────
    * Sección donde se encuentran importadas las diferentes funciones necesarias para la ejecución del código.    
*/

import {
    menuSecundario, seleccionarEstudiante, seleccionarAsignatura,
    mostrarAsignaturasMatricula, mostrarAsignaturasEstudiante 
} from "./Menus.js";

/**
 * @function
 * @description
 * Menú Principal del Sistema de Gestión Académica.
 * Este menú permite al usuario realizar las siguientes operaciones sobre los estudiantes y asignaturas:
 * - Agregar Estudiantes / Asignaturas.
 * - Eliminar Estudiantes / Asignaturas.
 * - Matricular al Estudiante.
 * - Desmatricular al Estudiante.
 * - Añadir calificaciones al Estudiante en una Asignatura.
 * - Mostrar historial del Estudiante.
 * - Buscar un Estudiante o Asignatura por un patrón.
 * 
 * 
 * @returns {void} No devuelve ningun valor.
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
            /**
             * Opcion 1: Agregar Estudiante / Asignatura.
             * Permite crear un Estudiante o Asignatura nuevos. Depdende de lo que se seleccione en el menú secundario.
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
            /**
             * Opcion 2: Eliminar Estudiante / Asignatura.
             * Permite eliminar un Estudiante o Asignatura. Depdende de lo que se seleccione en el menú secundario.
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
            /**
             * Opcion 3: Mostrar Estudiantes / Asignaturas.
             * Permite mostrar todos los Estudiante o las Asignaturas registradas en la Lista. Depdende de lo que se seleccione en el menú secundario.
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
            /**
             * Opcion 4: Matricular Estudiante.
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
            /**
             * Opcion 5: Desmatricular Estudiante.
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
            /**
             * Opcion 6: Añadir Calificación.
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
            /**
             * Opcion 7: Mostrar Historial de un Estudiante.
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
            /**
             * Opcion 8: Buscar Estudiante / Asignatura.
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
            /**
             * Opcion 0: Salir del programa.
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
// menuPrincipal();
// console.clear();