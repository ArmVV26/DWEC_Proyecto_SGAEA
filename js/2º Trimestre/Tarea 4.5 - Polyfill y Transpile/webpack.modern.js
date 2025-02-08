import path from 'path';
import { merge } from 'webpack-merge'; // Permite combinar archivos entre webpack.common y el .modern
import common from './webpack.common.js'; // Se importa la configuración común.

export default merge(common, {
    output: {
        filename: 'bundle.modern.js', // Nombre del archivo de salida
    },
    module: { 
        rules:  [
            {
                test: /\.js$/, // Aplica esta regla a todos los archivos *.js
                exclude: /node_modules/, // Excluye a los archivos de node_modules
                use: {
                    loader: 'babel-loader', // Se usa babel para transpilar el código
                }
            },
        ],
    },
});