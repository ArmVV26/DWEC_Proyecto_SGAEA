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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarEstudiantes(){
    document.getElementById("estudiante").textContent = lista.estudiantes.map(alumno => alumno.mostrarEstudiante());
}
mostrarEstudiantes();