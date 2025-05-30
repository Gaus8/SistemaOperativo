  function actualizarHora() {
  const ahora = new Date();

  const diaNombre = ahora.toLocaleString('es-ES', { weekday: 'long' });  // Día de la semana en español
  const diaNumero = ahora.getDate();  // Número del día
  const mesNombre = ahora.toLocaleString('es-ES', { month: 'short' });  // Nombre del mes en español
  const horaCompleta = ahora.toLocaleTimeString('es-ES');  // Hora en formato 24h

  document.getElementById('fecha-sistema-h2').innerHTML = 
    `${diaNombre}, ${diaNumero} de ${mesNombre}<br>${horaCompleta}`;
}
  
      setInterval(actualizarHora, 1000); // Actualiza cada segundo
  
      // Llama a la función una vez al cargar la página para mostrar la hora inmediatamente
      actualizarHora();


//Login 
function login() {
  const password = document.getElementById('password').value;

  if (password === '1234') {   // login exitoso
    window.electron.sendLoginSuccess(); // Llama a Electron para cambiar a index.html
  } else {
    alert('Contraseña incorrecta');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-login').addEventListener('click', login);
});
