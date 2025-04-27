import { actualizarHora } from "./funciones/fecha.js";

actualizarHora();

const btnChrome = document.getElementById('btn-chrome');
const btnBlock = document.getElementById('btn-block');  // Referencia al botón de "Bloc de Notas"
const btnTerminal = document.getElementById('btn-terminal');

btnBlock.addEventListener('click', () => {
  // Enviar un mensaje al proceso principal para abrir el Bloc de Notas
  window.electron.abrirBlock();
  console.log('Intentando abrir el Bloc de Notas');
});

btnChrome.addEventListener('click', () => {

  window.electron.abrirUrl();
  console.log('Intentando abrir la URL');
});

btnTerminal.addEventListener('click', () => {
  window.electron.abrirTerminal();
  console.log('Intentando abrir Terminal');
});