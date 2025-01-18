import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {   
    entry: './src/main.js',
    output: {
        path: path.resolve(process.cwd(), 'compilado', process.env.modo),
        // Dos modos de "compilacion": desarrollo y produccion.
        // Minifying
    },
    mode: process.env.modo, // De que modo queremos que compile.

    // Plugin para generar un HTML con webpack
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Arhivo base de HTML
            filename: 'index.html', // Nombre del fichero generado
            scriptLoading: 'module', // Carga los modulos
            inject: 'body', // Inserta los scripts antes de cerrar el body
        }),
    ],
}