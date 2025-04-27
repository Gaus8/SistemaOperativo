import { actualizarHora } from "./funciones/fecha.js";

actualizarHora();

const btnChrome = document.getElementById('btn-chrome');

btnChrome.addEventListener('click', () => {
  // Llamamos a la función de abrir la URL desde el preload.js
  window.electron.abrirUrl();
  console.log('Intentando abrir la URL');
});
