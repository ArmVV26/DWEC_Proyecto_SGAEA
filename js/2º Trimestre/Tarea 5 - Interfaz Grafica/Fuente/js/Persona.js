/**
 * @class Persona
 * Clase que sirve para poder implementar la herencia con la clase Estudiante.
 * 
 * > ---
 * > ### Atributos:
 * > - `#nombre`: Nombre de la persona. [String] 
 * > - `#edad`: Edad de la persona. [Number]
 * > - `#direccion`: Dirección de la persona. [Object]
 * >
 * > ### Constructor:
 * > - Lo primero que hago es verificar:
 * >     + Que el nombre sea válido (solo letras y espacios).
 * >     + Y que la edad sea  válida (entre 6 y 80 años).
 * > - Si son correctos los valores, le asigno los valores que paso por parámetros a los atributos.
 * > - Si no son correctos, lanzo un error indicando que el nombre o la edad no son válidos.
 * > 
 * > ### Getters:
 * > - Declaro los getters de los atributos nombre, edad y dirección. Este último, llamando al método de la clase Direccion, mostrarDireccion().
 * > ---
 */
export class Persona {

    // Atributos privados
    #nombre;
    #edad;
    #direccion;

    /**
     * Constructor de la clase Persona que crea una instancia de esta.
     * 
     * @param {string} nombre - Nombre de la Persona.
     * @param {number} edad - Edad de la Persona.
     * @param {object} direccion - Dirección de la Persona.
     * @throws {Error} Si el nombre contiene números o si la edad no es válida (entre 6 y 80).
     * 
     * @example
     * // Crear una instancia de Persona.
     * const direccion = new Direccion("Avenida Andalucia", 45, 3, 18010, "Granada", "Granada");
     * const persona = new Persona("Armando Vaquero", 23, direccion);
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
     * Obtiene el nombre de la Persona.
     * 
     * @returns {string} Nombre de la Persona.
     */
    get nombre() {
        return this.#nombre;
    }
    /**
     * Obtiene la edad de la Persona.
     * 
     * @returns {number} Edad de la Persona.
     */
    get edad() {
        return this.#edad;
    }
    /**
     * Obtiene la dirección de la Persona.
     * 
     * @returns {Objetc} Dirección de la Persona.
     */
    get direccion() {
        return this.#direccion.mostrarDireccion();
    }

}