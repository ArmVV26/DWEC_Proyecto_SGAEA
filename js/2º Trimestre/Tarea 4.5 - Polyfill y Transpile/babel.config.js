export default {   
    presets: [
        [
            "@babel/preset-env",
            {
                // Esto es para la version de navegadores que queremos que soporte.
                targets: {
                   chrome: "63",
                   firefox: "60",
                   safari: "12",
                   ie: "11" 
                },
                useBuiltIns: "usage", // Incluya solo los polyfills que necesitamos.
                corejs: 3 // Version de corejs que estamos usando.
            }
        ]
    ]
}