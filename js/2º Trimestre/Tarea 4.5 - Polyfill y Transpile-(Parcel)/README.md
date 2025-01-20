# Tarea 4.5 - Polyfill y Transpile - (Parcel)
> ---
> ## Enunciado
> Install and configure node, webpack and babel to polyfill and transpile your code so it runs in older browsers. 
>
> ---

## Documentación
En este apartado voy a documentar los pasos que he seguido para implementar **Polyfill** y **Transpile** en el proyecto usando **Parcel**:

### 1. Herramientas
Para realizar **Polyfill** y **Transpile** usando **Parcel** es necesario haber instalado y configurado previamente las herramientas (paquetes) mencionadas en la [Tarea 4.5 - Polyfill y Transpile](https://github.com/ArmVV26/DWEC_Proyecto_SGAEA/tree/main/js/2%C2%BA%20Trimestre/Tarea%204.5%20-%20Polyfill%20y%20Transpile#2-herramientas-paquetes), menos **Webpack** y sus derivados.
En este caso, vamos a usar **Parcel** que es un empaquetador del código y las dependencias del proyecto, y a diferencia de **Webpack**, esta diseñado para que funcione con configuración mínima o incluso sin configuración. Para instalarlo ponemos:
```bash
npm install --save-dev parcel
```

### 2. Configuración
Para la configuración de **Parcel**, vamos a hacer dos cosas:
1. Añadir los siguientes *scripts* al archivo `package.json`:
```json
"dev": "parcel src/index.html",
"build": "parcel src/index.html",
"limpia-parcel": "rimraf run-s .parcel-cache dist",
"generar-parcel": "run-s limpia-parcel dev build"
```
   - ***dev***: Inciará un servidor local (http://localhost:1234).
   - ***build***: Permite generar los archivos finales optimizados para producción.
   - ***limpia-parcel***: Elimina los ficheros que genera *Parcel*.
   - ***generar-parcel***: Ejecuta el script ***limpia-parcel***, ***dev*** y ***build***

2. Modificar el fichero `src/index.html` y añadir la siguiente linea en el *body*:
```html
<script type="module" src="main.js"></script>
``` 

### 3. Comprobar el resultado
Una vez tengamos todo lo anterior configurado, lo que tenemos que hacer es ejecutar el comando:
```bash
npm run generar-parcel
```
Y al ejecutar este comando, entrar en la web http://localhost:1234 y comprobar que todo funciona correctamente.

---

## Funcionamiento
Para compilar/transpilar el proyecto usando *Parcel*, es necesario seguir los siguientes pasos:
1. Descargar los archivos `jsdoc.json`, `package.json`, la carpeta `src` y `babel.config.js`.
2. Abrir carpeta donde te lo has descargado con Visual Studio Code y abrir una terminal *Bash*.
3. Ejecutar el comando:
```bash
npm install
```
Esto hará que se descarguen todas las dependencias que están indicadas en `package.json`.

4. Una vez todo descargado, ejecutar el comando:
```bash
npm run generar-parcel
```
5. Esto iniciará un servidor local (http://localhost:1234) donde podras ver tu código en funcionamiento.