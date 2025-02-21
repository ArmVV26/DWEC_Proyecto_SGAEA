// Variables limite, indice y bandera para indicar si se esta cargando
const limite = 20;
let indice = 0;
let cargado = false

// Array asociativo con los colores de los tipos de Pokemon
const coloresTipos = {
    acero: 'pokemon-acero',
    agua: 'pokemon-agua',
    bicho: 'pokemon-bicho',
    dragon: 'pokemon-dragon',
    eléctrico: 'pokemon-electrico',
    fantasma: 'pokemon-fantasma',
    fuego: 'pokemon-fuego',
    hada: 'pokemon-hada',
    hielo: 'pokemon-hielo',
    lucha: 'pokemon-lucha',
    normal: 'pokemon-normal',
    planta: 'pokemon-planta',
    psíquico: 'pokemon-psiquico',
    roca: 'pokemon-roca',
    siniestro: 'pokemon-siniestro',
    tierra: 'pokemon-tierra',
    veneno: 'pokemon-veneno',
    volador: 'pokemon-volador',
}

/**
 * @function
 * @description Carga la lista de Pokemons desde la API y muestra sus detalles
 * 
 * @returns {Promise<void>} Promesa vacia
 */
async function cargarPokemons() {
    if (cargado) return; // Si se esta cargando, no se hace nada
    cargado = true;

    try {
        // Obtenemos la lista de Pokemons desde la API y comprobamos si la respuesta es correcta
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${indice}`);
        if (!respuesta.ok) {
            throw new Error("No se pudo obtener la lista de Pokemon");
        }
        // Convertimos la respuesta a JSON
        const data = await respuesta.json();

        // Recorremos la lista de Pokemons y obtenemos sus detalles
        for (const pokemon of data.results) {
            try {
                // Recogemos los detalles de cada Pokemon y comprobamos si la respuesta es correcta
                const respuestaDetalle = await fetch(pokemon.url);
                if (!respuestaDetalle.ok) {
                    throw new Error("No se pudo obtener los detalles de un Pokemon");
                }
                // Convertimos la respuesta a JSON
                const detalle = await respuestaDetalle.json();
        
                // Extraemos el id, el nombre, el/los tipo/s (en Español) y la URL de la imagen de cada Pokemon
                const id = detalle.id;
                const nombre = detalle.name.charAt(0).toUpperCase() + String(detalle.name).slice(1);
                const tipos = await obtenerTipoEsp(detalle.types);
                const imagenUrl = detalle.sprites.front_default;
                const peso = detalle.weight;
        
                // LLamo a la funcion para crear y agregar la tarjeta de Pokemon al DOM
                crearTarjetaPokemon(id, nombre, tipos, imagenUrl, peso);

            // Capturamos y mostramos por consola cualquier error que se produzca al obtener los detalles de un Pokemon
            } catch (errorDetalle) {
                console.error("Error obteniendo detalles de un Pokemon:", errorDetalle);
            }
        }

        // Actualizamos el indice para la próxima carga
        console.log("Antes: ", indice);
        indice += limite;
        console.log("Despues: ", indice);
        
    // Capturamos y mostramos por consola cualquier error que se produzca al cargar la lista de Pokemon
    } catch (error) {
        console.error("Error cargando la lista de Pokemon:", error);
    
    } finally {
        cargado = false;
    }
}

/**
 * @function
 * @description Obtiene los tipos de un Pokemon en Español
 * 
 * @param {Array} urlTipo Array con las URL de los tipos de un Pokemon
 * 
 * @returns {Promise<string>} Promesa con los tipos de un Pokemon en Español
 */
async function obtenerTipoEsp(urlTipo) {
    // Array para almacenar los tipos de un Pokemon en Español
    let tipoEsp = [];

    // Recorremos el array de URL de los tipos de un Pokemon y obtenemos los tipos en Español
    for (let i=0; i<urlTipo.length; i++) {
        const respuestTipo = await fetch(urlTipo[i].type.url)
        if (!respuestTipo.ok) {
            throw new Error("No se pudo obtener los detalles de un Pokemon");
        }
        const dataTipo = await respuestTipo.json();

        // Agregamos el tipo en Español al array (Siempre esta en la 5ª posicion)
        tipoEsp.push(dataTipo.names[5].name);
    }

    // Devuelvo los tipos de un Pokemon en Español separados por comas
    return tipoEsp;
}

/**
 * @function
 * @description Crea y agrega una tarjeta de Pokemon al DOM
 * 
 * @param {number} id ID del Pokemon
 * @param {string} nombre Nombre del Pokemon
 * @param {string} tipos Tipo/s del Pokemon
 * @param {string} imagenUrl URL de la imagen del Pokemon 
 * @param {number} peso Peso del Pokemon
 */
function crearTarjetaPokemon(id, nombre, tipos, imagenUrl, peso) {
    // Creo la tarjeta de Pokemon
    const tarjeta = document.createElement("article");
    
    // Agrego la clase "tarjeta" a la tarjeta
    tarjeta.classList.add("tarjeta");
    tarjeta.classList.add("efecto-tarjeta");

    // Agrego los detalles del Pokemon a la tarjeta
    tarjeta.innerHTML = `
        <figure>
            <img src="${imagenUrl}" alt="${nombre}">
        </figure>
        <section>
            <article class="nombre-id">
                <h1>${nombre}</h1>
                <h2>Nº. ${id}</h2>
            </article>

            <article class="tipos">
                ${tipos.map(tipo => `<p class="bg-${coloresTipos[tipo.toLowerCase()]}">${tipo}</p>`).join('')}
            </article>

            <article class="peso">
                <p>${peso} hg</p>
            </article>
        </section>
    `;

    // Agrego la tarjeta al contenedor de tarjetas
    document.getElementById("contenedor-tarjetas").appendChild(tarjeta);
}

// Evento que se dispara cuando se hace scroll en la pagina
const mostrarMas = () => {    
    // Si el scroll llega al final de la página, cargo más Pokemons
    if (document.body.scrollHeight - window.innerHeight === window.scrollY) {
        cargarPokemons();
    }
}

window.addEventListener('scroll', mostrarMas);
  
// Comineza la carga de la lista de Pokemons
cargarPokemons();