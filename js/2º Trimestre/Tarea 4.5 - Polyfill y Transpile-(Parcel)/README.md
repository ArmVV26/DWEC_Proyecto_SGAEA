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
"dev:parcel": "parcel src/index.html",
"build:parcel": "parcel src/index.html",
"limpia:parcel": "rimraf dist .parcel-cache"
```
   - ***dev:parcel***: Inciará un servidor local (http://localhost:1234).
   - ***build:parcel***: Permite generar los archivos finales optimizados para producción.
   - ***limpia:parcel***: Elimina los ficheros que genera *Parcel*.

2. Modificar el fichero `src/index.html` y añadir la siguiente linea en el *head*:
```html
<script type="module" src="main.js" defer></script>
``` 

### 3. Comprobar el resultado
Una vez tengamos todo lo anterior configurado, lo que tenemos que hacer es ejecutar los comandos:
```bash
npm run dev:parcel
npm run build:parcel
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

4. Una vez todo descargado, ejecutar los comandos:
```bash
npm run dev:parcel
npm run build:parcel
```
5. Esto iniciará un servidor local (http://localhost:1234) donde podras ver tu código en funcionamiento.