export function actualizarHora() {
  const ahora = new Date();

  const diaNombre = ahora.toLocaleString('es-ES', { weekday: 'long' });  // Día de la semana en español
  const diaNumero = ahora.getDate();  // Número del día
  const mesNombre = ahora.toLocaleString('es-ES', { month: 'short' });  // Nombre del mes en español
  const horaCompleta = ahora.toLocaleTimeString('es-ES');  // Hora en formato 24h

  document.getElementById('fecha-sistema').textContent = 
    `${diaNombre}, ${diaNumero} de ${mesNombre} - ${horaCompleta}`;
}



setInterval(actualizarHora, 1000);

let segundosTranscurridos = 0;


function contarSegundos() {
  segundosTranscurridos++;
}


export function formatearTiempo() {
  const minutos = Math.floor(segundosTranscurridos / 60);
  const segundos = segundosTranscurridos % 60;

  return (minutos < 10 ? '0' : '') + minutos + ':' + 
         (segundos < 10 ? '0' : '') + segundos;
}

export function segundos (){
  return segundosTranscurridos;
}
setInterval(contarSegundos, 1000);




