function actualizarHora() {
  const ahora = new Date();

  const diaNombre = ahora.toLocaleString('es-ES', { weekday: 'long' });  // Día de la semana en español
  const diaNumero = ahora.getDate();  // Número del día
  const mesNombre = ahora.toLocaleString('es-ES', { month: 'short' });  // Nombre del mes en español
  const horaCompleta = ahora.toLocaleTimeString('es-ES');  // Hora en formato 24h

  document.getElementById('fecha-sistema').textContent = 
    `${diaNombre}, ${diaNumero} de ${mesNombre} - ${horaCompleta}`;
}

setInterval(actualizarHora, 1000);
actualizarHora();