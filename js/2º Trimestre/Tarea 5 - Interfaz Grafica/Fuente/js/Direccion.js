/**
 * @class Direccion
 * Clase que define los aspectos de la dirección de una persona.
 * 
 * > ---
 * > ### Atributos: 
 * > - `#calle`: Nombre de la calle. [String]
 * > - `#numero`: Numero de la casa o el bloque. [Number]
 * > - `#piso`: Piso del bloque, si es el caso. [Number]
 * > - `#cod_postal`: Codigo postal de la localidad donde viva. [Number]
 * > - `#provincia`: Nombre de la provincia. [String]
 * > - `#localidad`: Nombre de la localidad. [String]
 * > 
 * > ### Constructor:
 * > - Asigno los valores que se pasan en el constructor con sus respectivos atributos.
 * > - En el caso de el numero y del piso, compruebo que sea un número positivo y sin decimales. Si no, le asigno el valor predeterminado, 0.
 * > - Tambien compruebo que el código postal sea de 5 dígitos. Si no, le asigno el valor predeterminado 0.
 * > 
 * > ### Métodos:
 * > - `mostrarDireccion()`: Sirve para mostrar todos los valores de la dirección.
 * > ---
 */
export class Direccion{

    // Atributos privados
    #calle;
    #numero;
    #piso;
    #cod_postal;
    #provincia;
    #localidad;

    /**
     * Constructor de la clase Direccion que crea una instancia de esta.
     * 
     * @param {string} calle - Nombre de la calle.
     * @param {number} numero - Número de la casa o bloque.
     * @param {number} piso - Número del piso (0 si no aplica).
     * @param {number} cod_postal - Código postal (5 dígitos).
     * @param {string} provincia - Nombre de la provincia.
     * @param {string} localidad - Nombre de la localidad.
     * 
     * @example
     * // Crear una instancia de Dirección
     * const direccion = new Direccion("Avenida Andalucia", 45, 3, 18010, "Granada", "Granada");
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
     * @function
     * @description Retorna los datos de la Direccion en un objeto formateado.
     * 
     * @returns {Object} Un objeto con los datos de la Dirección.
     * 
     * @example
     * // Devuelve un objeto con los datos de la Asignatura formateados:
     * // {
     * //   calle: "Una calle",
     * //   numero: 30,
     * //   piso: 1,
     * //   codpostal: 18010,
     * //   provincia: "Granada",
     * //   localidad: "Granada"
     * // }
     */
    mostrarDireccion() {
        return {
            calle: this.#calle,
            numero:  this.#numero,
            piso:  this.#piso,
            codpostal:  this.#cod_postal,
            provincia:  this.#provincia,
            localidad:  this.#localidad,
        }
    }
}