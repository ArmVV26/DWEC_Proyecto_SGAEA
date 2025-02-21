# Proyecto_JQuery
> [!NOTE]
> ## Descripción del Repositorio
> Este repositorio contiene el proyecto **JQuery**, desarrollado para la asignatura **Desarrollo Web en Entorno Cliente** como parte del curso de **2º DAW**.
>
> El objetivo del proyecto es desarrollar dos webs:
> - Una estilada con **TailWindCSS**, que muestra el contenido obtenido desde una *API*, con **JavaScript** normal.
> - Otra también estilada con **TailWindCSS** y mostrando el cotenido de una *API*, pero con **JQuery**.
>
> [Enlace Web](https://armvv26.github.io/Proyecto_JQuery/src/html/index.html)
> 
> Creado por: **Armando Vaquero Vargas**

## Índice
- [Proyecto\_JQuery](#proyecto_jquery)
  - [Índice](#índice)
  - [Documentación](#documentación)
  - [1. Estructura](#1-estructura)
  - [2. TailWindCSS](#2-tailwindcss)
    - [2.1. Configurar Node](#21-configurar-node)
    - [2.2. Instalar TailWindCSS y Daisyui](#22-instalar-tailwindcss-y-daisyui)
    - [2.3. Configurar TailWindCSS](#23-configurar-tailwindcss)
    - [2.4. Configuración del archivo CSS](#24-configuración-del-archivo-css)
    - [2.5. Compilar TailWindCSS](#25-compilar-tailwindcss)
  - [3. Configurar API en JavaScript](#3-configurar-api-en-javascript)
    - [3.1. Funciones](#31-funciones)
      - [***cargarPokemons()***](#cargarpokemons)
      - [***crearTarjetaPokemon(id, nombre, tipos, imagenUrl, peso)***](#creartarjetapokemonid-nombre-tipos-imagenurl-peso)
      - [***mostrarMas()***](#mostrarmas)
      - [***obtenerTipoEsp(urlTipo)***](#obtenertipoespurltipo)
    - [3.2. Diferencias en la Asincronía](#32-diferencias-en-la-asincronía)
      - [JavaScript Nativo](#javascript-nativo)
      - [JQuery](#jquery)
  - [4. Configuración y Compilación de JQuery](#4-configuración-y-compilación-de-jquery)
    - [4.1. Instalar JQuery y Parcel](#41-instalar-jquery-y-parcel)
    - [4.2. Importar JQuery en JS](#42-importar-jquery-en-js)
    - [4.3. Incluir JQuery en el HTML](#43-incluir-jquery-en-el-html)
    - [4.4. Configurar los Scripts](#44-configurar-los-scripts)
    - [4.5. Ejecutar el Proyecto](#45-ejecutar-el-proyecto)
  - [Ejecutar el Proyecto](#ejecutar-el-proyecto)

## Documentación
En este apartado se describe: la estructura del proyecto, el proceso para estilizar con **TailWindCSS** y el proceso para llamar a la API. Por último, se indicará cómo ejecutar el proyecto y algunas capturas de este.

## 1. Estructura
El proyecto está estructurado de la siguiente manera:
- `src/`: Directorio donde se encuentran todos los ficheros *html*, *css*, *js* y *img*. Dentro de este se encuentran los ficheros:
    - `css/`: Contiene los ficheros ***entrada.css*** y ***salida.css***.
    - `html`: Contiene los dos ficheros *html*: ***index.html*** (con el código **JS** normal asociado) y ***jquery.html*** (con el código **JQuery** asociado).
    - `img/`: Contiene la imagen del logotipo y una imagen para el icono de la web.
    - `js/`: Contiene los dos archivos **JavaScript**, ***pokemonAPI-JQuery.js*** y ***pokemonAPI.js***.
- ***package.json***: Archivo que centraliza la configuración del entorno de desarrollo del proyecto y automatiza diferentes tareas.
- ***tailwind.config.css***: Archivo que configura ciertos aspectos de **TailWindCSS**, como variables o para añadir *plugins*.

## 2. TailWindCSS
Para configurar tu web con **TailWindCSS**, es necesario hacer los siguientes pasos:

### 2.1. Configurar Node
Primero es necesario tener instalado [Node.js](https://nodejs.org/es). Una vez comprobado que lo tenemos instalado, nos vamos a la raíz del proyecto y inicializamos un nuevo proyecto:
```bash
npm init
```

### 2.2. Instalar TailWindCSS y Daisyui
En este proyecto, para configurar la web con **TailWindCSS**, he usado los siguientes complementos:
- [**Daisyui**](https://daisyui.com/): *Plugin* que añade una colección de componentes predefinidos.
- [**tailwindcss-bg-patterns**](https://github.com/thillmann/tailwindcss-bg-patterns): *Plugin* que proporciona utilidades para aplicar patrones de fondo.

Para instalar tanto **TailWindCSS** como sus *plugins*, se usa el siguiente comando:
```bash
npm install --save-dev tailwindcss@3 tailwindcss-bg-patterns daisyui
```

> [!WARNING]
> Existe una nueva version de **TailWindCSS**, la v.4. Lo que pasa es que esta versión cambia muchos aspectos respecto a la anterior. Por ejemplo:
> - El archivo ***tailwind.config.js***, ya no existe. Para configurar **TailWindCSS** se usa el archivo de configuracion del compilador (**Vite** o **PostCSS**) y el archivo ***CSS***.
> - En el archivo ***entrada.css***, hay que añadir solamente la línea `@import "tailwindcss";`.
> 
> Para ver los cambios que hay entre esta versión y las anteriores se pueden ver en el siguiente [enlace](https://tailwindcss.com/blog/tailwindcss-v4). 
>
> Y por otro lado, existe una nueva versión beta de **Daisyui**, la v.5, que esta si que es compatible con la versión v.4 de **TailWindCSS**.

### 2.3. Configurar TailWindCSS
Para configurar **TailWindCSS** es necesario usar el archivo de configuración ***tailwind.config.js***. Para generar este archivo es necesario usar el siguiente comando:
```bash
npx tailwindcss init
```

Esto genera un archivo básico con la siguiente estructura:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

La configuración que yo he implementado es la siguiente:
- Le indico la ubicación de donde tiene que buscar:
```js
content: [
    './src/**/*.{html,js}',
  ],
```
- Le indico una lista de clases que siempre tiene que incluir en el CSS final:
```js
safelist: [
    'bg-pokemon-acero',
    'bg-pokemon-agua',
    'bg-pokemon-bicho',
    'bg-pokemon-dragon',
    'bg-pokemon-electrico',
    'bg-pokemon-fantasma',
    'bg-pokemon-fuego',
    'bg-pokemon-hada',
    'bg-pokemon-hielo',
    'bg-pokemon-lucha',
    'bg-pokemon-normal',
    'bg-pokemon-planta',
    'bg-pokemon-psiquico',
    'bg-pokemon-roca',
    'bg-pokemon-siniestro',
    'bg-pokemon-tierra',
    'bg-pokemon-veneno',
    'bg-pokemon-volador',
  ],
```
- Le defino también dos fuentes, varios colores y el estilo de las sombras:
```js
theme: {
    fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
        colors: {
            'pokemon': {
                acero: '#60A1B8',
                agua: '#2980EF',
                bicho: '#91A119',
                dragon: '#5061E1',
                electrico: '#FAC000',
                fantasma: '#704170',
                fuego: '#E62829',
                hada: '#EF71EF',
                hielo: '#3FD8FF',
                lucha: '#FF8000',
                normal: '#9FA19F',
                planta: '#3FA129',
                psiquico: '#EF4179',
                roca: '#AFA981',
                siniestro: '#50413F',
                tierra: '#915121',
                veneno: '#8F41CB',
                volador: '#81B9EF',
            },
            'custom-white-red': '#FAEFEF',
            'custom-yellow': '#FFCF5F',
            'custom-black': '#312C2C',
        },
    },
    boxShadow: {
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'header': '0 10px 5px 0 rgba(0, 0, 0, 0.2)',
        'footer': '0 -5px 5px 0 rgba(0, 0, 0, 0.2)',
    }
},
``` 
- También le indico los *plugins* que voy a usar:
```js
plugins: [
    require('daisyui'),
    require('tailwindcss-bg-patterns')
],
```
- Y, por último, le modifico el color predeterminado que tiene **Daisyui**:
```js
daisyui: {
    themes: [
        {
            mytheme: {
                "primary": "#FF3B30", // Color del Header
                "secondary": "#AB2720", // Color del Footer
                "neutral": "#FAEFEF", // Hover Fondo
                "neutral-content": "#181818", // Letra Active 
                "base-content": "#FAEFEF", // Letra 
            }
        },
    ],
},
```

### 2.4. Configuración del archivo CSS
**TailWindCSS** usa un archivo **CSS** de entrada que tiene que contener las siguientes líneas:
```css
/* entrada.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

En mi proyecto, para poder mostrar las tarjetas del main con un estilo predefinido, he creado los siguientes componentes:
- ***.fondo-patron***: Aplica un patrón al fondo. Obtenido del [enlace](https://hillmann.cc/tailwindcss-bg-patterns/).
- ***.efecto-tarjeta***: Aplica un efecto de transición y escalado para las tarjetas.
- ***.tarjeta*** y sus elementos hijos: Aplica un estilo a las tarjetas que se muestran de los datos que se obtienen de la API.

> Esto me permite: 
> - Reutilizar el codigo para cada una de las tarjetas del main.
> - *@apply* me permite inyectar clases de **TailWindCSS** dentro de una regla **CSS**.
> - Con *@layer components* me asegura que los estilos se integren en la compilación de **TailWindCSS**.

Todo esto quedaría de la siguiente manera:
```css
@layer components{
    /* Patron para el fondo de la imagen de los pokemons */
    .fondo-patron {
        @apply pattern-isometric pattern-gray-300 pattern-bg-white pattern-size-16 pattern-opacity-100;
    }   

    /* Efecto de las tarjetas */
    .efecto-tarjeta {
        @apply transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 active:scale-95;
    }

    /* Estilo de las tarjetas */
    .tarjeta {
        @apply flex flex-col mt-5 overflow-hidden rounded-lg shadow-md text-base-content;
    }

    .tarjeta figure {
        @apply flex justify-center fondo-patron;
    }

    .tarjeta img {
        @apply object-contain w-32 h-32;
    }

    .tarjeta section {
        @apply text-white bg-custom-black;
    }

    .tarjeta .nombre-id {
        @apply flex items-center justify-between w-full px-4;
    }

    .tarjeta h1 {
        @apply text-xl font-bold;
    }
    
    .tarjeta h2 {
        @apply text-xl italic font-bold text-custom-yellow;
    }

    .tarjeta .tipos {
        @apply flex justify-center gap-2 py-2;
    }
    
    .tarjeta .tipos p {
        @apply px-3 py-1 rounded-lg;
    }

    .tarjeta .peso {
        @apply w-full py-2 text-right;
    }
    
    .tarjeta .peso p {
        @apply px-3 py-1 text-sm opacity-60;
    }
}
```

### 2.5. Compilar TailWindCSS
Para compilar **TailWindCSS** es necesario crear un *script* dentro del archivo ***package.json***:
```json
"vigilar:css": "npx tailwindcss -i ./src/css/entrada.css -o ./src/css/salida.css --watch",
```

Este comando compila **TailWindCSS**, toma de archivo de entrada ***entrada.css***, crea como salida ***salida.css*** y con ***--watch***, siempre está ejecutando cuando se guarda el archivo.  

> [!NOTE]
> En el ***index.html*** o el ***jquery.html***, se tiene que enlazar al archivo ***salida.css***.

## 3. Configurar API en JavaScript
La API que he usado es: [**PokAPI**](https://pokeapi.co/).
En este proyecto he implementado la obtención y visualización de datos de la API usando dos enfoques distintos de **JavaScript**:
- **JavaScript Nativo**: Haciendo uso de *fecth* y *async/await*.
- **JQuery**: Usando *$.ajax* y objetos *Deferred*.
La mayoría de funciones son comunes, menos la función de traducción de tipos (***obtenerTipoEsp***). 

### 3.1. Funciones
#### ***cargarPokemons()***
Esta función se encarga de:
- Controlar la carga de un lote de Pokémon mediante un *límite* y un *índice*.
- Evitar la carga de peticiones simultáneas haciendo uso de una bandera, *cargado*.
- Realizar una petición a la API para obtener una lista de Pokémon.
- Por cada Pokémon, hacer una petición adicional para obtener sus detalles (Id, nombre, tipos, imagen y peso).
- Llamar a ***crearTarjetaPokemon()*** para construir y añadir la tarjeta al DOM.
- Actualizar el índice para la siguiente carga.

Implementación Técnica:
- **JavaScript Nativo**: Uso *fetch* para realizar las peticiones y *await* para esperar a que cada petición se resuelva. La gestión de errores la hago mediante un *try/catch*, y el código se lee de forma secuencial gracias a *async/await*.
- **JQuery**: Uso *$.ajax()* para realizar las peticiones. Cada petición retorna un objeto *Deferred*, y uso los métodos *.done()*, *.fail()* y *.always()* para manejar la respuesta y errores. Además, se usó *.each()* para recorrer la lista y *.when()* para esperar resoluciones internas.

#### ***crearTarjetaPokemon(id, nombre, tipos, imagenUrl, peso)***
Esta función se encarga de:
- Recibir los datos de un Pokémon.
- Crear dinámicamente una tarjeta HTML que muestra la información, usando elementos semánticos y aplicando las clases definidas en CSS (*.tarjeta* y *.efecto-tarjeta*).
- Insertar la tarjeta en el contenedor del DOM.

Implementación Técnica:
- **JavaScript Nativo**: Creo el elemento *article* con *document.createElement()*, le añado las clases con *.classList.add(clase)*, defino el contenido con *.innerHTML* e inserto el contenido con *.appendChild()*.
- **JQuery**: Uso *$('\<element\>')*, *.addClass()*, *.attr()*, *.text()* y *.append()*, para crear el elemento, añadir las clases, añadir atributos, añadir texto y ensamblar la estructura HTML de la tarjeta.

#### ***mostrarMas()***
Esta función se encarga de:
- Detectar cuando el usuario llega al final de la página.
- Ejecutar la función ***cargarPokemons()***.

Implementación Técnica:
- **JavaScript Nativo**: Uso *window.addEventListener('scroll', mostrarMas)* para detectar cuando el usuario hace scroll, obtengo la altura de la página (*document.body.scrollHeight*), la altura visible de la ventana (*window.innerHeight*) y la cantidad de pixeles que el usuario ha desplazado hacia abajo (*window.scrollY*).
- **JQuery**: Uso el mismo proceso que el anterior, pero con *$(window).on("scroll", mostrarMas)*, *$(document).height()*, *$(window).height()* y *$(window).scrollTop()*

#### ***obtenerTipoEsp(urlTipo)***
Esta función se encarga de:
- Recibir un array de objetos que contiene la URL de cada tipo.
- Realizar una petición para cada URL para obtener los datos y extraer el nombre en español de cada tipo (siempre está en la 5ª posición).
- Devolver un array con los tipos traducidos.

Esta función solamente se encuentra en el archivo con **JavaScript Natvio**. Este proceso en el archivo con **JQuery** se hace usando un *mapa de traducción* y guardando en un array los tipos traducidos.

### 3.2. Diferencias en la Asincronía
#### JavaScript Nativo
- Sintaxis: Se usa *async/await* y *fetch*. Por ejemplo:
```js
async function ejemplo () {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
}
```
- Manejo de Errores: Se usa *try/catch* para capturar errores en las peticiones.
- Ventajas: Código limpio y fácil de seguir; ideal para operaciones secuenciales.

#### JQuery
- Sintaxis: Se usa *$.ajax()* para realizar las peticiones. Los métodos *.done()*, *.fail()* y *.always()* permiten gestionar el éxito o fallo de la petición. Por ejemplo:
```js
function ejemplo () {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json'
    })
    .done(function(data) {
        // Procesar data
    })
    .fail(function(error) {
        // Manejar error
    })
    .always(function() {

    });
}
```
- Manejo de Errores: Los errores se capturan en el callback de *.fail()*.
- Ventajas: Permite trabajar con el objeto *Deferred* para sincronizar múltiples peticiones.

## 4. Configuración y Compilación de JQuery
Para utilizar el fichero ***pokemonAPI-JQuery.js***, es necesario configurar y compilar **JQuery** con **Parcel**. Para ello hay que seguir los siguientes pasos:

### 4.1. Instalar JQuery y Parcel
Aparte de instalar **JQuery** y **Parcel** como un paquete en **Node**, vamos a instalar otros paquetes que nos van a ser de utilidad.
```bash
npm install --save-dev jquery parcel npm-run-all rimraf
```

### 4.2. Importar JQuery en JS
Para poder ejecutar código **JQuery** en **JS** es necesario importarlo en la primera línea del código en el fichero ***pokemonAPI-JQuery.js***:
```js
import $ from 'jquery';
```

### 4.3. Incluir JQuery en el HTML
En el archivo ***jquery.html*** incluir el script correcto:
```html
<script type="module" src="../js/pokemonAPI-JQuery.js" defer></script>
```

### 4.4. Configurar los Scripts
En el archivo ***package.json*** es necesario incluir los siguientes scripts para iniciar el servidor:
```json
"parcel:des": "parcel serve ./src/html/jquery.html --dist-dir compilado/desarrollo",
"parcel:prod": "parcel build ./src/html/jquery.html --dist-dir compilado/produccion",
"limpia:des": "rimraf compilado/desarrollo .parcel-cache",
"limpia:prod": "rimraf compilado/produccion .parcel-cache",
"dev": "run-s limpia:des parcel:des",
"prod": "run-s limpia:prod parcel:prod"
```

### 4.5. Ejecutar el Proyecto
Para iniciar el proyecto en modo desarrollo, se usa el siguiente comando.
```bash
npm run dev
```
Y para generar una versión optimizada para producción se usa.
```bash
npm run prod
```
Ambos abrirán una página en un servidor local.

---
## Ejecutar el Proyecto
Para ejecutar el proyecto se tendrían que descargar todos los archivos con `git clone 'url'`. Una vez descargados, habría que abrir una terminal y escribir el comando:
```bash
npm install
```
Y por último, ejecutar el comando:
```bash
npm run dev 
# o
npm run prod
```
