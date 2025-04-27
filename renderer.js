import { actualizarHora } from "./funciones/fecha.js";

actualizarHora();

const btnInicio = document.getElementById('btn-logo');
const menu = document.querySelector('.menu-desplegable');

btnInicio.addEventListener('click', () =>{
  let display = menu.style.display === 'none' ? 'block' : 'none';
  menu.style.display = display;
})

const btnChrome = document.getElementById('btn-chrome');
const btnBlock = document.getElementById('btn-block');  
const btnTerminal = document.getElementById('btn-terminal');
const btnCalc = document.getElementById('btn-calculadora');


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

btnCalc.addEventListener('click', () => {
  window.electron.abrirCalculadora();
  console.log('Intentando abrir Calcualadora');
});

