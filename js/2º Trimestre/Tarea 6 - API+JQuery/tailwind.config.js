/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js}',
  ],
  safelist: [
    'bg-pokemon-acero',
    'bg-pokemon-agua',
    'bg-pokemon-bicho',
    'bg-pokemon-dragon',
    'bg-pokemon-electrico',
    'bg-pokemon-fantasma',
    'bg-pokemon-fuego',
    'bg-pokemon-hada',
    'bg-pokemon-hielo',
    'bg-pokemon-lucha',
    'bg-pokemon-normal',
    'bg-pokemon-planta',
    'bg-pokemon-psiquico',
    'bg-pokemon-roca',
    'bg-pokemon-siniestro',
    'bg-pokemon-tierra',
    'bg-pokemon-veneno',
    'bg-pokemon-volador',
  ],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'pokemon': {
          acero: '#60A1B8',
          agua: '#2980EF',
          bicho: '#91A119',
          dragon: '#5061E1',
          electrico: '#FAC000',
          fantasma: '#704170',
          fuego: '#E62829',
          hada: '#EF71EF',
          hielo: '#3FD8FF',
          lucha: '#FF8000',
          normal: '#9FA19F',
          planta: '#3FA129',
          psiquico: '#EF4179',
          roca: '#AFA981',
          siniestro: '#50413F',
          tierra: '#915121',
          veneno: '#8F41CB',
          volador: '#81B9EF',
        },
        'custom-white-red': '#FAEFEF',
        'custom-yellow': '#FFCF5F',
        'custom-black': '#312C2C',
      },
    },
    boxShadow: {
      'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      'header': '0 10px 5px 0 rgba(0, 0, 0, 0.2)',
      'footer': '0 -5px 5px 0 rgba(0, 0, 0, 0.2)',
    }
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-bg-patterns')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FF3B30", // Color del Header
          "secondary": "#AB2720", // Color del Footer
          "neutral": "#FAEFEF", // Hover Fondo
          "neutral-content": "#181818", // Letra Active 
          "base-content": "#FAEFEF", // Letra 
        }
      },
    ],
  },
}