import { actualizarHora } from "./funciones/fecha.js";
import { formatearTiempo } from "./funciones/fecha.js";
import { segundos } from "./funciones/fecha.js";
actualizarHora();
let pausaActiva = false;

//Cronometro
const display = document.querySelector(".date-display");
const btnStart = document.querySelector(".start");
const btnReset = document.querySelector(".stop");
const btnStop = document.querySelector(".reset");
let interval;
let seconds = 0;

btnStart.addEventListener("click", () => {
  interval = setInterval(() => {
    seconds++
    let date = new Date(seconds * 1000);
    let dateStart = date.toISOString().substr(11, 8);
    display.textContent = dateStart;
  }, 1000);
})

btnReset.addEventListener("click", () => {
  clearInterval(interval);
})

btnStop.addEventListener("click", () => {
  clearInterval(interval);
  seconds = 0;
  display.textContent = "00:00:00";
})

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

btnApagar.addEventListener('click', () => {
  window.electron.apagarSO();
})

btnCerrarSesion.addEventListener('click', () => {
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

//Mostrar y Ocultar la camara

document.getElementById('btn-cam').addEventListener('click', async () => {
  if (document.querySelector('.menu-cam-timer').style.display === 'block') {
    document.querySelector('.menu-cam-timer').style.display = 'none';
  } else {
    document.querySelector('.menu-cam-timer').style.display = 'block';
  }
  camTimer();
});

setInterval(() => {
  if (segundos() === 60) {
    document.querySelector('.menu-cam-timer').style.display = 'block';
    camTimer();
  }
}, 1000);



async function camTimer() {
  const battery = await navigator.getBattery();
  document.getElementById('bateria-restante').textContent = `${(battery.level * 100).toFixed(1)}%`;
  document.getElementById('tiempo-pantalla').textContent = formatearTiempo();
}


//ABRIR Y CERRAR MENU DE EJERCICIOS
let contadorPausas = 0;
let segundosPausa = 0;
let intervaloPausa = null;

document.getElementById('btn-cam-aceptar').addEventListener('click', () => {
  const menuEjercicio = document.querySelector('.menu-ejercicio');
  const menuCamTimer = document.querySelector('.menu-cam-timer');

  const menuEjercicioVisible = menuEjercicio.style.display === 'block';
  menuEjercicio.style.display = menuEjercicioVisible ? 'none' : 'block';

  // Mostrar u ocultar cam timer
  menuCamTimer.style.display = menuCamTimer.style.display === 'block' ? 'none' : 'block';

  if (!menuEjercicioVisible) {
    // REANUDAR la pausa si estaba detenida
    if (!pausaActiva) {
      pausaActiva = true;
      intervaloPausa = setInterval(() => {
        segundosPausa += 1;
        const minutos = Math.floor(segundosPausa / 60);
        const segundos = segundosPausa % 60;

        const tiempoFormateado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        document.getElementById('tiempo-txt').innerText = tiempoFormateado;
      }, 1000);
    }

    contadorPausas += 1;
    document.getElementById('pausas-txt').innerText = contadorPausas;
  }
});





document.getElementById('btn-cam-omitir').addEventListener('click', () => {
  document.querySelector('.menu-cam-timer').style.display = 'none';
})


document.getElementById('btn-cerrar-ejercicios').addEventListener('click', () => {
  const menuEjercicio = document.querySelector('.menu-ejercicio');

  const estaVisible = menuEjercicio.style.display === 'block';
  menuEjercicio.style.display = estaVisible ? 'none' : 'block';

  if (pausaActiva) {
    clearInterval(intervaloPausa);
    pausaActiva = false; // marcar que está pausada
  }
});

