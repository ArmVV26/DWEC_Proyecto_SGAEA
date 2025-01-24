import path from 'path';
import { merge } from 'webpack-merge'; // Permite combinar archivos entre webpack.common y el .modern
import common from './webpack.common.js'; // Se importa la configuración común.

export default merge(common, {
    output: {
        filename: 'bundle.modern.js', // Nombre del archivo de salida
    },
});