// Imporot de la libreria JQuery
import $ from 'jquery';

// Variables limite, indice y bandera para indica si se esta cargando
const limite = 20;
let indice = 0;
let cargado = false

// Array asociativo con los colores de los tipos de Pokemon
const coloresTipos = {
    acero: 'pokemon-acero',
    agua: 'pokemon-agua',
    bicho: 'pokemon-bicho',
    dragon: 'pokemon-dragon',
    electrico: 'pokemon-electrico',
    fantasma: 'pokemon-fantasma',
    fuego: 'pokemon-fuego',
    hada: 'pokemon-hada',
    hielo: 'pokemon-hielo',
    lucha: 'pokemon-lucha',
    normal: 'pokemon-normal',
    planta: 'pokemon-planta',
    psiquico: 'pokemon-psiquico',
    roca: 'pokemon-roca',
    siniestro: 'pokemon-siniestro',
    tierra: 'pokemon-tierra',
    veneno: 'pokemon-veneno',
    volador: 'pokemon-volador',
}

// Array asociativo con la traduccion de los tipos de Pokemon
const traduccionTipos = {
    steel: 'Acero',
    water: 'Agua',
    bug: 'Bicho',
    dragon: 'Dragon',
    electric: 'Electrico',
    ghost: 'Fantasma',
    fire: 'Fuego',
    fairy: 'Hada',
    ice: 'Hielo',
    fighting: 'Lucha',
    normal: 'Normal',
    grass: 'Planta',
    psychic: 'Psiquico',
    rock: 'Roca',
    dark: 'Siniestro',
    ground: 'Tierra',
    poison: 'Veneno',
    flying: 'Volador'
}

/**
 * @function
 * @description Carga la lista de Pokemons desde la API y muestra sus detalles
 * 
 * @returns {Promise<void>} Promesa vacia
 */
function cargarPokemons() {
    if (cargado) return; // Si se esta cargando, no se hace nada
    cargado = true;

    // URL de la API de Pokemon
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${indice}`;

    // Obtengo la peticion de la lista de Pokemon directamente en formato JSON
    $.ajax({
        url: URL,
        type: 'GET',
        dataType: 'json',
    })
    // Compruebo que la peticion sea correcta
    .done(function(data) {
        
        // Recorro la lista de Pokemon y obtengo sus detalles
        $.each(data.results, function(i, pokemon) {
            // Obtengo los detalles de un Pokemon en formato JSON
            let detalle = $.ajax({
                url: pokemon.url,
                type: 'GET',
                dataType: 'json',
            })
            // Compruebo que la peticion sea correcta, recogo los datos y llamo a la funcion crearTarjetaPokemon
            .done(function(detalle){
                const id = detalle.id;
                const nombre = detalle.name.charAt(0).toUpperCase() + detalle.name.slice(1);
                
                const tipos = [];

                $.each(detalle.types, function(i, tipo) {
                    tipos.push(traduccionTipos[tipo.type.name]);
                });
                
                const imagenURL = detalle.sprites.front_default;
                const peso = detalle.weight;
                
                crearTarjetaPokemon(id, nombre, tipos, imagenURL, peso);
            })
            // Muestro un mensaje de error si no se pudieron obtener los detalles de un Pokemon
            .fail(function(errorDetalle) {
                console.error("Error al obtener los detalles de un Pokemon", errorDetalle);
            });
        });
        // Incremento el indice para obtener la siguiente lista de Pokemon
        indice += limite;
    })
    // Muestro un mensaje de error si no se pudo obtener la lista de Pokemon
    .fail(function(error) {
        console.error("Error al obtener la lista de Pokemon", error);
    })
    // Cambio el estado de la bandera cargado a false
    .always(function() {
        cargado = false;
    });
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
    let $tarjeta = $('<article>').addClass('tarjeta efecto-tarjeta');

    let $figure = $('<figure>').append($('<img>').attr({ src: imagenUrl, alt: nombre }));

    let $nombreId = $('<article>').addClass('nombre-id')
                    .append($('<h1>').text(nombre))
                    .append($('<h2>').text('Nº. ' + id));

    let $tipos = $('<article>').addClass('tipos');
    $.each(tipos, function(i, tipo) {
        $tipos.append($('<p>').addClass('bg-' + coloresTipos[tipo.toLocaleLowerCase()]).text(tipo));
    });

    let $peso = $('<artcile>').addClass('peso')
                .append($('<p>').text(peso + ' hg'));

    let $section = $('<section>')
                   .append($nombreId)
                   .append($tipos)
                   .append($peso);

    $tarjeta.append($figure).append($section);

    $('#contenedor-tarjetas').append($tarjeta);
}

// Evento para cargar mas Pokemons al hacer scroll en la pagina
function mostrarMas() {
    if ($(document).height() - $(window).height() === $(window).scrollTop()) {
      cargarPokemons();
    }
}

$(window).on("scroll", mostrarMas);

cargarPokemons();