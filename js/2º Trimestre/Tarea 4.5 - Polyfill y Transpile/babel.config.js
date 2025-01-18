export default {   
    presets: [
        [
            "@babel/preset-env",
            {
                targets: "> 0.25%, not dead", // Esto es para la version de navegadores que queremos que soporte.
                useBuiltIns: "usage", // Incluya solo los polyfills que necesitamos.
                corejs: 3 // Version de corejs que estamos usando.
            }
        ]
    ]
}