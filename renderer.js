import { actualizarHora } from "./funciones/fecha.js";

actualizarHora();
//Variables de DOm
const btnPower = document.getElementById('btn-power');
const menuApagar = document.querySelector('.menu-apagar');
const btnInicio = document.getElementById('btn-logo');
const menu = document.querySelector('.menu-desplegable');
//APAGAR,CERRAR SESION, SUSPENDER
const btnApagar = document.getElementById('btn-apagar');
const btnCerrarSesion = document.getElementById('btn-cerrar-sesion')

//Variables de iconos
const btnChrome = document.getElementById('btn-chrome');
const btnBlock = document.getElementById('btn-block');  
const btnTerminal = document.getElementById('btn-terminal');
const btnCalc = document.getElementById('btn-calculadora');

//METODOS PARA OCULTAR DIVS

btnInicio.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});

btnPower.addEventListener('click', () => {
  if (menuApagar.style.display === 'block') {
    menuApagar.style.display = 'none';
  } else {
    menuApagar.style.display = 'block';
  }
});

btnApagar.addEventListener('click', () =>{
  window.electron.apagarSO();
})

btnCerrarSesion.addEventListener('click', () =>{
  window.electron.cerrarSO();
})

//METODOS PARA INVOCAR ELEMENTOS

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

