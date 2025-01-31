# Tarea 4.3 - JSDOC
> ---
> ## Enunciado
> Document your project code using JSDoc, following the steps outlined in class:
> 1. Install Node.js and JSDoc.
> 2. Add comments to your code using JSDoc syntax.
> 3. Create an npm script to automate JSDoc execution.
> 4. Update your GitHub repository and share the link.
>
> ---

## Documentación
En este apartado voy a documentar los pasos que he seguido para generar la documentación del proyecto con *JSDoc*.

### 1. Instalación de Node.js
1. Ir a la página oficial de [**Node.js**](https://nodejs.org/es).
2. Descargar el instalador para el SO que tengas.
3. Ejecutar el instalador y seguir las instrucciones.
4. Una vez instalado, comprobar la instalación con:
```bash
node -v
npm -v
```

### 2. Instalar Paquetes
1. Ir al directorio donde queremos que se genere el proyecto.
```bash 
cd /ruta/al/proyecto 
```

2. Generar un nuevo proyecto usando el siguiente comando:
```bash
npm init
```
Indicar un nombre al paquete, una descripción y un autor, los demás parámetros los dejamos por defecto.

3. Esto nos generará un archivo llamado `package.json` en la raíz del proyecto, donde se colocará toda la información. Además, generará una carpeta llamada `node_modules` donde se guardarán todos los paquetes que instales con *npm*.
   
4. Por último, nos quedará por instalar todos los paquetes necesarios para generar la documentación de *JSDoc*. Para ello usamos el siguiente comando:
```bash
npm install --save-dev jsdoc jsdoc-to-markdown minami npm-run-all rimraf taffydb
```
Los paquetes son:
- ***jsdoc***: Genera la documentación en HTML a partir de los comentarios *JSDoc*.
- ***jsdoc-to-markdown***: Permite interpretar los comentarios *JSDoc* hechos con *Markdown*.
- ***minami***: Tema personalizado para la documentación generada.
- ***npm-run-all***: Permite ejecutar múltiples scripts.    
- ***rimraf***: Elimina directorios y archivos de forma recursiva.
- ***taffyb***: Base de datos *JavaScript* que permite manejar datos estructurados.

### 3. Añadir Comentarios JSDoc
Una vez instalado JSDoc, además de los paquetes necesarios para el correcto funcionamiento, es momento de añadir comentarios *JSDoc* en el código del proyecto. Por ejemplo:
```js
/**
 * @function
 * @description Muestra el menú secundario y recoge la opción indicada.
 * 
 * @returns {string} La opción indicada.
 * 
 * @example
 * // Devolverá lo que el usuario introduzca.
 * // Por ejemplo: 2
 */
function menuSecundario() {
    console.log("Seleccione una opcion: \n" +
                "1. Estudiantes \n" +
                "2. Asignaturas \n" +
                "0. Salir"
    );

    return prompt("Seleccione una opcion: ");
}
``` 

### 4. Generar Documentación
Antes de generar la documentación, es necesario crear un archivo [*jsdoc.json*](https://github.com/ArmVV26/DWEC_Proyecto_SGAEA/blob/main/js/2%C2%BA%20Trimestre/Tarea%204.3%20-%20JSDOC/jsdoc.json) donde le tenemos que indicar cómo queremos que se procese el código de nuestro proyecto para generar la documentación. Su estructura es:
- En *source* se le indica qué archivos tienen que ser procesados y cuáles no.
- En *ops* se le indica el destino de la documentación que genera y cómo se procesa.
- Y por último, en *plugins* se le indican los complementos necesarios para generar la documentación.

Ahora, dentro del archivo que hemos generado antes, `package.json`, en el apartado *scripts* vamos a añadir:
```json
"doc": "npx jsdoc -c jsdoc.json",
"limpia:doc": "rimraf docs",
"generar:jsdoc": "npm-run-all limpia:doc doc"
```
- ***doc***: Generará la documentación de *JSDoc*.
- ***limpia:doc***: Borrará la carpeta y los archivos que se han generado.
- ***generar:jsdoc***: Ejecutará ambos comandos.

Teniendo todo esto configurado, ya podremos generar la documentación del proyecto con *JSDoc*. Para ello tendremos que poner el comando:
```bash
npm run todo
```
Después tendremos que entrar dentro de la carpeta `docs` y comprobar el resultado en el `index.html` generado.

---

## Funcionamiento
Para crear y compilar la documentación de JSDoc del proyecto, es necesario seguir los siguientes pasos:
1. Descargar los archivos `jsdoc.json`, `package.json` y `Tarea 4-3-Proyecto-SGAEA.js`.
2. Abrir carpeta donde te lo has descargado con *Visual Studio Code* y abrir una terminal *Bash*.
3. Ejecutar el comando:
```bash
npm install
```
Esto hará que se descarguen todas las dependencias que están indicadas en `package.json`.
4. Una vez todo descargado, ejecutar el comando:
```bash
npm run generar:jsdoc
```
5. Esto generará la carpeta `docs` donde habrá un `index.html` que tendremos que iniciar para ver la documentación.