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

// Creacion de las Direcciones.
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
let lista = new Lista();

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

// Exportamos la lista para que app.js pueda acceder a ella.
export { lista };

/*
    MANEJO DE EVENTOS Y MODIFICAR EL DOM
    ────────────────────────────────────
    * En esta sección se definen los eventos y funciones que se ejecutan al interactuar con la interfaz.
    * Se definen las funciones que se encargan de modificar el DOM.
*/
// Importo las funciones que se encargan de modificar el DOM.
import {
    menuSecundario,
    matricularEstudiante,
    desmatricularEstudiante,
    calificarEstudiante,
    mostrarRegistro,
    guardarDatos,
    cargarDatos
} from "./app.js";

// Referencias a los elementos del DOM.
const agregar = document.getElementById("agregar");
const eliminar = document.getElementById("eliminar");
const mostrar = document.getElementById("mostrar");
const matricular = document.getElementById("matricular");
const desmatricular = document.getElementById("desmatricular");
const calificacion = document.getElementById("calificacion");
const registro = document.getElementById("registro");
const buscar = document.getElementById("buscar");

/*
    EVENTOS
    
    * En esta sección se definen los eventos que se ejecutan al interactuar con la interfaz (botones del menú).
*/
// Opcion 1: Agregar Estudiante / Asignatura.
agregar.addEventListener("click", () => menuSecundario("agregar"));
// Opcion 2: Eliminar Estudiante / Asignatura.
eliminar.addEventListener("click", () => menuSecundario("eliminar"));
// Opcion 3: Mostrar Estudiantes / Asignaturas.
mostrar.addEventListener("click", () => menuSecundario("mostrar"));
// Opcion 4: Matricular Estudiante.
matricular.addEventListener("click", () => matricularEstudiante());
// Opcion 5: Desmatricular Estudiante.
desmatricular.addEventListener("click", () => desmatricularEstudiante());
// Opcion 6: Añadir Calificación.
calificacion.addEventListener("click", () => calificarEstudiante());
// Opcion 7: Mostrar Historial de un Estudiante.
registro.addEventListener("click", () => mostrarRegistro());
// Opcion 8: Buscar Estudiante / Asignatura.
buscar.addEventListener("click", () => menuSecundario("buscar"));

/*
    GUARDAR Y CARGAR DATOS
    ──────────────────────
    * Se guardan los datos en el LocalStorage al cargar la página y al modificar la Lista.
    * Se cargan los datos del LocalStorage al cargar la página.
*/
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("estudiantes") || !localStorage.getItem("asignaturas")) {
        guardarDatos();
    } else {
        cargarDatos();
    }
});