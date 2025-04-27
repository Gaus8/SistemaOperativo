import { actualizarHora } from "./funciones/fecha.js";

actualizarHora();

const btnChrome = document.getElementById('btn-chrome');

btnChrome.addEventListener('click', () => {
  window.electron.abrirChromePortable();
  console.log('Intentando abrir Chrome Portable');
});