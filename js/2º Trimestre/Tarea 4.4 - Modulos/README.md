# Tarea 4.4 - Modulos
> ---
> ## Enunciado
> Organize your project into modules while ensuring the program continues to work, following the guidelines covered in class. 
>
> ---

## Documentación
En este apartado voy a documentar los pasos que he seguido para separar el código en módulos:

### 1. Identificar Estructura
Lo primero que hay que hacer es identificar qué partes pueden dividirse en módulos En mi proyecto es sencillo identificar qué partes deben de ir separadas por módulos:
- Cada clase (`Asignatura`, `Direccion`, `Estudiante`, `Lista` y `Persona`) irá separada en sus respectivos módulos.
- Todas las funciones, menos la principal (`menuPrincipal`), irán también separadas en un módulo.
- Y un módulo `main` que contendrá el código principal.

### 2. Crear Módulos
1. Crear una carpeta llamada `src` donde guardaremos los módulos y el `main.js`.
2. Creamos un módulo para cada clase (`Asignaturas.js`, `Direccion.js`, `Estudiante.js`, `Lista.js`, `Menus.js`), otro módulo para las funciones (`Menus.js`) y otro para el main (`main.js`).
3. Para exportar usamos:
```js
export class Asignatura{
    // Contenido
}
```
4. Y para importar:
```js
import { Asignatura } from "./Asignatura.js";
```

### 3. Comprobar Funcionalidad
Para comprobar que el proyecto sigue funcionando, no se podría hacer directamente asociando en el `index.html` el módulo `main.js`:
```html
<script type="module" src="src/main.js"></script>
```
Y después abrir el `index.html`, ya que los navegadores modernos tienen restricciones de seguridad (*CORS*) que tratan las rutas relativas de módulos como solicitudes a diferentes orígenes.

Por lo tanto, para comprobar que sigue funcionando de forma correcta, el proyecto sería necesario hacer uso de un servidor local. Para ello hay que hacer lo siguiente:
1. Instalar el servidor local usando el comando:
```bash
npm install -g live-server
```
2. He iniciar el servidor usando el comando:
```bash
live-server
```

Esto creará un servidor local y se nos abrirá una pestaña en nuestro navegador predeterminado donde se estará ejecutando el script `main.js` y los módulos importados.


### 4. Generar Documentacion JSDoc
Para generar la documentación, habría que seguir los pasos de la [Tarea 4.3 - JSDOC](https://github.com/ArmVV26/DWEC_Proyecto_SGAEA/tree/main/js/2%C2%BA%20Trimestre/Tarea%204.3%20-%20JSDOC#documentaci%C3%B3n).
Pero en el archivo `jsdoc.json`, en el apartado *include*, hay que poner la carpeta `src`, que es donde se encuentran todos los módulos del proyecto.

---

## Funcionamiento
Para crear y compilar la documentación de JSDoc del proyecto, es necesario seguir los siguientes pasos:
1. Descargar los archivos `jsdoc.json`, `package.json` y la carpeta `src`.
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