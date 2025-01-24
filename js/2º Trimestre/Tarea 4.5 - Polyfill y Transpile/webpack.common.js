import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

export default {   
    entry: './src/main.js',
    output: {
        path: path.resolve(process.cwd(), 'compilado', process.env.modo),
        // Dos modos de "compilacion": desarrollo y produccion.
        // Minifying
    },
    mode: process.env.modo, // De que modo queremos que compile.

    // Plugin para copiar un HTML con webpack
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/index.html', to: '.' }, // Copia el index.html al directorio base (development o production)
            ],
        }),
    ],
}