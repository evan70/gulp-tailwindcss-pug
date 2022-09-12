//import "@fortawesome/fontawesome-free/js/all.js";
//import tailwind from '@tailwindcss'
//import persist from '@alpinejs/persist'
import Tailwind from './tailwind/tailwind.js'
console.log('TailWindJS is loaded from main.js') // !DEBUG
import Alpine from 'alpinejs'
/*import money from 'alpinejs-money'
import tash from 'alpinejs-tash'*/
console.log('Alpine JS is loaded from main.js') // !DEBUG

window.Alpine = Alpine;
Alpine.start();
